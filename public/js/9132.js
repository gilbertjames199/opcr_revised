"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9132],{8984:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const l=r},8776:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=r},1759:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=r},6900:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".modal[data-v-8ec2bb50]{display:block}",""]);const l=r},9132:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var o=n(821),r=(0,o.createElementVNode)("title",null,"Home",-1),l={class:"row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},i=(0,o.createElementVNode)("h3",null,"LBP Form",-1),c={class:"peers"},s={class:"peer mR-10"},d={class:"peer"},p=(0,o.createTextVNode)(" Select Form "),u=[(0,o.createElementVNode)("option",{value:"0"},null,-1),(0,o.createElementVNode)("option",{value:"2"},"LBP Form 2",-1),(0,o.createElementVNode)("option",{value:"4"},"LBP Form 4",-1)],m=(0,o.createElementVNode)("br",null,null,-1),f=(0,o.createElementVNode)("br",null,null,-1),h={key:0},v=(0,o.createTextVNode)(" Target Fiscal Year "),N=(0,o.createElementVNode)("br",null,null,-1),E=(0,o.createElementVNode)("br",null,null,-1),b=(0,o.createElementVNode)("br",null,null,-1),V=(0,o.createTextVNode)(" Filter by MFO "),g=["value"],w=(0,o.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),k={class:"masonry-item w-100"},y=(0,o.createElementVNode)("div",{class:"row gap-20"},null,-1),x={class:"bgc-white p-20 bd"},C={class:"table-responsive"},B={class:"table table-sm table-borderless table-striped table-hover"},F=(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,o.createElementVNode)("th",null,"AIP Code"),(0,o.createElementVNode)("th",null,"Major Final Output"),(0,o.createElementVNode)("th",null,"PAPS Description"),(0,o.createElementVNode)("th",null,"Action")])],-1),P={key:0},M={key:0},D={class:"dropdown dropstart"},S=(0,o.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),A={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},Z={key:0},I=(0,o.createTextVNode)(" AIP Code"),L={key:1},T=(0,o.createTextVNode)(" Edit"),O={key:2},j=(0,o.createTextVNode)("Appropriations/Obligations"),R={class:"row justify-content-center"},U={class:"col-md-12"},$={class:"row justify-content-center"},z={class:"col-md-12"},H={class:"d-flex justify-content-center"},J=["src"];var G=n(7757),Y=n.n(G),W=n(4706),q=n(2772),K=n(3132),Q=n(3922);function X(e,t,n,o,r,l,a){try{var i=e[l](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(o,r)}function ee(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var l=e.apply(t,n);function a(e){X(l,o,r,a,i,"next",e)}function i(e){X(l,o,r,a,i,"throw",e)}a(void 0)}))}}const te={props:{data:Object,filters:Object,auth:Object,idmfo:String,idpaps:Number,can:Object,mfos:Object,FFUNCCOD:Object,totals:Object},data:function(){return{dates:"2012",search:this.$props.filters.search,filter:!1,print:!1,my_link:"",displayModal:!1,lbp_version:2}},watch:{search:_.debounce((function(e){this.$inertia.get("/AIP/direct",{search:e},{preserveScroll:!0,preserveState:!0,replace:!0})}),300)},components:{Pagination:K.Z,Filtering:W.Z,Modal:Q.Z,Printing:q.Z},methods:{deleteMFO:function(e){1==confirm("WARNING!\nAre you sure you want to delete the PAP?")&&this.$inertia.delete("/paps/"+e+"/")},showFilter:function(){this.filter=!this.filter},clearFilter:function(){var e=this;return ee(Y().mark((function t(){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.mfosel="",e.filterData();case 2:case"end":return t.stop()}}),t)})))()},filterData:function(){var e=this;return ee(Y().mark((function t(){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$inertia.get("/AIP/direct",{mfosel:e.mfosel},{preserveScroll:!0,preserveState:!0,replace:!0});case 1:case"end":return t.stop()}}),t)})))()},showPrint:function(){this.print=!this.print},getToRep:function(e,t,n){return"http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FBudget%2FLBP_Form_4&reportUnit=%2Freports%2FBudget%2FLBP_Form_4%2FLBPFORM4&standAlone=true&decorate=no&output=pdf"+("&id="+e+"&FUNCTION="+t+"&Date="+n)},goToRepPrintLBP2:function(){return"http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2&standAlone=true&decorate=no&output=pdf"+("&department_code="+this.auth.user.department_code+"&office="+this.auth.user.office.office+"&department_head="+this.FFUNCCOD.DEPTHEAD+"&budget_officer=EVA JEAN S. LICAYAN&local_chief=DOROTHY M. GONZAGA&total_past_year="+this.totals.past_year+"&total_first_sem="+this.totals.first_sem+"&total_second_sem="+this.totals.second_sem+"&total_total="+this.totals.total+"&total_budget_year="+this.totals.budget_year)},showModal:function(e,t,n){this.lbp_version>2?this.my_link=this.getToRep(e,t,n):this.my_link=this.goToRepPrintLBP2(),this.displayModal=!0},hideModal:function(){this.displayModal=!1},goToAppropriations:function(e){axios.get("/appropriations",{params:{idpaps:e}}).then((function(e){console.log(e.data),window.location.href="/Appropriations/Index"})).catch((function(e){console.error(e)}))}}};var ne=n(3379),oe=n.n(ne),re=n(8984),le={insert:"head",singleton:!1};oe()(re.Z,le);re.Z.locals;const ae=(0,n(3744).Z)(te,[["render",function(e,t,n,_,G,Y){var W=(0,o.resolveComponent)("Head"),q=(0,o.resolveComponent)("Printing"),K=(0,o.resolveComponent)("filtering"),Q=(0,o.resolveComponent)("Link"),X=(0,o.resolveComponent)("pagination"),ee=(0,o.resolveComponent)("Modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(W,null,{default:(0,o.withCtx)((function(){return[r]})),_:1}),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[i,(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return G.search=e}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,G.search]])]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return Y.showPrint()})},"Print"),(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[2]||(t[2]=function(e){return Y.showFilter()})},"Filter")])])]),G.print?((0,o.openBlock)(),(0,o.createBlock)(q,{key:0,onCloseFilter:t[6]||(t[6]=function(e){return G.print=!1})},{default:(0,o.withCtx)((function(){return[p,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return G.lbp_version=e}),class:"form-control"},u,512),[[o.vModelSelect,G.lbp_version]]),m,f,G.lbp_version>2?((0,o.openBlock)(),(0,o.createElementBlock)("div",h,[v,N,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return G.dates=e}),class:"form-control",type:"number",name:"year",min:"1900",max:"2099",step:"1",oninput:"javascript: if (this.value.length > 4) this.value = this.value.slice(0, 4);"},null,512),[[o.vModelText,G.dates]]),E,b])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[5]||(t[5]=function(e){return Y.showModal(n.data.data[0].FFUNCCOD,n.data.data[0].FFUNCTION,G.dates)})},"Print")]})),_:1})):(0,o.createCommentVNode)("",!0),G.filter?((0,o.openBlock)(),(0,o.createBlock)(K,{key:1,onCloseFilter:t[10]||(t[10]=function(e){return G.filter=!1})},{default:(0,o.withCtx)((function(){return[V,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.mfosel=t}),class:"form-control",onChange:t[8]||(t[8]=function(e){return Y.filterData()})},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.mfos,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id},(0,o.toDisplayString)(e.mfo_desc),9,g)})),256))],544),[[o.vModelSelect,e.mfosel]]),(0,o.createElementVNode)("button",{class:"btn btn-sm btn-danger mT-5 text-white",onClick:t[9]||(t[9]=function(){return Y.clearFilter&&Y.clearFilter.apply(Y,arguments)})},"Clear Filter")]})),_:1})):(0,o.createCommentVNode)("",!0),w,(0,o.createElementVNode)("div",k,[y,(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("table",B,[F,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.data.data,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:e.id},[(0,o.createElementVNode)("td",null,[e.a_i_p?((0,o.openBlock)(),(0,o.createElementBlock)("div",P,(0,o.toDisplayString)(e.a_i_p.AIP_Code),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("td",null,[e.m_f_o?((0,o.openBlock)(),(0,o.createElementBlock)("div",M,(0,o.toDisplayString)(e.m_f_o.mfo_desc),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.paps_desc),1),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",D,[S,(0,o.createElementVNode)("ul",A,[e.a_i_p?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("li",Z,[(0,o.createVNode)(Q,{class:"dropdown-item",href:"/AIP/create/".concat(e.id)},{default:(0,o.withCtx)((function(){return[I]})),_:2},1032,["href"])])),e.a_i_p?((0,o.openBlock)(),(0,o.createElementBlock)("li",L,[(0,o.createVNode)(Q,{class:"dropdown-item",href:"/AIP/".concat(e.a_i_p.id,"/edit")},{default:(0,o.withCtx)((function(){return[T]})),_:2},1032,["href"])])):(0,o.createCommentVNode)("",!0),e.a_i_p?((0,o.openBlock)(),(0,o.createElementBlock)("li",O,[(0,o.createVNode)(Q,{class:"dropdown-item",href:"/appropriations/".concat(e.id)},{default:(0,o.withCtx)((function(){return[j]})),_:2},1032,["href"])])):(0,o.createCommentVNode)("",!0)])])])])})),128))])])]),(0,o.createElementVNode)("div",R,[(0,o.createElementVNode)("div",U,[(0,o.createVNode)(X,{next:n.data.next_page_url,prev:n.data.prev_page_url},null,8,["next","prev"])])]),(0,o.createElementVNode)("div",$,[(0,o.createElementVNode)("div",z,[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(n.data.from)+" to "+(0,o.toDisplayString)(n.data.to)+" of "+(0,o.toDisplayString)(n.data.total)+" entries ",1)])])])]),G.displayModal?((0,o.openBlock)(),(0,o.createBlock)(ee,{key:2,onCloseModalEvent:Y.hideModal},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",H,[(0,o.createElementVNode)("iframe",{src:G.my_link,style:{width:"100%",height:"500px"}},null,8,J)])]})),_:1},8,["onCloseModalEvent"])):(0,o.createCommentVNode)("",!0)])],64)}]])},4706:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},a={class:"bgc-white"},i={class:"modal-header"},c=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),s={class:"modal-body"};const d={props:{title:String}};var p=n(3379),u=n.n(p),m=n(8776),f={insert:"head",singleton:!1};u()(m.Z,f);m.Z.locals;const h=(0,n(3744).Z)(d,[["render",function(e,t,n,d,p,u){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,[c,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},2772:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},a={class:"bgc-white"},i={class:"modal-header"},c=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Print",-1),s={class:"modal-body"};const d={props:{title:String}};var p=n(3379),u=n.n(p),m=n(1759),f={insert:"head",singleton:!1};u()(m.Z,f);m.Z.locals;const h=(0,n(3744).Z)(d,[["render",function(e,t,n,d,p,u){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,[c,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(821),r={class:"pagination"},l={class:"page-item"},a=(0,o.createTextVNode)("Previous"),i={class:"page-item"},c=(0,o.createTextVNode)("Next");const s={props:{prev:String,next:String}};const d=(0,n(3744).Z)(s,[["render",function(e,t,n,s,d,p){var u=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",r,[(0,o.createElementVNode)("li",l,[n.prev?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,class:"page-link",href:n.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[a]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",i,[n.next?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,class:"page-link",href:n.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!n.next}])},"Next",2))])])])}]])},3922:(e,t,n)=>{n.d(t,{Z:()=>V});var o=n(821),r=function(e){return(0,o.pushScopeId)("data-v-8ec2bb50"),e=e(),(0,o.popScopeId)(),e},l={class:"permissions-modal"},a={class:"modal",tabindex:"-1",role:"dialog"},i={class:"modal-dialog modal-xl"},c={class:"d-flex justify-content-center"},s={class:"modal-content",style:{width:"100% !important",height:"40% !important"}},d={class:"modal-header",style:{"background-color":"#030014"}},p=r((function(){return(0,o.createElementVNode)("h4",{class:"modal-title",style:{color:"#ffe819","text-align":"center !important"}},[(0,o.createElementVNode)("b",null,"PRINT PREVIEW")],-1)})),u=[r((function(){return(0,o.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],m={class:"modal-body"},f=r((function(){return(0,o.createElementVNode)("div",{class:"modal-footer",style:{"background-color":"#090137"}},null,-1)}));const h={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var v=n(3379),N=n.n(v),E=n(6900),b={insert:"head",singleton:!1};N()(E.Z,b);E.Z.locals;const V=(0,n(3744).Z)(h,[["render",function(e,t,n,r,h,v){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",d,[p,(0,o.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return v.closeModal&&v.closeModal.apply(v,arguments)})},u)]),(0,o.createElementVNode)("div",m,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),f])])])])])}],["__scopeId","data-v-8ec2bb50"]])}}]);