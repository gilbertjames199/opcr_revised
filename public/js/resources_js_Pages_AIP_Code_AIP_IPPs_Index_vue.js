"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_AIP_Code_AIP_IPPs_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: Object,
    // data: Object,
    gen_pub: Object,
    // general public
    econ: Object,
    // economic services
    soc: Object,
    // social services
    ldrrmf: Object,
    // ldrrmf
    others: Object // other sources
  },
  data: function data() {
    return {
      search: '',
      year: '',
      expandedRows: {}
    };
  },
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getLength: function getLength(prop) {
      if (!prop) return 0;
      if (Array.isArray(prop)) return prop.length;
      if (prop.data && Array.isArray(prop.data)) return prop.data.length;
      return Object.keys(prop).length;
    },
    filterByYear: function filterByYear() {
      this.$inertia.get('/ipp_aip_codes', {
        year: this.year
      }, {
        preserveScroll: true,
        preserveState: false,
        replace: true
      });
    },
    toggleRow: function toggleRow(itemId) {
      this.expandedRows[itemId] = !this.expandedRows[itemId];
    },
    calculatePS: function calculatePS(activity_project) {
      return parseFloat(activity_project.ps_q1 || 0) + parseFloat(activity_project.ps_q2 || 0) + parseFloat(activity_project.ps_q3 || 0) + parseFloat(activity_project.ps_q4 || 0);
    },
    calculateMOOE: function calculateMOOE(activity_project) {
      return parseFloat(activity_project.mooe_q1 || 0) + parseFloat(activity_project.mooe_q2 || 0) + parseFloat(activity_project.mooe_q3 || 0) + parseFloat(activity_project.mooe_q4 || 0);
    },
    calculateFE: function calculateFE(activity_project) {
      return parseFloat(activity_project.fe_q1 || 0) + parseFloat(activity_project.fe_q2 || 0) + parseFloat(activity_project.fe_q3 || 0) + parseFloat(activity_project.fe_q4 || 0);
    },
    calculateCO: function calculateCO(activity_project) {
      return parseFloat(activity_project.co_q1 || 0) + parseFloat(activity_project.co_q2 || 0) + parseFloat(activity_project.co_q3 || 0) + parseFloat(activity_project.co_q4 || 0);
    },
    calculateTotal: function calculateTotal(activity_project) {
      return this.calculatePS(activity_project) + this.calculateMOOE(activity_project) + this.calculateFE(activity_project) + this.calculateCO(activity_project);
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    prev: String,
    next: String
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "row gap-20 masonry pos-r"
};
var _hoisted_2 = {
  "class": "toolbar-card"
};
var _hoisted_3 = {
  "class": "toolbar-row"
};
var _hoisted_4 = {
  "class": "toolbar-left"
};
var _hoisted_5 = {
  "class": "search-wrapper"
};
var _hoisted_6 = {
  "class": "toolbar-right"
};
var _hoisted_7 = {
  "class": "masonry-item w-100"
};
var _hoisted_8 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_9 = {
  "class": "nav nav-tabs",
  id: "aipTabs",
  role: "tablist"
};
var _hoisted_10 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_11 = {
  "class": "nav-link active",
  id: "gen_pub-tab",
  "data-bs-toggle": "tab",
  "data-bs-target": "#gen_pub-pane",
  type: "button",
  role: "tab",
  "aria-controls": "gen_pub-pane",
  "aria-selected": "true"
};
var _hoisted_12 = {
  "class": "badge-circle"
};
var _hoisted_13 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_14 = {
  "class": "nav-link",
  id: "econ-tab",
  "data-bs-toggle": "tab",
  "data-bs-target": "#econ-pane",
  type: "button",
  role: "tab",
  "aria-controls": "econ-pane",
  "aria-selected": "false"
};
var _hoisted_15 = {
  "class": "badge-circle"
};
var _hoisted_16 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_17 = {
  "class": "nav-link",
  id: "soc-tab",
  "data-bs-toggle": "tab",
  "data-bs-target": "#soc-pane",
  type: "button",
  role: "tab",
  "aria-controls": "soc-pane",
  "aria-selected": "false"
};
var _hoisted_18 = {
  "class": "badge-circle"
};
var _hoisted_19 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_20 = {
  "class": "nav-link",
  id: "ldrrmf-tab",
  "data-bs-toggle": "tab",
  "data-bs-target": "#ldrrmf-pane",
  type: "button",
  role: "tab",
  "aria-controls": "ldrrmf-pane",
  "aria-selected": "false"
};
var _hoisted_21 = {
  "class": "badge-circle"
};
var _hoisted_22 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_23 = {
  "class": "nav-link",
  id: "others-tab",
  "data-bs-toggle": "tab",
  "data-bs-target": "#others-pane",
  type: "button",
  role: "tab",
  "aria-controls": "others-pane",
  "aria-selected": "false"
};
var _hoisted_24 = {
  "class": "badge-circle"
};
var _hoisted_25 = {
  "class": "tab-content",
  id: "aipTabsContent"
};
var _hoisted_26 = {
  "class": "tab-pane fade show active",
  id: "gen_pub-pane",
  role: "tabpanel",
  "aria-labelledby": "gen_pub-tab"
};
var _hoisted_27 = {
  "class": "table-responsive mt-3"
};
var _hoisted_28 = {
  "class": "table table-hover align-middle table-sm"
};
var _hoisted_29 = {
  "class": "main-row"
};
var _hoisted_30 = ["onUpdate:modelValue"];
var _hoisted_31 = ["onClick"];
var _hoisted_32 = ["onUpdate:modelValue"];
var _hoisted_33 = ["onUpdate:modelValue"];
var _hoisted_34 = {
  colspan: "2",
  style: {
    "padding-left": "40px"
  }
};
var _hoisted_35 = {
  "class": "tab-pane fade",
  id: "econ-pane",
  role: "tabpanel",
  "aria-labelledby": "econ-tab"
};
var _hoisted_36 = {
  "class": "table-responsive mt-3"
};
var _hoisted_37 = {
  "class": "table table-hover align-middle table-sm"
};
var _hoisted_38 = {
  "class": "main-row"
};
var _hoisted_39 = ["onUpdate:modelValue"];
var _hoisted_40 = ["onClick"];
var _hoisted_41 = ["onUpdate:modelValue"];
var _hoisted_42 = ["onUpdate:modelValue"];
var _hoisted_43 = {
  colspan: "2",
  style: {
    "padding-left": "40px"
  }
};
var _hoisted_44 = {
  "class": "tab-pane fade",
  id: "soc-pane",
  role: "tabpanel",
  "aria-labelledby": "soc-tab"
};
var _hoisted_45 = {
  "class": "table-responsive mt-3"
};
var _hoisted_46 = {
  "class": "table table-hover align-middle table-sm"
};
var _hoisted_47 = {
  "class": "main-row"
};
var _hoisted_48 = ["onUpdate:modelValue"];
var _hoisted_49 = ["onClick"];
var _hoisted_50 = ["onUpdate:modelValue"];
var _hoisted_51 = ["onUpdate:modelValue"];
var _hoisted_52 = {
  colspan: "2",
  style: {
    "padding-left": "40px"
  }
};
var _hoisted_53 = {
  "class": "tab-pane fade",
  id: "ldrrmf-pane",
  role: "tabpanel",
  "aria-labelledby": "ldrrmf-tab"
};
var _hoisted_54 = {
  "class": "table-responsive mt-3"
};
var _hoisted_55 = {
  "class": "table table-hover align-middle table-sm"
};
var _hoisted_56 = {
  "class": "main-row"
};
var _hoisted_57 = ["onUpdate:modelValue"];
var _hoisted_58 = ["onClick"];
var _hoisted_59 = ["onUpdate:modelValue"];
var _hoisted_60 = ["onUpdate:modelValue"];
var _hoisted_61 = {
  colspan: "2",
  style: {
    "padding-left": "40px"
  }
};
var _hoisted_62 = {
  "class": "tab-pane fade",
  id: "others-pane",
  role: "tabpanel",
  "aria-labelledby": "others-tab"
};
var _hoisted_63 = {
  "class": "table-responsive mt-3"
};
var _hoisted_64 = {
  "class": "table table-hover align-middle table-sm"
};
var _hoisted_65 = {
  "class": "main-row"
};
var _hoisted_66 = ["onUpdate:modelValue"];
var _hoisted_67 = ["onClick"];
var _hoisted_68 = ["onUpdate:modelValue"];
var _hoisted_69 = ["onUpdate:modelValue"];
var _hoisted_70 = {
  colspan: "2",
  style: {
    "padding-left": "40px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p style=\"text-align: justify;\">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.\n    </p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Annual Investment Plan", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-search search-icon"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search = $event;
    }),
    type: "text",
    "class": "filter-input",
    placeholder: "Search..."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.year = $event;
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.filterByYear && $options.filterByYear.apply($options, arguments);
    }),
    "class": "form-select form-select-sm",
    style: {
      "width": "150px",
      "margin-left": "10px"
    }
  }, _toConsumableArray(_cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Filter by Year --</option><option value=\"2024\">2024</option><option value=\"2025\">2025</option><option value=\"2026\">2026</option><option value=\"2027\">2027</option>", 5)])), 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.year]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "tool-btn tool-btn-primary",
    href: "/AIP/create"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": "fas fa-plus"
      }, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" AIP Codes ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])])]), _cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "masonry-sizer col-md-6"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tabs Navigation "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" General Public ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getLength($props.gen_pub)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_14, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Economic Services ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getLength($props.econ)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_17, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Social Services ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getLength($props.soc)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_20, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" LDRRMF ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getLength($props.ldrrmf)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_23, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Other Sources ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getLength($props.others)), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tabs Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" General Public Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_28, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "AIP Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Project Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "2"
  }, "Schedule of Implementation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Expected Outputs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Source of Fund"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "5"
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Sector"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Subsector")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date From"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date To"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.gen_pub, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.aip_code = $event;
      },
      type: "text",
      "class": "form-control form-control-sm"
    }, null, 8 /* PROPS */, _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.aip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.toggleRow(item.id);
      },
      "class": "btn btn-sm btn-link",
      style: {
        "text-align": "left",
        "padding": "0"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right')
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.project_title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_31)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_start), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_end), 1 /* TEXT */), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.source_of_funds = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"dev\">20% Development Fund</option><option value=\"gen_fund\">General Fund</option><option value=\"ldrrmf\">LDRRMF</option><option value=\"other\">Other Sources</option>", 5)])), 8 /* PROPS */, _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.source_of_funds]])]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.sector = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"Economic Services\">Economic Services</option><option value=\"General Public Services Sector\">General Public Services Sector</option><option value=\"Other Services\">Other Services</option><option value=\"Social Services Sector\">Social Services Sector</option>", 5)])), 8 /* PROPS */, _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.sector]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paps.subsector), 1 /* TEXT */)]), $data.expandedRows[item.id] && item.activity_project && item.activity_project.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.activity_project, function (activity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: "".concat(item.id, "-activity-").concat(activity.id),
        "class": "sub-row"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Activity:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity ? activity.activity.description : ''), 1 /* TEXT */)]), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.expected_output ? activity.expected_output.description : ''), 1 /* TEXT */), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePS(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateMOOE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateFE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCO(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateTotal(activity).toFixed(2)), 1 /* TEXT */), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */))]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Economic Services Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_37, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "AIP Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Project Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "2"
  }, "Schedule of Implementation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Expected Outputs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Source of Fund"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "5"
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Sector"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Subsector")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date From"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date To"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.econ, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.aip_code = $event;
      },
      type: "text",
      "class": "form-control form-control-sm"
    }, null, 8 /* PROPS */, _hoisted_39), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.aip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.toggleRow(item.id);
      },
      "class": "btn btn-sm btn-link",
      style: {
        "text-align": "left",
        "padding": "0"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right')
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.project_title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_40)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_start), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_end), 1 /* TEXT */), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.source_of_funds = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"dev\">20% Development Fund</option><option value=\"gen_fund\">General Fund</option><option value=\"ldrrmf\">LDRRMF</option><option value=\"other\">Other Sources</option>", 5)])), 8 /* PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.source_of_funds]])]), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.sector = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[26] || (_cache[26] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"Economic Services\">Economic Services</option><option value=\"General Public Services Sector\">General Public Services Sector</option><option value=\"Other Services\">Other Services</option><option value=\"Social Services Sector\">Social Services Sector</option>", 5)])), 8 /* PROPS */, _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.sector]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paps.subsector), 1 /* TEXT */)]), $data.expandedRows[item.id] && item.activity_project && item.activity_project.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.activity_project, function (activity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: "".concat(item.id, "-activity-").concat(activity.id),
        "class": "sub-row"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, [_cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Activity:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity ? activity.activity.description : ''), 1 /* TEXT */)]), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.expected_output ? activity.expected_output.description : ''), 1 /* TEXT */), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePS(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateMOOE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateFE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCO(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateTotal(activity).toFixed(2)), 1 /* TEXT */), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */))]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Social Services Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_46, [_cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "AIP Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Project Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "2"
  }, "Schedule of Implementation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Expected Outputs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Source of Fund"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "5"
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Sector"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Subsector")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date From"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date To"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.soc, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.aip_code = $event;
      },
      type: "text",
      "class": "form-control form-control-sm"
    }, null, 8 /* PROPS */, _hoisted_48), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.aip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.toggleRow(item.id);
      },
      "class": "btn btn-sm btn-link",
      style: {
        "text-align": "left",
        "padding": "0"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right')
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.project_title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_49)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_start), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_end), 1 /* TEXT */), _cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.source_of_funds = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[38] || (_cache[38] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"dev\">20% Development Fund</option><option value=\"gen_fund\">General Fund</option><option value=\"ldrrmf\">LDRRMF</option><option value=\"other\">Other Sources</option>", 5)])), 8 /* PROPS */, _hoisted_50), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.source_of_funds]])]), _cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.sector = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[39] || (_cache[39] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"Economic Services\">Economic Services</option><option value=\"General Public Services Sector\">General Public Services Sector</option><option value=\"Other Services\">Other Services</option><option value=\"Social Services Sector\">Social Services Sector</option>", 5)])), 8 /* PROPS */, _hoisted_51), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.sector]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paps.subsector), 1 /* TEXT */)]), $data.expandedRows[item.id] && item.activity_project && item.activity_project.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.activity_project, function (activity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: "".concat(item.id, "-activity-").concat(activity.id),
        "class": "sub-row"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_52, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Activity:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity ? activity.activity.description : ''), 1 /* TEXT */)]), _cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.expected_output ? activity.expected_output.description : ''), 1 /* TEXT */), _cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePS(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateMOOE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateFE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCO(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateTotal(activity).toFixed(2)), 1 /* TEXT */), _cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */))]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LDRRMF Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_55, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "AIP Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Project Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "2"
  }, "Schedule of Implementation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Expected Outputs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Source of Fund"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "5"
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Sector"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Subsector")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date From"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date To"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.ldrrmf, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.aip_code = $event;
      },
      type: "text",
      "class": "form-control form-control-sm"
    }, null, 8 /* PROPS */, _hoisted_57), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.aip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.toggleRow(item.id);
      },
      "class": "btn btn-sm btn-link",
      style: {
        "text-align": "left",
        "padding": "0"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right')
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.project_title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_58)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_start), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_end), 1 /* TEXT */), _cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.source_of_funds = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[51] || (_cache[51] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"dev\">20% Development Fund</option><option value=\"gen_fund\">General Fund</option><option value=\"ldrrmf\">LDRRMF</option><option value=\"other\">Other Sources</option>", 5)])), 8 /* PROPS */, _hoisted_59), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.source_of_funds]])]), _cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.sector = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[52] || (_cache[52] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"Economic Services\">Economic Services</option><option value=\"General Public Services Sector\">General Public Services Sector</option><option value=\"Other Services\">Other Services</option><option value=\"Social Services Sector\">Social Services Sector</option>", 5)])), 8 /* PROPS */, _hoisted_60), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.sector]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paps.subsector), 1 /* TEXT */)]), $data.expandedRows[item.id] && item.activity_project && item.activity_project.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.activity_project, function (activity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: "".concat(item.id, "-activity-").concat(activity.id),
        "class": "sub-row"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_61, [_cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Activity:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity ? activity.activity.description : ''), 1 /* TEXT */)]), _cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.expected_output ? activity.expected_output.description : ''), 1 /* TEXT */), _cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePS(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateMOOE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateFE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCO(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateTotal(activity).toFixed(2)), 1 /* TEXT */), _cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */))]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Other Sources Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_64, [_cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "AIP Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Project Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "2"
  }, "Schedule of Implementation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Expected Outputs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Source of Fund"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    colspan: "5"
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Sector"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col",
    rowspan: "2"
  }, "Subsector")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date From"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Date To"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    scope: "col"
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.others, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.aip_code = $event;
      },
      type: "text",
      "class": "form-control form-control-sm"
    }, null, 8 /* PROPS */, _hoisted_66), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.aip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.toggleRow(item.id);
      },
      "class": "btn btn-sm btn-link",
      style: {
        "text-align": "left",
        "padding": "0"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right')
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.project_title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_67)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_start), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_end), 1 /* TEXT */), _cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.source_of_funds = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[64] || (_cache[64] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"dev\">20% Development Fund</option><option value=\"gen_fund\">General Fund</option><option value=\"ldrrmf\">LDRRMF</option><option value=\"other\">Other Sources</option>", 5)])), 8 /* PROPS */, _hoisted_68), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.source_of_funds]])]), _cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.paps.sector = $event;
      },
      "class": "form-select form-select-sm"
    }, _toConsumableArray(_cache[65] || (_cache[65] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">-- Select --</option><option value=\"Economic Services\">Economic Services</option><option value=\"General Public Services Sector\">General Public Services Sector</option><option value=\"Other Services\">Other Services</option><option value=\"Social Services Sector\">Social Services Sector</option>", 5)])), 8 /* PROPS */, _hoisted_69), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.paps.sector]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paps.subsector), 1 /* TEXT */)]), $data.expandedRows[item.id] && item.activity_project && item.activity_project.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.activity_project, function (activity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: "".concat(item.id, "-activity-").concat(activity.id),
        "class": "sub-row"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_70, [_cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Activity:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity ? activity.activity.description : ''), 1 /* TEXT */)]), _cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.expected_output ? activity.expected_output.description : ''), 1 /* TEXT */), _cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePS(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateMOOE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateFE(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCO(activity).toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateTotal(activity).toFixed(2)), 1 /* TEXT */), _cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */))]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58"
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "sidebar-wrapper",
  "class": "sidebar-nav nav navbar-inverse"
};
var _hoisted_2 = {
  "class": "row",
  style: {
    "width": "380px"
  }
};
var _hoisted_3 = {
  "class": "bgc-white"
};
var _hoisted_4 = {
  "class": "modal-header"
};
var _hoisted_5 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": "modal-title",
    id: "exampleModalLiveLabel"
  }, "Filtering", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('closeFilter');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14"
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "pagination"
};
var _hoisted_2 = {
  "class": "page-item"
};
var _hoisted_3 = {
  "class": "page-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n            I intend to recreate a simple pagination [simplePaginate()] for performance purpose\r\n            read https://laravel.com/docs/8.x/pagination#simple-pagination\r\n\r\n            If you think you will not have huge dataset in the future you can use\r\n            the paginate() by uncommenting below and in the actual component.\r\n        "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Component\r\n            :is=\"link.url ? 'Link' : 'span'\"\r\n            v-for=\"link in links\"\r\n            :href=\"link.url\"\r\n            v-html=\"link.label\"\r\n            class=\"p-3 text-decoration-none\"\r\n            :class=\"{'text-muted' : !link.url, 'fw-bold' : link.active}\"\r\n        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_2, [$props.prev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.prev,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.prev
    }])
  }, "Previous", 2 /* CLASS */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [$props.next ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.next,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.next
    }])
  }, "Next", 2 /* CLASS */))])])]);
}

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.badge-circle {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    margin-left: 8px;\n    background-color: #dc3545;\n    color: white;\n    font-weight: bold;\n    border-radius: 50%;\n    font-size: 14px;\n}\n.row-centered {\n    text-align: center;\n}\n.col-centered {\n    display: inline-block;\n    float: none;\n    text-align: left;\n    margin-right: -4px;\n}\n.pos {\n    position: top;\n    top: 240px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#sidebar-wrapper {\r\n        width: auto;\r\n        margin-top: -9px;\r\n        z-index: 1000;\r\n        position: fixed;\r\n        right: 250px;\r\n        height: 100%;\r\n        margin-right: -250px;\r\n        overflow-y: auto;\r\n        transition: all 0.5s ease;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_24d8c116_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=24d8c116&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_24d8c116_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_24d8c116_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue"
/*!********************************************************!*\
  !*** ./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_24d8c116__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=24d8c116 */ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_24d8c116_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=24d8c116&lang=css */ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_24d8c116__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js"
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css"
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_24d8c116_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=24d8c116&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=style&index=0&id=24d8c116&lang=css");


/***/ },

/***/ "./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116"
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116 ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_24d8c116__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_24d8c116__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=24d8c116 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue?vue&type=template&id=24d8c116");


/***/ },

/***/ "./resources/js/Shared/Filter.vue"
/*!****************************************!*\
  !*** ./resources/js/Shared/Filter.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue?vue&type=template&id=09f80c58 */ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");
/* harmony import */ var _Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.vue?vue&type=script&lang=js */ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
/* harmony import */ var _Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css"
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


/***/ },

/***/ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58"
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=template&id=09f80c58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");


/***/ },

/***/ "./resources/js/Shared/Pagination.vue"
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised2_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js"
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14"
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }

}]);