"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4197],{4934:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const l=o},8776:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=o},4197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(821),o=(0,r.createElementVNode)("title",null,"Home",-1),l={class:"row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},c=(0,r.createElementVNode)("h3",null,"Major Final Outputs",-1),i={class:"peers"},s={class:"peer mR-10"},d={class:"peer"},u=(0,r.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),m={key:0},p=["value"],f={class:"masonry-item w-100"},h=(0,r.createElementVNode)("div",{class:"row gap-20"},null,-1),N={class:"bgc-white p-20 bd"},v={class:"table-responsive"},V={class:"table table-sm table-borderless table-striped table-hover"},E=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,r.createElementVNode)("th",null,"Office"),(0,r.createElementVNode)("th",null,"MFO Description"),(0,r.createElementVNode)("th",null,"Action")])],-1),g={key:0},w={class:"dropdown dropstart"},b=(0,r.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),x={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},k={class:"row justify-content-center"},C={class:"col-md-12"},F={class:"row justify-content-center"},y={class:"col-md-12"};var B=n(7757),O=n.n(B),S=n(4706),M=n(3132);function D(e,t,n,r,o,l,a){try{var c=e[l](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}const Z={props:{data:Object,filters:Object,idinteroutcome:String,idoutcome:String,offices:Object},data:function(){return{search:this.$props.filters.search,mfosel:"",filter:!1,ismfo:1,FFUNCCOD:""}},components:{Pagination:M.Z,Filtering:S.Z},watch:{search:_.debounce((function(e){this.filterMFOs()}),300)},methods:{showCreate:function(){this.$inertia.get("/targets/create",{raao_id:this.raao_id},{preserveScroll:!0,preserveState:!0,replace:!0})},deleteMFO:function(e){1==confirm("WARNING!\nAre you sure you want to delete the MFO?")&&this.$inertia.delete("/mfos/"+e+"/"+this.idinteroutcome)},showFilter:function(){this.filter=!this.filter},filterMFOs:function(){var e,t=this;return(e=O().mark((function e(){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$inertia.get("/mfos/direct",{search:t.search,FFUNCCOD:t.FFUNCCOD},{preserveScroll:!0,preserveState:!0,replace:!0});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function a(e){D(l,r,o,a,c,"next",e)}function c(e){D(l,r,o,a,c,"throw",e)}a(void 0)}))})()}}};var T=n(3379),U=n.n(T),j=n(4934),P={insert:"head",singleton:!1};U()(j.Z,P);j.Z.locals;const z=(0,n(3744).Z)(Z,[["render",function(e,t,n,B,O,S){var _=(0,r.resolveComponent)("Head"),M=(0,r.resolveComponent)("Link"),D=(0,r.resolveComponent)("filtering"),Z=(0,r.resolveComponent)("pagination");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(_,null,{default:(0,r.withCtx)((function(){return[o]})),_:1}),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[c,(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",s,[(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return O.search=e}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[r.vModelText,O.search]])]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(M,{class:"btn btn-primary btn-sm",href:"/mfos/create"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Add MFO ")]})),_:1}),(0,r.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return S.showFilter()})},"Filter")])])]),u,O.filter?((0,r.openBlock)(),(0,r.createBlock)(D,{key:0,onCloseFilter:t[4]||(t[4]=function(e){return O.filter=!1})},{default:(0,r.withCtx)((function(){return["04"===e.$page.props.auth.user.department_code?((0,r.openBlock)(),(0,r.createElementBlock)("div",m,[(0,r.createTextVNode)(" Filter by Office "),(0,r.withDirectives)((0,r.createElementVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.FFUNCCOD=e}),class:"form-control",onChange:t[3]||(t[3]=function(e){return S.filterMFOs()})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.offices,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.FFUNCCOD},(0,r.toDisplayString)(e.FFUNCTION),9,p)})),256))],544),[[r.vModelSelect,O.FFUNCCOD]])])):(0,r.createCommentVNode)("",!0)]})),_:1})):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",f,[h,(0,r.createElementVNode)("div",N,[(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("table",V,[E,(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.data.data,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",null,[(0,r.createElementVNode)("td",null,[e.office?((0,r.openBlock)(),(0,r.createElementBlock)("div",g,(0,r.toDisplayString)(e.office.FFUNCTION),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.mfo_desc),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("div",w,[b,(0,r.createElementVNode)("ul",x,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(M,{class:"dropdown-item",href:"/paps/".concat(e.id)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Programs and Projects ")]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(M,{class:"dropdown-item",href:"/mforevision/".concat(e.id)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("MFO Profile ")]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(M,{class:"dropdown-item",href:"/submfos/".concat(e.id)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Sub MFOs")]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(M,{class:"dropdown-item",href:"/strategies/".concat(e.id,"/").concat(O.ismfo,"/strat/mfo")},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Strategies")]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(M,{class:"dropdown-item",href:"/mfos/".concat(e.id,"/edit")},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Edit")]})),_:2},1032,["href"])])])])])])})),256))])])]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("div",C,[(0,r.createVNode)(Z,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(n.data.from)+" to "+(0,r.toDisplayString)(n.data.to)+" of "+(0,r.toDisplayString)(n.data.total)+" entries ",1)])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(821),o={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header"},i=(0,r.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),s={class:"modal-body"};const d={props:{title:String}};var u=n(3379),m=n.n(u),p=n(8776),f={insert:"head",singleton:!1};m()(p.Z,f);p.Z.locals;const h=(0,n(3744).Z)(d,[["render",function(e,t,n,d,u,m){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",c,[i,(0,r.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,r.createElementVNode)("div",s,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),o={class:"pagination"},l={class:"page-item"},a={class:"page-item"};const c={props:{prev:String,next:String}};const i=(0,n(3744).Z)(c,[["render",function(e,t,n,c,i,s){var d=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("ul",o,[(0,r.createElementVNode)("li",l,[n.prev?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,r.createElementVNode)("li",a,[n.next?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Next")]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);