"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[507],{507:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(821),n={class:"relative row gap-20 masonry pos-r"},l={class:"peers fxw-nw jc-sb ai-c"},a=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),c={class:"col-md-8"},s=(0,r.createElementVNode)("input",{type:"hidden",required:""},null,-1),i=(0,r.createElementVNode)("label",{for:""},"DESCRIPTION",-1),d={key:0,class:"fs-6 c-red-500"},m=(0,r.createElementVNode)("label",{for:""},"SECTOR",-1),u=["value"],p={key:1,class:"fs-6 c-red-500"},f=(0,r.createElementVNode)("label",{for:""},"OFFICES",-1),h=["value"],E={key:2,class:"fs-6 c-red-500"},N=["disabled"];var v=o(9038),g=o(126);const V={props:{editData:Object,sectors:Object,functions:Object},components:{Places:function(){return new Promise((function(e){setTimeout((function(){e(g.Z)}),2e3)}))}},data:function(){return{submitted:!1,form:(0,v.cI)({goal_description:"",sector:"",FFUNCCOD:"",id:null}),pageTitle:""}},mounted:function(){void 0!==this.editData?(this.bari&&(this.bar=this.bari),this.pageTitle="Edit",this.form.goal_description=this.editData.goal_description,this.form.sector=this.editData.sector,this.form.id=this.editData.id,this.form.FFUNCCOD=this.editData.FFUNCCOD):this.pageTitle="Create"},methods:{submit:function(){this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4),void 0!==this.editData?this.form.patch("/Sectoral/"+this.form.id,this.form):this.form.post("/Sectoral")}}};const b=(0,o(3744).Z)(V,[["render",function(e,t,o,v,g,V){var b=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h3",null,(0,r.toDisplayString)(g.pageTitle)+" Sectoral Outcomes",1),(0,r.createVNode)(b,{href:"/Sectoral"},{default:(0,r.withCtx)((function(){return[a]})),_:1})]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,r.withModifiers)((function(e){return V.submit()}),["prevent"]))},[s,i,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return g.form.goal_description=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,g.form.goal_description]]),g.form.errors.goal_description?((0,r.openBlock)(),(0,r.createElementBlock)("div",d,(0,r.toDisplayString)(g.form.errors.goal_description),1)):(0,r.createCommentVNode)("",!0),m,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return g.form.sector=e})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.sectors,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.id},(0,r.toDisplayString)(e.sector_name),9,u)})),256))],512),[[r.vModelSelect,g.form.sector]]),g.form.errors.sector?((0,r.openBlock)(),(0,r.createElementBlock)("div",p,(0,r.toDisplayString)(g.form.errors.sector),1)):(0,r.createCommentVNode)("",!0),f,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-control form-select","onUpdate:modelValue":t[2]||(t[2]=function(e){return g.form.FFUNCCOD=e})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.functions,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.FFUNCCOD},(0,r.toDisplayString)(e.FFUNCTION),9,h)})),256))],512),[[r.vModelSelect,g.form.FFUNCCOD]]),g.form.errors.FFUNCCOD?((0,r.openBlock)(),(0,r.createElementBlock)("div",E,(0,r.toDisplayString)(g.form.errors.FFUNCCOD),1)):(0,r.createCommentVNode)("",!0),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[3]||(t[3]=function(e){return g.form.id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,g.form.id]]),(0,r.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[4]||(t[4]=function(e){return V.submit()}),disabled:g.form.processing}," Save changes ",8,N)],32)])])}]])},126:(e,t,o)=>{o.d(t,{Z:()=>b});var r=o(821),n={class:"masonry-item w-100"},l={class:"row gap-20"},a={class:"col-md-3 col-6"},c={class:"layers bd bgc-white p-20"},s={class:"layer w-100 mB-10"},i={class:"lh-1"},d={class:"layer w-100"},m={class:"peers ai-sb fxw-nw"},u=(0,r.createElementVNode)("div",{class:"peer peer-greed"},[(0,r.createElementVNode)("span",{id:"sparklinedash"})],-1),p={class:"layers bd bgc-white p-20"},f=(0,r.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,r.createElementVNode)("h6",{class:"lh-1"},"Barangay")],-1),h={class:"layer w-100"},E={class:"peers ai-sb fxw-nw"},N=(0,r.createElementVNode)("div",{class:"peer peer-greed"},[(0,r.createElementVNode)("span",{id:"sparklinedash"})],-1),v={class:"form-control"},g=(0,r.createElementVNode)("option",null,null,-1);const V={props:{mun:Array},data:function(){return{mun_code:"",barsel:"",munsel:"",bar:[]}},computed:{my_mun:function(){return this.mun_code},my_bar:function(){return this.bar}},mounted:function(){},watch:{},methods:{loadBar:function(){var e=this;alert(this.munsel),""===this.munsel||axios.post("/places/bar",{mun:this.munsel}).then((function(t){e.bar=t.data.data}))},showMun:function(){alert(this.mun_code)}}};const b=(0,o(3744).Z)(V,[["render",function(e,t,o,V,b,y){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("h6",i,"Municipalities "+(0,r.toDisplayString)(y.my_mun),1)]),(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",m,[u,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.munsel=e}),onChange:t[1]||(t[1]=function(){return y.loadBar&&y.loadBar.apply(y,arguments)})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.mun,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",null,(0,r.toDisplayString)(e.citymunDesc),1)})),256))],544),[[r.vModelSelect,b.munsel]])])])]),(0,r.createElementVNode)("div",p,[f,(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("div",E,[N,(0,r.createElementVNode)("select",v,[g,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(b.bar,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",null,(0,r.toDisplayString)(e.brgyDesc),1)})),256))])])])])])])])}]])}}]);