"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3292],{5818:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(3645),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const a=l},8776:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(3645),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const a=l},3292:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var r=n(821),l=(0,r.createElementVNode)("title",null,"Home",-1),a={class:"row gap-20 masonry pos-r"},o={class:"peers fxw-nw jc-sb ai-c"},s=(0,r.createElementVNode)("h3",null,"Time Range",-1),c={class:"peers"},i={class:"peer mR-10"},d={class:"peer"},m=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),p=(0,r.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),u={class:"masonry-item w-100"},h=(0,r.createElementVNode)("div",{class:"row gap-20"},null,-1),v={class:"bgc-white p-20 bd"},f={class:"table-responsive"},N={class:"table table-sm table-borderless table-striped table-hover"},g=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,r.createElementVNode)("th",null,"Timeliness Remarks"),(0,r.createElementVNode)("th",null,"Action")])],-1),V={class:"dropdown dropstart"},E=(0,r.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),w={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},b={class:"row justify-content-center"},x={class:"col-md-12"},k={class:"row justify-content-center"},y={class:"col-md-12"};var C=n(4706),B=n(3132);const _={props:{data:Object,paps:Object,idpaps:String},data:function(){return{}},components:{Pagination:B.Z,Filtering:C.Z},methods:{showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteOutput:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Timeliness Remarks?"+e)&&this.$inertia.delete("/TimelinessRemarks/"+e)},getAccomplishment:function(e){this.$inertia.get("/accomplishments",{idtarget:e},{preserveScroll:!0,preserveState:!0,replace:!0})},getPercent:function(e,t){var n=0;e.forEach((function(e){n+=parseFloat(e.accomplishment_qty)}));var r=n/t*100;return r=this.format_number(r,2,!0)}}};var Z=n(3379),S=n.n(Z),T=n(5818),R={insert:"head",singleton:!1};S()(T.Z,R);T.Z.locals;const F=(0,n(3744).Z)(_,[["render",function(e,t,n,C,B,_){var Z=(0,r.resolveComponent)("Head"),S=(0,r.resolveComponent)("Link"),T=(0,r.resolveComponent)("pagination");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(Z,null,{default:(0,r.withCtx)((function(){return[l]})),_:1}),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",o,[s,(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",i,[(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[r.vModelText,e.search]])]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(S,{class:"btn btn-primary btn-sm",href:"/TimelinessRemarks/create/".concat(n.idpaps)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Add Timeliness Remarks")]})),_:1},8,["href"]),(0,r.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(t){return e.showFilter()})},"Filter")]),(0,r.createVNode)(S,{href:"/OPCRpaps/direct"},{default:(0,r.withCtx)((function(){return[m]})),_:1})])]),p,(0,r.createElementVNode)("div",u,[h,(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("table",N,[g,(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.data.data,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",null,[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.timeliness_remarks),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("div",V,[E,(0,r.createElementVNode)("ul",w,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(S,{class:"dropdown-item",href:"/TimelinessRemarks/".concat(e.id,"/edit")},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Edit ")]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(S,{class:"text-danger dropdown-item",onClick:function(t){return _.deleteOutput(e.id)}},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Delete ")]})),_:2},1032,["onClick"])])])])])])})),256))])])]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",x,[(0,r.createVNode)(T,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(n.data.from)+" to "+(0,r.toDisplayString)(n.data.to)+" of "+(0,r.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(821),l={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},a={class:"row",style:{width:"380px"}},o={class:"bgc-white"},s={class:"modal-header"},c=(0,r.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),i={class:"modal-body"};const d={props:{title:String}};var m=n(3379),p=n.n(m),u=n(8776),h={insert:"head",singleton:!1};p()(u.Z,h);u.Z.locals;const v=(0,n(3744).Z)(d,[["render",function(e,t,n,d,m,p){return(0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",s,[c,(0,r.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,r.createElementVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(821),l={class:"pagination"},a={class:"page-item"},o={class:"page-item"};const s={props:{prev:String,next:String}};const c=(0,n(3744).Z)(s,[["render",function(e,t,n,s,c,i){var d=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("ul",l,[(0,r.createElementVNode)("li",a,[n.prev?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,r.createElementVNode)("li",o,[n.next?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Next")]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);