// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s,{factory as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-logpdf@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function d(t,e,i,d){return n(t)||n(e)||n(i)||n(d)||e<=0||i<=0?NaN:r(s(t,e,i,d))}function m(t,s,d){var m;return n(t)||n(s)||n(d)||t<=0||s<=0?i(NaN):(m=e(t,s,d),function(e){if(n(e))return NaN;return r(m(e,t,s,d))})}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
