"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=o(function(k,a){
var N=require('@stdlib/stats-base-dists-frechet-logpdf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-exp/dist');function p(e,r,t,i){return u(e)||u(r)||u(t)||u(i)||r<=0||t<=0?NaN:y(N(e,r,t,i))}a.exports=p
});var q=o(function(w,v){
var x=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-frechet-logpdf/dist').factory,n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-exp/dist');function O(e,r,t){var i;if(n(e)||n(r)||n(t)||e<=0||r<=0)return x(NaN);return i=g(e,r,t),d;function d(f){return n(f)?NaN:F(i(f,e,r,t))}}v.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=c(),b=q();R(s,"factory",b);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
