<<<<<<< HEAD
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js"
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  watch: {
    '$page.props.flash': {
      handler: function handler(value) {
        if (value.message) {
          this.$swal({
            icon: 'success',
            iconColor: 'white',
            title: value.message,
            timer: 5000,
            // Set duration
            timerProgressBar: true,
            customClass: {
              popup: "bg-gradient-success"
            }
          });
        } else if (value.error) {
          this.$swal({
            icon: 'error',
            iconColor: 'white',
            title: value.error,
            timer: 5000,
            // Set duration
            timerProgressBar: true,
            customClass: {
              popup: "bg-gradient-danger"
            }
          });
        } else if (value.info) {
          this.$swal({
            icon: 'info',
            iconColor: 'white',
            title: value.info,
            timer: 5000,
            // Set duration
            timerProgressBar: true,
            customClass: {
              popup: "bg-gradient-info"
            }
          });
        } else if (value.deleted) {
          this.$swal({
            icon: 'warning',
            iconColor: 'white',
            title: value.deleted,
            timer: 5000,
            // Set duration
            timerProgressBar: true,
            customClass: {
              popup: "bg-gradient-deleted"
            }
          });
        }
      },
      deep: true
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      });

      // Sidebar Activity Class
      var sidebarLinks = $(".sidebar").find(".sidebar-link");
      sidebarLinks.each(function (index, el) {
        $(el).removeClass("active");
      }).filter(function () {
        var href = $(this).attr("href");
        var pattern = href[0] === "/" ? href.substr(1) : href;
        return pattern === window.location.pathname.substr(1);
      }).addClass("active");

      // ٍSidebar Toggle
      $(".sidebar-toggle").on("click", function (e) {
        $("body").toggleClass("is-collapsed");
        e.preventDefault();
      });
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751"
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.showing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, " The modal will go here. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12"
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  "class": "bdT ta-c p-30 lh-0 fsz-sm",
  style: {
    "background-color": "#4d3102",
    "color": "#fff"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $App Screen Footer ### "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_1, _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    style: {
      "color": "#FFD700"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Developed by "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "https://davaodeoro.gov.ph/"
  }, "PICTO")], -1 /* CACHED */)])))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086"
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
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

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7"
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  "class": "header navbar"
};
var _hoisted_2 = {
  "class": "header-container",
  id: "sidebar-toggle",
  href: "javascript:void(0);",
  style: {
    "min-width": "320px",
    "background-color": "#452b02",
    "color": "black"
  }
};
var _hoisted_3 = {
  key: 0,
  "class": "nav-left"
};
var _hoisted_4 = {
  id: "sidebar-toggle",
  "class": "sidebar-toggle"
};
var _hoisted_5 = {
  "class": "text-danger"
};
var _hoisted_6 = {
  key: 1,
  "class": "nav-right"
};
var _hoisted_7 = {
  "class": "nav-right"
};
var _hoisted_8 = {
  key: 0,
  "class": "nav-right"
};
var _hoisted_9 = {
  "class": "dropdown"
};
var _hoisted_10 = {
  href: "",
  "class": "dropdown-toggle no-after peers fxw-nw ai-c lh-1",
  "data-bs-toggle": "dropdown"
};
var _hoisted_11 = {
  "class": "peer"
};
var _hoisted_12 = {
  "class": "fsz-sm",
  style: {
    "color": "#FFD700",
    "font-weight": "bold"
  }
};
var _hoisted_13 = {
  "class": "dropdown-menu fsz-sm dropdown-menu-c"
};
var _hoisted_14 = {
  key: 0
};
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = {
  key: 2,
  role: "separator",
  "class": "divider"
};
var _hoisted_17 = {
  key: 3
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav-left\"><li><a id=\"sidebar-toggle\" class=\"sidebar-toggle\" href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"#FFD700\" class=\"bi bi-list\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"></path></svg></a></li><li class=\"search-input\"><input class=\"form-control\" type=\"text\" placeholder=\"Search...\"></li></ul>", 1)), _ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You are impersonating ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.FullName), 1 /* TEXT */)])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_6, _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a id=\"sidebar-toggle\" class=\"sidebar-toggle\">\r\n                        <span class=\"text-danger\">You are impersonating <b><u>{{\r\n                        $page.props.auth.user.FullName\r\n                    }}</u></b></span>\r\n                    </a> ")], -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [_ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/stop-impersonate",
    "class": "btn btn-sm btn-danger text-white px-3 py-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        fill: "currentColor",
        "class": "bi bi-exclamation-circle",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "   Stop Impersonating", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "peer mR-10"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n                                <img\r\n                                class=\"w-2r bdrs-50p\"\r\n                                :src=\"$page.props.auth.user.photo\"\r\n                                alt=\"\"\r\n                            />\r\n                            ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.FullName), 1 /* TEXT */)]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "currentColor",
    "class": "bi bi-caret-down-fill mL-5",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
  })], -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/settings",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        fill: "currentColor",
        "class": "bi bi-sliders2 mR-10",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        "fill-rule": "evenodd",
        d: "M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
      })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Setting", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/change-password",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        fill: "currentColor",
        "class": "bi bi-person-bounding-box mR-10",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Change Password", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })]), _ctx.$page.props.auth.user.office.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[8] || (_cache[8] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        fill: "currentColor",
        "class": "bi bi-person-fill-gear",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "   Users", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users/stop-impersonate",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-danger"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        fill: "currentColor",
        "class": "bi bi-exclamation-circle",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "   Stop Impersonating", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.$page.props.flash.impersonating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.logout();
    }),
    href: "",
    "class": "d-b td-n pY-5 bgcH-grey-100 c-grey-700"
  }, _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    fill: "currentColor",
    "class": "bi bi-box-arrow-right mR-10",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    d: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    d: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
  })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Logout", -1 /* CACHED */)])))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72"
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  "class": "position-fixed top-0 end-0 p-3",
  style: {
    "z-index": "1000"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "toast align-items-center",
    role: "alert",
    "aria-atomic": "true",
    "aria-live": "polite",
    "data-bs-autohide": "true",
    "data-bs-delay": "5000"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex text-white bg-gradient-success\" v-if=\"$page.props.flash.message !== null\">\r\n                <div class=\"toast-body\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" class=\"bi bi-backspace-fill\"\r\n                        viewBox=\"0 0 16 16\" style=\"fill: #94ffb0;\">\r\n                        <path\r\n                            d=\"M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z\" />\r\n                        <path\r\n                            d=\"M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z\" />\r\n                        <path\r\n                            d=\"M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z\" />\r\n                        <path\r\n                            d=\"M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z\" />\r\n                    </svg>\r\n                    {{ $page.props.flash.message }}\r\n                </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex text-white bg-gradient-danger\" v-if=\"$page.props.flash.error !== null\">\r\n                <div class=\"toast-body\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" class=\"bi bi-backspace-fill\"\r\n                        viewBox=\"0 0 16 16\" style=\"fill: #FF5733;\">\r\n                        <path\r\n                            d=\"M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z\" />\r\n                        <path\r\n                            d=\"M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z\" />\r\n                        <path\r\n                            d=\"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\" />\r\n                    </svg>\r\n                    &nbsp;<b>{{ $page.props.flash.error }}</b>\r\n                </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex text-white bg-gradient-info\" v-if=\"$page.props.flash.info !== null\">\r\n                <div class=\"toast-body\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" class=\"bi bi-backspace-fill\"\r\n                        viewBox=\"0 0 16 16\" style=\"fill: #b8f8ff;\">\r\n                        <path\r\n                            d=\"M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z\" />\r\n                        <path\r\n                            d=\"M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Zm3.631-4.538c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z\" />\r\n                    </svg>\r\n                    {{ $page.props.flash.info }}\r\n                </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex text-white bg-gradient-deleted\" v-if=\"$page.props.flash.deleted !== null\">\r\n                <div class=\"toast-body\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" class=\"bi bi-backspace-fill\"\r\n                        viewBox=\"0 0 16 16\" style=\"fill: #f46c89;\">\r\n                        <path\r\n                            d=\"M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z\" />\r\n                        <path\r\n                            d=\"M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z\" />\r\n                    </svg>\r\n                    {{ $page.props.flash.deleted }}\r\n                </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("**********************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex text-white bg-success\" v-if=\"$page.props.flash.message !== null\">\r\n                <div class=\"toast-body\">\r\n                    {{$page.props.flash.message}}\r\n            </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div>\r\n\r\n            <div class=\"d-flex text-white bg-danger\" v-if=\"$page.props.flash.error !== null\">\r\n                <div class=\"toast-body\">\r\n                    {{$page.props.flash.error}}\r\n            </div>\r\n                <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n            </div> ")], -1 /* CACHED */)])));
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0"
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  "class": "sidebar"
};
var _hoisted_2 = {
  "class": "sidebar-inner"
};
var _hoisted_3 = {
  "class": "sidebar-menu scrollable pos-r"
};
var _hoisted_4 = {
  "class": "nav-item dropdown"
};
var _hoisted_5 = {
  "class": "dropdown-menu"
};
var _hoisted_6 = {
  "class": "nav-item dropdown"
};
var _hoisted_7 = {
  "class": "dropdown-menu"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  "class": "nav-item"
};
var _hoisted_10 = {
  "class": "nav-item dropdown"
};
var _hoisted_11 = {
  "class": "dropdown-menu"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  "class": "nav-item"
};
var _hoisted_14 = {
  "class": "nav-item dropdown"
};
var _hoisted_15 = {
  "class": "dropdown-menu"
};
var _hoisted_16 = {
  key: 0,
  "class": "nav-item dropdown"
};
var _hoisted_17 = {
  "class": "dropdown-menu"
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  key: 2
};
var _hoisted_20 = {
  key: 0,
  "class": "nav-item dropdown"
};
var _hoisted_21 = {
  "class": "dropdown-menu"
};
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = {
  key: 1
};
var _hoisted_24 = {
  key: 2
};
var _hoisted_25 = {
  key: 3
};
var _hoisted_26 = {
  key: 1,
  "class": "nav-item dropdown"
};
var _hoisted_27 = {
  "class": "dropdown-menu"
};
var _hoisted_28 = {
  "class": "nav-item"
};
var _hoisted_29 = {
  "class": "nav-item"
};
var _hoisted_30 = {
  "class": "nav-item"
};
var _hoisted_31 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $Sidebar Header ### "), _cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"sidebar-logo\"><div class=\"peers ai-c fxw-nw\"><div class=\"peer peer-greed\"><a class=\"sidebar-link td-n\" href=\"/\"><div class=\"peers ai-c fxw-nw\"><div class=\"peer\"><div class=\"logo\"><img src=\"/images/logo.png\" alt=\"\" class=\"img-fluid p-5\"></div></div><div class=\"peer peer-greed\"><h5 class=\"lh-1 mB-0 logo-text\"><span style=\"color:#FFD700;font-size:medium;\"> Planning and Budgeting System </span></h5></div></div></a></div><div class=\"peer\"><div class=\"mobile-toggle sidebar-toggle\"><a href=\"\" class=\"td-n\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"black\" class=\"bi bi-list\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"></path></svg></a></div></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ### $Sidebar Menu ### "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<li class=\"nav-item mT-30 actived\">\r\n                    <Link class=\"sidebar-link\" href=\"/\"\r\n                        ><span class=\"icon-holder\"\r\n                            ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-house-door\" viewBox=\"0 0 16 16\">\r\n                              <path d=\"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z\"/>\r\n                            </svg>\r\n                        </span\r\n                        ><span class=\"title\">Dashboard</span></Link\r\n                    >\r\n                </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGFRAME **************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" fill=\"currentColor\" class=\"bi bi-border-outer\" viewBox=\"0 0 16 16\"><path d=\"M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z\"></path><path d=\"M0 0v16h16V0H0zm1 1h14v14H1V1z\"></path></svg></span><span class=\"title\">Logframe</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Societal'
    }]),
    href: "/Societal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Societal Goals", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"title\">Outcomes</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Sectoral'
    }]),
    href: "/Sectoral"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Sectoral Outcomes", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Organization'
    }]),
    href: "/Organization"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Organizational Outcomes", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/mfos/direct'
    }]),
    href: "/mfos/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Major Final Output", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/paps/direct'
    }]),
    href: "/paps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Programs, Activities, Projects", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === "/logframe/".concat(_ctx.$page.props.auth.user.office.ffunccod)
    }]),
    href: "/logframe/".concat(_ctx.$page.props.auth.user.office.ffunccod)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "View Logframe ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"$page.props.auth.user.department_code === '04'\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("LOGFRAME undefined offset KINI POD***************"), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === "/logframe"
    }]),
    href: "/logframe"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Logframes -Other Offices", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OPCR ******************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/opcrlist'
    }]),
    href: "/opcrlist"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("OPCRStandard<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-graph-up-arrow\" viewBox=\"0 0 16 16\">\r\n                                <path fill-rule=\"evenodd\" d=\"M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z\"/>\r\n                            </svg>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        "class": "bi bi-border-style",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "OPCR", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IPP ********************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/revision/0?source=direct\" :class=\"{ 'active': $page.url === '/revision/0?source=direct' }\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n                                <path d=\"M4 2h12v20H4z\"/>\r\n                                <path d=\"M6 6h8\"/>\r\n                                <path d=\"M6 10h8\"/>\r\n                                <circle cx=\"8\" cy=\"16\" r=\"2\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">IPP</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 20% Development Fund ********************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/development-fund/0\"\r\n                    :class=\"{ 'active': $page.url === '/development-fund/0' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n                            <path d=\"M4 2h12v20H4z\"/>\r\n                            <path d=\"M6 6h8\"/>\r\n                            <path d=\"M6 10h8\"/>\r\n                            <circle cx=\"8\" cy=\"16\" r=\"2\"/>\r\n                        </svg>\r\n                    </span>\r\n                    <span class=\"title\">20% Development Fund</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIP ********************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/revision/0?source=sip\" :class=\"{ 'active': $page.url === '/revision/0?source=sip' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n                            <path d=\"M4 2h12v20H4z\"/>\r\n                            <path d=\"M6 6h8\"/>\r\n                            <path d=\"M6 10h8\"/>\r\n                            <circle cx=\"8\" cy=\"16\" r=\"2\"/>\r\n                        </svg>\r\n                    </span>\r\n                    <span class=\"title\">SIP</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/IPCR/direct\" :class=\"{ 'active': $page.url === '/IPCR/direct' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                            class=\"bi bi-filter-square-fill\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z\" />\r\n                        </svg>\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg>\r\n                    </span>\r\n                    <span class=\"title\">IPCR</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/AIP/\" :class=\"{'active': $page.url === '/AIP/'}\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-graph-up-arrow\" viewBox=\"0 0 16 16\">\r\n                                <path fill-rule=\"evenodd\" d=\"M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z\"/>\r\n                            </svg> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ********************LBP Form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                    <Link class=\"sidebar-link\" href=\"/AIP/direct\" :class=\"{ 'active': $page.url === '/AIP/direct' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                            class=\"bi bi-card-text\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z\" />\r\n                            <path\r\n                                d=\"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z\" />\r\n                        </svg>\r\n                    </span>\r\n                    <span class=\"title\">LBP Form</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"sidebar-link\" href=\"/AIP/direct\" :class=\"{ 'active': $page.url === '/AIP/direct' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                            class=\"bi bi-card-text\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z\" />\r\n                            <path\r\n                                d=\"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z\" />\r\n                        </svg>\r\n                    </span>\r\n                    <span class=\"title\">LBP Form</span>\r\n                </Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                    <Link class=\"sidebar-link\" href=\"/annual-investment-plans\" :class=\"{ 'active': $page.url === '/annual-investment-plans' }\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                                class=\"bi bi-card-text\" viewBox=\"0 0 16 16\">\r\n                                <path\r\n                                    d=\"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z\" />\r\n                                <path\r\n                                    d=\"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z\" />\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Annual Investment Plan</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/DailyAccomplishment/direct\" :class=\"{'active': $page.url === '/DailyAccomplishment/direct'}\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-calendar-fill\" viewBox=\"0 0 16 16\">\r\n                                 <path d=\"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z\"/>\r\n                                    </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Accomplishment Report</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/AddAccomplishment/\"\r\n                        :class=\"{ 'active': $page.url === '/AddAccomplishment/' }\">\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                            class=\"bi bi-calendar-fill\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z\" />\r\n                        </svg>\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg>\r\n                    </span>\r\n                    <span class=\"title\">Accomplishment Report</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IPP (All Offices) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\" v-if=\"$page.props.auth.user.department_code == '04'\">\r\n                    <Link class=\"sidebar-link\" href=\"/revision_plans?source=direct\"\r\n                        :class=\"{ 'active': $page.url === '/revision_plans?source=direct' }\"\r\n                        v-if=\"($page.props.auth.user.department_code == '04' || $page.props.auth.user.office.empl_id == '1399')\"\r\n                    >\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-file-ruled-fill\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">IPP (All Offices)</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 2h12v20H4z\"></path><path d=\"M6 6h8\"></path><path d=\"M6 10h8\"></path><circle cx=\"8\" cy=\"16\" r=\"2\"></circle></svg></span><span class=\"title\">IPP</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Regular PPAs ************************************ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision/0?source=direct'
    }]),
    href: "/revision/0?source=direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M4 2h12v20H4z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 6h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 10h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "8",
        cy: "16",
        r: "2"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "  Regular PPAs", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Engineering PPAs "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/development-fund/0'
    }]),
    href: "/development-fund/0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M4 2h12v20H4z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 6h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 10h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "8",
        cy: "16",
        r: "2"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "  Engineering PPAs", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IPP -ALl Offices "), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_12, [_ctx.$page.props.auth.user.department_code == '04' || _ctx.$page.props.auth.user.office.empl_id == '1399' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision_plans?source=direct'
    }]),
    href: "/revision_plans?source=direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        "class": "bi bi-file-ruled-fill",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "  IPP (All Offices)", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIP****************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision/0?source=sip'
    }]),
    href: "/revision/0?source=sip"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M4 2h12v20H4z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 6h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 10h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "8",
        cy: "16",
        r: "2"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "  SIP", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AIP****************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision/0?source=sip'
    }]),
    href: "/ipp_aip_codes"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M4 2h12v20H4z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 6h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M6 10h8"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "8",
        cy: "16",
        r: "2"
      })])], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "  AIP", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision_plans?source=budget'
    }]),
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[16] || (_cache[16] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        "class": "bi bi-receipt",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg> ")], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Budget Proposal", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/revision_plans?source=proposed\"\r\n                        :class=\"{ 'active': $page.url === '/revision_plans?source=proposed' }\"\r\n                    >\r\n                    <span></span>\r\n                    <span class=\"icon-holder\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-receipt\" viewBox=\"0 0 16 16\">\r\n                            <path d=\"M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z\"/>\r\n                            <path d=\"M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5\"/>\r\n                        </svg>\r\n\r\n                    </span>\r\n                    <span class=\"title\">Budget Proposed</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Outcomes"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/outcome\" :class=\"{'active': $page.url === '/outcome'}\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-person-rolodex\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z\"/>\r\n                                <path d=\"M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Outcomes</span>\r\n                    </Link>\r\n                </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n                <li class=\"nav-item\" v-if=\"$page.props.can.can_access_indicators\">\r\n                    <Link class=\"sidebar-link\" href=\"/indicators\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bezier2\" viewBox=\"0 0 16 16\">\r\n                                <path fill-rule=\"evenodd\" d=\"M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Indicators</span>\r\n                    </Link>\r\n                </li>\r\n                "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("GOALS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n                <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/Organization\" :class=\"{'active': $page.url === '/Organization'}\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-diagram-3\" viewBox=\"0 0 16 16\">\r\n                                <path fill-rule=\"evenodd\" d=\"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Organizational Goals</span>\r\n                    </Link>\r\n                </li>\r\n\r\n                <li class=\"nav-item\">\r\n                    <Link class=\"sidebar-link\" href=\"/Sectoral\" :class=\"{'active': $page.url === '/Sectoral'}\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-pie-chart-fill\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Sectoral Goals</span>\r\n                    </Link>\r\n                </li>\r\n                "), _cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Agenda/Goals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Other Libraries"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"currentColor\" class=\"bi bi-book-fill\" viewBox=\"0 0 16 16\"><path d=\"M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"></path></svg></span><span class=\"title\">Libraries</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [_ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_16, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"title\">Agenda</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ChiefAgenda'
    }]),
    href: "/ChiefAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[17] || (_cache[17] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Chief Executive Agenda", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/EconomicAgenda'
    }]),
    href: "/EconomicAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[18] || (_cache[18] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Socio-Economic Agenda", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/SDG'
    }]),
    href: "/SDG"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[19] || (_cache[19] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Sustainable Devt Goals", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ELA'
    }]),
    href: "/ELA"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[20] || (_cache[20] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Executive Legislative Agenda", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/ResearchAgenda'
    }]),
    href: "/ResearchAgenda"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Research Agenda", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("****************************"), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/HGDGChecklist'
    }]),
    href: "/HGDGChecklist"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[23] || (_cache[23] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "HGDG Checklist", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/Issues'
    }]),
    href: "/Issues"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "GAD Related Issues", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                            <Link class=\"sidebar-link\" href=\"/ImplementingTeam\"\r\n                                :class=\"{ 'active': $page.url === '/ImplementingTeam' }\">\r\n\r\n                                <span class=\"title\">Implementing Team</span>\r\n                            </Link>\r\n                        </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/indicators'
    }]),
    href: "/indicators"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Indicators", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/OPCRpaps/direct'
    }]),
    href: "/OPCRpaps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[26] || (_cache[26] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "OPCR Standard", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                            <Link class=\"sidebar-link\" href=\"/IPCR/direct\" :class=\"{'active': $page.url === '/IPCR/direct'}\">\r\n\r\n                                <span class=\"title\">IPCR Standard</span>\r\n                            </Link>\r\n                        </li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/user/employees'
    }]),
    href: "/user/employees"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[27] || (_cache[27] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Employees", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                            <Link class=\"sidebar-link\" href=\"/indicators\" :class=\"{'active': $page.url === '/indicators'}\">\r\n                                <span class=\"title\">Divisions</span>\r\n                            </Link>\r\n                        </li> ")])]), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" department_code: {{ $page.props.auth.user.department_code }} "), _ctx.$page.props.auth.user.department_code == '04' || _ctx.$page.props.auth.user.department_code == '02' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_20, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up-fill\" viewBox=\"0 0 16 16\"><path d=\"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z\"></path></svg></span><span class=\"title\">Review/Approve</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/review-approve/targets/'
    }]),
    href: "/review-approve/targets/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[29] || (_cache[29] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Targets", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/review-approve/ratings/'
    }]),
    href: "/review-approve/ratings/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[30] || (_cache[30] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Rating", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/review-approve/ratings?source=ppdo_approval'
    }]),
    href: "/review-approve/ratings?source=ppdo_approval"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[31] || (_cache[31] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Rating (For Approval)", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li v-if=\"$page.props.auth.user.department_code == '04'\">\r\n                            <Link class=\"sidebar-link\" href=\"/review-approve/ratings?source=approved\"\r\n                                :class=\"{ 'active': $page.url === '/review-approve/ratings?source=approved' }\">\r\n                            <span class=\"title\">Rating (Approved)</span>\r\n                            </Link>\r\n                        </li> "), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision_plans?source=rev_app'
    }]),
    href: "/revision_plans?source=rev_app"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[32] || (_cache[32] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Project Profile", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision_plans?source=approved'
    }]),
    href: "/revision_plans?source=approved"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[33] || (_cache[33] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Project Profile (Approved)", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.auth.user.department_code == '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/institutional_aip'
    }]),
    href: "/institutional_aip"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[34] || (_cache[34] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "AIP", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.auth.user.department_code == '04' || _ctx.$page.props.auth.user.department_code == '02' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_26, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-toggle\" href=\"javascript:void(0);\"><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-aspect-ratio-fill\" viewBox=\"0 0 16 16\"><path d=\"M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1z\"></path></svg></span><span class=\"title\">OPCR Tracking</span><span class=\"arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"></path></svg></span></a>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/opcr-tracking/targets/'
    }]),
    href: "/opcr-tracking/targets/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[36] || (_cache[36] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Targets", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/opcr-tracking/ratings/'
    }]),
    href: "/opcr-tracking/ratings/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "Ratings", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/review-approve/'
    }]),
    href: "/manual"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[39] || (_cache[39] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        "class": "bi bi-calendar-fill",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg> ")], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "IPP Manual", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/project-profile-tracking'
    }]),
    href: "/project-profile-tracking"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[40] || (_cache[40] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon-holder"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        "class": "bi bi-calendar-fill",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-border-style\" viewBox=\"0 0 16 16\">\r\n                                <path d=\"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z\"/>\r\n                            </svg> ")], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "title"
      }, "IPP Tracking", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :href=\"`http://192.168.80.88/login/authentication?username=${$page.props.auth.user.UserName}&password=${$page.props.auth.user.UserPassword}`\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :href=\"`generate/token/for/accomplishments`\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar-link", {
      'active': _ctx.$page.url === '/revision/0?source=sip'
    }]),
    href: "https://accomplishment.davaodeoro.gov.ph/login/authentication?username=".concat(_ctx.$page.props.auth.user.UserName, "&password=").concat(_ctx.$page.props.auth.user.UserPassword),
    target: "_blank",
    rel: "noopener noreferrer"
  }, _toConsumableArray(_cache[41] || (_cache[41] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span></span><span class=\"icon-holder\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 2h12v20H4z\"></path><path d=\"M6 6h8\"></path><path d=\"M6 10h8\"></path><circle cx=\"8\" cy=\"16\" r=\"2\"></circle></svg></span><span class=\"title\">Monthly Accomplishments</span>", 3)])), 10 /* CLASS, PROPS */, _hoisted_31)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item\">\r\n                    <a class=\"sidebar-link\" href=\"192.168.80.88/login/authentication?username=GingGing&password=fd2d9096fd18e9d5bc3d800ed3020546\" :class=\"{ 'active': $page.url === '/revision/0?source=sip' }\">\r\n                        <span></span>\r\n                        <span class=\"icon-holder\">\r\n\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n                                <path d=\"M4 2h12v20H4z\"/>\r\n                                <path d=\"M6 6h8\"/>\r\n                                <path d=\"M6 10h8\"/>\r\n                                <circle cx=\"8\" cy=\"16\" r=\"2\"/>\r\n                            </svg>\r\n                        </span>\r\n                        <span class=\"title\">Accomplishments</span>\r\n                    </a>\r\n                </li> ")])])]);
}

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* .bg-gradient-success {\r\n    background: linear-gradient(to right, #036219, #80f541);\r\n    /* border-radius: 10px;\r\n    /* Dark to light shade\r\n}\r\n\r\n.bg-gradient-danger {\r\n    background: linear-gradient(to right, #62030d, #ffb82a);\r\n    /* border-radius: 10px;\r\n    /* Dark to light shade\r\n}\r\n\r\n.bg-gradient-info {\r\n    background: linear-gradient(to right, #0031f7, #4cdfe7);\r\n    /* border-radius: 10px;\r\n}\r\n\r\n.bg-gradient-deleted {\r\n    background: linear-gradient(to right, #860202, #fb7676);\r\n    /* border-radius: 10px;\r\n} */\r\n\r\n/* Define corresponding classes for SweetAlert backgrounds */\n.bg-gradient-success.swal2-popup {\r\n    background: linear-gradient(to right, #036219, #80f541) !important;\n}\n.bg-gradient-danger.swal2-popup {\r\n    background: linear-gradient(to right, #62030d, #ffb82a) !important;\n}\n.bg-gradient-info.swal2-popup {\r\n    background: linear-gradient(to right, #0031f7, #4cdfe7) !important;\n}\n.bg-gradient-deleted.swal2-popup {\r\n    background: linear-gradient(to right, #860202, #fb7676) !important;\n}\r\n\r\n/* Define the text color class for SweetAlert dialogs */\n.swal2-title {\r\n    color: white !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_style_index_0_id_f2d83a72_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_style_index_0_id_f2d83a72_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_style_index_0_id_f2d83a72_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$"
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./AIP/Index": [
		"./resources/js/Pages/AIP/Index.vue",
		9,
		"resources_js_Pages_AIP_Index_vue"
	],
	"./AIP/Index.vue": [
		"./resources/js/Pages/AIP/Index.vue",
		9,
		"resources_js_Pages_AIP_Index_vue"
	],
	"./AIP/LBP_Form_2/Create": [
		"./resources/js/Pages/AIP/LBP_Form_2/Create.vue",
		9,
		"resources_js_Pages_AIP_LBP_Form_2_Create_vue"
	],
	"./AIP/LBP_Form_2/Create.vue": [
		"./resources/js/Pages/AIP/LBP_Form_2/Create.vue",
		9,
		"resources_js_Pages_AIP_LBP_Form_2_Create_vue"
	],
	"./AIP/LBP_Form_2/Index": [
		"./resources/js/Pages/AIP/LBP_Form_2/Index.vue",
		9,
		"resources_js_Pages_AIP_LBP_Form_2_Index_vue"
	],
	"./AIP/LBP_Form_2/Index.vue": [
		"./resources/js/Pages/AIP/LBP_Form_2/Index.vue",
		9,
		"resources_js_Pages_AIP_LBP_Form_2_Index_vue"
	],
	"./AIP_Code/AIP_IPPs/Index": [
		"./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue",
		9,
		"resources_js_Pages_AIP_Code_AIP_IPPs_Index_vue"
	],
	"./AIP_Code/AIP_IPPs/Index.vue": [
		"./resources/js/Pages/AIP_Code/AIP_IPPs/Index.vue",
		9,
		"resources_js_Pages_AIP_Code_AIP_IPPs_Index_vue"
	],
	"./AIP_Code/AIP_IPPs/IndexBackUp": [
		"./resources/js/Pages/AIP_Code/AIP_IPPs/IndexBackUp.vue",
		9,
		"resources_js_Pages_AIP_Code_AIP_IPPs_IndexBackUp_vue"
	],
	"./AIP_Code/AIP_IPPs/IndexBackUp.vue": [
		"./resources/js/Pages/AIP_Code/AIP_IPPs/IndexBackUp.vue",
		9,
		"resources_js_Pages_AIP_Code_AIP_IPPs_IndexBackUp_vue"
	],
	"./AIP_Code/Create": [
		"./resources/js/Pages/AIP_Code/Create.vue",
		9,
		"resources_js_Pages_AIP_Code_Create_vue"
	],
	"./AIP_Code/Create.vue": [
		"./resources/js/Pages/AIP_Code/Create.vue",
		9,
		"resources_js_Pages_AIP_Code_Create_vue"
	],
	"./AIP_Code/Index": [
		"./resources/js/Pages/AIP_Code/Index.vue",
		9,
		"resources_js_Pages_AIP_Code_Index_vue"
	],
	"./AIP_Code/Index.vue": [
		"./resources/js/Pages/AIP_Code/Index.vue",
		9,
		"resources_js_Pages_AIP_Code_Index_vue"
	],
	"./Accomplishments/Create": [
		"./resources/js/Pages/Accomplishments/Create.vue",
		9,
		"resources_js_Pages_Accomplishments_Create_vue"
	],
	"./Accomplishments/Create.vue": [
		"./resources/js/Pages/Accomplishments/Create.vue",
		9,
		"resources_js_Pages_Accomplishments_Create_vue"
	],
	"./Accomplishments/Index": [
		"./resources/js/Pages/Accomplishments/Index.vue",
		9,
		"resources_js_Pages_Accomplishments_Index_vue"
	],
	"./Accomplishments/Index.vue": [
		"./resources/js/Pages/Accomplishments/Index.vue",
		9,
		"resources_js_Pages_Accomplishments_Index_vue"
	],
	"./Accomplishments/ValidationModal": [
		"./resources/js/Pages/Accomplishments/ValidationModal.vue",
		9,
		"resources_js_Pages_Accomplishments_ValidationModal_vue"
	],
	"./Accomplishments/ValidationModal.vue": [
		"./resources/js/Pages/Accomplishments/ValidationModal.vue",
		9,
		"resources_js_Pages_Accomplishments_ValidationModal_vue"
	],
	"./Accomplishments2/Create": [
		"./resources/js/Pages/Accomplishments2/Create.vue",
		9,
		"resources_js_Pages_Accomplishments2_Create_vue"
	],
	"./Accomplishments2/Create.vue": [
		"./resources/js/Pages/Accomplishments2/Create.vue",
		9,
		"resources_js_Pages_Accomplishments2_Create_vue"
	],
	"./Accomplishments2/Create2": [
		"./resources/js/Pages/Accomplishments2/Create2.vue",
		9,
		"resources_js_Pages_Accomplishments2_Create2_vue"
	],
	"./Accomplishments2/Create2.vue": [
		"./resources/js/Pages/Accomplishments2/Create2.vue",
		9,
		"resources_js_Pages_Accomplishments2_Create2_vue"
	],
	"./Accomplishments2/Index": [
		"./resources/js/Pages/Accomplishments2/Index.vue",
		9,
		"resources_js_Pages_Accomplishments2_Index_vue"
	],
	"./Accomplishments2/Index.vue": [
		"./resources/js/Pages/Accomplishments2/Index.vue",
		9,
		"resources_js_Pages_Accomplishments2_Index_vue"
	],
	"./Accomplishments2/Index2Backup": [
		"./resources/js/Pages/Accomplishments2/Index2Backup.vue",
		9,
		"resources_js_Pages_Accomplishments2_Index2Backup_vue"
	],
	"./Accomplishments2/Index2Backup.vue": [
		"./resources/js/Pages/Accomplishments2/Index2Backup.vue",
		9,
		"resources_js_Pages_Accomplishments2_Index2Backup_vue"
	],
	"./Accomplishments2/IndexBackUp": [
		"./resources/js/Pages/Accomplishments2/IndexBackUp.vue",
		9,
		"resources_js_Pages_Accomplishments2_IndexBackUp_vue"
	],
	"./Accomplishments2/IndexBackUp.vue": [
		"./resources/js/Pages/Accomplishments2/IndexBackUp.vue",
		9,
		"resources_js_Pages_Accomplishments2_IndexBackUp_vue"
	],
	"./Accomplishments2/ValidationModal": [
		"./resources/js/Pages/Accomplishments2/ValidationModal.vue",
		9,
		"resources_js_Pages_Accomplishments2_ValidationModal_vue"
	],
	"./Accomplishments2/ValidationModal.vue": [
		"./resources/js/Pages/Accomplishments2/ValidationModal.vue",
		9,
		"resources_js_Pages_Accomplishments2_ValidationModal_vue"
	],
	"./Activities/Create": [
		"./resources/js/Pages/Activities/Create.vue",
		9,
		"resources_js_Pages_Activities_Create_vue"
	],
	"./Activities/Create.vue": [
		"./resources/js/Pages/Activities/Create.vue",
		9,
		"resources_js_Pages_Activities_Create_vue"
	],
	"./Activities/Index": [
		"./resources/js/Pages/Activities/Index.vue",
		9,
		"resources_js_Pages_Activities_Index_vue"
	],
	"./Activities/Index.vue": [
		"./resources/js/Pages/Activities/Index.vue",
		9,
		"resources_js_Pages_Activities_Index_vue"
	],
	"./AnnualInvestmentPlan/Appropriations/Create": [
		"./resources/js/Pages/AnnualInvestmentPlan/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_AnnualInvestmentPlan_Appropriations_Create_vue"
	],
	"./AnnualInvestmentPlan/Appropriations/Create.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_AnnualInvestmentPlan_Appropriations_Create_vue"
	],
	"./AnnualInvestmentPlan/Appropriations/Index": [
		"./resources/js/Pages/AnnualInvestmentPlan/Appropriations/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Appropriations_Index_vue"
	],
	"./AnnualInvestmentPlan/Appropriations/Index.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/Appropriations/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Appropriations_Index_vue"
	],
	"./AnnualInvestmentPlan/Create": [
		"./resources/js/Pages/AnnualInvestmentPlan/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_AnnualInvestmentPlan_Create_vue"
	],
	"./AnnualInvestmentPlan/Create.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_AnnualInvestmentPlan_Create_vue"
	],
	"./AnnualInvestmentPlan/ExpectedOutput/Create": [
		"./resources/js/Pages/AnnualInvestmentPlan/ExpectedOutput/Create.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_ExpectedOutput_Create_vue"
	],
	"./AnnualInvestmentPlan/ExpectedOutput/Create.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/ExpectedOutput/Create.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_ExpectedOutput_Create_vue"
	],
	"./AnnualInvestmentPlan/ExpectedOutput/Index": [
		"./resources/js/Pages/AnnualInvestmentPlan/ExpectedOutput/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_ExpectedOutput_Index_vue"
	],
	"./AnnualInvestmentPlan/ExpectedOutput/Index.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/ExpectedOutput/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_ExpectedOutput_Index_vue"
	],
	"./AnnualInvestmentPlan/Index": [
		"./resources/js/Pages/AnnualInvestmentPlan/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Index_vue"
	],
	"./AnnualInvestmentPlan/Index.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Index_vue"
	],
	"./AnnualInvestmentPlan/Institutional/Index": [
		"./resources/js/Pages/AnnualInvestmentPlan/Institutional/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Institutional_Index_vue"
	],
	"./AnnualInvestmentPlan/Institutional/Index.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/Institutional/Index.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_Institutional_Index_vue"
	],
	"./AnnualInvestmentPlan/OfficeAIPCode/Create": [
		"./resources/js/Pages/AnnualInvestmentPlan/OfficeAIPCode/Create.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_OfficeAIPCode_Create_vue"
	],
	"./AnnualInvestmentPlan/OfficeAIPCode/Create.vue": [
		"./resources/js/Pages/AnnualInvestmentPlan/OfficeAIPCode/Create.vue",
		9,
		"resources_js_Pages_AnnualInvestmentPlan_OfficeAIPCode_Create_vue"
	],
	"./Appropriations/Create": [
		"./resources/js/Pages/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Appropriations_Create_vue"
	],
	"./Appropriations/Create.vue": [
		"./resources/js/Pages/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Appropriations_Create_vue"
	],
	"./Appropriations/Index": [
		"./resources/js/Pages/Appropriations/Index.vue",
		9,
		"resources_js_Pages_Appropriations_Index_vue"
	],
	"./Appropriations/Index.vue": [
		"./resources/js/Pages/Appropriations/Index.vue",
		9,
		"resources_js_Pages_Appropriations_Index_vue"
	],
	"./Authentication/LogIn": [
		"./resources/js/Pages/Authentication/LogIn.vue",
		9,
		"resources_js_Pages_Authentication_LogIn_vue"
	],
	"./Authentication/LogIn.vue": [
		"./resources/js/Pages/Authentication/LogIn.vue",
		9,
		"resources_js_Pages_Authentication_LogIn_vue"
	],
	"./BudgetRequirement/Create": [
		"./resources/js/Pages/BudgetRequirement/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_BudgetRequirement_Create_vue"
	],
	"./BudgetRequirement/Create.vue": [
		"./resources/js/Pages/BudgetRequirement/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_BudgetRequirement_Create_vue"
	],
	"./BudgetRequirement/Index": [
		"./resources/js/Pages/BudgetRequirement/Index.vue",
		9,
		"resources_js_Pages_BudgetRequirement_Index_vue"
	],
	"./BudgetRequirement/Index.vue": [
		"./resources/js/Pages/BudgetRequirement/Index.vue",
		9,
		"resources_js_Pages_BudgetRequirement_Index_vue"
	],
	"./CashDisbursementForecast/Index": [
		"./resources/js/Pages/CashDisbursementForecast/Index.vue",
		9,
		"resources_js_Pages_CashDisbursementForecast_Index_vue"
	],
	"./CashDisbursementForecast/Index.vue": [
		"./resources/js/Pages/CashDisbursementForecast/Index.vue",
		9,
		"resources_js_Pages_CashDisbursementForecast_Index_vue"
	],
	"./ChiefAgenda/Appropriations/Create": [
		"./resources/js/Pages/ChiefAgenda/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_ChiefAgenda_Appropriations_Create_vue"
	],
	"./ChiefAgenda/Appropriations/Create.vue": [
		"./resources/js/Pages/ChiefAgenda/Appropriations/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_ChiefAgenda_Appropriations_Create_vue"
	],
	"./ChiefAgenda/Appropriations/Index": [
		"./resources/js/Pages/ChiefAgenda/Appropriations/Index.vue",
		9,
		"resources_js_Pages_ChiefAgenda_Appropriations_Index_vue"
	],
	"./ChiefAgenda/Appropriations/Index.vue": [
		"./resources/js/Pages/ChiefAgenda/Appropriations/Index.vue",
		9,
		"resources_js_Pages_ChiefAgenda_Appropriations_Index_vue"
	],
	"./ChiefAgenda/Index": [
		"./resources/js/Pages/ChiefAgenda/Index.vue",
		9,
		"resources_js_Pages_ChiefAgenda_Index_vue"
	],
	"./ChiefAgenda/Index.vue": [
		"./resources/js/Pages/ChiefAgenda/Index.vue",
		9,
		"resources_js_Pages_ChiefAgenda_Index_vue"
	],
	"./ChiefAgenda/addAgenda": [
		"./resources/js/Pages/ChiefAgenda/addAgenda.vue",
		9,
		"resources_js_Pages_ChiefAgenda_addAgenda_vue"
	],
	"./ChiefAgenda/addAgenda.vue": [
		"./resources/js/Pages/ChiefAgenda/addAgenda.vue",
		9,
		"resources_js_Pages_ChiefAgenda_addAgenda_vue"
	],
	"./DailyAccomplishment/Create": [
		"./resources/js/Pages/DailyAccomplishment/Create.vue",
		9,
		"resources_js_Pages_DailyAccomplishment_Create_vue"
	],
	"./DailyAccomplishment/Create.vue": [
		"./resources/js/Pages/DailyAccomplishment/Create.vue",
		9,
		"resources_js_Pages_DailyAccomplishment_Create_vue"
	],
	"./DailyAccomplishment/Index": [
		"./resources/js/Pages/DailyAccomplishment/Index.vue",
		9,
		"resources_js_Pages_DailyAccomplishment_Index_vue"
	],
	"./DailyAccomplishment/Index.vue": [
		"./resources/js/Pages/DailyAccomplishment/Index.vue",
		9,
		"resources_js_Pages_DailyAccomplishment_Index_vue"
	],
	"./Daily_Accomplishment/Direct": [
		"./resources/js/Pages/Daily_Accomplishment/Direct.vue",
		9,
		"resources_js_Pages_Daily_Accomplishment_Direct_vue"
	],
	"./Daily_Accomplishment/Direct.vue": [
		"./resources/js/Pages/Daily_Accomplishment/Direct.vue",
		9,
		"resources_js_Pages_Daily_Accomplishment_Direct_vue"
	],
	"./Division/Create": [
		"./resources/js/Pages/Division/Create.vue",
		9,
		"resources_js_Pages_Division_Create_vue"
	],
	"./Division/Create.vue": [
		"./resources/js/Pages/Division/Create.vue",
		9,
		"resources_js_Pages_Division_Create_vue"
	],
	"./Division/Index": [
		"./resources/js/Pages/Division/Index.vue",
		9,
		"resources_js_Pages_Division_Index_vue"
	],
	"./Division/Index.vue": [
		"./resources/js/Pages/Division/Index.vue",
		9,
		"resources_js_Pages_Division_Index_vue"
	],
	"./Division/Outputs/Create": [
		"./resources/js/Pages/Division/Outputs/Create.vue",
		9,
		"resources_js_Pages_Division_Outputs_Create_vue"
	],
	"./Division/Outputs/Create.vue": [
		"./resources/js/Pages/Division/Outputs/Create.vue",
		9,
		"resources_js_Pages_Division_Outputs_Create_vue"
	],
	"./Division/Outputs/Index": [
		"./resources/js/Pages/Division/Outputs/Index.vue",
		9,
		"resources_js_Pages_Division_Outputs_Index_vue"
	],
	"./Division/Outputs/Index.vue": [
		"./resources/js/Pages/Division/Outputs/Index.vue",
		9,
		"resources_js_Pages_Division_Outputs_Index_vue"
	],
	"./ELA/Create": [
		"./resources/js/Pages/ELA/Create.vue",
		9,
		"resources_js_Pages_ELA_Create_vue"
	],
	"./ELA/Create.vue": [
		"./resources/js/Pages/ELA/Create.vue",
		9,
		"resources_js_Pages_ELA_Create_vue"
	],
	"./ELA/Index": [
		"./resources/js/Pages/ELA/Index.vue",
		9,
		"resources_js_Pages_ELA_Index_vue"
	],
	"./ELA/Index.vue": [
		"./resources/js/Pages/ELA/Index.vue",
		9,
		"resources_js_Pages_ELA_Index_vue"
	],
	"./EconomicAgenda/Index": [
		"./resources/js/Pages/EconomicAgenda/Index.vue",
		9,
		"resources_js_Pages_EconomicAgenda_Index_vue"
	],
	"./EconomicAgenda/Index.vue": [
		"./resources/js/Pages/EconomicAgenda/Index.vue",
		9,
		"resources_js_Pages_EconomicAgenda_Index_vue"
	],
	"./EconomicAgenda/addAgenda": [
		"./resources/js/Pages/EconomicAgenda/addAgenda.vue",
		9,
		"resources_js_Pages_EconomicAgenda_addAgenda_vue"
	],
	"./EconomicAgenda/addAgenda.vue": [
		"./resources/js/Pages/EconomicAgenda/addAgenda.vue",
		9,
		"resources_js_Pages_EconomicAgenda_addAgenda_vue"
	],
	"./EvaluationMechanismTool/Create": [
		"./resources/js/Pages/EvaluationMechanismTool/Create.vue",
		9,
		"resources_js_Pages_EvaluationMechanismTool_Create_vue"
	],
	"./EvaluationMechanismTool/Create.vue": [
		"./resources/js/Pages/EvaluationMechanismTool/Create.vue",
		9,
		"resources_js_Pages_EvaluationMechanismTool_Create_vue"
	],
	"./EvaluationMechanismTool/Index": [
		"./resources/js/Pages/EvaluationMechanismTool/Index.vue",
		9,
		"resources_js_Pages_EvaluationMechanismTool_Index_vue"
	],
	"./EvaluationMechanismTool/Index.vue": [
		"./resources/js/Pages/EvaluationMechanismTool/Index.vue",
		9,
		"resources_js_Pages_EvaluationMechanismTool_Index_vue"
	],
	"./ExpectedOutcomeRevised/Create": [
		"./resources/js/Pages/ExpectedOutcomeRevised/Create.vue",
		9,
		"resources_js_Pages_ExpectedOutcomeRevised_Create_vue"
	],
	"./ExpectedOutcomeRevised/Create.vue": [
		"./resources/js/Pages/ExpectedOutcomeRevised/Create.vue",
		9,
		"resources_js_Pages_ExpectedOutcomeRevised_Create_vue"
	],
	"./ExpectedOutcomeRevised/Index": [
		"./resources/js/Pages/ExpectedOutcomeRevised/Index.vue",
		9,
		"resources_js_Pages_ExpectedOutcomeRevised_Index_vue"
	],
	"./ExpectedOutcomeRevised/Index.vue": [
		"./resources/js/Pages/ExpectedOutcomeRevised/Index.vue",
		9,
		"resources_js_Pages_ExpectedOutcomeRevised_Index_vue"
	],
	"./ExpectedOutputRevised/Create": [
		"./resources/js/Pages/ExpectedOutputRevised/Create.vue",
		9,
		"resources_js_Pages_ExpectedOutputRevised_Create_vue"
	],
	"./ExpectedOutputRevised/Create.vue": [
		"./resources/js/Pages/ExpectedOutputRevised/Create.vue",
		9,
		"resources_js_Pages_ExpectedOutputRevised_Create_vue"
	],
	"./ExpectedOutputRevised/Index": [
		"./resources/js/Pages/ExpectedOutputRevised/Index.vue",
		9,
		"resources_js_Pages_ExpectedOutputRevised_Index_vue"
	],
	"./ExpectedOutputRevised/Index.vue": [
		"./resources/js/Pages/ExpectedOutputRevised/Index.vue",
		9,
		"resources_js_Pages_ExpectedOutputRevised_Index_vue"
	],
	"./Forbidden/Index": [
		"./resources/js/Pages/Forbidden/Index.vue",
		9,
		"resources_js_Pages_Forbidden_Index_vue"
	],
	"./Forbidden/Index.vue": [
		"./resources/js/Pages/Forbidden/Index.vue",
		9,
		"resources_js_Pages_Forbidden_Index_vue"
	],
	"./HPCR/Create": [
		"./resources/js/Pages/HPCR/Create.vue",
		9,
		"resources_js_Pages_HPCR_Create_vue"
	],
	"./HPCR/Create.vue": [
		"./resources/js/Pages/HPCR/Create.vue",
		9,
		"resources_js_Pages_HPCR_Create_vue"
	],
	"./HPCR/Index": [
		"./resources/js/Pages/HPCR/Index.vue",
		9,
		"resources_js_Pages_HPCR_Index_vue"
	],
	"./HPCR/Index.vue": [
		"./resources/js/Pages/HPCR/Index.vue",
		9,
		"resources_js_Pages_HPCR_Index_vue"
	],
	"./HPCR_Division/Create": [
		"./resources/js/Pages/HPCR_Division/Create.vue",
		9,
		"resources_js_Pages_HPCR_Division_Create_vue"
	],
	"./HPCR_Division/Create.vue": [
		"./resources/js/Pages/HPCR_Division/Create.vue",
		9,
		"resources_js_Pages_HPCR_Division_Create_vue"
	],
	"./HPCR_Division/Index": [
		"./resources/js/Pages/HPCR_Division/Index.vue",
		9,
		"resources_js_Pages_HPCR_Division_Index_vue"
	],
	"./HPCR_Division/Index.vue": [
		"./resources/js/Pages/HPCR_Division/Index.vue",
		9,
		"resources_js_Pages_HPCR_Division_Index_vue"
	],
	"./HPCR_Individual/Create": [
		"./resources/js/Pages/HPCR_Individual/Create.vue",
		9,
		"resources_js_Pages_HPCR_Individual_Create_vue"
	],
	"./HPCR_Individual/Create.vue": [
		"./resources/js/Pages/HPCR_Individual/Create.vue",
		9,
		"resources_js_Pages_HPCR_Individual_Create_vue"
	],
	"./HPCR_Individual/Index": [
		"./resources/js/Pages/HPCR_Individual/Index.vue",
		9,
		"resources_js_Pages_HPCR_Individual_Index_vue"
	],
	"./HPCR_Individual/Index.vue": [
		"./resources/js/Pages/HPCR_Individual/Index.vue",
		9,
		"resources_js_Pages_HPCR_Individual_Index_vue"
	],
	"./HPCR_Section/Create": [
		"./resources/js/Pages/HPCR_Section/Create.vue",
		9,
		"resources_js_Pages_HPCR_Section_Create_vue"
	],
	"./HPCR_Section/Create.vue": [
		"./resources/js/Pages/HPCR_Section/Create.vue",
		9,
		"resources_js_Pages_HPCR_Section_Create_vue"
	],
	"./HPCR_Section/Index": [
		"./resources/js/Pages/HPCR_Section/Index.vue",
		9,
		"resources_js_Pages_HPCR_Section_Index_vue"
	],
	"./HPCR_Section/Index.vue": [
		"./resources/js/Pages/HPCR_Section/Index.vue",
		9,
		"resources_js_Pages_HPCR_Section_Index_vue"
	],
	"./Home": [
		"./resources/js/Pages/Home.vue",
		9,
		"resources_js_Pages_Home_vue"
	],
	"./Home.vue": [
		"./resources/js/Pages/Home.vue",
		9,
		"resources_js_Pages_Home_vue"
	],
	"./IPCR/Index": [
		"./resources/js/Pages/IPCR/Index.vue",
		9,
		"resources_js_Pages_IPCR_Index_vue"
	],
	"./IPCR/Index.vue": [
		"./resources/js/Pages/IPCR/Index.vue",
		9,
		"resources_js_Pages_IPCR_Index_vue"
	],
	"./Implementation/Create": [
		"./resources/js/Pages/Implementation/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_vue"
	],
	"./Implementation/Create.vue": [
		"./resources/js/Pages/Implementation/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_vue"
	],
	"./Implementation/Create_A": [
		"./resources/js/Pages/Implementation/Create_A.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_A_vue"
	],
	"./Implementation/Create_A.vue": [
		"./resources/js/Pages/Implementation/Create_A.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_Implementation_Create_A_vue"
	],
	"./Implementation/Index": [
		"./resources/js/Pages/Implementation/Index.vue",
		9,
		"resources_js_Pages_Implementation_Index_vue"
	],
	"./Implementation/Index.vue": [
		"./resources/js/Pages/Implementation/Index.vue",
		9,
		"resources_js_Pages_Implementation_Index_vue"
	],
	"./ImplementationPlan/Strategy/Create": [
		"./resources/js/Pages/ImplementationPlan/Strategy/Create.vue",
		9,
		"resources_js_Pages_ImplementationPlan_Strategy_Create_vue"
	],
	"./ImplementationPlan/Strategy/Create.vue": [
		"./resources/js/Pages/ImplementationPlan/Strategy/Create.vue",
		9,
		"resources_js_Pages_ImplementationPlan_Strategy_Create_vue"
	],
	"./ImplementationPlan/Strategy/Index": [
		"./resources/js/Pages/ImplementationPlan/Strategy/Index.vue",
		9,
		"resources_js_Pages_ImplementationPlan_Strategy_Index_vue"
	],
	"./ImplementationPlan/Strategy/Index.vue": [
		"./resources/js/Pages/ImplementationPlan/Strategy/Index.vue",
		9,
		"resources_js_Pages_ImplementationPlan_Strategy_Index_vue"
	],
	"./ImplementingTeam/Create": [
		"./resources/js/Pages/ImplementingTeam/Create.vue",
		9,
		"resources_js_Pages_ImplementingTeam_Create_vue"
	],
	"./ImplementingTeam/Create.vue": [
		"./resources/js/Pages/ImplementingTeam/Create.vue",
		9,
		"resources_js_Pages_ImplementingTeam_Create_vue"
	],
	"./ImplementingTeam/Index": [
		"./resources/js/Pages/ImplementingTeam/Index.vue",
		9,
		"resources_js_Pages_ImplementingTeam_Index_vue"
	],
	"./ImplementingTeam/Index.vue": [
		"./resources/js/Pages/ImplementingTeam/Index.vue",
		9,
		"resources_js_Pages_ImplementingTeam_Index_vue"
	],
	"./ImplementingTeamRevision/Create": [
		"./resources/js/Pages/ImplementingTeamRevision/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_ImplementingTeamRevision_Create_vue"
	],
	"./ImplementingTeamRevision/Create.vue": [
		"./resources/js/Pages/ImplementingTeamRevision/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_ImplementingTeamRevision_Create_vue"
	],
	"./ImplementingTeamRevision/Index": [
		"./resources/js/Pages/ImplementingTeamRevision/Index.vue",
		9,
		"resources_js_Pages_ImplementingTeamRevision_Index_vue"
	],
	"./ImplementingTeamRevision/Index.vue": [
		"./resources/js/Pages/ImplementingTeamRevision/Index.vue",
		9,
		"resources_js_Pages_ImplementingTeamRevision_Index_vue"
	],
	"./Indicators/Create": [
		"./resources/js/Pages/Indicators/Create.vue",
		9,
		"resources_js_Pages_Indicators_Create_vue"
	],
	"./Indicators/Create.vue": [
		"./resources/js/Pages/Indicators/Create.vue",
		9,
		"resources_js_Pages_Indicators_Create_vue"
	],
	"./Indicators/Index": [
		"./resources/js/Pages/Indicators/Index.vue",
		9,
		"resources_js_Pages_Indicators_Index_vue"
	],
	"./Indicators/Index.vue": [
		"./resources/js/Pages/Indicators/Index.vue",
		9,
		"resources_js_Pages_Indicators_Index_vue"
	],
	"./IndividualOutputs/Create": [
		"./resources/js/Pages/IndividualOutputs/Create.vue",
		9,
		"resources_js_Pages_IndividualOutputs_Create_vue"
	],
	"./IndividualOutputs/Create.vue": [
		"./resources/js/Pages/IndividualOutputs/Create.vue",
		9,
		"resources_js_Pages_IndividualOutputs_Create_vue"
	],
	"./IndividualOutputs/Index": [
		"./resources/js/Pages/IndividualOutputs/Index.vue",
		9,
		"resources_js_Pages_IndividualOutputs_Index_vue"
	],
	"./IndividualOutputs/Index.vue": [
		"./resources/js/Pages/IndividualOutputs/Index.vue",
		9,
		"resources_js_Pages_IndividualOutputs_Index_vue"
	],
	"./InterOutcome/Create": [
		"./resources/js/Pages/InterOutcome/Create.vue",
		9,
		"resources_js_Pages_InterOutcome_Create_vue"
	],
	"./InterOutcome/Create.vue": [
		"./resources/js/Pages/InterOutcome/Create.vue",
		9,
		"resources_js_Pages_InterOutcome_Create_vue"
	],
	"./InterOutcome/Index": [
		"./resources/js/Pages/InterOutcome/Index.vue",
		9,
		"resources_js_Pages_InterOutcome_Index_vue"
	],
	"./InterOutcome/Index.vue": [
		"./resources/js/Pages/InterOutcome/Index.vue",
		9,
		"resources_js_Pages_InterOutcome_Index_vue"
	],
	"./Issues/Create": [
		"./resources/js/Pages/Issues/Create.vue",
		9,
		"resources_js_Pages_Issues_Create_vue"
	],
	"./Issues/Create.vue": [
		"./resources/js/Pages/Issues/Create.vue",
		9,
		"resources_js_Pages_Issues_Create_vue"
	],
	"./Issues/Index": [
		"./resources/js/Pages/Issues/Index.vue",
		9,
		"resources_js_Pages_Issues_Index_vue"
	],
	"./Issues/Index.vue": [
		"./resources/js/Pages/Issues/Index.vue",
		9,
		"resources_js_Pages_Issues_Index_vue"
	],
	"./LogFrame/Index": [
		"./resources/js/Pages/LogFrame/Index.vue",
		9,
		"resources_js_Pages_LogFrame_Index_vue"
	],
	"./LogFrame/Index.vue": [
		"./resources/js/Pages/LogFrame/Index.vue",
		9,
		"resources_js_Pages_LogFrame_Index_vue"
	],
	"./LogFrame/logframe": [
		"./resources/js/Pages/LogFrame/logframe.vue",
		9,
		"resources_js_Pages_LogFrame_logframe_vue"
	],
	"./LogFrame/logframe.vue": [
		"./resources/js/Pages/LogFrame/logframe.vue",
		9,
		"resources_js_Pages_LogFrame_logframe_vue"
	],
	"./MFOs/Create": [
		"./resources/js/Pages/MFOs/Create.vue",
		9,
		"resources_js_Pages_MFOs_Create_vue"
	],
	"./MFOs/Create.vue": [
		"./resources/js/Pages/MFOs/Create.vue",
		9,
		"resources_js_Pages_MFOs_Create_vue"
	],
	"./MFOs/Direct": [
		"./resources/js/Pages/MFOs/Direct.vue",
		9,
		"resources_js_Pages_MFOs_Direct_vue"
	],
	"./MFOs/Direct.vue": [
		"./resources/js/Pages/MFOs/Direct.vue",
		9,
		"resources_js_Pages_MFOs_Direct_vue"
	],
	"./MFOs/Index": [
		"./resources/js/Pages/MFOs/Index.vue",
		9,
		"resources_js_Pages_MFOs_Index_vue"
	],
	"./MFOs/Index.vue": [
		"./resources/js/Pages/MFOs/Index.vue",
		9,
		"resources_js_Pages_MFOs_Index_vue"
	],
	"./MFOs/SubMFO/Create": [
		"./resources/js/Pages/MFOs/SubMFO/Create.vue",
		9,
		"resources_js_Pages_MFOs_SubMFO_Create_vue"
	],
	"./MFOs/SubMFO/Create.vue": [
		"./resources/js/Pages/MFOs/SubMFO/Create.vue",
		9,
		"resources_js_Pages_MFOs_SubMFO_Create_vue"
	],
	"./MFOs/SubMFO/Direct": [
		"./resources/js/Pages/MFOs/SubMFO/Direct.vue",
		9,
		"resources_js_Pages_MFOs_SubMFO_Direct_vue"
	],
	"./MFOs/SubMFO/Direct.vue": [
		"./resources/js/Pages/MFOs/SubMFO/Direct.vue",
		9,
		"resources_js_Pages_MFOs_SubMFO_Direct_vue"
	],
	"./Manual/Index": [
		"./resources/js/Pages/Manual/Index.vue",
		9,
		"resources_js_Pages_Manual_Index_vue"
	],
	"./Manual/Index.vue": [
		"./resources/js/Pages/Manual/Index.vue",
		9,
		"resources_js_Pages_Manual_Index_vue"
	],
	"./Monitoring/Create": [
		"./resources/js/Pages/Monitoring/Create.vue",
		9,
		"resources_js_Pages_Monitoring_Create_vue"
	],
	"./Monitoring/Create.vue": [
		"./resources/js/Pages/Monitoring/Create.vue",
		9,
		"resources_js_Pages_Monitoring_Create_vue"
	],
	"./Monitoring/Index": [
		"./resources/js/Pages/Monitoring/Index.vue",
		9,
		"resources_js_Pages_Monitoring_Index_vue"
	],
	"./Monitoring/Index.vue": [
		"./resources/js/Pages/Monitoring/Index.vue",
		9,
		"resources_js_Pages_Monitoring_Index_vue"
	],
	"./NotFound/Index": [
		"./resources/js/Pages/NotFound/Index.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_NotFound_Index_vue"
	],
	"./NotFound/Index.vue": [
		"./resources/js/Pages/NotFound/Index.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_NotFound_Index_vue"
	],
	"./NotFound/dribbble_1.gif": [
		"./resources/js/Pages/NotFound/dribbble_1.gif",
		9,
		"resources_js_Pages_NotFound_dribbble_1_gif"
	],
	"./NotFound/not_found.jpg": [
		"./resources/js/Pages/NotFound/not_found.jpg",
		9,
		"resources_js_Pages_NotFound_not_found_jpg"
	],
	"./OPCR/Accomplishment/Create": [
		"./resources/js/Pages/OPCR/Accomplishment/Create.vue",
		9,
		"resources_js_Pages_OPCR_Accomplishment_Create_vue"
	],
	"./OPCR/Accomplishment/Create.vue": [
		"./resources/js/Pages/OPCR/Accomplishment/Create.vue",
		9,
		"resources_js_Pages_OPCR_Accomplishment_Create_vue"
	],
	"./OPCR/Accomplishment/Index": [
		"./resources/js/Pages/OPCR/Accomplishment/Index.vue",
		9,
		"resources_js_Pages_OPCR_Accomplishment_Index_vue"
	],
	"./OPCR/Accomplishment/Index.vue": [
		"./resources/js/Pages/OPCR/Accomplishment/Index.vue",
		9,
		"resources_js_Pages_OPCR_Accomplishment_Index_vue"
	],
	"./OPCR/Form/Create": [
		"./resources/js/Pages/OPCR/Form/Create.vue",
		9,
		"resources_js_Pages_OPCR_Form_Create_vue"
	],
	"./OPCR/Form/Create.vue": [
		"./resources/js/Pages/OPCR/Form/Create.vue",
		9,
		"resources_js_Pages_OPCR_Form_Create_vue"
	],
	"./OPCR/Form/Index": [
		"./resources/js/Pages/OPCR/Form/Index.vue",
		9,
		"resources_js_Pages_OPCR_Form_Index_vue"
	],
	"./OPCR/Form/Index.vue": [
		"./resources/js/Pages/OPCR/Form/Index.vue",
		9,
		"resources_js_Pages_OPCR_Form_Index_vue"
	],
	"./OPCR/Form/Index2": [
		"./resources/js/Pages/OPCR/Form/Index2.vue",
		9,
		"resources_js_Pages_OPCR_Form_Index2_vue"
	],
	"./OPCR/Form/Index2.vue": [
		"./resources/js/Pages/OPCR/Form/Index2.vue",
		9,
		"resources_js_Pages_OPCR_Form_Index2_vue"
	],
	"./OPCR/Form/Print": [
		"./resources/js/Pages/OPCR/Form/Print.vue",
		9,
		"resources_js_Pages_OPCR_Form_Print_vue"
	],
	"./OPCR/Form/Print.vue": [
		"./resources/js/Pages/OPCR/Form/Print.vue",
		9,
		"resources_js_Pages_OPCR_Form_Print_vue"
	],
	"./OPCR/Index": [
		"./resources/js/Pages/OPCR/Index.vue",
		9,
		"resources_js_Pages_OPCR_Index_vue"
	],
	"./OPCR/Index.vue": [
		"./resources/js/Pages/OPCR/Index.vue",
		9,
		"resources_js_Pages_OPCR_Index_vue"
	],
	"./OPCR/List/Create": [
		"./resources/js/Pages/OPCR/List/Create.vue",
		9,
		"resources_js_Pages_OPCR_List_Create_vue"
	],
	"./OPCR/List/Create.vue": [
		"./resources/js/Pages/OPCR/List/Create.vue",
		9,
		"resources_js_Pages_OPCR_List_Create_vue"
	],
	"./OPCR/List/Index": [
		"./resources/js/Pages/OPCR/List/Index.vue",
		9,
		"resources_js_Pages_OPCR_List_Index_vue"
	],
	"./OPCR/List/Index.vue": [
		"./resources/js/Pages/OPCR/List/Index.vue",
		9,
		"resources_js_Pages_OPCR_List_Index_vue"
	],
	"./OPCR/OPCR": [
		"./resources/js/Pages/OPCR/OPCR.vue",
		9,
		"resources_js_Pages_OPCR_OPCR_vue"
	],
	"./OPCR/OPCR.vue": [
		"./resources/js/Pages/OPCR/OPCR.vue",
		9,
		"resources_js_Pages_OPCR_OPCR_vue"
	],
	"./OPCR/Target/Create": [
		"./resources/js/Pages/OPCR/Target/Create.vue",
		9,
		"resources_js_Pages_OPCR_Target_Create_vue"
	],
	"./OPCR/Target/Create.vue": [
		"./resources/js/Pages/OPCR/Target/Create.vue",
		9,
		"resources_js_Pages_OPCR_Target_Create_vue"
	],
	"./OPCR/Target/Index": [
		"./resources/js/Pages/OPCR/Target/Index.vue",
		9,
		"resources_js_Pages_OPCR_Target_Index_vue"
	],
	"./OPCR/Target/Index.vue": [
		"./resources/js/Pages/OPCR/Target/Index.vue",
		9,
		"resources_js_Pages_OPCR_Target_Index_vue"
	],
	"./OPCR/Target/New/Index": [
		"./resources/js/Pages/OPCR/Target/New/Index.vue",
		9,
		"resources_js_Pages_OPCR_Target_New_Index_vue"
	],
	"./OPCR/Target/New/Index.vue": [
		"./resources/js/Pages/OPCR/Target/New/Index.vue",
		9,
		"resources_js_Pages_OPCR_Target_New_Index_vue"
	],
	"./OPCR/TargetBudget/Create": [
		"./resources/js/Pages/OPCR/TargetBudget/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_OPCR_TargetBudget_Create_vue"
	],
	"./OPCR/TargetBudget/Create.vue": [
		"./resources/js/Pages/OPCR/TargetBudget/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_OPCR_TargetBudget_Create_vue"
	],
	"./OPCR/TargetBudget/CreateBackup": [
		"./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_OPCR_TargetBudget_CreateBackup_vue"
	],
	"./OPCR/TargetBudget/CreateBackup.vue": [
		"./resources/js/Pages/OPCR/TargetBudget/CreateBackup.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_OPCR_TargetBudget_CreateBackup_vue"
	],
	"./OPCR/TargetBudget/Index": [
		"./resources/js/Pages/OPCR/TargetBudget/Index.vue",
		9,
		"resources_js_Pages_OPCR_TargetBudget_Index_vue"
	],
	"./OPCR/TargetBudget/Index.vue": [
		"./resources/js/Pages/OPCR/TargetBudget/Index.vue",
		9,
		"resources_js_Pages_OPCR_TargetBudget_Index_vue"
	],
	"./OPCRPaps/Create": [
		"./resources/js/Pages/OPCRPaps/Create.vue",
		9,
		"resources_js_Pages_OPCRPaps_Create_vue"
	],
	"./OPCRPaps/Create.vue": [
		"./resources/js/Pages/OPCRPaps/Create.vue",
		9,
		"resources_js_Pages_OPCRPaps_Create_vue"
	],
	"./OPCRPaps/Direct": [
		"./resources/js/Pages/OPCRPaps/Direct.vue",
		9,
		"resources_js_Pages_OPCRPaps_Direct_vue"
	],
	"./OPCRPaps/Direct.vue": [
		"./resources/js/Pages/OPCRPaps/Direct.vue",
		9,
		"resources_js_Pages_OPCRPaps_Direct_vue"
	],
	"./OfficeAccountable/Create": [
		"./resources/js/Pages/OfficeAccountable/Create.vue",
		9,
		"resources_js_Pages_OfficeAccountable_Create_vue"
	],
	"./OfficeAccountable/Create.vue": [
		"./resources/js/Pages/OfficeAccountable/Create.vue",
		9,
		"resources_js_Pages_OfficeAccountable_Create_vue"
	],
	"./OfficeAccountable/Index": [
		"./resources/js/Pages/OfficeAccountable/Index.vue",
		9,
		"resources_js_Pages_OfficeAccountable_Index_vue"
	],
	"./OfficeAccountable/Index.vue": [
		"./resources/js/Pages/OfficeAccountable/Index.vue",
		9,
		"resources_js_Pages_OfficeAccountable_Index_vue"
	],
	"./OpcrTracking/Ratings": [
		"./resources/js/Pages/OpcrTracking/Ratings.vue",
		9,
		"resources_js_Pages_OpcrTracking_Ratings_vue"
	],
	"./OpcrTracking/Ratings.vue": [
		"./resources/js/Pages/OpcrTracking/Ratings.vue",
		9,
		"resources_js_Pages_OpcrTracking_Ratings_vue"
	],
	"./OpcrTracking/Targets": [
		"./resources/js/Pages/OpcrTracking/Targets.vue",
		9,
		"resources_js_Pages_OpcrTracking_Targets_vue"
	],
	"./OpcrTracking/Targets.vue": [
		"./resources/js/Pages/OpcrTracking/Targets.vue",
		9,
		"resources_js_Pages_OpcrTracking_Targets_vue"
	],
	"./Organizational/Index": [
		"./resources/js/Pages/Organizational/Index.vue",
		9,
		"resources_js_Pages_Organizational_Index_vue"
	],
	"./Organizational/Index.vue": [
		"./resources/js/Pages/Organizational/Index.vue",
		9,
		"resources_js_Pages_Organizational_Index_vue"
	],
	"./Organizational/addOrganizational": [
		"./resources/js/Pages/Organizational/addOrganizational.vue",
		9,
		"resources_js_Pages_Organizational_addOrganizational_vue"
	],
	"./Organizational/addOrganizational.vue": [
		"./resources/js/Pages/Organizational/addOrganizational.vue",
		9,
		"resources_js_Pages_Organizational_addOrganizational_vue"
	],
	"./Outcome/Create": [
		"./resources/js/Pages/Outcome/Create.vue",
		9,
		"resources_js_Pages_Outcome_Create_vue"
	],
	"./Outcome/Create.vue": [
		"./resources/js/Pages/Outcome/Create.vue",
		9,
		"resources_js_Pages_Outcome_Create_vue"
	],
	"./Outcome/Index": [
		"./resources/js/Pages/Outcome/Index.vue",
		9,
		"resources_js_Pages_Outcome_Index_vue"
	],
	"./Outcome/Index.vue": [
		"./resources/js/Pages/Outcome/Index.vue",
		9,
		"resources_js_Pages_Outcome_Index_vue"
	],
	"./Outputs/Create": [
		"./resources/js/Pages/Outputs/Create.vue",
		9,
		"resources_js_Pages_Outputs_Create_vue"
	],
	"./Outputs/Create.vue": [
		"./resources/js/Pages/Outputs/Create.vue",
		9,
		"resources_js_Pages_Outputs_Create_vue"
	],
	"./Outputs/Index": [
		"./resources/js/Pages/Outputs/Index.vue",
		9,
		"resources_js_Pages_Outputs_Index_vue"
	],
	"./Outputs/Index.vue": [
		"./resources/js/Pages/Outputs/Index.vue",
		9,
		"resources_js_Pages_Outputs_Index_vue"
	],
	"./PAPS/Create": [
		"./resources/js/Pages/PAPS/Create.vue",
		9,
		"resources_js_Pages_PAPS_Create_vue"
	],
	"./PAPS/Create.vue": [
		"./resources/js/Pages/PAPS/Create.vue",
		9,
		"resources_js_Pages_PAPS_Create_vue"
	],
	"./PAPS/Direct": [
		"./resources/js/Pages/PAPS/Direct.vue",
		9,
		"resources_js_Pages_PAPS_Direct_vue"
	],
	"./PAPS/Direct.vue": [
		"./resources/js/Pages/PAPS/Direct.vue",
		9,
		"resources_js_Pages_PAPS_Direct_vue"
	],
	"./PAPS/Index": [
		"./resources/js/Pages/PAPS/Index.vue",
		9,
		"resources_js_Pages_PAPS_Index_vue"
	],
	"./PAPS/Index.vue": [
		"./resources/js/Pages/PAPS/Index.vue",
		9,
		"resources_js_Pages_PAPS_Index_vue"
	],
	"./Performance/Create": [
		"./resources/js/Pages/Performance/Create.vue",
		9,
		"resources_js_Pages_Performance_Create_vue"
	],
	"./Performance/Create.vue": [
		"./resources/js/Pages/Performance/Create.vue",
		9,
		"resources_js_Pages_Performance_Create_vue"
	],
	"./Performance/Index": [
		"./resources/js/Pages/Performance/Index.vue",
		9,
		"resources_js_Pages_Performance_Index_vue"
	],
	"./Performance/Index.vue": [
		"./resources/js/Pages/Performance/Index.vue",
		9,
		"resources_js_Pages_Performance_Index_vue"
	],
	"./Places": [
		"./resources/js/Pages/Places.vue",
		9,
		"resources_js_Pages_Places_vue"
	],
	"./Places.vue": [
		"./resources/js/Pages/Places.vue",
		9,
		"resources_js_Pages_Places_vue"
	],
	"./Poles/Index": [
		"./resources/js/Pages/Poles/Index.vue",
		9,
		"resources_js_Pages_Poles_Index_vue"
	],
	"./Poles/Index.vue": [
		"./resources/js/Pages/Poles/Index.vue",
		9,
		"resources_js_Pages_Poles_Index_vue"
	],
	"./Posts/Index": [
		"./resources/js/Pages/Posts/Index.vue",
		9,
		"resources_js_Pages_Posts_Index_vue"
	],
	"./Posts/Index.vue": [
		"./resources/js/Pages/Posts/Index.vue",
		9,
		"resources_js_Pages_Posts_Index_vue"
	],
	"./ProjectProfile/Create": [
		"./resources/js/Pages/ProjectProfile/Create.vue",
		9,
		"resources_js_Pages_ProjectProfile_Create_vue"
	],
	"./ProjectProfile/Create.vue": [
		"./resources/js/Pages/ProjectProfile/Create.vue",
		9,
		"resources_js_Pages_ProjectProfile_Create_vue"
	],
	"./ProjectProfile/Index": [
		"./resources/js/Pages/ProjectProfile/Index.vue",
		9,
		"resources_js_Pages_ProjectProfile_Index_vue"
	],
	"./ProjectProfile/Index.vue": [
		"./resources/js/Pages/ProjectProfile/Index.vue",
		9,
		"resources_js_Pages_ProjectProfile_Index_vue"
	],
	"./ProjectProfile/Strategies/Create": [
		"./resources/js/Pages/ProjectProfile/Strategies/Create.vue",
		9,
		"resources_js_Pages_ProjectProfile_Strategies_Create_vue"
	],
	"./ProjectProfile/Strategies/Create.vue": [
		"./resources/js/Pages/ProjectProfile/Strategies/Create.vue",
		9,
		"resources_js_Pages_ProjectProfile_Strategies_Create_vue"
	],
	"./Quality/Create": [
		"./resources/js/Pages/Quality/Create.vue",
		9,
		"resources_js_Pages_Quality_Create_vue"
	],
	"./Quality/Create.vue": [
		"./resources/js/Pages/Quality/Create.vue",
		9,
		"resources_js_Pages_Quality_Create_vue"
	],
	"./Quality/Index": [
		"./resources/js/Pages/Quality/Index.vue",
		9,
		"resources_js_Pages_Quality_Index_vue"
	],
	"./Quality/Index.vue": [
		"./resources/js/Pages/Quality/Index.vue",
		9,
		"resources_js_Pages_Quality_Index_vue"
	],
	"./QualityRemarks/Create": [
		"./resources/js/Pages/QualityRemarks/Create.vue",
		9,
		"resources_js_Pages_QualityRemarks_Create_vue"
	],
	"./QualityRemarks/Create.vue": [
		"./resources/js/Pages/QualityRemarks/Create.vue",
		9,
		"resources_js_Pages_QualityRemarks_Create_vue"
	],
	"./QualityRemarks/Index": [
		"./resources/js/Pages/QualityRemarks/Index.vue",
		9,
		"resources_js_Pages_QualityRemarks_Index_vue"
	],
	"./QualityRemarks/Index.vue": [
		"./resources/js/Pages/QualityRemarks/Index.vue",
		9,
		"resources_js_Pages_QualityRemarks_Index_vue"
	],
	"./RAAO/Index": [
		"./resources/js/Pages/RAAO/Index.vue",
		9,
		"resources_js_Pages_RAAO_Index_vue"
	],
	"./RAAO/Index.vue": [
		"./resources/js/Pages/RAAO/Index.vue",
		9,
		"resources_js_Pages_RAAO_Index_vue"
	],
	"./Rating/Create": [
		"./resources/js/Pages/Rating/Create.vue",
		9,
		"resources_js_Pages_Rating_Create_vue"
	],
	"./Rating/Create.vue": [
		"./resources/js/Pages/Rating/Create.vue",
		9,
		"resources_js_Pages_Rating_Create_vue"
	],
	"./Rating/Index": [
		"./resources/js/Pages/Rating/Index.vue",
		9,
		"resources_js_Pages_Rating_Index_vue"
	],
	"./Rating/Index.vue": [
		"./resources/js/Pages/Rating/Index.vue",
		9,
		"resources_js_Pages_Rating_Index_vue"
	],
	"./RatingRemarks/Create": [
		"./resources/js/Pages/RatingRemarks/Create.vue",
		9,
		"resources_js_Pages_RatingRemarks_Create_vue"
	],
	"./RatingRemarks/Create.vue": [
		"./resources/js/Pages/RatingRemarks/Create.vue",
		9,
		"resources_js_Pages_RatingRemarks_Create_vue"
	],
	"./RatingRemarks/Index": [
		"./resources/js/Pages/RatingRemarks/Index.vue",
		9,
		"resources_js_Pages_RatingRemarks_Index_vue"
	],
	"./RatingRemarks/Index.vue": [
		"./resources/js/Pages/RatingRemarks/Index.vue",
		9,
		"resources_js_Pages_RatingRemarks_Index_vue"
	],
	"./ResearchAgenda/Create": [
		"./resources/js/Pages/ResearchAgenda/Create.vue",
		9,
		"resources_js_Pages_ResearchAgenda_Create_vue"
	],
	"./ResearchAgenda/Create.vue": [
		"./resources/js/Pages/ResearchAgenda/Create.vue",
		9,
		"resources_js_Pages_ResearchAgenda_Create_vue"
	],
	"./ResearchAgenda/Index": [
		"./resources/js/Pages/ResearchAgenda/Index.vue",
		9,
		"resources_js_Pages_ResearchAgenda_Index_vue"
	],
	"./ResearchAgenda/Index.vue": [
		"./resources/js/Pages/ResearchAgenda/Index.vue",
		9,
		"resources_js_Pages_ResearchAgenda_Index_vue"
	],
	"./Review-Approve/OPCR/Ratings/Index": [
		"./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue",
		9,
		"resources_js_Pages_Review-Approve_OPCR_Ratings_Index_vue"
	],
	"./Review-Approve/OPCR/Ratings/Index.vue": [
		"./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue",
		9,
		"resources_js_Pages_Review-Approve_OPCR_Ratings_Index_vue"
	],
	"./Review-Approve/OPCR/Targets/Index": [
		"./resources/js/Pages/Review-Approve/OPCR/Targets/Index.vue",
		9,
		"resources_js_Pages_Review-Approve_OPCR_Targets_Index_vue"
	],
	"./Review-Approve/OPCR/Targets/Index.vue": [
		"./resources/js/Pages/Review-Approve/OPCR/Targets/Index.vue",
		9,
		"resources_js_Pages_Review-Approve_OPCR_Targets_Index_vue"
	],
	"./RevisionPlans/Create": [
		"./resources/js/Pages/RevisionPlans/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_Create_vue"
	],
	"./RevisionPlans/Create.vue": [
		"./resources/js/Pages/RevisionPlans/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_Create_vue"
	],
	"./RevisionPlans/DevelopmentFund/Create": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Create_vue"
	],
	"./RevisionPlans/DevelopmentFund/Create.vue": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Create_vue"
	],
	"./RevisionPlans/DevelopmentFund/Create_copy": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Create_copy.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Create_copy_vue"
	],
	"./RevisionPlans/DevelopmentFund/Create_copy.vue": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Create_copy.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Create_copy_vue"
	],
	"./RevisionPlans/DevelopmentFund/Index": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Index_vue"
	],
	"./RevisionPlans/DevelopmentFund/Index.vue": [
		"./resources/js/Pages/RevisionPlans/DevelopmentFund/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_DevelopmentFund_Index_vue"
	],
	"./RevisionPlans/Direct": [
		"./resources/js/Pages/RevisionPlans/Direct.vue",
		9,
		"resources_js_Pages_RevisionPlans_Direct_vue"
	],
	"./RevisionPlans/Direct.vue": [
		"./resources/js/Pages/RevisionPlans/Direct.vue",
		9,
		"resources_js_Pages_RevisionPlans_Direct_vue"
	],
	"./RevisionPlans/GAS/Create": [
		"./resources/js/Pages/RevisionPlans/GAS/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_Create_vue"
	],
	"./RevisionPlans/GAS/Create.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_Create_vue"
	],
	"./RevisionPlans/GAS/Index": [
		"./resources/js/Pages/RevisionPlans/GAS/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_Index_vue"
	],
	"./RevisionPlans/GAS/Index.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_Index_vue"
	],
	"./RevisionPlans/GAS/View": [
		"./resources/js/Pages/RevisionPlans/GAS/View.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_View_vue"
	],
	"./RevisionPlans/GAS/View.vue": [
		"./resources/js/Pages/RevisionPlans/GAS/View.vue",
		9,
		"resources_js_Pages_RevisionPlans_GAS_View_vue"
	],
	"./RevisionPlans/Index": [
		"./resources/js/Pages/RevisionPlans/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_Index_vue"
	],
	"./RevisionPlans/Index.vue": [
		"./resources/js/Pages/RevisionPlans/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_Index_vue"
	],
	"./RevisionPlans/MFO/Create": [
		"./resources/js/Pages/RevisionPlans/MFO/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_MFO_Create_vue"
	],
	"./RevisionPlans/MFO/Create.vue": [
		"./resources/js/Pages/RevisionPlans/MFO/Create.vue",
		9,
		"resources_js_Pages_RevisionPlans_MFO_Create_vue"
	],
	"./RevisionPlans/MFO/Index": [
		"./resources/js/Pages/RevisionPlans/MFO/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_MFO_Index_vue"
	],
	"./RevisionPlans/MFO/Index.vue": [
		"./resources/js/Pages/RevisionPlans/MFO/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_MFO_Index_vue"
	],
	"./RevisionPlans/OOE/Index": [
		"./resources/js/Pages/RevisionPlans/OOE/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_OOE_Index_vue"
	],
	"./RevisionPlans/OOE/Index.vue": [
		"./resources/js/Pages/RevisionPlans/OOE/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_OOE_Index_vue"
	],
	"./RevisionPlans/ProjectProfile/Create": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_ProjectProfile_Create_vue"
	],
	"./RevisionPlans/ProjectProfile/Create.vue": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_ProjectProfile_Create_vue"
	],
	"./RevisionPlans/ProjectProfile/Createv2": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/Createv2.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_ProjectProfile_Createv2_vue"
	],
	"./RevisionPlans/ProjectProfile/Createv2.vue": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/Createv2.vue",
		9,
		"/js/vendor",
		"resources_js_Pages_RevisionPlans_ProjectProfile_Createv2_vue"
	],
	"./RevisionPlans/ProjectProfile/test": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/test.vue",
		9,
		"resources_js_Pages_RevisionPlans_ProjectProfile_test_vue"
	],
	"./RevisionPlans/ProjectProfile/test.vue": [
		"./resources/js/Pages/RevisionPlans/ProjectProfile/test.vue",
		9,
		"resources_js_Pages_RevisionPlans_ProjectProfile_test_vue"
	],
	"./RevisionPlans/Tracking/Index": [
		"./resources/js/Pages/RevisionPlans/Tracking/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_Tracking_Index_vue"
	],
	"./RevisionPlans/Tracking/Index.vue": [
		"./resources/js/Pages/RevisionPlans/Tracking/Index.vue",
		9,
		"resources_js_Pages_RevisionPlans_Tracking_Index_vue"
	],
	"./RevisionPlans/Tracking/TrackingByProject": [
		"./resources/js/Pages/RevisionPlans/Tracking/TrackingByProject",
		7,
		"resources_js_Pages_RevisionPlans_Tracking_TrackingByProject"
	],
	"./RevisionPlans/View": [
		"./resources/js/Pages/RevisionPlans/View.vue",
		9,
		"resources_js_Pages_RevisionPlans_View_vue"
	],
	"./RevisionPlans/View copy": [
		"./resources/js/Pages/RevisionPlans/View copy.vue",
		9,
		"resources_js_Pages_RevisionPlans_View_copy_vue"
	],
	"./RevisionPlans/View copy.vue": [
		"./resources/js/Pages/RevisionPlans/View copy.vue",
		9,
		"resources_js_Pages_RevisionPlans_View_copy_vue"
	],
	"./RevisionPlans/View.vue": [
		"./resources/js/Pages/RevisionPlans/View.vue",
		9,
		"resources_js_Pages_RevisionPlans_View_vue"
	],
	"./RevisionPlans/View2": [
		"./resources/js/Pages/RevisionPlans/View2.vue",
		9,
		"resources_js_Pages_RevisionPlans_View2_vue"
	],
	"./RevisionPlans/View2.vue": [
		"./resources/js/Pages/RevisionPlans/View2.vue",
		9,
		"resources_js_Pages_RevisionPlans_View2_vue"
	],
	"./RevisionPlans/View3": [
		"./resources/js/Pages/RevisionPlans/View3.vue",
		9,
		"resources_js_Pages_RevisionPlans_View3_vue"
	],
	"./RevisionPlans/View3.vue": [
		"./resources/js/Pages/RevisionPlans/View3.vue",
		9,
		"resources_js_Pages_RevisionPlans_View3_vue"
	],
	"./RevisionPlans/ViewBackup": [
		"./resources/js/Pages/RevisionPlans/ViewBackup.vue",
		9,
		"resources_js_Pages_RevisionPlans_ViewBackup_vue"
	],
	"./RevisionPlans/ViewBackup.vue": [
		"./resources/js/Pages/RevisionPlans/ViewBackup.vue",
		9,
		"resources_js_Pages_RevisionPlans_ViewBackup_vue"
	],
	"./RiskManagement/Create": [
		"./resources/js/Pages/RiskManagement/Create.vue",
		9,
		"resources_js_Pages_RiskManagement_Create_vue"
	],
	"./RiskManagement/Create.vue": [
		"./resources/js/Pages/RiskManagement/Create.vue",
		9,
		"resources_js_Pages_RiskManagement_Create_vue"
	],
	"./RiskManagement/Index": [
		"./resources/js/Pages/RiskManagement/Index.vue",
		9,
		"resources_js_Pages_RiskManagement_Index_vue"
	],
	"./RiskManagement/Index.vue": [
		"./resources/js/Pages/RiskManagement/Index.vue",
		9,
		"resources_js_Pages_RiskManagement_Index_vue"
	],
	"./SDG/Create": [
		"./resources/js/Pages/SDG/Create.vue",
		9,
		"resources_js_Pages_SDG_Create_vue"
	],
	"./SDG/Create.vue": [
		"./resources/js/Pages/SDG/Create.vue",
		9,
		"resources_js_Pages_SDG_Create_vue"
	],
	"./SDG/Index": [
		"./resources/js/Pages/SDG/Index.vue",
		9,
		"resources_js_Pages_SDG_Index_vue"
	],
	"./SDG/Index.vue": [
		"./resources/js/Pages/SDG/Index.vue",
		9,
		"resources_js_Pages_SDG_Index_vue"
	],
	"./Sectoral/Index": [
		"./resources/js/Pages/Sectoral/Index.vue",
		9,
		"resources_js_Pages_Sectoral_Index_vue"
	],
	"./Sectoral/Index.vue": [
		"./resources/js/Pages/Sectoral/Index.vue",
		9,
		"resources_js_Pages_Sectoral_Index_vue"
	],
	"./Sectoral/addSector": [
		"./resources/js/Pages/Sectoral/addSector.vue",
		9,
		"resources_js_Pages_Sectoral_addSector_vue"
	],
	"./Sectoral/addSector.vue": [
		"./resources/js/Pages/Sectoral/addSector.vue",
		9,
		"resources_js_Pages_Sectoral_addSector_vue"
	],
	"./Signatories/Create": [
		"./resources/js/Pages/Signatories/Create.vue",
		9,
		"resources_js_Pages_Signatories_Create_vue"
	],
	"./Signatories/Create.vue": [
		"./resources/js/Pages/Signatories/Create.vue",
		9,
		"resources_js_Pages_Signatories_Create_vue"
	],
	"./Signatories/Index": [
		"./resources/js/Pages/Signatories/Index.vue",
		9,
		"resources_js_Pages_Signatories_Index_vue"
	],
	"./Signatories/Index.vue": [
		"./resources/js/Pages/Signatories/Index.vue",
		9,
		"resources_js_Pages_Signatories_Index_vue"
	],
	"./SocietalGoals/Index": [
		"./resources/js/Pages/SocietalGoals/Index.vue",
		9,
		"resources_js_Pages_SocietalGoals_Index_vue"
	],
	"./SocietalGoals/Index.vue": [
		"./resources/js/Pages/SocietalGoals/Index.vue",
		9,
		"resources_js_Pages_SocietalGoals_Index_vue"
	],
	"./SocietalGoals/addSocietalGoals": [
		"./resources/js/Pages/SocietalGoals/addSocietalGoals.vue",
		9,
		"resources_js_Pages_SocietalGoals_addSocietalGoals_vue"
	],
	"./SocietalGoals/addSocietalGoals.vue": [
		"./resources/js/Pages/SocietalGoals/addSocietalGoals.vue",
		9,
		"resources_js_Pages_SocietalGoals_addSocietalGoals_vue"
	],
	"./Strategies/Create": [
		"./resources/js/Pages/Strategies/Create.vue",
		9,
		"resources_js_Pages_Strategies_Create_vue"
	],
	"./Strategies/Create.vue": [
		"./resources/js/Pages/Strategies/Create.vue",
		9,
		"resources_js_Pages_Strategies_Create_vue"
	],
	"./Strategies/Index": [
		"./resources/js/Pages/Strategies/Index.vue",
		9,
		"resources_js_Pages_Strategies_Index_vue"
	],
	"./Strategies/Index.vue": [
		"./resources/js/Pages/Strategies/Index.vue",
		9,
		"resources_js_Pages_Strategies_Index_vue"
	],
	"./StrategyProject/Index": [
		"./resources/js/Pages/StrategyProject/Index.vue",
		9,
		"resources_js_Pages_StrategyProject_Index_vue"
	],
	"./StrategyProject/Index.vue": [
		"./resources/js/Pages/StrategyProject/Index.vue",
		9,
		"resources_js_Pages_StrategyProject_Index_vue"
	],
	"./StrategyProject/IndexB": [
		"./resources/js/Pages/StrategyProject/IndexB.vue",
		9,
		"resources_js_Pages_StrategyProject_IndexB_vue"
	],
	"./StrategyProject/IndexB.vue": [
		"./resources/js/Pages/StrategyProject/IndexB.vue",
		9,
		"resources_js_Pages_StrategyProject_IndexB_vue"
	],
	"./StrategyProject/test": [
		"./resources/js/Pages/StrategyProject/test.vue",
		9,
		"resources_js_Pages_StrategyProject_test_vue"
	],
	"./StrategyProject/test.vue": [
		"./resources/js/Pages/StrategyProject/test.vue",
		9,
		"resources_js_Pages_StrategyProject_test_vue"
	],
	"./SuccessIndicator/Create": [
		"./resources/js/Pages/SuccessIndicator/Create.vue",
		9,
		"resources_js_Pages_SuccessIndicator_Create_vue"
	],
	"./SuccessIndicator/Create.vue": [
		"./resources/js/Pages/SuccessIndicator/Create.vue",
		9,
		"resources_js_Pages_SuccessIndicator_Create_vue"
	],
	"./SuccessIndicator/Index": [
		"./resources/js/Pages/SuccessIndicator/Index.vue",
		9,
		"resources_js_Pages_SuccessIndicator_Index_vue"
	],
	"./SuccessIndicator/Index.vue": [
		"./resources/js/Pages/SuccessIndicator/Index.vue",
		9,
		"resources_js_Pages_SuccessIndicator_Index_vue"
	],
	"./Targets/Create": [
		"./resources/js/Pages/Targets/Create.vue",
		9,
		"resources_js_Pages_Targets_Create_vue"
	],
	"./Targets/Create.vue": [
		"./resources/js/Pages/Targets/Create.vue",
		9,
		"resources_js_Pages_Targets_Create_vue"
	],
	"./Targets/Direct": [
		"./resources/js/Pages/Targets/Direct.vue",
		9,
		"resources_js_Pages_Targets_Direct_vue"
	],
	"./Targets/Direct.vue": [
		"./resources/js/Pages/Targets/Direct.vue",
		9,
		"resources_js_Pages_Targets_Direct_vue"
	],
	"./Targets/Implementation/Create": [
		"./resources/js/Pages/Targets/Implementation/Create.vue",
		9,
		"resources_js_Pages_Targets_Implementation_Create_vue"
	],
	"./Targets/Implementation/Create.vue": [
		"./resources/js/Pages/Targets/Implementation/Create.vue",
		9,
		"resources_js_Pages_Targets_Implementation_Create_vue"
	],
	"./Targets/Implementation/Index": [
		"./resources/js/Pages/Targets/Implementation/Index.vue",
		9,
		"resources_js_Pages_Targets_Implementation_Index_vue"
	],
	"./Targets/Implementation/Index.vue": [
		"./resources/js/Pages/Targets/Implementation/Index.vue",
		9,
		"resources_js_Pages_Targets_Implementation_Index_vue"
	],
	"./Targets/Index": [
		"./resources/js/Pages/Targets/Index.vue",
		9,
		"resources_js_Pages_Targets_Index_vue"
	],
	"./Targets/Index.vue": [
		"./resources/js/Pages/Targets/Index.vue",
		9,
		"resources_js_Pages_Targets_Index_vue"
	],
	"./TimeRange/Create": [
		"./resources/js/Pages/TimeRange/Create.vue",
		9,
		"resources_js_Pages_TimeRange_Create_vue"
	],
	"./TimeRange/Create.vue": [
		"./resources/js/Pages/TimeRange/Create.vue",
		9,
		"resources_js_Pages_TimeRange_Create_vue"
	],
	"./TimeRange/Index": [
		"./resources/js/Pages/TimeRange/Index.vue",
		9,
		"resources_js_Pages_TimeRange_Index_vue"
	],
	"./TimeRange/Index.vue": [
		"./resources/js/Pages/TimeRange/Index.vue",
		9,
		"resources_js_Pages_TimeRange_Index_vue"
	],
	"./Time_Sheets/Index": [
		"./resources/js/Pages/Time_Sheets/Index.vue",
		9,
		"resources_js_Pages_Time_Sheets_Index_vue"
	],
	"./Time_Sheets/Index.vue": [
		"./resources/js/Pages/Time_Sheets/Index.vue",
		9,
		"resources_js_Pages_Time_Sheets_Index_vue"
	],
	"./Time_Sheets/New": [
		"./resources/js/Pages/Time_Sheets/New.vue",
		9,
		"resources_js_Pages_Time_Sheets_New_vue"
	],
	"./Time_Sheets/New.vue": [
		"./resources/js/Pages/Time_Sheets/New.vue",
		9,
		"resources_js_Pages_Time_Sheets_New_vue"
	],
	"./Timeliness/Create": [
		"./resources/js/Pages/Timeliness/Create.vue",
		9,
		"resources_js_Pages_Timeliness_Create_vue"
	],
	"./Timeliness/Create.vue": [
		"./resources/js/Pages/Timeliness/Create.vue",
		9,
		"resources_js_Pages_Timeliness_Create_vue"
	],
	"./Timeliness/Index": [
		"./resources/js/Pages/Timeliness/Index.vue",
		9,
		"resources_js_Pages_Timeliness_Index_vue"
	],
	"./Timeliness/Index.vue": [
		"./resources/js/Pages/Timeliness/Index.vue",
		9,
		"resources_js_Pages_Timeliness_Index_vue"
	],
	"./TimelinessRemarks/Create": [
		"./resources/js/Pages/TimelinessRemarks/Create.vue",
		9,
		"resources_js_Pages_TimelinessRemarks_Create_vue"
	],
	"./TimelinessRemarks/Create.vue": [
		"./resources/js/Pages/TimelinessRemarks/Create.vue",
		9,
		"resources_js_Pages_TimelinessRemarks_Create_vue"
	],
	"./TimelinessRemarks/Index": [
		"./resources/js/Pages/TimelinessRemarks/Index.vue",
		9,
		"resources_js_Pages_TimelinessRemarks_Index_vue"
	],
	"./TimelinessRemarks/Index.vue": [
		"./resources/js/Pages/TimelinessRemarks/Index.vue",
		9,
		"resources_js_Pages_TimelinessRemarks_Index_vue"
	],
	"./UserOffice/Set": [
		"./resources/js/Pages/UserOffice/Set.vue",
		9,
		"resources_js_Pages_UserOffice_Set_vue"
	],
	"./UserOffice/Set.vue": [
		"./resources/js/Pages/UserOffice/Set.vue",
		9,
		"resources_js_Pages_UserOffice_Set_vue"
	],
	"./Users/BootstrapModalNoJquery": [
		"./resources/js/Pages/Users/BootstrapModalNoJquery.vue",
		9,
		"resources_js_Pages_Users_BootstrapModalNoJquery_vue"
	],
	"./Users/BootstrapModalNoJquery.vue": [
		"./resources/js/Pages/Users/BootstrapModalNoJquery.vue",
		9,
		"resources_js_Pages_Users_BootstrapModalNoJquery_vue"
	],
	"./Users/ChangePassword": [
		"./resources/js/Pages/Users/ChangePassword.vue",
		9,
		"resources_js_Pages_Users_ChangePassword_vue"
	],
	"./Users/ChangePassword.vue": [
		"./resources/js/Pages/Users/ChangePassword.vue",
		9,
		"resources_js_Pages_Users_ChangePassword_vue"
	],
	"./Users/Create": [
		"./resources/js/Pages/Users/Create.vue",
		9,
		"resources_js_Pages_Users_Create_vue"
	],
	"./Users/Create.vue": [
		"./resources/js/Pages/Users/Create.vue",
		9,
		"resources_js_Pages_Users_Create_vue"
	],
	"./Users/Employees/Index": [
		"./resources/js/Pages/Users/Employees/Index.vue",
		9,
		"resources_js_Pages_Users_Employees_Index_vue"
	],
	"./Users/Employees/Index.vue": [
		"./resources/js/Pages/Users/Employees/Index.vue",
		9,
		"resources_js_Pages_Users_Employees_Index_vue"
	],
	"./Users/Index": [
		"./resources/js/Pages/Users/Index.vue",
		9,
		"resources_js_Pages_Users_Index_vue"
	],
	"./Users/Index.vue": [
		"./resources/js/Pages/Users/Index.vue",
		9,
		"resources_js_Pages_Users_Index_vue"
	],
	"./Users/PermissionsModal": [
		"./resources/js/Pages/Users/PermissionsModal.vue",
		9,
		"resources_js_Pages_Users_PermissionsModal_vue"
	],
	"./Users/PermissionsModal.vue": [
		"./resources/js/Pages/Users/PermissionsModal.vue",
		9,
		"resources_js_Pages_Users_PermissionsModal_vue"
	],
	"./Users/Settings": [
		"./resources/js/Pages/Users/Settings.vue",
		9,
		"resources_js_Pages_Users_Settings_vue"
	],
	"./Users/Settings.vue": [
		"./resources/js/Pages/Users/Settings.vue",
		9,
		"resources_js_Pages_Users_Settings_vue"
	],
	"./hgdg_checklist/Create": [
		"./resources/js/Pages/hgdg_checklist/Create.vue",
		9,
		"resources_js_Pages_hgdg_checklist_Create_vue"
	],
	"./hgdg_checklist/Create.vue": [
		"./resources/js/Pages/hgdg_checklist/Create.vue",
		9,
		"resources_js_Pages_hgdg_checklist_Create_vue"
	],
	"./hgdg_checklist/Index": [
		"./resources/js/Pages/hgdg_checklist/Index.vue",
		9,
		"resources_js_Pages_hgdg_checklist_Index_vue"
	],
	"./hgdg_checklist/Index.vue": [
		"./resources/js/Pages/hgdg_checklist/Index.vue",
		9,
		"resources_js_Pages_hgdg_checklist_Index_vue"
	],
	"./hgdg_question/Create": [
		"./resources/js/Pages/hgdg_question/Create.vue",
		9,
		"resources_js_Pages_hgdg_question_Create_vue"
	],
	"./hgdg_question/Create.vue": [
		"./resources/js/Pages/hgdg_question/Create.vue",
		9,
		"resources_js_Pages_hgdg_question_Create_vue"
	],
	"./hgdg_question/Index": [
		"./resources/js/Pages/hgdg_question/Index.vue",
		9,
		"resources_js_Pages_hgdg_question_Index_vue"
	],
	"./hgdg_question/Index.vue": [
		"./resources/js/Pages/hgdg_question/Index.vue",
		9,
		"resources_js_Pages_hgdg_question_Index_vue"
	],
	"./hgdg_score/Index": [
		"./resources/js/Pages/hgdg_score/Index.vue",
		9,
		"resources_js_Pages_hgdg_score_Index_vue"
	],
	"./hgdg_score/Index.vue": [
		"./resources/js/Pages/hgdg_score/Index.vue",
		9,
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
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(() => {
		return __webpack_require__.t(id, ids[1] | 16)
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ },

/***/ "./resources/js/Shared/CardModal.vue"
/*!*******************************************!*\
  !*** ./resources/js/Shared/CardModal.vue ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardModal.vue?vue&type=template&id=09736751 */ "./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751");
/* harmony import */ var _CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/CardModal.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/CardModal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/CardModal.vue?vue&type=script&lang=js"
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/CardModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751"
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751 ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardModal_vue_vue_type_template_id_09736751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardModal.vue?vue&type=template&id=09736751 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CardModal.vue?vue&type=template&id=09736751");


/***/ },

/***/ "./resources/js/Shared/Footer.vue"
/*!****************************************!*\
  !*** ./resources/js/Shared/Footer.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=a77bcb12 */ "./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/Shared/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Footer.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Footer.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Footer.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12"
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12 ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_a77bcb12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=a77bcb12 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer.vue?vue&type=template&id=a77bcb12");


/***/ },

/***/ "./resources/js/Shared/Layout.vue"
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086 */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086"
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086 ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=6bf30086 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086");


/***/ },

/***/ "./resources/js/Shared/Nav.vue"
/*!*************************************!*\
  !*** ./resources/js/Shared/Nav.vue ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=42f6d0f7 */ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Nav.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js"
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7"
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=42f6d0f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");


/***/ },

/***/ "./resources/js/Shared/Notification.vue"
/*!**********************************************!*\
  !*** ./resources/js/Shared/Notification.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=f2d83a72 */ "./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js */ "./resources/js/Shared/Notification.vue?vue&type=script&lang=js");
/* harmony import */ var _Notification_vue_vue_type_style_index_0_id_f2d83a72_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css */ "./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Notification.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Notification.vue?vue&type=script&lang=js"
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Notification.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css"
/*!******************************************************************************************!*\
  !*** ./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_style_index_0_id_f2d83a72_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=style&index=0&id=f2d83a72&lang=css");


/***/ },

/***/ "./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72"
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72 ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_f2d83a72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=template&id=f2d83a72 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notification.vue?vue&type=template&id=f2d83a72");


/***/ },

/***/ "./resources/js/Shared/Sidebar.vue"
/*!*****************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=f6a89ea0 */ "./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Sidebar.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js"
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0"
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0 ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_f6a89ea0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=f6a89ea0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Sidebar.vue?vue&type=template&id=f6a89ea0");


/***/ },

/***/ "./resources/js/app.js"
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/Notification */ "./resources/js/Shared/Notification.vue");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-search-select/dist/VueSearchSelect.css */ "./node_modules/vue-search-select/dist/VueSearchSelect.css");
/* harmony import */ var _Shared_CardModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/CardModal */ "./resources/js/Shared/CardModal.vue");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-filepond */ "./node_modules/vue-filepond/dist/vue-filepond.js");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_filepond__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! filepond-plugin-file-validate-size */ "./node_modules/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js");
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! filepond-plugin-image-crop */ "./node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js");
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! filepond-plugin-image-transform */ "./node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js");
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.es.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! quill */ "./node_modules/quill/quill.js");
/* harmony import */ var _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vueup/vue-quill */ "./node_modules/@vueup/vue-quill/dist/vue-quill.esm-bundler.js");
/* harmony import */ var _vueup_vue_quill_dist_vue_quill_snow_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vueup/vue-quill/dist/vue-quill.snow.css */ "./node_modules/@vueup/vue-quill/dist/vue-quill.snow.css");
/* harmony import */ var quill_better_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! quill-better-table */ "./node_modules/quill-better-table/dist/quill-better-table.js");
/* harmony import */ var quill_better_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(quill_better_table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var quill_better_table_dist_quill_better_table_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! quill-better-table/dist/quill-better-table.css */ "./node_modules/quill-better-table/dist/quill-better-table.css");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/vue-sweetalert.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! fuzzysort */ "./node_modules/fuzzysort/fuzzysort.js");
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! diff-match-patch */ "./node_modules/diff-match-patch/index.js");
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(diff_match_patch__WEBPACK_IMPORTED_MODULE_25__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





//Vue Search Select


//Card modal
//.component('CardModal', CardModal)


// FileUpload







//VUe-select
//import Vue from 'vue';




//VUE SELECT2

//YEAR PICKER
//import yearPicker from 'vue-year-picker';

//Bootstrap Vue
//import { BootstrapVue } from 'bootstrap-vue';
/*.use(BootstrapVue)
      .use(IconsPlugin) */
//VUE TOOLTIP
// import VTooltip from 'v-tooltip';

//VUE Quill Editor
 // Import core Quill




quill__WEBPACK_IMPORTED_MODULE_15__["default"].register({
  'modules/better-table': (quill_better_table__WEBPACK_IMPORTED_MODULE_18___default())
}, true);
window.Quill = quill__WEBPACK_IMPORTED_MODULE_15__["default"];

//Vue Multiselect 3


//VUE Sweetalert


// VUE INERTIA


// fuzzy sort


// Additional Plugins for Fuzzy String Matching


window.Mark = (mark_js__WEBPACK_IMPORTED_MODULE_24___default());
window.DiffMatchPatch = (diff_match_patch__WEBPACK_IMPORTED_MODULE_25___default());
var FilePond = vue_filepond__WEBPACK_IMPORTED_MODULE_7___default()((filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_8___default()), (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_9___default()), (filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_10___default()), (filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_11___default()), (filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_12___default()));
//.use(yearPicker)
var setFavicon = function setFavicon(iconUrl) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = iconUrl;
};

// ✅ Set your favicon
setFavicon('/images/OPCR_ICON.png');
// .use(VTooltip)
(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(name) {
      var _page$layout;
      var page;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));
          case 1:
            page = _context.v["default"];
            (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"];
            return _context.a(2, page);
        }
      }, _callee);
    }));
    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }
    return resolve;
  }(),
  setup: function setup(_ref) {
    var _methods;
    var el = _ref.el,
      App = _ref.App,
      props = _ref.props,
      plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(App, props);
      }
    }).use(plugin).use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_21__["default"]).component("multiselect", _vueform_multiselect__WEBPACK_IMPORTED_MODULE_20__["default"]).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head).component('CardModal', _Shared_CardModal__WEBPACK_IMPORTED_MODULE_6__["default"]).component("Notification", _Shared_Notification__WEBPACK_IMPORTED_MODULE_3__["default"]).component("FilePond", FilePond).component("v-select", vue_select__WEBPACK_IMPORTED_MODULE_14__["default"]).component('QuillEditor', _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_16__.QuillEditor).component('Inertia', _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_22__.Inertia).component('fuzzysort', (fuzzysort__WEBPACK_IMPORTED_MODULE_23___default())).component("Mark", (mark_js__WEBPACK_IMPORTED_MODULE_24___default())).component("DiffMatchPatch", (diff_match_patch__WEBPACK_IMPORTED_MODULE_25___default())).mixin({
      data: function data() {
        return {
          my_years: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098", "2099", "2100"],
          pcr_years: ["2025", "2026", "2027", "2028"
          // "2029",
          // "2030",
          // "2031",
          // "2032",
          // "2033",
          // "2034",
          // "2035",
          ],
          measurement_units: ['meter', 'kilometer', 'mile', 'yard',
          // Units of measure for distance
          'centimeter', 'inch', 'foot', 'meter',
          // Units of measure for length
          'gram', 'kilogram', 'ounce', 'pound',
          // Units of measure for weight
          'milliliter', 'liter', 'gallon', 'cubic meter',
          // Units of measure for volume
          'volt', 'kilovolt', 'megavolt' // Units of measure for voltage
          // Add other measurement units as needed
          ],
          comparison_operators: ['<', '>', '≥', '≤'],
          get jasper_ip() {
            // var lo = "192.168.6.23:8080/";
            // var gl = "122.54.19.171:8080/";
            // var nw = "122.53.120.27:8080/"
            // var nw_nov = "paps.dvodeoro.ph/";
            var nw_nov = "paps.davaodeoro.gov.ph/";
            return nw_nov;
          },
          office_aip: {
            "1011": "01-01-001",
            "1031": "01-01-012",
            "1032": "01-03-002",
            "1041": "01-01-010",
            "1061": "01-01-015",
            "1071": "01-01-009",
            "1081": "01-01-007",
            "1091": "01-01-005",
            "1101": "01-01-006",
            "1131": "01-01-011",
            "4411": "01-01-013",
            "7611": "01-01-014",
            "8711": "01-01-016",
            "8721": "01-01-017",
            "8731": "01-02-002",
            "8751-1": "01-01-008",
            "4490": "01-03-003",
            "1016": "01-01-002",
            "1021": "01-01-003",
            "4421": "01-03-001",
            "1011-2": "01-03-004",
            "1121": "01-03-009"
          },
          getFirstFourChars: function getFirstFourChars(str) {
            return str.slice(0, 4);
          },
          sectors: {
            "General Public Services Sector": ["", "Executive Services", "Legislative Services", "Planning and Development Coordination Services", "Budgeting Services", "Treasury Services", "Accounting Services", "Administrative Services", "Civil Registry Services", "General Services", "Assessment of Real Property Services", "Auditing Services | Information Services", "Legal Services | Prosecution Services", "Administration of Justice Services", "Land Registration Services", "Claim Registration Services", "Police Services", "Fire Protection Services", "Repair and Maintenance of Government Facilities"],
            "Social Services Sector": ["", "Education and Manpower Development", "Public Education Services", "Medical Subsidiary Services", "Manpower Development Services", "Sports Center, Athletic Field, and Playground Maintenance Service cultural", "Project Services", "Cultural/Conference/Convention Center", "Operation Services", "Health", "Health Services Field Projects (Immunization, Inoculation, Blood Donor Services)", "Day Care Clinic", "Hospital Services", "Chest Clinic", "Housing and Community Development", "Housing Projects", "Sanitary Services", "Street Cleaning", "Garbage Collection", "Sewerage and Drainage", "Street Lighting", "Community Development Services"],
            "Economic Services": ["", "Agricultural Services", "Veterinary Services", "Natural Resources Services", "Architectural Services", "Engineering Services", "Economic Enterprises and Public Operation Services", "Tourism Services"],
            "Other Services": [
              // "Other Services"
            ]
          },
          isPreviewable: function isPreviewable(filename) {
            // const ext = filename.split('.').pop().toLowerCase()
            var ext = filename;
            // 'jpg', 'jpeg', 'png', 'gif',
            return ['pdf', 'doc', 'docx', 'dot', 'dotx', 'dotm', 'xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'mp3', 'mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'].includes(ext);
          },
          isDragging: false,
          dragOffsetX: 0,
          dragOffsetY: 0,
          highlighted: {
            rationale: '',
            objective: '',
            beneficiaries: ''
          }
        };
      },
      methods: (_methods = {
        formatDate: function formatDate(dateString) {
          if (!dateString) return '';

          // Strip microseconds if they exist
          var cleanDateString = dateString.replace(/\.\d{3,6}Z$/, 'Z');
          var date = new Date(cleanDateString);
          var datePart = date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            timeZone: 'Asia/Manila'
          });
          var timePart = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'Asia/Manila'
          });
          return "".concat(datePart, " ").concat(timePart);
        },
        goBack: function goBack() {
          window.history.back(); // or this.$router.go(-1)
        },
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
        getStatus: function getStatus(stat_num) {
          // alert(stat_num)
          if (typeof stat_num !== 'string') {
            stat_num = String(stat_num);
          }
          if (stat_num == '-2') {
            return 'Returned';
          } else if (stat_num === '-1') {
            return 'Saved';
          } else if (stat_num === '0') {
            return 'Submitted';
          } else if (stat_num === '1') {
            return 'Reviewed';
          } else if (stat_num === '2') {
            return 'Approved';
          } else {
            return 'Unknown Status';
          }
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
          b = b + vue__WEBPACK_IMPORTED_MODULE_0__.createApp;
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
        formatMonthYear2: function formatMonthYear2(date_value) {
          // Make sure the value exists
          if (!date_value) return '';

          // Split the date string
          var _date_value$split = date_value.split('-'),
            _date_value$split2 = _slicedToArray(_date_value$split, 2),
            year = _date_value$split2[0],
            month = _date_value$split2[1];

          // Create a date object (month index is zero-based)
          var dateObj = new Date(year, month - 1);

          // Format month name
          var monthName = dateObj.toLocaleString('en-US', {
            month: 'long'
          });
          return "".concat(monthName, " ").concat(year);
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
          var n3 = parseFloat(n1) + parseFloat(n2);
          //alert(n1);
          return this.format_number_conv(n3, 2, true);
        },
        getDifference: function getDifference(n1, n2) {
          var n3 = parseFloat(n1) - parseFloat(n2);
          //alert(n1+" --- ");
          return this.format_number_conv(n3, 2, true);
        },
        truncateText: function truncateText(text, limit) {
          var words = text.split(' ');
          if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...'; // Add ellipsis for truncation
          } else {
            return text;
          }
        },
        getPlainTextWithoutTags: function getPlainTextWithoutTags(htmlString) {
          // Use a regular expression to remove HTML tags
          return htmlString.replace(/<[^>]+>/g, '');
        }
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "formatDate", function formatDate(isoDate) {
        var date = new Date(isoDate);
        var options = {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
      }), "getPreUploadFileIcon", function getPreUploadFileIcon(file_type) {
        // if (!file?.file_type) {
        //   return '/images/icons/file.png'; // default if missing type
        // }

        var type = file_type.toLowerCase();
        var excelTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm'];
        var wordTypes = ['doc', 'docx', 'dot', 'dotx', 'dotm'];
        var imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        var pptTypes = ['ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'];
        var multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];
        if (excelTypes.includes(type)) {
          return '/images/icons/excel.png';
        } else if (type === 'pdf') {
          return '/images/icons/pdf.png';
        } else if (wordTypes.includes(type)) {
          return '/images/icons/word.png';
        } else if (pptTypes.includes(type)) {
          return '/images/icons/ppt.png';
        } else if (multimediaTypes.includes(type)) {
          return '/images/icons/video.png';
        } else if (imageTypes.includes(type)) {
          return "/images/icons/images.png";
        } else {
          return '/images/icons/file.png'; // default icon
        }
      }), "getStatus", function getStatus(number_status) {
        var status = parseFloat(number_status);
        if (status === -1) return 'Saved';
        if (status === 0) return 'Submitted';
        if (status === 1) return 'Reviewed';
        if (status === 2) return 'Approved';
        if (status === -2) return 'Returned';
        return 'unknown';
      }), "startDrag", function startDrag(e) {
        if (e.target.closest("button")) return; // do NOT drag when clicking buttons

        this.isDragging = true;
        this.dragOffsetX = e.clientX - this.$refs.dragPanel.offsetLeft;
        this.dragOffsetY = e.clientY - this.$refs.dragPanel.offsetTop;
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.stopDrag);
      }), "onDrag", function onDrag(e) {
        if (!this.isDragging) return;
        this.$refs.dragPanel.style.left = e.clientX - this.dragOffsetX + "px";
        this.$refs.dragPanel.style.top = e.clientY - this.dragOffsetY + "px";
      }), "stopDrag", function stopDrag() {
        this.isDragging = false;
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDrag);
      }), "formatProjectType", function formatProjectType(type) {
        var map = {
          p: 'Project Profile',
          d: 'Project Design',
          'sip': 'SIP Profile'
        };
        return map[type] || type;
      }), "formatAipStatus", function formatAipStatus(value, type) {
        var map_sp = {
          "-1": "Saved",
          "0": "Submitted",
          "1": "Approved",
          "-2": "Returned"
        };
        var map_ldc = {
          "-1": "Saved",
          "0": "Submitted",
          "1": "Approved",
          "-2": "Returned"
        };
        return type === "ldc" ? map_ldc[value] : map_sp[value];
      }), "updateAIPStatus", function updateAIPStatus(type, year) {
        var _this = this;
        // Map type codes to human-readable messages
        var typeMessages = {
          'LDC0': 'submit this AIP for LDC review?',
          'LDC-2': 'return this AIP back from LDC?',
          'LDC1': 'approve this AIP for LDC?',
          'SP0': 'submit this AIP for SP review?',
          'SP-2': 'return this AIP back from SP?',
          'SP1': 'approve this AIP for SP?'
        };
        var message = typeMessages[type] || 'proceed with this action?';

        // Ask user for confirmation
        if (!confirm("Are you sure you want to ".concat(message, " for the year ").concat(year, "?"))) {
          return; // Exit if user cancels
        }

        // Payload to send
        var payload = {
          year_period: year
        };

        // Send the request via Inertia
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_22__.Inertia.post("/institutional_aip/status/".concat(type), payload, {
          onSuccess: function onSuccess() {
            _this.$toast.success('AIP status updated successfully.');
          },
          onError: function onError(errors) {
            console.error(errors);
            _this.$toast.error('Failed to update AIP status.');
          }
        });
      }), "highlightWithComments123", function highlightWithComments123(rawText, comments, columnName, containerEl) {
        if (!rawText || !(comments !== null && comments !== void 0 && comments.length)) return;
        var instance = new (mark_js__WEBPACK_IMPORTED_MODULE_24___default())(containerEl);
        var dmp = new (diff_match_patch__WEBPACK_IMPORTED_MODULE_25___default())();
        var filtered = comments.filter(function (c) {
          return c.column_name === columnName;
        });
        filtered.forEach(function (comment) {
          var selected_text = comment.selected_text,
            context_before = comment.context_before,
            context_after = comment.context_after,
            id = comment.id,
            table_name = comment.table_name,
            column_name = comment.column_name,
            comment_status = comment.comment_status,
            index_start = comment.index_start,
            index_end = comment.index_end;
          var fontColor = comment_status === '0' ? '#ff0000' : null;
          var length = index_end - index_start;
          var matched = false;
          var applyStyle = function applyStyle(el) {
            if (fontColor) el.style.color = fontColor;
            el.style.backgroundColor = 'white';
            el.setAttribute('id', "".concat(id, "_").concat(table_name, "_").concat(column_name));
          };

          /**
           * STEP 1 — Exact context match
           */
          var pattern = "".concat(context_before).concat(selected_text).concat(context_after);
          instance.mark(pattern, {
            separateWordSearch: false,
            accuracy: 'partially',
            acrossElements: true,
            each: function each(el) {
              matched = true;
              applyStyle(el);
            }
          });
          if (matched) return;

          /**
           * STEP 2 — DiffMatchPatch approximation
           */
          var diffs = dmp.diff_main(rawText, selected_text);
          dmp.diff_cleanupSemantic(diffs);
          var bestMatch = '';
          var bestScore = Infinity;
          diffs.forEach(function (diff) {
            if (diff[0] === 0) {
              var distance = dmp.diff_levenshtein(diffs);
              if (distance < bestScore) {
                bestScore = distance;
                bestMatch = diff[1];
              }
            }
          });
          if (bestMatch && bestMatch.length > 3) {
            instance.mark(bestMatch, {
              separateWordSearch: false,
              accuracy: 'partially',
              acrossElements: true,
              each: function each(el) {
                matched = true;
                applyStyle(el);
              }
            });
          }
          if (matched) return;

          /**
           * STEP 3A — Context BEFORE → tag nearest chars AFTER
           */
          if (context_before) {
            var beforeIndex = rawText.lastIndexOf(context_before);
            if (beforeIndex !== -1) {
              var start = beforeIndex + context_before.length;
              var fallbackText = rawText.substr(start, length);
              instance.mark(fallbackText, {
                separateWordSearch: false,
                accuracy: 'partially',
                acrossElements: true,
                each: function each(el) {
                  matched = true;
                  applyStyle(el);
                }
              });
            }
          }
          if (matched) return;

          /**
           * STEP 3B — Context AFTER → tag nearest chars BEFORE
           */
          if (context_after) {
            var afterIndex = rawText.indexOf(context_after);
            if (afterIndex !== -1) {
              var _start = Math.max(0, afterIndex - length);
              var _fallbackText = rawText.substr(_start, length);
              instance.mark(_fallbackText, {
                separateWordSearch: false,
                accuracy: 'partially',
                acrossElements: true,
                each: function each(el) {
                  matched = true;
                  applyStyle(el);
                }
              });
            }
          }
        });
      }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "cleanPartialHtmlEdges", function cleanPartialHtmlEdges(text) {
        if (!text) return text;
        return text
        // remove unfinished opening/closing tag fragments at START
        .replace(/^\s*(<\/?[a-zA-Z][^>]*$|^[^<]*>)/g, '')
        // remove unfinished opening/closing tag fragments at END
        .replace(/(<\/?[a-zA-Z][^>]*$|<[^>]*$)\s*$/g, '').trim();
      }), "highlightWithComments", function highlightWithComments(rawText, comments, columnName, containerEl) {
        var _this2 = this;
        if (!rawText || !(comments !== null && comments !== void 0 && comments.length)) return;
        var instance = new (mark_js__WEBPACK_IMPORTED_MODULE_24___default())(containerEl);
        var filtered = comments.filter(function (c) {
          return c.column_name === columnName;
        });
        var finalText = rawText; // start from the original text

        filtered.forEach(function (comment) {
          var selected_text = comment.selected_text,
            context_before = comment.context_before,
            context_after = comment.context_after,
            id = comment.id,
            table_name = comment.table_name,
            column_name = comment.column_name,
            comment_status = comment.comment_status,
            start_index = comment.start_index,
            end_index = comment.end_index;
          // const bgColor = comment_status === '0'
          //     ?   '#ff7112ff'  // ✔ approved (example: light orange / yellow)
          //     : '#ffffffff'   // ✔ default (pending / active)
          var fontColor = comment_status === '0' ? '#ff0000' // red text for approved
          : null; // keep default text color

          var matched = false;
          /**
           * Step 1: Try exact context match
           */
          var pattern = "".concat(context_before).concat(selected_text).concat(context_after);
          instance.mark(pattern, {
            separateWordSearch: false,
            accuracy: "partially",
            acrossElements: true,
            each: function each(el) {
              matched = true;
              // el.style.backgroundColor = bgColor
              if (fontColor) {
                el.style.color = fontColor;
              }
              el.style.backgroundColor = "white";
              el.setAttribute("id", "".concat(id, "_").concat(table_name, "_").concat(column_name));
            }
          });
          // if(column_name==='rationale'){
          //     alert(column_name+" 1: "+matched)
          // }

          if (matched) return;

          /**
           * Step 2: If exact context fails, fallback to diff-based match
           */
          instance.mark(selected_text, {
            separateWordSearch: false,
            accuracy: "partially",
            acrossElements: true,
            each: function each(el) {
              matched = true;
              // el.style.backgroundColor = bgColor
              if (fontColor) {
                el.style.color = fontColor;
              }
              el.style.backgroundColor = "white";
              el.setAttribute("id", "".concat(id, "_").concat(table_name, "_").concat(column_name));
            }
          });
          // if(column_name==='rationale'){
          //     alert(column_name+" 2: "+matched)
          // }
          if (matched) return;
          /**
           * Step 3: Index-based fallback (context + stored indexes)
           */

          var sourceText = rawText;
          var extractedText = sourceText.substring(start_index, end_index).trim();
          var cleanedText = _this2.cleanPartialHtmlEdges(extractedText);
          // alert("begin: "+begin +" end: "+end+  " extractedText "+extractedText)
          // alert("start_index: "+start_index +" end_index: "+end_index+  " extractedText "+extractedText)
          // 7️⃣ Mark extracted text
          var naa = "sadasdsadsdasd";
          if (cleanedText) {
            // alert("extractedText: "+extractedText)
            // alert("cleaned text: "+cleanedText)
            // alert(el);
            // exactly
            instance.mark(cleanedText, {
              separateWordSearch: false,
              accuracy: "partially",
              acrossElements: true,
              each: function each(el) {
                matched = true;
                "nakita na", _readOnlyError("naa");
                // el.style.backgroundColor = bgColor
                if (fontColor) {
                  el.style.color = fontColor;
                }
                el.style.backgroundColor = "white";
                el.setAttribute("id", "".concat(id, "_").concat(table_name, "_").concat(column_name));
              }
            });
          }
          if (matched) return;
          // /STEP 4: Just mark anything to help user know that the comment is under rationale, objectives, and expected outputs
          // 1️⃣ Strip HTML tags
          // const plainText = rawText
          //     .replace(/<[^>]*>/g, ' ')   // remove HTML
          //     .replace(/\s+/g, ' ')       // normalize spaces
          //     .trim()

          // 2️⃣ Get first word
          // const firstWord = plainText.split(' ')[0]
          // instance.mark('the', {
          //         separateWordSearch: false,
          //         accuracy: "exactly",
          //         acrossElements: true,
          //         each: el => {
          //             matched = true
          //             naa="nakita na";
          //             // el.style.backgroundColor = bgColor
          //             if (fontColor) {
          //                 el.style.color = fontColor
          //             }
          //             el.style.backgroundColor = "white"
          //             el.setAttribute(
          //                 "id",
          //                 `${id}_${table_name}_${column_name}`
          //             )
          //         }
          //     })
          // alert("matched: "+matched)
          // alert("last: "+naa)
          // alert("comment: "+comment.comment)
          // const sourceText = rawText

          // let begin = -1
          // let end = -1

          // // 1️⃣ Find context_before → last index
          // if (context_before) {
          //     const idx = sourceText.lastIndexOf(context_before)
          //     if (idx !== -1) {
          //         begin = idx + context_before.length
          //     }
          // }

          // // 2️⃣ Fallback to start_index
          // if (begin === -1 && Number.isInteger(start_index)) {
          //     begin = start_index
          // }

          // // 3️⃣ Find context_after → first index
          // if (context_after) {
          //     const idx = sourceText.indexOf(context_after, begin !== -1 ? begin : 0)
          //     if (idx !== -1) {
          //         end = idx
          //     }
          // }

          // // 4️⃣ Fallback to end_index
          // if (end === -1 && Number.isInteger(end_index)) {
          //     end = end_index
          // }

          // // 5️⃣ Ensure valid range
          // if (begin !== -1 && end !== -1) {
          //     // alert("begin: "+begin +" end: "+end)
          //     if (begin >= end) {
          //         end = begin + 1
          //     }

          //     // 6️⃣ Extract text
          //     const extractedText = sourceText.substring(start_index, end_index).trim()
          //     // alert("begin: "+begin +" end: "+end+  " extractedText "+extractedText)
          //     alert("start_index: "+start_index +" end_index: "+end_index+  " extractedText "+extractedText)
          //     // 7️⃣ Mark extracted text
          //     if (extractedText) {
          //         instance.mark(extractedText, {
          //             separateWordSearch: false,
          //             accuracy: "partially",
          //             acrossElements: true,
          //             each: el => {
          //                 if (fontColor) {
          //                     el.style.color = fontColor
          //                 }
          //                 el.style.backgroundColor = "white"
          //                 el.setAttribute(
          //                     "id",
          //                     `${id}_${table_name}_${column_name}`
          //                 )
          //             }
          //         })
          //     }
          // }
          // if (matched) return

          /** STEP 3 — DiffMatchPatch fallback */
          // const diffs = dmp.diff_main(rawText, selected_text)
          // dmp.diff_cleanupSemantic(diffs)

          // let bestMatch = ''
          // let maxLen = 0

          // diffs.forEach(([op, text]) => {
          //     if (op === 0 && text.length > maxLen) {
          //         bestMatch = text
          //         maxLen = text.length
          //     }
          // })
          // console.log("bestMatch: "+bestMatch)
          // if (!bestMatch) return

          // instance.mark(bestMatch, {
          //     separateWordSearch: false,
          //     accuracy: 'partially',
          //     acrossElements: true,
          //     each: el => {
          //         if (fontColor) el.style.color = fontColor
          //         el.style.backgroundColor = 'white'
          //         el.id = `${id}_${table_name}_${column_name}`
          //     }
          // })

          // Step 3: Context-based fallback (manual slice)
          // let start = finalText.indexOf(context_before);
          // if (start !== -1) start += context_before.length;
          // else if (typeof start_index === 'number') start = start_index;
          // else start = 0;

          // let end = finalText.indexOf(context_after, start);
          // if (end === -1 && typeof end_index === 'number') end = end_index;
          // else if (end === -1) end = finalText.length;

          // if (end > start) {
          //     const before = finalText.slice(0, start);
          //     const middle = finalText.slice(start, end) || (selected_text || '[comment]');
          //     const after = finalText.slice(end);

          //     finalText = before +
          //         `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:${fontColor};">${middle}</span>` +
          //         after;
          //     console.log("before: "+before)
          //     console.log("middle: "+middle)
          //     console.log("after: "+after)
          //     return;
          // }

          // Step 4: Absolute fallback — insert at beginning
          // finalText =
          //     `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:${fontColor};">${selected_text || '[comment]'}</span>` +
          //     finalText;
          // --------------------------------------------
          // STEP 3: FINAL FALLBACK — manual span injection
          // ONLY if Mark.js did NOT create highlights
          // --------------------------------------------
          // const existing = containerEl.querySelectorAll(
          //     `span[id="${id}_${table_name}_${column_name}"]`
          // )
          // if (!existing.length) {
          //     let text = containerEl.innerHTML
          //     let start = -1
          //     let end = -1

          //     // 1️⃣ Try using context_before
          //     if (context_before) {
          //         const beforeMatch = new RegExp(escapeRegex(context_before))
          //         const beforeResult = beforeMatch.exec(text)

          //         if (beforeResult) {
          //             start = beforeResult.index + beforeResult[0].length
          //         }
          //     }

          //     // 2️⃣ Try using context_after
          //     if (context_after) {
          //         const afterMatch = new RegExp(escapeRegex(context_after))
          //         const afterResult = afterMatch.exec(text)

          //         if (afterResult) {
          //             end = afterResult.index
          //         }
          //     }

          //     // 3️⃣ Fallback to stored indexes
          //     if (start === -1 && typeof start_index === 'number') {
          //         start = start_index
          //     }

          //     if (end === -1 && typeof end_index === 'number') {
          //         end = end_index
          //     }

          //     // 4️⃣ Inject span ONLY if indexes are valid
          //     if (start !== -1 && end !== -1 && end > start) {
          //         const before = text.slice(0, start)
          //         const middle = text.slice(start, end)
          //         const after = text.slice(end)

          //         const spanStart = `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:red;">`
          //         const spanEnd = `</span>`

          //         containerEl.innerHTML =
          //             before + spanStart + middle + spanEnd + after
          //     }

          //     const stillNotFound = containerEl.querySelectorAll(
          //         `span[id="${id}_${table_name}_${column_name}"]`
          //     )

          //     if (!stillNotFound.length) {
          //         const spanStart = `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:red;">`
          //         const spanEnd = `</span>`

          //         containerEl.innerHTML =
          //             spanStart +
          //             (selected_text || '[comment]') +
          //             spanEnd +
          //             containerEl.innerHTML
          //     }
          //     console.log("start"+start);
          //     console.log("end: "+ned)
          // }
        });
      }), "renderCommentedText", function renderCommentedText(text, comments, columnName) {
        if (!text || !comments) return text;
        var filtered = comments.filter(function (c) {
          return c.column_name === columnName;
        }).filter(function (c) {
          return c.start_index >= 0 && c.end_index > c.start_index && c.start_index < text.length;
        }).sort(function (a, b) {
          // Sort by start index, then by length (longer first)
          if (a.start_index !== b.start_index) {
            return a.start_index - b.start_index;
          }
          return b.end_index - b.start_index - (a.end_index - a.start_index);
        });

        // Track which characters are already highlighted
        var highlighted = new Array(text.length).fill(false);
        var highlights = [];

        // Process comments in order
        var _iterator = _createForOfIteratorHelper(filtered),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _comment = _step.value;
            var _start2 = _comment.start_index;
            var _end = Math.min(_comment.end_index, text.length);
            if (_start2 >= _end) continue;

            // Check how many characters in this range are already highlighted
            var newHighlightStart = _start2;
            while (newHighlightStart < _end && highlighted[newHighlightStart]) {
              newHighlightStart++;
            }

            // If there's any unhighlighted portion, add it
            if (newHighlightStart < _end) {
              var newHighlightEnd = newHighlightStart;
              while (newHighlightEnd < _end && !highlighted[newHighlightEnd]) {
                highlighted[newHighlightEnd] = true;
                newHighlightEnd++;
              }
              highlights.push({
                start: newHighlightStart,
                end: newHighlightEnd,
                comment: _comment
              });
            }
          }

          // Sort highlights by start position
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        highlights.sort(function (a, b) {
          return a.start - b.start;
        });

        // Build the result
        var result = '';
        var cursor = 0;
        for (var _i = 0, _highlights = highlights; _i < _highlights.length; _i++) {
          var highlight = _highlights[_i];
          var start = highlight.start,
            end = highlight.end,
            comment = highlight.comment;

          // Add plain text before highlight
          if (cursor < start) {
            result += text.slice(cursor, start);
          }

          // Add highlighted text
          var selectedText = text.slice(start, end);
          result += "<span id=\"".concat(comment.id, "_").concat(comment.table_name, "_").concat(comment.column_name, "\" ") + "style=\"background-color: darkorange; color:black;\">".concat(selectedText, "</span>");
          cursor = end;
        }

        // Add remaining text
        if (cursor < text.length) {
          result += text.slice(cursor);
        }
        return result;
      }), "resolvePapsTargetId", function resolvePapsTargetId(paps, columnName, comment) {
        var _paps$columnName;
        /// columns that belong to paps text fields
        var papsColumns = ['beneficiaries', 'objective', 'rationale'];

        // fallback for non-paps columns
        if (!papsColumns.includes(columnName)) {
          return "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(columnName);
        }

        // full candidate ID
        var fullId = "".concat(comment.id, "_").concat(comment.table_name, "_").concat(columnName);

        // get paps column content safely
        var columnText = String((_paps$columnName = paps === null || paps === void 0 ? void 0 : paps[columnName]) !== null && _paps$columnName !== void 0 ? _paps$columnName : '');

        // check if comment.comment exists exactly within the paps column text
        if (comment.comment && columnText.includes(comment.comment)) {
          return fullId;
        }

        // fallback to column name only
        return columnName;
      }), "escapeHtml", function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }), "highlightQuillComments", function highlightQuillComments(html, comments, columnName) {
        var _this3 = this;
        if (!html || !comments) return html;
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var textContent = doc.body.textContent || '';
        var cursor = 0;

        // Filter and sort comments by start_index
        var filtered = comments.filter(function (c) {
          return c.column_name === columnName;
        }).sort(function (a, b) {
          return a.start_index - b.start_index;
        });
        var fragments = [];
        filtered.forEach(function (comment) {
          var start = comment.start_index;
          var end = comment.end_index;
          if (start < 0 || end <= start || start >= textContent.length) return;

          // Text before comment
          if (cursor < start) {
            fragments.push(_this3.escapeHtml(textContent.slice(cursor, start)));
          }

          // Highlighted text
          var selectedText = textContent.slice(start, Math.min(end, textContent.length)) || comment.selected_text;
          fragments.push("<span id=\"".concat(comment.id, "_").concat(comment.table_name, "_").concat(comment.column_name, "\" style=\"background-color: darkorange; color:black;\">").concat(_this3.escapeHtml(selectedText), "</span>"));
          cursor = end;
        });

        // Remaining text
        if (cursor < textContent.length) {
          fragments.push(this.escapeHtml(textContent.slice(cursor)));
        }
        return fragments.join('');
      }), "highlightQuillComment", function highlightQuillComment(_ref2) {
        var quillRef = _ref2.quillRef,
          comment = _ref2.comment,
          columnName = _ref2.columnName;
        if (!(quillRef !== null && quillRef !== void 0 && quillRef.getQuill)) return;
        var quill = quillRef.getQuill();
        var text = quill.getText();
        var start = comment.start_index;
        var length = comment.end_index - comment.start_index;

        // 1️⃣ First attempt: direct index
        if (start >= 0 && start + length <= text.length && text.substring(start, start + length) === comment.selected_text) {
          this.applyQuillHighlight(quill, start, length);
          return;
        }

        // 2️⃣ Fallback: fuzzy match using context
        var index = this.findTextByContext(text, comment.selected_text, comment.context_before, comment.context_after);
        if (index !== -1) {
          this.applyQuillHighlight(quill, index, comment.selected_text.length);
        } else if (columnName !== 'rationale') {
          // 3️⃣ Fallback to rationale column
          this.$emit('highlight-fallback-rationale', comment);
        }
      }), "applyQuillHighlight", function applyQuillHighlight(quill, index, length) {
        quill.setSelection(index, length, 'silent');
        quill.formatText(index, length, {
          background: '#46ff18ff'
        }, 'silent');
        quill.scrollIntoView();

        // Remove highlight after animation
        setTimeout(function () {
          quill.formatText(index, length, {
            background: false
          }, 'silent');
        }, 2000);
      }), "findTextByContext", function findTextByContext(text, selected, before, after) {
        var dmp = new (diff_match_patch__WEBPACK_IMPORTED_MODULE_25___default())();
        var searchBase = "".concat(before).concat(selected).concat(after);
        var patch = dmp.patch_make(searchBase, text);
        var result = dmp.patch_apply(patch, text);
        if (!result[1].includes(true)) return -1;
        var idx = text.indexOf(selected);
        return idx !== -1 ? idx : -1;
      }), "highlightSelection", function highlightSelection() {
        var sel = window.getSelection();
        if (!sel.rangeCount) return;
        var range = sel.getRangeAt(0).cloneRange();

        // Create highlight wrapper
        var mark = document.createElement("span");
        mark.className = "text-highlight";
        mark.style.backgroundColor = "#6dfa20";
        mark.style.color = "black";

        // Surround selected text
        try {
          range.surroundContents(mark);
        } catch (e) {
          // If selection crosses multiple nodes, fallback
          console.warn("Complex selection – wrapping failed", e);
          return;
        }
      }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "removeHighlights", function removeHighlights() {
        // Remove all highlights
        var highlights = document.querySelectorAll('.text-highlight');
        highlights.forEach(function (highlight) {
          // Unwrap the span element
          highlight.replaceWith.apply(highlight, _toConsumableArray(highlight.childNodes));
        });

        // Clear any existing text selection
        window.getSelection().removeAllRanges();
      }), "formatDateTime", function formatDateTime(dateString) {
        if (!dateString) return '';
        var date = new Date(dateString);
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        var datePart = date.toLocaleDateString('en-US', options);
        var timePart = date.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        return "".concat(datePart, " - ").concat(timePart);
      }), "sourceOfFundsText", function sourceOfFundsText(code) {
        var mapping = {
          'gen_fund': 'General Fund',
          'dev': '20% Development Fund',
          'ldrrmf': 'LDRRMF',
          'other': 'Other Sources',
          '': ''
        };
        return mapping[code] || code;
      }), "formatMonthDayYear", function formatMonthDayYear(dateStr) {
        if (!dateStr) return '';
        var parts = dateStr.split('-');
        if (parts.length !== 3) return dateStr; // fallback to original

        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1; // months are 0-indexed in JS
        var day = parseInt(parts[2], 10);
        var date = new Date(year, month, day);
        // Check if date is valid
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }))
    }).mount(el);
  },
  title: function title(_title) {
    return 'PPA: ' + _title;
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init({
  delay: 250,
  color: '#29d',
  includeCSS: true,
  showSpinner: false
});

// if (!Vue.options.filters.escapeHtml) {
//   Vue.filter('escapeHtml', function(text) {
//     if (!text) return '';
//     const div = document.createElement('div');
//     div.textContent = text;
//     return div.innerHTML;
//   });
// }

/***/ },

/***/ "./resources/js/bootstrap.js"
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

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

/***/ },

/***/ "./resources/sass/app.scss"
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "?2128"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
=======
/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5847],{1688(){},2634(){},4122(e,t,n){"use strict";var a=n(9726),r=n(9234),o={class:"page-container"},i={class:"main-content bgc-grey-100"},l={id:"mainContent"};function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var d={class:"header navbar"},u={class:"header-container",id:"sidebar-toggle",href:"javascript:void(0);",style:{"min-width":"320px","background-color":"#452b02",color:"black"}},p={key:0,class:"nav-left"},m={id:"sidebar-toggle",class:"sidebar-toggle"},v={class:"text-danger"},h={key:1,class:"nav-right"},g={class:"nav-right"},f={key:0,class:"nav-right"},C={class:"dropdown"},w={href:"",class:"dropdown-toggle no-after peers fxw-nw ai-c lh-1","data-bs-toggle":"dropdown"},x={class:"peer"},I={class:"fsz-sm",style:{color:"#FFD700","font-weight":"bold"}},b={class:"dropdown-menu fsz-sm dropdown-menu-c"},P={key:0},V={key:1},y={key:2,role:"separator",class:"divider"},N={key:3};const E={methods:{logout:function(){this.$inertia.post("/logout"),location.href="/"},update_verified:function(){axios.patch("/users/update_verified_at")}}};var A=n(6262);function S(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var _={class:"bdT ta-c p-30 lh-0 fsz-sm",style:{"background-color":"#4d3102",color:"#fff"}};const R={};function O(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var z={class:"sidebar"},B={class:"sidebar-inner"},D={class:"sidebar-menu scrollable pos-r"},T={class:"nav-item dropdown"},F={class:"dropdown-menu"},L={class:"nav-item dropdown"},H={class:"dropdown-menu"},j={key:0},U={class:"nav-item"},G={class:"nav-item dropdown"},q={class:"dropdown-menu"},Q={key:0},Y={class:"nav-item"},Z={class:"nav-item dropdown"},W={class:"dropdown-menu"},X={key:0,class:"nav-item dropdown"},J={class:"dropdown-menu"},K={key:1},ee={key:2},te={key:0,class:"nav-item dropdown"},ne={class:"dropdown-menu"},ae={key:0},re={key:1},oe={key:2},ie={key:3},le={key:1,class:"nav-item dropdown"},se={class:"dropdown-menu"},ce={class:"nav-item"},de={class:"nav-item"},ue={class:"nav-item"},pe=["href"];const me={mounted:function(){$(function(){$(".sidebar .sidebar-menu li a").on("click",function(){var e=$(this);e.parent().hasClass("open")?e.parent().children(".dropdown-menu").slideUp(200,function(){e.parent().removeClass("open")}):(e.parent().parent().children("li.open").children(".dropdown-menu").slideUp(200),e.parent().parent().children("li.open").children("a").removeClass("open"),e.parent().parent().children("li.open").removeClass("open"),e.parent().children(".dropdown-menu").slideDown(200,function(){e.parent().addClass("open")}))}),$(".sidebar").find(".sidebar-link").each(function(e,t){$(t).removeClass("active")}).filter(function(){var e=$(this).attr("href");return("/"===e[0]?e.substr(1):e)===window.location.pathname.substr(1)}).addClass("active"),$(".sidebar-toggle").on("click",function(e){$("body").toggleClass("is-collapsed"),e.preventDefault()})})}},ve={components:{Nav:(0,A.A)(E,[["render",function(e,t,n,r,o,i){var l=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)("div",d,[(0,a.createElementVNode)("div",u,[t[11]||(t[11]=(0,a.createStaticVNode)('<ul class="nav-left"><li><a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD700" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg></a></li><li class="search-input"><input class="form-control" type="text" placeholder="Search..."></li></ul>',1)),e.$page.props.flash.impersonating?((0,a.openBlock)(),(0,a.createElementBlock)("ul",p,[(0,a.createElementVNode)("li",null,[(0,a.createElementVNode)("a",m,[(0,a.createElementVNode)("span",v,[t[1]||(t[1]=(0,a.createTextVNode)("You are impersonating ",-1)),(0,a.createElementVNode)("b",null,[(0,a.createElementVNode)("u",null,(0,a.toDisplayString)(e.$page.props.auth.user.FullName),1)])])])])])):(0,a.createCommentVNode)("",!0),e.$page.props.flash.impersonating?((0,a.openBlock)(),(0,a.createElementBlock)("ul",h,s(t[2]||(t[2]=[(0,a.createElementVNode)("li",null,null,-1)])))):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("ul",g,[e.$page.props.flash.impersonating?((0,a.openBlock)(),(0,a.createElementBlock)("li",f,[(0,a.createVNode)(l,{href:"/users/stop-impersonate",class:"btn btn-sm btn-danger text-white px-3 py-1"},{default:(0,a.withCtx)(function(){return s(t[3]||(t[3]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-exclamation-circle",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),(0,a.createElementVNode)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})],-1),(0,a.createElementVNode)("span",null,"   Stop Impersonating",-1)]))}),_:1})])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("li",C,[(0,a.createElementVNode)("a",w,[t[4]||(t[4]=(0,a.createElementVNode)("div",{class:"peer mR-10"},null,-1)),(0,a.createElementVNode)("div",x,[(0,a.createElementVNode)("span",I,(0,a.toDisplayString)(e.$page.props.auth.user.FullName),1)]),t[5]||(t[5]=(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-caret-down-fill mL-5",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})],-1))]),(0,a.createElementVNode)("ul",b,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{href:"/users/settings",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},{default:(0,a.withCtx)(function(){return s(t[6]||(t[6]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-sliders2 mR-10",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"})],-1),(0,a.createElementVNode)("span",null," Setting",-1)]))}),_:1})]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{href:"/users/change-password",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},{default:(0,a.withCtx)(function(){return s(t[7]||(t[7]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-person-bounding-box mR-10",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"}),(0,a.createElementVNode)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"})],-1),(0,a.createElementVNode)("span",null," Change Password",-1)]))}),_:1})]),"04"==e.$page.props.auth.user.office.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",P,[(0,a.createVNode)(l,{href:"/users",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},{default:(0,a.withCtx)(function(){return s(t[8]||(t[8]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-person-fill-gear",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})],-1),(0,a.createElementVNode)("span",null,"   Users",-1)]))}),_:1})])):(0,a.createCommentVNode)("",!0),e.$page.props.flash.impersonating?((0,a.openBlock)(),(0,a.createElementBlock)("li",V,[(0,a.createVNode)(l,{href:"/users/stop-impersonate",class:"d-b td-n pY-5 bgcH-grey-100 c-danger"},{default:(0,a.withCtx)(function(){return s(t[9]||(t[9]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-exclamation-circle",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),(0,a.createElementVNode)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})],-1),(0,a.createElementVNode)("span",null,"   Stop Impersonating",-1)]))}),_:1})])):(0,a.createCommentVNode)("",!0),e.$page.props.flash.impersonating?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("li",y)),e.$page.props.flash.impersonating?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("li",N,[(0,a.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return i.logout()}),href:"",class:"d-b td-n pY-5 bgcH-grey-100 c-grey-700"},s(t[10]||(t[10]=[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",class:"bi bi-box-arrow-right mR-10",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})],-1),(0,a.createElementVNode)("span",null," Logout",-1)])))]))])])])])])}]]),Footer:(0,A.A)(R,[["render",function(e,t,n,r,o,i){return(0,a.openBlock)(),(0,a.createElementBlock)("footer",_,S(t[0]||(t[0]=[(0,a.createElementVNode)("span",{style:{color:"#FFD700"}},[(0,a.createTextVNode)("Developed by "),(0,a.createElementVNode)("a",{href:"https://davaodeoro.gov.ph/"},"PICTO")],-1)])))}]]),Sidebar:(0,A.A)(me,[["render",function(e,t,n,r,o,i){var l=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)("div",z,[(0,a.createElementVNode)("div",B,[t[46]||(t[46]=(0,a.createStaticVNode)('<div class="sidebar-logo"><div class="peers ai-c fxw-nw"><div class="peer peer-greed"><a class="sidebar-link td-n" href="/"><div class="peers ai-c fxw-nw"><div class="peer"><div class="logo"><img src="/images/logo.png" alt="" class="img-fluid p-5"></div></div><div class="peer peer-greed"><h5 class="lh-1 mB-0 logo-text"><span style="color:#FFD700;font-size:medium;"> Planning and Budgeting System </span></h5></div></div></a></div><div class="peer"><div class="mobile-toggle sidebar-toggle"><a href="" class="td-n"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg></a></div></div></div></div>',1)),(0,a.createElementVNode)("ul",D,[t[43]||(t[43]=(0,a.createElementVNode)("hr",null,null,-1)),(0,a.createElementVNode)("li",T,[t[8]||(t[8]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-border-outer" viewBox="0 0 16 16"><path d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z"></path><path d="M0 0v16h16V0H0zm1 1h14v14H1V1z"></path></svg></span><span class="title">Logframe</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",F,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/Societal"===e.$page.url}]),href:"/Societal"},{default:(0,a.withCtx)(function(){return O(t[0]||(t[0]=[(0,a.createElementVNode)("span",{class:"title"},"Societal Goals",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",L,[t[3]||(t[3]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="title">Outcomes</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",H,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/Sectoral"===e.$page.url}]),href:"/Sectoral"},{default:(0,a.withCtx)(function(){return O(t[1]||(t[1]=[(0,a.createElementVNode)("span",{class:"title"},"Sectoral Outcomes",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/Organization"===e.$page.url}]),href:"/Organization"},{default:(0,a.withCtx)(function(){return O(t[2]||(t[2]=[(0,a.createElementVNode)("span",{class:"title"},"Organizational Outcomes",-1)]))}),_:1},8,["class"])])])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/mfos/direct"===e.$page.url}]),href:"/mfos/direct"},{default:(0,a.withCtx)(function(){return O(t[4]||(t[4]=[(0,a.createElementVNode)("span",{class:"title"},"Major Final Output",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/paps/direct"===e.$page.url}]),href:"/paps/direct"},{default:(0,a.withCtx)(function(){return O(t[5]||(t[5]=[(0,a.createElementVNode)("span",{class:"title"},"Programs, Activities, Projects",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:e.$page.url==="/logframe/".concat(e.$page.props.auth.user.office.ffunccod)}]),href:"/logframe/".concat(e.$page.props.auth.user.office.ffunccod)},{default:(0,a.withCtx)(function(){return O(t[6]||(t[6]=[(0,a.createElementVNode)("span",{class:"title"},"View Logframe ",-1)]))}),_:1},8,["href","class"])]),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",j,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/logframe"===e.$page.url}]),href:"/logframe"},{default:(0,a.withCtx)(function(){return O(t[7]||(t[7]=[(0,a.createElementVNode)("span",{class:"title"},"Logframes -Other Offices",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0)])]),(0,a.createElementVNode)("li",U,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/opcrlist"===e.$page.url}]),href:"/opcrlist"},{default:(0,a.withCtx)(function(){return O(t[9]||(t[9]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-border-style",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"OPCR",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",G,[t[16]||(t[16]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2h12v20H4z"></path><path d="M6 6h8"></path><path d="M6 10h8"></path><circle cx="8" cy="16" r="2"></circle></svg></span><span class="title">IPP</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",q,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision/0?source=direct"===e.$page.url}]),href:"/revision/0?source=direct"},{default:(0,a.withCtx)(function(){return O(t[10]||(t[10]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{d:"M4 2h12v20H4z"}),(0,a.createElementVNode)("path",{d:"M6 6h8"}),(0,a.createElementVNode)("path",{d:"M6 10h8"}),(0,a.createElementVNode)("circle",{cx:"8",cy:"16",r:"2"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  Regular PPAs",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/development-fund/0"===e.$page.url}]),href:"/development-fund/0?source=dev"},{default:(0,a.withCtx)(function(){return O(t[11]||(t[11]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{d:"M4 2h12v20H4z"}),(0,a.createElementVNode)("path",{d:"M6 6h8"}),(0,a.createElementVNode)("path",{d:"M6 10h8"}),(0,a.createElementVNode)("circle",{cx:"8",cy:"16",r:"2"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  Engineering PPAs",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/development-fund/0"===e.$page.url}]),href:"/development-fund/0?source=other"},{default:(0,a.withCtx)(function(){return O(t[12]||(t[12]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{d:"M4 2h12v20H4z"}),(0,a.createElementVNode)("path",{d:"M6 6h8"}),(0,a.createElementVNode)("path",{d:"M6 10h8"}),(0,a.createElementVNode)("circle",{cx:"8",cy:"16",r:"2"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  Other Sources",-1)]))}),_:1},8,["class"])]),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",Q,["04"==e.$page.props.auth.user.department_code||"1399"==e.$page.props.auth.user.office.empl_id?((0,a.openBlock)(),(0,a.createBlock)(l,{key:0,class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision_plans?source=direct"===e.$page.url}]),href:"/revision_plans?source=direct"},{default:(0,a.withCtx)(function(){return O(t[13]||(t[13]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-file-ruled-fill",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  IPP (All Offices)",-1)]))}),_:1},8,["class"])):(0,a.createCommentVNode)("",!0)])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision/0?source=sip"===e.$page.url}]),href:"/revision/0?source=sip"},{default:(0,a.withCtx)(function(){return O(t[14]||(t[14]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{d:"M4 2h12v20H4z"}),(0,a.createElementVNode)("path",{d:"M6 6h8"}),(0,a.createElementVNode)("path",{d:"M6 10h8"}),(0,a.createElementVNode)("circle",{cx:"8",cy:"16",r:"2"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  SIP",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision/0?source=sip"===e.$page.url}]),href:"/ipp_aip_codes"},{default:(0,a.withCtx)(function(){return O(t[15]||(t[15]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{d:"M4 2h12v20H4z"}),(0,a.createElementVNode)("path",{d:"M6 6h8"}),(0,a.createElementVNode)("path",{d:"M6 10h8"}),(0,a.createElementVNode)("circle",{cx:"8",cy:"16",r:"2"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"  AIP",-1)]))}),_:1},8,["class"])])])]),(0,a.createElementVNode)("li",Y,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision_plans?source=budget"===e.$page.url}]),href:"/revision_plans?source=budget"},{default:(0,a.withCtx)(function(){return O(t[17]||(t[17]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-receipt",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"}),(0,a.createElementVNode)("path",{d:"M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"Budget Proposal",-1)]))}),_:1},8,["class"])]),t[44]||(t[44]=(0,a.createElementVNode)("hr",null,null,-1)),(0,a.createElementVNode)("li",Z,[t[29]||(t[29]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16"><path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path></svg></span><span class="title">Libraries</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",W,["04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",X,[t[23]||(t[23]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="title">Agenda</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",J,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/ChiefAgenda"===e.$page.url}]),href:"/ChiefAgenda"},{default:(0,a.withCtx)(function(){return O(t[18]||(t[18]=[(0,a.createElementVNode)("span",{class:"title"},"Chief Executive Agenda",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/EconomicAgenda"===e.$page.url}]),href:"/EconomicAgenda"},{default:(0,a.withCtx)(function(){return O(t[19]||(t[19]=[(0,a.createElementVNode)("span",{class:"title"},"Socio-Economic Agenda",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/SDG"===e.$page.url}]),href:"/SDG"},{default:(0,a.withCtx)(function(){return O(t[20]||(t[20]=[(0,a.createElementVNode)("span",{class:"title"},"Sustainable Devt Goals",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/ELA"===e.$page.url}]),href:"/ELA"},{default:(0,a.withCtx)(function(){return O(t[21]||(t[21]=[(0,a.createElementVNode)("span",{class:"title"},"Executive Legislative Agenda",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/ResearchAgenda"===e.$page.url}]),href:"/ResearchAgenda"},{default:(0,a.withCtx)(function(){return O(t[22]||(t[22]=[(0,a.createElementVNode)("span",{class:"title"},"Research Agenda",-1)]))}),_:1},8,["class"])])])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",K,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/HGDGChecklist"===e.$page.url}]),href:"/HGDGChecklist"},{default:(0,a.withCtx)(function(){return O(t[24]||(t[24]=[(0,a.createElementVNode)("span",{class:"title"},"HGDG Checklist",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",ee,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/Issues"===e.$page.url}]),href:"/Issues"},{default:(0,a.withCtx)(function(){return O(t[25]||(t[25]=[(0,a.createElementVNode)("span",{class:"title"},"GAD Related Issues",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/indicators"===e.$page.url}]),href:"/indicators"},{default:(0,a.withCtx)(function(){return O(t[26]||(t[26]=[(0,a.createElementVNode)("span",{class:"title"},"Indicators",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/OPCRpaps/direct"===e.$page.url}]),href:"/OPCRpaps/direct"},{default:(0,a.withCtx)(function(){return O(t[27]||(t[27]=[(0,a.createElementVNode)("span",{class:"title"},"OPCR Standard",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/user/employees"===e.$page.url}]),href:"/user/employees"},{default:(0,a.withCtx)(function(){return O(t[28]||(t[28]=[(0,a.createElementVNode)("span",{class:"title"},"Employees",-1)]))}),_:1},8,["class"])])])]),t[45]||(t[45]=(0,a.createElementVNode)("hr",null,null,-1)),"04"==e.$page.props.auth.user.department_code||"02"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",te,[t[36]||(t[36]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path></svg></span><span class="title">Review/Approve</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",ne,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/review-approve/targets/"===e.$page.url}]),href:"/review-approve/targets/"},{default:(0,a.withCtx)(function(){return O(t[30]||(t[30]=[(0,a.createElementVNode)("span",{class:"title"},"Targets",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/review-approve/ratings/"===e.$page.url}]),href:"/review-approve/ratings/"},{default:(0,a.withCtx)(function(){return O(t[31]||(t[31]=[(0,a.createElementVNode)("span",{class:"title"},"Rating",-1)]))}),_:1},8,["class"])]),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",ae,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/review-approve/ratings?source=ppdo_approval"===e.$page.url}]),href:"/review-approve/ratings?source=ppdo_approval"},{default:(0,a.withCtx)(function(){return O(t[32]||(t[32]=[(0,a.createElementVNode)("span",{class:"title"},"Rating (For Approval)",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",re,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision_plans?source=rev_app"===e.$page.url}]),href:"/revision_plans?source=rev_app"},{default:(0,a.withCtx)(function(){return O(t[33]||(t[33]=[(0,a.createElementVNode)("span",{class:"title"},"Project Profile",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",oe,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision_plans?source=approved"===e.$page.url}]),href:"/revision_plans?source=approved"},{default:(0,a.withCtx)(function(){return O(t[34]||(t[34]=[(0,a.createElementVNode)("span",{class:"title"},"Project Profile (Approved)",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",ie,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/institutional_aip"===e.$page.url}]),href:"/institutional_aip"},{default:(0,a.withCtx)(function(){return O(t[35]||(t[35]=[(0,a.createElementVNode)("span",{class:"title"},"AIP",-1)]))}),_:1},8,["class"])])):(0,a.createCommentVNode)("",!0)])])):(0,a.createCommentVNode)("",!0),"04"==e.$page.props.auth.user.department_code||"02"==e.$page.props.auth.user.department_code?((0,a.openBlock)(),(0,a.createElementBlock)("li",le,[t[39]||(t[39]=(0,a.createStaticVNode)('<a class="dropdown-toggle" href="javascript:void(0);"><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-aspect-ratio-fill" viewBox="0 0 16 16"><path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1z"></path></svg></span><span class="title">OPCR Tracking</span><span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></span></a>',1)),(0,a.createElementVNode)("ul",se,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/opcr-tracking/targets/"===e.$page.url}]),href:"/opcr-tracking/targets/"},{default:(0,a.withCtx)(function(){return O(t[37]||(t[37]=[(0,a.createElementVNode)("span",{class:"title"},"Targets",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",null,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/opcr-tracking/ratings/"===e.$page.url}]),href:"/opcr-tracking/ratings/"},{default:(0,a.withCtx)(function(){return O(t[38]||(t[38]=[(0,a.createElementVNode)("span",{class:"title"},"Ratings",-1)]))}),_:1},8,["class"])])])])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("li",ce,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/review-approve/"===e.$page.url}]),href:"/manual"},{default:(0,a.withCtx)(function(){return O(t[40]||(t[40]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar-fill",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"IPP Manual",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",de,[(0,a.createVNode)(l,{class:(0,a.normalizeClass)(["sidebar-link",{active:"/project-profile-tracking"===e.$page.url}]),href:"/project-profile-tracking"},{default:(0,a.withCtx)(function(){return O(t[41]||(t[41]=[(0,a.createElementVNode)("span",null,null,-1),(0,a.createElementVNode)("span",{class:"icon-holder"},[(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar-fill",viewBox:"0 0 16 16"},[(0,a.createElementVNode)("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"})])],-1),(0,a.createElementVNode)("span",{class:"title"},"IPP Tracking",-1)]))}),_:1},8,["class"])]),(0,a.createElementVNode)("li",ue,[(0,a.createElementVNode)("a",{class:(0,a.normalizeClass)(["sidebar-link",{active:"/revision/0?source=sip"===e.$page.url}]),href:"https://accomplishment.davaodeoro.gov.ph/login/authentication?username=".concat(e.$page.props.auth.user.UserName,"&password=").concat(e.$page.props.auth.user.UserPassword),target:"_blank",rel:"noopener noreferrer"},O(t[42]||(t[42]=[(0,a.createStaticVNode)('<span></span><span class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2h12v20H4z"></path><path d="M6 6h8"></path><path d="M6 10h8"></path><circle cx="8" cy="16" r="2"></circle></svg></span><span class="title">Monthly Accomplishments</span>',3)])),10,pe)])])])])}]])}},he=(0,A.A)(ve,[["render",function(e,t,n,r,s,c){var d=(0,a.resolveComponent)("Sidebar"),u=(0,a.resolveComponent)("Notification"),p=(0,a.resolveComponent)("Nav"),m=(0,a.resolveComponent)("Footer");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(d),(0,a.createElementVNode)("div",o,[(0,a.createVNode)(u),(0,a.createVNode)(p),(0,a.createElementVNode)("main",i,[(0,a.createElementVNode)("div",l,[(0,a.renderSlot)(e.$slots,"default")])]),(0,a.createVNode)(m)])])}]]);function ge(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return fe(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var Ce={class:"position-fixed top-0 end-0 p-3",style:{"z-index":"1000"}};n(8465);const we={watch:{"$page.props.flash":{handler:function(e){e.message?this.$swal({icon:"success",iconColor:"white",title:e.message,timer:5e3,timerProgressBar:!0,customClass:{popup:"bg-gradient-success"}}):e.error?this.$swal({icon:"error",iconColor:"white",title:e.error,timer:5e3,timerProgressBar:!0,customClass:{popup:"bg-gradient-danger"}}):e.info?this.$swal({icon:"info",iconColor:"white",title:e.info,timer:5e3,timerProgressBar:!0,customClass:{popup:"bg-gradient-info"}}):e.deleted&&this.$swal({icon:"warning",iconColor:"white",title:e.deleted,timer:5e3,timerProgressBar:!0,customClass:{popup:"bg-gradient-deleted"}})},deep:!0}}};var xe=n(5072),Ie=n.n(xe),be=n(4534),Pe={insert:"head",singleton:!1};Ie()(be.A,Pe);be.A.locals;const Ve=(0,A.A)(we,[["render",function(e,t,n,r,o,i){return(0,a.openBlock)(),(0,a.createElementBlock)("div",Ce,ge(t[0]||(t[0]=[(0,a.createElementVNode)("div",{class:"toast align-items-center",role:"alert","aria-atomic":"true","aria-live":"polite","data-bs-autohide":"true","data-bs-delay":"5000"},null,-1)])))}]]);var ye=n(4443),Ne=(n(4564),{key:0,class:"fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"});const Ee={props:{showing:{required:!0,type:Boolean}}},Ae=(0,A.A)(Ee,[["render",function(e,t,n,r,o,i){return n.showing?((0,a.openBlock)(),(0,a.createElementBlock)("div",Ne," The modal will go here. ")):(0,a.createCommentVNode)("",!0)}]]);var Se=n(9092),ke=n.n(Se),_e=n(3424),Re=n.n(_e),Oe=n(3356),Me=n.n(Oe),ze=n(8460),Be=n.n(ze),De=n(8216),Te=n.n(De),$e=n(864),Fe=n.n($e),Le=(n(2326),n(8936)),He=n(2799),je=n(9950),Ue=(n(711),n(2060)),Ge=n.n(Ue),qe=(n(2494),n(1743)),Qe=n(8640),Ye=n(8646),Ze=n(5531),We=n.n(Ze),Xe=n(689),Je=n.n(Xe),Ke=n(2189),et=n.n(Ke);function tt(e){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(e)}function nt(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=tt(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=tt(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==tt(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(e){return function(e){if(Array.isArray(e))return it(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ot(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,i,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=o.call(n)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}(e,t)||ot(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ot(e,t){if(e){if("string"==typeof e)return it(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?it(e,t):void 0}}function it(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function lt(){var e,t,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",r=n.toStringTag||"@@toStringTag";function o(n,a,r,o){var s=a&&a.prototype instanceof l?a:l,c=Object.create(s.prototype);return st(c,"_invoke",function(n,a,r){var o,l,s,c=0,d=r||[],u=!1,p={p:0,n:0,v:e,a:m,f:m.bind(e,4),d:function(t,n){return o=t,l=0,s=e,p.n=n,i}};function m(n,a){for(l=n,s=a,t=0;!u&&c&&!r&&t<d.length;t++){var r,o=d[t],m=p.p,v=o[2];n>3?(r=v===a)&&(s=o[(l=o[4])?5:(l=3,3)],o[4]=o[5]=e):o[0]<=m&&((r=n<2&&m<o[1])?(l=0,p.v=a,p.n=o[1]):m<v&&(r=n<3||o[0]>a||a>v)&&(o[4]=n,o[5]=a,p.n=v,l=0))}if(r||n>1)return i;throw u=!0,a}return function(r,d,v){if(c>1)throw TypeError("Generator is already running");for(u&&1===d&&m(d,v),l=d,s=v;(t=l<2?e:s)||!u;){o||(l?l<3?(l>1&&(p.n=-1),m(l,s)):p.n=s:p.v=s);try{if(c=2,o){if(l||(r="next"),t=o[r]){if(!(t=t.call(o,s)))throw TypeError("iterator result is not an object");if(!t.done)return t;s=t.value,l<2&&(l=0)}else 1===l&&(t=o.return)&&t.call(o),l<2&&(s=TypeError("The iterator does not provide a '"+r+"' method"),l=1);o=e}else if((t=(u=p.n<0)?s:n.call(a,p))!==i)break}catch(t){o=e,l=1,s=t}finally{c=1}}return{value:t,done:u}}}(n,r,o),!0),c}var i={};function l(){}function s(){}function c(){}t=Object.getPrototypeOf;var d=[][a]?t(t([][a]())):(st(t={},a,function(){return this}),t),u=c.prototype=l.prototype=Object.create(d);function p(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,st(e,r,"GeneratorFunction")),e.prototype=Object.create(u),e}return s.prototype=c,st(u,"constructor",c),st(c,"constructor",s),s.displayName="GeneratorFunction",st(c,r,"GeneratorFunction"),st(u),st(u,r,"Generator"),st(u,a,function(){return this}),st(u,"toString",function(){return"[object Generator]"}),(lt=function(){return{w:o,m:p}})()}function st(e,t,n,a){var r=Object.defineProperty;try{r({},"",{})}catch(e){r=0}st=function(e,t,n,a){function o(t,n){st(e,t,function(e){return this._invoke(t,n,e)})}t?r?r(e,t,{value:n,enumerable:!a,configurable:!a,writable:!a}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},st(e,t,n,a)}function ct(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}n(8290),He.default.register({"modules/better-table":Ge()},!0),window.Quill=He.default,window.Mark=Je(),window.DiffMatchPatch=et();var dt,ut,pt,mt,vt=ke()(Re(),Me(),Be(),Te(),Fe());dt="/images/OPCR_ICON.png",(ut=document.querySelector("link[rel~='icon']"))||((ut=document.createElement("link")).rel="icon",document.head.appendChild(ut)),ut.href=dt,(0,r.sj)({resolve:(pt=lt().m(function e(t){var a,r;return lt().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,n(7256)("./".concat(t));case 1:return r=e.v.default,null!==(a=r.layout)&&void 0!==a||(r.layout=he),e.a(2,r)}},e)}),mt=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=pt.apply(e,t);function o(e){ct(r,n,a,o,i,"next",e)}function i(e){ct(r,n,a,o,i,"throw",e)}o(void 0)})},function(e){return mt.apply(this,arguments)}),setup:function(e){var t,n=e.el,o=e.App,i=e.props,l=e.plugin;(0,a.createApp)({render:function(){return(0,a.h)(o,i)}}).use(l).use(Qe.A).component("multiselect",qe.A).component("Link",r.N_).component("Head",r.p3).component("CardModal",Ae).component("Notification",Ve).component("FilePond",vt).component("v-select",Le.A).component("QuillEditor",je.tB).component("Inertia",Ye.Inertia).component("fuzzysort",We()).component("Mark",Je()).component("DiffMatchPatch",et()).mixin({data:function(){return{my_years:["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","2051","2052","2053","2054","2055","2056","2057","2058","2059","2060","2061","2062","2063","2064","2065","2066","2067","2068","2069","2070","2071","2072","2073","2074","2075","2076","2077","2078","2079","2080","2081","2082","2083","2084","2085","2086","2087","2088","2089","2090","2091","2092","2093","2094","2095","2096","2097","2098","2099","2100"],pcr_years:["2025","2026","2027","2028"],measurement_units:["meter","kilometer","mile","yard","centimeter","inch","foot","meter","gram","kilogram","ounce","pound","milliliter","liter","gallon","cubic meter","volt","kilovolt","megavolt"],comparison_operators:["<",">","≥","≤"],get jasper_ip(){return"paps.davaodeoro.gov.ph/"},office_aip:{1011:"01-01-001",1031:"01-01-012",1032:"01-03-002",1041:"01-01-010",1061:"01-01-015",1071:"01-01-009",1081:"01-01-007",1091:"01-01-005",1101:"01-01-006",1131:"01-01-011",4411:"01-01-013",7611:"01-01-014",8711:"01-01-016",8721:"01-01-017",8731:"01-02-002","8751-1":"01-01-008",4490:"01-03-003",1016:"01-01-002",1021:"01-01-003",4421:"01-03-001","1011-2":"01-03-004",1121:"01-03-009"},getFirstFourChars:function(e){return e.slice(0,4)},sectors:{"General Public Services Sector":["","Executive Services","Legislative Services","Planning and Development Coordination Services","Budgeting Services","Treasury Services","Accounting Services","Administrative Services","Civil Registry Services","General Services","Assessment of Real Property Services","Auditing Services | Information Services","Legal Services | Prosecution Services","Administration of Justice Services","Land Registration Services","Claim Registration Services","Police Services","Fire Protection Services","Repair and Maintenance of Government Facilities"],"Social Services Sector":["","Education and Manpower Development","Public Education Services","Medical Subsidiary Services","Manpower Development Services","Sports Center, Athletic Field, and Playground Maintenance Service cultural","Project Services","Cultural/Conference/Convention Center","Operation Services","Health","Health Services Field Projects (Immunization, Inoculation, Blood Donor Services)","Day Care Clinic","Hospital Services","Chest Clinic","Housing and Community Development","Housing Projects","Sanitary Services","Street Cleaning","Garbage Collection","Sewerage and Drainage","Street Lighting","Community Development Services"],"Economic Services":["","Agricultural Services","Veterinary Services","Natural Resources Services","Architectural Services","Engineering Services","Economic Enterprises and Public Operation Services","Tourism Services"],"Other Services":[]},isPreviewable:function(e){return["pdf","doc","docx","dot","dotx","dotm","xls","xlsx","xlsm","xlsb","xlt","xltx","xltm","jpg","jpeg","png","gif","bmp","webp","mp3","mp4","avi","mov","mkv","flv","wmv","ppt","pptx","pptm","pot","potx","potm"].includes(e)},isDragging:!1,dragOffsetX:0,dragOffsetY:0,highlighted:{rationale:"",objective:"",beneficiaries:""}}},methods:(t={formatDate:function(e){if(!e)return"";var t=e.replace(/\.\d{3,6}Z$/,"Z"),n=new Date(t),a=n.toLocaleDateString("en-US",{month:"long",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}),r=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"Asia/Manila"});return"".concat(a," ").concat(r)},goBack:function(){window.history.back()},cleanVariable:function(e){this.variable=e.target.value.replace(/[^0-9]/g,"")},NumbersOnly:function(e){e.target.value.toString();var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault(),e.toFixed(2)},format_number:function(e,t,n){return e.toLocaleString("en-US",{useGrouping:n,minimumFractionDigits:t,maximumFractionDigits:t})},format_number_conv:function(e,t,n){return parseFloat(e).toLocaleString("en-US",{useGrouping:n,minimumFractionDigits:t,maximumFractionDigits:t})},getStatus:function(e){return"string"!=typeof e&&(e=String(e)),"-2"==e?"Returned":"-1"===e?"Saved":"0"===e?"Submitted":"1"===e?"Reviewed":"2"===e?"Approved":"Unknown Status"},GAD_remark:function(e){var t=parseFloat(e),n="GAD is insivible";return t>=4&&t<8?n="Promising GAD prospects (conditional pass)":t>=8&&t<15?n="Gender Sensitive":t>=15&&t<20?n="Gender-responsive":t>=20&&(n="Fully gender-responsive"),n},yearNow:function(){return(new Date).getFullYear()},year_values:function(){return a.createApp,["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","2051","2052","2053","2054","2055","2056","2057","2058","2059","2060","2061","2062","2063","2064","2065","2066","2067","2068","2069","2070","2071","2072","2073","2074","2075","2076","2077","2078","2079","2080","2081","2082","2083","2084","2085","2086","2087","2088","2089","2090","2091","2092","2093","2094","2095","2096","2097","2098","2099","2100"]},allCaps:function(e){return e.toUpperCase()},formatMonthYear:function(e){var t=e.split("-"),n=t[0],a=new Date(t[0],t[1]-1).toLocaleString("en-US",{month:"long"});return"".concat(a," ").concat(n)},formatMonthYear2:function(e){if(!e)return"";var t=rt(e.split("-"),2),n=t[0],a=t[1],r=new Date(n,a-1).toLocaleString("en-US",{month:"long"});return"".concat(r," ").concat(n)},formatMonth:function(e){var t=e.split("-"),n=(t[0],new Date(t[0],t[1]-1).toLocaleString("en-US",{month:"long"}));return"".concat(n)},getImagePath:function(e){return"/images/".concat(e)},getSum:function(e,t){var n=parseFloat(e)+parseFloat(t);return this.format_number_conv(n,2,!0)},getDifference:function(e,t){var n=parseFloat(e)-parseFloat(t);return this.format_number_conv(n,2,!0)},truncateText:function(e,t){var n=e.split(" ");return n.length>t?n.slice(0,t).join(" ")+"...":e},getPlainTextWithoutTags:function(e){return e.replace(/<[^>]+>/g,"")}},nt(nt(nt(nt(nt(nt(nt(nt(nt(nt(t,"formatDate",function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"})}),"getPreUploadFileIcon",function(e){var t=e.toLowerCase();return["xls","xlsx","xlsm","xlsb","xlt","xltx","xltm"].includes(t)?"/images/icons/excel.png":"pdf"===t?"/images/icons/pdf.png":["doc","docx","dot","dotx","dotm"].includes(t)?"/images/icons/word.png":["ppt","pptx","pptm","pot","potx","potm"].includes(t)?"/images/icons/ppt.png":["mp4","avi","mov","mkv","flv","wmv","mp3"].includes(t)?"/images/icons/video.png":["jpg","jpeg","png","gif","bmp","webp"].includes(t)?"/images/icons/images.png":"/images/icons/file.png"}),"getStatus",function(e){var t=parseFloat(e);return-1===t?"Saved":0===t?"Submitted":1===t?"Reviewed":2===t?"Approved":-2===t?"Returned":"unknown"}),"startDrag",function(e){e.target.closest("button")||(this.isDragging=!0,this.dragOffsetX=e.clientX-this.$refs.dragPanel.offsetLeft,this.dragOffsetY=e.clientY-this.$refs.dragPanel.offsetTop,document.addEventListener("mousemove",this.onDrag),document.addEventListener("mouseup",this.stopDrag))}),"onDrag",function(e){this.isDragging&&(this.$refs.dragPanel.style.left=e.clientX-this.dragOffsetX+"px",this.$refs.dragPanel.style.top=e.clientY-this.dragOffsetY+"px")}),"stopDrag",function(){this.isDragging=!1,document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag)}),"formatProjectType",function(e){return{p:"Project Profile",d:"Project Design",sip:"SIP Profile"}[e]||e}),"formatAipStatus",function(e,t){return{"-1":"Saved",0:"Submitted",1:"Approved","-2":"Returned"}[e]}),"updateAIPStatus",function(e,t){var n=this;if(confirm("Are you sure you want to ".concat({LDC0:"submit this AIP for LDC review?","LDC-2":"return this AIP back from LDC?",LDC1:"approve this AIP for LDC?",SP0:"submit this AIP for SP review?","SP-2":"return this AIP back from SP?",SP1:"approve this AIP for SP?"}[e]||"proceed with this action?"," for the year ").concat(t,"?"))){var a={year_period:t};Ye.Inertia.post("/institutional_aip/status/".concat(e),a,{onSuccess:function(){n.$toast.success("AIP status updated successfully.")},onError:function(e){console.error(e),n.$toast.error("Failed to update AIP status.")}})}}),"highlightWithComments123",function(e,t,n,a){if(e&&null!=t&&t.length){var r=new(Je())(a),o=new(et());t.filter(function(e){return e.column_name===n}).forEach(function(t){var n=t.selected_text,a=t.context_before,i=t.context_after,l=t.id,s=t.table_name,c=t.column_name,d=t.comment_status,u=t.index_start,p=t.index_end,m="0"===d?"#ff0000":null,v=p-u,h=!1,g=function(e){m&&(e.style.color=m),e.style.backgroundColor="white",e.setAttribute("id","".concat(l,"_").concat(s,"_").concat(c))},f="".concat(a).concat(n).concat(i);if(r.mark(f,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){h=!0,g(e)}}),!h){var C=o.diff_main(e,n);o.diff_cleanupSemantic(C);var w="",x=1/0;if(C.forEach(function(e){if(0===e[0]){var t=o.diff_levenshtein(C);t<x&&(x=t,w=e[1])}}),w&&w.length>3&&r.mark(w,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){h=!0,g(e)}}),!h){if(a){var I=e.lastIndexOf(a);if(-1!==I){var b=I+a.length,P=e.substr(b,v);r.mark(P,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){h=!0,g(e)}})}}if(!h&&i){var V=e.indexOf(i);if(-1!==V){var y=Math.max(0,V-v),N=e.substr(y,v);r.mark(N,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){h=!0,g(e)}})}}}}})}}),nt(nt(nt(nt(nt(nt(nt(nt(nt(nt(t,"cleanPartialHtmlEdges",function(e){return e?e.replace(/^\s*(<\/?[a-zA-Z][^>]*$|^[^<]*>)/g,"").replace(/(<\/?[a-zA-Z][^>]*$|<[^>]*$)\s*$/g,"").trim():e}),"highlightWithComments",function(e,t,n,a){var r=this;if(e&&null!=t&&t.length){var o=new(Je())(a),i=t.filter(function(e){return e.column_name===n});i.forEach(function(t){var n=t.selected_text,a=t.context_before,i=t.context_after,l=t.id,s=t.table_name,c=t.column_name,d=t.comment_status,u=t.start_index,p=t.end_index,m="0"===d?"#ff0000":null,v=!1,h="".concat(a).concat(n).concat(i);if(o.mark(h,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){v=!0,m&&(e.style.color=m),e.style.backgroundColor="white",e.setAttribute("id","".concat(l,"_").concat(s,"_").concat(c))}}),!v&&(o.mark(n,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){v=!0,m&&(e.style.color=m),e.style.backgroundColor="white",e.setAttribute("id","".concat(l,"_").concat(s,"_").concat(c))}}),!v)){var g=e.substring(u,p).trim(),f=r.cleanPartialHtmlEdges(g);f&&o.mark(f,{separateWordSearch:!1,accuracy:"partially",acrossElements:!0,each:function(e){v=!0,function(e){throw new TypeError('"'+e+'" is read-only')}("naa"),m&&(e.style.color=m),e.style.backgroundColor="white",e.setAttribute("id","".concat(l,"_").concat(s,"_").concat(c))}})}})}}),"renderCommentedText",function(e,t,n){if(!e||!t)return e;var a,r=t.filter(function(e){return e.column_name===n}).filter(function(t){return t.start_index>=0&&t.end_index>t.start_index&&t.start_index<e.length}).sort(function(e,t){return e.start_index!==t.start_index?e.start_index-t.start_index:t.end_index-t.start_index-(e.end_index-e.start_index)}),o=new Array(e.length).fill(!1),i=[],l=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ot(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(r);try{for(l.s();!(a=l.n()).done;){var s=a.value,c=s.start_index,d=Math.min(s.end_index,e.length);if(!(c>=d)){for(var u=c;u<d&&o[u];)u++;if(u<d){for(var p=u;p<d&&!o[p];)o[p]=!0,p++;i.push({start:u,end:p,comment:s})}}}}catch(e){l.e(e)}finally{l.f()}i.sort(function(e,t){return e.start-t.start});for(var m="",v=0,h=0,g=i;h<g.length;h++){var f=g[h],C=f.start,w=f.end,x=f.comment;v<C&&(m+=e.slice(v,C));var I=e.slice(C,w);m+='<span id="'.concat(x.id,"_").concat(x.table_name,"_").concat(x.column_name,'" ')+'style="background-color: darkorange; color:black;">'.concat(I,"</span>"),v=w}return v<e.length&&(m+=e.slice(v)),m}),"resolvePapsTargetId",function(e,t,n){var a;if(!["beneficiaries","objective","rationale"].includes(t))return"".concat(n.table_row_id,"_").concat(n.table_name,"_").concat(t);var r="".concat(n.id,"_").concat(n.table_name,"_").concat(t),o=String(null!==(a=null==e?void 0:e[t])&&void 0!==a?a:"");return n.comment&&o.includes(n.comment)?r:t}),"escapeHtml",function(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}),"highlightQuillComments",function(e,t,n){var a=this;if(!e||!t)return e;var r=(new DOMParser).parseFromString(e,"text/html").body.textContent||"",o=0,i=t.filter(function(e){return e.column_name===n}).sort(function(e,t){return e.start_index-t.start_index}),l=[];return i.forEach(function(e){var t=e.start_index,n=e.end_index;if(!(t<0||n<=t||t>=r.length)){o<t&&l.push(a.escapeHtml(r.slice(o,t)));var i=r.slice(t,Math.min(n,r.length))||e.selected_text;l.push('<span id="'.concat(e.id,"_").concat(e.table_name,"_").concat(e.column_name,'" style="background-color: darkorange; color:black;">').concat(a.escapeHtml(i),"</span>")),o=n}}),o<r.length&&l.push(this.escapeHtml(r.slice(o))),l.join("")}),"highlightQuillComment",function(e){var t=e.quillRef,n=e.comment,a=e.columnName;if(null!=t&&t.getQuill){var r=t.getQuill(),o=r.getText(),i=n.start_index,l=n.end_index-n.start_index;if(i>=0&&i+l<=o.length&&o.substring(i,i+l)===n.selected_text)this.applyQuillHighlight(r,i,l);else{var s=this.findTextByContext(o,n.selected_text,n.context_before,n.context_after);-1!==s?this.applyQuillHighlight(r,s,n.selected_text.length):"rationale"!==a&&this.$emit("highlight-fallback-rationale",n)}}}),"applyQuillHighlight",function(e,t,n){e.setSelection(t,n,"silent"),e.formatText(t,n,{background:"#46ff18ff"},"silent"),e.scrollIntoView(),setTimeout(function(){e.formatText(t,n,{background:!1},"silent")},2e3)}),"findTextByContext",function(e,t,n,a){var r=new(et()),o="".concat(n).concat(t).concat(a),i=r.patch_make(o,e);if(!r.patch_apply(i,e)[1].includes(!0))return-1;var l=e.indexOf(t);return-1!==l?l:-1}),"highlightSelection",function(){var e=window.getSelection();if(e.rangeCount){var t=e.getRangeAt(0).cloneRange(),n=document.createElement("span");n.className="text-highlight",n.style.backgroundColor="#6dfa20",n.style.color="black";try{t.surroundContents(n)}catch(e){return void console.warn("Complex selection – wrapping failed",e)}}}),nt(nt(nt(nt(t,"removeHighlights",function(){document.querySelectorAll(".text-highlight").forEach(function(e){e.replaceWith.apply(e,at(e.childNodes))}),window.getSelection().removeAllRanges()}),"formatDateTime",function(e){if(!e)return"";var t=new Date(e),n=t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),a=t.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"});return"".concat(n," - ").concat(a)}),"sourceOfFundsText",function(e){return{gen_fund:"General Fund",dev:"20% Development Fund",ldrrmf:"LDRRMF",other:"Other Sources","":""}[e]||e}),"formatMonthDayYear",function(e){if(!e)return"";var t=e.split("-");if(3!==t.length)return e;var n=parseInt(t[0],10),a=parseInt(t[1],10)-1,r=parseInt(t[2],10),o=new Date(n,a,r);return isNaN(o.getTime())?e:o.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}))}).mount(n)},title:function(e){return"PPA: "+e}}),ye.y.init({delay:250,color:"#29d",includeCSS:!0,showSpinner:!1})},4534(e,t,n){"use strict";n.d(t,{A:()=>o});var a=n(6314),r=n.n(a)()(function(e){return e[1]});r.push([e.id,".bg-gradient-success.swal2-popup{background:linear-gradient(90deg,#036219,#80f541)!important}.bg-gradient-danger.swal2-popup{background:linear-gradient(90deg,#62030d,#ffb82a)!important}.bg-gradient-info.swal2-popup{background:linear-gradient(90deg,#0031f7,#4cdfe7)!important}.bg-gradient-deleted.swal2-popup{background:linear-gradient(90deg,#860202,#fb7676)!important}.swal2-title{color:#fff!important}",""]);const o=r},7256(e,t,n){var a={"./AIP/Index":[8535,9,8535],"./AIP/Index.vue":[8535,9,8535],"./AIP/LBP_Form_2/Create":[4994,9,4994],"./AIP/LBP_Form_2/Create.vue":[4994,9,4994],"./AIP/LBP_Form_2/Index":[9153,9,9153],"./AIP/LBP_Form_2/Index.vue":[9153,9,9153],"./AIP_Code/AIP_IPPs/Index":[4223,9,4223],"./AIP_Code/AIP_IPPs/Index.vue":[4223,9,4223],"./AIP_Code/AIP_IPPs/IndexBackUp":[2070,9,2070],"./AIP_Code/AIP_IPPs/IndexBackUp.vue":[2070,9,2070],"./AIP_Code/Create":[5628,9,5628],"./AIP_Code/Create.vue":[5628,9,5628],"./AIP_Code/Index":[9656,9,9656],"./AIP_Code/Index.vue":[9656,9,9656],"./Accomplishments/Create":[4562,9,4562],"./Accomplishments/Create.vue":[4562,9,4562],"./Accomplishments/Index":[7274,9,7274],"./Accomplishments/Index.vue":[7274,9,7274],"./Accomplishments/ValidationModal":[9741,9,9741],"./Accomplishments/ValidationModal.vue":[9741,9,9741],"./Accomplishments2/Create":[6964,9,6964],"./Accomplishments2/Create.vue":[6964,9,6964],"./Accomplishments2/Create2":[7416,9,7416],"./Accomplishments2/Create2.vue":[7416,9,7416],"./Accomplishments2/Index":[7290,9,7290],"./Accomplishments2/Index.vue":[7290,9,7290],"./Accomplishments2/Index2Backup":[2193,9,2193],"./Accomplishments2/Index2Backup.vue":[2193,9,2193],"./Accomplishments2/IndexBackUp":[7855,9,7855],"./Accomplishments2/IndexBackUp.vue":[7855,9,7855],"./Accomplishments2/ValidationModal":[2417,9,2417],"./Accomplishments2/ValidationModal.vue":[2417,9,2417],"./Activities/Create":[3519,9,3519],"./Activities/Create.vue":[3519,9,3519],"./Activities/Index":[5915,9,5915],"./Activities/Index.vue":[5915,9,5915],"./AnnualInvestmentPlan/Appropriations/Create":[1836,9,3660,1836],"./AnnualInvestmentPlan/Appropriations/Create.vue":[1836,9,3660,1836],"./AnnualInvestmentPlan/Appropriations/Index":[6759,9,6759],"./AnnualInvestmentPlan/Appropriations/Index.vue":[6759,9,6759],"./AnnualInvestmentPlan/Create":[4118,9,3660,4118],"./AnnualInvestmentPlan/Create.vue":[4118,9,3660,4118],"./AnnualInvestmentPlan/ExpectedOutput/Create":[1703,9,1703],"./AnnualInvestmentPlan/ExpectedOutput/Create.vue":[1703,9,1703],"./AnnualInvestmentPlan/ExpectedOutput/Index":[2643,9,2643],"./AnnualInvestmentPlan/ExpectedOutput/Index.vue":[2643,9,2643],"./AnnualInvestmentPlan/Index":[1937,9,1937],"./AnnualInvestmentPlan/Index.vue":[1937,9,1937],"./AnnualInvestmentPlan/Institutional/Index":[8060,9,8060],"./AnnualInvestmentPlan/Institutional/Index.vue":[8060,9,8060],"./AnnualInvestmentPlan/OfficeAIPCode/Create":[2045,9,2045],"./AnnualInvestmentPlan/OfficeAIPCode/Create.vue":[2045,9,2045],"./Appropriations/Create":[1483,9,3660,1483],"./Appropriations/Create.vue":[1483,9,3660,1483],"./Appropriations/Index":[1546,9,1546],"./Appropriations/Index.vue":[1546,9,1546],"./Authentication/LogIn":[8945,9,8945],"./Authentication/LogIn.vue":[8945,9,8945],"./BudgetRequirement/Create":[523,9,3660,523],"./BudgetRequirement/Create.vue":[523,9,3660,523],"./BudgetRequirement/Index":[6079,9,8460],"./BudgetRequirement/Index.vue":[6079,9,8460],"./CashDisbursementForecast/Index":[3869,9,3869],"./CashDisbursementForecast/Index.vue":[3869,9,3869],"./ChiefAgenda/Appropriations/Create":[3574,9,3660,3574],"./ChiefAgenda/Appropriations/Create.vue":[3574,9,3660,3574],"./ChiefAgenda/Appropriations/Index":[3248,9,3248],"./ChiefAgenda/Appropriations/Index.vue":[3248,9,3248],"./ChiefAgenda/Index":[2125,9,2125],"./ChiefAgenda/Index.vue":[2125,9,2125],"./ChiefAgenda/addAgenda":[2962,9,2962],"./ChiefAgenda/addAgenda.vue":[2962,9,2962],"./DailyAccomplishment/Create":[4061,9,4061],"./DailyAccomplishment/Create.vue":[4061,9,4061],"./DailyAccomplishment/Index":[2568,9,2568],"./DailyAccomplishment/Index.vue":[2568,9,2568],"./Daily_Accomplishment/Direct":[3876,9,3876],"./Daily_Accomplishment/Direct.vue":[3876,9,3876],"./Division/Create":[9352,9,9352],"./Division/Create.vue":[9352,9,9352],"./Division/Index":[6014,9,6014],"./Division/Index.vue":[6014,9,6014],"./Division/Outputs/Create":[4116,9,4116],"./Division/Outputs/Create.vue":[4116,9,4116],"./Division/Outputs/Index":[2309,9,2309],"./Division/Outputs/Index.vue":[2309,9,2309],"./ELA/Create":[494,9,494],"./ELA/Create.vue":[494,9,494],"./ELA/Index":[5896,9,5896],"./ELA/Index.vue":[5896,9,5896],"./EconomicAgenda/Index":[3832,9,3832],"./EconomicAgenda/Index.vue":[3832,9,3832],"./EconomicAgenda/addAgenda":[1146,9,1146],"./EconomicAgenda/addAgenda.vue":[1146,9,1146],"./EvaluationMechanismTool/Create":[5081,9,5081],"./EvaluationMechanismTool/Create.vue":[5081,9,5081],"./EvaluationMechanismTool/Index":[5011,9,5011],"./EvaluationMechanismTool/Index.vue":[5011,9,5011],"./ExpectedOutcomeRevised/Create":[1716,9,1716],"./ExpectedOutcomeRevised/Create.vue":[1716,9,1716],"./ExpectedOutcomeRevised/Index":[7498,9,7498],"./ExpectedOutcomeRevised/Index.vue":[7498,9,7498],"./ExpectedOutputRevised/Create":[9811,9,9811],"./ExpectedOutputRevised/Create.vue":[9811,9,9811],"./ExpectedOutputRevised/Index":[4237,9,4237],"./ExpectedOutputRevised/Index.vue":[4237,9,4237],"./Forbidden/Index":[7094,9,7094],"./Forbidden/Index.vue":[7094,9,7094],"./HPCR/Create":[30,9,30],"./HPCR/Create.vue":[30,9,30],"./HPCR/Index":[5173,9,5173],"./HPCR/Index.vue":[5173,9,5173],"./HPCR_Division/Create":[9407,9,9407],"./HPCR_Division/Create.vue":[9407,9,9407],"./HPCR_Division/Index":[2636,9,2636],"./HPCR_Division/Index.vue":[2636,9,2636],"./HPCR_Individual/Create":[1822,9,1822],"./HPCR_Individual/Create.vue":[1822,9,1822],"./HPCR_Individual/Index":[8975,9,8975],"./HPCR_Individual/Index.vue":[8975,9,8975],"./HPCR_Section/Create":[3904,9,3904],"./HPCR_Section/Create.vue":[3904,9,3904],"./HPCR_Section/Index":[6129,9,6129],"./HPCR_Section/Index.vue":[6129,9,6129],"./Home":[4979,9,4979],"./Home.vue":[4979,9,4979],"./IPCR/Index":[7882,9,7882],"./IPCR/Index.vue":[7882,9,7882],"./Implementation/Create":[974,9,3660,974],"./Implementation/Create.vue":[974,9,3660,974],"./Implementation/Create_A":[9295,9,3660,9295],"./Implementation/Create_A.vue":[9295,9,3660,9295],"./Implementation/Index":[4366,9,4366],"./Implementation/Index.vue":[4366,9,4366],"./ImplementationPlan/Strategy/Create":[2123,9,2123],"./ImplementationPlan/Strategy/Create.vue":[2123,9,2123],"./ImplementationPlan/Strategy/Index":[5672,9,3291],"./ImplementationPlan/Strategy/Index.vue":[5672,9,3291],"./ImplementingTeam/Create":[4001,9,4001],"./ImplementingTeam/Create.vue":[4001,9,4001],"./ImplementingTeam/Index":[7253,9,7253],"./ImplementingTeam/Index.vue":[7253,9,7253],"./ImplementingTeamRevision/Create":[1819,9,3660,1819],"./ImplementingTeamRevision/Create.vue":[1819,9,3660,1819],"./ImplementingTeamRevision/Index":[1091,9,1091],"./ImplementingTeamRevision/Index.vue":[1091,9,1091],"./Indicators/Create":[3491,9,3491],"./Indicators/Create.vue":[3491,9,3491],"./Indicators/Index":[6856,9,6856],"./Indicators/Index.vue":[6856,9,6856],"./IndividualOutputs/Create":[596,9,596],"./IndividualOutputs/Create.vue":[596,9,596],"./IndividualOutputs/Index":[7017,9,7017],"./IndividualOutputs/Index.vue":[7017,9,7017],"./InterOutcome/Create":[2278,9,2278],"./InterOutcome/Create.vue":[2278,9,2278],"./InterOutcome/Index":[9544,9,9544],"./InterOutcome/Index.vue":[9544,9,9544],"./Issues/Create":[1345,9,1345],"./Issues/Create.vue":[1345,9,1345],"./Issues/Index":[962,9,962],"./Issues/Index.vue":[962,9,962],"./LogFrame/Index":[17,9,17],"./LogFrame/Index.vue":[17,9,17],"./LogFrame/logframe":[104,9,104],"./LogFrame/logframe.vue":[104,9,104],"./MFOs/Create":[5219,9,5219],"./MFOs/Create.vue":[5219,9,5219],"./MFOs/Direct":[7476,9,7476],"./MFOs/Direct.vue":[7476,9,7476],"./MFOs/Index":[5677,9,5677],"./MFOs/Index.vue":[5677,9,5677],"./MFOs/SubMFO/Create":[8255,9,8255],"./MFOs/SubMFO/Create.vue":[8255,9,8255],"./MFOs/SubMFO/Direct":[2912,9,2912],"./MFOs/SubMFO/Direct.vue":[2912,9,2912],"./Manual/Index":[839,9,839],"./Manual/Index.vue":[839,9,839],"./Monitoring/Create":[4846,9,4846],"./Monitoring/Create.vue":[4846,9,4846],"./Monitoring/Index":[5501,9,5501],"./Monitoring/Index.vue":[5501,9,5501],"./NotFound/Index":[8404,9,3660,8404],"./NotFound/Index.vue":[8404,9,3660,8404],"./NotFound/dribbble_1.gif":[4292,9,4292],"./NotFound/not_found.jpg":[5943,9,5943],"./OPCR/Accomplishment/Create":[9864,9,9864],"./OPCR/Accomplishment/Create.vue":[9864,9,9864],"./OPCR/Accomplishment/Index":[6693,9,6693],"./OPCR/Accomplishment/Index.vue":[6693,9,6693],"./OPCR/Form/Create":[1469,9,1469],"./OPCR/Form/Create.vue":[1469,9,1469],"./OPCR/Form/Index":[1416,9,1416],"./OPCR/Form/Index.vue":[1416,9,1416],"./OPCR/Form/Index2":[4376,9,4376],"./OPCR/Form/Index2.vue":[4376,9,4376],"./OPCR/Form/Print":[6133,9,6133],"./OPCR/Form/Print.vue":[6133,9,6133],"./OPCR/Index":[93,9,93],"./OPCR/Index.vue":[93,9,93],"./OPCR/List/Create":[5741,9,5741],"./OPCR/List/Create.vue":[5741,9,5741],"./OPCR/List/Index":[2096,9,2096],"./OPCR/List/Index.vue":[2096,9,2096],"./OPCR/OPCR":[8268,9,8268],"./OPCR/OPCR.vue":[8268,9,8268],"./OPCR/Target/Create":[9616,9,9616],"./OPCR/Target/Create.vue":[9616,9,9616],"./OPCR/Target/Index":[1471,9,1471],"./OPCR/Target/Index.vue":[1471,9,1471],"./OPCR/Target/New/Index":[7870,9,7870],"./OPCR/Target/New/Index.vue":[7870,9,7870],"./OPCR/TargetBudget/Create":[8740,9,3660,8740],"./OPCR/TargetBudget/Create.vue":[8740,9,3660,8740],"./OPCR/TargetBudget/CreateBackup":[7516,9,3660,7516],"./OPCR/TargetBudget/CreateBackup.vue":[7516,9,3660,7516],"./OPCR/TargetBudget/Index":[5055,9,5055],"./OPCR/TargetBudget/Index.vue":[5055,9,5055],"./OPCRPaps/Create":[6620,9,6620],"./OPCRPaps/Create.vue":[6620,9,6620],"./OPCRPaps/Direct":[836,9,836],"./OPCRPaps/Direct.vue":[836,9,836],"./OfficeAccountable/Create":[6488,9,6488],"./OfficeAccountable/Create.vue":[6488,9,6488],"./OfficeAccountable/Index":[5451,9,5451],"./OfficeAccountable/Index.vue":[5451,9,5451],"./OpcrTracking/Ratings":[4457,9,4457],"./OpcrTracking/Ratings.vue":[4457,9,4457],"./OpcrTracking/Targets":[5163,9,5163],"./OpcrTracking/Targets.vue":[5163,9,5163],"./Organizational/Index":[1999,9,1999],"./Organizational/Index.vue":[1999,9,1999],"./Organizational/addOrganizational":[2991,9,2991],"./Organizational/addOrganizational.vue":[2991,9,2991],"./Outcome/Create":[9925,9,9925],"./Outcome/Create.vue":[9925,9,9925],"./Outcome/Index":[2968,9,2968],"./Outcome/Index.vue":[2968,9,2968],"./Outputs/Create":[7312,9,7312],"./Outputs/Create.vue":[7312,9,7312],"./Outputs/Index":[5223,9,5223],"./Outputs/Index.vue":[5223,9,5223],"./PAPS/Create":[356,9,356],"./PAPS/Create.vue":[356,9,356],"./PAPS/Direct":[1751,9,1751],"./PAPS/Direct.vue":[1751,9,1751],"./PAPS/Index":[9691,9,2072],"./PAPS/Index.vue":[9691,9,2072],"./Performance/Create":[1615,9,1615],"./Performance/Create.vue":[1615,9,1615],"./Performance/Index":[2196,9,2196],"./Performance/Index.vue":[2196,9,2196],"./Places":[6241,9,6241],"./Places.vue":[6241,9,6241],"./Poles/Index":[9001,9,9001],"./Poles/Index.vue":[9001,9,9001],"./Posts/Index":[1239,9,1239],"./Posts/Index.vue":[1239,9,1239],"./ProjectProfile/Create":[5358,9,5358],"./ProjectProfile/Create.vue":[5358,9,5358],"./ProjectProfile/Index":[6853,9,6853],"./ProjectProfile/Index.vue":[6853,9,6853],"./ProjectProfile/Strategies/Create":[6999,9,6999],"./ProjectProfile/Strategies/Create.vue":[6999,9,6999],"./Quality/Create":[8666,9,8666],"./Quality/Create.vue":[8666,9,8666],"./Quality/Index":[6426,9,6426],"./Quality/Index.vue":[6426,9,6426],"./QualityRemarks/Create":[3388,9,1007],"./QualityRemarks/Create.vue":[3388,9,1007],"./QualityRemarks/Index":[9627,9,9627],"./QualityRemarks/Index.vue":[9627,9,9627],"./RAAO/Index":[8806,9,8806],"./RAAO/Index.vue":[8806,9,8806],"./Rating/Create":[7066,9,7066],"./Rating/Create.vue":[7066,9,7066],"./Rating/Index":[5832,9,5832],"./Rating/Index.vue":[5832,9,5832],"./RatingRemarks/Create":[5215,9,5215],"./RatingRemarks/Create.vue":[5215,9,5215],"./RatingRemarks/Index":[7081,9,7081],"./RatingRemarks/Index.vue":[7081,9,7081],"./ResearchAgenda/Create":[7664,9,7664],"./ResearchAgenda/Create.vue":[7664,9,7664],"./ResearchAgenda/Index":[8053,9,8053],"./ResearchAgenda/Index.vue":[8053,9,8053],"./Review-Approve/OPCR/Ratings/Index":[7798,9,7798],"./Review-Approve/OPCR/Ratings/Index.vue":[7798,9,7798],"./Review-Approve/OPCR/Targets/Index":[3702,9,3702],"./Review-Approve/OPCR/Targets/Index.vue":[3702,9,3702],"./RevisionPlans/Create":[9410,9,9410],"./RevisionPlans/Create.vue":[9410,9,9410],"./RevisionPlans/DevelopmentFund/Create":[6676,9,3660,6676],"./RevisionPlans/DevelopmentFund/Create.vue":[6676,9,3660,6676],"./RevisionPlans/DevelopmentFund/Create_copy":[5091,9,3660,5091],"./RevisionPlans/DevelopmentFund/Create_copy.vue":[5091,9,3660,5091],"./RevisionPlans/DevelopmentFund/Index":[1007,9,3388],"./RevisionPlans/DevelopmentFund/Index.vue":[1007,9,3388],"./RevisionPlans/Direct":[6147,9,6147],"./RevisionPlans/Direct.vue":[6147,9,6147],"./RevisionPlans/GAS/Create":[7083,9,7083],"./RevisionPlans/GAS/Create.vue":[7083,9,7083],"./RevisionPlans/GAS/Index":[9453,9,9453],"./RevisionPlans/GAS/Index.vue":[9453,9,9453],"./RevisionPlans/GAS/View":[7975,9,7975],"./RevisionPlans/GAS/View.vue":[7975,9,7975],"./RevisionPlans/Index":[3170,9,3170],"./RevisionPlans/Index.vue":[3170,9,3170],"./RevisionPlans/MFO/Create":[9291,9,9291],"./RevisionPlans/MFO/Create.vue":[9291,9,9291],"./RevisionPlans/MFO/Index":[5767,9,5767],"./RevisionPlans/MFO/Index.vue":[5767,9,5767],"./RevisionPlans/OOE/Index":[1068,9,1068],"./RevisionPlans/OOE/Index.vue":[1068,9,1068],"./RevisionPlans/ProjectProfile/Create":[6878,9,3660,6878],"./RevisionPlans/ProjectProfile/Create.vue":[6878,9,3660,6878],"./RevisionPlans/ProjectProfile/Createv2":[7147,9,3660,7147],"./RevisionPlans/ProjectProfile/Createv2.vue":[7147,9,3660,7147],"./RevisionPlans/ProjectProfile/test":[8679,9,8679],"./RevisionPlans/ProjectProfile/test.vue":[8679,9,8679],"./RevisionPlans/Tracking/Index":[6229,9,6229],"./RevisionPlans/Tracking/Index.vue":[6229,9,6229],"./RevisionPlans/Tracking/TrackingByProject":[2782,7,2782],"./RevisionPlans/View":[4495,9,4495],"./RevisionPlans/View copy":[1600,9,1600],"./RevisionPlans/View copy.vue":[1600,9,1600],"./RevisionPlans/View.vue":[4495,9,4495],"./RevisionPlans/View2":[714,9,714],"./RevisionPlans/View2.vue":[714,9,714],"./RevisionPlans/View3":[3853,9,3853],"./RevisionPlans/View3.vue":[3853,9,3853],"./RevisionPlans/ViewBackup":[3837,9,3837],"./RevisionPlans/ViewBackup.vue":[3837,9,3837],"./RiskManagement/Create":[1456,9,1456],"./RiskManagement/Create.vue":[1456,9,1456],"./RiskManagement/Index":[5666,9,5666],"./RiskManagement/Index.vue":[5666,9,5666],"./SDG/Create":[3342,9,3342],"./SDG/Create.vue":[3342,9,3342],"./SDG/Index":[1684,9,1684],"./SDG/Index.vue":[1684,9,1684],"./Sectoral/Index":[8544,9,8544],"./Sectoral/Index.vue":[8544,9,8544],"./Sectoral/addSector":[2896,9,2896],"./Sectoral/addSector.vue":[2896,9,2896],"./Signatories/Create":[7913,9,7913],"./Signatories/Create.vue":[7913,9,7913],"./Signatories/Index":[7358,9,7358],"./Signatories/Index.vue":[7358,9,7358],"./SocietalGoals/Index":[6365,9,6365],"./SocietalGoals/Index.vue":[6365,9,6365],"./SocietalGoals/addSocietalGoals":[4940,9,4940],"./SocietalGoals/addSocietalGoals.vue":[4940,9,4940],"./Strategies/Create":[5697,9,5697],"./Strategies/Create.vue":[5697,9,5697],"./Strategies/Index":[9600,9,9600],"./Strategies/Index.vue":[9600,9,9600],"./StrategyProject/Index":[5380,9,5380],"./StrategyProject/Index.vue":[5380,9,5380],"./StrategyProject/IndexB":[9223,9,9223],"./StrategyProject/IndexB.vue":[9223,9,9223],"./StrategyProject/test":[8879,9,8879],"./StrategyProject/test.vue":[8879,9,8879],"./SuccessIndicator/Create":[5688,9,5688],"./SuccessIndicator/Create.vue":[5688,9,5688],"./SuccessIndicator/Index":[7598,9,7598],"./SuccessIndicator/Index.vue":[7598,9,7598],"./Targets/Create":[3411,9,3411],"./Targets/Create.vue":[3411,9,3411],"./Targets/Direct":[7714,9,7714],"./Targets/Direct.vue":[7714,9,7714],"./Targets/Implementation/Create":[1124,9,1124],"./Targets/Implementation/Create.vue":[1124,9,1124],"./Targets/Implementation/Index":[5346,9,5346],"./Targets/Implementation/Index.vue":[5346,9,5346],"./Targets/Index":[8795,9,8795],"./Targets/Index.vue":[8795,9,8795],"./TimeRange/Create":[7386,9,7386],"./TimeRange/Create.vue":[7386,9,7386],"./TimeRange/Index":[7490,9,7490],"./TimeRange/Index.vue":[7490,9,7490],"./Time_Sheets/Index":[2768,9,2768],"./Time_Sheets/Index.vue":[2768,9,2768],"./Time_Sheets/New":[6001,9,6001],"./Time_Sheets/New.vue":[6001,9,6001],"./Timeliness/Create":[2884,9,2884],"./Timeliness/Create.vue":[2884,9,2884],"./Timeliness/Index":[5774,9,5774],"./Timeliness/Index.vue":[5774,9,5774],"./TimelinessRemarks/Create":[267,9,267],"./TimelinessRemarks/Create.vue":[267,9,267],"./TimelinessRemarks/Index":[4700,9,4700],"./TimelinessRemarks/Index.vue":[4700,9,4700],"./UserOffice/Set":[3303,9,3303],"./UserOffice/Set.vue":[3303,9,3303],"./Users/BootstrapModalNoJquery":[1401,9,1401],"./Users/BootstrapModalNoJquery.vue":[1401,9,1401],"./Users/ChangePassword":[1701,9,1701],"./Users/ChangePassword.vue":[1701,9,1701],"./Users/Create":[2663,9,2663],"./Users/Create.vue":[2663,9,2663],"./Users/Employees/Index":[3017,9,3017],"./Users/Employees/Index.vue":[3017,9,3017],"./Users/Index":[5687,9,5687],"./Users/Index.vue":[5687,9,5687],"./Users/PermissionsModal":[6177,9,6177],"./Users/PermissionsModal.vue":[6177,9,6177],"./Users/Settings":[4267,9,4267],"./Users/Settings.vue":[4267,9,4267],"./hgdg_checklist/Create":[2188,9,2188],"./hgdg_checklist/Create.vue":[2188,9,2188],"./hgdg_checklist/Index":[7780,9,7780],"./hgdg_checklist/Index.vue":[7780,9,7780],"./hgdg_question/Create":[4311,9,4311],"./hgdg_question/Create.vue":[4311,9,4311],"./hgdg_question/Index":[7260,9,7260],"./hgdg_question/Index.vue":[7260,9,7260],"./hgdg_score/Index":[8611,9,8611],"./hgdg_score/Index.vue":[8611,9,8611]};function r(e){if(!n.o(a,e))return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then(()=>n.t(r,16|t[1]))}r.keys=()=>Object.keys(a),r.id=7256,e.exports=r},8290(e,t,n){window._=n(2543);try{window.bootstrap=n(454),window.$=window.jQuery=n(4692)}catch(e){}window.axios=n(2505),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"}},e=>{var t=t=>e(e.s=t);e.O(0,[8252,3660],()=>(t(4122),t(1688)));e.O()}]);
>>>>>>> 22b5104dda580eb88b6fa5abf77a002003aa13f2
