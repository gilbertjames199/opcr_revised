"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7649],{8776:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=r},7649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var o=n(821),r=(0,o.createElementVNode)("title",null,"Users",-1),l={class:"row gap-10 masonry pos-r"},s={class:"peers fxw-nw jc-sb ai-c"},a=(0,o.createElementVNode)("h3",null,"Employees",-1),i={class:"peers"},c=(0,o.createElementVNode)("div",{class:"peer mR-10"},null,-1),d={class:"peer"},m=(0,o.createTextVNode)("Sync Employees"),u=(0,o.createElementVNode)("label",null,"Sample Inputs",-1),p=(0,o.createElementVNode)("input",{type:"text",class:"form-control"},null,-1),h={class:"col-12"},f={class:"bgc-white p-20 bd"},v={class:"table table-hover table-striped"},N=(0,o.createElementVNode)("thead",{class:"table-primary"},[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",{scope:"col"},"Name"),(0,o.createElementVNode)("th",null,"Employment Status"),(0,o.createElementVNode)("th",null,"Division Code"),(0,o.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Action")])],-1),E={key:0},V=(0,o.createElementVNode)("td",{style:{"text-align":"right"}},[(0,o.createElementVNode)("div",{class:"dropdown dropstart"},[(0,o.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])]),(0,o.createElementVNode)("ul",{class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("button",{class:"dropdown-item"},"Permissions")])])])],-1),b={class:"row justify-content-center"},g={class:"col-md-12"};var y=n(9038),w=n(4706);const k={components:{Pagination:n(3132).Z,Filtering:w.Z},props:{users:Object,filters:Object,can:Object,permissions_all:Object},mounted:function(){this.getPermissionAll()},data:function(){return{selected_permissions:[],permission_index:[],permission_particular:[],permission_option:[],form:(0,y.cI)({my_id:0,value:[]}),my_name:"",selected_user_id:null,permissions_selected_user:[],displayModal:!1,confirm:!1,filter:!1}},watch:{},methods:{deleteUser:function(e){1==confirm("WARNING!\nAre you sure you want to delete the record?")&&this.$inertia.delete("/users/"+e)},getPermissionAll:function(){},getPermInd:function(){},fetchingUserPermissions:function(e){var t=this;this.form.my_id=e,axios.post("/users/user-permissions",{id:e}).then((function(e){t.form.value=e.data}))},verifyPermissions:function(e,t,n){return(!0===e||!0===t||!0===n)&&(alert("dropdown will show!"),!0)},showFilter:function(){this.filter=!this.filter},showModal:function(e,t){this.fetchingUserPermissions(e,t),this.my_name=t,this.displayModal=!0},hideModal:function(){this.displayModal=!1},submitChanges:function(){var e="WARNING!\nAre you sure you want to save changes in user permissions for "+this.my_name+"?";1==confirm(e)&&this.form.get("/users/update-permissions",this.form)}}};const x=(0,n(3744).Z)(k,[["render",function(e,t,n,y,w,k){var x=(0,o.resolveComponent)("Head"),_=(0,o.resolveComponent)("Link"),B=(0,o.resolveComponent)("filtering"),C=(0,o.resolveComponent)("pagination");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(x,null,{default:(0,o.withCtx)((function(){return[r]})),_:1}),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",s,[a,(0,o.createElementVNode)("div",i,[c,(0,o.createElementVNode)("div",d,[(0,o.createVNode)(_,{class:"btn btn-primary btn-sm mL-2 text-white",href:"/user/employees/sync/employees/list"},{default:(0,o.withCtx)((function(){return[m]})),_:1}),(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[0]||(t[0]=function(e){return k.showFilter()})},"Filter")])])]),w.filter?((0,o.openBlock)(),(0,o.createBlock)(B,{key:0,onCloseFilter:t[2]||(t[2]=function(e){return w.filter=!1})},{default:(0,o.withCtx)((function(){return[u,p,(0,o.createElementVNode)("button",{class:"btn btn-sm btn-primary mT-5 text-white",onClick:t[1]||(t[1]=function(){})},"Filter")]})),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("table",v,[N,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.users.data,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",null,[(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.employee_name),1),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.employment_type_descr),1),(0,o.createElementVNode)("td",null,[e.division?((0,o.openBlock)(),(0,o.createElementBlock)("div",E,(0,o.toDisplayString)(e.division.division_name1),1)):(0,o.createCommentVNode)("",!0)]),V])})),256))])]),(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("div",g,[(0,o.createVNode)(C,{next:n.users.next_page_url,prev:n.users.prev_page_url},null,8,["next","prev"])])])])])])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},s={class:"bgc-white"},a={class:"modal-header"},i=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),c={class:"modal-body"};const d={props:{title:String}};var m=n(3379),u=n.n(m),p=n(8776),h={insert:"head",singleton:!1};u()(p.Z,h);p.Z.locals;const f=(0,n(3744).Z)(d,[["render",function(e,t,n,d,m,u){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",a,[i,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(821),r={class:"pagination"},l={class:"page-item"},s=(0,o.createTextVNode)("Previous"),a={class:"page-item"},i=(0,o.createTextVNode)("Next");const c={props:{prev:String,next:String}};const d=(0,n(3744).Z)(c,[["render",function(e,t,n,c,d,m){var u=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",r,[(0,o.createElementVNode)("li",l,[n.prev?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",a,[n.next?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])}}]);