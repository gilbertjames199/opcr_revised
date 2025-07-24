"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_OPCR_TargetBudget_CreateBackup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.js");
/* harmony import */ var vue_select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select2 */ "./node_modules/vue-select2/dist/vue-select.min.js");
/* harmony import */ var vue_select2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select2__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




 //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    paps_selected: Object,
    opcr_targets: Object,
    programs: Object,
    ooes: Object,
    opcr_list_id: String,
    editData: Object
  },
  components: {
    //BootstrapModalNoJquery,
    Select2: (vue_select2__WEBPACK_IMPORTED_MODULE_4___default()),
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_3__.ModelSelect,
    Places: function Places() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
      raaotype: "",
      ind: "",
      ind_opcr: "",
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        idsuccessindicator: "",
        idmfo: "",
        idpaps: "",
        amount: 0,
        idprogram: "",
        idtarget: "",
        opcr_list_id: "",
        id: null
      }),
      pageTitle: "",
      data_programs: [],
      dt_ooes: [],
      dt_ooes_length: []
    };
  },
  computed: {
    formattedPrograms: function formattedPrograms() {
      var _this = this;

      var dataPrograms = this.programs;

      if (this.form.raaotype) {
        dataPrograms = dataPrograms.filter(function (program) {
          return program.ftype === _this.form.raaotype;
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
          label: program.FPROGRAM + " " + program.recid + " " + program.raohsid,
          raaotype: program.ftype,
          FFUNCCOD: program.FFUNCCOD,
          raohsid: program.raohsid
        };
      });
    },
    computed_amount: function computed_amount() {
      return this.format_number_conv(this.form.amount, 2, true);
    }
  },
  watch: {
    "form.idpaps": function formIdpaps(newIdpaps) {
      if (newIdpaps) {
        console.log("form.idpaps is set:", newIdpaps);
        this.setMFOandSuccessIndicator();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.data_programs = this.programs.map(function (programs) {
      return programs.FPROGRAM;
    }); // this.dt_ooes = [];

    this.dt_ooes = this.ooes; // this.pap_selected = this.pap1.paps_desc

    if (this.editData !== undefined) {
      if (this.bari) {
        this.bar = this.bari;
      }

      this.pageTitle = "Edit";
      this.form.idmfo = this.editData.idmfo;
      this.form.idpaps = this.editData.idpaps;
      console.log("idpaps: " + this.form.idpaps);
      this.form.amount = this.editData.amount; // this.form.year = this.editData.year
      // this.form.FFUNCCOD = this.editData.FFUNCCOD
      // this.form.raaotype = this.editData.raaotype

      this.filterProgram();
      this.$nextTick(function () {
        console.log("NextTick - form.idpaps:", _this2.form.idpaps);

        if (_this2.form.idpaps) {
          _this2.setMFOandSuccessIndicator();
        }
      }); // ✅ Watch for changes in form.idpaps

      this.$watch(function () {
        return _this2.form.idpaps;
      }, function (newIdpaps) {
        if (newIdpaps) {
          console.log("form.idpaps is set:", newIdpaps);

          _this2.setMFOandSuccessIndicator();
        }
      }, {
        immediate: true,
        deep: true
      });
      this.console.log(" Naa bot diri"); // this.form.idprogram = this.editData.idprogram
      //this.loadOOE();
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
      // this.form.id = this.editData.id
      // this.form.object_of_expenditure = this.editData.object_of_expenditure
      // this.searchByAccountCodeForEditMounted();
    } else {
      this.pageTitle = "Create "; // this.form.idpaps = this.pap1.id

      this.form.opcr_list_id = this.opcr_list_id;
      this.setCurrentYear();
    }
  },
  methods: {
    submit: function submit() {
      if (this.editData !== undefined) {
        this.form.patch("/appropriations/", this.form);
      } else {
        // alert("Sample");
        var url = "/opcrbudgeting/store"; // alert('for store '+url);

        this.form.post(url);
      }
    },
    addAccount: function addAccount() {
      alert('addAccount');
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
      var selectElement = this.$refs.raaoSelect; // this.form.category = selectElement.options[selectElement.selectedIndex].text;
    },
    loadOOE: function loadOOE() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var year1;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.dt_ooes = [];
                year1 = parseFloat(_this3.form.year) - 1; // alert(loadOOE);

                _context.next = 4;
                return axios.get("/ooes/filtered/ooes", {
                  params: {
                    idprogram: _this3.form.idprogram,
                    FFUNCCOD: _this3.form.FFUNCCOD,
                    raaotype: _this3.form.raaotype,
                    year: year1
                  }
                }).then(function (response) {
                  _this3.dt_ooes = response.data;
                })["catch"](function (error) {
                  console.error(error);
                });

              case 4:
                _this3.form.amount = _this3.calculateTotalAnnual();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setMFOandSuccessIndicator: function setMFOandSuccessIndicator() {
      var _this4 = this;

      this.ind = this.paps_selected.findIndex(function (paps) {
        return paps.id === _this4.form.idpaps;
      });
      this.ind_opcr = this.opcr_targets.findIndex(function (optarg) {
        return optarg.idpaps === _this4.form.idpaps;
      });

      if (this.ind > -1) {
        this.form.idmfo = this.paps_selected[this.ind].idmfo;

        if (this.paps_selected[this.ind].m_f_o) {
          this.mfo_text = this.paps_selected[this.ind].m_f_o.mfo_desc;
        }

        if (this.paps_selected[this.ind].success_indicator) {
          this.success_indicator_text = this.paps_selected[this.ind].success_indicator.success_indicator;
          this.form.idsuccessindicator = this.paps_selected[this.ind].success_indicator.id;
        } //this.success_indicator_text=this.

      } else {
        this.mfo_text = "";
        this.form.idmfo = "";
        this.success_indicator_text = "";
        this.form.idsuccessindicator = "";
      }

      if (this.ind_opcr > -1) {
        this.form.idtarget = this.opcr_targets[this.ind_opcr].id;
      }

      console.log("index tt: " + this.ind);
      console.log("idmfo tt: " + this.form.idmfo);
    },
    calculateTotalAnnual: function calculateTotalAnnual() {
      return this.dt_ooes.reduce(function (total, item) {
        var annualTotal = item.sem1 + item.sem2; // alert(item.sem1)

        console.log(item.sem1);
        return total + annualTotal;
      }, 0);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative row gap-20 masonry pos-r"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peers fxw-nw jc-sb ai-c"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Edit Target Budget Refefe")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "col-md-8"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Major Final Output", -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_8 = ["value"];
var _hoisted_9 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 1
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Success Indicator", -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 2,
  "class": "fs-6 c-red-500"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "PROGRAM", -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 3,
  "class": "fs-6 c-red-500"
};
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = {
  key: 1
};
var _hoisted_18 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "AMOUNT ", -1
/* HOISTED */
);

var _hoisted_20 = ["value"];
var _hoisted_21 = {
  key: 5,
  "class": "fs-6 c-red-500"
};
var _hoisted_22 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.idpaps = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.idpaps]]), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.mfo_text = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.mfo_text]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.idmfo = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.idmfo]]), $data.form.errors.idmfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idmfo), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "PAPS " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.idpaps), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.idpaps = $event;
    }),
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.setMFOandSuccessIndicator && $options.setMFOandSuccessIndicator.apply($options, arguments);
    })
  }, [_hoisted_7, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.paps_selected, function (paps) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: paps.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paps.paps_desc) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paps.id), 9
    /* TEXT, PROPS */
    , _hoisted_8);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.idpaps]]), $data.form.errors.idpaps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [$data.form.idpaps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, "A budget with the selected PAPS and program has already been saved. Select a different PAPS!")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, "PAPS is required"))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.success_indicator_text = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.success_indicator_text]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.idsuccessindicator = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.idsuccessindicator]]), $data.form.errors.idsuccessindicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idsuccessindicator), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
    options: $options.formattedPrograms,
    searchable: true,
    modelValue: $data.form.idprogram,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.idprogram = $event;
    }),
    label: "label",
    "track-by": "label",
    onClose: $options.loadOOE
  }, null, 8
  /* PROPS */
  , ["options", "modelValue", "onClose"])]), $data.form.errors.idprogram ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [$data.form.idprogram ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, "A budget with the selected PAPS and program has already been saved. Select a different program!")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, "Program is required"))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors.GAD ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.GAD), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" class=\"form-control\" :value=\"computed_amount\" readonly /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" famaount: {{ form.amount }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.amount = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    value: $options.computed_amount,
    hidden: ""
  }, null, 8
  /* PROPS */
  , _hoisted_20), $data.form.errors.amount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.amount), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn text-white btn-primary mt-3 text-white",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, " Save changes ", 8
  /* PROPS */
  , _hoisted_22)], 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.editData) + " ********************** " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form) + " ********************** " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps_selected), 1
  /* TEXT */
  )]);
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

/***/ "./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateBackup_vue_vue_type_template_id_09581fa1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateBackup.vue?vue&type=template&id=09581fa1 */ "./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1");
/* harmony import */ var _CreateBackup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateBackup.vue?vue&type=script&lang=js */ "./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateBackup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateBackup_vue_vue_type_template_id_09581fa1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/PlacesShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateBackup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateBackup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateBackup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateBackup_vue_vue_type_template_id_09581fa1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateBackup_vue_vue_type_template_id_09581fa1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateBackup.vue?vue&type=template&id=09581fa1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue?vue&type=template&id=09581fa1");


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