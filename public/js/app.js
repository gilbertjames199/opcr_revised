<<<<<<< HEAD
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Nav */ "./resources/js/Shared/Nav.vue");
/* harmony import */ var _Shared_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Footer */ "./resources/js/Shared/Footer.vue");
/* harmony import */ var _Shared_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Sidebar.vue */ "./resources/js/Shared/Sidebar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Nav: _Shared_Nav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Shared_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Sidebar: _Shared_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    logout: function logout() {
      //this.update_verified();
      this.$inertia.post('/logout');
      location.href = '/';
    },
    update_verified: function update_verified() {
      //alert(auth.user.name);
      axios.patch('/users/update_verified_at');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  watch: {
    '$page.props.flash': {
      handler: function handler(value) {
        var myAlert = document.querySelector('.toast');
        var bsAlert = new window.bootstrap.Toast(myAlert);
        bsAlert.show();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    $(function () {
      $(".sidebar .sidebar-menu li a").on("click", function () {
        var $this = $(this);

        if ($this.parent().hasClass("open")) {
          $this.parent().children(".dropdown-menu").slideUp(200, function () {
            $this.parent().removeClass("open");
          });
        } else {
          $this.parent().parent().children("li.open").children(".dropdown-menu").slideUp(200);
          $this.parent().parent().children("li.open").children("a").removeClass("open");
          $this.parent().parent().children("li.open").removeClass("open");
          $this.parent().children(".dropdown-menu").slideDown(200, function () {
            $this.parent().addClass("open");
          });
        }
      }); // Sidebar Activity Class

      var sidebarLinks = $(".sidebar").find(".sidebar-link");
      sidebarLinks.each(function (index, el) {
        $(el).removeClass("active");
      }).filter(function () {
        var href = $(this).attr("href");
        var pattern = href[0] === "/" ? href.substr(1) : href;
        return pattern === window.location.pathname.substr(1);
      }).addClass("active"); // ٍSidebar Toggle

      $(".sidebar-toggle").on("click", function (e) {
        $("body").toggleClass("is-collapsed");
        e.preventDefault();
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.showing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, " The modal will go here. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", {
  "class": "bdT ta-c p-30 lh-0 fsz-sm c-grey-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Developed by "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://davaodeoro.gov.ph/"
}, "PICTO")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $App Screen Footer ### "), _hoisted_1], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "page-container"
};
var _hoisted_2 = {
  "class": "main-content bgc-grey-100"
};
var _hoisted_3 = {
  id: "mainContent"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Sidebar");

  var _component_Notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Notification");

  var _component_Nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Nav");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Notification), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Nav), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "header navbar"
};
var _hoisted_2 = {
  "class": "header-container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav-left\"><li><a id=\"sidebar-toggle\" class=\"sidebar-toggle\" href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"black\" class=\"bi bi-list\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"></path></svg></a></li><li class=\"search-input\"><input class=\"form-control\" type=\"text\" placeholder=\"Search...\"></li></ul>", 1);

var _hoisted_4 = {
  "class": "nav-right"
};
var _hoisted_5 = {
  "class": "dropdown"
};
var _hoisted_6 = {
  href: "",
  "class": "dropdown-toggle no-after peers fxw-nw ai-c lh-1",
  "data-bs-toggle": "dropdown"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peer mR-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n                                <img\n                                class=\"w-2r bdrs-50p\"\n                                :src=\"$page.props.auth.user.photo\"\n                                alt=\"\"\n                            />\n                            ")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "peer"
};
var _hoisted_9 = {
  "class": "fsz-sm c-grey-900"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "currentColor",
  "class": "bi bi-caret-down-fill mL-5",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "dropdown-menu fsz-sm dropdown-menu-c"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14",
  fill: "currentColor",
  "class": "bi bi-sliders2 mR-10",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
})], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Setting", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14",
  fill: "currentColor",
  "class": "bi bi-person-bounding-box mR-10",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
})], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Change Password", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "separator",
  "class": "divider"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14",
  fill: "currentColor",
  "class": "bi bi-box-arrow-right mR-10",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
})], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Logout", -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_17, _hoisted_18];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.FullName), 1
  /* TEXT */
  )]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/settings",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12, _hoisted_13];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/change-password",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14, _hoisted_15];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.logout();
    }),
    href: "",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, _hoisted_19)])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "position-fixed bottom-0 end-0 p-3",
  style: {
    "z-index": "11"
  }
};
var _hoisted_2 = {
  "class": "toast align-items-center",
  role: "alert",
  "aria-atomic": "true",
  "aria-live": "polite",
  "data-bs-autohide": "true",
  "data-bs-delay": "5000"
};
var _hoisted_3 = {
  key: 0,
  "class": "d-flex text-white bg-success"
};
var _hoisted_4 = {
  "class": "toast-body"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close me-2 m-auto",
  "data-bs-dismiss": "toast",
  "aria-label": "Close"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 1,
  "class": "d-flex text-white bg-danger"
};
var _hoisted_7 = {
  "class": "toast-body"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close me-2 m-auto",
  "data-bs-dismiss": "toast",
  "aria-label": "Close"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.$page.props.flash.message !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.message), 1
  /* TEXT */
  ), _hoisted_5])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.flash.error !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.error), 1
  /* TEXT */
  ), _hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sidebar"
};
var _hoisted_2 = {
  "class": "sidebar-inner"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"sidebar-logo\"><div class=\"peers ai-c fxw-nw\"><div class=\"peer peer-greed\"><a class=\"sidebar-link td-n\" href=\"/\"><div class=\"peers ai-c fxw-nw\"><div class=\"peer\"><div class=\"logo\"><img src=\"/images/logo.png\" alt=\"\" class=\"img-fluid p-5\"></div></div><div class=\"peer peer-greed\"><h5 class=\"lh-1 mB-0 logo-text\" style=\"color:#ffdc78;font-size:x-large !important;\"> Admin </h5></div></div></a></div><div class=\"peer\"><div class=\"mobile-toggle sidebar-toggle\"><a href=\"\" class=\"td-n\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"black\" class=\"bi bi-list\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"></path></svg></a></div></div></div></div>", 1);

var _hoisted_4 = {
  "class": "sidebar-menu scrollable pos-r"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "nav-item dropdown"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" fill=\"currentColor\" class=\"bi bi-border-outer\" viewBox=\"0 0 16 16\"><path d=\"M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z\"></path><path d=\"M0 0v16h16V0H0zm1 1h14v14H1V1z\"></path></svg></span><span class=\"title\">Logframe</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1);

var _hoisted_8 = {
  "class": "dropdown-menu"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Major Final Output", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Programs, Activities, Projects", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "View Logframe", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "nav-item"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon-holder"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-graph-up-arrow\" viewBox=\"0 0 16 16\">\n                                <path fill-rule=\"evenodd\" d=\"M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z\"/>\n                            </svg>"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  "class": "bi bi-border-style",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"
})])], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "OPCR", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "nav-item dropdown"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"currentColor\" class=\"bi bi-book-fill\" viewBox=\"0 0 16 16\"><path d=\"M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"></path></svg></span><span class=\"title\">Libraries</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1);

var _hoisted_19 = {
  "class": "dropdown-menu"
};
var _hoisted_20 = {
  "class": "nav-item dropdown"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"title\">Agenda</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1);

var _hoisted_22 = {
  "class": "dropdown-menu"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Chief Executive Agenda", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Socio-Economic Agenda", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Sustainable Devt Goals", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Executive Legislative Agenda", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Research Agenda", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Societal Goals", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "nav-item dropdown"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"title\">Outcomes</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1);

var _hoisted_31 = {
  "class": "dropdown-menu"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Organizational Outcomes", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Sectoral Outcomes", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "HGDG Checklist", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "GAD Related Issues", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Implementing Team", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Indicators", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "OPCR Standard", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $Sidebar Header ### "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $Sidebar Menu ### "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<li class=\"nav-item mT-30 actived\">\n                    <Link class=\"sidebar-link\" href=\"/\"\n                        ><span class=\"icon-holder\"\n                            ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-house-door\" viewBox=\"0 0 16 16\">\n                              <path d=\"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z\"/>\n                            </svg>\n                        </span\n                        ><span class=\"title\">Dashboard</span></Link\n                    >\n                </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/mfos/direct'
    }]),
    href: "/mfos/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/paps/direct'
    }]),
    href: "/paps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/logframe'
    }]),
    href: "/logframe"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/OPCRStandard'
    }]),
    href: "/OPCRStandard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13, _hoisted_14, _hoisted_15];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Outcomes"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/outcome\" :class=\"{'active': $page.url === '/outcome'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-person-rolodex\" viewBox=\"0 0 16 16\">\n                                <path d=\"M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z\"/>\n                                <path d=\"M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Outcomes</span>\n                    </Link>\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n                <li class=\"nav-item\" v-if=\"$page.props.can.can_access_indicators\">\n                    <Link class=\"sidebar-link\" href=\"/indicators\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bezier2\" viewBox=\"0 0 16 16\">\n                                <path fill-rule=\"evenodd\" d=\"M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Indicators</span>\n                    </Link>\n                </li>\n                "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("GOALS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n                <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/Organization\" :class=\"{'active': $page.url === '/Organization'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-diagram-3\" viewBox=\"0 0 16 16\">\n                                <path fill-rule=\"evenodd\" d=\"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Organizational Goals</span>\n                    </Link>\n                </li>\n\n                <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/Sectoral\" :class=\"{'active': $page.url === '/Sectoral'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-pie-chart-fill\" viewBox=\"0 0 16 16\">\n                                <path d=\"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Sectoral Goals</span>\n                    </Link>\n                </li>\n                "), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Agenda/Goals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Other Libraries"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ChiefAgenda'
    }]),
    href: "/ChiefAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/EconomicAgenda'
    }]),
    href: "/EconomicAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/SDG'
    }]),
    href: "/SDG"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ELA'
    }]),
    href: "/ELA"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ResearchAgenda'
    }]),
    href: "/ResearchAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Societal'
    }]),
    href: "/Societal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_28];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Organization'
    }]),
    href: "/Organization"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_32];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Sectoral'
    }]),
    href: "/Sectoral"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/HGDGChecklist'
    }]),
    href: "/HGDGChecklist"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Issues'
    }]),
    href: "/Issues"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_35];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ImplementingTeam'
    }]),
    href: "/ImplementingTeam"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_36];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/indicators'
    }]),
    href: "/indicators"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_37];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/OPCRpaps/direct'
    }]),
    href: "/OPCRpaps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_38];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\n                            <Link class=\"sidebar-link\" href=\"/indicators\" :class=\"{'active': $page.url === '/indicators'}\">\n                                <span class=\"title\">Divisions</span>\n                            </Link>\n                        </li> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("CEA human na"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/ChiefAgenda\" :class=\"{'active': $page.url === '/ChiefAgenda'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-clipboard-fill\" viewBox=\"0 0 16 16\">\n                                <path fill-rule=\"evenodd\" d=\"M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Chief Executive Agenda</span>\n                    </Link>\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Socio Economic"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/EconomicAgenda\" :class=\"{'active': $page.url === '/EconomicAgenda'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-8-square-fill\" viewBox=\"0 0 16 16\">\n                            <path d=\"M6.623 6.094c0 .738.586 1.254 1.383 1.254s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.644c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z\"/>\n                            <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm8.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title text-wrap\">\n                            <p class=\"text-truncate\"></p>\n                            Socio-Economic Agenda\n                        </span>\n                    </Link>\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SDG"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/SDG\" :class=\"{'active': $page.url === '/SDG'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-globe-asia-australia\" viewBox=\"0 0 16 16\">\n                                <path d=\"m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z\"/>\n                                <path d=\"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Sustainable Development Goals</span>\n                    </Link>\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("ELA"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/ELA\" :class=\"{'active': $page.url === '/ELA'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-diagram-2-fill\" viewBox=\"0 0 16 16\">\n                                <path fill-rule=\"evenodd\" d=\"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z\"/>\n                            </svg>\n                        </span>\n                        <span class=\"title\">Executive Legislative Agenda</span>\n                    </Link>\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Research"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\n                    <Link class=\"sidebar-link\" href=\"/ResearchAgenda\" :class=\"{'active': $page.url === '/ResearchAgenda'}\">\n                        <span></span>\n                        <span class=\"icon-holder\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\n                                <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\n                            </svg>\n                            <svg class=\"svg-icon\" style=\"width: 20; height: 20;vertical-align: middle;fill: currentColor;overflow: hidden;\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 428V288h-128v140L192 736h384z\"  />\n                                <path d=\"M672 608c12.288 0 24.128-1.696 35.616-4.32l51.136 112.512a32.096 32.096 0 0 0 42.368 15.872 32 32 0 0 0 15.872-42.368l-51.2-112.64A159.264 159.264 0 0 0 832 448a160 160 0 1 0-160 160z m0-256c52.928 0 96 43.072 96 96s-43.072 96-96 96-96-43.072-96-96 43.072-96 96-96z\"  /><path d=\"M64 128v768h896V128H64z m832 704H128V192h768v640z\"  />\n                            </svg>\n                        </span>\n                        <span class=\"title\">Research Agenda</span>\n                    </Link>\n                </li> "), _hoisted_39])])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/Notification */ "./resources/js/Shared/Notification.vue");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-search-select/dist/VueSearchSelect.css */ "./node_modules/vue-search-select/dist/VueSearchSelect.css");
/* harmony import */ var _Shared_CardModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/CardModal */ "./resources/js/Shared/CardModal.vue");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-filepond */ "./node_modules/vue-filepond/dist/vue-filepond.js");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_filepond__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! filepond-plugin-file-validate-size */ "./node_modules/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js");
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! filepond-plugin-image-crop */ "./node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js");
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! filepond-plugin-image-transform */ "./node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js");
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





 //Vue Search Select

 //Card modal
//.component('CardModal', CardModal)

 // FileUpload






 //VUe-select
//import Vue from 'vue';



 //YEAR PICKER
//import yearPicker from 'vue-year-picker';
//Bootstrap Vue
//import { BootstrapVue } from 'bootstrap-vue';

/*.use(BootstrapVue)
      .use(IconsPlugin) */
//Vue Multiselect 3


var FilePond = vue_filepond__WEBPACK_IMPORTED_MODULE_8___default()((filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_9___default()), (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_10___default()), (filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_11___default()), (filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_12___default()), (filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_13___default())); //.use(yearPicker)

(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var _page$layout;

      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"];
              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(App, props);
      }
    }).use(plugin).component("multiselect", _vueform_multiselect__WEBPACK_IMPORTED_MODULE_16__["default"]).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head).component('CardModal', _Shared_CardModal__WEBPACK_IMPORTED_MODULE_7__["default"]).component("Notification", _Shared_Notification__WEBPACK_IMPORTED_MODULE_4__["default"]).component("FilePond", FilePond).component("v-select", (vue_select__WEBPACK_IMPORTED_MODULE_15___default())).mixin({
      data: function data() {
        return {
          my_years: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098", "2099", "2100"],

          get jasper_ip() {
            var lo = "192.168.6.23:8080/";
            var gl = "122.54.19.171:8080/";
            var nw = "122.53.120.27:8080/";
            return nw;
          }

        };
      },
      methods: {
        cleanVariable: function cleanVariable(event) {
          this.variable = event.target.value.replace(/[^0-9]/g, "");
        },
        NumbersOnly: function NumbersOnly(evt) {
          var stringValue = evt.target.value.toString();
          var regex = /^\d*(\.\d{1,2})?$/;
          evt = evt ? evt : window.event;
          var charCode = evt.which ? evt.which : evt.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
            evt.preventDefault();
            ;
          } else {
            return true;
          }

          evt.toFixed(2);
        },
        format_number: function format_number(number, num_decimals, include_comma) {
          return number.toLocaleString('en-US', {
            useGrouping: include_comma,
            minimumFractionDigits: num_decimals,
            maximumFractionDigits: num_decimals
          });
        },
        format_number_conv: function format_number_conv(number, num_decimals, include_comma) {
          var numm = parseFloat(number);
          return numm.toLocaleString('en-US', {
            useGrouping: include_comma,
            minimumFractionDigits: num_decimals,
            maximumFractionDigits: num_decimals
          });
        },
        GAD_remark: function GAD_remark(val) {
          var num = parseFloat(val);
          var remarks = "GAD is insivible";

          if (num >= 4 && num < 8) {
            remarks = "Promising GAD prospects (conditional pass)";
          } else if (num >= 8 && num < 15) {
            remarks = "Gender Sensitive";
          } else if (num >= 15 && num < 20) {
            remarks = "Gender-responsive";
          } else if (num >= 20) {
            remarks = "Fully gender-responsive";
          }

          return remarks;
        },
        yearNow: function yearNow() {
          var d = new Date();
          var year = d.getFullYear();
          return year;
        },
        year_values: function year_values() {
          var a = 90;
          var b = 30;
          b = b + vue__WEBPACK_IMPORTED_MODULE_1__.createApp;
          return ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098", "2099", "2100"];
        },
        allCaps: function allCaps(val) {
          return val.toUpperCase();
        },
        formatMonthYear: function formatMonthYear(date_value) {
          var dateParts = date_value.split('-');
          var year = dateParts[0];
          var month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', {
            month: 'long'
          });
          return "".concat(month, " ").concat(year);
        },
        formatMonth: function formatMonth(date_value) {
          var dateParts = date_value.split('-');
          var year = dateParts[0];
          var month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', {
            month: 'long'
          });
          return "".concat(month);
        },
        getImagePath: function getImagePath(filename) {
          return "/images/".concat(filename);
        },
        getSum: function getSum(n1, n2) {
          var n3 = parseFloat(n1) + parseFloat(n2); //alert(n1);

          return this.format_number_conv(n3, 2, true);
        },
        getDifference: function getDifference(n1, n2) {
          var n3 = parseFloat(n1) - parseFloat(n2); //alert(n1+" --- ");

          return this.format_number_conv(n3, 2, true);
        }
      }
    }).mount(el);
  },
  title: function title(_title) {
    return 'PPA: ' + _title;
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__.InertiaProgress.init({
  delay: 250,
  color: '#29d',
  includeCSS: true,
  showSpinner: false
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

try {
  window.bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening 
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Shared/CardModal.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/CardModal.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardModal.vue?vue&type=template&id=09736751 */ "./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751");
/* harmony import */ var _CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/CardModal.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/CardModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Footer.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Footer.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=a77bcb12 */ "./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/Shared/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086 */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Nav.vue":
/*!*************************************!*\
  !*** ./resources/js/Shared/Nav.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=42f6d0f7 */ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Nav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Notification.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/Notification.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=f2d83a72 */ "./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js */ "./resources/js/Shared/Notification.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Notification.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Sidebar.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=f6a89ea0 */ "./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_raao_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/CardModal.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/CardModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Footer.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Footer.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Notification.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Notification.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardModal.vue?vue&type=template&id=09736751 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751");


/***/ }),

/***/ "./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=a77bcb12 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12");


/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=6bf30086 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086");


/***/ }),

/***/ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=42f6d0f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");


/***/ }),

/***/ "./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=template&id=f2d83a72 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72");


/***/ }),

/***/ "./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=f6a89ea0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Accomplishments/Create": [
		"./resources/js/Pages/Accomplishments/Create.vue",
		"resources_js_Pages_Accomplishments_Create_vue"
	],
	"./Accomplishments/Create.vue": [
		"./resources/js/Pages/Accomplishments/Create.vue",
		"resources_js_Pages_Accomplishments_Create_vue"
	],
	"./Accomplishments/Index": [
		"./resources/js/Pages/Accomplishments/Index.vue",
		"resources_js_Pages_Accomplishments_Index_vue"
	],
	"./Accomplishments/Index.vue": [
		"./resources/js/Pages/Accomplishments/Index.vue",
		"resources_js_Pages_Accomplishments_Index_vue"
	],
	"./Accomplishments/ValidationModal": [
		"./resources/js/Pages/Accomplishments/ValidationModal.vue",
		"resources_js_Pages_Accomplishments_ValidationModal_vue"
	],
	"./Accomplishments/ValidationModal.vue": [
		"./resources/js/Pages/Accomplishments/ValidationModal.vue",
		"resources_js_Pages_Accomplishments_ValidationModal_vue"
	],
	"./Accomplishments2/Create": [
		"./resources/js/Pages/Accomplishments2/Create.vue",
		"resources_js_Pages_Accomplishments2_Create_vue"
	],
	"./Accomplishments2/Create.vue": [
		"./resources/js/Pages/Accomplishments2/Create.vue",
		"resources_js_Pages_Accomplishments2_Create_vue"
	],
	"./Accomplishments2/Create2": [
		"./resources/js/Pages/Accomplishments2/Create2.vue",
		"resources_js_Pages_Accomplishments2_Create2_vue"
	],
	"./Accomplishments2/Create2.vue": [
		"./resources/js/Pages/Accomplishments2/Create2.vue",
		"resources_js_Pages_Accomplishments2_Create2_vue"
	],
	"./Accomplishments2/Index": [
		"./resources/js/Pages/Accomplishments2/Index.vue",
		"resources_js_Pages_Accomplishments2_Index_vue"
	],
	"./Accomplishments2/Index.vue": [
		"./resources/js/Pages/Accomplishments2/Index.vue",
		"resources_js_Pages_Accomplishments2_Index_vue"
	],
	"./Accomplishments2/Index2Backup": [
		"./resources/js/Pages/Accomplishments2/Index2Backup.vue",
		"resources_js_Pages_Accomplishments2_Index2Backup_vue"
	],
	"./Accomplishments2/Index2Backup.vue": [
		"./resources/js/Pages/Accomplishments2/Index2Backup.vue",
		"resources_js_Pages_Accomplishments2_Index2Backup_vue"
	],
	"./Accomplishments2/IndexBackUp": [
		"./resources/js/Pages/Accomplishments2/IndexBackUp.vue",
		"resources_js_Pages_Accomplishments2_IndexBackUp_vue"
	],
	"./Accomplishments2/IndexBackUp.vue": [
		"./resources/js/Pages/Accomplishments2/IndexBackUp.vue",
		"resources_js_Pages_Accomplishments2_IndexBackUp_vue"
	],
	"./Accomplishments2/ValidationModal": [
		"./resources/js/Pages/Accomplishments2/ValidationModal.vue",
		"resources_js_Pages_Accomplishments2_ValidationModal_vue"
	],
	"./Accomplishments2/ValidationModal.vue": [
		"./resources/js/Pages/Accomplishments2/ValidationModal.vue",
		"resources_js_Pages_Accomplishments2_ValidationModal_vue"
	],
	"./Activities/Create": [
		"./resources/js/Pages/Activities/Create.vue",
		"resources_js_Pages_Activities_Create_vue"
	],
	"./Activities/Create.vue": [
		"./resources/js/Pages/Activities/Create.vue",
		"resources_js_Pages_Activities_Create_vue"
	],
	"./Activities/Index": [
		"./resources/js/Pages/Activities/Index.vue",
		"resources_js_Pages_Activities_Index_vue"
	],
	"./Activities/Index.vue": [
		"./resources/js/Pages/Activities/Index.vue",
		"resources_js_Pages_Activities_Index_vue"
	],
	"./Authentication/LogIn": [
		"./resources/js/Pages/Authentication/LogIn.vue",
		"resources_js_Pages_Authentication_LogIn_vue"
	],
	"./Authentication/LogIn.vue": [
		"./resources/js/Pages/Authentication/LogIn.vue",
		"resources_js_Pages_Authentication_LogIn_vue"
	],
	"./BudgetRequirement/Create": [
		"./resources/js/Pages/BudgetRequirement/Create.vue",
		"/js/vendor",
		"resources_js_Pages_BudgetRequirement_Create_vue"
	],
	"./BudgetRequirement/Create.vue": [
		"./resources/js/Pages/BudgetRequirement/Create.vue",
		"/js/vendor",
		"resources_js_Pages_BudgetRequirement_Create_vue"
	],
	"./BudgetRequirement/Index": [
		"./resources/js/Pages/BudgetRequirement/Index.vue",
		"resources_js_Pages_BudgetRequirement_Index_vue"
	],
	"./BudgetRequirement/Index.vue": [
		"./resources/js/Pages/BudgetRequirement/Index.vue",
		"resources_js_Pages_BudgetRequirement_Index_vue"
	],
	"./ChiefAgenda/Index": [
		"./resources/js/Pages/ChiefAgenda/Index.vue",
		"resources_js_Pages_ChiefAgenda_Index_vue"
	],
	"./ChiefAgenda/Index.vue": [
		"./resources/js/Pages/ChiefAgenda/Index.vue",
		"resources_js_Pages_ChiefAgenda_Index_vue"
	],
	"./ChiefAgenda/addAgenda": [
		"./resources/js/Pages/ChiefAgenda/addAgenda.vue",
		"resources_js_Pages_ChiefAgenda_addAgenda_vue"
	],
	"./ChiefAgenda/addAgenda.vue": [
		"./resources/js/Pages/ChiefAgenda/addAgenda.vue",
		"resources_js_Pages_ChiefAgenda_addAgenda_vue"
	],
	"./Division/Create": [
		"./resources/js/Pages/Division/Create.vue",
		"resources_js_Pages_Division_Create_vue"
	],
	"./Division/Create.vue": [
		"./resources/js/Pages/Division/Create.vue",
		"resources_js_Pages_Division_Create_vue"
	],
	"./Division/Index": [
		"./resources/js/Pages/Division/Index.vue",
		"resources_js_Pages_Division_Index_vue"
	],
	"./Division/Index.vue": [
		"./resources/js/Pages/Division/Index.vue",
		"resources_js_Pages_Division_Index_vue"
	],
	"./ELA/Create": [
		"./resources/js/Pages/ELA/Create.vue",
		"resources_js_Pages_ELA_Create_vue"
	],
	"./ELA/Create.vue": [
		"./resources/js/Pages/ELA/Create.vue",
		"resources_js_Pages_ELA_Create_vue"
	],
	"./ELA/Index": [
		"./resources/js/Pages/ELA/Index.vue",
		"resources_js_Pages_ELA_Index_vue"
	],
	"./ELA/Index.vue": [
		"./resources/js/Pages/ELA/Index.vue",
		"resources_js_Pages_ELA_Index_vue"
	],
	"./EconomicAgenda/Index": [
		"./resources/js/Pages/EconomicAgenda/Index.vue",
		"resources_js_Pages_EconomicAgenda_Index_vue"
	],
	"./EconomicAgenda/Index.vue": [
		"./resources/js/Pages/EconomicAgenda/Index.vue",
		"resources_js_Pages_EconomicAgenda_Index_vue"
	],
	"./EconomicAgenda/addAgenda": [
		"./resources/js/Pages/EconomicAgenda/addAgenda.vue",
		"resources_js_Pages_EconomicAgenda_addAgenda_vue"
	],
	"./EconomicAgenda/addAgenda.vue": [
		"./resources/js/Pages/EconomicAgenda/addAgenda.vue",
		"resources_js_Pages_EconomicAgenda_addAgenda_vue"
	],
	"./EvaluationMechanismTool/Create": [
		"./resources/js/Pages/EvaluationMechanismTool/Create.vue",
		"resources_js_Pages_EvaluationMechanismTool_Create_vue"
	],
	"./EvaluationMechanismTool/Create.vue": [
		"./resources/js/Pages/EvaluationMechanismTool/Create.vue",
		"resources_js_Pages_EvaluationMechanismTool_Create_vue"
	],
	"./EvaluationMechanismTool/Index": [
		"./resources/js/Pages/EvaluationMechanismTool/Index.vue",
		"resources_js_Pages_EvaluationMechanismTool_Index_vue"
	],
	"./EvaluationMechanismTool/Index.vue": [
		"./resources/js/Pages/EvaluationMechanismTool/Index.vue",
		"resources_js_Pages_EvaluationMechanismTool_Index_vue"
	],
	"./Home": [
		"./resources/js/Pages/Home.vue",
		"resources_js_Pages_Home_vue"
	],
	"./Home.vue": [
		"./resources/js/Pages/Home.vue",
		"resources_js_Pages_Home_vue"
	],
	"./Implementation/Create": [
		"./resources/js/Pages/Implementation/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_vue"
	],
	"./Implementation/Create.vue": [
		"./resources/js/Pages/Implementation/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_vue"
	],
	"./Implementation/Create_A": [
		"./resources/js/Pages/Implementation/Create_A.vue",
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_A_vue"
	],
	"./Implementation/Create_A.vue": [
		"./resources/js/Pages/Implementation/Create_A.vue",
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_A_vue"
	],
	"./Implementation/Index": [
		"./resources/js/Pages/Implementation/Index.vue",
		"resources_js_Pages_Implementation_Index_vue"
	],
	"./Implementation/Index.vue": [
		"./resources/js/Pages/Implementation/Index.vue",
		"resources_js_Pages_Implementation_Index_vue"
	],
	"./ImplementingTeam/Create": [
		"./resources/js/Pages/ImplementingTeam/Create.vue",
		"resources_js_Pages_ImplementingTeam_Create_vue"
	],
	"./ImplementingTeam/Create.vue": [
		"./resources/js/Pages/ImplementingTeam/Create.vue",
		"resources_js_Pages_ImplementingTeam_Create_vue"
	],
	"./ImplementingTeam/Index": [
		"./resources/js/Pages/ImplementingTeam/Index.vue",
		"resources_js_Pages_ImplementingTeam_Index_vue"
	],
	"./ImplementingTeam/Index.vue": [
		"./resources/js/Pages/ImplementingTeam/Index.vue",
		"resources_js_Pages_ImplementingTeam_Index_vue"
	],
	"./ImplementingTeamRevision/Create": [
		"./resources/js/Pages/ImplementingTeamRevision/Create.vue",
		"resources_js_Pages_ImplementingTeamRevision_Create_vue"
	],
	"./ImplementingTeamRevision/Create.vue": [
		"./resources/js/Pages/ImplementingTeamRevision/Create.vue",
		"resources_js_Pages_ImplementingTeamRevision_Create_vue"
	],
	"./ImplementingTeamRevision/Index": [
		"./resources/js/Pages/ImplementingTeamRevision/Index.vue",
		"resources_js_Pages_ImplementingTeamRevision_Index_vue"
	],
	"./ImplementingTeamRevision/Index.vue": [
		"./resources/js/Pages/ImplementingTeamRevision/Index.vue",
		"resources_js_Pages_ImplementingTeamRevision_Index_vue"
	],
	"./Indicators/Create": [
		"./resources/js/Pages/Indicators/Create.vue",
		"resources_js_Pages_Indicators_Create_vue"
	],
	"./Indicators/Create.vue": [
		"./resources/js/Pages/Indicators/Create.vue",
		"resources_js_Pages_Indicators_Create_vue"
	],
	"./Indicators/Index": [
		"./resources/js/Pages/Indicators/Index.vue",
		"resources_js_Pages_Indicators_Index_vue"
	],
	"./Indicators/Index.vue": [
		"./resources/js/Pages/Indicators/Index.vue",
		"resources_js_Pages_Indicators_Index_vue"
	],
	"./InterOutcome/Create": [
		"./resources/js/Pages/InterOutcome/Create.vue",
		"resources_js_Pages_InterOutcome_Create_vue"
	],
	"./InterOutcome/Create.vue": [
		"./resources/js/Pages/InterOutcome/Create.vue",
		"resources_js_Pages_InterOutcome_Create_vue"
	],
	"./InterOutcome/Index": [
		"./resources/js/Pages/InterOutcome/Index.vue",
		"resources_js_Pages_InterOutcome_Index_vue"
	],
	"./InterOutcome/Index.vue": [
		"./resources/js/Pages/InterOutcome/Index.vue",
		"resources_js_Pages_InterOutcome_Index_vue"
	],
	"./Issues/Create": [
		"./resources/js/Pages/Issues/Create.vue",
		"resources_js_Pages_Issues_Create_vue"
	],
	"./Issues/Create.vue": [
		"./resources/js/Pages/Issues/Create.vue",
		"resources_js_Pages_Issues_Create_vue"
	],
	"./Issues/Index": [
		"./resources/js/Pages/Issues/Index.vue",
		"resources_js_Pages_Issues_Index_vue"
	],
	"./Issues/Index.vue": [
		"./resources/js/Pages/Issues/Index.vue",
		"resources_js_Pages_Issues_Index_vue"
	],
	"./LogFrame/Index": [
		"./resources/js/Pages/LogFrame/Index.vue",
		"resources_js_Pages_LogFrame_Index_vue"
	],
	"./LogFrame/Index.vue": [
		"./resources/js/Pages/LogFrame/Index.vue",
		"resources_js_Pages_LogFrame_Index_vue"
	],
	"./LogFrame/logframe": [
		"./resources/js/Pages/LogFrame/logframe.vue",
		"resources_js_Pages_LogFrame_logframe_vue"
	],
	"./LogFrame/logframe.vue": [
		"./resources/js/Pages/LogFrame/logframe.vue",
		"resources_js_Pages_LogFrame_logframe_vue"
	],
	"./MFOs/Create": [
		"./resources/js/Pages/MFOs/Create.vue",
		"resources_js_Pages_MFOs_Create_vue"
	],
	"./MFOs/Create.vue": [
		"./resources/js/Pages/MFOs/Create.vue",
		"resources_js_Pages_MFOs_Create_vue"
	],
	"./MFOs/Direct": [
		"./resources/js/Pages/MFOs/Direct.vue",
		"resources_js_Pages_MFOs_Direct_vue"
	],
	"./MFOs/Direct.vue": [
		"./resources/js/Pages/MFOs/Direct.vue",
		"resources_js_Pages_MFOs_Direct_vue"
	],
	"./MFOs/Index": [
		"./resources/js/Pages/MFOs/Index.vue",
		"resources_js_Pages_MFOs_Index_vue"
	],
	"./MFOs/Index.vue": [
		"./resources/js/Pages/MFOs/Index.vue",
		"resources_js_Pages_MFOs_Index_vue"
	],
	"./Monitoring/Create": [
		"./resources/js/Pages/Monitoring/Create.vue",
		"resources_js_Pages_Monitoring_Create_vue"
	],
	"./Monitoring/Create.vue": [
		"./resources/js/Pages/Monitoring/Create.vue",
		"resources_js_Pages_Monitoring_Create_vue"
	],
	"./Monitoring/Index": [
		"./resources/js/Pages/Monitoring/Index.vue",
		"resources_js_Pages_Monitoring_Index_vue"
	],
	"./Monitoring/Index.vue": [
		"./resources/js/Pages/Monitoring/Index.vue",
		"resources_js_Pages_Monitoring_Index_vue"
	],
	"./OPCR/Accomplishment/Create": [
		"./resources/js/Pages/OPCR/Accomplishment/Create.vue",
		"resources_js_Pages_OPCR_Accomplishment_Create_vue"
	],
	"./OPCR/Accomplishment/Create.vue": [
		"./resources/js/Pages/OPCR/Accomplishment/Create.vue",
		"resources_js_Pages_OPCR_Accomplishment_Create_vue"
	],
	"./OPCR/Accomplishment/Index": [
		"./resources/js/Pages/OPCR/Accomplishment/Index.vue",
		"resources_js_Pages_OPCR_Accomplishment_Index_vue"
	],
	"./OPCR/Accomplishment/Index.vue": [
		"./resources/js/Pages/OPCR/Accomplishment/Index.vue",
		"resources_js_Pages_OPCR_Accomplishment_Index_vue"
	],
	"./OPCR/Form/Create": [
		"./resources/js/Pages/OPCR/Form/Create.vue",
		"resources_js_Pages_OPCR_Form_Create_vue"
	],
	"./OPCR/Form/Create.vue": [
		"./resources/js/Pages/OPCR/Form/Create.vue",
		"resources_js_Pages_OPCR_Form_Create_vue"
	],
	"./OPCR/Form/Index": [
		"./resources/js/Pages/OPCR/Form/Index.vue",
		"resources_js_Pages_OPCR_Form_Index_vue"
	],
	"./OPCR/Form/Index.vue": [
		"./resources/js/Pages/OPCR/Form/Index.vue",
		"resources_js_Pages_OPCR_Form_Index_vue"
	],
	"./OPCR/Form/Print": [
		"./resources/js/Pages/OPCR/Form/Print.vue",
		"resources_js_Pages_OPCR_Form_Print_vue"
	],
	"./OPCR/Form/Print.vue": [
		"./resources/js/Pages/OPCR/Form/Print.vue",
		"resources_js_Pages_OPCR_Form_Print_vue"
	],
	"./OPCR/Index": [
		"./resources/js/Pages/OPCR/Index.vue",
		"resources_js_Pages_OPCR_Index_vue"
	],
	"./OPCR/Index.vue": [
		"./resources/js/Pages/OPCR/Index.vue",
		"resources_js_Pages_OPCR_Index_vue"
	],
	"./OPCR/List/Create": [
		"./resources/js/Pages/OPCR/List/Create.vue",
		"resources_js_Pages_OPCR_List_Create_vue"
	],
	"./OPCR/List/Create.vue": [
		"./resources/js/Pages/OPCR/List/Create.vue",
		"resources_js_Pages_OPCR_List_Create_vue"
	],
	"./OPCR/List/Index": [
		"./resources/js/Pages/OPCR/List/Index.vue",
		"resources_js_Pages_OPCR_List_Index_vue"
	],
	"./OPCR/List/Index.vue": [
		"./resources/js/Pages/OPCR/List/Index.vue",
		"resources_js_Pages_OPCR_List_Index_vue"
	],
	"./OPCR/OPCR": [
		"./resources/js/Pages/OPCR/OPCR.vue",
		"resources_js_Pages_OPCR_OPCR_vue"
	],
	"./OPCR/OPCR.vue": [
		"./resources/js/Pages/OPCR/OPCR.vue",
		"resources_js_Pages_OPCR_OPCR_vue"
	],
	"./OPCR/Target/Create": [
		"./resources/js/Pages/OPCR/Target/Create.vue",
		"resources_js_Pages_OPCR_Target_Create_vue"
	],
	"./OPCR/Target/Create.vue": [
		"./resources/js/Pages/OPCR/Target/Create.vue",
		"resources_js_Pages_OPCR_Target_Create_vue"
	],
	"./OPCR/Target/Index": [
		"./resources/js/Pages/OPCR/Target/Index.vue",
		"resources_js_Pages_OPCR_Target_Index_vue"
	],
	"./OPCR/Target/Index.vue": [
		"./resources/js/Pages/OPCR/Target/Index.vue",
		"resources_js_Pages_OPCR_Target_Index_vue"
	],
	"./OPCRPaps/Direct": [
		"./resources/js/Pages/OPCRPaps/Direct.vue",
		"resources_js_Pages_OPCRPaps_Direct_vue"
	],
	"./OPCRPaps/Direct.vue": [
		"./resources/js/Pages/OPCRPaps/Direct.vue",
		"resources_js_Pages_OPCRPaps_Direct_vue"
	],
	"./OfficeAccountable/Create": [
		"./resources/js/Pages/OfficeAccountable/Create.vue",
		"resources_js_Pages_OfficeAccountable_Create_vue"
	],
	"./OfficeAccountable/Create.vue": [
		"./resources/js/Pages/OfficeAccountable/Create.vue",
		"resources_js_Pages_OfficeAccountable_Create_vue"
	],
	"./OfficeAccountable/Index": [
		"./resources/js/Pages/OfficeAccountable/Index.vue",
		"resources_js_Pages_OfficeAccountable_Index_vue"
	],
	"./OfficeAccountable/Index.vue": [
		"./resources/js/Pages/OfficeAccountable/Index.vue",
		"resources_js_Pages_OfficeAccountable_Index_vue"
	],
	"./Organizational/Index": [
		"./resources/js/Pages/Organizational/Index.vue",
		"resources_js_Pages_Organizational_Index_vue"
	],
	"./Organizational/Index.vue": [
		"./resources/js/Pages/Organizational/Index.vue",
		"resources_js_Pages_Organizational_Index_vue"
	],
	"./Organizational/addOrganizational": [
		"./resources/js/Pages/Organizational/addOrganizational.vue",
		"resources_js_Pages_Organizational_addOrganizational_vue"
	],
	"./Organizational/addOrganizational.vue": [
		"./resources/js/Pages/Organizational/addOrganizational.vue",
		"resources_js_Pages_Organizational_addOrganizational_vue"
	],
	"./Outcome/Create": [
		"./resources/js/Pages/Outcome/Create.vue",
		"resources_js_Pages_Outcome_Create_vue"
	],
	"./Outcome/Create.vue": [
		"./resources/js/Pages/Outcome/Create.vue",
		"resources_js_Pages_Outcome_Create_vue"
	],
	"./Outcome/Index": [
		"./resources/js/Pages/Outcome/Index.vue",
		"resources_js_Pages_Outcome_Index_vue"
	],
	"./Outcome/Index.vue": [
		"./resources/js/Pages/Outcome/Index.vue",
		"resources_js_Pages_Outcome_Index_vue"
	],
	"./Outputs/Create": [
		"./resources/js/Pages/Outputs/Create.vue",
		"resources_js_Pages_Outputs_Create_vue"
	],
	"./Outputs/Create.vue": [
		"./resources/js/Pages/Outputs/Create.vue",
		"resources_js_Pages_Outputs_Create_vue"
	],
	"./Outputs/Index": [
		"./resources/js/Pages/Outputs/Index.vue",
		"resources_js_Pages_Outputs_Index_vue"
	],
	"./Outputs/Index.vue": [
		"./resources/js/Pages/Outputs/Index.vue",
		"resources_js_Pages_Outputs_Index_vue"
	],
	"./PAPS/Create": [
		"./resources/js/Pages/PAPS/Create.vue",
		"resources_js_Pages_PAPS_Create_vue"
	],
	"./PAPS/Create.vue": [
		"./resources/js/Pages/PAPS/Create.vue",
		"resources_js_Pages_PAPS_Create_vue"
	],
	"./PAPS/Direct": [
		"./resources/js/Pages/PAPS/Direct.vue",
		"resources_js_Pages_PAPS_Direct_vue"
	],
	"./PAPS/Direct.vue": [
		"./resources/js/Pages/PAPS/Direct.vue",
		"resources_js_Pages_PAPS_Direct_vue"
	],
	"./PAPS/Index": [
		"./resources/js/Pages/PAPS/Index.vue",
		"resources_js_Pages_PAPS_Index_vue"
	],
	"./PAPS/Index.vue": [
		"./resources/js/Pages/PAPS/Index.vue",
		"resources_js_Pages_PAPS_Index_vue"
	],
	"./Performance/Create": [
		"./resources/js/Pages/Performance/Create.vue",
		"resources_js_Pages_Performance_Create_vue"
	],
	"./Performance/Create.vue": [
		"./resources/js/Pages/Performance/Create.vue",
		"resources_js_Pages_Performance_Create_vue"
	],
	"./Performance/Index": [
		"./resources/js/Pages/Performance/Index.vue",
		"resources_js_Pages_Performance_Index_vue"
	],
	"./Performance/Index.vue": [
		"./resources/js/Pages/Performance/Index.vue",
		"resources_js_Pages_Performance_Index_vue"
	],
	"./Places": [
		"./resources/js/Pages/Places.vue",
		"resources_js_Pages_Places_vue"
	],
	"./Places.vue": [
		"./resources/js/Pages/Places.vue",
		"resources_js_Pages_Places_vue"
	],
	"./Poles/Index": [
		"./resources/js/Pages/Poles/Index.vue",
		"resources_js_Pages_Poles_Index_vue"
	],
	"./Poles/Index.vue": [
		"./resources/js/Pages/Poles/Index.vue",
		"resources_js_Pages_Poles_Index_vue"
	],
	"./Posts/Index": [
		"./resources/js/Pages/Posts/Index.vue",
		"resources_js_Pages_Posts_Index_vue"
	],
	"./Posts/Index.vue": [
		"./resources/js/Pages/Posts/Index.vue",
		"resources_js_Pages_Posts_Index_vue"
	],
	"./ProjectProfile/Create": [
		"./resources/js/Pages/ProjectProfile/Create.vue",
		"resources_js_Pages_ProjectProfile_Create_vue"
	],
	"./ProjectProfile/Create.vue": [
		"./resources/js/Pages/ProjectProfile/Create.vue",
		"resources_js_Pages_ProjectProfile_Create_vue"
	],
	"./ProjectProfile/Index": [
		"./resources/js/Pages/ProjectProfile/Index.vue",
		"resources_js_Pages_ProjectProfile_Index_vue"
	],
	"./ProjectProfile/Index.vue": [
		"./resources/js/Pages/ProjectProfile/Index.vue",
		"resources_js_Pages_ProjectProfile_Index_vue"
	],
	"./Quality/Create": [
		"./resources/js/Pages/Quality/Create.vue",
		"resources_js_Pages_Quality_Create_vue"
	],
	"./Quality/Create.vue": [
		"./resources/js/Pages/Quality/Create.vue",
		"resources_js_Pages_Quality_Create_vue"
	],
	"./Quality/Index": [
		"./resources/js/Pages/Quality/Index.vue",
		"resources_js_Pages_Quality_Index_vue"
	],
	"./Quality/Index.vue": [
		"./resources/js/Pages/Quality/Index.vue",
		"resources_js_Pages_Quality_Index_vue"
	],
	"./QualityRemarks/Create": [
		"./resources/js/Pages/QualityRemarks/Create.vue",
		"resources_js_Pages_QualityRemarks_Create_vue"
	],
	"./QualityRemarks/Create.vue": [
		"./resources/js/Pages/QualityRemarks/Create.vue",
		"resources_js_Pages_QualityRemarks_Create_vue"
	],
	"./QualityRemarks/Index": [
		"./resources/js/Pages/QualityRemarks/Index.vue",
		"resources_js_Pages_QualityRemarks_Index_vue"
	],
	"./QualityRemarks/Index.vue": [
		"./resources/js/Pages/QualityRemarks/Index.vue",
		"resources_js_Pages_QualityRemarks_Index_vue"
	],
	"./RAAO/Index": [
		"./resources/js/Pages/RAAO/Index.vue",
		"resources_js_Pages_RAAO_Index_vue"
	],
	"./RAAO/Index.vue": [
		"./resources/js/Pages/RAAO/Index.vue",
		"resources_js_Pages_RAAO_Index_vue"
	],
	"./Rating/Create": [
		"./resources/js/Pages/Rating/Create.vue",
		"resources_js_Pages_Rating_Create_vue"
	],
	"./Rating/Create.vue": [
		"./resources/js/Pages/Rating/Create.vue",
		"resources_js_Pages_Rating_Create_vue"
	],
	"./Rating/Index": [
		"./resources/js/Pages/Rating/Index.vue",
		"resources_js_Pages_Rating_Index_vue"
	],
	"./Rating/Index.vue": [
		"./resources/js/Pages/Rating/Index.vue",
		"resources_js_Pages_Rating_Index_vue"
	],
	"./RatingRemarks/Create": [
		"./resources/js/Pages/RatingRemarks/Create.vue",
		"resources_js_Pages_RatingRemarks_Create_vue"
	],
	"./RatingRemarks/Create.vue": [
		"./resources/js/Pages/RatingRemarks/Create.vue",
		"resources_js_Pages_RatingRemarks_Create_vue"
	],
	"./RatingRemarks/Index": [
		"./resources/js/Pages/RatingRemarks/Index.vue",
		"resources_js_Pages_RatingRemarks_Index_vue"
	],
	"./RatingRemarks/Index.vue": [
		"./resources/js/Pages/RatingRemarks/Index.vue",
		"resources_js_Pages_RatingRemarks_Index_vue"
	],
	"./ResearchAgenda/Create": [
		"./resources/js/Pages/ResearchAgenda/Create.vue",
		"resources_js_Pages_ResearchAgenda_Create_vue"
	],
	"./ResearchAgenda/Create.vue": [
		"./resources/js/Pages/ResearchAgenda/Create.vue",
		"resources_js_Pages_ResearchAgenda_Create_vue"
	],
	"./ResearchAgenda/Index": [
		"./resources/js/Pages/ResearchAgenda/Index.vue",
		"resources_js_Pages_ResearchAgenda_Index_vue"
	],
	"./ResearchAgenda/Index.vue": [
		"./resources/js/Pages/ResearchAgenda/Index.vue",
		"resources_js_Pages_ResearchAgenda_Index_vue"
	],
	"./RevisionPlans/Create": [
		"./resources/js/Pages/RevisionPlans/Create.vue",
		"resources_js_Pages_RevisionPlans_Create_vue"
	],
	"./RevisionPlans/Create.vue": [
		"./resources/js/Pages/RevisionPlans/Create.vue",
		"resources_js_Pages_RevisionPlans_Create_vue"
	],
	"./RevisionPlans/GAS/Create": [
		"./resources/js/Pages/RevisionPlans/GAS/Create.vue",
		"resources_js_Pages_RevisionPlans_GAS_Create_vue"
	],
	"./RevisionPlans/GAS/Create.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/Create.vue",
		"resources_js_Pages_RevisionPlans_GAS_Create_vue"
	],
	"./RevisionPlans/GAS/Index": [
		"./resources/js/Pages/RevisionPlans/GAS/Index.vue",
		"resources_js_Pages_RevisionPlans_GAS_Index_vue"
	],
	"./RevisionPlans/GAS/Index.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/Index.vue",
		"resources_js_Pages_RevisionPlans_GAS_Index_vue"
	],
	"./RevisionPlans/GAS/View": [
		"./resources/js/Pages/RevisionPlans/GAS/View.vue",
		"resources_js_Pages_RevisionPlans_GAS_View_vue"
	],
	"./RevisionPlans/GAS/View.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/View.vue",
		"resources_js_Pages_RevisionPlans_GAS_View_vue"
	],
	"./RevisionPlans/Index": [
		"./resources/js/Pages/RevisionPlans/Index.vue",
		"resources_js_Pages_RevisionPlans_Index_vue"
	],
	"./RevisionPlans/Index.vue": [
		"./resources/js/Pages/RevisionPlans/Index.vue",
		"resources_js_Pages_RevisionPlans_Index_vue"
	],
	"./RevisionPlans/MFO/Create": [
		"./resources/js/Pages/RevisionPlans/MFO/Create.vue",
		"resources_js_Pages_RevisionPlans_MFO_Create_vue"
	],
	"./RevisionPlans/MFO/Create.vue": [
		"./resources/js/Pages/RevisionPlans/MFO/Create.vue",
		"resources_js_Pages_RevisionPlans_MFO_Create_vue"
	],
	"./RevisionPlans/MFO/Index": [
		"./resources/js/Pages/RevisionPlans/MFO/Index.vue",
		"resources_js_Pages_RevisionPlans_MFO_Index_vue"
	],
	"./RevisionPlans/MFO/Index.vue": [
		"./resources/js/Pages/RevisionPlans/MFO/Index.vue",
		"resources_js_Pages_RevisionPlans_MFO_Index_vue"
	],
	"./RevisionPlans/View": [
		"./resources/js/Pages/RevisionPlans/View.vue",
		"resources_js_Pages_RevisionPlans_View_vue"
	],
	"./RevisionPlans/View.vue": [
		"./resources/js/Pages/RevisionPlans/View.vue",
		"resources_js_Pages_RevisionPlans_View_vue"
	],
	"./RiskManagement/Create": [
		"./resources/js/Pages/RiskManagement/Create.vue",
		"resources_js_Pages_RiskManagement_Create_vue"
	],
	"./RiskManagement/Create.vue": [
		"./resources/js/Pages/RiskManagement/Create.vue",
		"resources_js_Pages_RiskManagement_Create_vue"
	],
	"./RiskManagement/Index": [
		"./resources/js/Pages/RiskManagement/Index.vue",
		"resources_js_Pages_RiskManagement_Index_vue"
	],
	"./RiskManagement/Index.vue": [
		"./resources/js/Pages/RiskManagement/Index.vue",
		"resources_js_Pages_RiskManagement_Index_vue"
	],
	"./SDG/Create": [
		"./resources/js/Pages/SDG/Create.vue",
		"resources_js_Pages_SDG_Create_vue"
	],
	"./SDG/Create.vue": [
		"./resources/js/Pages/SDG/Create.vue",
		"resources_js_Pages_SDG_Create_vue"
	],
	"./SDG/Index": [
		"./resources/js/Pages/SDG/Index.vue",
		"resources_js_Pages_SDG_Index_vue"
	],
	"./SDG/Index.vue": [
		"./resources/js/Pages/SDG/Index.vue",
		"resources_js_Pages_SDG_Index_vue"
	],
	"./Sectoral/Index": [
		"./resources/js/Pages/Sectoral/Index.vue",
		"resources_js_Pages_Sectoral_Index_vue"
	],
	"./Sectoral/Index.vue": [
		"./resources/js/Pages/Sectoral/Index.vue",
		"resources_js_Pages_Sectoral_Index_vue"
	],
	"./Sectoral/addSector": [
		"./resources/js/Pages/Sectoral/addSector.vue",
		"resources_js_Pages_Sectoral_addSector_vue"
	],
	"./Sectoral/addSector.vue": [
		"./resources/js/Pages/Sectoral/addSector.vue",
		"resources_js_Pages_Sectoral_addSector_vue"
	],
	"./Signatories/Create": [
		"./resources/js/Pages/Signatories/Create.vue",
		"resources_js_Pages_Signatories_Create_vue"
	],
	"./Signatories/Create.vue": [
		"./resources/js/Pages/Signatories/Create.vue",
		"resources_js_Pages_Signatories_Create_vue"
	],
	"./Signatories/Index": [
		"./resources/js/Pages/Signatories/Index.vue",
		"resources_js_Pages_Signatories_Index_vue"
	],
	"./Signatories/Index.vue": [
		"./resources/js/Pages/Signatories/Index.vue",
		"resources_js_Pages_Signatories_Index_vue"
	],
	"./SocietalGoals/Index": [
		"./resources/js/Pages/SocietalGoals/Index.vue",
		"resources_js_Pages_SocietalGoals_Index_vue"
	],
	"./SocietalGoals/Index.vue": [
		"./resources/js/Pages/SocietalGoals/Index.vue",
		"resources_js_Pages_SocietalGoals_Index_vue"
	],
	"./SocietalGoals/addSocietalGoals": [
		"./resources/js/Pages/SocietalGoals/addSocietalGoals.vue",
		"resources_js_Pages_SocietalGoals_addSocietalGoals_vue"
	],
	"./SocietalGoals/addSocietalGoals.vue": [
		"./resources/js/Pages/SocietalGoals/addSocietalGoals.vue",
		"resources_js_Pages_SocietalGoals_addSocietalGoals_vue"
	],
	"./Strategies/Create": [
		"./resources/js/Pages/Strategies/Create.vue",
		"resources_js_Pages_Strategies_Create_vue"
	],
	"./Strategies/Create.vue": [
		"./resources/js/Pages/Strategies/Create.vue",
		"resources_js_Pages_Strategies_Create_vue"
	],
	"./Strategies/Index": [
		"./resources/js/Pages/Strategies/Index.vue",
		"resources_js_Pages_Strategies_Index_vue"
	],
	"./Strategies/Index.vue": [
		"./resources/js/Pages/Strategies/Index.vue",
		"resources_js_Pages_Strategies_Index_vue"
	],
	"./SuccessIndicator/Create": [
		"./resources/js/Pages/SuccessIndicator/Create.vue",
		"resources_js_Pages_SuccessIndicator_Create_vue"
	],
	"./SuccessIndicator/Create.vue": [
		"./resources/js/Pages/SuccessIndicator/Create.vue",
		"resources_js_Pages_SuccessIndicator_Create_vue"
	],
	"./SuccessIndicator/Index": [
		"./resources/js/Pages/SuccessIndicator/Index.vue",
		"resources_js_Pages_SuccessIndicator_Index_vue"
	],
	"./SuccessIndicator/Index.vue": [
		"./resources/js/Pages/SuccessIndicator/Index.vue",
		"resources_js_Pages_SuccessIndicator_Index_vue"
	],
	"./Targets/Create": [
		"./resources/js/Pages/Targets/Create.vue",
		"resources_js_Pages_Targets_Create_vue"
	],
	"./Targets/Create.vue": [
		"./resources/js/Pages/Targets/Create.vue",
		"resources_js_Pages_Targets_Create_vue"
	],
	"./Targets/Direct": [
		"./resources/js/Pages/Targets/Direct.vue",
		"resources_js_Pages_Targets_Direct_vue"
	],
	"./Targets/Direct.vue": [
		"./resources/js/Pages/Targets/Direct.vue",
		"resources_js_Pages_Targets_Direct_vue"
	],
	"./Targets/Implementation/Create": [
		"./resources/js/Pages/Targets/Implementation/Create.vue",
		"resources_js_Pages_Targets_Implementation_Create_vue"
	],
	"./Targets/Implementation/Create.vue": [
		"./resources/js/Pages/Targets/Implementation/Create.vue",
		"resources_js_Pages_Targets_Implementation_Create_vue"
	],
	"./Targets/Implementation/Index": [
		"./resources/js/Pages/Targets/Implementation/Index.vue",
		"resources_js_Pages_Targets_Implementation_Index_vue"
	],
	"./Targets/Implementation/Index.vue": [
		"./resources/js/Pages/Targets/Implementation/Index.vue",
		"resources_js_Pages_Targets_Implementation_Index_vue"
	],
	"./Targets/Index": [
		"./resources/js/Pages/Targets/Index.vue",
		"resources_js_Pages_Targets_Index_vue"
	],
	"./Targets/Index.vue": [
		"./resources/js/Pages/Targets/Index.vue",
		"resources_js_Pages_Targets_Index_vue"
	],
	"./Time_Sheets/Index": [
		"./resources/js/Pages/Time_Sheets/Index.vue",
		"resources_js_Pages_Time_Sheets_Index_vue"
	],
	"./Time_Sheets/Index.vue": [
		"./resources/js/Pages/Time_Sheets/Index.vue",
		"resources_js_Pages_Time_Sheets_Index_vue"
	],
	"./Time_Sheets/New": [
		"./resources/js/Pages/Time_Sheets/New.vue",
		"resources_js_Pages_Time_Sheets_New_vue"
	],
	"./Time_Sheets/New.vue": [
		"./resources/js/Pages/Time_Sheets/New.vue",
		"resources_js_Pages_Time_Sheets_New_vue"
	],
	"./Timeliness/Create": [
		"./resources/js/Pages/Timeliness/Create.vue",
		"resources_js_Pages_Timeliness_Create_vue"
	],
	"./Timeliness/Create.vue": [
		"./resources/js/Pages/Timeliness/Create.vue",
		"resources_js_Pages_Timeliness_Create_vue"
	],
	"./Timeliness/Index": [
		"./resources/js/Pages/Timeliness/Index.vue",
		"resources_js_Pages_Timeliness_Index_vue"
	],
	"./Timeliness/Index.vue": [
		"./resources/js/Pages/Timeliness/Index.vue",
		"resources_js_Pages_Timeliness_Index_vue"
	],
	"./TimelinessRemarks/Create": [
		"./resources/js/Pages/TimelinessRemarks/Create.vue",
		"resources_js_Pages_TimelinessRemarks_Create_vue"
	],
	"./TimelinessRemarks/Create.vue": [
		"./resources/js/Pages/TimelinessRemarks/Create.vue",
		"resources_js_Pages_TimelinessRemarks_Create_vue"
	],
	"./TimelinessRemarks/Index": [
		"./resources/js/Pages/TimelinessRemarks/Index.vue",
		"resources_js_Pages_TimelinessRemarks_Index_vue"
	],
	"./TimelinessRemarks/Index.vue": [
		"./resources/js/Pages/TimelinessRemarks/Index.vue",
		"resources_js_Pages_TimelinessRemarks_Index_vue"
	],
	"./UserOffice/Set": [
		"./resources/js/Pages/UserOffice/Set.vue",
		"resources_js_Pages_UserOffice_Set_vue"
	],
	"./UserOffice/Set.vue": [
		"./resources/js/Pages/UserOffice/Set.vue",
		"resources_js_Pages_UserOffice_Set_vue"
	],
	"./Users/BootstrapModalNoJquery": [
		"./resources/js/Pages/Users/BootstrapModalNoJquery.vue",
		"resources_js_Pages_Users_BootstrapModalNoJquery_vue"
	],
	"./Users/BootstrapModalNoJquery.vue": [
		"./resources/js/Pages/Users/BootstrapModalNoJquery.vue",
		"resources_js_Pages_Users_BootstrapModalNoJquery_vue"
	],
	"./Users/ChangePassword": [
		"./resources/js/Pages/Users/ChangePassword.vue",
		"resources_js_Pages_Users_ChangePassword_vue"
	],
	"./Users/ChangePassword.vue": [
		"./resources/js/Pages/Users/ChangePassword.vue",
		"resources_js_Pages_Users_ChangePassword_vue"
	],
	"./Users/Create": [
		"./resources/js/Pages/Users/Create.vue",
		"resources_js_Pages_Users_Create_vue"
	],
	"./Users/Create.vue": [
		"./resources/js/Pages/Users/Create.vue",
		"resources_js_Pages_Users_Create_vue"
	],
	"./Users/Index": [
		"./resources/js/Pages/Users/Index.vue",
		"resources_js_Pages_Users_Index_vue"
	],
	"./Users/Index.vue": [
		"./resources/js/Pages/Users/Index.vue",
		"resources_js_Pages_Users_Index_vue"
	],
	"./Users/PermissionsModal": [
		"./resources/js/Pages/Users/PermissionsModal.vue",
		"resources_js_Pages_Users_PermissionsModal_vue"
	],
	"./Users/PermissionsModal.vue": [
		"./resources/js/Pages/Users/PermissionsModal.vue",
		"resources_js_Pages_Users_PermissionsModal_vue"
	],
	"./Users/Settings": [
		"./resources/js/Pages/Users/Settings.vue",
		"resources_js_Pages_Users_Settings_vue"
	],
	"./Users/Settings.vue": [
		"./resources/js/Pages/Users/Settings.vue",
		"resources_js_Pages_Users_Settings_vue"
	],
	"./hgdg_checklist/Create": [
		"./resources/js/Pages/hgdg_checklist/Create.vue",
		"resources_js_Pages_hgdg_checklist_Create_vue"
	],
	"./hgdg_checklist/Create.vue": [
		"./resources/js/Pages/hgdg_checklist/Create.vue",
		"resources_js_Pages_hgdg_checklist_Create_vue"
	],
	"./hgdg_checklist/Index": [
		"./resources/js/Pages/hgdg_checklist/Index.vue",
		"resources_js_Pages_hgdg_checklist_Index_vue"
	],
	"./hgdg_checklist/Index.vue": [
		"./resources/js/Pages/hgdg_checklist/Index.vue",
		"resources_js_Pages_hgdg_checklist_Index_vue"
	],
	"./hgdg_question/Create": [
		"./resources/js/Pages/hgdg_question/Create.vue",
		"resources_js_Pages_hgdg_question_Create_vue"
	],
	"./hgdg_question/Create.vue": [
		"./resources/js/Pages/hgdg_question/Create.vue",
		"resources_js_Pages_hgdg_question_Create_vue"
	],
	"./hgdg_question/Index": [
		"./resources/js/Pages/hgdg_question/Index.vue",
		"resources_js_Pages_hgdg_question_Index_vue"
	],
	"./hgdg_question/Index.vue": [
		"./resources/js/Pages/hgdg_question/Index.vue",
		"resources_js_Pages_hgdg_question_Index_vue"
	],
	"./hgdg_score/Index": [
		"./resources/js/Pages/hgdg_score/Index.vue",
		"resources_js_Pages_hgdg_score_Index_vue"
	],
	"./hgdg_score/Index.vue": [
		"./resources/js/Pages/hgdg_score/Index.vue",
		"resources_js_Pages_hgdg_score_Index_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
=======
(self.webpackChunk=self.webpackChunk||[]).push([[2773],{262:(e,a,t)=>{"use strict";var n=t(7757),r=t.n(n),s=t(821),l=t(9038),i={class:"page-container"},o={class:"main-content bgc-grey-100"},c={id:"mainContent"};var d={class:"header navbar"},u={class:"header-container"},m=(0,s.createStaticVNode)('<ul class="nav-left"><li><a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg></a></li><li class="search-input"><input class="form-control" type="text" placeholder="Search..."></li></ul>',1),v={class:"nav-right"},h={class:"dropdown"},p={href:"",class:"dropdown-toggle no-after peers fxw-nw ai-c lh-1","data-bs-toggle":"dropdown"},g=(0,s.createElementVNode)("div",{class:"peer mR-10"},null,-1),f={class:"peer"},C={class:"fsz-sm c-grey-900"},x=(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-caret-down-fill mL-5",viewBox:"0 0 16 16"},[(0,s.createElementVNode)("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})],-1),w={class:"dropdown-menu fsz-sm dropdown-menu-c"},I=(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-sliders2 mR-10",viewBox:"0 0 16 16"},[(0,s.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"})],-1),V=(0,s.createElementVNode)("span",null," Setting",-1),N=(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-person-bounding-box mR-10",viewBox:"0 0 16 16"},[(0,s.createElementVNode)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"}),(0,s.createElementVNode)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"})],-1),b=(0,s.createElementVNode)("span",null," Change Password",-1),E=(0,s.createElementVNode)("li",{role:"separator",class:"divider"},null,-1),A=[(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-box-arrow-right mR-10",viewBox:"0 0 16 16"},[(0,s.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),(0,s.createElementVNode)("path",{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})],-1),(0,s.createElementVNode)("span",null," Logout",-1)];const P={methods:{logout:function(){this.$inertia.post("/logout"),location.href="/"},update_verified:function(){axios.patch("/users/update_verified_at")}}};var R=t(3744);const S=(0,R.Z)(P,[["render",function(e,a,t,n,r,l){var i=(0,s.resolveComponent)("Link");return(0,s.openBlock)(),(0,s.createElementBlock)("div",d,[(0,s.createElementVNode)("div",u,[m,(0,s.createElementVNode)("ul",v,[(0,s.createElementVNode)("li",h,[(0,s.createElementVNode)("a",p,[g,(0,s.createElementVNode)("div",f,[(0,s.createElementVNode)("span",C,(0,s.toDisplayString)(e.$page.props.auth.user.FullName),1)]),x]),(0,s.createElementVNode)("ul",w,[(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{href:"/users/settings",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},{default:(0,s.withCtx)((function(){return[I,V]})),_:1})]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{href:"/users/change-password",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},{default:(0,s.withCtx)((function(){return[N,b]})),_:1})]),E,(0,s.createElementVNode)("li",null,[(0,s.createElementVNode)("a",{onClick:a[0]||(a[0]=function(e){return l.logout()}),href:"",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},A)])])])])])])}]]);var k={class:"bdT ta-c p-30 lh-0 fsz-sm c-grey-600"},O=[(0,s.createElementVNode)("span",null,[(0,s.createTextVNode)("Developed by "),(0,s.createElementVNode)("a",{href:"https://davaodeoro.gov.ph/"},"PICTO")],-1)];const z={},M=(0,R.Z)(z,[["render",function(e,a,t,n,r,l){return(0,s.openBlock)(),(0,s.createElementBlock)("footer",k,O)}]]);var y={class:"sidebar"},_={class:"sidebar-inner"},T=(0,s.createStaticVNode)('<div class="sidebar-logo"><div class="peers ai-c fxw-nw"><div class="peer peer-greed"><a class="sidebar-link td-n" href="/"><div class="peers ai-c fxw-nw"><div class="peer"><div class="logo"><img src="/images/logo.png" alt="" class="img-fluid p-5"></div></div><div class="peer peer-greed"><h5 class="lh-1 mB-0 logo-text" style="color:#ffdc78;font-size:x-large !important;"> Admin </h5></div></div></a></div><div class="peer"><div class="mobile-toggle sidebar-toggle"><a href="" class="td-n"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg></a></div></div></div></div>',1),D={class:"sidebar-menu scrollable pos-r"},B=(0,s.createElementVNode)("hr",null,null,-1),F={class:"nav-item dropdown"},L=(0,s.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-border-outer" viewBox="0 0 16 16"><path d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z"></path><path d="M0 0v16h16V0H0zm1 1h14v14H1V1z"></path></svg></span><span class="title">Logframe</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1),G={class:"dropdown-menu"},H=(0,s.createElementVNode)("span",{class:"title"},"Major Final Output",-1),U=(0,s.createElementVNode)("span",{class:"title"},"Programs, Activities, Projects",-1),j=(0,s.createElementVNode)("span",{class:"title"},"View Logframe",-1),q={class:"nav-item"},Z=(0,s.createElementVNode)("span",null,null,-1),Q=(0,s.createElementVNode)("span",{class:"icon-holder"},[(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-border-style",viewBox:"0 0 16 16"},[(0,s.createElementVNode)("path",{d:"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"})])],-1),Y=(0,s.createElementVNode)("span",{class:"title"},"OPCR",-1),J=(0,s.createElementVNode)("hr",null,null,-1),X={class:"nav-item dropdown"},W=(0,s.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16"><path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path></svg></span><span class="title">Libraries</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1),K={class:"dropdown-menu"},ee={class:"nav-item dropdown"},ae=(0,s.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="title">Agenda</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1),te={class:"dropdown-menu"},ne=(0,s.createElementVNode)("span",{class:"title"},"Chief Executive Agenda",-1),re=(0,s.createElementVNode)("span",{class:"title"},"Socio-Economic Agenda",-1),se=(0,s.createElementVNode)("span",{class:"title"},"Sustainable Devt Goals",-1),le=(0,s.createElementVNode)("span",{class:"title"},"Executive Legislative Agenda",-1),ie=(0,s.createElementVNode)("span",{class:"title"},"Research Agenda",-1),oe=(0,s.createElementVNode)("span",{class:"title"},"Societal Goals",-1),ce={class:"nav-item dropdown"},de=(0,s.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="title">Outcomes</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1),ue={class:"dropdown-menu"},me=(0,s.createElementVNode)("span",{class:"title"},"Organizational Outcomes",-1),ve=(0,s.createElementVNode)("span",{class:"title"},"Sectoral Outcomes",-1),he=(0,s.createElementVNode)("span",{class:"title"},"HGDG Checklist",-1),pe=(0,s.createElementVNode)("span",{class:"title"},"GAD Related Issues",-1),ge=(0,s.createElementVNode)("span",{class:"title"},"Implementing Team",-1),fe=(0,s.createElementVNode)("span",{class:"title"},"Indicators",-1),Ce=(0,s.createElementVNode)("span",{class:"title"},"OPCR Standard",-1),xe=(0,s.createElementVNode)("hr",null,null,-1);const we={mounted:function(){$((function(){$(".sidebar .sidebar-menu li a").on("click",(function(){var e=$(this);e.parent().hasClass("open")?e.parent().children(".dropdown-menu").slideUp(200,(function(){e.parent().removeClass("open")})):(e.parent().parent().children("li.open").children(".dropdown-menu").slideUp(200),e.parent().parent().children("li.open").children("a").removeClass("open"),e.parent().parent().children("li.open").removeClass("open"),e.parent().children(".dropdown-menu").slideDown(200,(function(){e.parent().addClass("open")})))})),$(".sidebar").find(".sidebar-link").each((function(e,a){$(a).removeClass("active")})).filter((function(){var e=$(this).attr("href");return("/"===e[0]?e.substr(1):e)===window.location.pathname.substr(1)})).addClass("active"),$(".sidebar-toggle").on("click",(function(e){$("body").toggleClass("is-collapsed"),e.preventDefault()}))}))}},Ie={components:{Nav:S,Footer:M,Sidebar:(0,R.Z)(we,[["render",function(e,a,t,n,r,l){var i=(0,s.resolveComponent)("Link");return(0,s.openBlock)(),(0,s.createElementBlock)("div",y,[(0,s.createElementVNode)("div",_,[T,(0,s.createElementVNode)("ul",D,[B,(0,s.createElementVNode)("li",F,[L,(0,s.createElementVNode)("ul",G,[(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/mfos/direct"===e.$page.url}]),href:"/mfos/direct"},{default:(0,s.withCtx)((function(){return[H]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/paps/direct"===e.$page.url}]),href:"/paps/direct"},{default:(0,s.withCtx)((function(){return[U]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/logframe"===e.$page.url}]),href:"/logframe"},{default:(0,s.withCtx)((function(){return[j]})),_:1},8,["class"])])])]),(0,s.createElementVNode)("li",q,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/OPCRStandard"===e.$page.url}]),href:"/OPCRStandard"},{default:(0,s.withCtx)((function(){return[Z,Q,Y]})),_:1},8,["class"])]),J,(0,s.createElementVNode)("li",X,[W,(0,s.createElementVNode)("ul",K,[(0,s.createElementVNode)("li",ee,[ae,(0,s.createElementVNode)("ul",te,[(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/ChiefAgenda"===e.$page.url}]),href:"/ChiefAgenda"},{default:(0,s.withCtx)((function(){return[ne]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/EconomicAgenda"===e.$page.url}]),href:"/EconomicAgenda"},{default:(0,s.withCtx)((function(){return[re]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/SDG"===e.$page.url}]),href:"/SDG"},{default:(0,s.withCtx)((function(){return[se]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/ELA"===e.$page.url}]),href:"/ELA"},{default:(0,s.withCtx)((function(){return[le]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/ResearchAgenda"===e.$page.url}]),href:"/ResearchAgenda"},{default:(0,s.withCtx)((function(){return[ie]})),_:1},8,["class"])])])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/Societal"===e.$page.url}]),href:"/Societal"},{default:(0,s.withCtx)((function(){return[oe]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",ce,[de,(0,s.createElementVNode)("ul",ue,[(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/Organization"===e.$page.url}]),href:"/Organization"},{default:(0,s.withCtx)((function(){return[me]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/Sectoral"===e.$page.url}]),href:"/Sectoral"},{default:(0,s.withCtx)((function(){return[ve]})),_:1},8,["class"])])])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/HGDGChecklist"===e.$page.url}]),href:"/HGDGChecklist"},{default:(0,s.withCtx)((function(){return[he]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/Issues"===e.$page.url}]),href:"/Issues"},{default:(0,s.withCtx)((function(){return[pe]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/ImplementingTeam"===e.$page.url}]),href:"/ImplementingTeam"},{default:(0,s.withCtx)((function(){return[ge]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/indicators"===e.$page.url}]),href:"/indicators"},{default:(0,s.withCtx)((function(){return[fe]})),_:1},8,["class"])]),(0,s.createElementVNode)("li",null,[(0,s.createVNode)(i,{class:(0,s.normalizeClass)(["sidebar-link",{active:"/OPCRpaps/direct"===e.$page.url}]),href:"/OPCRpaps/direct"},{default:(0,s.withCtx)((function(){return[Ce]})),_:1},8,["class"])])])]),xe])])])}]])}},Ve=(0,R.Z)(Ie,[["render",function(e,a,t,n,r,l){var d=(0,s.resolveComponent)("Sidebar"),u=(0,s.resolveComponent)("Notification"),m=(0,s.resolveComponent)("Nav"),v=(0,s.resolveComponent)("Footer");return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createVNode)(d),(0,s.createElementVNode)("div",i,[(0,s.createVNode)(u),(0,s.createVNode)(m),(0,s.createElementVNode)("main",o,[(0,s.createElementVNode)("div",c,[(0,s.renderSlot)(e.$slots,"default")])]),(0,s.createVNode)(v)])])}]]);var Ne={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"11"}},be={class:"toast align-items-center",role:"alert","aria-atomic":"true","aria-live":"polite","data-bs-autohide":"true","data-bs-delay":"5000"},Ee={key:0,class:"d-flex text-white bg-success"},Ae={class:"toast-body"},Pe=(0,s.createElementVNode)("button",{type:"button",class:"btn-close me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Re={key:1,class:"d-flex text-white bg-danger"},Se={class:"toast-body"},ke=(0,s.createElementVNode)("button",{type:"button",class:"btn-close me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);const Oe={watch:{"$page.props.flash":{handler:function(e){var a=document.querySelector(".toast");new window.bootstrap.Toast(a).show()},deep:!0}}},ze=(0,R.Z)(Oe,[["render",function(e,a,t,n,r,l){return(0,s.openBlock)(),(0,s.createElementBlock)("div",Ne,[(0,s.createElementVNode)("div",be,[null!==e.$page.props.flash.message?((0,s.openBlock)(),(0,s.createElementBlock)("div",Ee,[(0,s.createElementVNode)("div",Ae,(0,s.toDisplayString)(e.$page.props.flash.message),1),Pe])):(0,s.createCommentVNode)("",!0),null!==e.$page.props.flash.error?((0,s.openBlock)(),(0,s.createElementBlock)("div",Re,[(0,s.createElementVNode)("div",Se,(0,s.toDisplayString)(e.$page.props.flash.error),1),ke])):(0,s.createCommentVNode)("",!0)])])}]]);var Me=t(1966),ye=(t(8085),{key:0,class:"fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"});const _e={props:{showing:{required:!0,type:Boolean}}},Te=(0,R.Z)(_e,[["render",function(e,a,t,n,r,l){return t.showing?((0,s.openBlock)(),(0,s.createElementBlock)("div",ye," The modal will go here. ")):(0,s.createCommentVNode)("",!0)}]]);var De=t(1658),Be=t.n(De),Fe=t(521),Le=t.n(Fe),Ge=t(2965),$e=t.n(Ge),He=t(8236),Ue=t.n(He),je=t(5180),qe=t.n(je),Ze=t(3863),Qe=t.n(Ze),Ye=(t(6441),t(9938)),Je=t.n(Ye),Xe=t(3633);function We(e,a,t,n,r,s,l){try{var i=e[s](l),o=i.value}catch(e){return void t(e)}i.done?a(o):Promise.resolve(o).then(n,r)}t(7333);var Ke,ea,aa=Be()(Le(),$e(),Ue(),qe(),Qe());(0,l.yP)({resolve:(Ke=r().mark((function e(a){var n,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(4985)("./".concat(a));case 2:return s=e.sent.default,null!==(n=s.layout)&&void 0!==n||(s.layout=Ve),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})),ea=function(){var e=this,a=arguments;return new Promise((function(t,n){var r=Ke.apply(e,a);function s(e){We(r,t,n,s,l,"next",e)}function l(e){We(r,t,n,s,l,"throw",e)}s(void 0)}))},function(e){return ea.apply(this,arguments)}),setup:function(e){var a=e.el,t=e.App,n=e.props,r=e.plugin;(0,s.createApp)({render:function(){return(0,s.h)(t,n)}}).use(r).component("multiselect",Xe.Z).component("Link",l.rU).component("Head",l.Fb).component("CardModal",Te).component("Notification",ze).component("FilePond",aa).component("v-select",Je()).mixin({data:function(){return{my_years:["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","2051","2052","2053","2054","2055","2056","2057","2058","2059","2060","2061","2062","2063","2064","2065","2066","2067","2068","2069","2070","2071","2072","2073","2074","2075","2076","2077","2078","2079","2080","2081","2082","2083","2084","2085","2086","2087","2088","2089","2090","2091","2092","2093","2094","2095","2096","2097","2098","2099","2100"],get jasper_ip(){return"122.53.120.27:8080/"}}},methods:{cleanVariable:function(e){this.variable=e.target.value.replace(/[^0-9]/g,"")},NumbersOnly:function(e){e.target.value.toString();var a=(e=e||window.event).which?e.which:e.keyCode;if(!(a>31&&(a<48||a>57)&&46!==a))return!0;e.preventDefault(),e.toFixed(2)},format_number:function(e,a,t){return e.toLocaleString("en-US",{useGrouping:t,minimumFractionDigits:a,maximumFractionDigits:a})},format_number_conv:function(e,a,t){return parseFloat(e).toLocaleString("en-US",{useGrouping:t,minimumFractionDigits:a,maximumFractionDigits:a})},GAD_remark:function(e){var a=parseFloat(e),t="GAD is insivible";return a>=4&&a<8?t="Promising GAD prospects (conditional pass)":a>=8&&a<15?t="Gender Sensitive":a>=15&&a<20?t="Gender-responsive":a>=20&&(t="Fully gender-responsive"),t},yearNow:function(){return(new Date).getFullYear()},year_values:function(){return s.createApp,["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","2051","2052","2053","2054","2055","2056","2057","2058","2059","2060","2061","2062","2063","2064","2065","2066","2067","2068","2069","2070","2071","2072","2073","2074","2075","2076","2077","2078","2079","2080","2081","2082","2083","2084","2085","2086","2087","2088","2089","2090","2091","2092","2093","2094","2095","2096","2097","2098","2099","2100"]},allCaps:function(e){return e.toUpperCase()},formatMonthYear:function(e){var a=e.split("-"),t=a[0],n=new Date(a[0],a[1]-1).toLocaleString("en-US",{month:"long"});return"".concat(n," ").concat(t)},formatMonth:function(e){var a=e.split("-"),t=(a[0],new Date(a[0],a[1]-1).toLocaleString("en-US",{month:"long"}));return"".concat(t)},getImagePath:function(e){return"/images/".concat(e)},getSum:function(e,a){var t=parseFloat(e)+parseFloat(a);return this.format_number_conv(t,2,!0)},getDifference:function(e,a){var t=parseFloat(e)-parseFloat(a);return this.format_number_conv(t,2,!0)}}}).mount(a)},title:function(e){return"PPA: "+e}}),Me.I.init({delay:250,color:"#29d",includeCSS:!0,showSpinner:!1})},7333:(e,a,t)=>{window._=t(6486);try{window.bootstrap=t(7244),window.$=window.jQuery=t(9755)}catch(e){}window.axios=t(9669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},7731:()=>{},4985:(e,a,t)=>{var n={"./Accomplishments/Create":[1473,1473],"./Accomplishments/Create.vue":[1473,1473],"./Accomplishments/Index":[3589,3589],"./Accomplishments/Index.vue":[3589,3589],"./Accomplishments/ValidationModal":[5326,5326],"./Accomplishments/ValidationModal.vue":[5326,5326],"./Accomplishments2/Create":[5193,5193],"./Accomplishments2/Create.vue":[5193,5193],"./Accomplishments2/Create2":[4896,4896],"./Accomplishments2/Create2.vue":[4896,4896],"./Accomplishments2/Index":[3315,3315],"./Accomplishments2/Index.vue":[3315,3315],"./Accomplishments2/Index2Backup":[8276,8276],"./Accomplishments2/Index2Backup.vue":[8276,8276],"./Accomplishments2/IndexBackUp":[2786,2786],"./Accomplishments2/IndexBackUp.vue":[2786,2786],"./Accomplishments2/ValidationModal":[9214,9214],"./Accomplishments2/ValidationModal.vue":[9214,9214],"./Activities/Create":[1085,1085],"./Activities/Create.vue":[1085,1085],"./Activities/Index":[1638,1638],"./Activities/Index.vue":[1638,1638],"./Authentication/LogIn":[4035,4035],"./Authentication/LogIn.vue":[4035,4035],"./BudgetRequirement/Create":[8609,8898,8609],"./BudgetRequirement/Create.vue":[8609,8898,8609],"./BudgetRequirement/Index":[6889,6889],"./BudgetRequirement/Index.vue":[6889,6889],"./ChiefAgenda/Index":[7213,7213],"./ChiefAgenda/Index.vue":[7213,7213],"./ChiefAgenda/addAgenda":[7089,7089],"./ChiefAgenda/addAgenda.vue":[7089,7089],"./Division/Create":[460,460],"./Division/Create.vue":[460,460],"./Division/Index":[7868,7868],"./Division/Index.vue":[7868,7868],"./ELA/Create":[3933,3933],"./ELA/Create.vue":[3933,3933],"./ELA/Index":[5627,5627],"./ELA/Index.vue":[5627,5627],"./EconomicAgenda/Index":[5382,5382],"./EconomicAgenda/Index.vue":[5382,5382],"./EconomicAgenda/addAgenda":[9587,9587],"./EconomicAgenda/addAgenda.vue":[9587,9587],"./EvaluationMechanismTool/Create":[201,201],"./EvaluationMechanismTool/Create.vue":[201,201],"./EvaluationMechanismTool/Index":[551,551],"./EvaluationMechanismTool/Index.vue":[551,551],"./Home":[7885,7885],"./Home.vue":[7885,7885],"./Implementation/Create":[1290,8898,1290],"./Implementation/Create.vue":[1290,8898,1290],"./Implementation/Create_A":[6023,8898,6023],"./Implementation/Create_A.vue":[6023,8898,6023],"./Implementation/Index":[570,570],"./Implementation/Index.vue":[570,570],"./ImplementingTeam/Create":[5114,5114],"./ImplementingTeam/Create.vue":[5114,5114],"./ImplementingTeam/Index":[5163,5163],"./ImplementingTeam/Index.vue":[5163,5163],"./ImplementingTeamRevision/Create":[3820,3820],"./ImplementingTeamRevision/Create.vue":[3820,3820],"./ImplementingTeamRevision/Index":[8387,8387],"./ImplementingTeamRevision/Index.vue":[8387,8387],"./Indicators/Create":[5097,5097],"./Indicators/Create.vue":[5097,5097],"./Indicators/Index":[5174,5174],"./Indicators/Index.vue":[5174,5174],"./InterOutcome/Create":[4018,4018],"./InterOutcome/Create.vue":[4018,4018],"./InterOutcome/Index":[6165,6165],"./InterOutcome/Index.vue":[6165,6165],"./Issues/Create":[406,406],"./Issues/Create.vue":[406,406],"./Issues/Index":[5338,5338],"./Issues/Index.vue":[5338,5338],"./LogFrame/Index":[1119,1119],"./LogFrame/Index.vue":[1119,1119],"./LogFrame/logframe":[1901,1901],"./LogFrame/logframe.vue":[1901,1901],"./MFOs/Create":[4948,4948],"./MFOs/Create.vue":[4948,4948],"./MFOs/Direct":[5552,5552],"./MFOs/Direct.vue":[5552,5552],"./MFOs/Index":[3510,3510],"./MFOs/Index.vue":[3510,3510],"./Monitoring/Create":[8824,8824],"./Monitoring/Create.vue":[8824,8824],"./Monitoring/Index":[5137,5137],"./Monitoring/Index.vue":[5137,5137],"./OPCR/Accomplishment/Create":[528,528],"./OPCR/Accomplishment/Create.vue":[528,528],"./OPCR/Accomplishment/Index":[9534,9534],"./OPCR/Accomplishment/Index.vue":[9534,9534],"./OPCR/Form/Create":[3811,3811],"./OPCR/Form/Create.vue":[3811,3811],"./OPCR/Form/Index":[1027,1027],"./OPCR/Form/Index.vue":[1027,1027],"./OPCR/Form/Print":[2391,2391],"./OPCR/Form/Print.vue":[2391,2391],"./OPCR/Index":[7135,7135],"./OPCR/Index.vue":[7135,7135],"./OPCR/List/Create":[8517,8517],"./OPCR/List/Create.vue":[8517,8517],"./OPCR/List/Index":[888,888],"./OPCR/List/Index.vue":[888,888],"./OPCR/OPCR":[9579,9579],"./OPCR/OPCR.vue":[9579,9579],"./OPCR/Target/Create":[1989,1989],"./OPCR/Target/Create.vue":[1989,1989],"./OPCR/Target/Index":[2e3,2e3],"./OPCR/Target/Index.vue":[2e3,2e3],"./OPCRPaps/Direct":[4270,4270],"./OPCRPaps/Direct.vue":[4270,4270],"./OfficeAccountable/Create":[9399,9399],"./OfficeAccountable/Create.vue":[9399,9399],"./OfficeAccountable/Index":[6826,6826],"./OfficeAccountable/Index.vue":[6826,6826],"./Organizational/Index":[989,989],"./Organizational/Index.vue":[989,989],"./Organizational/addOrganizational":[6027,6027],"./Organizational/addOrganizational.vue":[6027,6027],"./Outcome/Create":[2853,2853],"./Outcome/Create.vue":[2853,2853],"./Outcome/Index":[8829,8829],"./Outcome/Index.vue":[8829,8829],"./Outputs/Create":[1184,1184],"./Outputs/Create.vue":[1184,1184],"./Outputs/Index":[5376,5376],"./Outputs/Index.vue":[5376,5376],"./PAPS/Create":[907,907],"./PAPS/Create.vue":[907,907],"./PAPS/Direct":[4048,4048],"./PAPS/Direct.vue":[4048,4048],"./PAPS/Index":[2859,2859],"./PAPS/Index.vue":[2859,2859],"./Performance/Create":[6946,6946],"./Performance/Create.vue":[6946,6946],"./Performance/Index":[1097,1097],"./Performance/Index.vue":[1097,1097],"./Places":[488,488],"./Places.vue":[488,488],"./Poles/Index":[1009,1009],"./Poles/Index.vue":[1009,1009],"./Posts/Index":[751,751],"./Posts/Index.vue":[751,751],"./ProjectProfile/Create":[5676,5676],"./ProjectProfile/Create.vue":[5676,5676],"./ProjectProfile/Index":[8846,8846],"./ProjectProfile/Index.vue":[8846,8846],"./Quality/Create":[181,181],"./Quality/Create.vue":[181,181],"./Quality/Index":[5597,5597],"./Quality/Index.vue":[5597,5597],"./QualityRemarks/Create":[6230,6230],"./QualityRemarks/Create.vue":[6230,6230],"./QualityRemarks/Index":[5700,5700],"./QualityRemarks/Index.vue":[5700,5700],"./RAAO/Index":[9313,9313],"./RAAO/Index.vue":[9313,9313],"./Rating/Create":[105,105],"./Rating/Create.vue":[105,105],"./Rating/Index":[9006,9006],"./Rating/Index.vue":[9006,9006],"./RatingRemarks/Create":[7618,7618],"./RatingRemarks/Create.vue":[7618,7618],"./RatingRemarks/Index":[1367,1367],"./RatingRemarks/Index.vue":[1367,1367],"./ResearchAgenda/Create":[4236,4236],"./ResearchAgenda/Create.vue":[4236,4236],"./ResearchAgenda/Index":[229,229],"./ResearchAgenda/Index.vue":[229,229],"./RevisionPlans/Create":[3568,3568],"./RevisionPlans/Create.vue":[3568,3568],"./RevisionPlans/GAS/Create":[8712,8712],"./RevisionPlans/GAS/Create.vue":[8712,8712],"./RevisionPlans/GAS/Index":[6249,6249],"./RevisionPlans/GAS/Index.vue":[6249,6249],"./RevisionPlans/GAS/View":[2169,2169],"./RevisionPlans/GAS/View.vue":[2169,2169],"./RevisionPlans/Index":[5086,5086],"./RevisionPlans/Index.vue":[5086,5086],"./RevisionPlans/MFO/Create":[6266,6266],"./RevisionPlans/MFO/Create.vue":[6266,6266],"./RevisionPlans/MFO/Index":[7730,7730],"./RevisionPlans/MFO/Index.vue":[7730,7730],"./RevisionPlans/View":[2927,2927],"./RevisionPlans/View.vue":[2927,2927],"./RiskManagement/Create":[4180,4180],"./RiskManagement/Create.vue":[4180,4180],"./RiskManagement/Index":[4879,4879],"./RiskManagement/Index.vue":[4879,4879],"./SDG/Create":[3697,3697],"./SDG/Create.vue":[3697,3697],"./SDG/Index":[9815,9815],"./SDG/Index.vue":[9815,9815],"./Sectoral/Index":[2554,2554],"./Sectoral/Index.vue":[2554,2554],"./Sectoral/addSector":[1883,1883],"./Sectoral/addSector.vue":[1883,1883],"./Signatories/Create":[3404,3404],"./Signatories/Create.vue":[3404,3404],"./Signatories/Index":[8571,8571],"./Signatories/Index.vue":[8571,8571],"./SocietalGoals/Index":[1593,1593],"./SocietalGoals/Index.vue":[1593,1593],"./SocietalGoals/addSocietalGoals":[3992,3992],"./SocietalGoals/addSocietalGoals.vue":[3992,3992],"./Strategies/Create":[1130,1130],"./Strategies/Create.vue":[1130,1130],"./Strategies/Index":[4084,4084],"./Strategies/Index.vue":[4084,4084],"./SuccessIndicator/Create":[346,346],"./SuccessIndicator/Create.vue":[346,346],"./SuccessIndicator/Index":[7700,7700],"./SuccessIndicator/Index.vue":[7700,7700],"./Targets/Create":[5282,5282],"./Targets/Create.vue":[5282,5282],"./Targets/Direct":[6713,6713],"./Targets/Direct.vue":[6713,6713],"./Targets/Implementation/Create":[4135,4135],"./Targets/Implementation/Create.vue":[4135,4135],"./Targets/Implementation/Index":[5153,5153],"./Targets/Implementation/Index.vue":[5153,5153],"./Targets/Index":[6859,6859],"./Targets/Index.vue":[6859,6859],"./Time_Sheets/Index":[2130,2130],"./Time_Sheets/Index.vue":[2130,2130],"./Time_Sheets/New":[4859,4859],"./Time_Sheets/New.vue":[4859,4859],"./Timeliness/Create":[4990,4990],"./Timeliness/Create.vue":[4990,4990],"./Timeliness/Index":[8235,8235],"./Timeliness/Index.vue":[8235,8235],"./TimelinessRemarks/Create":[4099,4099],"./TimelinessRemarks/Create.vue":[4099,4099],"./TimelinessRemarks/Index":[4445,4445],"./TimelinessRemarks/Index.vue":[4445,4445],"./UserOffice/Set":[6542,6542],"./UserOffice/Set.vue":[6542,6542],"./Users/BootstrapModalNoJquery":[4399,4399],"./Users/BootstrapModalNoJquery.vue":[4399,4399],"./Users/ChangePassword":[6609,6609],"./Users/ChangePassword.vue":[6609,6609],"./Users/Create":[4465,4465],"./Users/Create.vue":[4465,4465],"./Users/Index":[9186,9186],"./Users/Index.vue":[9186,9186],"./Users/PermissionsModal":[2783,2783],"./Users/PermissionsModal.vue":[2783,2783],"./Users/Settings":[2071,2071],"./Users/Settings.vue":[2071,2071],"./hgdg_checklist/Create":[8444,8444],"./hgdg_checklist/Create.vue":[8444,8444],"./hgdg_checklist/Index":[7278,7278],"./hgdg_checklist/Index.vue":[7278,7278],"./hgdg_question/Create":[2440,2440],"./hgdg_question/Create.vue":[2440,2440],"./hgdg_question/Index":[1330,1330],"./hgdg_question/Index.vue":[1330,1330],"./hgdg_score/Index":[7377,7377],"./hgdg_score/Index.vue":[7377,7377]};function r(e){if(!t.o(n,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((()=>t(r)))}r.keys=()=>Object.keys(n),r.id=4985,e.exports=r},4654:()=>{}},e=>{var a=a=>e(e.s=a);e.O(0,[6170,8898],(()=>(a(262),a(7731))));e.O()}]);
>>>>>>> e1526820ae8fb572265a5d9b400d54787a06a3d2
