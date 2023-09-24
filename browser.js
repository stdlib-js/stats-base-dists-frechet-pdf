// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var N=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor;function M(r){return R(r)===r}function Z(r){return M(r/2)}function X(r){return Z(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,cr=J,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Nr={uint16:hr,uint8:wr};(_r=new Nr.uint16(1))[0]=4660;var Er,Ur,Ir=52===new Nr.uint8(_r.buffer)[0];!0===Ir?(Er=1,Ur=0):(Er=0,Ur=1);var Sr={HIGH:Er,LOW:Ur},xr=new yr(1),kr=new cr(xr.buffer),Fr=Sr.HIGH,jr=Sr.LOW;function Tr(r,e,n,t){return xr[0]=r,e[t]=kr[Fr],e[t+n]=kr[jr],e}function Or(r){return Tr(r,[0,0],1,0)}L(Or,"assign",Tr);var Vr=!0===Ir?0:1,$r=new yr(1),Gr=new cr($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=2147483647,Rr=!0===Ir?1:0,Mr=new yr(1),Zr=new cr(Mr.buffer);function Xr(r){return Mr[0]=r,Zr[Rr]}!0===Ir?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr={HIGH:Cr,LOW:Lr},qr=new yr(1),zr=new cr(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,qr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Or.assign(r,Kr,1,0),n=Kr[0],n&=Pr,t=Xr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===Ir?1:0,ee=new yr(1),ne=new cr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=1023,ae=1048576,oe=[1,1.5],ue=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function fe(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=[0,0],le=[0,0];function pe(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(fe(r,se,1,0),e+=se[1],e+=function(r){var e=Xr(r);return(e=(2146435072&e)>>>20)-ie|0}(r=se[0]),e<-1074?Qr(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Or.assign(r,le,1,0),n=le[0],n&=2148532223,t*Jr(n|=e+ie<<20,le[1])))}var ye=1048575,ge=1048576,de=1083179008,ve=1e300,he=1e-300,we=[0,0],be=[0,0];function me(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Or.assign(e,we,1,0),o=we[0],0===we[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Or.assign(r,we,1,0),a=we[0],0===we[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?Qr(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?me(-0,-e):e<0?0:Y}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=D(r),n=a&Pr|0,t=o&Pr|0,c=o>>>31|0,u=(u=a>>>31|0)&&X(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Xr(r)&Pr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*ve*ve:u*he*he;if(n>1072693248)return 0===c?u*ve*ve:u*he*he;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(be,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,v,h,w,b,m,A,_,N;return m=0,n<ae&&(m-=53,n=Xr(e*=9007199254740992)),m+=(n>>20)-ie|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ae),o=Hr(i=(w=(e=te(e,n))-(f=oe[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=te(0,t+=_<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),c=Hr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ce[_])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=ue[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(be,i,n);if(y=(l=(e-(f=Hr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Or.assign(y,we,1,0),g=Wr(we[0]),d=Wr(we[1]),g>=de){if(0!=(g-de|d))return u*ve*ve;if(l+8008566259537294e-32>y-s)return u*ve*ve}else if((g&Pr)>=1083231232){if(0!=(g-3230714880|d))return u*he*he;if(l<=y-s)return u*he*he}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Pr|0)>>20)-ie|0,f=0,s>1071644672&&(i=te(0,((f=r+(ge>>l+1)>>>0)&~(ye>>(l=((f&Pr)>>20)-ie|0)))>>>0),f=(f&ye|ge)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Wr(r=Xr(c=1-((c=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?pe(c,f):te(c,r)}(g,s,l),u*y}var Ae=.6931471803691238,_e=1.9082149292705877e-10,Ne=1048575;function Ee(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?q:P(r)||r<0?NaN:(a=0,(n=Xr(r))<1048576&&(a-=54,n=Xr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-ie|0,a+=(c=614244+(n&=Ne)&1048576|0)>>20|0,u=(r=te(r,n|1072693248^c))-1,(Ne&2+n)<3?0===u?0===a?0:a*Ae+a*_e:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ae-(o-a*_e-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ae-(e-(s*(e+o)+a*_e)-u)):0===a?u-s*(u-o):a*Ae-(s*(u-o)-a*_e-u))))}function Ue(r,e,n,t){var i;return P(r)||P(e)||P(n)||P(t)||e<=0||n<=0?NaN:r<=t?q:(i=(r-t)/n,Ee(e/n)-(1+e)*Ee(i)-me(i,-e))}function Ie(r){return function(){return r}}function Se(r,e,n){return P(r)||P(e)||P(n)||r<=0||e<=0?Ie(NaN):function(t){var i;return P(t)?NaN:t<=n?q:(i=(t-n)/e,Ee(r/e)-(1+r)*Ee(i)-me(i,-r))}}L(Ue,"factory",Se);var xe=Math.ceil;function ke(r){return r<0?xe(r):R(r)}var Fe=1.4426950408889634,je=1/(1<<28);function Te(r){var e;return P(r)||r===Y?r:r===q?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<je?1+r:function(r,e,n){var t,i,a,o;return pe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=ke(r<0?Fe*r-.5:Fe*r+.5)),1.9082149292705877e-10*e,e)}function Oe(r,e,n,t){return P(r)||P(e)||P(n)||P(t)||e<=0||n<=0?NaN:Te(Ue(r,e,n,t))}return L(Oe,"factory",(function(r,e,n){var t;return P(r)||P(e)||P(n)||r<=0||e<=0?Ie(NaN):(t=Se(r,e,n),function(i){return P(i)?NaN:Te(t(i,r,e,n))})})),Oe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=browser.js.map
