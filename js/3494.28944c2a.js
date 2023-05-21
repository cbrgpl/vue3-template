"use strict";(self["webpackChunktemplate_project"]=self["webpackChunktemplate_project"]||[]).push([[3494],{3494:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(821);const u=(0,r._)("h4",null,"Select feature values:",-1),s=(0,r.Uk)(" Add ");function i(e,t,a,i,l,d){const o=(0,r.up)("FeatureSection"),n=(0,r.up)("zLoaderButton"),c=(0,r.up)("zDialog");return(0,r.wg)(),(0,r.j4)(c,{class:"w-11/12 sm:w-8/12 md:w-2/4 max-w-md"},{header:(0,r.w5)((()=>[u])),footer:(0,r.w5)((()=>[(0,r.Wm)(n,{class:"w-full md:w-auto px-16 py-3.5 float-right",loader:l.buttonLoading,onClick:d.addCartItem},{default:(0,r.w5)((()=>[s])),_:1},8,["loader","onClick"])])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.productFeatures,(e=>((0,r.wg)(),(0,r.j4)(o,(0,r.dG)({key:e.id,class:"mb-3 last:mb-6","section-valid":l.features[e.name].valid},e,{onSetFeatureValue:d.putFeatureValue}),null,16,["section-valid","onSetFeatureValue"])))),128))])),_:1})}var l=a(2799);const d={class:"flex flex-col md:flex-row md:space-x-4 lg:space-x-6 flex-wrap"};function o(e,t,a,u,s,i){const l=(0,r.up)("zRadioButton");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("h5",{class:(0,r.C_)(["underline mb-2",i.titleErrorClasses])},(0,r.zw)(a.name),3),(0,r._)("ul",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.featureFields,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id,class:"mb-1.5 py-2 last:mb-0"},[(0,r.Wm)(l,{modelValue:s.featureValue,"onUpdate:modelValue":t[0]||(t[0]=e=>s.featureValue=e),class:"w-full md:w-auto",name:a.name,value:e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,r.zw)(e.name),1)])),_:2},1032,["modelValue","name","value"])])))),128))])])}var n={name:"FeatureSection",props:{name:{type:String,required:!0},featureFields:{type:Array,required:!0},sectionValid:{type:Boolean,required:!0}},data(){return{featureValue:""}},computed:{titleErrorClasses(){return{"text-danger":!this.sectionValid}}},watch:{featureValue(e){this.emitFeatureValue(this.name,e)}},methods:{emitFeatureValue(e,t){this.$emit("setFeatureValue",e,t)}}},c=a(3744);const f=(0,c.Z)(n,[["render",o]]);var m=f,h=a(3907),p={name:"TheAddToCartDialog",props:{product:{type:Object}},data(){return{features:{},buttonLoading:!1}},beforeMount(){this.initFeatureValues()},computed:{...(0,h.Se)({getFeaturesForProduct:"product/getFeaturesForProduct"}),productFeatures(){return this.getFeaturesForProduct(this.product)}},methods:{initFeatureValues(){for(const e of this.productFeatures)this.features[e.name]={field:null,valid:!0}},putFeatureValue(e,t){this.features[e].field=t},async addCartItem(){if(!this.featureFieldsValid())return;this.buttonLoading=!0;const e=this.getSelectedFeatureFields(),t={product:this.product.id,price:this.product.price,featureFields:e},a=await this.$store.dispatch("cart/addCartItem",t);this.buttonLoading=!1,a?(this.toast$.success({summary:"Added",detail:"Item was successfully added to the cart.",life:5e3}),this.dialog$.hide("addToCart")):!1===a&&this.toast$.info({summary:"Duplicate item",detail:"You already have such item in the cart. Duplicate was not added to cart.",life:5e3})},featureFieldsValid(){this.clearFeatureErrors();const e=this.isFeatureFieldsValid();return!!e.valid||(this.makeFeatureErrored(e.featureNames),!1)},clearFeatureErrors(){for(const e in this.features)this.features[e].valid=!0},makeFeatureErrored(e){for(const t of e)this.features[t].valid=!1},getSelectedFeatureFields(){return Object.entries(this.features).map((e=>e[1].field))},isFeatureFieldsValid(){const e={valid:!0,featureNames:[]};for(const t in this.features)null===this.features[t].field&&(e.valid=!1,e.featureNames.push(t));return e}},components:{zDialog:l.Z,FeatureSection:m}};const F=(0,c.Z)(p,[["render",i]]);var w=F}}]);