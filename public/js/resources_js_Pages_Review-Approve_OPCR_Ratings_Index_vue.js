"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Review-Approve_OPCR_Ratings_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle2 */ "./resources/js/Shared/ModalDynamicTitle2.vue");
/* harmony import */ var _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/PrintModal */ "./resources/js/Shared/PrintModal.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: Object,
    data: Object,
    mode_1: String,
    disk: String
  },
  data: function data() {
    return {
      displayModal: false,
      displayModal2: false,
      displaySideModal: false,
      opcr_data: [],
      status_val: -3,
      opcr_current: [],
      remarks: "",
      mode: "",
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        remarks: "",
        opcr_list_id: ""
      }),
      can_submit: false,
      submit_attempt: false,
      show_all_not_clicked: false,
      currentRatingType: 0,
      modal_mode: 'Review'
    };
  },
  mounted: function mounted() {
    var _this = this;
    // auto-resize all rendered textareas on initial load
    this.$nextTick(function () {
      _this.$refs.remarksTextarea.forEach(function (ta) {
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
      });
    });
  },
  updated: function updated() {
    var _this2 = this;
    // auto-resize whenever data changes after updates
    this.$nextTick(function () {
      if (_this2.$refs.remarksTextarea) {
        _this2.$refs.remarksTextarea.forEach(function (ta) {
          ta.style.height = "auto";
          ta.style.height = ta.scrollHeight + "px";
        });
      }
    });
  },
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Modal: _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_3__["default"],
    Modal2: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    SideModal: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    updateMOVisVisible: function updateMOVisVisible(mov_is_visible, index) {
      this.opcr_data[index].mov_is_visible = !mov_is_visible;
    },
    formatFileSize: function formatFileSize(size) {
      if (size < 1024) return size + ' B';else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';else return (size / (1024 * 1024)).toFixed(2) + ' MB';
    },
    deleteSectoral: function deleteSectoral(id) {
      var text = "WARNING!\nAre you sure you want to delete the Societal Goals?" + id;
      if (confirm(text) == true) {
        this.$inertia["delete"]("/Societal/" + id);
      }
    },
    getPercent: function getPercent(accomp, targqty) {
      var accSum = 0;
      accomp.forEach(myFunction);
      function myFunction(item) {
        accSum += parseFloat(item.accomplishment_qty);
      }
      var percentt = accSum / targqty * 100;
      percentt = this.format_number(percentt, 2, true);
      return percentt;
    },
    viewModal: function viewModal(opcr_id, status, opcr) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var url;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // alert('View Modal');
              _this3.status_val = status;
              // alert(this.status_val)
              _this3.opcr_current = opcr;
              url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission";
              _context.n = 1;
              return axios.get(url, {
                params: {
                  type: _this3.mode_1
                }
              }).then(function (response) {
                _this3.opcr_data = response.data;
              })["catch"](function (error) {
                console.error(error);
              });
            case 1:
              _this3.displayModal = true;
              _this3.currentRatingType = _this3.opcr_current.rating_type;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    hideModal: function hideModal() {
      this.displayModal = false;
      this.displayModal2 = false;
      this.submit_attempt = false;
    },
    showModal2: function showModal2(md) {
      this.hideModal();
      this.displayModal2 = true;
      if (md === 'v') {
        this.mode = "Review";
      } else if (md === 'a') {
        this.mode = "Approve";
      } else if (md === 'r') {
        this.mode = "Return";
      }
    },
    backTo: function backTo() {
      this.hideModal();
      this.viewModal(this.opcr_current.id, this.opcr_current.status_val, this.opcr_current);
    },
    confirmSubmission: function confirmSubmission() {},
    reviewSubmit: function reviewSubmit() {
      // var opcr_list_id_here = this.opcr_current.id;
      this.submit_attempt = true;
      var cansub = this.canSubmit();
      if (cansub) {
        // alert(cansub+ " true")
        var url = '/review-approve/ratings/' + this.opcr_current.id + '/review';
        this.form.opcr_list_id = this.opcr_current.id;
        var text = "WARNING!\nAre you sure you want to review the OPCR?";
        if (confirm(text) == true) {
          this.form.get(url, this.form);
        }
        this.hideModal();
        this.clearForm();
      } else {
        // alert(cansub+ " false")
        alert("⚠️ Review blocked: Some required items have not been scored. Please complete all scores before proceeding.");
      }
    },
    approveSubmit: function approveSubmit() {
      var url = '/review-approve/ratings/approve/' + this.opcr_current.id + '/opcr';
      this.form.opcr_list_id = this.opcr_current.id;
      var text = "WARNING!\nAre you sure you want to approve the IPCR?";
      // alert(url)
      if (confirm(text) == true) {
        this.form.post(url, this.form);
      }
      this.hideModal();
      this.clearForm();
    },
    returnSubmit: function returnSubmit() {
      // /return/remarks / { opcr_list_id } / opcr
      var url = '/review-approve/ratings/return/remarks/' + this.opcr_current.id + '/opcr';
      this.form.opcr_list_id = this.opcr_current.id;
      var text = "WARNING!\nAre you sure you want to return the selected OPCR?";
      // alert(url)
      if (confirm(text) == true) {
        this.form.post(url, this.form);
      }
      this.hideModal();
      this.clearForm();
    },
    clearForm: function clearForm() {
      this.form.remarks = "";
      this.form.opcr_list_id = "";
    },
    saveRating: function saveRating(rating, opcr_rating_id, column) {
      // alert("rating: "+ rating + " \n"+"opcr_rating_id: "+opcr_rating_id)
      // review-approve/ratings/sub/mit/opcr/{opcr_rating_id}/{item_score}
      // @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')"
      if (!rating) {
        rating = "rating is null";
      }
      var url = "/review-approve/ratings/submit/opcr/" + column + "/" + opcr_rating_id + "/" + rating;
      axios.post(url).then(function (response) {})["finally"](function (response) {})["catch"](function (error) {});
    },
    canSubmit: function canSubmit() {
      // loop through each row in opcr_data
      var _iterator = _createForOfIteratorHelper(this.opcr_data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          // define the mappings of score fields to their standards
          var checks = [{
            score: row.q1,
            standard: 'Yes'
          }, {
            score: row.q2,
            standard: 'Yes'
          }, {
            score: row.q3,
            standard: 'Yes'
          }, {
            score: row.e1,
            standard: row.e1_standard
          }, {
            score: row.e2,
            standard: row.e2_standard
          }, {
            score: row.e3,
            standard: row.e3_standard
          }, {
            score: row.t1,
            standard: row.t1_standard
          }];
          console.log(checks);
          for (var _i = 0, _checks = checks; _i < _checks.length; _i++) {
            var _checks$_i = _checks[_i],
              score = _checks$_i.score,
              standard = _checks$_i.standard;
            if (standard === "Yes") {
              // check if score is not null/empty and between 1–5
              if (score === null || score === "" || isNaN(score) || Number(score) < 1 || Number(score) > 5) {
                // alert("null ang score "+score)
                return false;
              }
            } else {
              // alert("No")
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    },
    autoResize: function autoResize(event) {
      var textarea = event.target;
      textarea.style.height = "auto"; // reset first to recalc
      textarea.style.height = textarea.scrollHeight + "px"; // fit content
    },
    previewFile: function previewFile(file) {
      var imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
      var multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];
      // alert("previewFile " + this.disk + " "+file.file_type)
      // console.log(this.fileBaseUrl)
      this.current_filepath = file.filepath;
      if (this.disk === 'public') {
        var _file$file_type, _file$file_type2;
        // alert("PUBLIC")
        this.view_link = window.location.origin + "/storage/" + file.filepath;
        if (imageTypes.includes((_file$file_type = file.file_type) === null || _file$file_type === void 0 ? void 0 : _file$file_type.toLowerCase()) || multimediaTypes.includes((_file$file_type2 = file.file_type) === null || _file$file_type2 === void 0 ? void 0 : _file$file_type2.toLowerCase())) {
          // Directly open images in a new tab
          // this.openImageModal()
          // this.displaySideModal = true
          window.open(this.view_link, '_blank');
          //
          return;
        }
        if (this.isPreviewable(file.file_type)) {
          this.displaySideModal = true;
          this.file_extension = file.file_type;
          // this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
          // window.open(file.file_url, '_blank')
        } else {
          alert('This file type cannot be previewed.');
        }
      } else {
        var _file$file_type3, _file$file_type4;
        if (imageTypes.includes((_file$file_type3 = file.file_type) === null || _file$file_type3 === void 0 ? void 0 : _file$file_type3.toLowerCase()) || multimediaTypes.includes((_file$file_type4 = file.file_type) === null || _file$file_type4 === void 0 ? void 0 : _file$file_type4.toLowerCase())) {
          // Directly open images in a new tab
          window.open("http://122.53.120.18:8067/images/".concat(file.filepath), '_blank');
          return;
        }
        if (this.isPreviewable(file.file_type)) {
          // this.displaySideModal = true
          this.view_link = "http://122.53.120.18:8067/images/" + file.filepath;
          window.open(this.view_link, '_blank');
          this.file_extension = file.file_type;

          // window.open(file.file_url, '_blank')
        } else {
          alert('This file type cannot be previewed.');
        }
      }
    },
    toggleAllMovVisibility: function toggleAllMovVisibility(value) {
      // Ensure value is a boolean
      var newValue = Boolean(value);
      this.show_all_not_clicked = !this.show_all_not_clicked;
      // Loop through each item in opcr_data and update mov_is_visible
      this.opcr_data.forEach(function (item) {
        item.mov_is_visible = newValue;
      });
    },
    //SPAN******************************************* APPLICABLE FOR APPROVAL ONLY************************************
    getRowspan: function getRowspan(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].mfo_desc === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    getRowspan2: function getRowspan2(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].office_accountable === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    getRowspanIndicator: function getRowspanIndicator(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].success_indicator === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    //***********************************************AVERAGES/TOTALS / FOR APPROVAL ONLY*****************************
    getTotalAverage: function getTotalAverage() {
      var total = 0;
      for (var i = 0; i < this.opcr_data.length; i++) {
        var rat_e = this.opcr_data[i].rating_e;
        var rat_q = this.opcr_data[i].rating_q;
        var rat_t = this.opcr_data[i].rating_t;
        var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t);
        // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
        var div = 0;
        if (parseFloat(rat_e) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_q) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_t) >= 1) {
          div = div + 1;
        }
        if (div == 0) {
          div = 1;
        }
        total = total + avee / div;
      }
      // total = "44.44555555";
      // this.total_ave = total;
      return this.format_number_conv(total, 2, true);
    },
    computeRowAverage: function computeRowAverage(opcr) {
      var values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];
      var validValues = values.filter(function (v) {
        return v > 0;
      });
      if (validValues.length === 0) {
        return 0;
      }
      var sum = validValues.reduce(function (a, b) {
        return a + b;
      }, 0);
      return sum / validValues.length;
    },
    computeAverage: function computeAverage(opcr) {
      // extract the values
      var values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];

      // filter out zero or null
      var validValues = values.filter(function (v) {
        return v > 0;
      });
      if (validValues.length === 0) {
        return 0; // or '' if you want it blank
      }

      // compute average
      var sum = validValues.reduce(function (a, b) {
        return a + b;
      }, 0);
      return (sum / validValues.length).toFixed(2); // keep 2 decimals
    },
    getAverageAll: function getAverageAll() {
      var _this4 = this;
      // compute averages for all rows
      var rowAverages = this.opcr_data.map(function (opcr) {
        return _this4.computeRowAverage(opcr);
      });

      // filter out rows that are 0
      var validAverages = rowAverages.filter(function (avg) {
        return avg > 0;
      });
      if (validAverages.length === 0) {
        return 0; // or '' if you want blank
      }
      var total = validAverages.reduce(function (a, b) {
        return a + b;
      }, 0);
      return (total / validAverages.length).toFixed(2); // keep 2 decimals
    },
    // *********************************************AVERAGE -DPCR SCORES *********************************************
    computeAverageScore: function computeAverageScore(monthly_ratings) {
      if (!monthly_ratings || _typeof(monthly_ratings) !== 'object') {
        return 0;
      }
      var values = Object.values(monthly_ratings).filter(function (v) {
        return typeof v === 'number' && v > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, v) {
        return total + v;
      }, 0);
      return Number((sum / values.length).toFixed(2));
    },
    computeAverageByType: function computeAverageByType(monthly_ratings, type) {
      if (!monthly_ratings || _typeof(monthly_ratings) !== 'object') {
        return 0;
      }
      var map = {
        q: ['q1', 'q2', 'q3'],
        e: ['e1', 'e2', 'e3']
      };
      if (!map[type]) {
        return 0;
      }
      var values = map[type].map(function (key) {
        return monthly_ratings[key];
      }).filter(function (v) {
        return typeof v === 'number' && v > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, v) {
        return total + v;
      }, 0);
      return Number((sum / values.length).toFixed(2));
    },
    computeAverageQET: function computeAverageQET(q, e, t) {
      var values = [q, e, t].filter(function (v) {
        return Number(v) > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, val) {
        return total + Number(val);
      }, 0);
      return sum / values.length;
    },
    // ===============================
    // TOTAL of DPCR (sum of row averages)
    // ===============================
    computeDPCRTotal: function computeDPCRTotal(rows) {
      var _this5 = this;
      if (!Array.isArray(rows)) {
        // console.log("zero cya")
        return 0;
      }
      var total = 0;
      rows.forEach(function (row) {
        var ratings = row === null || row === void 0 ? void 0 : row.monthly_targets;
        console.log(row.month);
        if (!ratings || _typeof(ratings) !== 'object') {
          return;
        }
        var q = _this5.computeAverageByType(ratings, 'q');
        var e = _this5.computeAverageByType(ratings, 'e');
        var t = Number(ratings === null || ratings === void 0 ? void 0 : ratings.t1) > 0 ? Number(ratings.t1) : 0;
        var rowAverage = _this5.computeAverageQET(q, e, t);
        console.log(rowAverage);
        if (rowAverage > 0) {
          total += rowAverage;
        }
      });
      return Number(total.toFixed(2));
    },
    // ===============================
    // AVERAGE of DPCR (ignore zero rows)
    // ===============================
    computeDPCRAverage: function computeDPCRAverage(rows) {
      var _this6 = this;
      if (!Array.isArray(rows)) {
        return 0;
      }
      var rowAverages = [];
      rows.forEach(function (row) {
        var ratings = row === null || row === void 0 ? void 0 : row.monthly_targets;
        if (!ratings || _typeof(ratings) !== 'object') {
          return;
        }
        var q = _this6.computeAverageByType(ratings, 'q');
        var e = _this6.computeAverageByType(ratings, 'e');
        var t = Number(ratings === null || ratings === void 0 ? void 0 : ratings.t1) > 0 ? Number(ratings.t1) : 0;
        var rowAverage = _this6.computeAverageQET(q, e, t);
        if (rowAverage > 0) {
          rowAverages.push(rowAverage);
        }
      });
      if (rowAverages.length === 0) {
        return 0;
      }
      var sum = rowAverages.reduce(function (total, val) {
        return total + val;
      }, 0);
      return Number((sum / rowAverages.length).toFixed(2));
    },
    // _______________________________
    // SET RATING TYPE
    // ===============================
    setRatingType: function setRatingType(rating_type, id) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.patch("/review-approve/ratings/set/rating/type/".concat(rating_type, "/").concat(id), {}, {
        onSuccess: function onSuccess() {
          console.log("Rating type ".concat(type, " updated for ID ").concat(id));
        },
        onError: function onError(errors) {
          console.error(errors);
        }
      });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
    title: String
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null
      //   options: [
      //       'Batman',
      //       'Robin',
      //       'Joker',
      //       ],
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null,
      options: ['Batman', 'Robin', 'Joker']
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_3 = {
  "class": "peers"
};
var _hoisted_4 = {
  "class": "peer mR-10"
};
var _hoisted_5 = {
  "class": "peer"
};
var _hoisted_6 = {
  "class": "masonry-item w-100"
};
var _hoisted_7 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_8 = {
  "class": "table-responsive"
};
var _hoisted_9 = {
  "class": "table table-sm table-borderless table-striped table-hover"
};
var _hoisted_10 = {
  "class": "dropdown dropstart"
};
var _hoisted_11 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_12 = ["onClick"];
var _hoisted_13 = {
  "class": "row justify-content-center"
};
var _hoisted_14 = {
  "class": "col-md-12"
};
var _hoisted_15 = {
  "class": "row justify-content-center"
};
var _hoisted_16 = {
  "class": "col-md-12"
};
var _hoisted_17 = {
  "class": "sticky-header"
};
var _hoisted_18 = {
  key: 0
};
var _hoisted_19 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_20 = {
  "class": "table-responsive w-100",
  style: {
    "max-width": "100%",
    "overflow-x": "auto"
  }
};
var _hoisted_21 = {
  "class": "table table-sm table-bordered border-dark table-striped table-hover",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_22 = {
  rowspan: "2"
};
var _hoisted_23 = {
  rowspan: "2"
};
var _hoisted_24 = {
  rowspan: "2"
};
var _hoisted_25 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_26 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_27 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_28 = {
  rowspan: "2"
};
var _hoisted_29 = ["onUpdate:modelValue", "onChange"];
var _hoisted_30 = {
  rowspan: "2"
};
var _hoisted_31 = ["onClick"];
var _hoisted_32 = ["onClick"];
var _hoisted_33 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_34 = ["onUpdate:modelValue", "onChange"];
var _hoisted_35 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_36 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_37 = ["onUpdate:modelValue", "onChange"];
var _hoisted_38 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_39 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_40 = ["onUpdate:modelValue", "onChange"];
var _hoisted_41 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_42 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_43 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_44 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_45 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_46 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_47 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_48 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_49 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_50 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_51 = {
  style: {
    "width": "9% !important",
    "white-space": "normal",
    "word-wrap": "break-word"
  }
};
var _hoisted_52 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_53 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_54 = {
  key: 0
};
var _hoisted_55 = {
  "class": "bg-secondary text-white"
};
var _hoisted_56 = {
  key: 0
};
var _hoisted_57 = {
  key: 1
};
var _hoisted_58 = ["src"];
var _hoisted_59 = ["href"];
var _hoisted_60 = ["onClick"];
var _hoisted_61 = {
  key: 2
};
var _hoisted_62 = {
  key: 1
};
var _hoisted_63 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_64 = {
  "class": "table-responsive w-100",
  style: {
    "max-width": "100%",
    "overflow-x": "auto"
  }
};
var _hoisted_65 = {
  "class": "table table-sm table-bordered border-dark table-striped table-hover",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_66 = {
  "class": "sticky-header"
};
var _hoisted_67 = {
  "class": "bg-secondary text-white"
};
var _hoisted_68 = {
  colspan: "4"
};
var _hoisted_69 = ["checked"];
var _hoisted_70 = {
  colspan: "4"
};
var _hoisted_71 = ["checked"];
var _hoisted_72 = ["rowspan"];
var _hoisted_73 = ["rowspan"];
var _hoisted_74 = ["rowspan"];
var _hoisted_75 = ["onUpdate:modelValue"];
var _hoisted_76 = ["onClick"];
var _hoisted_77 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_78 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_79 = {
  key: 0
};
var _hoisted_80 = {
  key: 0
};
var _hoisted_81 = ["src"];
var _hoisted_82 = ["src"];
var _hoisted_83 = {
  key: 2
};
var _hoisted_84 = ["src"];
var _hoisted_85 = {
  key: 1
};
var _hoisted_86 = {
  key: 0
};
var _hoisted_87 = ["src"];
var _hoisted_88 = {
  key: 1
};
var _hoisted_89 = ["src"];
var _hoisted_90 = {
  key: 2
};
var _hoisted_91 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  var _component_SideModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p style=\"text-align: justify;\">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.\n    </p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_cache[82] || (_cache[82] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Review/Approve ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "OPCR (Rating)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.search = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Search..."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "btn btn-primary btn-sm",
    href: "/Societal/create"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Societal Goals", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link :href=\"'/Sectoral'\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n                    <path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/>\n                </svg>\n            </Link> ")]), _cache[83] || (_cache[83] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "masonry-sizer col-md-6"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row gap-20"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Office"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Semester"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period Covered"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.data, function (dat) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.office.FFUNCTION), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.semester), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.opcr_date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus(dat.rating_status)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary btn-sm action-btn",
      type: "button",
      id: "dropdownMenuButton1",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      "class": "bi bi-three-dots",
      viewBox: "0 0 16 16"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"dropdown-item\" :href=\"`/Societal/${dat.id}/edit`\">Edit</Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.viewModal(dat.id, dat.rating_status, dat);
      }
    }, "View", 8 /* PROPS */, _hoisted_12)]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"text-danger dropdown-item\" @click=\"deleteSectoral(dat.id)\">\n                                                Delete</Link> ")], -1 /* CACHED */))])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
    next: $props.data.next_page_url,
    prev: $props.data.prev_page_url
  }, null, 8 /* PROPS */, ["next", "prev"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.total) + " entries ", 1 /* TEXT */)])])])]), $data.displayModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 0,
    onCloseModalEvent: $options.hideModal,
    title: "".concat($props.mode_1)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_current }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "OFFICE: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.office.FFUNCTION), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "SEMESTER: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.semester), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PERIOD COVERED: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.opcr_date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "STATUS: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus($data.opcr_current.rating_status)), 1 /* TEXT */)])]), $props.mode_1 === 'Review' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [!$data.show_all_not_clicked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.toggleAllMovVisibility(false);
        }),
        "class": "btn btn-link p-0"
      }, " Collapse All ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $options.toggleAllMovVisibility(true);
        }),
        "class": "btn btn-link p-0"
      }, " Expand all ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <iframe :src=\"my_link\" style=\"width:100%; height:500px\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_data }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" d-flex justify-content-center  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_21, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
        "class": "sticky-header"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "text-white",
        style: {
          "background-color": "#026673"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "MFO")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "PAPS")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Accomplishments")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "7",
        rowspan: "1",
        style: {
          "text-align": "center"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Rating")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Remarks")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "MOVs")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "text-white",
        style: {
          "background-color": "#026673"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q2")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q3")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E2")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E3")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "T1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th></th> ")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.opcr_data, function (dat, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            '--bs-table-accent-bg': $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            fontWeight: $data.opcr_data[index].mov_is_visible ? 'bold' : 'normal'
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MFO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.mfo_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PAPS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.paps_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Actual Accomplishments "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.accomplishments) + " ", 1 /* TEXT */), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "DPCR Score: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverageScore(dat.monthly_targets)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q1_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{  dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q2_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q3_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E1 "), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: {
            "width": "9% !important",
            "white-space": "normal",
            "word-wrap": "break-word"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  width: 2.5em; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Standard Response Time"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e1\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1')\"\n                                                :disabled=\"dat.e1_standard === 'No'\"\n                                                :style=\"dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e1_standard === 'Yes' && !dat.e1\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E2 "), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: {
            "width": "9% !important",
            "white-space": "normal",
            "word-wrap": "break-word"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Quantity Based"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e2\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2')\"\n                                                :disabled=\"dat.e2_standard === 'No'\"\n                                                :style=\"dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e2_standard === 'Yes' && !dat.e2\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E3 "), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: {
            "width": "9% !important",
            "white-space": "normal",
            "word-wrap": "break-word"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 2.5em; text-align: center;\"   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Optimum use of resources"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e3\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\" type=\"number\"\n                                                @change=\"saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3')\"\n                                                :disabled=\"dat.e3_standard === 'No'\"\n                                                :style=\"dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e3_standard === 'Yes' && !dat.e3\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" T1 "), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: {
            "width": "9% !important",
            "white-space": "normal",
            "word-wrap": "break-word"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Timeliness (Deadline)"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" t1_standard: {{ dat.t1_standard }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"dat.t1_standard !== 'Yes'\"\n                                                :style=\"dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].t1\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1')\"\n\n                                                :disabled=\"\n                                                    dat.t1_standard === 'No' ||\n                                                    dat.t1_standard === null ||\n                                                    dat.t1_standard === undefined ||\n                                                    Number.isNaN(dat.t1_standard)\n                                                \"\n                                                :style=\"\n                                                    dat.t1_standard === 'No' ||\n                                                    dat.t1_standard === null ||\n                                                    dat.t1_standard === undefined ||\n                                                    Number.isNaN(dat.t1_standard)\n                                                        ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;'\n                                                        : ''\n                                                \"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.t1_standard === 'Yes' && !dat.t1\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td></td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" REMARKS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @input=\"autoResize($event)\" ref=\"remarksTextarea\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].remarks = $event;
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].remarks, $data.opcr_data[index].opcr_rating_id, 'remarks');
          }
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_29), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.opcr_data[index].remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOVS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("opcr_data[index].mov_is_visible: {{ opcr_data[index].mov_is_visible }}\n                                            count_movs: {{ opcr_data[index].count_movs }}\n                                            :disabled=\"!dat.movs\"\n                                                :style=\"!dat.movs ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), !$data.opcr_data[index].mov_is_visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          onClick: function onClick($event) {
            return $options.updateMOVisVisible($data.opcr_data[index].mov_is_visible, index);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "View MOVs"
        }, _toConsumableArray(_cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "blue",
          "class": "bi bi-eye-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_31)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          onClick: function onClick($event) {
            return $options.updateMOVisVisible($data.opcr_data[index].mov_is_visible, index);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "View MOVs"
        }, _toConsumableArray(_cache[26] || (_cache[26] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "currentColor",
          "class": "bi bi-eye-slash-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_32))])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            '--bs-table-accent-bg': $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            fontWeight: $data.opcr_data[index].mov_is_visible ? 'bold' : 'normal'
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q1, $data.opcr_data[index].opcr_rating_id, 'q1');
          }
        }, _toConsumableArray(_cache[31] || (_cache[31] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_34), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q1]]), $data.submit_attempt == true && !dat.q1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{  dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q2, $data.opcr_data[index].opcr_rating_id, 'q2');
          }
        }, _toConsumableArray(_cache[32] || (_cache[32] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_37), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q2]]), $data.submit_attempt == true && !dat.q2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q3 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q3, $data.opcr_data[index].opcr_rating_id, 'q3');
          }
        }, _toConsumableArray(_cache[33] || (_cache[33] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_40), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q3]]), $data.submit_attempt == true && !dat.q3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  width: 2.5em; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e1, $data.opcr_data[index].opcr_rating_id, 'e1');
          },
          disabled: dat.e1_standard === 'No'
        }, _toConsumableArray(_cache[34] || (_cache[34] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_43), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e1]]), $data.submit_attempt == true && dat.e1_standard === 'Yes' && !dat.e1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e2, $data.opcr_data[index].opcr_rating_id, 'e2');
          },
          disabled: dat.e2_standard === 'No'
        }, _toConsumableArray(_cache[35] || (_cache[35] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e2]]), $data.submit_attempt == true && dat.e2_standard === 'Yes' && !dat.e2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 2.5em; text-align: center;\"   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e3 = $event;
          },
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          type: "number",
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e3, $data.opcr_data[index].opcr_rating_id, 'e3');
          },
          disabled: dat.e3_standard === 'No'
        }, _toConsumableArray(_cache[36] || (_cache[36] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_49), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e3]]), $data.submit_attempt == true && dat.e3_standard === 'Yes' && !dat.e3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" T1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" t1_standard: {{ dat.t1_standard }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"dat.t1_standard !== 'Yes'\"\n                                                :style=\"dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].t1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.t1_standard === 'No' || dat.t1_standard === null || dat.t1_standard === undefined || Number.isNaN(dat.t1_standard) ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].t1, $data.opcr_data[index].opcr_rating_id, 't1');
          },
          disabled: dat.t1_standard === 'No' || dat.t1_standard === null || dat.t1_standard === undefined || Number.isNaN(dat.t1_standard)
        }, _toConsumableArray(_cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_52), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].t1]]), $data.submit_attempt == true && dat.t1_standard === 'Yes' && !dat.t1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 4 /* STYLE */), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_54, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "no-stripe-bg"
        }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_55, [parseFloat($data.opcr_data[index].count_movs) > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_56, "Files")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_57, "File"))]), _cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, " Download ", -1 /* CACHED */)), _cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, " View ", -1 /* CACHED */)), _cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          colspan: "7",
          "class": "bg-secondary text-white"
        }, null, -1 /* CACHED */)), _cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 1
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.movs, function (file) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
            "class": "no-stripe-bg"
          }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: _ctx.getPreUploadFileIcon(file.filename.split('.').pop()),
            alt: "file preview",
            style: {
              "width": "30px",
              "height": "30px",
              "object-fit": "cover"
            }
          }, null, 8 /* PROPS */, _hoisted_58), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.filename), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            href: "/movs/download/".concat(file.id),
            "class": "inline-flex items-center",
            title: "Download",
            target: "_blank"
          }, _toConsumableArray(_cache[43] || (_cache[43] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "green",
            "class": "bi bi-cloud-arrow-down-fill",
            viewBox: "0 0 16 16"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"
          })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_59), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: function onClick($event) {
              return $options.previewFile(file);
            },
            "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
            title: "Preview"
          }, _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "blue",
            "class": "bi bi-eye-fill",
            viewBox: "0 0 16 16"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
          })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_60), _cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */))]), _cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
            colspan: "7"
          }, null, -1 /* CACHED */)), _cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]);
        }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_61, _toConsumableArray(_cache[50] || (_cache[50] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          colspan: "11"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("         "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "d-inline-block px-3 py-2 bg-danger bg-opacity-10 border border-danger rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": "text-danger fw-bold"
        }, "No MOVs uploaded!!!")])], -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.mode_1 === 'Approve' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table class=\"table table-hover table-bordered border-dark\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_67, [_cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Major Final Output", -1 /* CACHED */)), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Success Indicators (Targets + Measures)", -1 /* CACHED */)), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Alloted Budget", -1 /* CACHED */)), _cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Accountable Division", -1 /* CACHED */)), _cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Actual Accomplishments", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "radio",
        name: "rating",
        checked: $data.currentRatingType === '0',
        onChange: _cache[3] || (_cache[3] = function ($event) {
          return $options.setRatingType('ppdo', $data.opcr_current.id);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_69), _cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rating (PPDO Score) ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" -{{ opcr_current.id }} -ratingxcxv type - {{ currentRatingType }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "radio",
        name: "rating",
        checked: $data.currentRatingType === '1',
        onChange: _cache[4] || (_cache[4] = function ($event) {
          return $options.setRatingType('dpcr', $data.opcr_current.id);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_71), _cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rating (DPCR Score) ", -1 /* CACHED */))]), _cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Remarks", -1 /* CACHED */)), _cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "MOV", -1 /* CACHED */))]), _cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "bg-secondary text-white"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Average"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Average")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr class=\"bg-secondary text-white\">\n                                    <th>Quality</th>\n                                    <th>Efficiency</th>\n                                    <th>Timeliness</th>\n                                    <th>Average</th>\n                                </tr> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.opcr_data, function (opcr, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [index === 0 || opcr.mfo_desc !== $data.opcr_data[index - 1].mfo_desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 0,
          rowspan: $options.getRowspan(opcr.mfo_desc, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.mfo_desc), 9 /* TEXT, PROPS */, _hoisted_72)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 0 || opcr.success_indicator !== $data.opcr_data[index - 1].success_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 1,
          rowspan: $options.getRowspanIndicator(opcr.success_indicator, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.target_success_indicator), 9 /* TEXT, PROPS */, _hoisted_73)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), index === 0 || opcr.office_accountable !== $data.opcr_data[index - 1].office_accountable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 2,
          rowspan: $options.getRowspan2(opcr.office_accountable, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.office_accountable), 9 /* TEXT, PROPS */, _hoisted_74)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea v-model=\"opcr_data[index].accomplishments\"\n                                            style=\"height: inherit\"></textarea> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].accomplishments), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO RATING ********************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"opcr_data[index].rating_q\" class=\"centered-input\" type=\"number\"\n                                            min=\"0\" max=\"5\" step=\"1\" disabled> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_q), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_e), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"opcr_data[index].rating_t\" class=\"centered-input\" type=\"number\"\n                                            min=\"0\" max=\"5\" step=\"1\" disabled> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_t), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input :value=\"computeAverage(opcr_data[index])\" class=\"centered-input\" type=\"number\"\n                                       min=\"0\" max=\"5\" step=\"1\" disabled\n                                    > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverage($data.opcr_data[index])), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DPCR RATING ************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverageByType($data.opcr_data[index].monthly_targets, "q")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverageByType($data.opcr_data[index].monthly_targets, "e")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].monthly_targets.t1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input :value=\"computeAverage(opcr_data[index])\" class=\"centered-input\" type=\"number\"\n                                       min=\"0\" max=\"5\" step=\"1\" disabled\n                                    > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.computeAverageQET($options.computeAverageByType($data.opcr_data[index].monthly_targets, "q"), $options.computeAverageByType($data.opcr_data[index].monthly_targets, "e"), $data.opcr_data[index].monthly_targets.t1), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].remarks = $event;
          },
          style: {
            "height": "inherit"
          }
        }, null, 8 /* PROPS */, _hoisted_75), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.opcr_data[index].remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return _ctx.showModalMOV($data.opcr_data[index].id);
          }
        }, "Upload MOVs", 8 /* PROPS */, _hoisted_76)])]);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "5"
      }, null, -1 /* CACHED */)), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getTotalAverage()), 1 /* TEXT */), _cache[65] || (_cache[65] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (DPCR)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeDPCRTotal($data.opcr_data)), 1 /* TEXT */), _cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "5"
      }, null, -1 /* CACHED */)), _cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getAverageAll()), 1 /* TEXT */), _cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (DPCR)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeDPCRAverage($data.opcr_data)), 1 /* TEXT */), _cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_data }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "REMARKS: ", -1 /* CACHED */)), _cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.form.remarks = $event;
        }),
        type: "text"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.remarks]]), _cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), _cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [$data.opcr_current.rating_status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $options.reviewSubmit();
        }),
        "class": "btn btn-primary text-white"
      }, "Review")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), $data.opcr_current.rating_status == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $options.approveSubmit();
        }),
        "class": "btn btn-success text-white"
      }, "Approve")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return $options.returnSubmit();
        }),
        "class": "btn btn-danger text-white"
      }, "Return")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent", "title"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.displaySideModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SideModal, {
    key: 1,
    onCloseModalEvent: _cache[11] || (_cache[11] = function ($event) {
      return $data.displaySideModal = false;
    }),
    style: {
      "z-index": "9999"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_cache[81] || (_cache[81] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "text-lg font-semibold"
      }, "Preview SideModal", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" file_extension: {{ file_extension }} -- {{ view_link }} -- {{ disk }} "), $props.disk === 'public' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <iframe v-if=\"file_extension === 'pdf'\"\n                    :src=\"`/storage/${current_filepath}`\"\n                    width=\"100%\"\n                    height=\"500px\">\n                </iframe> "), _ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, null, 8 /* PROPS */, _hoisted_81)])) : _ctx.imageTypes.includes(_ctx.file_extension) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .toLowerCase() "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[79] || (_cache[79] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[9] || (_cache[9] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8 /* PROPS */, _hoisted_82)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, null, 8 /* PROPS */, _hoisted_84)]))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_85, [_ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, null, 8 /* PROPS */, _hoisted_87)])) : _ctx.imageTypes.includes(_ctx.file_extension.toLowerCase()) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_88, [_cache[80] || (_cache[80] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[10] || (_cache[10] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8 /* PROPS */, _hoisted_89)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, null, 8 /* PROPS */, _hoisted_91)]))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <br>\n            <iframe :src=\"`/storage/${current_filepath}`\"></iframe>\n            <br>\n            <a :href=\"`/storage/${current_filepath}`\" target=\"_blank\">\n                Open File\n            </a> ")];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n        <Modal2 v-if=\"displayModal2\" @close-modal-event=\"hideModal\">\n            <button @click=\"backTo()\" class=\"btn btn-light\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                    class=\"bi bi-box-arrow-in-left\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z\" />\n                    <path fill-rule=\"evenodd\"\n                        d=\"M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z\" />\n                </svg>\n            </button>\n            {{ mode }} Remarks:\n            <input class=\"form-control\" v-model=\"remarks\" type=\"text\" />\n            viewModal(opcr_id, status, opcr)\n            &nbsp;v-if=\"auth.user.office.department_code == '04'\"\n            <button @click=\"confirmSubmission()\" class=\"btn btn-primary text-white\">Done</button>&nbsp;\n            <button @click=\"hideModal()\" class=\"btn btn-danger text-white\">Cancel</button>\n        </Modal2> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth }}\n        {{ auth.user.office.department_code }}\n        ")])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "permissions-modal"
};
var _hoisted_2 = {
  "class": "modal",
  tabindex: "-1",
  role: "dialog"
};
var _hoisted_3 = {
  "class": "modal-dialog custom-modal"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_6 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_7 = {
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};
var _hoisted_8 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
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
  "class": "permissions-modal"
};
var _hoisted_2 = {
  "class": "modal",
  tabindex: "-1",
  role: "dialog"
};
var _hoisted_3 = {
  "class": "modal-dialog modal-xl"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_6 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_7 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "modal-title",
    style: {
      "color": "#ffe819",
      "text-align": "center !important"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PRINT PREVIEW")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])])]);
}

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sticky-header[data-v-76431a50] {\n  position: sticky;\n  top: 0;\n  background: white; /* Important so header isn’t transparent */\n  z-index: 2;        /* Keeps header above body rows */\n}\n.row-centered[data-v-76431a50] {\n    text-align: center;\n}\n.col-centered[data-v-76431a50] {\n    display: inline-block;\n    float: none;\n    text-align: left;\n    margin-right: -4px;\n}\n.pos[data-v-76431a50] {\n    position: top;\n    top: 240px;\n}\n.force-white[data-v-76431a50] {\n  background-color: red !important;\n}\n.no-stripe-bg[data-v-76431a50] {\n  background-color: white !important;\n  --bs-table-accent-bg: white !important;\n  position: relative;\n  z-index: 1;\n}\n/* .btn-link-style {\n  background: none;\n  border: none;\n  color: #007bff;  Bootstrap primary link color\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.btn-link-style:hover {\n  color: #0056b3; Darker on hover\n  text-decoration: none;\n} */\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-modal[data-v-8a5e42b0] {\r\n  max-width: 80% !important; /* width of modal */\r\n  width: 80% !important;\n}\r\n    /* Override default value of 'none' */\n.modal[data-v-8a5e42b0] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-e8c5b748] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue"
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=76431a50&scoped=true */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-76431a50"],['__file',"resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css"
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");


/***/ },

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true"
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=76431a50&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true");


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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
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

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue"
/*!****************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-8a5e42b0"],['__file',"resources/js/Shared/ModalDynamicTitle2.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js"
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css"
/*!************************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");


/***/ },

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true"
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");


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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
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


/***/ },

/***/ "./resources/js/Shared/PrintModal.vue"
/*!********************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");
/* harmony import */ var _PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
/* harmony import */ var _PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e8c5b748"],['__file',"resources/js/Shared/PrintModal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js"
/*!********************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css"
/*!****************************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");


/***/ },

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true"
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");


/***/ }

}]);