"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7366],{5942:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const a=l},8776:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const a=l},6900:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,".modal[data-v-8ec2bb50]{display:block}",""]);const a=l},7366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(821),l=(0,o.createElementVNode)("title",null,"Divisions",-1),a={class:"row gap-20 masonry pos-r"},r=(0,o.createElementVNode)("div",{class:"peers fxw-nw jc-sb ai-c"},null,-1),i={class:"peers fxw-nw jc-sb ai-c"},s=(0,o.createElementVNode)("h3",null,"Time Range",-1),c={class:"peers"},d={class:"peer mR-10"},u={class:"peer"},m=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),p=(0,o.createStaticVNode)('<div class="masonry-sizer col-md-6"></div><div class="masonry-item w-100"><div class="row gap-20"></div><div class="bgc-white p-20 bd"><div class="table-responsive"><table class="table table-sm table-borderless table-striped table-hover"><thead><tr class="bg-secondary text-white"><th>IPCR Code</th><th>Major Final Output</th><th>Sub MFO</th><th>Division Output</th><th>Individual Output</th><th>Performance Measure</th><th>Action</th></tr></thead><tbody></tbody></table></div><div class="row justify-content-center"><div class="col-md-12"></div></div><div class="row justify-content-center"><div class="col-md-12"><p></p></div></div></div></div>',2),f=(0,o.createElementVNode)("h1",null,"Upload Excel File",-1),h=(0,o.createElementVNode)("br",null,null,-1),v=["value"],b=(0,o.createElementVNode)("button",{type:"submit",class:"btn btn-primary btn-sm mL-2 text-white"},"Submit",-1);var g=n(4706),y=n(3132),N=n(3922);const E={props:{data:Object,dept:Object,FFUNCCOD:String},data:function(){return{form:this.$inertia.form({myfile:null,name:null,avatar:null,type:!0}),set_type:!1,my_status:"0",my_id:0,my_date:null,displayModal:!1,displayDisappModal:!1}},components:{Pagination:y.Z,Filtering:g.Z,Modal:N.Z},methods:{deleteIFO:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Individual Final Output?")&&this.$inertia.delete("/individual/outputs/"+e)},onFileChanged:function(){this.form.myfile=this.$refs.myFile.files[0],console.log(this.form.myfile)},submit:function(){this.form.myfile?this.form.post("/timerange/import/file/data"):alert("No file chosen!")},showModal:function(){this.displayModal=!0},hideModal:function(){this.displayModal=!1}}};var V=n(3379),k=n.n(V),x=n(5942),w={insert:"head",singleton:!1};k()(x.Z,w);x.Z.locals;const C=(0,n(3744).Z)(E,[["render",function(e,t,n,g,y,N){var E=(0,o.resolveComponent)("Head"),V=(0,o.resolveComponent)("Link"),k=(0,o.resolveComponent)("Modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(E,null,{default:(0,o.withCtx)((function(){return[l]})),_:1}),(0,o.createElementVNode)("div",a,[r,(0,o.createElementVNode)("div",i,[s,(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",d,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,e.search]])]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return N.showModal()})},"Import")]),(0,o.createTextVNode)("  "),(0,o.createVNode)(V,{href:"/logframe"},{default:(0,o.withCtx)((function(){return[m]})),_:1})])]),p,y.displayModal?((0,o.openBlock)(),(0,o.createBlock)(k,{key:0,onCloseModalEvent:N.hideModal},{default:(0,o.withCtx)((function(){return[f,h,(0,o.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return N.submit&&N.submit.apply(N,arguments)}),["prevent"]))},[(0,o.createElementVNode)("input",{type:"file",onInput:t[2]||(t[2]=function(e){return y.form.myfile=e.target.files[0]}),onChange:t[3]||(t[3]=function(e){return N.onFileChanged()})},null,32),y.form.progress?((0,o.openBlock)(),(0,o.createElementBlock)("progress",{key:0,class:"form-control",value:y.form.progress.percentage,max:"100"},(0,o.toDisplayString)(y.form.progress.percentage)+"% ",9,v)):(0,o.createCommentVNode)("",!0),b],32)]})),_:1},8,["onCloseModalEvent"])):(0,o.createCommentVNode)("",!0)])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(821),l={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},a={class:"row",style:{width:"380px"}},r={class:"bgc-white"},i={class:"modal-header"},s=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),c={class:"modal-body"};const d={props:{title:String}};var u=n(3379),m=n.n(u),p=n(8776),f={insert:"head",singleton:!1};m()(p.Z,f);p.Z.locals;const h=(0,n(3744).Z)(d,[["render",function(e,t,n,d,u,m){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",i,[s,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(821),l={class:"pagination"},a={class:"page-item"},r={class:"page-item"};const i={props:{prev:String,next:String}};const s=(0,n(3744).Z)(i,[["render",function(e,t,n,i,s,c){var d=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",l,[(0,o.createElementVNode)("li",a,[n.prev?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",r,[n.next?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Next")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])},3922:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(821),l=function(e){return(0,o.pushScopeId)("data-v-8ec2bb50"),e=e(),(0,o.popScopeId)(),e},a={class:"permissions-modal"},r={class:"modal",tabindex:"-1",role:"dialog"},i={class:"modal-dialog modal-xl"},s={class:"d-flex justify-content-center"},c={class:"modal-content",style:{width:"100% !important",height:"40% !important"}},d={class:"modal-header",style:{"background-color":"#030014"}},u=l((function(){return(0,o.createElementVNode)("h4",{class:"modal-title",style:{color:"#ffe819","text-align":"center !important"}},[(0,o.createElementVNode)("b",null,"PRINT PREVIEW")],-1)})),m=[l((function(){return(0,o.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],p={class:"modal-body"},f=l((function(){return(0,o.createElementVNode)("div",{class:"modal-footer",style:{"background-color":"#090137"}},null,-1)}));const h={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var v=n(3379),b=n.n(v),g=n(6900),y={insert:"head",singleton:!1};b()(g.Z,y);g.Z.locals;const N=(0,n(3744).Z)(h,[["render",function(e,t,n,l,h,v){return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",d,[u,(0,o.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return v.closeModal&&v.closeModal.apply(v,arguments)})},m)]),(0,o.createElementVNode)("div",p,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),f])])])])])}],["__scopeId","data-v-8ec2bb50"]])}}]);