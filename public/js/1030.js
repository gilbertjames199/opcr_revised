"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1030],{7351:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(3645),o=n.n(l)()((function(e){return e[1]}));o.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const r=o},8776:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(3645),o=n.n(l)()((function(e){return e[1]}));o.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const r=o},1030:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(821),o=(0,l.createElementVNode)("title",null,"Divisions",-1),r={class:"row gap-20 masonry pos-r"},a=(0,l.createElementVNode)("div",{class:"peers fxw-nw jc-sb ai-c"},null,-1),c={class:"peers fxw-nw jc-sb ai-c"},i=(0,l.createElementVNode)("h3",null,"Divisions",-1),d={class:"peers"},s={class:"peer mR-10"},u={class:"peer"},p=(0,l.createTextVNode)("Add Division"),m=(0,l.createTextVNode)("  "),v=(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),N=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),h={class:"masonry-item w-100"},V=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),E={class:"bgc-white p-20 bd"},f={class:"table-responsive"},g={class:"table table-sm table-borderless table-striped table-hover"},w=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,l.createElementVNode)("th",null,"Description"),(0,l.createElementVNode)("th",null,"Major Final Output"),(0,l.createElementVNode)("th",null,"Output"),(0,l.createElementVNode)("th",null,"Action")])],-1),b={class:"dropdown dropstart"},x=(0,l.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),k={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},y=(0,l.createTextVNode)("Edit"),C=(0,l.createTextVNode)("Delete"),B={class:"row justify-content-center"},Z={class:"col-md-12"},_={class:"row justify-content-center"},D={class:"col-md-12"};var S=n(4706),F=n(3132);const M={props:{data:Object,dept:Object,FFUNCCOD:String},data:function(){return{}},components:{Pagination:F.Z,Filtering:S.Z},methods:{deleteRA:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Research Agenda?")&&this.$inertia.delete("/division_outputs/"+e)}}};var j=n(3379),z=n.n(j),A=n(7351),T={insert:"head",singleton:!1};z()(A.Z,T);A.Z.locals;const L=(0,n(3744).Z)(M,[["render",function(e,t,n,S,F,M){var j=(0,l.resolveComponent)("Head"),z=(0,l.resolveComponent)("Link"),A=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(j,null,{default:(0,l.withCtx)((function(){return[o]})),_:1}),(0,l.createElementVNode)("div",r,[a,(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("div",s,[(0,l.withDirectives)((0,l.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[l.vModelText,e.search]])]),(0,l.createElementVNode)("div",u,[(0,l.createVNode)(z,{class:"btn btn-primary btn-sm",href:"/division_outputs/create"},{default:(0,l.withCtx)((function(){return[p]})),_:1}),(0,l.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(t){return e.showFilter()})},"Filter")]),m,(0,l.createVNode)(z,{href:"/logframe"},{default:(0,l.withCtx)((function(){return[v]})),_:1})])]),N,(0,l.createElementVNode)("div",h,[V,(0,l.createElementVNode)("div",E,[(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("table",g,[w,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.data.data,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",null,[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.description),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.mfo_desc),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.output),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",b,[x,(0,l.createElementVNode)("ul",k,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(z,{class:"dropdown-item",href:"/division_outputs/".concat(e.id,"/edit")},{default:(0,l.withCtx)((function(){return[y]})),_:2},1032,["href"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(z,{class:"text-danger dropdown-item",onClick:function(t){return M.deleteRA(e.id)}},{default:(0,l.withCtx)((function(){return[C]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,l.createElementVNode)("div",B,[(0,l.createElementVNode)("div",Z,[(0,l.createVNode)(A,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(n.data.from)+" to "+(0,l.toDisplayString)(n.data.to)+" of "+(0,l.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>N});var l=n(821),o={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},r={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header"},i=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),d={class:"modal-body"};const s={props:{title:String}};var u=n(3379),p=n.n(u),m=n(8776),v={insert:"head",singleton:!1};p()(m.Z,v);m.Z.locals;const N=(0,n(3744).Z)(s,[["render",function(e,t,n,s,u,p){return(0,l.openBlock)(),(0,l.createElementBlock)("div",o,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",d,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(821),o={class:"pagination"},r={class:"page-item"},a=(0,l.createTextVNode)("Previous"),c={class:"page-item"},i=(0,l.createTextVNode)("Next");const d={props:{prev:String,next:String}};const s=(0,n(3744).Z)(d,[["render",function(e,t,n,d,s,u){var p=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",o,[(0,l.createElementVNode)("li",r,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(p,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[a]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",c,[n.next?((0,l.openBlock)(),(0,l.createBlock)(p,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[i]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);