"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6238],{6590:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(3645),o=n.n(l)()((function(e){return e[1]}));o.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const a=o},8776:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(3645),o=n.n(l)()((function(e){return e[1]}));o.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const a=o},6900:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(3645),o=n.n(l)()((function(e){return e[1]}));o.push([e.id,".modal[data-v-8ec2bb50]{display:block}",""]);const a=o},6238:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var l=n(821),o=(0,l.createElementVNode)("title",null,"Home",-1),a={class:"row gap-20 masonry pos-r"},r={class:"peers fxw-nw jc-sb ai-c"},c=(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),i=(0,l.createElementVNode)("div",{class:"peers fxw-nw jc-sb ai-c"},[(0,l.createElementVNode)("h3",null,"LOGICAL FRAMEWORK")],-1),s=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),d={class:"masonry-item w-100"},p=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),m={class:"bgc-white p-20 bd"},u={class:"table-responsive"},f={class:"table table-sm table-hover table-bordered border-dark"},h=(0,l.createElementVNode)("td",null,"SOCIETAL GOAL",-1),E={colspan:"4"},v=["innerHTML"],N=(0,l.createElementVNode)("hr",null,null,-1),g=(0,l.createElementVNode)("td",null,"SECTOR OUTCOMES ",-1),V={colspan:"4"},k=["innerHTML"],b=(0,l.createElementVNode)("td",null,"ORGANIZATIONAL OUTCOME",-1),w={colspan:"4"},y=["innerHTML"],B=["rowspan"],C={class:"pL-2",colspan:"2"},x=["href"],M=(0,l.createElementVNode)("br",null,null,-1),F={key:0},O=(0,l.createElementVNode)("div",{style:{color:"white"}}," .",-1),L={class:"d-flex justify-content-center"},S=["src"];var T=n(4706),Z=n(3132),j=n(3922);const A={props:{data:Object,societal:Object,sec_econ:Object,sec_social:Object,sec_general:Object,organizational:Object,sec_goal:Object,mfos:Object,office:String,functional:Object,auth:Object,FFUNCCOD:String},data:function(){return{mfo_rowspan:0,displayModal:!1}},mounted:function(){this.mfo_rowspan=this.mfos.length},watch:{search:_.debounce((function(e){this.$inertia.get("/paps/"+this.idmfo,{search:e},{preserveScroll:!0,preserveState:!0,replace:!0})}),300)},computed:{officeCap:function(){return this.office}},components:{Pagination:Z.Z,Filtering:T.Z,Modal:j.Z},methods:{getToRep:function(e,t){return"http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FNLogFrame%2FLogframe&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FNLogFrame&standAlone=true&decorate=no&output=pdf"+("&id="+e+"&FUNCTION="+t)},showModal:function(e,t){this.my_link=this.getToRep(e,t),this.displayModal=!0},showModalAd:function(e,t){var n="http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogframe_spcl%2FMAIN_LOGFRAME&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogframe_spcl&decorate=no&output=pdf"+("&id="+e+"&FUNCTION="+t);this.displayModal=!0,this.my_link=n},hideModal:function(){this.displayModal=!1}}};var D=n(3379),I=n.n(D),R=n(6590),U={insert:"head",singleton:!1};I()(R.Z,U);R.Z.locals;const P=(0,n(3744).Z)(A,[["render",function(e,t,n,_,T,Z){var j=(0,l.resolveComponent)("Head"),A=(0,l.resolveComponent)("Link"),D=(0,l.resolveComponent)("Modal");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(j,null,{default:(0,l.withCtx)((function(){return[o]})),_:1}),(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("h2",null,(0,l.toDisplayString)(n.office),1),(0,l.createTextVNode)("   "),(0,l.createElementVNode)("div",null,[(0,l.createElementVNode)("button",{class:"btn btn-primary mt-3 text-white",onClick:t[0]||(t[0]=function(e){return Z.showModal(n.FFUNCCOD,n.office)})}," Print Logframe ")]),(0,l.createVNode)(A,{href:"/logframe"},{default:(0,l.withCtx)((function(){return[c]})),_:1})]),i,s,(0,l.createElementVNode)("div",d,[p,(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("div",u,[(0,l.createElementVNode)("table",f,[(0,l.createElementVNode)("tbody",null,[(0,l.createElementVNode)("tr",null,[h,(0,l.createElementVNode)("td",E,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.societal,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",{align:"justify",innerHTML:e.description},null,8,v),N])})),256))])]),(0,l.createElementVNode)("tr",null,[g,(0,l.createElementVNode)("td",V,[(0,l.createElementVNode)("div",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.sec_goal,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",{align:"justify",innerHTML:e.goal_description},null,8,k)])})),256))])])]),(0,l.createElementVNode)("tr",null,[b,(0,l.createElementVNode)("td",w,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.organizational,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",{align:"justify",innerHTML:e.goal_description},null,8,y)])})),256))])]),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.mfos,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:t},[0==t?((0,l.openBlock)(),(0,l.createElementBlock)("td",{key:0,rowspan:T.mfo_rowspan},"MAJOR FINAL OUTPUTS",8,B)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("td",null,[(0,l.createVNode)(A,{href:"/paps/".concat(e.id)},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("b",null,(0,l.toDisplayString)(e.mfo_desc),1)]})),_:2},1032,["href"])]),(0,l.createElementVNode)("td",C,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.paps,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("a",{href:"/revision/".concat(e.id),target:"_blank"},(0,l.toDisplayString)(e.paps_desc),9,x),M,"-"!==e.MOV?((0,l.openBlock)(),(0,l.createElementBlock)("span",F,[(0,l.createTextVNode)("("),(0,l.createElementVNode)("i",null,"Description: "+(0,l.toDisplayString)(e.MOV),1),(0,l.createTextVNode)(")")])):(0,l.createCommentVNode)("",!0),O])})),256))])])})),128))])])])])]),T.displayModal?((0,l.openBlock)(),(0,l.createBlock)(D,{key:0,onCloseModalEvent:Z.hideModal},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",L,[(0,l.createElementVNode)("iframe",{src:e.my_link,style:{width:"100%",height:"500px"}},null,8,S)])]})),_:1},8,["onCloseModalEvent"])):(0,l.createCommentVNode)("",!0)])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(821),o={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},a={class:"row",style:{width:"380px"}},r={class:"bgc-white"},c={class:"modal-header"},i=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),s={class:"modal-body"};const d={props:{title:String}};var p=n(3379),m=n.n(p),u=n(8776),f={insert:"head",singleton:!1};m()(u.Z,f);u.Z.locals;const h=(0,n(3744).Z)(d,[["render",function(e,t,n,d,p,m){return(0,l.openBlock)(),(0,l.createElementBlock)("div",o,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",s,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(821),o={class:"pagination"},a={class:"page-item"},r={class:"page-item"};const c={props:{prev:String,next:String}};const i=(0,n(3744).Z)(c,[["render",function(e,t,n,c,i,s){var d=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",o,[(0,l.createElementVNode)("li",a,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(d,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",r,[n.next?((0,l.openBlock)(),(0,l.createBlock)(d,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Next")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])},3922:(e,t,n)=>{n.d(t,{Z:()=>V});var l=n(821),o=function(e){return(0,l.pushScopeId)("data-v-8ec2bb50"),e=e(),(0,l.popScopeId)(),e},a={class:"permissions-modal"},r={class:"modal",tabindex:"-1",role:"dialog"},c={class:"modal-dialog modal-xl"},i={class:"d-flex justify-content-center"},s={class:"modal-content",style:{width:"100% !important",height:"40% !important"}},d={class:"modal-header",style:{"background-color":"#030014"}},p=o((function(){return(0,l.createElementVNode)("h4",{class:"modal-title",style:{color:"#ffe819","text-align":"center !important"}},[(0,l.createElementVNode)("b",null,"PRINT PREVIEW")],-1)})),m=[o((function(){return(0,l.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],u={class:"modal-body"},f=o((function(){return(0,l.createElementVNode)("div",{class:"modal-footer",style:{"background-color":"#090137"}},null,-1)}));const h={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var E=n(3379),v=n.n(E),N=n(6900),g={insert:"head",singleton:!1};v()(N.Z,g);N.Z.locals;const V=(0,n(3744).Z)(h,[["render",function(e,t,n,o,h,E){return(0,l.openBlock)(),(0,l.createElementBlock)("div",a,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",d,[p,(0,l.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return E.closeModal&&E.closeModal.apply(E,arguments)})},m)]),(0,l.createElementVNode)("div",u,[(0,l.renderSlot)(e.$slots,"default",{},void 0,!0)]),f])])])])])}],["__scopeId","data-v-8ec2bb50"]])}}]);