"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9639],{62:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),r=n.n(l)()((function(e){return e[1]}));r.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const o=r},8776:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),r=n.n(l)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const o=r},9639:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var l=n(821),r=(0,l.createElementVNode)("title",null,"Home",-1),o={class:"row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},c=(0,l.createElementVNode)("h3",null,"Daily Accomplishment",-1),i={class:"peers"},s={class:"peer mR-10"},d={class:"peer"},m=(0,l.createTextVNode)("Add Daily Accomplishment"),u=(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),p=(0,l.createTextVNode)(" Filter by MFO "),h=["value"],f=(0,l.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),v={class:"masonry-item w-100"},N=(0,l.createElementVNode)("div",{class:"row gap-20"},null,-1),V={class:"bgc-white p-20 bd"},g={class:"table-responsive"},E={class:"table table-sm table-borderless table-striped table-hover"},b=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,l.createElementVNode)("th",null,"Date"),(0,l.createElementVNode)("th",null,"Description"),(0,l.createElementVNode)("th",null,"Quantity"),(0,l.createElementVNode)("th",null,"Remarks"),(0,l.createElementVNode)("th",null,"Link"),(0,l.createElementVNode)("th",null,"Action")])],-1),w=["href"],k={class:"dropdown dropstart"},x=(0,l.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),y={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},C=(0,l.createTextVNode)("Edit"),B=(0,l.createTextVNode)("Delete"),S={class:"row justify-content-center"},D={class:"col-md-12"},_={class:"row justify-content-center"},F={class:"col-md-12"};var A=n(4706),Z=n(3132);const L={props:{data:Object,paps:Object,idpaps:String},data:function(){return{filter:!1}},components:{Pagination:Z.Z,Filtering:A.Z},methods:{showFilter:function(){this.filter=!this.filter},showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteOutput:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Accomplishment?"+e)&&this.$inertia.delete("/AddAccomplishment/"+e)},getAccomplishment:function(e){this.$inertia.get("/accomplishments",{idtarget:e},{preserveScroll:!0,preserveState:!0,replace:!0})},getPercent:function(e,t){var n=0;e.forEach((function(e){n+=parseFloat(e.accomplishment_qty)}));var l=n/t*100;return l=this.format_number(l,2,!0)}}};var M=n(3379),T=n.n(M),z=n(62),j={insert:"head",singleton:!1};T()(z.Z,j);z.Z.locals;const O=(0,n(3744).Z)(L,[["render",function(e,t,n,A,Z,L){var M=(0,l.resolveComponent)("Head"),T=(0,l.resolveComponent)("Link"),z=(0,l.resolveComponent)("filtering"),j=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(M,null,{default:(0,l.withCtx)((function(){return[r]})),_:1}),(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",a,[c,(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",s,[(0,l.withDirectives)((0,l.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[l.vModelText,e.search]])]),(0,l.createElementVNode)("div",d,[(0,l.createVNode)(T,{class:"btn btn-primary btn-sm",href:"/AddAccomplishment/create/".concat(n.idpaps)},{default:(0,l.withCtx)((function(){return[m]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return L.showFilter()})},"Filter")]),(0,l.createVNode)(T,{href:"/DailyAccomplishment/direct"},{default:(0,l.withCtx)((function(){return[u]})),_:1})])]),Z.filter?((0,l.openBlock)(),(0,l.createBlock)(z,{key:0,onCloseFilter:t[5]||(t[5]=function(e){return Z.filter=!1})},{default:(0,l.withCtx)((function(){return[p,(0,l.withDirectives)((0,l.createElementVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.mfosel=t}),class:"form-control",onChange:t[3]||(t[3]=function(t){return e.filterData()})},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.mfos,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{value:e.id},(0,l.toDisplayString)(e.mfo_desc),9,h)})),256))],544),[[l.vModelSelect,e.mfosel]]),(0,l.createElementVNode)("button",{class:"btn btn-sm btn-danger mT-5 text-white",onClick:t[4]||(t[4]=function(){return e.clearFilter&&e.clearFilter.apply(e,arguments)})},"Clear Filter")]})),_:1})):(0,l.createCommentVNode)("",!0),f,(0,l.createElementVNode)("div",v,[N,(0,l.createElementVNode)("div",V,[(0,l.createElementVNode)("div",g,[(0,l.createElementVNode)("table",E,[b,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.data.data,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",null,[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.date),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.description),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.quantity),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.remarks),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("a",{href:e.Link,target:"_blank"},(0,l.toDisplayString)(e.Link.length>50?e.Link.substring(0,50)+"...":e.Link),9,w)]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",k,[x,(0,l.createElementVNode)("ul",y,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(T,{class:"dropdown-item",href:"/AddAccomplishment/".concat(e.id,"/edit")},{default:(0,l.withCtx)((function(){return[C]})),_:2},1032,["href"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(T,{class:"text-danger dropdown-item",onClick:function(t){return L.deleteOutput(e.id)}},{default:(0,l.withCtx)((function(){return[B]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("div",D,[(0,l.createVNode)(j,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("div",F,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(n.data.from)+" to "+(0,l.toDisplayString)(n.data.to)+" of "+(0,l.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},o={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header"},i=(0,l.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),s={class:"modal-body"};const d={props:{title:String}};var m=n(3379),u=n.n(m),p=n(8776),h={insert:"head",singleton:!1};u()(p.Z,h);p.Z.locals;const f=(0,n(3744).Z)(d,[["render",function(e,t,n,d,m,u){return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,l.createElementVNode)("div",s,[(0,l.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(821),r={class:"pagination"},o={class:"page-item"},a=(0,l.createTextVNode)("Previous"),c={class:"page-item"},i=(0,l.createTextVNode)("Next");const s={props:{prev:String,next:String}};const d=(0,n(3744).Z)(s,[["render",function(e,t,n,s,d,m){var u=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("ul",r,[(0,l.createElementVNode)("li",o,[n.prev?((0,l.openBlock)(),(0,l.createBlock)(u,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[a]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,l.createElementVNode)("li",c,[n.next?((0,l.openBlock)(),(0,l.createBlock)(u,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,l.withCtx)((function(){return[i]})),_:1},8,["href"])):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:1,class:(0,l.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);