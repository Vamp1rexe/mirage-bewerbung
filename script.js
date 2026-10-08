(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

(function () {
  var b = document.querySelector('.nav-toggle');
  var n = document.querySelector('.nav nav');
  if (!b || !n) return;
  function close() { n.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
  b.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  n.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 820) close(); });
})();
