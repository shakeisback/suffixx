/* eslint-disable */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-touchevents-setclasses ! */
!(function(e, n, t) {
        function r(e, n) { return typeof e === n; }

        function o() {
            let e;
            let n;
            let t;
            let o;
            let i;
            let s;
            let a;
            for (const l in C)
                if (C.hasOwnProperty(l)) {
                    if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                        for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (o = r(n.fn, 'function') ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split('.'), a.length === 1 ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), g.push((o ? '' : 'no-') + a.join('-'));
                }
        }

        function i(e) {
            let n = _.className;
            const t = Modernizr._config.classPrefix || '';
            if (w && (n = n.baseVal), Modernizr._config.enableJSClass) {
                const r = new RegExp(`(^|\\s)${t}no-js(\\s|$)`);
                n = n.replace(r, `$1${t}js$2`);
            }
            Modernizr._config.enableClasses && (n += ` ${t}${e.join(` ${t}`)}`, w ? _.className.baseVal = n : _.className = n); } function s(e) { return e.replace(/([a-z])-([a-z])/g, (e, n, t) => n + t.toUpperCase()).replace(/^-/, ''); } function a(e, n) { return !!~(`${e}`).indexOf(n); } function l() { return typeof n.createElement !== 'function' ? n.createElement(arguments[0]) : w ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0]) : n.createElement.apply(n, arguments); } function f(e, n) { return function () { return e.apply(n, arguments); }; } function u(e, n, t) { let o; for (const i in e) if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, 'function') ? f(o, t || n) : o); return !1; } function c(e) { return e.replace(/([A-Z])/g, (e, n) => `-${n.toLowerCase()}`).replace(/^ms-/, '-ms-'); } function p(n, t, r) { let o; if ('getComputedStyle' in e) { o = getComputedStyle.call(e, n, t); const i = e.console; if (o !== null)r && (o = o.getPropertyValue(r)); else if (i) { const s = i.error ? 'error' : 'log'; i[s].call(i, 'getComputedStyle returning null, its possible modernizr test results are inaccurate'); } } else o = !t && n.currentStyle && n.currentStyle[r]; return o; } function d() { let e = n.body; return e || (e = l(w ? 'svg' : 'body'), e.fake = !0), e; } function m(e, t, r, o) { let i; let s; let a; let f; const u = 'modernizr'; const c = l('div'); const p = d(); if (parseInt(r, 10)) for (;r--;)a = l('div'), a.id = o ? o[r] : u + (r + 1), c.appendChild(a); return i = l('style'), i.type = 'text/css', i.id = `s${u}`, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), c.id = u, p.fake && (p.style.background = '', p.style.overflow = 'hidden', f = _.style.overflow, _.style.overflow = 'hidden', _.appendChild(p)), s = t(c, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : c.parentNode.removeChild(c), !!s; } function v(n, r) { let o = n.length; if ('CSS' in e && 'supports' in e.CSS) { for (;o--;) if (e.CSS.supports(c(n[o]), r)) return !0; return !1; } if ('CSSSupportsRule' in e) { for (var i = []; o--;)i.push(`(${c(n[o])}:${r})`); return i = i.join(' or '), m(`@supports (${i}) { #modernizr { position: absolute; } }`, (e) => p(e, null, 'position') == 'absolute'); } return t; } function h(e, n, o, i) { function f() { c && (delete E.style, delete E.modElem); } if (i = r(i, 'undefined') ? !1 : i, !r(o, 'undefined')) { const u = v(e, o); if (!r(u, 'undefined')) return u; } for (var c, p, d, m, h, y = ['modernizr', 'tspan', 'samp']; !E.style && y.length;)c = !0, E.modElem = l(y.shift()), E.style = E.modElem.style; for (d = e.length, p = 0; d > p; p++) if (m = e[p], h = E.style[m], a(m, '-') && (m = s(m)), E.style[m] !== t) { if (i || r(o, 'undefined')) return f(), n == 'pfx' ? m : !0; try { E.style[m] = o; } catch (g) {} if (E.style[m] != h) return f(), n == 'pfx' ? m : !0; } return f(), !1; } function y(e, n, t, o, i) { const s = e.charAt(0).toUpperCase() + e.slice(1); let a = (`${e} ${b.join(`${s} `)}${s}`).split(' '); return r(n, 'string') || r(n, 'undefined') ? h(a, n, o, i) : (a = (`${e} ${j.join(`${s} `)}${s}`).split(' '), u(a, n, t)); } var g = []; var C = []; const S = {
_version: '3.6.0',
_config: {
classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0,
},
_q: [],
on(e, n) { const t = this; setTimeout(() => { n(t[e]); }, 0); },
addTest(e, n, t) { C.push({ name: e, fn: n, options: t }); },
addAsyncTest(e) { C.push({ name: null, fn: e }); },
}; var Modernizr = function () {}; Modernizr.prototype = S, Modernizr = new Modernizr(); var _ = n.documentElement; var w = _.nodeName.toLowerCase() === 'svg'; const x = 'Moz O ms Webkit'; var b = S._config.usePrefixes ? x.split(' ') : []; S._cssomPrefixes = b; const z = function (n) { let r; const o = N.length; const i = e.CSSRule; if (typeof i === 'undefined') return t; if (!n) return !1; if (n = n.replace(/^@/, ''), r = `${n.replace(/-/g, '_').toUpperCase()}_RULE`, r in i) return `@${n}`; for (let s = 0; o > s; s++) { const a = N[s]; const l = `${a.toUpperCase()}_${r}`; if (l in i) return `@-${a.toLowerCase()}-${n}`; } return !1; }; S.atRule = z; var j = S._config.usePrefixes ? x.toLowerCase().split(' ') : []; S._domPrefixes = j; const T = { elem: l('modernizr') }; Modernizr._q.push(() => { delete T.elem; }); var E = { style: T.elem.style }; Modernizr._q.unshift(() => { delete E.style; }), S.testAllProps = y; const P = S.prefixed = function (e, n, t) { return e.indexOf('@') === 0 ? z(e) : (e.indexOf('-') != -1 && (e = s(e)), n ? y(e, n, t) : y(e, 'pfx')); }; Modernizr.addTest('objectfit', !!P('objectFit'), { aliases: ['object-fit'] }); var N = S._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', '']; S._prefixes = N; const k = S.testStyles = m; Modernizr.addTest('touchevents', () => { let t; if ('ontouchstart' in e || e.DocumentTouch && n instanceof DocumentTouch)t = !0; else { const r = ['@media (', N.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join(''); k(r, (e) => { t = e.offsetTop === 9; }); } return t; }), o(), i(g), delete S.addTest, delete S.addAsyncTest; for (let L = 0; L < Modernizr._q.length; L++)Modernizr._q[L](); e.Modernizr = Modernizr;
}(window, document));