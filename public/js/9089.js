"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9089,2783],{9193:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".modal[data-v-13a4bdaa]{display:block}",""]);const l=r},8776:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=r},9089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var o=n(821),r=(0,o.createElementVNode)("title",null,"Users",-1),l={class:"row gap-10 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},s=(0,o.createElementVNode)("h3",null,"Users",-1),i={class:"peers"},c={class:"peer mR-10"},d={class:"peer"},u=(0,o.createElementVNode)("label",null,"Sample Inputs",-1),m=(0,o.createElementVNode)("input",{type:"text",class:"form-control"},null,-1),p={class:"col-12"},h={class:"bgc-white p-20 bd"},f={class:"table table-hover table-striped"},v=(0,o.createElementVNode)("thead",{class:"table-primary"},[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",{scope:"col"},"Name"),(0,o.createElementVNode)("th",{scope:"col"},"Username"),(0,o.createElementVNode)("th",{scope:"col"},"Role"),(0,o.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Action")])],-1),N={style:{"text-align":"right"}},b={class:"dropdown dropstart"},E=(0,o.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),V={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},g={class:"row justify-content-center"},w={class:"col-md-12"};var y=n(9038),k=n(4706),x=n(3132),B=n(2783);const C={components:{Pagination:x.Z,Filtering:k.Z,PermissionsModal:B.default},props:{users:Object,filters:Object},mounted:function(){},data:function(){return{selected_permissions:[],permission_index:[],permission_particular:[],permission_option:[],form:(0,y.cI)({my_id:0,value:[]}),my_name:"",selected_user_id:null,permissions_selected_user:[],displayModal:!1,search:this.$props.filters.search,confirm:!1,filter:!1}},watch:{search:_.debounce((function(e){this.$inertia.get("/users",{search:e},{preserveScroll:!0,preserveState:!0,replace:!0})}),300)},methods:{deleteUser:function(e){1==confirm("WARNING!\nAre you sure you want to delete the record?")&&this.$inertia.delete("/users/"+e)},getPermissionAll:function(){var e=this;this.permission_particular=[],this.permissions_all.forEach((function(t){e.permission_particular.push({id:t.id,value:t.id,label:t.permission})}))},getPermInd:function(){},fetchingUserPermissions:function(e){var t=this;this.form.my_id=e,axios.post("/users/user-permissions",{id:e}).then((function(e){t.form.value=e.data}))},verifyPermissions:function(e,t,n){return(!0===e||!0===t||!0===n)&&(alert("dropdown will show!"),!0)},showFilter:function(){this.filter=!this.filter},showModal:function(e,t){this.fetchingUserPermissions(e,t),this.my_name=t,this.displayModal=!0},hideModal:function(){this.displayModal=!1},submitChanges:function(){var e="WARNING!\nAre you sure you want to save changes in user permissions for "+this.my_name+"?";1==confirm(e)&&this.form.get("/users/update-permissions",this.form)}}};const M=(0,n(3744).Z)(C,[["render",function(e,t,n,y,k,x){var _=(0,o.resolveComponent)("Head"),B=(0,o.resolveComponent)("Link"),C=(0,o.resolveComponent)("filtering"),M=(0,o.resolveComponent)("pagination");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(_,null,{default:(0,o.withCtx)((function(){return[r]})),_:1}),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[s,(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.search=e}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,k.search]])]),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(B,{class:"btn btn-primary btn-sm",href:"/users/create"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Add User")]})),_:1}),(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return x.showFilter()})},"Filter")])])]),k.filter?((0,o.openBlock)(),(0,o.createBlock)(C,{key:0,onCloseFilter:t[3]||(t[3]=function(e){return k.filter=!1})},{default:(0,o.withCtx)((function(){return[u,m,(0,o.createElementVNode)("button",{class:"btn btn-sm btn-primary mT-5 text-white",onClick:t[2]||(t[2]=function(){})},"Filter")]})),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("table",f,[v,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.users.data,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:t},[(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.FullName),1),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.UserName),1),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.UserType),1),(0,o.createElementVNode)("td",N,[(0,o.createElementVNode)("div",b,[E,(0,o.createElementVNode)("ul",V,[(0,o.createElementVNode)("li",null,[(0,o.createVNode)(B,{class:"dropdown-item",href:"/users/".concat(e.id,"/edit")},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Edit")]})),_:2},1032,["href"])])])])])])})),128))])]),(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",w,[(0,o.createVNode)(M,{next:n.users.next_page_url,prev:n.users.prev_page_url},null,8,["next","prev"])])])])])])],64)}]])},2783:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=n(821),r=function(e){return(0,o.pushScopeId)("data-v-13a4bdaa"),e=e(),(0,o.popScopeId)(),e},l={class:"permissions-modal"},a={class:"modal",tabindex:"-1",role:"dialog"},s={class:"modal-dialog",role:"document"},i={class:"modal-content"},c={class:"modal-header"},d=r((function(){return(0,o.createElementVNode)("h4",{class:"modal-title"},"User Permissions ",-1)})),u=[r((function(){return(0,o.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],m={class:"modal-body"},p=r((function(){return(0,o.createElementVNode)("div",{class:"modal-footer"},null,-1)}));const h={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var f=n(3379),v=n.n(f),N=n(9193),b={insert:"head",singleton:!1};v()(N.Z,b);N.Z.locals;const E=(0,n(3744).Z)(h,[["render",function(e,t,n,r,h,f){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[d,(0,o.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return f.closeModal&&f.closeModal.apply(f,arguments)})},u)]),(0,o.createElementVNode)("div",m,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),p])])])])}],["__scopeId","data-v-13a4bdaa"]])},4706:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},a={class:"bgc-white"},s={class:"modal-header"},i=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),c={class:"modal-body"};const d={props:{title:String}};var u=n(3379),m=n.n(u),p=n(8776),h={insert:"head",singleton:!1};m()(p.Z,h);p.Z.locals;const f=(0,n(3744).Z)(d,[["render",function(e,t,n,d,u,m){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[i,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(821),r={class:"pagination"},l={class:"page-item"},a={class:"page-item"};const s={props:{prev:String,next:String}};const i=(0,n(3744).Z)(s,[["render",function(e,t,n,s,i,c){var d=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",r,[(0,o.createElementVNode)("li",l,[n.prev?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",a,[n.next?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Next")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);