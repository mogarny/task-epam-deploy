import{a as Be}from"./chunk-QMITUXYL.js";import{$a as H,Ab as Ne,Ba as T,Bb as ke,Ca as V,Cb as Re,Db as Ge,Ga as B,Ia as j,Ja as p,Ka as De,Kb as Te,L as R,La as Me,Ma as l,N as K,Na as o,Oa as ne,P as b,Pa as re,Qa as g,Ra as F,Sa as Ae,Ta as we,Ua as Ee,Va as c,W as be,Wa as Se,X as Q,Xa as w,Y as v,Ya as E,Za as S,_a as x,a as m,ab as xe,b as _,ba as X,ca as d,cb as y,da as h,db as Ie,ea as Ve,fa as Fe,fb as Oe,g as _e,ga as ee,j as ve,ka as G,kb as Pe,l as Y,mb as se,na as te,nb as U,o as ye,ob as C,qb as oe,u as Ce,va as a,w as J,wa as f,za as ie}from"./chunk-UDVRZVAG.js";var ae=["Toyota","Volkswagen","Ford","Honda","Chevrolet","Nissan","BMW","Mercedes-Benz","Hyundai","Kia","Audi","Porsche","Lexus","Jeep","Subaru","Mazda","Dodge","Ram","Tesla","Volvo","Land Rover","Jaguar","Mitsubishi","Acura","Infiniti","Buick","Cadillac","GMC","Chrysler","Fiat","Peugeot","Renault","Skoda","SEAT","Suzuki","Alfa Romeo","Citro\xEBn","Mini","Ferrari","Lamborghini","McLaren","Rolls-Royce","Bentley","Aston Martin","Pagani","Koenigsegg","Bugatti","Maserati","Rivian","Lucid","Genesis","Saab","Smart","Geely","Great Wall","Tata Motors","Mahindra","Daihatsu","Isuzu","Scania","Haval","BYD","Nio","Changan","Fisker","Proton","Perodua","SsangYong","Holden","Opel","Vauxhall","Zotye","Baojun","Wuling","FAW","Dongfeng","Chery","MG","Roewe","Lynk & Co","Hummer","Saturn","Pontiac","Oldsmobile","Plymouth","Mercury","Shelby","Scion","Spyker","Morgan","TVR","Lotus","DeLorean","Aptera","Foton","Caterham","Rezvani","Zenvo","Pininfarina","Cupra","Polestar","Ariel","Nano","Brabus","Saleen"],le=["#FF5733","#33FF57","#3357FF","#FFFF33","#FF33FF","#33FFFF","#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#800000","#808000","#008000","#800080","#008080","#000080","#FFA500","#A52A2A","#8A2BE2","#5F9EA0","#7FFF00","#D2691E","#FF7F50","#6495ED","#DC143C","#00FFFF","#00008B","#008B8B","#B8860B","#A9A9A9","#006400","#BDB76B","#8B008B","#556B2F","#FF8C00","#9932CC","#8B0000","#E9967A","#8FBC8F","#483D8B","#2F4F4F","#00CED1","#9400D3","#FF1493","#00BFFF","#696969","#1E90FF","#B22222","#FFFAF0","#228B22","#FF00FF","#DCDCDC","#F8F8FF","#FFD700","#DAA520","#808080","#008000","#ADFF2F","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#FFFFF0","#F0E68C","#E6E6FA","#FFF0F5","#7CFC00","#FFFACD","#ADD8E6","#F08080","#E0FFFF","#FAFAD2","#90EE90","#D3D3D3","#FFB6C1","#FFA07A","#20B2AA","#87CEFA","#778899","#B0C4DE","#FFFFE0","#00FF7F","#4682B4","#D2B48C","#008080","#D8BFD8","#FF6347","#40E0D0","#EE82EE","#F5DEB3","#FFFFFF","#F5F5F5","#FFFFF0"];var Ze=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(f(ie),f(te))}}static{this.\u0275dir=v({type:i})}}return i})(),ht=(()=>{class i extends Ze{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ee(i)))(r||i)}})()}static{this.\u0275dir=v({type:i,features:[V]})}}return i})(),Ye=new b("");var ft={provide:Ye,useExisting:R(()=>q),multi:!0};function pt(){let i=oe()?oe().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var gt=new b(""),q=(()=>{class i extends Ze{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!pt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(f(ie),f(te),f(gt,8))}}static{this.\u0275dir=v({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&g("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},features:[H([ft]),V]})}}return i})();function mt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var Je=new b(""),_t=new b("");function vt(i){return mt(i.value)?{required:!0}:null}function je(i){return null}function Ke(i){return i!=null}function Qe(i){return Oe(i)?ve(i):i}function Xe(i){let e={};return i.forEach(t=>{e=t!=null?m(m({},e),t):e}),Object.keys(e).length===0?null:e}function et(i,e){return e.map(t=>t(i))}function yt(i){return!i.validate}function tt(i){return i.map(e=>yt(e)?e:t=>e.validate(t))}function Ct(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){return Xe(et(t,e))}}function it(i){return i!=null?Ct(tt(i)):null}function bt(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){let n=et(t,e).map(Qe);return Ce(n).pipe(ye(Xe))}}function nt(i){return i!=null?bt(tt(i)):null}function He(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Vt(i){return i._rawValidators}function Ft(i){return i._rawAsyncValidators}function ue(i){return i?Array.isArray(i)?i:[i]:[]}function W(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ue(i,e){let t=ue(e);return ue(i).forEach(r=>{W(t,r)||t.push(r)}),t}function Le(i,e){return ue(e).filter(t=>!W(i,t))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=it(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},ce=class extends ${get formDirective(){return null}get path(){return null}},k=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},de=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ci=_(m({},Dt),{"[class.ng-submitted]":"isSubmitted"}),rt=(()=>{class i extends de{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(f(k,2))}}static{this.\u0275dir=v({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&De("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]})}}return i})();var I="VALID",L="INVALID",D="PENDING",O="DISABLED",A=class{},z=class extends A{constructor(e,t){super(),this.value=e,this.source=t}},P=class extends A{constructor(e,t){super(),this.pristine=e,this.source=t}},N=class extends A{constructor(e,t){super(),this.touched=e,this.source=t}},M=class extends A{constructor(e,t){super(),this.status=e,this.source=t}};function Mt(i){return(Z(i)?i.validators:i)||null}function At(i){return Array.isArray(i)?it(i):i||null}function wt(i,e){return(Z(e)?e.asyncValidators:i)||null}function Et(i){return Array.isArray(i)?nt(i):i||null}function Z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var he=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=U(()=>this.statusReactive()),this.statusReactive=T(void 0),this._pristine=U(()=>this.pristineReactive()),this.pristineReactive=T(!0),this._touched=U(()=>this.touchedReactive()),this.touchedReactive=T(!1),this._events=new _e,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return C(this.statusReactive)}set status(e){C(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===L}get pending(){return this.status==D}get disabled(){return this.status===O}get enabled(){return this.status!==O}get pristine(){return C(this.pristineReactive)}set pristine(e){C(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return C(this.touchedReactive)}set touched(e){C(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(_(m({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new N(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new N(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(_(m({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new P(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new P(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(_(m({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(_(m({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,n)),this._events.next(new M(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(m({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(_(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(m({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,t)),this._events.next(new M(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(_(m({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new M(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(L)?L:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new P(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=At(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}};var st=new b("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function St(i,e){return[...e.path,i]}function xt(i,e,t=fe){Ot(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Pt(i,e),kt(i,e),Nt(i,e),It(i,e)}function We(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function It(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Ot(i,e){let t=Vt(i);e.validator!==null?i.setValidators(He(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Ft(i);e.asyncValidator!==null?i.setAsyncValidators(He(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();We(e._rawValidators,r),We(e._rawAsyncValidators,r)}function Pt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ot(i,e)})}function Nt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ot(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ot(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function kt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Rt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Gt(i){return Object.getPrototypeOf(i.constructor)===ht}function Tt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===q?t=s:Gt(s)?n=s:r=s}),r||n||t||null}function $e(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ze(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Bt=class extends he{constructor(e=null,t,n){super(Mt(t),wt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var jt={provide:k,useExisting:R(()=>pe)},qe=Promise.resolve(),pe=(()=>{class i extends k{constructor(t,n,r,s,u,ct){super(),this._changeDetectorRef=u,this.callSetDisabledState=ct,this.control=new Bt,this._registered=!1,this.name="",this.update=new G,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Tt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Rt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){qe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&se(n);qe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?St(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(f(ce,9),f(Je,10),f(_t,10),f(Ye,10),f(Pe,8),f(st,8))}}static{this.\u0275dir=v({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[H([jt]),V,X]})}}return i})();var Ht=(()=>{class i{constructor(){this._validator=je}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):je,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=v({type:i,features:[X]})}}return i})();var Ut={provide:Je,useExisting:R(()=>ge),multi:!0};var ge=(()=>{class i extends Ht{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=se,this.createValidator=t=>vt}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ee(i)))(r||i)}})()}static{this.\u0275dir=v({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&j("required",r._enabled?"":null)},inputs:{required:"required"},features:[H([Ut]),V]})}}return i})();var Lt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Q({type:i})}static{this.\u0275inj=K({})}}return i})();var at=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:st,useValue:t.callSetDisabledState??fe}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Q({type:i})}static{this.\u0275inj=K({imports:[Lt]})}}return i})();var $t=["myInput"],lt=i=>({"pulse-button":i}),me=i=>({disableButton:i}),zt=(i,e,t)=>({"animation-duration":i,"animation-play-state":e,"animation-fill-mode":t}),qt=i=>({img:!0,reset:i});function Zt(i,e){if(i&1){let t=re();l(0,"div",19)(1,"div",20)(2,"button",21),g("click",function(){let r=d(t).$implicit,s=F();return h(s.selectCar(r))}),c(3,"SELECT"),o(),l(4,"button",22),g("click",function(){let r=d(t).$implicit,s=F();return h(s.removeCar(r))}),c(5,"REMOVE"),o()(),l(6,"div",20)(7,"button",23),g("click",function(){let r=d(t).$implicit,s=F();return h(s.startRace(r))}),c(8,"A"),o(),l(9,"button",24),g("click",function(){let r=d(t).$implicit,s=F();return h(s.resetRace(r))}),c(10,"B"),o()(),Ve(),l(11,"svg",25)(12,"g"),ne(13,"path",26),o()(),Fe(),l(14,"div",27),c(15),o()()}if(i&2){let t=e.$implicit;a(7),p("ngClass",y(10,me,t.disable))("disabled",t.disable),a(2),p("ngClass",y(12,me,!t.disable))("disabled",!t.disable),a(2),Me("img"),p("ngStyle",Ie(14,zt,t.time+"ms",t.driving?"running":"paused",t.driving?"forwards":"none"))("ngClass",y(18,qt,t.resetting)),a(2),j("stroke",t.color),a(2),Se(t.name)}}function Yt(i,e){i&1&&(l(0,"span",28),c(1,"START"),o())}function Jt(i,e){i&1&&(l(0,"span",29),c(1,"FINISH"),o())}function Kt(i,e){i&1&&(l(0,"div",30),c(1,"There are no cars yet. Please add new cars or generate them."),o()),i&2&&p("className","dotted-font pulse-card")}function Qt(i,e){if(i&1&&(l(0,"div",31),c(1),ne(2,"br"),c(3),o()),i&2){let t=F();a(),w(" winner: ",t.won.name," "),a(2),w(" time: ",t.won.time,` s
`)}}var ut=class i{constructor(e,t){this.api=e;this.stateService=t;this.page=this.api.getPage()}cars=[];car=null;type="";color="";updatedText="";updatedColor="";page=1;totalCount=0;limit=5;won=null;disableButton=!1;myInput;objects=Array.from({length:100},(e,t)=>({name:ae[t%ae.length],color:le[t%le.length]}));sendState(e){this.stateService.updateState(e)}startRace(e){e?(e.resetting=!1,e.disable=!0):this.cars.forEach(n=>{n.resetting=!1,n.disable=!0}),this.won=null,this.disableButton=!0,this.sendState(this.disableButton),(e?[e]:this.cars).forEach(n=>{this.api.startEngine(n.id).subscribe({next:r=>{this.onStartEngine(r,n)}})})}onStartEngine(e,t){t.time=Math.round(e.distance/e.velocity),t.driving=!0,console.log(t.time),this.api.drive(t.id).pipe(J((n,r)=>(n.status===500&&(t.driving=!1,t.disable=!0,this.won=null),Y(()=>new Error(n.message))))).subscribe({next:n=>{this.onDriveFinished(n,t)}})}onDriveFinished(e,t){e.body?.success&&(this.won||(this.won=t,this.api.getWinner(t.id).pipe(J((n,r)=>(console.log(n),n.status===404&&(t.wins=1,this.api.setWinner(t).subscribe({})),Y(()=>new Error(n.message))))).subscribe({next:n=>{console.log(n),t.wins=n.body?.wins+1,console.log(t),this.api.updateWinner(t).subscribe({})}})))}resetRace(e){this.disableButton=!1,this.sendState(this.disableButton),this.won=null,e?(console.log(e),e.resetting=!0,e.disable=!1,e.driving=!1):(console.log(this.cars),this.cars.forEach(t=>{t.resetting=!0,t.disable=!1,t.driving=!1}))}get lastPage(){return this.totalCount===0?1:Math.ceil(this.totalCount/this.limit)}nextPage(){this.page++,this.fetchCars(this.limit),this.api.setPage(this.page)}previousPage(){this.page--,this.fetchCars(this.limit),this.api.setPage(this.page)}selectCar(e){this.myInput.nativeElement.focus(),this.car=e}removeCar(e){console.log(e.id),this.api.removeCar(e.id).subscribe({next:t=>{this.cars.length===1&&this.page>1?this.previousPage():this.fetchCars(this.limit)}})}updateCar(){if(!this.car)throw new Error("updatedCar not found.");let e={name:this.updatedText,color:this.updatedColor||this.car.color,id:this.car.id};this.api.updateCar(e).subscribe({next:t=>{this.fetchCars(this.limit)}}),this.updatedText="",this.updatedColor=""}createNewCar(){(this.type===""||this.color==="")&&(this.type="Unknown",this.color="#000000");let e={name:this.type,color:this.color};this.generateCars(e),this.type="",this.color=""}generateCars(e){e?this.api.createCar(e).subscribe({next:t=>{this.car=t,this.fetchCars(this.limit),console.log(this.car,"created car")}}):this.objects.forEach(t=>{this.api.createCar(t).subscribe({next:n=>{console.log(n,"created car"),this.cars.push(t),this.fetchCars(this.limit)}})})}fetchCars(e){this.api.fetchCars(this.page,this.limit).subscribe({next:t=>{this.cars=t.body,this.totalCount=Number(t.headers.get("x-total-count")),console.log(this.totalCount,"count")},error:t=>console.error("Error fetching cars:",t)})}ngOnInit(){this.fetchCars(this.limit),typeof window<"u"&&(this.page=this.api.getPage())}ngOnDestroy(){this.cars.forEach(e=>{e.driving=!1}),typeof window<"u"&&this.api.setPage(this.page)}static \u0275fac=function(t){return new(t||i)(f(Te),f(Be))};static \u0275cmp=be({type:i,selectors:[["app-garage"]],viewQuery:function(t,n){if(t&1&&Ae($t,5),t&2){let r;we(r=Ee())&&(n.myInput=r.first)}},standalone:!0,features:[xe],decls:33,vars:23,consts:[["myInput",""],[1,"controls"],["type","text","placeholder","Type car brand",1,"input-text",3,"ngModelChange","ngModel"],["type","color","required","",1,"color-picker",3,"ngModelChange","ngModel"],[1,"btn","create-btn",3,"click","ngClass"],["type","text","placeholder","Update car brand",1,"input-text",3,"ngModelChange","ngModel"],["type","color",1,"color-picker",3,"ngModelChange","ngModel"],[1,"btn","update-btn",3,"click"],[1,"btn","generate-cars-btn",3,"click","ngClass"],[1,"race-controls"],[1,"btn","race-btn",3,"click","disabled","ngClass"],[1,"btn","reset-btn",3,"click"],[1,"car-list"],["class","row",4,"ngFor","ngForOf"],["class","start-line deg90 dotted-font",4,"ngIf"],["class","finish-line deg90 dotted-font",4,"ngIf"],[3,"className",4,"ngIf"],["class","won-card dotted-font",4,"ngIf"],[3,"click","disabled"],[1,"row"],[1,"vertical-position"],[1,"select",3,"click"],[1,"remove",3,"click"],[1,"key-a",3,"click","ngClass","disabled"],[1,"key-b",3,"click","ngClass","disabled"],["version","1.1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 256 256",0,"xml","space","preserve",3,"ngStyle","ngClass"],["stroke-width","3","fill-opacity","0","d",`M157.5,10h-59c-15.6,0-28.3,17.4-28.3,33v174.6c0,15.6,12.7,28.3,28.3,28.3h59
            c15.6,0,28.3-12.7,28.3-28.3V43C185.8,27.4,173.1,10,157.5,10z M180.9,81.2v58.5l-13.7,1.8v-24.1L180.9,81.2z M173.7,64.1
            c-5.1,19.6-11.1,42.7-11.1,42.7H93.4L82.3,64.1C82.3,64.1,126.9,48.9,173.7,64.1z M89,118.9v22.5l-13.7-1.8v-57L89,118.9z
            M75.3,200.4v-52l13.7,1.7v41.1L75.3,200.4z M83.1,215.2l11.1-16.7h69.1l11.1,16.7H83.1z M167.2,189.7v-39.5l13.7-1.8v50.4
            L167.2,189.7z`],[1,"dotted-font","margin-left190px"],[1,"start-line","deg90","dotted-font"],[1,"finish-line","deg90","dotted-font"],[3,"className"],[1,"won-card","dotted-font"]],template:function(t,n){if(t&1){let r=re();l(0,"div",1)(1,"input",2),x("ngModelChange",function(u){return d(r),S(n.type,u)||(n.type=u),h(u)}),o(),l(2,"input",3),x("ngModelChange",function(u){return d(r),S(n.color,u)||(n.color=u),h(u)}),o(),l(3,"button",4),g("click",function(){return d(r),h(n.createNewCar())}),c(4,"CREATE"),o(),l(5,"input",5,0),x("ngModelChange",function(u){return d(r),S(n.updatedText,u)||(n.updatedText=u),h(u)}),o(),l(7,"input",6),x("ngModelChange",function(u){return d(r),S(n.updatedColor,u)||(n.updatedColor=u),h(u)}),o(),l(8,"button",7),g("click",function(){return d(r),h(n.updateCar())}),c(9,"UPDATE"),o(),l(10,"button",8),g("click",function(){return d(r),h(n.generateCars())}),c(11,"GENERATE CARS"),o()(),l(12,"div",9)(13,"button",10),g("click",function(){return d(r),h(n.startRace())}),c(14,"RACE"),o(),l(15,"button",11),g("click",function(){return d(r),h(n.resetRace())}),c(16,"RESET"),o()(),l(17,"div",12)(18,"div"),B(19,Zt,16,20,"div",13),o(),B(20,Yt,2,0,"span",14)(21,Jt,2,0,"span",15)(22,Kt,2,1,"div",16),o(),B(23,Qt,4,2,"div",17),l(24,"div")(25,"div"),c(26),o(),l(27,"div")(28,"button",18),g("click",function(){return d(r),h(n.previousPage())}),c(29,"<"),o(),c(30),l(31,"button",18),g("click",function(){return d(r),h(n.nextPage())}),c(32,">"),o()()()}t&2&&(a(),E("ngModel",n.type),a(),E("ngModel",n.color),a(),p("ngClass",y(17,lt,n.totalCount===0)),a(2),E("ngModel",n.updatedText),a(2),E("ngModel",n.updatedColor),a(3),p("ngClass",y(19,lt,n.totalCount===0)),a(3),p("disabled",n.disableButton)("ngClass",y(21,me,n.disableButton)),a(6),p("ngForOf",n.cars),a(),p("ngIf",n.totalCount!==0),a(),p("ngIf",n.totalCount!==0),a(),p("ngIf",n.totalCount===0),a(),p("ngIf",n.won&&n.disableButton),a(3),w(" Garage ",n.totalCount," "),a(2),p("disabled",n.page===1),a(2),w(" PAGE #",n.page," "),a(),p("disabled",n.lastPage===n.page))},dependencies:[ke,at,q,rt,ge,pe,Ge,Re,Ne],styles:["body[_ngcontent-%COMP%]{background-color:#111;color:#fff;font-family:Courier New,Courier,monospace}.car-list[_ngcontent-%COMP%]{margin:20px;padding:10px;display:flex;align-items:center}.car-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.car-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .vertical-position[_ngcontent-%COMP%]{display:flex;flex-direction:column}.car-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .vertical-position[_ngcontent-%COMP%]   .key-a[_ngcontent-%COMP%]{width:40px;height:34px;background-color:transparent;color:#7edfdf;border:2px solid #00f6ff;display:inline-flex;align-items:center;justify-content:center;text-align:center;padding:0 7px;margin-bottom:5px}.car-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .vertical-position[_ngcontent-%COMP%]   .key-b[_ngcontent-%COMP%]{width:40px;height:34px;background-color:transparent;color:#d97edf;border:2px solid #e600ff;display:inline-flex;align-items:center;justify-content:center;text-align:center;padding:0 7px}.car-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:100px;max-width:100%;margin-left:186px;filter:drop-shadow(0px 0px 4px);position:absolute;transform:translate(0) rotate(-270deg);animation-name:_ngcontent-%COMP%_drive}.car-list[_ngcontent-%COMP%]   .start-line[_ngcontent-%COMP%]{position:absolute;left:17%}.car-list[_ngcontent-%COMP%]   .finish-line[_ngcontent-%COMP%]{position:absolute;right:8%}@keyframes _ngcontent-%COMP%_drive{0%{transform:translate(0) rotate(-270deg)}to{transform:translate(calc(100dvw - 335px)) rotate(-270deg)}}.deg90[_ngcontent-%COMP%]{transform:rotate(90deg);display:inline-block}.margin-left190px[_ngcontent-%COMP%]{margin-left:190px}button[_ngcontent-%COMP%]{border-radius:5px;padding:10px 20px;font-size:16px;cursor:pointer;transition:.3s}button.select[_ngcontent-%COMP%]{background-color:#1e1e32;color:#0ff}button.select[_ngcontent-%COMP%]:hover{background-color:#0ff;color:#1e1e32}button.remove[_ngcontent-%COMP%]{background-color:#1e1e32;color:#ff69b4}button.remove[_ngcontent-%COMP%]:hover{background-color:#ff69b4;color:#1e1e32}.won-card[_ngcontent-%COMP%]{width:367px;margin:0 auto;border:2px solid #dd00ff;position:absolute;height:114px;top:460px;border-radius:13px;left:37%;align-items:center;display:flex;justify-content:center}.disableButton[_ngcontent-%COMP%]{border:2px solid #6a5e6b!important;color:#6a5e6b!important;cursor:auto}.disableButton[_ngcontent-%COMP%]:hover{color:#6a5e6b;background-color:transparent;box-shadow:none}.reset[_ngcontent-%COMP%]{transform:translate(0) rotate(-270deg)!important;animation-name:none!important}.pulse-button[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1);box-shadow:0 0 10px #f0f,0 0 20px #f0f}50%{transform:scale(1.1);box-shadow:0 0 15px #f0f,0 0 25px #f0f}to{transform:scale(1);box-shadow:0 0 10px #f0f,0 0 20px #f0f}}.pulse-button[_ngcontent-%COMP%]:hover{background-color:#df54df}.pulse-card[_ngcontent-%COMP%]{font-size:23px;color:#1fe3bc}"]})};export{ut as GarageComponent};
