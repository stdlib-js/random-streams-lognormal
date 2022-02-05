/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"readable-stream";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-lognormal@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import _ from"debug";var w={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308},x=u,M=c,E=j.isPrimitive,O=b.isPrimitive,T=f.isPrimitive,P=v.isPrimitive,k=y.isPrimitive;var L=function(e,t){return x(t)?M(t,"sep")&&(e.sep=t.sep,!T(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):M(t,"objectMode")&&(e.objectMode=t.objectMode,!E(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):M(t,"encoding")&&(e.encoding=t.encoding,!T(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):M(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!O(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):M(t,"iter")&&(e.iter=t.iter,!k(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):M(t,"siter")&&(e.siter=t.siter,!P(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(M(t,"prng")&&(e.prng=t.prng),M(t,"seed")&&(e.seed=t.seed),M(t,"state")&&(e.state=t.state),M(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},N=_("random:streams:lognormal"),W=t.Readable,S=i.isPrimitive,V=s.isPrimitive,G=r,R=n,C=o,F=d,J=m,A=e,I=p,q=a,z=h.factory,B=l,D=g,H=w,K=L,Q=N;function U(e,t,i){var s,r;if(!(this instanceof U))return arguments.length>2?new U(e,t,i):new U(e,t);if(!V(e)||G(e))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`.");if(!S(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(s=C(H),arguments.length>2&&(r=K(s,i)))throw r;return Q("Creating a readable stream configured with the following options: %s.",JSON.stringify(s)),W.call(this,s),J(this,"_destroyed",!1),A(this,"_objectMode",s.objectMode),A(this,"_sep",s.sep),A(this,"_iter",s.iter),A(this,"_siter",s.siter),J(this,"_i",0),A(this,"_prng",z(e,t,s)),A(this,"PRNG",this._prng.PRNG),this}F(U,W),I(U.prototype,"seed",(function(){return this._prng.seed})),I(U.prototype,"seedLength",(function(){return this._prng.seedLength})),q(U.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),I(U.prototype,"stateLength",(function(){return this._prng.stateLength})),I(U.prototype,"byteLength",(function(){return this._prng.byteLength})),A(U.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return Q("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),Q("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?B(t):B(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),A(U.prototype,"destroy",(function(e){var t;return this._destroyed?(Q("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,D((function(){e&&(Q("Stream was destroyed due to an error. Error: %s.",R(e)?e.message:JSON.stringify(e)),t.emit("error",e));Q("Closing the stream..."),t.emit("close")})),this)}));var X=u,Y=o,Z=U;var $=o,ee=U;var te=e,ie=U,se=function(e,t,i){var s,r;return r=1===(s=arguments.length)?$(e,1):s>2?$(i,1):{},s<2?n:o;function n(e,t){return new ee(e,t,r)}function o(){return new ee(e,t,r)}};te(ie,"objectMode",(function(e,t,i){var s;if(arguments.length>2){if(!X(s=i))throw new TypeError("invalid argument. Options must be an object. Value: `"+s+"`.");s=Y(i,1)}else s={};return s.objectMode=!0,new Z(e,t,s)})),te(ie,"factory",se);var re=ie;export{re as default};
//# sourceMappingURL=index.mjs.map
