"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9884],{5086:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const l=r},8776:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const l=r},6900:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".modal[data-v-8ec2bb50]{display:block}",""]);const l=r},4817:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var n=o(821),r=(0,n.createElementVNode)("title",null,"List of OPCRs",-1),l={class:"row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},c=(0,n.createElementVNode)("h3",null,"Office Performance Commitment Rating (OPCR)",-1),d={class:"peers"},i={class:"peer mR-10"},s={class:"peer"},p={class:"masonry-sizer col-md-6"},m=(0,n.createElementVNode)("b",null,"Office",-1),u={class:"masonry-item w-100"},f=(0,n.createElementVNode)("div",{class:"row gap-20"},null,-1),h={class:"bgc-white p-20 bd"},N={class:"table-responsive"},v={class:"table table-sm table-borderless table-striped table-hover"},E=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,n.createElementVNode)("th",null,"Description"),(0,n.createElementVNode)("th",null,"Office"),(0,n.createElementVNode)("th",null,"Semester"),(0,n.createElementVNode)("th",null,"Period Covered"),(0,n.createElementVNode)("th",null,"Action")])],-1),g=(0,n.createElementVNode)("td",null,"OPCR ",-1),w={class:"dropdown dropstart"},V=(0,n.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,n.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),C={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},k={key:0},y={key:1},_=["onClick"],b=["onClick"],x=(0,n.createElementVNode)("div",{class:"row justify-content-center"},[(0,n.createElementVNode)("div",{class:"col-md-12"})],-1),F=(0,n.createElementVNode)("div",{class:"row justify-content-center"},[(0,n.createElementVNode)("div",{class:"col-md-12"})],-1),M={class:"d-flex justify-content-center"},B=["src"],D=(0,n.createElementVNode)("option",null,null,-1),R=["value"];var O=o(4706),P=o(3132),S=o(3922);o(9038);const Z={props:{opcr_lists:Object,office:Object,FFUNCCOD:String},data:function(){return{my_link:"",displayModal:!1,displayModal2:!1,copied_opcr_id:"",opcr_id_passed:"",current_period:""}},components:{Pagination:P.Z,Filtering:O.Z,Modal:S.Z,Modal2:S.Z},methods:{deleteRA:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Research Agenda?")&&this.$inertia.delete("/ResearchAgenda/"+e)},goToRep:function(e,t,o,n,r,l,a,c){var d="abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Fform%2FMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Fform&decorate=no&output=pdf"+("&total="+t+"&ave="+o+"&dept_head="+n+"&opcr_date="+r+"&mooe="+l+"&ps="+a+"&FFUNCCOD="+e+"&opcr_id="+c),i=document.createElement("a");i.href="/opcr/form/print/o/p/c/r?link="+encodeURIComponent(d),i.target="_blank",i.click()},viewlink:function(e,t,o,n,r,l,a,c){return"http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Fform%2FMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Fform&decorate=no&output=pdf"+("&total="+t+"&ave="+o+"&dept_head="+n+"&opcr_date="+r+"&mooe="+l+"&ps="+a+"&FFUNCCOD="+e+"&opcr_id="+c)},showModal:function(e,t,o,n,r,l,a,c){this.my_link=this.viewlink(e,t,o,n,r,l,a,c),this.displayModal=!0},showModalNew:function(e){this.my_link=this.viewlinkNew(e),this.displayModal=!0},viewlinkNew:function(e){return"http://"+this.jasper_ip+"jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Ftarget_opcr&standAlone=true&decorate=no&output=pdf"+("&idopcr="+e)},hideModal:function(){this.displayModal=!1},showModal2:function(e,t,o){this.current_period=this.formatMonth(t)+" to "+this.formatMonthYear(o),this.opcr_id_passed=e,this.displayModal2=!0},hideModal2:function(){this.displayModal2=!1},copyOPCR:function(){if(this.copied_opcr_id!=this.opcr_id_passed){var e="WARNING!\nAre you sure you want to copy targets for  "+this.current_period+" ?";if(1==confirm(e)){var t="/opcrlist/FROM/"+this.copied_opcr_id+"/TO/"+this.opcr_id_passed;this.$inertia.post(t)}}else alert("Select a different OPCR to copy!")}}};var T=o(3379),U=o.n(T),I=o(5086),A={insert:"head",singleton:!1};U()(I.Z,A);I.Z.locals;const j=(0,o(3744).Z)(Z,[["render",function(e,t,o,O,P,S){var Z=(0,n.resolveComponent)("Head"),T=(0,n.resolveComponent)("Link"),U=(0,n.resolveComponent)("Button"),I=(0,n.resolveComponent)("Modal"),A=(0,n.resolveComponent)("Modal2");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(Z,null,{default:(0,n.withCtx)((function(){return[r]})),_:1}),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",a,[c,(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",i,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[n.vModelText,e.search]])]),(0,n.createElementVNode)("div",s,[(0,n.createVNode)(T,{class:"btn btn-primary btn-sm",href:"/opcrlist/create/".concat(o.FFUNCCOD)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Create OPCR")]})),_:1},8,["href"])])])]),(0,n.createElementVNode)("div",p,[m,(0,n.createTextVNode)(": "),(0,n.createElementVNode)("u",null,(0,n.toDisplayString)(o.office.FFUNCTION),1)]),(0,n.createElementVNode)("div",u,[f,(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("table",v,[E,(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.opcr_lists,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",null,[g,(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(o.office.FFUNCTION),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.semester),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(e.formatMonth(t.date_from))+" to "+(0,n.toDisplayString)(e.formatMonthYear(t.date_to)),1),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",w,[V,(0,n.createElementVNode)("ul",C,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)(U,{class:"dropdown-item",onClick:function(e){return S.showModal2(t.id,t.date_from,t.date_to)}},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Copy Targets ")]})),_:2},1032,["onClick"])]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(T,{class:"dropdown-item",href:"/opcrlist/".concat(t.id,"/edit")},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Edit ")]})),_:2},1032,["href"])]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(T,{class:"dropdown-item",href:"/opcr/form/".concat(t.id,"/").concat(o.FFUNCCOD)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Rating ")]})),_:2},1032,["href"])]),"0"===t.type?((0,n.openBlock)(),(0,n.createElementBlock)("li",k,[(0,n.createVNode)(T,{class:"dropdown-item",href:"/opcrtarget/".concat(t.id)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Target ")]})),_:2},1032,["href"])])):(0,n.createCommentVNode)("",!0),"n"===t.type?((0,n.openBlock)(),(0,n.createElementBlock)("li",y,[(0,n.createVNode)(T,{class:"dropdown-item",href:"/opcrtargetrevised/".concat(t.id)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Target New ")]})),_:2},1032,["href"])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("li",null,["0"===t.type?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:0,class:"dropdown-item",onClick:function(e){return S.showModal(t.FFUNCCOD,t.total,t.ave,t.dept_head,t.opcr_date,t.mooe,t.ps,t.id)}}," Download PDF ",8,_)):(0,n.createCommentVNode)("",!0),"n"===t.type?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:1,class:"dropdown-item",onClick:function(e){return S.showModalNew(t.id)}}," Download PDF ",8,b)):(0,n.createCommentVNode)("",!0)])])])])])})),256))])])]),x,F])]),P.displayModal?((0,n.openBlock)(),(0,n.createBlock)(I,{key:0,onCloseModalEvent:S.hideModal},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",M,[(0,n.createElementVNode)("iframe",{src:P.my_link,style:{width:"100%",height:"400px"}},null,8,B)])]})),_:1},8,["onCloseModalEvent"])):(0,n.createCommentVNode)("",!0),P.displayModal2?((0,n.openBlock)(),(0,n.createBlock)(A,{key:1,onCloseModalEvent:S.hideModal2},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Copy targets of OPCR for "+(0,n.toDisplayString)(P.current_period)+" ",1),(0,n.withDirectives)((0,n.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=function(e){return P.copied_opcr_id=e})},[D,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.opcr_lists,(function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:t.id,value:t.id},(0,n.toDisplayString)(e.formatMonth(t.date_from))+" to "+(0,n.toDisplayString)(e.formatMonthYear(t.date_to)),9,R)})),128))],512),[[n.vModelSelect,P.copied_opcr_id]]),(0,n.createElementVNode)("button",{class:"btn btn-primary btn-sm text-white",onClick:t[2]||(t[2]=function(e){return S.copyOPCR()})},"Done")]})),_:1},8,["onCloseModalEvent"])):(0,n.createCommentVNode)("",!0)])],64)}]])},4706:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},l={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header"},d=(0,n.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),i={class:"modal-body"};const s={props:{title:String}};var p=o(3379),m=o.n(p),u=o(8776),f={insert:"head",singleton:!1};m()(u.Z,f);u.Z.locals;const h=(0,o(3744).Z)(s,[["render",function(e,t,o,s,p,m){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",c,[d,(0,n.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(821),r={class:"pagination"},l={class:"page-item"},a={class:"page-item"};const c={props:{prev:String,next:String}};const d=(0,o(3744).Z)(c,[["render",function(e,t,o,c,d,i){var s=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("ul",r,[(0,n.createElementVNode)("li",l,[o.prev?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,class:"page-link",href:o.prev,"preserve-scroll":""},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:1,class:(0,n.normalizeClass)(["page-link",{"text-muted":!o.prev}])},"Previous",2))]),(0,n.createElementVNode)("li",a,[o.next?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,class:"page-link",href:o.next,"preserve-scroll":""},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Next")]})),_:1},8,["href"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:1,class:(0,n.normalizeClass)(["page-link",{"text-muted":!o.next}])},"Next",2))])])])}]])},3922:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(821),r=function(e){return(0,n.pushScopeId)("data-v-8ec2bb50"),e=e(),(0,n.popScopeId)(),e},l={class:"permissions-modal"},a={class:"modal",tabindex:"-1",role:"dialog"},c={class:"modal-dialog modal-xl"},d={class:"d-flex justify-content-center"},i={class:"modal-content",style:{width:"100% !important",height:"40% !important"}},s={class:"modal-header",style:{"background-color":"#030014"}},p=r((function(){return(0,n.createElementVNode)("h4",{class:"modal-title",style:{color:"#ffe819","text-align":"center !important"}},[(0,n.createElementVNode)("b",null,"PRINT PREVIEW")],-1)})),m=[r((function(){return(0,n.createElementVNode)("span",{"aria-hidden":"true"},"×",-1)}))],u={class:"modal-body"},f=r((function(){return(0,n.createElementVNode)("div",{class:"modal-footer",style:{"background-color":"#090137"}},null,-1)}));const h={props:{},data:function(){return{value:null,options:["Batman","Robin","Joker"]}},mounted:function(){},methods:{logU_ID:function(){},closeModal:function(){this.$emit("close-modal-event")},saveChanges:function(){this.closeModal()},loadPermissions:function(){}}};var N=o(3379),v=o.n(N),E=o(6900),g={insert:"head",singleton:!1};v()(E.Z,g);E.Z.locals;const w=(0,o(3744).Z)(h,[["render",function(e,t,o,r,h,N){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",s,[p,(0,n.createElementVNode)("button",{type:"button",class:"btn btn-danger",style:{"font-weight":"bold",color:"white"},"data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=function(){return N.closeModal&&N.closeModal.apply(N,arguments)})},m)]),(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default",{},void 0,!0)]),f])])])])])}],["__scopeId","data-v-8ec2bb50"]])}}]);