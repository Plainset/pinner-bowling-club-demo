/* Pinner Bowling Club — the only JS on the site. */
(function () {
  'use strict';

  /* ---- scroll reveal ----------------------------------------------------
     engine.css's scroll-timeline version leaves hero content at opacity 0 on
     first paint and strands elements in the last viewport part-faded (both
     measured on the Pelo build in this workspace, 2026-07-26 — see the note in
     site.css). This is the pattern the
     AGENTS.md standing rule describes: observe, but check the rect FIRST and
     show anything already on screen immediately, so nothing above the fold
     waits for an intersection change that will never come. */
  var revealables = document.querySelectorAll('[data-reveal], [data-reveal-hero]');

  function show(el) { el.classList.add('is-visible'); }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

    revealables.forEach(function (el) {
      if (inView(el)) show(el);          /* already on screen at load */
      else io.observe(el);
    });

    /* Backstop. Observer callbacks and timers are throttled hard in a
       backgrounded window — enough that this page's own Safari diagnostic
       harness could not finish inside three minutes. Content must never be
       able to sit at opacity 0 waiting for a callback that is being starved,
       so a passive scroll listener repeats the same rect test, and a final
       timeout gives up on animating and just shows everything. Either way the
       page ends up readable; the animation is the only thing at risk. */
    var pending = function () {
      return [].filter.call(revealables, function (el) {
        return !el.classList.contains('is-visible');
      });
    };
    var onScroll = function () {
      var left = pending();
      left.forEach(function (el) { if (inView(el)) show(el); });
      if (!left.length) window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    window.setTimeout(function () {
      pending().forEach(show);
      window.removeEventListener('scroll', onScroll);
    }, 8000);
  }

  /* ---- mobile nav ------------------------------------------------------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

})();
