"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9069],{9475:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}.quill-editor-container .quill-toolbar-hidden .ql-toolbar{display:none}",""]);const o=a},8776:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const o=a},9069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(821),a=(0,l.createElementVNode)("title",null,"Research Agenda",-1),o={class:"row gap-20 masonry pos-r"},r={class:"peers fxw-nw jc-sb ai-c"},c=(0,l.createElementVNode)("h3",null,"Research Agenda",-1),d={class:"peers"},i={class:"peer mR-10"},s={class:"peer"},m=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),p={class:"masonry-item w-100"},u=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),N={class:"bgc-white p-20 bd"},v={class:"table-responsive"},h={class:"table table-sm table-borderless table-striped table-hover"},E=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,l.createElementVNode)("th",null,"Description"),(0,l.createElementVNode)("th",null,"Year From"),(0,l.createElementVNode)("th",null,"Year To"),(0,l.createElementVNode)("th",null,"Rationale"),(0,l.createElementVNode)("th",null,"Action")])],-1),V={class:"quill-editor-container"},g={key:0,class:"quill-toolbar-hidden"},f={key:1},b=["innerHTML"],k={class:"dropdown dropstart"},w=(0,l.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),x={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},y={class:"row justify-content-center"},B={class:"col-md-12"},C={class:"row justify-content-center"},A={class:"col-md-12"};var Z=n(4706),_=n(3132);const R={props:{data:Object},data:function(){return{}},components:{Pagination:_.Z,Filtering:Z.Z},methods:{deleteRA:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Research Agenda?")&&this.$inertia.delete("/ResearchAgenda/"+e)}}};var S=n(3379),T=n.n(S),D=n(9475),z={insert:"head",singleton:!1};T()(D.Z,z);D.Z.locals;const L=(0,n(3744).Z)(R,[["render",function(e,t,n,Z,_,R){var S=(0,l.resolveComponent)("Head"),T=(0,l.resolveComponent)("Link"),D=(0,l.resolveComponent)("QuillEditor"),z=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(S,null,{default:(0,l.withCtx)((function(){return[a]})),_:1}),(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",r,[c,(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("div",i,[(0,l.withDirectives)((0,l.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[l.vModelText,e.search]])]),(0,l.createElementVNode)("div",s,[(0,l.createVNode)(T,{class:"btn btn-primary btn-sm",href:"/ResearchAgenda/create"},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Add Agenda")]})),_:1})])])]),m,(0,l.createElementVNode)("div",p,[u,(0,l.createElementVNode)("div",N,[(0,l.createElementVNode)("div",v,[(0,l.createElementVNode)("table",h,[E,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.data.data,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",null,[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.agenda_description),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.year_from),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.year_to),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",V,[e.isEditing?((0,l.openBlock)(),(0,l.createElementBlock)("div",f,[(0,l.createElementVNode)("div",{innerHTML:e.rationale},null,8,b)])):((0,l.openBlock)(),(0,l.createElementBlock)("div",g,[(0,l.createVNode)(D,{content:e.rationale,"onUpdate:content":function(t){return e.rationale=t},contentType:"html",readOnly:!0},null,8,["content","onUpdate:content"])]))])]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",k,[w,(0,l.createElementVNode)("ul",x,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(T,{class:"dropdown-item",href:"/ResearchAgenda/".concat(e.id,"/edit")},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Edit ")]})),_:2},1032,["href"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(T,{class:"text-danger dropdown-item",onClick:function(t){return R.deleteRA(e.id)}},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Delete ")]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("div",B,[(0,l.createVNode)(z,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,l.createElementVNode)("div",C,[(0,l.createElementVNode)("div",A,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(n.data.from)+" to "+(0,l.toDisplayString)(n.data.to)+" of "+(0,l.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(821),a={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},o={class:"row",style:{width:"380px"}},r={class:"bgc-white"},c={class:"modal-header"},d=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),i={class:"modal-body"};const s={props:{title:String}};var m=n(3379),p=n.n(m),u=n(8776),N={insert:"head",singleton:!1};p()(u.Z,N);u.Z.locals;const v=(0,n(3744).Z)(s,[["render",function(e,t,n,s,m,p){return(0,l.openBlock)(),(0,l.createElementBlock)("div",a,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",c,[d,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",i,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(821),a={class:"pagination"},o={class:"page-item"},r={class:"page-item"};const c={props:{prev:String,next:String}};const d=(0,n(3744).Z)(c,[["render",function(e,t,n,c,d,i){var s=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",a,[(0,l.createElementVNode)("li",o,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(s,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",r,[n.next?((0,l.openBlock)(),(0,l.createBlock)(s,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)("Next")]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);