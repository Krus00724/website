// One page: Home first, every project under it. The bar at the bottom follows the scroll and jumps between projects.
(function () {
  var cfg = window.KW_SITE;
  var P = cfg.projects, n = P.length;
  var secs = document.querySelectorAll('.kw-proj');
  var foot = document.querySelector('.kw-foot');
  var nameEl = document.getElementById('kw-name'), metaEl = document.getElementById('kw-meta');
  var navHome = document.getElementById('nav-home'), navWorks = document.getElementById('nav-works');
  var cur = 0, inWorks = false, ticking = false;

  function update() {
    ticking = false;
    var h = window.innerHeight;
    var on = (window.scrollY || document.documentElement.scrollTop || 0) > h * 0.6;
    var c = 0;
    for (var i = 0; i < secs.length; i++) if (secs[i].getBoundingClientRect().top <= h * 0.45) c = i;
    if (on !== inWorks) {
      inWorks = on;
      foot.classList.toggle('on', on);
      navHome.classList.toggle('is-active', !on);
      navWorks.classList.toggle('is-active', on);
    }
    if (c !== cur) {
      cur = c;
      nameEl.textContent = P[c].name;
      metaEl.textContent = P[c].meta;
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // long distances jump straight there, short ones glide
  function goTo(i, smooth) {
    var el = i < 0 ? null : secs[Math.min(i, n - 1)];
    var dist = el ? Math.abs(el.getBoundingClientRect().top) : (window.scrollY || 0);
    var behavior = smooth === false || dist > window.innerHeight * 3 ? 'auto' : 'smooth';
    if (!el) { window.scrollTo({ top: 0, behavior: behavior }); return; }
    el.scrollIntoView({ behavior: behavior, block: 'start' });
  }
  function step(d) {
    if (!inWorks) { if (d > 0) goTo(0); return; }
    goTo(Math.max(-1, cur + d));
  }

  document.getElementById('kw-prev').addEventListener('click', function () { step(-1); });
  document.getElementById('kw-next').addEventListener('click', function () { step(1); });
  navHome.addEventListener('click', function (e) { e.preventDefault(); goTo(-1); });
  navWorks.addEventListener('click', function (e) { e.preventDefault(); goTo(0); });
  window.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });

  // #works or #bleibt in the address opens at that place, also when the page comes from the Index
  function fromHash(smooth) {
    var k = '';
    try { k = decodeURIComponent((location.hash || '').slice(1)); } catch (e) {}
    if (k === 'works') { goTo(0, smooth); return; }
    for (var i = 0; i < n; i++) if (P[i].key === k) { goTo(i, smooth); return; }
  }
  window.addEventListener('hashchange', function () { fromHash(true); });
  if (location.hash.length > 1) {
    fromHash(false);
    window.addEventListener('load', function () { fromHash(false); });
  }
  update();

  // the Ballanheim coin
  var coinBox = document.getElementById('coin3d');
  if (coinBox && window.KWCoin) {
    window.KWCoin.mount(coinBox.querySelector('canvas'), {
      grain: cfg.coin.grain,
      normal: cfg.coin.normal,
      onReady: function () { coinBox.classList.add('ready'); }
    });
  }

  // the bleibt glass, with its five sodas
  var glassBox = document.getElementById('glass3d');
  if (glassBox && window.KWGlass) {
    var still = glassBox.querySelector('.still');
    var canvas = glassBox.querySelector('canvas');
    var glass = window.KWGlass.mount(canvas, {
      models: cfg.glass.models,
      env: cfg.glass.env,
      start: cfg.glass.flavours[0].slug,
      onReady: function () { glassBox.classList.add('ready'); },
      onLoading: function (v) { glassBox.classList.toggle('loading', !!v); }
    });
    var buttons = document.querySelectorAll('.kw3d-flav button');
    for (var b = 0; b < buttons.length; b++) {
      buttons[b].addEventListener('click', function (ev) {
        var btn = ev.currentTarget, slug = btn.getAttribute('data-slug'), f = null;
        for (var k = 0; k < cfg.glass.flavours.length; k++) if (cfg.glass.flavours[k].slug === slug) f = cfg.glass.flavours[k];
        if (!f || btn.getAttribute('aria-pressed') === 'true') return;
        for (var m = 0; m < buttons.length; m++) buttons[m].setAttribute('aria-pressed', String(buttons[m] === btn));
        still.src = f.still;
        still.alt = 'bleibt glass with ' + f.name + ' soda';
        canvas.setAttribute('aria-label', 'bleibt glass with ' + f.name + ' soda, an aluminium twist lid and a paper tamper strip over the lid. Drag to turn it.');
        glass.show(slug);
      });
    }
  }
})();
