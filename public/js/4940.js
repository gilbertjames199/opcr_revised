"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4940],{4940:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var o=r(821),n={class:"relative row gap-20 masonry pos-r"},i={class:"peers fxw-nw jc-sb ai-c"},c=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),a={key:0},l={class:"col-md-8"},s=(0,o.createElementVNode)("input",{type:"hidden",required:""},null,-1),d={key:0},m=(0,o.createElementVNode)("label",{for:""},"SUCCESS INDICATOR",-1),u={key:0,class:"fs-6 c-red-500"},f=(0,o.createElementVNode)("label",{for:""},"Target Description",-1),p={key:1,class:"fs-6 c-red-500"},h=(0,o.createElementVNode)("label",{for:""},"Quantity",-1),_={key:0,class:"fs-6 c-red-500"},g=(0,o.createElementVNode)("label",{for:""},"Output",-1),v=["value"],y={key:2,class:"fs-6 c-red-500"},E=(0,o.createElementVNode)("label",{for:""},"Quality",-1),k=["value"],V={key:3,class:"fs-6 c-red-500"},N=(0,o.createElementVNode)("label",{for:""},"Efficiency",-1),B=["value"],b={key:4,class:"fs-6 c-red-500"},D=(0,o.createElementVNode)("label",{for:""},"Timeliness",-1),S=["value"],w={key:5,class:"fs-6 c-red-500"},x=(0,o.createElementVNode)("label",{for:""},"Remarks",-1),q={key:0,class:"fs-6 c-red-500"},C=["disabled"],T=(0,o.createElementVNode)("br",null,null,-1),O=(0,o.createElementVNode)("br",null,null,-1),M=(0,o.createElementVNode)("br",null,null,-1),j=(0,o.createElementVNode)("br",null,null,-1);var U=r(7757),F=r.n(U),I=r(9038);r(126);function L(e,t,r,o,n,i,c){try{var a=e[i](c),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(o,n)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var i=e.apply(t,r);function c(e){L(i,o,n,c,a,"next",e)}function a(e){L(i,o,n,c,a,"throw",e)}c(void 0)}))}}const R={props:{editData:Object,FFUNCCOD:String,office:Object,paps:Object,idpaps:String,opcr_list_id:String,success_indicators:Object,outputs:Object,qualities:Object,ratings:Object,timeliness:Object,paps_selected:Object},data:function(){return{success_indicator_holder:"",submitted:!1,correctedSentence:"",form:(0,I.cI)({target_success_indicator:"",output_id:"",quality_id:"",ratings_id:"",timeliness_id:"",remarks_final:"",quantity:"",idpaps:"",office_performance_commitment_rating_list_id:"",id:null}),pageTitle:""}},mounted:function(){void 0!==this.editData?(this.pageTitle="Edit",this.form.target_success_indicator=this.editData.target_success_indicator,this.form.output_id=this.editData.output_id,this.form.quality_id=this.editData.quality_id,this.form.ratings_id=this.editData.ratings_id,this.form.timeliness_id=this.editData.timeliness_id,this.form.quantity=this.editData.quantity,this.form.idpaps=this.editData.idpaps,this.form.office_performance_commitment_rating_list_id=this.editData.office_performance_commitment_rating_list_id,this.form.id=this.editData.id,this.form.remarks_final=this.editData.remarks_final,this.success_indicator_holder=this.editData.target_success_indicator):(this.pageTitle="Create",this.form.idpaps=this.idpaps,this.form.office_performance_commitment_rating_list_id=this.opcr_list_id,this.form.id=null,this.preselectThirdLevel())},methods:{submit:function(){""===this.success_indicator_holder?alert("Select success indicator first!"):void 0!==this.editData?this.form.patch("/opcrtarget",this.form):this.form.post("/opcrtarget/store")},setSuccessTarget:function(){this.form.target_success_indicator=this.success_indicator_holder},preselectThirdLevel:function(){var e=Object.keys(this.qualities).length,t=Object.keys(this.ratings).length,r=Object.keys(this.timeliness).length;if(e>0){var o=parseFloat(e)/2;o=Math.floor(o),this.form.quality_id=this.qualities[o].id}if(t>=0){var n=parseFloat(t)/2;n=Math.floor(n),this.form.ratings_id=this.ratings[n].id}if(r>=0){var i=parseFloat(r)/2;i=Math.floor(i),this.form.timeliness_id=this.timeliness[i].id}},correctSentence:function(e){return P(F().mark((function t(){var r,o,n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("https://languagetool.org/api/v2/check",{text:e,language:"en-US"});case 3:return r=t.sent,o=r.data.matches,n=e,o.forEach((function(e){n=n.replace(e.context.text,e.replacements[0].value)})),t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",e);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},setSentence:function(){var e=this;return P(F().mark((function t(){var r,o,n,i,c,a,l,s,d;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("selectOutput").selectedIndex,o=document.getElementById("selectQuality").selectedIndex,n=document.getElementById("selectRating").selectedIndex,i=document.getElementById("selectTimeliness").selectedIndex,c=e.outputs[r].Outputs,a=e.qualities[o].quality,l=e.ratings[n].efficiency_quantity,s=e.ratings[i].ind_time,d=e.form.quantity+" "+l+" "+c+" "+s+"  with "+a,alert(d),t.next=12,e.correctSentence(d);case 12:e.correctedSentence=t.sent,alert(e.correctedSentence);case 14:case"end":return t.stop()}}),t)})))()},setVal:function(){var e=this;return P(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.form.target_success_indicator=e.setSentence(),alert(e.form.target_success_indicator);case 2:case"end":return t.stop()}}),t)})))()}}};const Z=(0,r(3744).Z)(R,[["render",function(e,t,r,U,F,I){var L=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("h3",null,(0,o.toDisplayString)(F.pageTitle)+" OPCR Target",1),(0,o.createVNode)(L,{href:"/opcrtarget/".concat(r.opcr_list_id)},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["href"])]),r.paps_selected?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createTextVNode)(" Programs, Activities, and Projects: "),(0,o.createElementVNode)("u",null,(0,o.toDisplayString)(r.paps_selected.paps_desc),1)])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("form",{onSubmit:t[13]||(t[13]=(0,o.withModifiers)((function(e){return I.submit()}),["prevent"]))},[s,F.form.idpaps?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[m,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return F.success_indicator_holder=e}),class:"form-control",autocomplete:"chrome-off",onChange:t[1]||(t[1]=function(){return I.setSuccessTarget&&I.setSuccessTarget.apply(I,arguments)})},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.success_indicators,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",null,(0,o.toDisplayString)(e.success_indicator),1)})),256))],544),[[o.vModelSelect,F.success_indicator_holder]]),F.form.errors.semester?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,(0,o.toDisplayString)(F.form.errors.semester),1)):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0),f,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return F.form.target_success_indicator=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[o.vModelText,F.form.target_success_indicator]]),F.form.errors.target_success_indicator?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,(0,o.toDisplayString)(F.form.errors.target_success_indicator),1)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",null,[h,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return F.form.quantity=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[o.vModelText,F.form.quantity]]),F.form.errors.quantity?((0,o.openBlock)(),(0,o.createElementBlock)("div",_,(0,o.toDisplayString)(F.form.errors.quantity),1)):(0,o.createCommentVNode)("",!0)]),g,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return F.form.output_id=e}),id:"selectOutput",class:"form-control",autocomplete:"chrome-off"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.outputs,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id},(0,o.toDisplayString)(e.Outputs),9,v)})),256))],512),[[o.vModelSelect,F.form.output_id]]),F.form.errors.output_id?((0,o.openBlock)(),(0,o.createElementBlock)("div",y,(0,o.toDisplayString)(F.form.errors.output_id),1)):(0,o.createCommentVNode)("",!0),E,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return F.form.quality_id=e}),id:"selectQuality",class:"form-control",autocomplete:"chrome-off"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.qualities,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id},(0,o.toDisplayString)(e.quality),9,k)})),256))],512),[[o.vModelSelect,F.form.quality_id]]),F.form.errors.quality_id?((0,o.openBlock)(),(0,o.createElementBlock)("div",V,(0,o.toDisplayString)(F.form.errors.quality_id),1)):(0,o.createCommentVNode)("",!0),N,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return F.form.ratings_id=e}),id:"selectRating",class:"form-control",autocomplete:"chrome-off"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.ratings,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id},(0,o.toDisplayString)(e.efficiency_quantity),9,B)})),256))],512),[[o.vModelSelect,F.form.ratings_id]]),F.form.errors.ratings_id?((0,o.openBlock)(),(0,o.createElementBlock)("div",b,(0,o.toDisplayString)(F.form.errors.ratings_id),1)):(0,o.createCommentVNode)("",!0),D,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return F.form.timeliness_id=e}),id:"selectTimeliness",class:"form-control",autocomplete:"chrome-off",onChange:t[8]||(t[8]=function(){return I.setSentence&&I.setSentence.apply(I,arguments)})},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.timeliness,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id},(0,o.toDisplayString)(e.timeliness),9,S)})),256))],544),[[o.vModelSelect,F.form.timeliness_id]]),F.form.errors.quality_id?((0,o.openBlock)(),(0,o.createElementBlock)("div",w,(0,o.toDisplayString)(F.form.errors.timeliness_id),1)):(0,o.createCommentVNode)("",!0),(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[9]||(t[9]=function(e){return F.form.office_performance_commitment_rating_list_id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[o.vModelText,F.form.office_performance_commitment_rating_list_id]]),(0,o.createElementVNode)("div",null,[x,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=function(e){return F.form.remarks_final=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[o.vModelText,F.form.remarks_final]]),F.form.errors.remarks_final?((0,o.openBlock)(),(0,o.createElementBlock)("div",q,(0,o.toDisplayString)(F.form.errors.remarks_final),1)):(0,o.createCommentVNode)("",!0)]),(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[11]||(t[11]=function(e){return F.form.idpaps=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[o.vModelText,F.form.idpaps]]),(0,o.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[12]||(t[12]=function(e){return I.submit()}),disabled:F.form.processing}," Save changes ",8,C),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(this.editData)+" ",1),T,(0,o.createTextVNode)("*****************"),O,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(r.qualities)+" ",1),M,(0,o.createTextVNode)("*****************"),j,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(r.success_indicators),1)],32)])])}]])},126:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(821),n={class:"masonry-item w-100"},i={class:"row gap-20"},c={class:"col-md-3 col-6"},a={class:"layers bd bgc-white p-20"},l={class:"layer w-100 mB-10"},s={class:"lh-1"},d={class:"layer w-100"},m={class:"peers ai-sb fxw-nw"},u=(0,o.createElementVNode)("div",{class:"peer peer-greed"},[(0,o.createElementVNode)("span",{id:"sparklinedash"})],-1),f={class:"layers bd bgc-white p-20"},p=(0,o.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,o.createElementVNode)("h6",{class:"lh-1"},"Barangay")],-1),h={class:"layer w-100"},_={class:"peers ai-sb fxw-nw"},g=(0,o.createElementVNode)("div",{class:"peer peer-greed"},[(0,o.createElementVNode)("span",{id:"sparklinedash"})],-1),v={class:"form-control"},y=(0,o.createElementVNode)("option",null,null,-1);const E={props:{mun:Array},data:function(){return{mun_code:"",barsel:"",munsel:"",bar:[]}},computed:{my_mun:function(){return this.mun_code},my_bar:function(){return this.bar}},mounted:function(){},watch:{},methods:{loadBar:function(){var e=this;alert(this.munsel),""===this.munsel||axios.post("/places/bar",{mun:this.munsel}).then((function(t){e.bar=t.data.data}))},showMun:function(){alert(this.mun_code)}}};const k=(0,r(3744).Z)(E,[["render",function(e,t,r,E,k,V){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("h6",s,"Municipalities "+(0,o.toDisplayString)(V.my_mun),1)]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",m,[u,(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return k.munsel=e}),onChange:t[1]||(t[1]=function(){return V.loadBar&&V.loadBar.apply(V,arguments)})},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.mun,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",null,(0,o.toDisplayString)(e.citymunDesc),1)})),256))],544),[[o.vModelSelect,k.munsel]])])])]),(0,o.createElementVNode)("div",f,[p,(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",_,[g,(0,o.createElementVNode)("select",v,[y,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(k.bar,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",null,(0,o.toDisplayString)(e.brgyDesc),1)})),256))])])])])])])])}]])}}]);