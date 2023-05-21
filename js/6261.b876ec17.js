"use strict";(self["webpackChunktemplate_project"]=self["webpackChunktemplate_project"]||[]).push([[6261],{1352:function(e,t,s){s.d(t,{s:function(){return y}});var r=s(3781),a=s(714);s(1703);function i(e,t,s){if(t.set)t.set.call(e,s);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=s}}var o=s(9371);function l(e,t,s){var r=(0,o.Z)(e,t,"set");return i(e,r,s),s}var d=s(9614),n=s(8829),c=s(821),u=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakSet;class b{constructor(){(0,r.Z)(this,m),(0,a.Z)(this,u,{writable:!0,value:(0,c.qj)([])}),(0,a.Z)(this,h,{writable:!0,value:(0,c.qj)({})}),(0,a.Z)(this,p,{writable:!0,value:(0,c.YP)((0,n.Z)(this,u),(e=>(0,d.Z)(this,m,v).call(this,e)))})}addObservable(e){(0,n.Z)(this,h)[e]=!1}addIntersections(e){e.forEach((e=>(0,n.Z)(this,u).push(e)))}resetState(){Object.keys((0,n.Z)(this,h)).forEach((e=>delete(0,n.Z)(this,h)[e])),(0,n.Z)(this,u).splice(0)}get schema(){return(0,n.Z)(this,h)}}function v(e){for(const t of e)(0,n.Z)(this,h)[t]=!0}var f=new WeakMap;class g{constructor(e,t){(0,a.Z)(this,f,{writable:!0,value:null}),l(this,f,new IntersectionObserver(t,e))}observe(e){for(const t of e)(0,n.Z)(this,f).observe(t)}unobserve(e){for(const t of e)(0,n.Z)(this,f).unobserve(t)}}var w=s(2482);class S{constructor(e){(0,w.Z)(this,"nodeBuffer",[]),this.addObservable=e}clearNodeBuffer(){this.nodeBuffer.splice(0)}get vueDirective(){return{created:(e,t)=>{e.setAttribute(`data-${S.OBSERVABLE_ATTR}`,t.value),this.nodeBuffer.push(e),this.addObservable(t.value)}}}}(0,w.Z)(S,"OBSERVABLE_ATTR","observable");var I=new WeakMap,C=new WeakMap,Z=new WeakMap,k=new WeakSet;class y{constructor(){(0,r.Z)(this,k),(0,a.Z)(this,I,{writable:!0,value:null}),(0,a.Z)(this,C,{writable:!0,value:new b}),(0,a.Z)(this,Z,{writable:!0,value:new S(((...e)=>(0,n.Z)(this,C).addObservable(...e)))})}init(e=null,t="0px 0px 0px 0px",s=0){const r={root:e,rootMargin:t,threshold:s},a=(...e)=>(0,d.Z)(this,k,x).call(this,...e);l(this,I,new g(r,a))}observe(){const e=(0,n.Z)(this,Z).nodeBuffer;(0,n.Z)(this,I).observe(e)}unobserve(){const e=(0,n.Z)(this,Z).nodeBuffer;(0,n.Z)(this,I).unobserve(e),(0,n.Z)(this,C).resetState(),(0,n.Z)(this,Z).clearNodeBuffer()}get schema(){return(0,n.Z)(this,C).schema}get directive(){return(0,n.Z)(this,Z).vueDirective}get inited(){return null!==(0,n.Z)(this,I)}}function x(e){const t=S.OBSERVABLE_ATTR,s=e.filter((e=>e.isIntersecting)).map((e=>e.target.dataset[t]));(0,n.Z)(this,C).addIntersections(s)}},6261:function(e,t,s){s.r(t),s.d(t,{default:function(){return G}});var r=s(821);const a={class:"flex-col relative"},i={class:"shop-main_padding flex-grow overflow-y-auto"};function o(e,t,s,o,l,d){const n=(0,r.up)("zLoader"),c=(0,r.up)("CartActions"),u=(0,r.up)("CartContent"),h=(0,r.up)("CartFooter");return(0,r.wg)(),(0,r.iD)("div",a,[l.loading?((0,r.wg)(),(0,r.j4)(n,{key:0,class:"z-10",title:"",background:"",size:"120px"})):(0,r.kq)("",!0),(0,r._)("div",i,[(0,r.Wm)(c,{"no-selected-items":d.noSelectedItems,disabled:l.actionsDisabled,onToggleAllSelectStates:d.toggleAllSelectStates,onDeleteProducts:d.deleteSelectedItems},null,8,["no-selected-items","disabled","onToggleAllSelectStates","onDeleteProducts"]),(0,r.Wm)(u,{"binded-cart-items":l.bindedCartItems,onDisableLoader:t[0]||(t[0]=e=>l.loading=!1),onToggleSelectState:d.toggleSelectState},null,8,["binded-cart-items","onToggleSelectState"])]),(0,r.Wm)(h,{class:"flex-shrink-0 px-2.5 md:px-5 xl:px-7","selected-items":d.selectedItems,onBuy:d.pushToOrderCheckout},null,8,["selected-items","onBuy"])])}s(6699);const l={class:"w-full flex justify-between py-3 border-b boder-white border-opacity-40 border-solid"},d=(0,r.Uk)(" Delete ");function n(e,t,s,a,i,o){const n=(0,r.up)("zCheckboxSingle"),c=(0,r.up)("zLoaderButton");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(n,{class:"py-2",checked:!s.noSelectedItems,label:"Select All","onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("toggleAllSelectStates"))},null,8,["checked"]),(0,r.Wm)(r.uT,{name:"delete-button"},{default:(0,r.w5)((()=>[s.noSelectedItems?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(c,{key:0,loader:o.actionsDisabled,variant:"danger",class:"px-6",onClick:t[1]||(t[1]=t=>e.$emit("deleteProducts"))},{default:(0,r.w5)((()=>[d])),_:1},8,["loader"]))])),_:1})])}var c={name:"CartActions",inject:["actionsDisabled"],props:{noSelectedItems:{type:Boolean,required:!0}},emits:["toggleAllSelectStates","deleteProducts"]},u=s(3744);const h=(0,u.Z)(c,[["render",n],["__scopeId","data-v-5fb1a218"]]);var p=h;function m(e,t,s,a,i,o){const l=(0,r.up)("CartContentProduct"),d=(0,r.Q2)("observable");return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.bindedCartItems,((s,a)=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{key:s.cartItem.id,ref_for:!0,ref:"products","cart-item-id":s.cartItem.id,product:s.product,"product-features":s.features,onVnodeMounted:o.showCartContent,onToggleSelectState:t[0]||(t[0]=t=>e.$emit("toggleSelectState",t))},null,8,["cart-item-id","product","product-features","onVnodeMounted"])),[[d,a]]))),128))])}var b=s(3907);function v(e,t,s,a,i,o){const l=(0,r.up)("zCheckboxSingle"),d=(0,r.up)("zProfileProduct");return(0,r.wg)(),(0,r.j4)(d,{ref:"profileProduct"},{actions:(0,r.w5)((()=>[(0,r.Wm)(l,{checked:o.selected,"onUpdate:modelValue":o.toggleSelectState},null,8,["checked","onUpdate:modelValue"])])),_:1},512)}const f={class:"py-4 border-b last:border-none border-placeholder border-solid border-opacity-40"},g={class:"h-full flex items-start"},w={key:0},S={class:"leading-5 mb-3"},I={class:"md:flex md:flex-col"};function C(e,t,s,a,i,o){const l=(0,r.up)("zMedia");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",g,[e.$slots.actions?((0,r.wg)(),(0,r.iD)("div",w,[(0,r.WI)(e.$slots,"actions")])):(0,r.kq)("",!0),(0,r.Wm)(l,{ref:"media",class:"ml-3 mr-2 w-28 md:w-60 flex-shrink-0 self-stretch","show-original":i.originalShown,original:s.product.media[0].display,preview:s.product.media[0].preview,"auto-loading":!1},null,8,["show-original","original","preview"]),(0,r._)("div",null,[(0,r._)("h4",S,(0,r.zw)(s.product.title),1),(0,r._)("span",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.productFeatures,(e=>((0,r.wg)(),(0,r.iD)("small",{key:e.feature,class:"text-placeholder md:mb-2"},[(0,r._)("u",null,(0,r.zw)(e.feature),1),(0,r.Uk)(": "+(0,r.zw)(e.value)+"; ",1)])))),128))])])])])}var Z={name:"ZProfileProduct",expose:["startMediaLoading"],props:{product:{type:Object,required:!0},productFeatures:{type:Array,required:!0}},data(){return{originalShown:!1}},methods:{startMediaLoading(){this.originalShown||(this.$refs.media.startLoading(),this.originalShown=!0)}}};const k=(0,u.Z)(Z,[["render",C]]);var y=k,x={name:"CartContentProduct",components:{zProfileProduct:y},inject:["selectedIds"],props:{cartItemId:{type:Number,required:!0}},emits:["toggleSelectState"],expose:["startMediaLoading"],computed:{selected(){return this.selectedIds.includes(this.cartItemId)}},methods:{toggleSelectState(){this.$emit("toggleSelectState",this.cartItemId)},startMediaLoading(){this.$refs.profileProduct.startMediaLoading()}}};const _=(0,u.Z)(x,[["render",v]]);var B=_,D=s(1405),O=s(1352);const $=new O.s;var L={name:"CartContent",reactiveObserver:$,productBuffer:[],directives:{observable:$.directive},components:{CartContentProduct:B},props:{bindedCartItems:{type:Array,required:!0}},emits:["toggleSelectState","disableLoader"],data(){return{contentShown:!1}},computed:{...(0,b.Se)({cartLoaded:"cart/cartLoaded",cartEmpty:"cart/cartEmpty"})},watch:{bindedCartItems(){const e=this.$options.reactiveObserver.inited;e&&(this.$options.reactiveObserver.unobserve(),this.contentShown=!1)},cartLoaded:{handler(e){e&&this.cartEmpty&&this.showCartContent()},immediate:!0},"$options.reactiveObserver.schema":{handler(e){const t=this.$refs.products;for(const s in e)e[s]&&t[s].startMediaLoading()},deep:!0}},beforeUnmount(){this.$options.reactiveObserver.unobserve()},methods:{showCartContent(){this.contentShown||(this.contentShown=!0,this.initObserver(),this.$emit("disableLoader"))},initObserver(){const e=this.$options.reactiveObserver,t=D.Z.getScrollableParents(this.$el)[0];e.init(t,"0px 0px 300px 0px"),e.observe()}}};const A=(0,u.Z)(L,[["render",m]]);var P=A;const W={class:"flex flex-col sm:flex-row justify-between w-full bg-black-lighten boder-t border-placeholder border-opacity-40 border-solid py-2"},M={class:"text-white mb-3 sm:mb-0"},j={class:"mb-2"},q=(0,r._)("u",{class:"text-placeholder"}," Calculated price: ",-1),z=(0,r.Uk)("   "),T={class:"text-base font-semibold"},E=(0,r._)("u",{class:"text-placeholder"}," Quantity: ",-1),F=(0,r.Uk)("   "),U={class:"text-base font-semibold"},R=(0,r.Uk)(" Buy Selected ");function V(e,t,s,a,i,o){const l=(0,r.up)("zButton");return(0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("div",M,[(0,r._)("div",j,[q,z,(0,r._)("small",T," $"+(0,r.zw)(o.cartCalculation.price),1)]),(0,r._)("div",null,[E,F,(0,r._)("small",U,(0,r.zw)(o.cartCalculation.qnt),1)])]),(0,r.Wm)(l,{disabled:o.actionsDisabled,class:"px-12 py-3.5",variant:"safety",onClick:t[0]||(t[0]=t=>e.$emit("buy"))},{default:(0,r.w5)((()=>[R])),_:1},8,["disabled"])])}var N={name:"CartFooter",inject:["actionsDisabled"],props:{selectedItems:{type:Object,required:!0}},emits:["buy"],computed:{cartCalculation(){const e={qnt:0,price:0};for(const t of this.selectedItems)e.qnt++,e.price+=parseFloat(t.price);return e.price=e.price.toFixed(2),e}}};const Y=(0,u.Z)(N,[["render",V]]);var H=Y,K=s(4473),Q={name:"ProfileCart",components:{CartActions:p,CartContent:P,CartFooter:H},provide(){return{actionsDisabled:(0,r.Fl)((()=>this.actionsDisabled||this.noSelectedItems)),selectedIds:(0,r.Fl)((()=>this.selectedIds))}},data(){return{selectedIds:[],bindedCartItems:[],loading:!0,actionsDisabled:!1}},computed:{...(0,b.Se)({cartLoaded:"cart/cartLoaded",cartItems:"cart/cartItems"}),noSelectedItems(){return 0===this.selectedIds.length},selectedItems(){return this.cartItems.filter((e=>this.selectedIds.includes(e.id)))}},watch:{cartLoaded:{handler(e){e&&this.updateBindedCartItems()},immediate:!0}},methods:{async updateBindedCartItems(){this.bindedCartItems=await this.$store.dispatch("cart/outBindedCartItems")},toggleSelectState(e){this.selectedIds.includes(e)?K.sq.remove(this.selectedIds,e):this.selectedIds.push(e)},toggleAllSelectStates(){this.noSelectedItems?this.selectedIds=this.cartItems.map((e=>e.id)):this.selectedIds=[]},async deleteSelectedItems(){this.actionsDisabled=!0,await this.$store.dispatch("cart/removeCartItems",this.selectedIds),this.excludeRemovedBindedItems(this.selectedIds),this.selectedIds=[],this.actionsDisabled=!1},excludeRemovedBindedItems(e){const t=e.map((e=>({cartItem:{id:e}})));K.sq.exclude(this.bindedCartItems,t,(e=>e.cartItem.id))},pushToOrderCheckout(){this.$router.push({name:"ShopCheckout",params:{bindedCartItemIds:JSON.stringify(this.selectedIds)}})}}};const J=(0,u.Z)(Q,[["render",o]]);var G=J}}]);