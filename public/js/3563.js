"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3563],{3563:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var l=o(821),r={class:"relative row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},n=(0,l.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,l.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),i={class:"col-md-8"},c=(0,l.createElementVNode)("input",{type:"hidden",required:""},null,-1),s=(0,l.createElementVNode)("label",{for:""},"Output",-1),m={key:0,class:"fs-6 c-red-500"},d=(0,l.createElementVNode)("label",{for:""},"Performance Measures",-1),u={key:1,class:"fs-6 c-red-500"},p=(0,l.createElementVNode)("label",{for:""},"Success Indicator",-1),f={key:2,class:"fs-6 c-red-500"},h=(0,l.createElementVNode)("label",{for:""},"Office/Individual Accountable",-1),V={key:3,class:"fs-6 c-red-500"},E=(0,l.createElementVNode)("label",{for:""},"Monitoring",-1),N={key:4,class:"fs-6 c-red-500"},b=(0,l.createElementVNode)("br",null,null,-1),v=(0,l.createElementVNode)("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[(0,l.createElementVNode)("li",{class:"nav-item",role:"presentation"},[(0,l.createElementVNode)("button",{class:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"},"Rating")]),(0,l.createElementVNode)("li",{class:"nav-item",role:"presentation"},[(0,l.createElementVNode)("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"},"Quality")]),(0,l.createElementVNode)("li",{class:"nav-item",role:"presentation"},[(0,l.createElementVNode)("button",{class:"nav-link",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false"},"Timeliness")])],-1),g={class:"tab-content",id:"pills-tabContent"},y={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},k={class:"table table-bordered"},R=(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,"Numerical Rating"),(0,l.createElementVNode)("th",null,"Adjectival Rating"),(0,l.createElementVNode)("th",null,"Efficiency (Quantity)")],-1),w={style:{width:"60%"}},x=(0,l.createElementVNode)("label",{for:"input"},"Remarks",-1),M={key:0,class:"fs-6 c-red-500"},D={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"},T={class:"table table-bordered"},B=(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,"Numerical Rating"),(0,l.createElementVNode)("th",null,"Adjectival Rating"),(0,l.createElementVNode)("th",null,"Quality")],-1),O={style:{width:"60%"}},j=(0,l.createElementVNode)("label",{for:"input"},"Remarks",-1),S={key:0,class:"fs-6 c-red-500"},C={class:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"},A={class:"table table-bordered"},U=(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,"Numerical Rating"),(0,l.createElementVNode)("th",null,"Adjectival Rating"),(0,l.createElementVNode)("th",null,"Timeliness")],-1),_={style:{width:"60%"}},Q=(0,l.createElementVNode)("label",{for:"input"},"Remarks",-1),P={key:0,class:"fs-6 c-red-500"},I=["disabled"];var q=o(9038),F=o(126);const Z={props:{Output:Object,Performance:Object,Success:Object,Office:Object,Monitoring:Object,RatingRemarks:Object,QualityRemarks:Object,TimelinessRemarks:Object,paps:Object,idpaps:Number,editData:Object,sectors:Object},components:{Places:function(){return new Promise((function(e){setTimeout((function(){e(F.Z)}),2e3)}))}},data:function(){return{showRatingInput:!0,showQualityInput:!1,showTimelinessInput:!1,submitted:!1,form:(0,q.cI)({Outputs:"",PerformanceMeasure:"",SuccessIndicator:"",OfficeAccountable:"",Monitoring:"",NumericalRating:"",AdjectivalRating:"",Efficiency:"",RatingRemarks:"",NumericalRating1:"",AdjectivalRating1:"",Quality:"",QualityRemarks:"",NumericalRating2:"",AdjectivalRating2:"",Timeliness:"",TimelinessRemarks:"",idpaps:"",id:null}),pageTitle:""}},mounted:function(){this.form.idpaps=this.idpaps,void 0!==this.editData?(this.bari&&(this.bar=this.bari),this.pageTitle="Edit",this.form.Outputs=this.Output.Outputs,this.form.PerformanceMeasure=this.Performance.performance,this.form.SuccessIndicator=this.Success.success_indicator,this.form.OfficeAccountable=this.Office.office_accountable,this.form.Monitoring=this.Monitoring.monitoring,this.form.RatingRemarks=this.RatingRemarks.rating_remarks,this.form.QualityRemarks=this.QualityRemarks.quality_remarks,this.form.TimelinessRemarks=this.TimelinessRemarks.timeliness_remarks,this.form.idpaps=this.editData.idpaps,this.form.id=this.editData.id):this.pageTitle="Create"},methods:{submit:function(){if(this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4),void 0!==this.editData)this.form.patch("/OPCRpaps/"+this.form.id,this.form);else{this.form.post("/OPCRpaps/store")}}}};const L=(0,o(3744).Z)(Z,[["render",function(e,t,o,q,F,Z){var L=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("h3",null,(0,l.toDisplayString)(F.pageTitle)+" OPCR Standard "+(0,l.toDisplayString)(o.idpaps),1),(0,l.createVNode)(L,{href:"/OPCRpaps/direct"},{default:(0,l.withCtx)((function(){return[n]})),_:1})]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("form",{onSubmit:t[20]||(t[20]=(0,l.withModifiers)((function(e){return Z.submit()}),["prevent"]))},[c,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=function(e){return F.form.idpaps=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.idpaps]]),s,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return F.form.Outputs=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.Outputs]]),F.form.errors.Outputs?((0,l.openBlock)(),(0,l.createElementBlock)("div",m,(0,l.toDisplayString)(F.form.errors.Outputs),1)):(0,l.createCommentVNode)("",!0),d,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return F.form.PerformanceMeasure=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.PerformanceMeasure]]),F.form.errors.PerformanceMeasure?((0,l.openBlock)(),(0,l.createElementBlock)("div",u,(0,l.toDisplayString)(F.form.errors.PerformanceMeasure),1)):(0,l.createCommentVNode)("",!0),p,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return F.form.SuccessIndicator=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.SuccessIndicator]]),F.form.errors.SuccessIndicator?((0,l.openBlock)(),(0,l.createElementBlock)("div",f,(0,l.toDisplayString)(F.form.errors.SuccessIndicator),1)):(0,l.createCommentVNode)("",!0),h,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return F.form.OfficeAccountable=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.OfficeAccountable]]),F.form.errors.OfficeAccountable?((0,l.openBlock)(),(0,l.createElementBlock)("div",V,(0,l.toDisplayString)(F.form.errors.OfficeAccountable),1)):(0,l.createCommentVNode)("",!0),E,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return F.form.Monitoring=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.Monitoring]]),F.form.errors.Monitoring?((0,l.openBlock)(),(0,l.createElementBlock)("div",N,(0,l.toDisplayString)(F.form.errors.Monitoring),1)):(0,l.createCommentVNode)("",!0),b,v,(0,l.createElementVNode)("div",g,[(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("table",k,[R,(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter numerical rating","onUpdate:modelValue":t[6]||(t[6]=function(e){return F.form.NumericalRating=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.NumericalRating]])]),(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter adjectival rating","onUpdate:modelValue":t[7]||(t[7]=function(e){return F.form.AdjectivalRating=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.AdjectivalRating]])]),(0,l.createElementVNode)("td",w,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter efficiency","onUpdate:modelValue":t[8]||(t[8]=function(e){return F.form.Efficiency=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.Efficiency]])])])]),x,(0,l.withDirectives)((0,l.createElementVNode)("input",{id:"input",type:"text","onUpdate:modelValue":t[9]||(t[9]=function(e){return F.form.RatingRemarks=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.RatingRemarks]]),F.form.errors.RatingRemarks?((0,l.openBlock)(),(0,l.createElementBlock)("div",M,(0,l.toDisplayString)(F.form.errors.RatingRemarks),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("table",T,[B,(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter numerical rating","onUpdate:modelValue":t[10]||(t[10]=function(e){return F.form.NumericalRating1=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.NumericalRating1]])]),(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter adjectival rating","onUpdate:modelValue":t[11]||(t[11]=function(e){return F.form.AdjectivalRating1=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.AdjectivalRating1]])]),(0,l.createElementVNode)("td",O,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter Quality","onUpdate:modelValue":t[12]||(t[12]=function(e){return F.form.Quality=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.Quality]])])])]),j,(0,l.withDirectives)((0,l.createElementVNode)("input",{id:"input",type:"text","onUpdate:modelValue":t[13]||(t[13]=function(e){return F.form.QualityRemarks=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.QualityRemarks]]),F.form.errors.QualityRemarks?((0,l.openBlock)(),(0,l.createElementBlock)("div",S,(0,l.toDisplayString)(F.form.errors.QualityRemarks),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",C,[(0,l.createElementVNode)("table",A,[U,(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter numerical rating","onUpdate:modelValue":t[14]||(t[14]=function(e){return F.form.NumericalRating2=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.NumericalRating2]])]),(0,l.createElementVNode)("td",null,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter adjectival rating","onUpdate:modelValue":t[15]||(t[15]=function(e){return F.form.AdjectivalRating2=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.AdjectivalRating2]])]),(0,l.createElementVNode)("td",_,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",placeholder:"Enter Timeliness","onUpdate:modelValue":t[16]||(t[16]=function(e){return F.form.Timeliness=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.Timeliness]])])])]),Q,(0,l.withDirectives)((0,l.createElementVNode)("input",{id:"input",type:"text","onUpdate:modelValue":t[17]||(t[17]=function(e){return F.form.TimelinessRemarks=e}),class:"form-control",autocomplete:"positionchrome-off"},null,512),[[l.vModelText,F.form.TimelinessRemarks]]),F.form.errors.TimelinessRemarks?((0,l.openBlock)(),(0,l.createElementBlock)("div",P,(0,l.toDisplayString)(F.form.errors.TimelinessRemarks),1)):(0,l.createCommentVNode)("",!0)])]),(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[18]||(t[18]=function(e){return F.form.id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[l.vModelText,F.form.id]]),(0,l.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[19]||(t[19]=function(e){return Z.submit()}),disabled:F.form.processing}," Save changes ",8,I)],32)])])}]])},126:(e,t,o)=>{o.d(t,{Z:()=>g});var l=o(821),r={class:"masonry-item w-100"},a={class:"row gap-20"},n={class:"col-md-3 col-6"},i={class:"layers bd bgc-white p-20"},c={class:"layer w-100 mB-10"},s={class:"lh-1"},m={class:"layer w-100"},d={class:"peers ai-sb fxw-nw"},u=(0,l.createElementVNode)("div",{class:"peer peer-greed"},[(0,l.createElementVNode)("span",{id:"sparklinedash"})],-1),p={class:"layers bd bgc-white p-20"},f=(0,l.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,l.createElementVNode)("h6",{class:"lh-1"},"Barangay")],-1),h={class:"layer w-100"},V={class:"peers ai-sb fxw-nw"},E=(0,l.createElementVNode)("div",{class:"peer peer-greed"},[(0,l.createElementVNode)("span",{id:"sparklinedash"})],-1),N={class:"form-control"},b=(0,l.createElementVNode)("option",null,null,-1);const v={props:{mun:Array},data:function(){return{mun_code:"",barsel:"",munsel:"",bar:[]}},computed:{my_mun:function(){return this.mun_code},my_bar:function(){return this.bar}},mounted:function(){},watch:{},methods:{loadBar:function(){var e=this;alert(this.munsel),""===this.munsel||axios.post("/places/bar",{mun:this.munsel}).then((function(t){e.bar=t.data.data}))},showMun:function(){alert(this.mun_code)}}};const g=(0,o(3744).Z)(v,[["render",function(e,t,o,v,g,y){return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("h6",s,"Municipalities "+(0,l.toDisplayString)(y.my_mun),1)]),(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("div",d,[u,(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return g.munsel=e}),onChange:t[1]||(t[1]=function(){return y.loadBar&&y.loadBar.apply(y,arguments)})},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(o.mun,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",null,(0,l.toDisplayString)(e.citymunDesc),1)})),256))],544),[[l.vModelSelect,g.munsel]])])])]),(0,l.createElementVNode)("div",p,[f,(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("div",V,[E,(0,l.createElementVNode)("select",N,[b,((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(g.bar,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",null,(0,l.toDisplayString)(e.brgyDesc),1)})),256))])])])])])])])}]])}}]);