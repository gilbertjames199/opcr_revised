"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2869],{4698:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(3645),o=r.n(a)()((function(e){return e[1]}));o.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const n=o},8776:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(3645),o=r.n(a)()((function(e){return e[1]}));o.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const n=o},2869:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(821),o=(0,a.createElementVNode)("title",null,"OPCR",-1),n=(0,a.createElementVNode)("div",{class:"row gap-20 masonry pos-r"},null,-1);var s=r(9038),i=r(4706),l=r(3132);const c={props:{opcr_id:String,FFUNCCOD:String,mooe:Number,ps:Number,opcr_date:String,ave:String,total:String,dept_head:String,opcrs:Object},data:function(){return{total_ave:0,form:(0,s.cI)({opcrs:[]})}},computed:{},components:{Pagination:l.Z,Filtering:i.Z},mounted:function(){},methods:{halfSem:function(e){var t=parseFloat(e)/2;return this.format_number_conv(t,2,!0)},deleteEla:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?"+e)&&this.$inertia.delete("/ELA/"+e)},getRowspan:function(e,t){for(var r=1,a=parseFloat(t)+1;a<this.opcrs.length&&this.opcrs[a].mfo_desc===e;a++)r=parseFloat(r)+1;return r},getRowspan2:function(e,t){for(var r=1,a=parseFloat(t)+1;a<this.opcrs.length&&this.opcrs[a].office_accountable===e;a++)r=parseFloat(r)+1;return r},getRowspanIndicator:function(e,t){for(var r=1,a=parseFloat(t)+1;a<this.opcrs.length&&this.opcrs[a].success_indicator===e;a++)r=parseFloat(r)+1;return r},getTotalAverage:function(){for(var e=0,t=0;t<this.form.opcrs.length;t++){var r=this.form.opcrs[t].rating_e,a=this.form.opcrs[t].rating_q,o=this.form.opcrs[t].rating_t,n=parseFloat(r)+parseFloat(a)+parseFloat(o),s=0;parseFloat(r)<1&&(s+=1),parseFloat(a)<1&&(s+=1),parseFloat(o)<1&&(s+=1),0==s&&(s=1),e+=n/s}return this.total_ave=e,this.format_number_conv(e,2,!0)},getAverageAll:function(){var e=parseFloat(this.total_ave)/parseFloat(this.form.opcrs.length);return this.total_ave=e,this.format_number_conv(e,2,!0)},numberInput:function(e){e<0?this.numberInput=0:e>5&&(this.numberInput=5)},disableTyping:function(e){e.metaKey||e.ctrlKey||e.preventDefault()},getAverage:function(e){parseFloat(this.opcrs[e].rating_e)>5&&(this.opcrs[e].rating_e=5),""==this.opcrs[e].rating_e&&(this.opcrs[e].rating_e=0),""==this.opcrs[e].rating_q&&(this.opcrs[e].rating_q=0),""==this.opcrs[e].rating_t&&(this.opcrs[e].rating_t=0),parseFloat(this.opcrs[e].rating_e)<0&&(this.opcrs[e].rating_e=0),parseFloat(this.opcrs[e].rating_q)>5&&(this.opcrs[e].rating_q=5),parseFloat(this.opcrs[e].rating_q)<0&&(this.opcrs[e].rating_q=0),parseFloat(this.opcrs[e].rating_t)>5&&(this.opcrs[e].rating_t=5),parseFloat(this.opcrs[e].rating_t)<0&&(this.opcrs[e].rating_t=0);var t=0;parseFloat(this.opcrs[e].rating_e)>=1&&(t+=1),parseFloat(this.opcrs[e].rating_q)>=1&&(t+=1),parseFloat(this.opcrs[e].rating_t)>=1&&(t+=1),0==t&&(t=1);var r=parseFloat(this.opcrs[e].rating_e)+parseFloat(this.opcrs[e].rating_q)+parseFloat(this.opcrs[e].rating_t);return r=this.format_number_conv(r/t,2,!0)},submit:function(){if(isNaN(this.total_ave))alert("Some values are empty!");else{if(1==confirm("WARNING!\nAre you sure you want to save changes to this OPCR?")){var e=JSON.stringify(this.form.opcrs);this.$inertia.post("/opcr/form/store",{opcrs:e,FFUNCCOD:this.FFUNCCOD},{preserveScroll:!0,preserveState:!0,replace:!0})}}}}};var p=r(3379),u=r.n(p),h=r(4698),g={insert:"head",singleton:!1};u()(h.Z,g);h.Z.locals;const d=(0,r(3744).Z)(c,[["render",function(e,t,r,s,i,l){var c=(0,a.resolveComponent)("Head");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(c,null,{default:(0,a.withCtx)((function(){return[o]})),_:1}),n],64)}]])},4706:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(821),o={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},n={class:"row",style:{width:"380px"}},s={class:"bgc-white"},i={class:"modal-header"},l=(0,a.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),c={class:"modal-body"};const p={props:{title:String}};var u=r(3379),h=r.n(u),g=r(8776),d={insert:"head",singleton:!1};h()(g.Z,d);g.Z.locals;const m=(0,r(3744).Z)(p,[["render",function(e,t,r,p,u,h){return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",i,[l,(0,a.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,a.createElementVNode)("div",c,[(0,a.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(821),o={class:"pagination"},n={class:"page-item"},s={class:"page-item"};const i={props:{prev:String,next:String}};const l=(0,r(3744).Z)(i,[["render",function(e,t,r,i,l,c){var p=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createElementVNode)("ul",o,[(0,a.createElementVNode)("li",n,[r.prev?((0,a.openBlock)(),(0,a.createBlock)(p,{key:0,class:"page-link",href:r.prev,"preserve-scroll":""},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:1,class:(0,a.normalizeClass)(["page-link",{"text-muted":!r.prev}])},"Previous",2))]),(0,a.createElementVNode)("li",s,[r.next?((0,a.openBlock)(),(0,a.createBlock)(p,{key:0,class:"page-link",href:r.next,"preserve-scroll":""},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)("Next")]})),_:1},8,["href"])):((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:1,class:(0,a.normalizeClass)(["page-link",{"text-muted":!r.next}])},"Next",2))])])])}]])}}]);