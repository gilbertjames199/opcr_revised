"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2e3],{8395:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const l=a},8776:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=a},2e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(821),a=(0,r.createElementVNode)("title",null,"OPCR Targets",-1),l={class:"row gap-20 masonry pos-r"},o={class:"peers fxw-nw jc-sb ai-c"},c=(0,r.createElementVNode)("h3",null,"OPCR Targets",-1),s={class:"peers"},d={class:"peer mR-10"},i={class:"peer"},p=(0,r.createTextVNode)("Create OPCR"),u=(0,r.createTextVNode)("   "),m=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),h=(0,r.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),g={class:"masonry-item w-100"},N=(0,r.createElementVNode)("div",{class:"row gap-20"},null,-1),V={class:"bgc-white p-20 bd"},f={class:"table-responsive"},v={class:"table table-hover table-striped table-bordered border-dark"},E=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,r.createElementVNode)("th",null,"PAPS"),(0,r.createElementVNode)("th",null,"Success Indicator"),(0,r.createElementVNode)("th",null,"Target"),(0,r.createElementVNode)("th",null,"Target Quantity"),(0,r.createElementVNode)("th",null,"Actions")])],-1),w=["rowspan"],k={class:"dropdown dropstart"},b=(0,r.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),x={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},y={key:0},C=(0,r.createTextVNode)("Edit"),B={key:1},_=(0,r.createTextVNode)("Delete "),T=(0,r.createElementVNode)("div",{class:"row justify-content-center"},[(0,r.createElementVNode)("div",{class:"col-md-12"})],-1),Z=(0,r.createElementVNode)("div",{class:"row justify-content-center"},[(0,r.createElementVNode)("div",{class:"col-md-12"})],-1);var S=n(4706),F=n(3132);const P={props:{opcr_list_id:String,data:Object,FFUNCCOD:String},data:function(){return{}},components:{Pagination:F.Z,Filtering:S.Z},methods:{deleteTarget:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Target?")&&this.$inertia.delete("/opcrtarget/"+e)},createTarget:function(e,t){null===t?alert("This PPA has no success indicator! Add success indicator for the target first!"):this.$inertia.get("/opcrtarget/create/"+this.opcr_list_id,{idpaps:e})},getRowspanPaps:function(e,t){for(var n=1,r=parseFloat(t)+1;r<this.data.length&&this.data[r].paps_desc===e;r++)n=parseFloat(n)+1;return n}}};var D=n(3379),z=n.n(D),A=n(8395),M={insert:"head",singleton:!1};z()(A.Z,M);A.Z.locals;const R=(0,n(3744).Z)(P,[["render",function(e,t,n,S,F,P){var D=(0,r.resolveComponent)("Head"),z=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(D,null,{default:(0,r.withCtx)((function(){return[a]})),_:1}),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",o,[c,(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",d,[(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[r.vModelText,e.search]])]),(0,r.createElementVNode)("div",i,[(0,r.createVNode)(z,{class:"btn btn-primary btn-sm",href:"/opcrtarget/create/".concat(n.opcr_list_id)},{default:(0,r.withCtx)((function(){return[p]})),_:1},8,["href"]),(0,r.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(t){return e.showFilter()})},"Filter")]),u,(0,r.createVNode)(z,{href:"/opcrlist/".concat(n.FFUNCCOD)},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"])])]),h,(0,r.createElementVNode)("div",g,[N,(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("table",v,[E,(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.data,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:t},[0===t||e.paps_desc!==n.data[t-1].paps_desc?((0,r.openBlock)(),(0,r.createElementBlock)("td",{key:0,rowspan:P.getRowspanPaps(e.paps_desc,t),style:{"vertical-align":"middle"}},(0,r.toDisplayString)(e.paps_desc),9,w)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.success_indicator),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.target_success_indicator),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.quantity),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("div",k,[b,(0,r.createElementVNode)("ul",x,[e.id?((0,r.openBlock)(),(0,r.createElementBlock)("li",y,[(0,r.createVNode)(z,{class:"dropdown-item",href:"/opcrtarget/".concat(e.id,"/edit")},{default:(0,r.withCtx)((function(){return[C]})),_:2},1032,["href"])])):(0,r.createCommentVNode)("",!0),e.id?((0,r.openBlock)(),(0,r.createElementBlock)("li",B,[(0,r.createVNode)(z,{class:"text-danger dropdown-item",onClick:function(t){return P.deleteTarget(e.id)}},{default:(0,r.withCtx)((function(){return[_]})),_:2},1032,["onClick"])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(z,{class:"text-danger dropdown-item",onClick:function(t){return P.createTarget(e.idpaps,e.success_indicator)}},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Add Target -dat.id "+(0,r.toDisplayString)(e.id),1)]})),_:2},1032,["onClick"])])])])])])})),128))])])]),T,Z])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(821),a={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},o={class:"bgc-white"},c={class:"modal-header"},s=(0,r.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),d={class:"modal-body"};const i={props:{title:String}};var p=n(3379),u=n.n(p),m=n(8776),h={insert:"head",singleton:!1};u()(m.Z,h);m.Z.locals;const g=(0,n(3744).Z)(i,[["render",function(e,t,n,i,p,u){return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",c,[s,(0,r.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,r.createElementVNode)("div",d,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),a={class:"pagination"},l={class:"page-item"},o=(0,r.createTextVNode)("Previous"),c={class:"page-item"},s=(0,r.createTextVNode)("Next");const d={props:{prev:String,next:String}};const i=(0,n(3744).Z)(d,[["render",function(e,t,n,d,i,p){var u=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("ul",a,[(0,r.createElementVNode)("li",l,[n.prev?((0,r.openBlock)(),(0,r.createBlock)(u,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[o]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,r.createElementVNode)("li",c,[n.next?((0,r.openBlock)(),(0,r.createBlock)(u,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[s]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);