"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2354],{9929:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(3645),r=n.n(l)()((function(e){return e[1]}));r.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}.quill-editor-container .quill-toolbar-hidden .ql-toolbar{display:none}",""]);const a=r},8776:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(3645),r=n.n(l)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const a=r},2354:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(821),r=(0,l.createElementVNode)("title",null,"Home",-1),a={class:"row gap-20 masonry pos-r"},o={class:"peers fxw-nw jc-sb ai-c"},c=(0,l.createElementVNode)("h3",null,"Chief Executive Agenda",-1),i={class:"peers"},d={class:"peer mR-10"},s={class:"peer"},p=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),m={class:"masonry-item w-100"},u=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),h={class:"bgc-white p-20 bd"},v={class:"table-responsive"},E={class:"table table-sm table-borderless table-striped table-hover"},N=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,l.createElementVNode)("th",null,"Agenda Description"),(0,l.createElementVNode)("th",null,"Year From"),(0,l.createElementVNode)("th",null,"Year To"),(0,l.createElementVNode)("th",null,"Rationale"),(0,l.createElementVNode)("th",null,"Action")])],-1),g={class:"quill-editor-container"},f={key:0,class:"quill-toolbar-hidden"},V={key:1},b=["innerHTML"],x={class:"dropdown dropstart"},k=(0,l.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),w={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},y={class:"row justify-content-center"},C={class:"col-md-12"},B={class:"row justify-content-center"},S={class:"col-md-12"};var _=n(4706),A=n(3132);const Z={props:{data:Object},data:function(){return{}},components:{Pagination:A.Z,Filtering:_.Z},methods:{showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteChiefAgenda:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Chief Executive Agenda?"+e)&&this.$inertia.delete("/ChiefAgenda/"+e)},getAccomplishment:function(e){this.$inertia.get("/accomplishments",{idtarget:e},{preserveScroll:!0,preserveState:!0,replace:!0})},getPercent:function(e,t){var n=0;e.forEach((function(e){n+=parseFloat(e.accomplishment_qty)}));var l=n/t*100;return l=this.format_number(l,2,!0)}}};var T=n(3379),D=n.n(T),z=n(9929),F={insert:"head",singleton:!1};D()(z.Z,F);z.Z.locals;const L=(0,n(3744).Z)(Z,[["render",function(e,t,n,_,A,Z){var T=(0,l.resolveComponent)("Head"),D=(0,l.resolveComponent)("Link"),z=(0,l.resolveComponent)("QuillEditor"),F=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(T,null,{default:(0,l.withCtx)((function(){return[r]})),_:1}),(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",o,[c,(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",d,[(0,l.withDirectives)((0,l.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[l.vModelText,e.search]])]),(0,l.createElementVNode)("div",s,[(0,l.createVNode)(D,{class:"btn btn-primary btn-sm",href:"/ChiefAgenda/create"},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Add Agenda")]})),_:1})])])]),p,(0,l.createElementVNode)("div",m,[u,(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("div",v,[(0,l.createElementVNode)("table",E,[N,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.data.data,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",null,[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.agenda_description),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.yearfrom),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.yearto),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",g,[e.isEditing?((0,l.openBlock)(),(0,l.createElementBlock)("div",V,[(0,l.createElementVNode)("div",{innerHTML:e.rationale},null,8,b)])):((0,l.openBlock)(),(0,l.createElementBlock)("div",f,[(0,l.createVNode)(z,{content:e.rationale,"onUpdate:content":function(t){return e.rationale=t},contentType:"html",readOnly:!0},null,8,["content","onUpdate:content"])]))])]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",x,[k,(0,l.createElementVNode)("ul",w,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(D,{class:"dropdown-item",href:"/ChiefAgenda/".concat(e.id,"/edit")},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Edit ")]})),_:2},1032,["href"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(D,{class:"text-danger dropdown-item",onClick:function(t){return Z.deleteChiefAgenda(e.id)}},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)(" Delete")]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("div",C,[(0,l.createVNode)(F,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,l.createElementVNode)("div",B,[(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(n.data.from)+" to "+(0,l.toDisplayString)(n.data.to)+" of "+(0,l.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},a={class:"row",style:{width:"380px"}},o={class:"bgc-white"},c={class:"modal-header"},i=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),d={class:"modal-body"};const s={props:{title:String}};var p=n(3379),m=n.n(p),u=n(8776),h={insert:"head",singleton:!1};m()(u.Z,h);u.Z.locals;const v=(0,n(3744).Z)(s,[["render",function(e,t,n,s,p,m){return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",d,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(821),r={class:"pagination"},a={class:"page-item"},o={class:"page-item"};const c={props:{prev:String,next:String}};const i=(0,n(3744).Z)(c,[["render",function(e,t,n,c,i,d){var s=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",r,[(0,l.createElementVNode)("li",a,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(s,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",o,[n.next?((0,l.openBlock)(),(0,l.createBlock)(s,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Next")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);