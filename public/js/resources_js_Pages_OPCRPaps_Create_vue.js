"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_OPCRPaps_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");

 //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Output: Object,
    Performance: Object,
    Success: Object,
    Office: Object,
    Monitoring: Object,
    RatingRemarks: Object,
    QualityRemarks: Object,
    TimelinessRemarks: Object,
    paps: Object,
    idpaps: Number,
    editData: Object,
    sectors: Object,
    ratings_r: Object,
    qualities_r: Object,
    timeliness_r: Object
  },
  components: {
    //BootstrapModalNoJquery,
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
      showRatingInput: true,
      showQualityInput: false,
      showTimelinessInput: false,
      submitted: false,
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        Outputs: "",
        PerformanceMeasure: "",
        SuccessIndicator: "",
        OfficeAccountable: "",
        Monitoring: "",
        NumericalRating: [],
        AdjectivalRating: [],
        Efficiency: [],
        RatingRemarks: "",
        NumericalRating1: [],
        AdjectivalRating1: [],
        Quality: [],
        QualityRemarks: "",
        NumericalRating2: [],
        AdjectivalRating2: [],
        Timeliness: [],
        TimelinessRemarks: "",
        idpaps: "",
        id: null
      }),
      rating_length: 1,
      quality_length: 1,
      timeliness_length: 1,
      pageTitle: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.form.idpaps = this.idpaps;

    if (this.editData !== undefined) {
      if (this.bari) {
        this.bar = this.bari;
      }

      this.pageTitle = "Edit";
      this.form.Outputs = this.Output.Outputs;
      this.form.PerformanceMeasure = this.Performance.performance;
      this.form.SuccessIndicator = this.Success.success_indicator;
      this.form.OfficeAccountable = this.Office.office_accountable;
      this.form.Monitoring = this.Monitoring.monitoring;
      this.form.RatingRemarks = this.RatingRemarks.rating_remarks;
      this.form.QualityRemarks = this.QualityRemarks.quality_remarks;
      this.form.TimelinessRemarks = this.TimelinessRemarks.timeliness_remarks;
      this.form.idpaps = this.editData.idpaps;
      this.form.id = this.editData.id;
      this.ratings_r.forEach(function (item, index) {
        _this.form.NumericalRating.push(item.numerical_rating);

        _this.form.AdjectivalRating.push(item.adjectival_rating);

        _this.form.Efficiency.push(item.efficiency_quantity);

        _this.rating_length += 1;
      });
      this.qualities_r.forEach(function (item, index) {
        _this.form.NumericalRating1.push(item.numerical_rating);

        _this.form.AdjectivalRating1.push(item.adjectival_rating);

        _this.form.Quality.push(item.quality);

        _this.quality_length += 1;
      });
      this.timeliness_r.forEach(function (item, index) {
        _this.form.NumericalRating2.push(item.numerical_rating);

        _this.form.AdjectivalRating2.push(item.adjectival_rating);

        _this.form.Timeliness.push(item.timeliness);

        _this.timeliness_length += 1;
      });
    } else {
      this.pageTitle = "Create";
    }
  },
  methods: {
    submit: function submit() {
      this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4); //alert(this.form.target_qty);

      if (this.editData !== undefined) {
        this.form.patch("/OPCRpaps/" + this.form.id, this.form);
      } else {
        // alert("Sample");
        var url = "/OPCRpaps/store"; // alert('for store '+url);

        this.form.post(url);
      }
    },
    increaseLengthEfficiency: function increaseLengthEfficiency() {
      if (parseFloat(this.rating_length) <= 5) {
        this.form.NumericalRating.push(this.rating_length);

        if (this.rating_length > 4) {
          //Efficiency
          this.form.AdjectivalRating.push('O');
          this.form.Efficiency.push('100% and above');
        } else if (this.rating_length > 3) {
          //Efficiency
          this.form.AdjectivalRating.push('VS');
          this.form.Efficiency.push('100%');
        } else if (this.rating_length > 2) {
          //Efficiency
          this.form.AdjectivalRating.push('S');
          this.form.Efficiency.push('90-99%');
        } else if (this.rating_length > 1) {
          //Efficiency
          this.form.AdjectivalRating.push('US');
          this.form.Efficiency.push('51-89%');
        } else {
          //Efficiency
          this.form.AdjectivalRating.push('P');
          this.form.Efficiency.push('Below 50%');
        }

        this.rating_length = parseFloat(this.rating_length) + 1;
      } else {
        alert("You can only add up to five ratings!");
      }
    },
    increaseLengthQuality: function increaseLengthQuality() {
      if (parseFloat(this.quality_length) <= 5) {
        this.form.NumericalRating1.push(this.quality_length);

        if (this.quality_length > 4) {
          this.form.AdjectivalRating1.push('O');
          this.form.Quality.push("Excellent Feedback");
        } else if (this.quality_length > 3) {
          this.form.AdjectivalRating1.push('VS');
          this.form.Quality.push("VS Feedback");
        } else if (this.quality_length > 2) {
          this.form.AdjectivalRating1.push('S');
          this.form.Quality.push("Satisfactory Feedback");
        } else if (this.quality_length > 1) {
          this.form.AdjectivalRating1.push('US');
          this.form.Quality.push("Unsatisfactory Feedback");
        } else {
          this.form.AdjectivalRating1.push('P');
          this.form.Quality.push("Poor Feedback");
        }

        this.quality_length = parseFloat(this.quality_length) + 1;
      } else {
        alert("You can only add up to five ratings!");
      }
    },
    increaseLengthTime: function increaseLengthTime() {
      if (parseFloat(this.timeliness_length) <= 5) {
        this.form.NumericalRating2.push(this.timeliness_length);

        if (this.timeliness_length > 4) {
          this.form.AdjectivalRating2.push('O');
          this.form.Timeliness.push("16 days before estimated period");
        } else if (this.timeliness_length > 3) {
          this.form.AdjectivalRating2.push('VS');
          this.form.Timeliness.push("1-15 days before estimated period");
        } else if (this.timeliness_length > 2) {
          this.form.AdjectivalRating2.push('S');
          this.form.Timeliness.push("Within estimated period");
        } else if (this.timeliness_length > 1) {
          this.form.AdjectivalRating2.push('US');
          this.form.Timeliness.push("1-15 days after estimated period");
        } else {
          this.form.AdjectivalRating2.push('P');
          this.form.Timeliness.push("16 days after estimated period");
        }

        this.timeliness_length = parseFloat(this.timeliness_length) + 1;
      } else {
        alert("You can only add up to five ratings!");
      }
    },
    decreaseLengthEfficiency: function decreaseLengthEfficiency() {
      if (this.rating_length >= 1) {
        this.form.AdjectivalRating.pop();
        this.form.NumericalRating.pop();
        this.form.Efficiency.pop();

        if (this.rating_length > 1) {
          this.rating_length = this.rating_length - 1;
        }
      }
    },
    decreaseLengthQuality: function decreaseLengthQuality() {
      if (this.quality_length >= 1) {
        this.form.AdjectivalRating1.pop();
        this.form.NumericalRating1.pop();
        this.form.Quality.pop();

        if (this.quality_length > 1) {
          this.quality_length = this.quality_length - 1;
        }
      }
    },
    decreaseLengthTimeliness: function decreaseLengthTimeliness() {
      if (this.timeliness_length >= 1) {
        this.form.AdjectivalRating2.pop();
        this.form.NumericalRating2.pop();
        this.form.Timeliness.pop();

        if (this.timeliness_length > 1) {
          this.timeliness_length = this.timeliness_length - 1;
        }
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = {
  "class": "col-md-8"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Output", -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Performance Measures", -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 1,
  "class": "fs-6 c-red-500"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Success Indicator", -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 2,
  "class": "fs-6 c-red-500"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Office/Individual Accountable", -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 3,
  "class": "fs-6 c-red-500"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Monitoring", -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3",
  id: "pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-home-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-home",
  type: "button",
  role: "tab",
  "aria-controls": "pills-home",
  "aria-selected": "true"
}, " Rating ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-profile-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-profile",
  type: "button",
  role: "tab",
  "aria-controls": "pills-profile",
  "aria-selected": "false"
}, " Quality ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-contact-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-contact",
  type: "button",
  role: "tab",
  "aria-controls": "pills-contact",
  "aria-selected": "false"
}, " Timeliness ")])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_19 = {
  "class": "tab-pane fade show active",
  id: "pills-home",
  role: "tabpanel",
  "aria-labelledby": "pills-home-tab"
};
var _hoisted_20 = {
  "class": "border p-4"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", {
  "class": "float-none w-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Efficiency Rating")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "float-none w-auto"
};
var _hoisted_23 = {
  "class": "table table-bordered"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Numerical Rating "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Adjectival Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency (Quantity)")], -1
/* HOISTED */
);

var _hoisted_25 = ["onUpdate:modelValue"];
var _hoisted_26 = ["onUpdate:modelValue"];
var _hoisted_27 = {
  style: {
    "width": "60%"
  }
};
var _hoisted_28 = ["onUpdate:modelValue"];

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "input"
}, "Remarks", -1
/* HOISTED */
);

var _hoisted_30 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_31 = {
  "class": "tab-pane fade",
  id: "pills-profile",
  role: "tabpanel",
  "aria-labelledby": "pills-profile-tab"
};
var _hoisted_32 = {
  "class": "border p-4"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", {
  "class": "float-none w-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Quality Rating ")], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "float-none w-auto"
};
var _hoisted_35 = {
  "class": "table table-bordered"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Numerical Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Adjectival Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality")], -1
/* HOISTED */
);

var _hoisted_37 = ["onUpdate:modelValue"];
var _hoisted_38 = ["onUpdate:modelValue"];
var _hoisted_39 = {
  style: {
    "width": "60%"
  }
};
var _hoisted_40 = ["onUpdate:modelValue"];

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "input"
}, "Remarks", -1
/* HOISTED */
);

var _hoisted_42 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_43 = {
  "class": "tab-pane fade",
  id: "pills-contact",
  role: "tabpanel",
  "aria-labelledby": "pills-contact-tab"
};
var _hoisted_44 = {
  "class": "border p-4"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", {
  "class": "float-none w-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Timeliness Rating ")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "float-none w-auto"
};
var _hoisted_47 = {
  "class": "table table-bordered"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Numerical Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Adjectival Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness")], -1
/* HOISTED */
);

var _hoisted_49 = ["onUpdate:modelValue"];
var _hoisted_50 = ["onUpdate:modelValue"];
var _hoisted_51 = {
  style: {
    "width": "60%"
  }
};
var _hoisted_52 = ["onUpdate:modelValue"];

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "input"
}, "Remarks", -1
/* HOISTED */
);

var _hoisted_54 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_55 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " OPCR Standard ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ idpaps }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/OPCRpaps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("PAPS Decription: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.paps_desc), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-8\">\n            <button class=\"btn btn-secondary\" @click=\"showModal\" :disabled=\"submitted\">Permissions</button>\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.idpaps = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.idpaps]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.Outputs = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.Outputs]]), $data.form.errors.Outputs ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.Outputs), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.PerformanceMeasure = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.PerformanceMeasure]]), $data.form.errors.PerformanceMeasure ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.PerformanceMeasure), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.SuccessIndicator = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.SuccessIndicator]]), $data.form.errors.SuccessIndicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.SuccessIndicator), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.OfficeAccountable = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.OfficeAccountable]]), $data.form.errors.OfficeAccountable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.OfficeAccountable), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.Monitoring = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.Monitoring]]), $data.form.errors.Monitoring ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.Monitoring), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary text-white",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.increaseLengthEfficiency && $options.increaseLengthEfficiency.apply($options, arguments);
    })
  }, "Add"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger text-white",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.decreaseLengthEfficiency && $options.decreaseLengthEfficiency.apply($options, arguments);
    })
  }, "Remove"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", _hoisted_20, [_hoisted_21, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.NumericalRating, function (num_r, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Rating " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter numerical rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.NumericalRating[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_25), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.NumericalRating[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter adjectival rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.AdjectivalRating[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.AdjectivalRating[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter efficiency",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.Efficiency[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_28), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.Efficiency[index]]])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "input",
    type: "text",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.RatingRemarks = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.RatingRemarks]]), $data.form.errors.RatingRemarks ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.RatingRemarks), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary text-white",
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.increaseLengthQuality && $options.increaseLengthQuality.apply($options, arguments);
    })
  }, "Add"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger text-white",
    onClick: _cache[10] || (_cache[10] = function () {
      return $options.decreaseLengthQuality && $options.decreaseLengthQuality.apply($options, arguments);
    })
  }, "Remove"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", _hoisted_32, [_hoisted_33, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.NumericalRating1, function (num_r, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Rating " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter numerical rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.NumericalRating1[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_37), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.NumericalRating1[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter adjectival rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.AdjectivalRating1[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.AdjectivalRating1[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter Quality",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.Quality[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_40), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.Quality[index]]])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "input",
    type: "text",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.QualityRemarks = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.QualityRemarks]]), $data.form.errors.QualityRemarks ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.QualityRemarks), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary text-white",
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.increaseLengthTime && $options.increaseLengthTime.apply($options, arguments);
    })
  }, "Add"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger text-white",
    onClick: _cache[13] || (_cache[13] = function () {
      return $options.decreaseLengthTimeliness && $options.decreaseLengthTimeliness.apply($options, arguments);
    })
  }, "Remove"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", _hoisted_44, [_hoisted_45, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.NumericalRating2, function (num_r, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Rating " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter numerical rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.NumericalRating2[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_49), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.NumericalRating2[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter adjectival rating",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.AdjectivalRating2[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_50), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.AdjectivalRating2[index]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "Enter Timeliness",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.Timeliness[index] = $event;
      },
      "class": "form-control",
      autocomplete: "positionchrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_52), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.Timeliness[index]]])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.Timeliness }} "), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "input",
    type: "text",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.TimelinessRemarks = $event;
    }),
    "class": "form-control",
    autocomplete: "positionchrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.TimelinessRemarks]]), $data.form.errors.TimelinessRemarks ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.TimelinessRemarks), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3 text-white",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, " Save changes ", 8
  /* PROPS */
  , _hoisted_55)], 32
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

/***/ "./resources/js/Pages/OPCRPaps/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/OPCRPaps/Create.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_8db304a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=8db304a4 */ "./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_raao1_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_raao1_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_8db304a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/OPCRPaps/Create.vue"]])
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
/* harmony import */ var C_xampp_htdocs_raao1_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_raao1_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/PlacesShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_8db304a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_8db304a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=8db304a4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCRPaps/Create.vue?vue&type=template&id=8db304a4");


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