"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_AnnualInvestmentPlan_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.js");
/* harmony import */ var vue_select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select2 */ "./node_modules/vue-select2/dist/vue-select.min.js");
/* harmony import */ var vue_select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select2__WEBPACK_IMPORTED_MODULE_3__);



 //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //paps: Object,
    //pap1: Object,
    editData: Object,
    sectors: Object,
    accounts: Object,
    codes: Object,
    //aip: Object,
    //total_budget_year: Object,
    functions: Object,
    programs: Object,
    ooes: Object
  },
  components: {
    //BootstrapModalNoJquery,
    Select2: (vue_select2__WEBPACK_IMPORTED_MODULE_3___default()),
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_2__.ModelSelect,
    Places: function Places() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }, 2000);
      });
    }
  },
  data: function data() {
    return {
      submitted: false,
      chart_selected: "",
      pap_selected: "",
      prog_selected: "",
      total: 0,
      idprogram_selected: "0",
      program_typed: "",
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        // idooe: "",
        year: "",
        FFUNCCOD: "",
        FFUNCTION: "",
        raao_type: "",
        program_id: "",
        aip_code: "",
        source: "",
        planned_ps: "",
        planned_mooe: "",
        planned_fe: "",
        planned_co: "",
        planned_total: "",
        approved_ps: "",
        approved_mooe: "",
        approved_fe: "",
        approved_co: "",
        approved_total: "",
        id: null // object_of_expenditure: "",
        // account_code: "",
        // past_year: 0,
        // first_sem: 0,
        // second_sem: 0,
        // budget_year: "",
        // idpaps: "",
        // category: "",
        // GAD: "",
        // CCET: "",

      }),
      pageTitle: "",
      data_programs: [],
      dt_prog: [],
      data_ooes: [],
      dt_ooes: [],
      dt_ooes_length: []
    };
  },
  computed: {
    // formattedOOEs() {
    //     let dataOoes = this.dt_ooes;
    //     return this.dt_ooes.map((dataOoes) => ({
    //         value: dataOoes.recid,
    //         label: dataOoes.FOOEDESC,
    //         FACTCODE: dataOoes.FACTCODE,
    //         program_id: dataOoes.idprogram,
    //         FFUNCCOD: dataOoes.FFUNCCOD,
    //         sem1: dataOoes.sem1,
    //         sem2: dataOoes.sem2,
    //         past_year: dataOoes.past_year
    //     }));
    // },
    formattedPrograms: function formattedPrograms() {
      var _this = this;

      var dataPrograms = this.programs;

      if (this.form.raao_type) {
        dataPrograms = dataPrograms.filter(function (program) {
          return program.ftype === _this.form.raao_type;
        });
      }

      if (this.form.FFUNCCOD) {
        dataPrograms = dataPrograms.filter(function (program) {
          return program.FFUNCCOD === _this.form.FFUNCCOD;
        });
      }

      return dataPrograms.map(function (program) {
        return {
          value: program.recid,
          label: program.FPROGRAM,
          raaotype: program.ftype,
          FFUNCCOD: program.FFUNCCOD,
          raohsid: program.raohsid
        };
      });
    },
    getTotal12: function getTotal12() {
      var f1 = parseFloat(this.form.first_sem);
      var f2 = parseFloat(this.form.second_sem);
      var tot = f1 + f2;
      var tat = this.format_number_conv(tot, 2, true);
      return tat;
    },
    computed_pastyear: function computed_pastyear() {
      // var p_year = this.format_number_conv(this.form.past_year,2,true);
      // if(isNaN(p_year)){
      //     return "0.00"
      // }else{
      //     return this.format_number_conv(this.form.past_year,2,true);
      // }
      return this.format_number_conv(this.form.past_year, 2, true);
    },
    computed_sem1: function computed_sem1() {
      //var s1 = parseFloat(this.form.sem1);
      return this.format_number_conv(this.form.first_sem, 2, true); //return this.format_number_conv(s1,2,true);
      //return isNaN(s1) ? '0.00' : s1;
    },
    computed_sem2: function computed_sem2() {
      return this.format_number_conv(this.form.second_sem, 2, true);
    }
  },
  mounted: function mounted() {
    //this.setCurrentYear()
    this.dt_prog = this.programs;
    this.data_programs = this.programs.map(function (programs) {
      return programs.FPROGRAM;
    });
    this.dt_ooes = [];
    this.dt_ooes = this.ooes; // this.pap_selected = this.pap1.paps_desc

    if (this.editData !== undefined) {
      if (this.bari) {
        this.bar = this.bari;
      }

      this.pageTitle = "Edit";
      this.form.year = this.editData.year;
      this.form.FFUNCCOD = this.editData.FFUNCCOD;
      this.form.raao_type = this.editData.raao_type;
      this.filterProgram();
      this.form.program_id = this.editData.program_id;
      this.form.aip_code = this.editData.aip_code;
      this.form.source = this.editData.source;
      this.form.planned_ps = this.editData.planned_ps;
      this.form.planned_mooe = this.editData.planned_mooe;
      this.form.planned_fe = this.editData.planned_fe;
      this.form.planned_co = this.editData.planned_co;
      this.form.planned_total = this.editData.planned_total;
      this.form.approved_ps = this.editData.approved_ps;
      this.form.approved_mooe = this.editData.approved_mooe;
      this.form.approved_fe = this.editData.approved_fe;
      this.form.approved_co = this.editData.approved_co;
      this.form.approved_total = this.editData.approved_total;
      this.form.final_tag = this.editData.final_tag; //this.loadOOE();
      // this.form.idooe = this.editData.idooe
      // this.form.account_code = this.editData.account_code
      // this.form.past_year = this.editData.past_year
      // this.form.first_sem = this.editData.first_sem
      // this.form.second_sem = this.editData.second_sem
      // this.form.budget_year = this.editData.budget_year
      // this.form.idpaps = this.editData.idpaps
      // this.form.category = this.editData.category
      // this.form.GAD = this.editData.GAD
      // this.form.CCET = this.editData.CCET

      this.form.id = this.editData.id; // this.form.object_of_expenditure = this.editData.object_of_expenditure
      // this.searchByAccountCodeForEditMounted();
    } else {
      this.pageTitle = "Create "; // this.form.idpaps = this.pap1.id

      this.setCurrentYear();
    }
  },
  methods: {
    submit: function submit() {
      if (this.editData !== undefined) {
        this.form.patch("/annual-investment-plans/" + this.editData.id, this.form);
      } else {
        this.form.post("/annual-investment-plans/", this.form);
      } // this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
      // var aip_mooe = parseFloat(this.aip.MOOE);
      // var aip_ps = parseFloat(this.aip.PS);
      // var aip_co = parseFloat(this.aip.CO);
      // var app_mooe = parseFloat(this.total_budget_year.total_approp_mooe) + parseFloat(this.form.budget_year);
      // var app_ps = parseFloat(this.total_budget_year.total_ps_approp) + parseFloat(this.form.budget_year);
      // var app_co = parseFloat(this.total_budget_year.total_co_approp) + parseFloat(this.form.budget_year);
      // var addable = true;
      //var adval=0;
      // var possible_difference = 0;
      // var maxi = parseFloat(0);
      // if (this.form.category == 'Capital Outlay') {
      //     if (app_co > aip_co) {
      //         addable = false;
      //         // possible_difference=aip_co - parseFloat(this.total_budget_year.total_co_approp);
      //         maxi = parseFloat(aip_co);
      //     }
      // }
      // if (this.form.category == 'Maintenance, Operating, and Other Expenses') {
      //     if (app_mooe > aip_mooe) {
      //         maxi = parseFloat(aip_mooe);
      //         addable = false;
      //         // possible_difference=aip_mooe - parseFloat(this.total_budget_year.total_approp_mooe);
      //     }
      // }
      // if (this.form.category == 'Personnel Services') {
      //     if (app_ps > aip_ps) {
      //         maxi = parseFloat(app_ps);
      //         addable = false;
      //         // possible_difference=aip_ps - parseFloat(this.total_budget_year.total_ps_approp);
      //     }
      // }
      // if (addable == false) {
      //     if (this.editData !== undefined) {
      //         this.form.patch("/appropriations/", this.form);
      //     } else {
      //         alert("The maximum allowable value for budget year is only " + maxi + ". ")
      //     }
      // } else {
      //     if (this.editData !== undefined) {
      //         this.form.patch("/appropriations/", this.form);
      //     } else {
      //         // alert("Sample");
      //         var url = "/appropriations/store"
      //         // alert('for store '+url);
      //         this.form.post(url);
      //     }
      // }

    },
    addAccount: function addAccount() {
      // if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
      // this.selected = this.typed;
      alert('addAccount');
    },
    searchPrograms: function searchPrograms() {//this.program_typed = searchText;
      //alert(this.program_typed)
      // const matchedPrograms = this.formattedPrograms.filter(
      //     (program) => program.label.toLowerCase().includes(this.typed.toLowerCase())
      // );
      // if (matchedPrograms.length > 0) {
      //     // Set the first matching program's value (recid) to form.idprogram
      //     this.form.idprogram = matchedPrograms[0].value;
      // } else {
      //     // Handle the case when there are no matching programs
      //     // For example, you can clear the form.idprogram or show an error message
      //     this.form.idprogram = null;
      // }
      //alert(typed);
      // if (!this.formattedPrograms.includes(this.typed)) this.formattedPrograms.push(this.typed);
      // this.selected = this.typed;
      // Find the program whose label matches the typed search text (case-insensitive)
      // const matchedProgram = this.formattedPrograms.find(
      //     (formattedPrograms) => formattedPrograms.label.toLowerCase() === this.typed.toLowerCase()
      // );
      // if (matchedProgram) {
      //     // Set the selected program's value (recid) to form.idprogram
      //     this.form.idprogram = matchedProgram.value;
      // } else {
      //     // Handle the case when the search text doesn't match any program
      //     // You may want to add some error handling here or reset the value
      //     this.form.idprogram = null;
      // }
    },
    setCode: function setCode() {
      var ind = this.accounts.indexOf(this.chart_selected);
      this.form.account_code = this.codes[ind];
      this.form.object_of_expenditure = this.chart_selected; // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
      // this.form.particulars = this.chart_selected
    },
    searchByAccountCode: function searchByAccountCode() {
      var ind = this.codes.indexOf(this.form.account_code.toString());
      this.chart_selected = this.accounts[parseInt(ind)];
      this.form.object_of_expenditure = this.chart_selected;
    },
    searchByAccountCodeForEditMounted: function searchByAccountCodeForEditMounted() {
      var ind = this.codes.indexOf(this.form.account_code.toString());
      this.chart_selected = this.accounts[parseInt(ind)];
    },
    setCurrentYear: function setCurrentYear() {
      var yr = new Date().getFullYear();
      this.form.year = parseFloat(yr) + 1;
    },
    filterProgram: function filterProgram() {
      // this.form.idprogram=null;
      // this.form.idooe=null;
      var selectElement = this.$refs.raaoSelect;
      this.form.category = selectElement.options[selectElement.selectedIndex].text;
    },
    // loadOOE() {
    //     this.dt_ooes = [];
    //     var year1 = parseFloat(this.form.year) - 1;
    //     axios.get("/ooes/filtered/ooes", {
    //         params: {
    //             program_id: this.form.program_id,
    //             FFUNCCOD: this.form.FFUNCCOD,
    //             raaotype: this.form.raao_type,
    //             year: year1
    //         }
    //     }).then((response) => {
    //         this.dt_ooes = response.data;
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // },
    setOOEValue: function setOOEValue() {
      var _this2 = this;

      var prog_sel = this.dt_ooes.filter(function (ooes) {
        return ooes.recid === _this2.form.idooe;
      });
      this.form.account_code = prog_sel[0].FACTCODE;
      this.searchByAccountCode();
      this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
      this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
      this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
      this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    mun: Array // bar: Array,

  },
  data: function data() {
    return {
      mun_code: "",
      barsel: "",
      munsel: "",
      bar: []
    };
  },
  computed: {
    my_mun: function my_mun() {
      return this.mun_code;
    },
    my_bar: function my_bar() {
      return this.bar;
    }
  },
  mounted: function mounted() {//this.bar=[];
  },
  watch: {},
  methods: {
    loadBar: function loadBar() {
      var _this = this;

      alert(this.munsel);

      if (this.munsel === "") {} else {
        axios.post("/places/bar", {
          mun: this.munsel
        }).then(function (response) {
          _this.bar = response.data.data;
        });
      }
    },
    showMun: function showMun() {
      alert(this.mun_code);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative row gap-20 masonry pos-r"
};
var _hoisted_2 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "25",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Programs, Projects, and Activities (PAPS) Selected:", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-md-8"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "YEAR", -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "OFFICE", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_11 = ["value"];
var _hoisted_12 = {
  key: 1,
  "class": "fs-6 c-red-500"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "RAAO TYPE", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option></option><option value=\"1\">Personnel Services</option><option value=\"2\">Maintenance, Operating, and Other Expenses</option><option value=\"3\">Capital Outlay</option><option value=\"4\">Programs</option><option value=\"5\">Projects</option>", 6);

var _hoisted_20 = [_hoisted_14];
var _hoisted_21 = {
  key: 2,
  "class": "fs-6 c-red-500"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "PROGRAM", -1
/* HOISTED */
);

var _hoisted_23 = {
  key: 3,
  "class": "fs-6 c-red-500"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "AIP Code", -1
/* HOISTED */
);

var _hoisted_25 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Source", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "AIP", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "SIPA", -1
/* HOISTED */
);

var _hoisted_29 = [_hoisted_27, _hoisted_28];
var _hoisted_30 = {
  key: 5,
  "class": "fs-6 c-red-500"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Planned PS", -1
/* HOISTED */
);

var _hoisted_32 = {
  key: 6,
  "class": "fs-6 c-red-500"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Planned MOOE", -1
/* HOISTED */
);

var _hoisted_34 = {
  key: 7,
  "class": "fs-6 c-red-500"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Planned FE", -1
/* HOISTED */
);

var _hoisted_36 = {
  key: 8,
  "class": "fs-6 c-red-500"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Planned Capital Outlay", -1
/* HOISTED */
);

var _hoisted_38 = {
  key: 9,
  "class": "fs-6 c-red-500"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Planned Total", -1
/* HOISTED */
);

var _hoisted_40 = {
  key: 10,
  "class": "fs-6 c-red-500"
};
var _hoisted_41 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Annual Investment Plan", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/annual-investment-plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-8\">\r\n            <button class=\"btn btn-secondary\" @click=\"showModal\" :disabled=\"submitted\">Permissions</button>\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.idpaps = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.idpaps]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div hidden>\r\n                    <label for=\"\">Chart of Accounts</label>\r\n                    <div @keyup.enter=\"addAccount($event)\">\r\n                        <multiselect :options=\"accounts\" :searchable=\"true\" v-model=\"chart_selected\" @select=\"setCode\"\r\n                            :value=\"chart_selected\" @search-change=\"typed = $event\">\r\n                        </multiselect>\r\n                    </div>\r\n                    <div class=\"fs-6 c-red-500\" v-if=\"form.errors.object_of_expenditure\">{{ form.errors.object_of_expenditure }}</div>\r\n\r\n                    <label>ACCOUNT CODE </label>\r\n                    <input type=\"number\" class=\"form-control\" v-model=\"form.account_code\" @change=\"searchByAccountCode\" />\r\n                    <div class=\"fs-6 c-red-500\" v-if=\"form.errors.account_code\">{{ form.errors.account_code }}</div>\r\n\r\n                    <label for=\"\">Object of Expenditure</label>\r\n                    <input type=\"text\" v-model=\"form.object_of_expenditure\" class=\"form-control\"\r\n                        autocomplete=\"positionchrome-off\">\r\n                    <div class=\"fs-6 c-red-500\" v-if=\"form.errors.object_of_expenditure\">{{\r\n                        form.errors.object_of_expenditure }}</div>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("*****************************"), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.year = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.year]]), $data.form.errors.year ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.year), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.FFUNCCOD }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.FFUNCCOD = $event;
    })
  }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.functions, function (functione) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: functione.FFUNCCOD
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(functione.FFUNCTION), 9
    /* TEXT, PROPS */
    , _hoisted_11);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.FFUNCCOD]]), $data.form.errors.FFUNCCOD ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FFUNCCOD), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.raaotype }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.raao_type = $event;
    }),
    ref: "raaoSelect",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.filterProgram && $options.filterProgram.apply($options, arguments);
    })
  }, _hoisted_20, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.raao_type]]), $data.form.errors.raao_type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.raao_type), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <br>{{ form.idprogram }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form }} @keyup.enter=\"searchPrograms($event)\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
    options: $options.formattedPrograms,
    searchable: true,
    modelValue: $data.form.program_id,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.program_id = $event;
    }),
    label: "label",
    "track-by": "label"
  }, null, 8
  /* PROPS */
  , ["options", "modelValue"])]), $data.form.errors.program_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.program_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.aip_code = $event;
    }),
    type: "text"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.aip_code]]), $data.form.errors.aip_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.aip_code), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.source = $event;
    })
  }, _hoisted_29, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.source]]), $data.form.errors.source ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.source), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.planned_ps = $event;
    }),
    type: "number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.planned_ps]]), $data.form.errors.planned_ps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.planned_ps), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.planned_mooe = $event;
    }),
    type: "number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.planned_mooe]]), $data.form.errors.planned_mooe ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.planned_mooe), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.planned_fe = $event;
    }),
    type: "number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.planned_fe]]), $data.form.errors.planned_fe ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.planned_fe), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.planned_co = $event;
    }),
    type: "number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.planned_co]]), $data.form.errors.planned_co ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.planned_co), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.planned_total = $event;
    }),
    type: "number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.planned_total]]), $data.form.errors.planned_total ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.planned_total), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn text-white btn-primary mt-3 text-white",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, " Save changes ", 8
  /* PROPS */
  , _hoisted_41), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ aip }}\r\n                <br/>\r\n                {{ total_budget_year }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" trte {{ formattedPrograms }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dt_ooes }} ")], 32
  /* HYDRATE_EVENTS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "masonry-item w-100"
};
var _hoisted_2 = {
  "class": "row gap-20"
};
var _hoisted_3 = {
  "class": "col-md-3 col-6"
};
var _hoisted_4 = {
  "class": "layers bd bgc-white p-20"
};
var _hoisted_5 = {
  "class": "layer w-100 mB-10"
};
var _hoisted_6 = {
  "class": "lh-1"
};
var _hoisted_7 = {
  "class": "layer w-100"
};
var _hoisted_8 = {
  "class": "peers ai-sb fxw-nw"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peer peer-greed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "sparklinedash"
})], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "Barangay")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "layer w-100"
};
var _hoisted_13 = {
  "class": "peers ai-sb fxw-nw"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peer peer-greed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "sparklinedash"
})], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "form-control"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, "Municipalities " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.my_mun), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.munsel = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.loadBar && $options.loadBar.apply($options, arguments);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.mun, function (munn) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(munn.citymunDesc), 1
    /* TEXT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.munsel]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_15, [_hoisted_16, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.bar, function (barr) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(barr.brgyDesc), 1
    /* TEXT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])])]);
}

/***/ }),

/***/ "./resources/js/Pages/AnnualInvestmentPlan/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/AnnualInvestmentPlan/Create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_0660f837__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0660f837 */ "./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_0660f837__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/AnnualInvestmentPlan/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlacesShared.vue?vue&type=template&id=ee3222a6 */ "./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6");
/* harmony import */ var _PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlacesShared.vue?vue&type=script&lang=js */ "./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/PlacesShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlacesShared.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_0660f837__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_0660f837__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=0660f837 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AnnualInvestmentPlan/Create.vue?vue&type=template&id=0660f837");


/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlacesShared.vue?vue&type=template&id=ee3222a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6");


/***/ })

}]);