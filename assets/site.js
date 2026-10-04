/* Albatross site: scroll animations. Everything degrades to a plain static page without JS or with reduced motion. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  function isFlat() { return reduce || innerWidth <= 900; }
  function setFlat() { root.classList.toggle('flat', isFlat()); }
  setFlat();

  // ---- wordmarks fitted to the container width (system fonts differ in width) ----
  var fits = $$('[data-fit]');
  function fit() {
    fits.forEach(function (box) {
      var layers = $$('.wm', box);
      layers.forEach(function (l) { l.style.fontSize = '100px'; });
      var w = 0;
      [].forEach.call(layers[0].children, function (c) { w += c.getBoundingClientRect().width; });
      var pn = box.parentNode, cs = getComputedStyle(pn);
      var target = pn.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      var max = box.dataset.maxvh ? innerHeight * parseFloat(box.dataset.maxvh) : 1e9;
      var fs = Math.min(100 * target / w * 0.985, max) + 'px';
      layers.forEach(function (l) { l.style.fontSize = fs; });
    });
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  // ---- reveal on scroll ----
  var els = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  var prog = $('#prog'), hdr = $('#hdr');
  var heroT = $('#heroT'), wmb = $('#wmb'), meta = $('#meta'), tagrow = $('#tagrow');
  var hs = $('#hs'), hsT = $('#hsT'), hsBar = $('#hsBar');
  var slides = $$('.slide'), n = slides.length;
  var labels = $$('#hsNav a'), navLinks = $$('nav.main a');
  var rows = $$('.row2');
  var parts = slides.map(function (s) { return { idx: $('.idx', s), shot: $('.sl-shot .shot', s), copy: $('.sl-copy', s) }; });
  var pHero = $('.p-hero'), tilts = $$('[data-tilt]');
  var ticking = false, cur = -1;

  function frame() {
    ticking = false;
    var y = scrollY, vh = innerHeight, doc = document.documentElement.scrollHeight - vh;
    if (prog) prog.style.transform = 'scaleX(' + (doc > 0 ? y / doc : 0) + ')';
    if (hdr) hdr.classList.toggle('s', y > 40);

    // home hero: fill sweeps across the wordmark
    if (heroT && wmb) {
      if (!isFlat()) {
        var hp = clamp(y / (heroT.offsetHeight - vh), 0, 1);
        wmb.style.setProperty('--p', hp.toFixed(3));
        meta.style.transform = 'translateY(' + (-hp * 30) + 'px)';
        tagrow.style.transform = 'translateY(' + (hp * 40) + 'px)';
      } else { wmb.style.setProperty('--p', 1); meta.style.transform = ''; tagrow.style.transform = ''; }
    }

    // section page hero: outline echo drifts away from the fill
    if (pHero && !reduce) {
      var pw = $('.wmb', pHero), k = clamp(y / vh, 0, 1);
      pw.style.setProperty('--px', (k * 60) + 'px');
      pw.style.setProperty('--py', (k * 40) + 'px');
    }

    // screenshots tilt flat as they arrive
    if (!reduce) tilts.forEach(function (el) {
      var r = el.getBoundingClientRect(), p = clamp((vh - r.top) / (vh * 0.75), 0, 1);
      el.style.transform = 'rotateX(' + (10 * (1 - p)) + 'deg) translateY(' + ((1 - p) * 40) + 'px)';
      el.style.opacity = (0.35 + 0.65 * p).toFixed(2);
    });

    // home: pinned horizontal sections, with a short rest on each
    if (hs && !isFlat()) {
      var r = hs.getBoundingClientRect(), s = clamp(-r.top / (hs.offsetHeight - vh), 0, 1);
      var raw = s * (n - 1), base = Math.min(Math.floor(raw), n - 1), f = clamp((raw - base - 0.22) / 0.56, 0, 1);
      var pos = base + f * f * (3 - 2 * f), sw = slides[0].offsetWidth;
      hsT.style.transform = 'translate3d(' + (-pos * sw) + 'px,0,0)';
      hsBar.style.transform = 'scaleX(' + s + ')';
      parts.forEach(function (p, i) {
        var d = i - pos, ad = Math.min(Math.abs(d), 1.2);
        p.idx.style.transform = 'translate3d(' + (d * -14) + 'vw,0,0)';
        if (p.shot) { p.shot.style.transform = 'rotateY(' + (d * -18) + 'deg) rotate(' + (d * 3) + 'deg) scale(' + (1 - ad * 0.12) + ')'; p.shot.style.opacity = (1 - ad * 0.55).toFixed(2); }
        if (p.copy) p.copy.style.opacity = (1 - ad * 0.7).toFixed(2);
      });
      var kk = Math.round(pos);
      if (kk !== cur) { cur = kk; labels.forEach(function (l, i) { l.classList.toggle('on', i === kk); }); }
    }

    // home: statement rows slide in alternately
    if (!reduce) rows.forEach(function (el) {
      var t = el.getBoundingClientRect(), p = clamp((vh * 0.98 - t.top) / (vh * 0.55), 0, 1);
      var dir = el.classList.contains('r') ? 1 : -1;
      el.style.transform = 'translate3d(' + (dir * (1 - p) * 28) + 'vw,0,0)';
      el.style.opacity = (0.2 + 0.8 * p).toFixed(2);
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', function () { setFlat(); fit(); req(); });
  frame();

  // pointer spotlight on heroes
  var spot = $('#heroS') || pHero;
  if (spot && !reduce) spot.addEventListener('pointermove', function (e) {
    var b = spot.getBoundingClientRect();
    spot.style.setProperty('--mx', (e.clientX - b.left) + 'px');
    spot.style.setProperty('--my', (e.clientY - b.top) + 'px');
  });

  // home: jump to a slide when pinned
  if (hs) {
    var goto = function (i) {
      var top = hs.getBoundingClientRect().top + scrollY, len = hs.offsetHeight - innerHeight;
      scrollTo({ top: top + (n > 1 ? i / (n - 1) : 0) * len, behavior: reduce ? 'auto' : 'smooth' });
    };
    $$('[data-go],#hsNav a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (isFlat()) return;
        e.preventDefault();
        goto(+(a.dataset.go || a.dataset.k));
      });
    });
  }
})();
