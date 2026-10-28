// Works: one project at a time, switched from the bar at the bottom, the arrow keys or the address (#bleibt).
(function () {
  var cfg = window.KW_SITE;
  var P = cfg.projects, n = P.length;
  var sections = document.querySelectorAll('.kw-proj');
  var nameEl = document.getElementById('kw-name'), metaEl = document.getElementById('kw-meta');
  var cur = 0;

  function toTop() {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  }

  function show(i, opts) {
    i = ((i % n) + n) % n;
    var o = opts || {};
    for (var j = 0; j < sections.length; j++) sections[j].classList.toggle('is-cur', j === i);
    nameEl.textContent = P[i].name;
    metaEl.textContent = P[i].meta;
    cur = i;
    if (o.hash !== false) {
      try { history.replaceState(null, '', '#' + P[i].key); } catch (e) {}
    }
    if (o.top !== false) toTop();
  }

  function fromHash() {
    var k = '';
    try { k = decodeURIComponent((location.hash || '').slice(1)); } catch (e) {}
    for (var i = 0; i < n; i++) if (P[i].key === k) { if (i !== cur) show(i, { hash: false, top: false }); return; }
  }

  document.getElementById('kw-prev').addEventListener('click', function () { show(cur - 1); });
  document.getElementById('kw-next').addEventListener('click', function () { show(cur + 1); });
  window.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    if (e.key === 'ArrowRight') show(cur + 1);
    else if (e.key === 'ArrowLeft') show(cur - 1);
  });
  window.addEventListener('hashchange', fromHash);
  fromHash();

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
        var slug = ev.currentTarget.getAttribute('data-slug');
        var f = null;
        for (var k = 0; k < cfg.glass.flavours.length; k++) if (cfg.glass.flavours[k].slug === slug) f = cfg.glass.flavours[k];
        if (!f || ev.currentTarget.getAttribute('aria-pressed') === 'true') return;
        for (var m = 0; m < buttons.length; m++) buttons[m].setAttribute('aria-pressed', String(buttons[m] === ev.currentTarget));
        still.src = f.still;
        still.alt = 'bleibt glass with ' + f.name + ' soda';
        canvas.setAttribute('aria-label', 'bleibt glass with ' + f.name + ' soda, an aluminium twist lid and a paper tamper strip over the lid. Drag to turn it.');
        glass.show(slug);
      });
    }
  }
})();
