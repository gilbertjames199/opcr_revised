"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1343],{1343:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var r=o(821),n={class:"relative row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},l=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),s={class:"col-md-8"},i=(0,r.createElementVNode)("input",{type:"hidden",required:""},null,-1),c=(0,r.createElementVNode)("label",{for:""},"OUTPUT",-1),d={key:0,class:"fs-6 c-red-500"},u=["disabled"];var m=o(9038),p=o(126);const f={props:{paps:Object,idpaps:Number,editData:Object,sectors:Object},components:{Places:function(){return new Promise((function(e){setTimeout((function(){e(p.Z)}),2e3)}))}},data:function(){return{submitted:!1,form:(0,m.cI)({Outputs:"",idpaps:"",id:null}),pageTitle:""}},mounted:function(){this.form.idpaps=this.idpaps,void 0!==this.editData?(this.bari&&(this.bar=this.bari),this.pageTitle="Edit",this.form.Outputs=this.editData.Outputs,this.form.idpaps=this.editData.idpaps,this.form.id=this.editData.id):this.pageTitle="Create"},methods:{submit:function(){if(this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4),void 0!==this.editData)this.form.patch("/output/"+this.form.id,this.form);else{this.form.post("/output/store")}}}};const h=(0,o(3744).Z)(f,[["render",function(e,t,o,m,p,f){var h=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("h3",null,(0,r.toDisplayString)(p.pageTitle)+" Outputs",1),(0,r.createVNode)(h,{href:"/output/".concat(o.idpaps)},{default:(0,r.withCtx)((function(){return[l]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,r.withModifiers)((function(e){return f.submit()}),["prevent"]))},[i,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.idpaps=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[r.vModelText,p.form.idpaps]]),c,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.form.Outputs=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[r.vModelText,p.form.Outputs]]),p.form.errors.Outputs?((0,r.openBlock)(),(0,r.createElementBlock)("div",d,(0,r.toDisplayString)(p.form.errors.Outputs),1)):(0,r.createCommentVNode)("",!0),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.form.id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,p.form.id]]),(0,r.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3 text-white",onClick:t[3]||(t[3]=function(e){return f.submit()}),disabled:p.form.processing}," Save changes ",8,u)],32)])])}]])},126:(e,t,o)=>{o.d(t,{Z:()=>w});var r=o(821),n={class:"masonry-item w-100"},a={class:"row gap-20"},l={class:"col-md-3 col-6"},s={class:"layers bd bgc-white p-20"},i={class:"layer w-100 mB-10"},c={class:"lh-1"},d={class:"layer w-100"},u={class:"peers ai-sb fxw-nw"},m=(0,r.createElementVNode)("div",{class:"peer peer-greed"},[(0,r.createElementVNode)("span",{id:"sparklinedash"})],-1),p={class:"layers bd bgc-white p-20"},f=(0,r.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,r.createElementVNode)("h6",{class:"lh-1"},"Barangay")],-1),h={class:"layer w-100"},v={class:"peers ai-sb fxw-nw"},E=(0,r.createElementVNode)("div",{class:"peer peer-greed"},[(0,r.createElementVNode)("span",{id:"sparklinedash"})],-1),b={class:"form-control"},V=(0,r.createElementVNode)("option",null,null,-1);const N={props:{mun:Array},data:function(){return{mun_code:"",barsel:"",munsel:"",bar:[]}},computed:{my_mun:function(){return this.mun_code},my_bar:function(){return this.bar}},mounted:function(){},watch:{},methods:{loadBar:function(){var e=this;alert(this.munsel),""===this.munsel||axios.post("/places/bar",{mun:this.munsel}).then((function(t){e.bar=t.data.data}))},showMun:function(){alert(this.mun_code)}}};const w=(0,o(3744).Z)(N,[["render",function(e,t,o,N,w,y){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("h6",c,"Municipalities "+(0,r.toDisplayString)(y.my_mun),1)]),(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",u,[m,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return w.munsel=e}),onChange:t[1]||(t[1]=function(){return y.loadBar&&y.loadBar.apply(y,arguments)})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.mun,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",null,(0,r.toDisplayString)(e.citymunDesc),1)})),256))],544),[[r.vModelSelect,w.munsel]])])])]),(0,r.createElementVNode)("div",p,[f,(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("div",v,[E,(0,r.createElementVNode)("select",b,[V,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(w.bar,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",null,(0,r.toDisplayString)(e.brgyDesc),1)})),256))])])])])])])])}]])}}]);