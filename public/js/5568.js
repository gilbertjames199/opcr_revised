"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5568],{8433:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const a=l},8776:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const a=l},6900:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,".modal[data-v-8ec2bb50]{display:block}",""]);const a=l},5568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var o=n(821),l=(0,o.createElementVNode)("title",null,"Home",-1),a={class:"row gap-20 masonry pos-r"},r={class:"peers fxw-nw jc-sb ai-c"},c=(0,o.createElementVNode)("h3",null,"HGDG Checklist",-1),d={class:"peers"},s={class:"peer mR-10"},i={class:"peer"},u=(0,o.createTextVNode)("Add Checklist"),m=(0,o.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),p={class:"masonry-item w-100"},h=(0,o.createElementVNode)("div",{class:"row gap-20"},null,-1),f={class:"bgc-white p-20 bd"},v={class:"table-responsive"},N={class:"table table-sm table-borderless table-striped table-hover"},V=(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,o.createElementVNode)("th",null,"Box Number"),(0,o.createElementVNode)("th",null,"Sector"),(0,o.createElementVNode)("th",null,"Action")])],-1),E={class:"dropdown dropstart"},b=(0,o.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),g={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},k=(0,o.createTextVNode)("Add Questions"),x=(0,o.createTextVNode)("Edit"),w=(0,o.createTextVNode)("Delete"),y=(0,o.createTextVNode)("Print"),C={class:"row justify-content-center"},B={class:"col-md-12"},_={class:"row justify-content-center"},M={class:"col-md-12"},S=(0,o.createElementVNode)("div",{class:"d-flex justify-content-center"},null,-1);var Z=n(4706),D=n(3132),G=n(3922);const T={props:{data:Object},data:function(){return{displayModal:!1,my_link:""}},components:{Pagination:D.Z,Filtering:Z.Z,Modal:G.Z},methods:{showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteSectoral:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Checklist?"+e)&&this.$inertia.delete("/HGDGChecklist/"+e)},getAccomplishment:function(e){this.$inertia.get("/accomplishments",{idtarget:e},{preserveScroll:!0,preserveState:!0,replace:!0})},getPercent:function(e,t){var n=0;e.forEach((function(e){n+=parseFloat(e.accomplishment_qty)}));var o=n/t*100;return o=this.format_number(o,2,!0)},print:function(e,t,n){alert("checklist_id: "+e+"\nbox_number: "+t+"\nsector"+n),this.showModal()},showModal:function(){this.displayModal=!0},hideModal:function(){this.displayModal=!1}}};var P=n(3379),z=n.n(P),H=n(8433),I={insert:"head",singleton:!1};z()(H.Z,I);H.Z.locals;const $=(0,n(3744).Z)(T,[["render",function(e,t,n,Z,D,G){var T=(0,o.resolveComponent)("Head"),P=(0,o.resolveComponent)("Link"),z=(0,o.resolveComponent)("pagination"),H=(0,o.resolveComponent)("Modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(T,null,{default:(0,o.withCtx)((function(){return[l]})),_:1}),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[c,(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",s,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,e.search]])]),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(P,{class:"btn btn-primary btn-sm",href:"/HGDGChecklist/create"},{default:(0,o.withCtx)((function(){return[u]})),_:1})])])]),m,(0,o.createElementVNode)("div",p,[h,(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("table",N,[V,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.data.data,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",null,[(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.box_number),1),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.sector),1),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",E,[b,(0,o.createElementVNode)("ul",g,[(0,o.createElementVNode)("li",null,[(0,o.createVNode)(P,{class:"dropdown-item",href:"/HGDGQuestions/".concat(e.id)},{default:(0,o.withCtx)((function(){return[k]})),_:2},1032,["href"])]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(P,{class:"dropdown-item",href:"/HGDGChecklist/".concat(e.id,"/edit")},{default:(0,o.withCtx)((function(){return[x]})),_:2},1032,["href"])]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(P,{class:"text-danger dropdown-item",onClick:function(t){return G.deleteSectoral(e.id)}},{default:(0,o.withCtx)((function(){return[w]})),_:2},1032,["onClick"])]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(P,{class:"text-danger dropdown-item",onClick:function(t){return G.print(e.id,e.box_number,e.sector)}},{default:(0,o.withCtx)((function(){return[y]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",B,[(0,o.createVNode)(z,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("div",M,[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(n.data.from)+" to "+(0,o.toDisplayString)(n.data.to)+" of "+(0,o.toDisplayString)(n.data.total)+" entries ",1)])])])]),D.displayModal?((0,o.openBlock)(),(0,o.createBlock)(H,{key:0,onCloseModalEvent:G.hideModal},{default:(0,o.withCtx)((function(){return[S]})),_:1},8,["onCloseModalEvent"])):(0,o.createCommentVNode)("",!0)])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(821),l={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},a={class:"row",style:{width:"380px"}},r={class:"bgc-white"},c={class:"modal-header"},d=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),s={class:"modal-body"};const i={props:{title:String}};var u=n(3379),m=n.n(u),p=n(8776),h={insert:"head",singleton:!1};m()(p.Z,h);p.Z.locals;const f=(0,n(3744).Z)(i,[["render",function(e,t,n,i,u,m){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",c,[d,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(821),l={class:"pagination"},a={class:"page-item"},r=(0,o.createTextVNode)("Previous"),c={class:"page-item"},d=(0,o.createTextVNode)("Next");const s={props:{prev:String,next:String}};const i=(0,n(3744).Z)(s,[["render",function(e,t,n,s,i,u){var m=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",l,[(0,o.createElementVNode)("li",a,[n.prev?((0,o.openBlock)(),(0,o.createBlock)(m,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[r]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",c,[n.next?((0,o.openBlock)(),(0,o.createBlock)(m,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[d]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])},3922:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(821),l=function(e){return(0,o.pushScopeId)("data-v-8ec2bb50"),e=e(),(0,o.popScopeId)(),e},a={class:"permissions-modal"},r={class:"modal",tabindex:"-1",role:"dialog"},c={class:"modal-dialog modal-xl"},d={class:"d-flex justify-content-center"},s={class:"modal-content",style:{width:"100% !important",height:"40% !important"}},i={class:"modal-header",style:{"background-color":"#030014"}},u=l((function(){return(0,o.createElementVNode)("h4",{class:"modal-title",style:{color:"#ffe819","text-align":"center !important"}},[(0,o.createElementVNode)("b",null,"PRINT PREVIEW")],-1)})),m=[l((function(){return(0,o.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],p={class:"modal-body"},h=l((function(){return(0,o.createElementVNode)("div",{class:"modal-footer",style:{"background-color":"#090137"}},null,-1)}));const f={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var v=n(3379),N=n.n(v),V=n(6900),E={insert:"head",singleton:!1};N()(V.Z,E);V.Z.locals;const b=(0,n(3744).Z)(f,[["render",function(e,t,n,l,f,v){return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",i,[u,(0,o.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return v.closeModal&&v.closeModal.apply(v,arguments)})},m)]),(0,o.createElementVNode)("div",p,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),h])])])])])}],["__scopeId","data-v-8ec2bb50"]])}}]);