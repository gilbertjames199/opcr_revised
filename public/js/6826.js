"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6826],{1106:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const r=a},8776:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const r=a},6826:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var l=n(821),a=(0,l.createElementVNode)("title",null,"Home",-1),r={class:"row gap-20 masonry pos-r"},o={class:"peers fxw-nw jc-sb ai-c"},c=(0,l.createElementVNode)("h3",null,"Office/Individual Accountable",-1),i={class:"peers"},d={class:"peer mR-10"},s={class:"peer"},u=(0,l.createTextVNode)("Add Office/Individual Accountable"),p=(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),m=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),f={class:"masonry-item w-100"},v=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),h={class:"bgc-white p-20 bd"},N={class:"table-responsive"},V={class:"table table-sm table-borderless table-striped table-hover"},b=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,l.createElementVNode)("th",null,"Office/Individual Accountable"),(0,l.createElementVNode)("th",null,"Action")])],-1),g={class:"dropdown dropstart"},E=(0,l.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),w={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},x=(0,l.createTextVNode)("Edit"),k=(0,l.createTextVNode)("Delete"),y={class:"row justify-content-center"},C={class:"col-md-12"},B={class:"row justify-content-center"},_={class:"col-md-12"};var Z=n(4706),S=n(3132);const A={props:{data:Object,paps:Object,idpaps:String},data:function(){return{}},components:{Pagination:S.Z,Filtering:Z.Z},methods:{showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteOutput:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Office/Individual Accountable?"+e)&&this.$inertia.delete("/OfficeAccountable/"+e)},getAccomplishment:function(e){this.$inertia.get("/accomplishments",{idtarget:e},{preserveScroll:!0,preserveState:!0,replace:!0})},getPercent:function(e,t){var n=0;e.forEach((function(e){n+=parseFloat(e.accomplishment_qty)}));var l=n/t*100;return l=this.format_number(l,2,!0)}}};var O=n(3379),F=n.n(O),z=n(1106),M={insert:"head",singleton:!1};F()(z.Z,M);z.Z.locals;const D=(0,n(3744).Z)(A,[["render",function(e,t,n,Z,S,A){var O=(0,l.resolveComponent)("Head"),F=(0,l.resolveComponent)("Link"),z=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(O,null,{default:(0,l.withCtx)((function(){return[a]})),_:1}),(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",o,[c,(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",d,[(0,l.withDirectives)((0,l.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[l.vModelText,e.search]])]),(0,l.createElementVNode)("div",s,[(0,l.createVNode)(F,{class:"btn btn-primary btn-sm",href:"/OfficeAccountable/create/".concat(n.idpaps)},{default:(0,l.withCtx)((function(){return[u]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(t){return e.showFilter()})},"Filter")]),(0,l.createVNode)(F,{href:"/OPCRpaps/direct"},{default:(0,l.withCtx)((function(){return[p]})),_:1})])]),m,(0,l.createElementVNode)("div",f,[v,(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("div",N,[(0,l.createElementVNode)("table",V,[b,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.data.data,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",null,[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.office_accountable),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",g,[E,(0,l.createElementVNode)("ul",w,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(F,{class:"dropdown-item",href:"/OfficeAccountable/".concat(e.id,"/edit")},{default:(0,l.withCtx)((function(){return[x]})),_:2},1032,["href"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(F,{class:"text-danger dropdown-item",onClick:function(t){return A.deleteOutput(e.id)}},{default:(0,l.withCtx)((function(){return[k]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("div",C,[(0,l.createVNode)(z,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,l.createElementVNode)("div",B,[(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(n.data.from)+" to "+(0,l.toDisplayString)(n.data.to)+" of "+(0,l.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(821),a={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},r={class:"row",style:{width:"380px"}},o={class:"bgc-white"},c={class:"modal-header"},i=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),d={class:"modal-body"};const s={props:{title:String}};var u=n(3379),p=n.n(u),m=n(8776),f={insert:"head",singleton:!1};p()(m.Z,f);m.Z.locals;const v=(0,n(3744).Z)(s,[["render",function(e,t,n,s,u,p){return(0,l.openBlock)(),(0,l.createElementBlock)("div",a,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",d,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(821),a={class:"pagination"},r={class:"page-item"},o=(0,l.createTextVNode)("Previous"),c={class:"page-item"},i=(0,l.createTextVNode)("Next");const d={props:{prev:String,next:String}};const s=(0,n(3744).Z)(d,[["render",function(e,t,n,d,s,u){var p=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",a,[(0,l.createElementVNode)("li",r,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(p,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[o]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",c,[n.next?((0,l.openBlock)(),(0,l.createBlock)(p,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[i]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);