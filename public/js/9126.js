"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9126],{5577:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(3645),a=r.n(o)()((function(e){return e[1]}));a.push([e.id,".row-centered{text-align:center}.col-centered{display:inline-block;float:none;margin-right:-4px;text-align:left}.pos{position:top;top:240px}",""]);const n=a},8776:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(3645),a=r.n(o)()((function(e){return e[1]}));a.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const n=a},9126:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var o=r(821),a=(0,o.createElementVNode)("title",null,"OPCR",-1),n={class:"row gap-20 masonry pos-r"},l={class:"peers fxw-nw jc-sb ai-c"},s=(0,o.createElementVNode)("h3",null,"OFFICE PERFORMANCE COMMITMENT AND RATING FORM ",-1),c={class:"peers"},i={class:"peer mR-10"},d=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),p=(0,o.createElementVNode)("div",{class:"masonry-sizer col-md-6"},null,-1),m={class:"masonry-item w-100"},u=(0,o.createElementVNode)("div",{class:"row gap-20"},null,-1),g={class:"bgc-white p-20 bd"},h={class:"table-responsive"},f={class:"table table-hover table-bordered border-dark"},v=(0,o.createElementVNode)("thead",{class:"text-center align-items-center"},[(0,o.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,o.createElementVNode)("th",{rowspan:"2"},"Major Final Output"),(0,o.createElementVNode)("th",{rowspan:"2"},"Success Indicators (Targets + Measures)"),(0,o.createElementVNode)("th",{rowspan:"2"},"Alloted Budget"),(0,o.createElementVNode)("th",{rowspan:"2"},"Accountable Division"),(0,o.createElementVNode)("th",{rowspan:"2"},"Actual Accomplishments"),(0,o.createElementVNode)("th",{colspan:"4"},"Rating"),(0,o.createElementVNode)("th",{rowspan:"2"},"Remarks")]),(0,o.createElementVNode)("tr",{class:"bg-secondary text-white"},[(0,o.createElementVNode)("th",null,"Q"),(0,o.createElementVNode)("th",null,"E"),(0,o.createElementVNode)("th",null,"T"),(0,o.createElementVNode)("th",null,"Ave")])],-1),N=["rowspan"],V=["rowspan"],E=["rowspan"],b=(0,o.createElementVNode)("br",null,null,-1),_=(0,o.createElementVNode)("br",null,null,-1),w=(0,o.createElementVNode)("br",null,null,-1),y=["rowspan"],x=["onUpdate:modelValue"],k=["onUpdate:modelValue"],F=["onUpdate:modelValue"],S=["onUpdate:modelValue"],A=["onUpdate:modelValue"],C=(0,o.createElementVNode)("td",{colspan:"5"},null,-1),B=(0,o.createElementVNode)("td",{colspan:"3"},"TOTAL RATING",-1),T=(0,o.createElementVNode)("td",null,null,-1),D=(0,o.createElementVNode)("td",{colspan:"5"},null,-1),M=(0,o.createElementVNode)("td",{colspan:"3"},"FINAL AVERAGE RATING",-1),I=(0,o.createElementVNode)("td",null,null,-1),R=(0,o.createStaticVNode)('<div class="table-responsive"><table class="table table-hover table-bordered border-dark"><tbody><tr><td>Assessed by PMT Secretariat:</td><td>Reviewed by:</td></tr><tr><td class="text-center"><br><br><strong>ALICIA M. GRACIADAS</strong></td><td class="text-center font-weight-bold"><br><br><strong>FATIMA P. MONTEJO</strong></td></tr><tr><td class="text-center" style="font-size:12px;">PMT Head Secretariat</td><td class="text-center" style="font-size:12px;">PMT Chairperson</td></tr><tr><td style="font-size:12px;">Date:</td><td style="font-size:12px;">Date:</td></tr></tbody></table></div>',1),O={class:"row justify-content-center"},U={class:"col-md-12"},Z=["disabled"],q=(0,o.createElementVNode)("div",{class:"row justify-content-center"},[(0,o.createElementVNode)("div",{class:"col-md-12"},[(0,o.createElementVNode)("p")])],-1);var P=r(9038),L=r(4706),z=r(3132);const G={props:{opcr_id:String,FFUNCCOD:String,mooe:Number,ps:Number,opcr_date:String,ave:String,total:String,dept_head:String,opcrs:Object},data:function(){return{total_ave:0,total_comp:0,form:(0,P.cI)({opcrs:[]})}},computed:{},components:{Pagination:z.Z,Filtering:L.Z},mounted:function(){this.form.opcrs=this.opcrs,localStorage.getItem("reloaded")?localStorage.removeItem("reloaded"):(localStorage.setItem("reloaded","1"),location.reload())},methods:{halfSem:function(e){var t=parseFloat(e)/2;return this.format_number_conv(t,2,!0)},deleteEla:function(e){1==confirm("WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?"+e)&&this.$inertia.delete("/ELA/"+e)},getRowspan:function(e,t){for(var r=1,o=parseFloat(t)+1;o<this.opcrs.length&&this.opcrs[o].mfo_desc===e;o++)r=parseFloat(r)+1;return r},getRowspan2:function(e,t){for(var r=1,o=parseFloat(t)+1;o<this.opcrs.length&&this.opcrs[o].office_accountable===e;o++)r=parseFloat(r)+1;return r},getRowspanIndicator:function(e,t){for(var r=1,o=parseFloat(t)+1;o<this.opcrs.length&&this.opcrs[o].success_indicator===e;o++)r=parseFloat(r)+1;return r},getTotalAverage:function(){for(var e=0,t=0;t<this.form.opcrs.length;t++){var r=this.form.opcrs[t].rating_e,o=this.form.opcrs[t].rating_q,a=this.form.opcrs[t].rating_t,n=parseFloat(r)+parseFloat(o)+parseFloat(a),l=0;parseFloat(r)>=1&&(l+=1),parseFloat(o)>=1&&(l+=1),parseFloat(a)>=1&&(l+=1),0==l&&(l=1),e+=n/l}return this.format_number_conv(e,2,!0)},getAverageAll:function(){for(var e=0,t=0;t<this.form.opcrs.length;t++){var r=this.form.opcrs[t].rating_e,o=this.form.opcrs[t].rating_q,a=this.form.opcrs[t].rating_t,n=parseFloat(r)+parseFloat(o)+parseFloat(a),l=0;parseFloat(r)>=1&&(l+=1),parseFloat(o)>=1&&(l+=1),parseFloat(a)>=1&&(l+=1),0==l&&(l=1),e+=n/l}this.total_comp;var s=parseFloat(e)/parseFloat(this.form.opcrs.length);return this.total_ave=s,this.format_number_conv(s,2,!0)},numberInput:function(e){e<0?this.numberInput=0:e>5&&(this.numberInput=5)},disableTyping:function(e){e.metaKey||e.ctrlKey||e.preventDefault()},getAverage:function(e){parseFloat(this.opcrs[e].rating_e)>5&&(this.opcrs[e].rating_e=5),""==this.opcrs[e].rating_e&&(this.opcrs[e].rating_e=0),""==this.opcrs[e].rating_q&&(this.opcrs[e].rating_q=0),""==this.opcrs[e].rating_t&&(this.opcrs[e].rating_t=0),parseFloat(this.opcrs[e].rating_e)<0&&(this.opcrs[e].rating_e=0),parseFloat(this.opcrs[e].rating_q)>5&&(this.opcrs[e].rating_q=5),parseFloat(this.opcrs[e].rating_q)<0&&(this.opcrs[e].rating_q=0),parseFloat(this.opcrs[e].rating_t)>5&&(this.opcrs[e].rating_t=5),parseFloat(this.opcrs[e].rating_t)<0&&(this.opcrs[e].rating_t=0);var t=0;parseFloat(this.opcrs[e].rating_e)>=1&&(t+=1),parseFloat(this.opcrs[e].rating_q)>=1&&(t+=1),parseFloat(this.opcrs[e].rating_t)>=1&&(t+=1),0==t&&(t=1);var r=parseFloat(this.opcrs[e].rating_e)+parseFloat(this.opcrs[e].rating_q)+parseFloat(this.opcrs[e].rating_t);return r=this.format_number_conv(r/t,2,!0)},submit:function(){if(isNaN(this.total_ave))alert("Some values are empty!");else{if(1==confirm("WARNING!\nAre you sure you want to save changes to this OPCR?")){var e=JSON.stringify(this.form.opcrs);this.$inertia.post("/opcr/form/store",{opcrs:e,FFUNCCOD:this.FFUNCCOD},{preserveScroll:!0,preserveState:!0,replace:!0})}}}}};var j=r(3379),$=r.n(j),H=r(5577),J={insert:"head",singleton:!1};$()(H.Z,J);H.Z.locals;const K=(0,r(3744).Z)(G,[["render",function(e,t,r,P,L,z){var G=(0,o.resolveComponent)("Head"),j=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(G,null,{default:(0,o.withCtx)((function(){return[a]})),_:1}),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",l,[s,(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",i,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,e.search]])]),(0,o.createVNode)(j,{href:"/opcrlist/".concat(r.FFUNCCOD)},{default:(0,o.withCtx)((function(){return[d]})),_:1},8,["href"])])]),p,(0,o.createElementVNode)("div",m,[u,(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(e){return z.submit()}),["prevent"]))},[(0,o.createElementVNode)("table",f,[v,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(L.form.opcrs,(function(t,a){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:a},[0===a||t.mfo_desc!==r.opcrs[a-1].mfo_desc?((0,o.openBlock)(),(0,o.createElementBlock)("td",{key:0,rowspan:z.getRowspan(t.mfo_desc,a),style:{"vertical-align":"middle"}},(0,o.toDisplayString)(t.mfo_desc),9,N)):(0,o.createCommentVNode)("",!0),0===a||t.success_indicator!==r.opcrs[a-1].success_indicator?((0,o.openBlock)(),(0,o.createElementBlock)("td",{key:1,rowspan:z.getRowspanIndicator(t.success_indicator,a),style:{"vertical-align":"middle"}},(0,o.toDisplayString)(t.success_indicator),9,V)):(0,o.createCommentVNode)("",!0),0===a?((0,o.openBlock)(),(0,o.createElementBlock)("td",{key:2,rowspan:L.form.opcrs.length,style:{"vertical-align":"middle"}},[(0,o.createTextVNode)(" PS = "+(0,o.toDisplayString)(z.halfSem(r.ps))+" ",1),b,(0,o.createTextVNode)("(annual="+(0,o.toDisplayString)(e.format_number_conv(r.ps))+") ",1),_,w,(0,o.createTextVNode)("MOOE = "+(0,o.toDisplayString)(z.halfSem(r.mooe))+" (annual="+(0,o.toDisplayString)(e.format_number_conv(r.mooe))+") ",1)],8,E)):(0,o.createCommentVNode)("",!0),0===a||t.office_accountable!==r.opcrs[a-1].office_accountable?((0,o.openBlock)(),(0,o.createElementBlock)("td",{key:3,rowspan:z.getRowspan2(t.office_accountable,a),style:{"vertical-align":"middle"}},(0,o.toDisplayString)(t.office_accountable),9,y)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("td",null,[(0,o.withDirectives)((0,o.createElementVNode)("textarea",{"onUpdate:modelValue":function(e){return L.form.opcrs[a].accomplishments=e}},null,8,x),[[o.vModelText,L.form.opcrs[a].accomplishments]])]),(0,o.createElementVNode)("td",null,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":function(e){return L.form.opcrs[a].rating_q=e},class:"centered-input",type:"number",min:"0",max:"5",step:"1"},null,8,k),[[o.vModelText,L.form.opcrs[a].rating_q]])]),(0,o.createElementVNode)("td",null,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":function(e){return L.form.opcrs[a].rating_e=e},class:"centered-input",type:"number",min:"0",max:"5",step:"1"},null,8,F),[[o.vModelText,L.form.opcrs[a].rating_e]])]),(0,o.createElementVNode)("td",null,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":function(e){return L.form.opcrs[a].rating_t=e},class:"centered-input",type:"number",min:"0",max:"5",step:"1"},null,8,S),[[o.vModelText,L.form.opcrs[a].rating_t]])]),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(z.getAverage(a)),1),(0,o.createElementVNode)("td",null,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":function(e){return L.form.opcrs[a].remarks=e}},null,8,A),[[o.vModelText,L.form.opcrs[a].remarks]])])])})),128)),(0,o.createElementVNode)("tr",null,[C,B,(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(z.getTotalAverage()),1),T]),(0,o.createElementVNode)("tr",null,[D,M,(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(z.getAverageAll()),1),I])])])],32)]),R,(0,o.createElementVNode)("div",O,[(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3 text-white",onClick:t[2]||(t[2]=function(e){return z.submit()}),disabled:L.form.processing}," Save changes ",8,Z)])]),q])])])],64)}]])},4706:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(821),a={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},n={class:"row",style:{width:"380px"}},l={class:"bgc-white"},s={class:"modal-header"},c=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Filtering",-1),i={class:"modal-body"};const d={props:{title:String}};var p=r(3379),m=r.n(p),u=r(8776),g={insert:"head",singleton:!1};m()(u.Z,g);u.Z.locals;const h=(0,r(3744).Z)(d,[["render",function(e,t,r,d,p,m){return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",s,[c,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",i,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])},3132:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(821),a={class:"pagination"},n={class:"page-item"},l={class:"page-item"};const s={props:{prev:String,next:String}};const c=(0,r(3744).Z)(s,[["render",function(e,t,r,s,c,i){var d=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",a,[(0,o.createElementVNode)("li",n,[r.prev?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:r.prev,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Previous")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!r.prev}])},"Previous",2))]),(0,o.createElementVNode)("li",l,[r.next?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"page-link",href:r.next,"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Next")]})),_:1},8,["href"])):((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,class:(0,o.normalizeClass)(["page-link",{"text-muted":!r.next}])},"Next",2))])])])}]])}}]);