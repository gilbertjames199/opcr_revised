"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4206],{3021:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(3645),o=l.n(n)()((function(e){return e[1]}));o.push([e.id,":root{font:400 2ch/1.25 Consolas}#editor{height:100px;margin:10px auto 0;width:375px}fieldset{margin:2px auto 15px;width:375px}button{padding:1px 3px;text-align:center;width:5ex}",""]);const a=o},4206:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var n=l(821),o={class:"relative row gap-20 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},r=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),i={class:"col-md-8"},c=(0,n.createElementVNode)("input",{type:"hidden",required:""},null,-1),d=(0,n.createElementVNode)("label",{for:""},"PROJECT TITLE",-1),s={key:0,class:"fs-6 c-red-500"},m=(0,n.createElementVNode)("label",{for:""},"RATIONALE",-1),u=(0,n.createElementVNode)("fieldset",null,[(0,n.createElementVNode)("button",{class:"fontStyle",type:"button",onclick:"document.execCommand('italic',false,null);",title:"Italicize Highlighted Text"},[(0,n.createElementVNode)("i",null,"I")]),(0,n.createElementVNode)("button",{class:"fontStyle",type:"button",onclick:"document.execCommand( 'bold',false,null);",title:"Bold Highlighted Text"},[(0,n.createElementVNode)("b",null,"B")]),(0,n.createElementVNode)("button",{class:"fontStyle",type:"button",onclick:"document.execCommand( 'underline',false,null);",title:"Underline Highlighted Text"},[(0,n.createElementVNode)("u",null,"U")]),(0,n.createElementVNode)("button",{class:"fontStyle",type:"button",onclick:"document.execCommand( 'insertOrderedList',false,null);",title:"Numbering"},[(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",fill:"currentColor",class:"bi bi-list-ol",viewBox:"0 0 16 16"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"}),(0,n.createElementVNode)("path",{d:"M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"})])]),(0,n.createElementVNode)("button",{class:"fontStyle",type:"button",onclick:"document.execCommand( 'insertUnorderedList',false,null);",title:"Bullets"},[(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",fill:"currentColor",class:"bi bi-list-ul",viewBox:"0 0 16 16"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})])])],-1),h={id:"form.rationale",contenteditable:"true"},p=["value"],f={key:1,class:"fs-6 c-red-500"},v=["disabled"];var E=l(9038);l(126);const b={props:{editData:Object},data:function(){return{submitted:!1,form:(0,E.cI)({rationale:"",id:null}),pageTitle:""}},mounted:function(){void 0!==this.editData?(this.pageTitle="Edit",this.form.goal_description=this.editData.goal_description,this.form.id=this.editData.id):this.pageTitle="Create"},methods:{submit:function(){alert("rationale: "+this.form.rationale+"\nTitle"+this.form.title),void 0!==this.editData?this.form.patch("/SDG/"+this.form.id,this.form):this.form.post("/SDG")},formatText:function(e){var t=document.querySelector("textarea"),l=t.selectionStart,n=t.selectionEnd,o=t.value.slice(l,n);switch(e){case"bold":document.execCommand("bold");break;case"underline":t.value=t.value.slice(0,l)+"<u>"+o+"</u>"+t.value.slice(n),document.execCommand("underline");break;case"ordered-list":t.value=t.value.slice(0,l)+"<ol><li>"+o+"</li></ol>"+t.value.slice(n),document.execCommand("insertOrderedList");break;case"unordered-list":t.value=t.value.slice(0,l)+"<ul><li>"+o+"</li></ul>"+t.value.slice(n),document.execCommand("insertUnorderedList")}t.selectionStart=l,t.selectionEnd=n,this.form.rationale=t.value}}};var V=l(3379),g=l.n(V),N=l(3021),w={insert:"head",singleton:!1};g()(N.Z,w);N.Z.locals;const x=(0,l(3744).Z)(b,[["render",function(e,t,l,E,b,V){var g=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h3",null,(0,n.toDisplayString)(b.pageTitle)+" Project Profile",1),(0,n.createVNode)(g,{href:"/projectprofile"},{default:(0,n.withCtx)((function(){return[r]})),_:1})]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,n.withModifiers)((function(e){return V.submit()}),["prevent"]))},[c,d,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.form.project_title=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[n.vModelText,b.form.project_title]]),b.form.errors.project_title?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,(0,n.toDisplayString)(b.form.errors.project_title),1)):(0,n.createCommentVNode)("",!0),m,u,(0,n.createElementVNode)("fieldset",h,[(0,n.createElementVNode)("div",{contenteditable:"true",style:{"word-wrap":"break-word",height:"400px",width:"400px","background-color":"#FFFFFF","text-align":"left"},value:b.form.rationale},null,8,p)]),b.form.errors.project_title?((0,n.openBlock)(),(0,n.createElementBlock)("div",f,(0,n.toDisplayString)(b.form.errors.project_title),1)):(0,n.createCommentVNode)("",!0),(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.form.id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[n.vModelText,b.form.id]]),(0,n.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3 text-white",onClick:t[2]||(t[2]=function(e){return V.submit()}),disabled:b.form.processing}," Save changes ",8,v)],32)])])}]])},126:(e,t,l)=>{l.d(t,{Z:()=>N});var n=l(821),o={class:"masonry-item w-100"},a={class:"row gap-20"},r={class:"col-md-3 col-6"},i={class:"layers bd bgc-white p-20"},c={class:"layer w-100 mB-10"},d={class:"lh-1"},s={class:"layer w-100"},m={class:"peers ai-sb fxw-nw"},u=(0,n.createElementVNode)("div",{class:"peer peer-greed"},[(0,n.createElementVNode)("span",{id:"sparklinedash"})],-1),h={class:"layers bd bgc-white p-20"},p=(0,n.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,n.createElementVNode)("h6",{class:"lh-1"},"Barangay")],-1),f={class:"layer w-100"},v={class:"peers ai-sb fxw-nw"},E=(0,n.createElementVNode)("div",{class:"peer peer-greed"},[(0,n.createElementVNode)("span",{id:"sparklinedash"})],-1),b={class:"form-control"},V=(0,n.createElementVNode)("option",null,null,-1);const g={props:{mun:Array},data:function(){return{mun_code:"",barsel:"",munsel:"",bar:[]}},computed:{my_mun:function(){return this.mun_code},my_bar:function(){return this.bar}},mounted:function(){},watch:{},methods:{loadBar:function(){var e=this;alert(this.munsel),""===this.munsel||axios.post("/places/bar",{mun:this.munsel}).then((function(t){e.bar=t.data.data}))},showMun:function(){alert(this.mun_code)}}};const N=(0,l(3744).Z)(g,[["render",function(e,t,l,g,N,w){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("h6",d,"Municipalities "+(0,n.toDisplayString)(w.my_mun),1)]),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",m,[u,(0,n.withDirectives)((0,n.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return N.munsel=e}),onChange:t[1]||(t[1]=function(){return w.loadBar&&w.loadBar.apply(w,arguments)})},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.mun,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",null,(0,n.toDisplayString)(e.citymunDesc),1)})),256))],544),[[n.vModelSelect,N.munsel]])])])]),(0,n.createElementVNode)("div",h,[p,(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("div",v,[E,(0,n.createElementVNode)("select",b,[V,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(N.bar,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",null,(0,n.toDisplayString)(e.brgyDesc),1)})),256))])])])])])])])}]])}}]);