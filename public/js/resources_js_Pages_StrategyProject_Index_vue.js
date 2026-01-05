"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_StrategyProject_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: Object,
    revision_plan: Object
  },
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        localData: JSON.parse(JSON.stringify(this.data))
      }),
      timeouts: {},
      // Store timeouts for activities
      show_inactive: true,
      unsaved: false
    };
  },
  watch: {
    data: function data(newValue) {
      this.form.localData = JSON.parse(JSON.stringify(newValue)); // Keep local copy in sync
    }
  },
  mounted: function mounted() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    calculateTotalStrategy: function calculateTotalStrategy(index, allocation_type) {
      clearTimeout(this.timeouts["strategy_".concat(index, "_").concat(allocation_type)]);
      this.form.localData[index]["".concat(allocation_type, "_total")] = (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q1")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q2")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q3")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q4")]) || 0);
      this.updateStrategy(this.form.localData[index]);
    },
    calculateTotalActivity: function calculateTotalActivity(activity, strategyIndex, activityIndex, type) {
      var _this = this;

      clearTimeout(this.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex, "_").concat(type)]);
      this.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex, "_").concat(type)] = setTimeout(function () {
        _this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_total")] = (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q1")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q2")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q3")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q4")]) || 0);
        console.log("Activity Total updated for ".concat(type, ":"), _this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_total")]);

        _this.updateActivity(activity, activityIndex, strategyIndex);
      }, 1000);
    },
    setVisibility: function setVisibility(is_visible, index) {
      // this.$set(this.form.monthly_ratings, index, { ...this.form.monthly_ratings[index], visible: !is_visible });
      // alert("is_visible: "+is_visible + " index: "+index)
      var act = is_visible;

      if (act < 1) {
        act = 1;
      } else {
        act = 0;
      }

      this.form.localData[index].finance_visible = !is_visible;
    },
    setStrategyActivityVisibility: function setStrategyActivityVisibility(activity_visible, index) {
      // alert("activity_visible: "+activity_visible + " index: "+index)
      var act = activity_visible;

      if (act < 1) {
        act = 1;
      } else {
        act = 0;
      }

      this.form.localData[index].activity_visible = act;
    },
    setActivityVisibility: function setActivityVisibility(is_visible, strategyIndex, activityIndex) {
      // Toggle the visibility for the specific activity
      this.form.localData[strategyIndex].activity[activityIndex].finance_visible = !is_visible;
    },
    toggleStrategy: function toggleStrategy(strategyId, status, index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  id: strategyId,
                  type: "add or remove",
                  idrevplan: _this2.revision_plan.id
                };
                _context.prev = 1;

                if (!status) {
                  _context.next = 9;
                  break;
                }

                _this2.form.localData[index].is_active = '1';
                _context.next = 6;
                return _this2.createStrategy(payload);

              case 6:
                _this2.refreshData();

                _context.next = 13;
                break;

              case 9:
                _this2.form.localData[index].is_active = '0';
                _context.next = 12;
                return _this2.deleteStrategy(payload);

              case 12:
                _this2.refreshData();

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }))();
    },
    updateStrategy: function updateStrategy(strategy) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (strategy.is_active) {
                  payload = {
                    id: strategy.id,
                    idrevplan: _this3.revision_plan.id,
                    // strategy_id: strategy.strategy_id,
                    project_id: strategy.project_id,
                    target_indicator: strategy.target_indicator,
                    date_from: strategy.date_from,
                    date_to: strategy.date_to,
                    ps_q1: strategy.ps_q1,
                    ps_q2: strategy.ps_q2,
                    ps_q3: strategy.ps_q3,
                    ps_q4: strategy.ps_q4,
                    mooe_q1: strategy.mooe_q1,
                    mooe_q2: strategy.mooe_q2,
                    mooe_q3: strategy.mooe_q3,
                    mooe_q4: strategy.mooe_q4,
                    co_q1: strategy.co_q1,
                    co_q2: strategy.co_q2,
                    co_q3: strategy.co_q3,
                    co_q4: strategy.co_q4,
                    fe_q1: strategy.fe_q1,
                    fe_q2: strategy.fe_q2,
                    fe_q3: strategy.fe_q3,
                    fe_q4: strategy.fe_q4,
                    gad_issue: strategy.gad_issue,
                    ccet_code: strategy.ccet_code,
                    responsible: strategy.responsible,
                    is_active: strategy.is_active,
                    type: "update"
                  };
                  clearTimeout(_this3.timeout);
                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this3.createStrategy(payload);

                          case 2:
                            _this3.unsaved = false;

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  })), 2000);
                } else {
                  _this3.unsaved = false;
                  alert("Strategy is inactive");
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateActivity: function updateActivity(activity, activityIndex, strategyIndex) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (activity.is_active) {
                  // const activity = this.form.localData[strategyIndex].activity[activityIndex];
                  payload = {
                    id: activity.id,
                    // strategy_id: this.form.localData[strategyIndex].id,
                    idrevplan: _this4.revision_plan.id,
                    project_id: activity.project_id,
                    target_indicator: activity.target_indicator,
                    date_from: activity.date_from,
                    date_to: activity.date_to,
                    ps_q1: activity.ps_q1,
                    ps_q2: activity.ps_q2,
                    ps_q3: activity.ps_q3,
                    ps_q4: activity.ps_q4,
                    mooe_q1: activity.mooe_q1,
                    mooe_q2: activity.mooe_q2,
                    mooe_q3: activity.mooe_q3,
                    mooe_q4: activity.mooe_q4,
                    co_q1: activity.co_q1,
                    co_q2: activity.co_q2,
                    co_q3: activity.co_q3,
                    co_q4: activity.co_q4,
                    fe_q1: activity.fe_q1,
                    fe_q2: activity.fe_q2,
                    fe_q3: activity.fe_q3,
                    fe_q4: activity.fe_q4,
                    gad_issue: activity.gad_issue,
                    ccet_code: activity.ccet_code,
                    responsible: activity.responsible,
                    is_active: activity.is_active,
                    type: "update"
                  }; // Clear existing timeout to prevent multiple calls

                  clearTimeout(_this4.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex)]);
                  _this4.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex)] = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this4.createActivity(payload);

                          case 3:
                            console.log("Activity updated: ".concat(activity.id));
                            _this4.unsaved = false; // Reset unsaved flag after successful save

                            _context4.next = 10;
                            break;

                          case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4["catch"](0);
                            console.error('Error updating activity:', _context4.t0);

                          case 10:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[0, 7]]);
                  })), 2000); // Wait 2 seconds before saving
                } else {
                  _this4.unsaved = false;
                  alert("Activity is inactive");
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    toggleActivity: function toggleActivity(activityId, status, activity_index, strat_index) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                payload = {
                  id: activityId,
                  idrevplan: _this5.revision_plan.id
                };

                if (!status) {
                  _context6.next = 8;
                  break;
                }

                _this5.form.localData[strat_index].activity[activity_index].is_active = '1';
                _context6.next = 5;
                return _this5.createActivity(payload);

              case 5:
                _this5.refreshData();

                _context6.next = 12;
                break;

              case 8:
                _this5.form.localData[strat_index].activity[activity_index].is_active = '0';
                _context6.next = 11;
                return _this5.deleteActivity(payload);

              case 11:
                _this5.refreshData();

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    createStrategy: function createStrategy(payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return axios.post("/strategies-project/r/create", payload);

              case 3:
                response = _context7.sent;
                console.log(response.data); // this.refreshData();

                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.error('Error creating strategy:', _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }))();
    },
    deleteStrategy: function deleteStrategy(payload) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return axios["delete"]("/strategies-project/r/delete", {
                  data: payload
                });

              case 3:
                response = _context8.sent;
                console.log(response.data);

                _this6.refreshData();

                _context8.next = 11;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                console.error('Error deleting strategy:', _context8.t0);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 8]]);
      }))();
    },
    createActivity: function createActivity(payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return axios.post("/activities-project/r/create", payload);

              case 3:
                response = _context9.sent;
                console.log(response.data); // this.refreshData();

                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                console.error('Error creating activity:', _context9.t0);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }))();
    },
    deleteActivity: function deleteActivity(payload) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return axios["delete"]("/activities-project/r/delete", {
                  data: payload
                });

              case 3:
                response = _context10.sent;
                console.log(response.data);

                _this7.refreshData();

                _context10.next = 11;
                break;

              case 8:
                _context10.prev = 8;
                _context10.t0 = _context10["catch"](0);
                console.error('Error deleting activity:', _context10.t0);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 8]]);
      }))();
    },
    refreshData: function refreshData() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return axios.get("/strategies-and-activities/refresh/data/now/".concat(_this8.revision_plan.id));

              case 3:
                response = _context11.sent;
                // this.data = response.data;
                _this8.form.localData = response.data;
                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                console.error('Error refreshing data:', _context11.t0);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 7]]);
      }))();
    },
    setUnsaved: function setUnsaved(status) {
      this.unsaved = status;
    },
    handleBeforeUnload: function handleBeforeUnload(event) {
      if (this.unsaved) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row gap-20 masonry pos-r"
};
var _hoisted_3 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Implementation Schedule/ Work Plan", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  "class": "peers"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "PROJECT TITLE: ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "masonry-item w-100"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row gap-20"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_12 = {
  "class": "table-responsive"
};
var _hoisted_13 = {
  "class": "table table-hover"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-primary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "3%"
  }
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Strategy"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2 text-center",
  style: {
    "width": "10%"
  }
}, "Performance Target/Indicator"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Timeline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "15%"
  }
}, "Expected Output/ Outcome"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "5",
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "Cost/Budget"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "12%"
  }
}, "GAD Issue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "8%"
  }
}, "CCET"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Office Responsible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "2%"
  }
}, "Actions")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-primary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "PS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "MOOE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "FE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "Capital Outlay"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "Total")])], -1
/* HOISTED */
);

var _hoisted_15 = {
  style: {
    "cursor": "pointer"
  }
};
var _hoisted_16 = ["checked", "onChange"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_19 = ["onClick"];
var _hoisted_20 = ["onUpdate:modelValue", "onChange"];
var _hoisted_21 = {
  key: 0,
  style: {}
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date from:")], -1
/* HOISTED */
);

var _hoisted_23 = ["onUpdate:modelValue", "onChange"];
var _hoisted_24 = {
  key: 1
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date to:")], -1
/* HOISTED */
);

var _hoisted_26 = ["onUpdate:modelValue", "onChange"];

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_28 = {
  key: 0
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  key: 1
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_34 = ["onClick"];
var _hoisted_35 = {
  key: 0
};
var _hoisted_36 = ["onClick"];
var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = ["onClick"];
var _hoisted_39 = {
  key: 0
};
var _hoisted_40 = ["onClick"];
var _hoisted_41 = {
  key: 0
};
var _hoisted_42 = ["onClick"];
var _hoisted_43 = {
  key: 0
};
var _hoisted_44 = ["onUpdate:modelValue", "onChange"];
var _hoisted_45 = ["onUpdate:modelValue", "onChange"];
var _hoisted_46 = ["onUpdate:modelValue", "onChange"];
var _hoisted_47 = {
  "class": "dropdown dropstart"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary btn-sm action-btn",
  type: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-three-dots",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
})])], -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = ["onClick"];
var _hoisted_52 = {
  key: 0
};
var _hoisted_53 = {
  key: 1
};
var _hoisted_54 = {
  key: 1
};
var _hoisted_55 = {
  key: 2
};
var _hoisted_56 = {
  key: 3
};
var _hoisted_57 = ["onClick"];
var _hoisted_58 = {
  key: 0
};
var _hoisted_59 = {
  key: 1
};
var _hoisted_60 = {
  key: 0
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_62 = {
  colspan: "13"
};
var _hoisted_63 = {
  "class": "peers"
};
var _hoisted_64 = {
  "class": "table table-sm table-bordered table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-primary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quarter/Period    "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Personnel Services"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "MOOE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Financial Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Capital Outlay")], -1
/* HOISTED */
);

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q1:  ", -1
/* HOISTED */
);

var _hoisted_67 = ["onUpdate:modelValue", "onChange"];
var _hoisted_68 = ["onUpdate:modelValue", "onChange"];
var _hoisted_69 = ["onUpdate:modelValue", "onChange"];
var _hoisted_70 = ["onUpdate:modelValue", "onChange"];

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q2:  ", -1
/* HOISTED */
);

var _hoisted_72 = ["onUpdate:modelValue", "onChange"];
var _hoisted_73 = ["onUpdate:modelValue", "onChange"];
var _hoisted_74 = ["onUpdate:modelValue", "onChange"];
var _hoisted_75 = ["onUpdate:modelValue", "onChange"];

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q3:  ", -1
/* HOISTED */
);

var _hoisted_77 = ["onUpdate:modelValue", "onChange"];
var _hoisted_78 = ["onUpdate:modelValue", "onChange"];
var _hoisted_79 = ["onUpdate:modelValue", "onChange"];
var _hoisted_80 = ["onUpdate:modelValue", "onChange"];

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q4:  ", -1
/* HOISTED */
);

var _hoisted_82 = ["onUpdate:modelValue", "onChange"];
var _hoisted_83 = ["onUpdate:modelValue", "onChange"];
var _hoisted_84 = ["onUpdate:modelValue", "onChange"];
var _hoisted_85 = ["onUpdate:modelValue", "onChange"];

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total:  ", -1
/* HOISTED */
);

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_88 = {
  colspan: "13"
};
var _hoisted_89 = {
  "class": "table table-sm table-borderless table-striped table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "3%"
  }
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Activity"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2 text-center",
  style: {
    "width": "10%"
  }
}, "Performance Target/Indicator"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Timeline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "15%"
  }
}, "Expected Output/ Outcome"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "5",
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "Cost/Budget"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "12%"
  }
}, "GAD Issue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "8%"
  }
}, "CCET"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "10%"
  }
}, "Office Responsible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2",
  style: {
    "width": "2%"
  }
}, "Actions")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "PS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "MOOE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "FE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "Capital Outlay"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "5%"
  }
}, "Total")])], -1
/* HOISTED */
);

var _hoisted_91 = ["onClick"];
var _hoisted_92 = ["checked", "onChange"];
var _hoisted_93 = ["onClick"];

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_95 = {
  key: 0
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date from:")], -1
/* HOISTED */
);

var _hoisted_97 = ["onUpdate:modelValue", "onChange"];

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_99 = {
  key: 1
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date to:")], -1
/* HOISTED */
);

var _hoisted_101 = ["onUpdate:modelValue", "onChange"];

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_105 = ["onClick"];
var _hoisted_106 = {
  key: 0
};
var _hoisted_107 = ["onClick"];
var _hoisted_108 = {
  key: 0
};
var _hoisted_109 = ["onClick"];
var _hoisted_110 = {
  key: 0
};
var _hoisted_111 = ["onClick"];
var _hoisted_112 = {
  key: 0
};
var _hoisted_113 = {
  key: 0
};
var _hoisted_114 = ["onUpdate:modelValue", "onChange"];
var _hoisted_115 = ["onUpdate:modelValue", "onChange"];
var _hoisted_116 = ["onUpdate:modelValue", "onChange"];
var _hoisted_117 = {
  "class": "dropdown dropstart"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary btn-sm action-btn",
  type: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-three-dots",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
})])], -1
/* HOISTED */
);

var _hoisted_119 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_120 = ["onClick"];
var _hoisted_121 = {
  key: 0
};
var _hoisted_122 = {
  key: 1
};
var _hoisted_123 = {
  key: 0
};

var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_125 = {
  colspan: "14"
};
var _hoisted_126 = {
  "class": "peers"
};
var _hoisted_127 = {
  "class": "table table-sm table-bordered table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-primary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quarter/Period    "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Personnel Services"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "MOOE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "FE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Capital Outlay")], -1
/* HOISTED */
);

var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q1:  ", -1
/* HOISTED */
);

var _hoisted_130 = ["onUpdate:modelValue", "onChange"];
var _hoisted_131 = ["onUpdate:modelValue", "onChange"];
var _hoisted_132 = ["onUpdate:modelValue", "onChange"];
var _hoisted_133 = ["onUpdate:modelValue", "onChange"];

var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q2:  ", -1
/* HOISTED */
);

var _hoisted_135 = ["onUpdate:modelValue", "onChange"];
var _hoisted_136 = ["onUpdate:modelValue", "onChange"];
var _hoisted_137 = ["onUpdate:modelValue", "onChange"];
var _hoisted_138 = ["onUpdate:modelValue", "onChange"];

var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q3:  ", -1
/* HOISTED */
);

var _hoisted_140 = ["onUpdate:modelValue", "onChange"];
var _hoisted_141 = ["onUpdate:modelValue", "onChange"];
var _hoisted_142 = ["onUpdate:modelValue", "onChange"];
var _hoisted_143 = ["onUpdate:modelValue", "onChange"];

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q4:  ", -1
/* HOISTED */
);

var _hoisted_145 = ["onUpdate:modelValue", "onChange"];
var _hoisted_146 = ["onUpdate:modelValue", "onChange"];
var _hoisted_147 = ["onUpdate:modelValue", "onChange"];
var _hoisted_148 = ["onUpdate:modelValue", "onChange"];

var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total:  ", -1
/* HOISTED */
);

var _hoisted_150 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_151 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_152 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_153 = {
  style: {
    "font-weight": "bold"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link :href=\"`/revision/${revision_plan.idpaps}`\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" class=\"bi bi-x-lg\"\r\n                    viewBox=\"0 0 16 16\">\r\n                    <path fill-rule=\"evenodd\"\r\n                        d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\" />\r\n                    <path fill-rule=\"evenodd\"\r\n                        d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\" />\r\n                </svg>\r\n            </Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.goBack && _ctx.goBack.apply(_ctx, arguments);
    }, ["prevent"])),
    href: "#"
  }, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ unsaved }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.revision_plan.project_title), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"peers\">\r\n            <input type=checkbox v-model=\"show_inactive\">&nbsp;Show Inactive\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ revision_plan }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-color: #000; border-width: 2px;\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table-sm  table-bordered "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.localData, function (strategy, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      checked: Array.isArray(strategy.strategyProject) && strategy.strategyProject.length > 0 && strategy.is_active === '1',
      onChange: function onChange($event) {
        return $options.toggleStrategy(strategy.id, $event.target.checked, index);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_16), _hoisted_17, _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ strategy.activity }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ strategy.activity.length }}\r\n                                        {{ strategy.activity_visible }}\r\n                                        {{ revision_plan.is_strategy_based }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && revision_plan.is_strategy_based "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button v-if=\"revision_plan.is_strategy_based==0\" class=\"btn btn-primary text-white\" @click=\"setStrategyActivityVisibility(strategy.activity_visible, index)\">\r\n                                            Activities\r\n                                        </button><br><br> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"dropdown-item\" @click=\"setVisibility(strategy.finance_visible, index)\">\r\n                                            <span v-if=\"parseFloat(strategy.finance_visible)<1\">Set Cost/Budget</span>\r\n                                            <span v-else>Hide Cost/Budget</span>\r\n\r\n                                            @click=\"setVisibility(strategy.finance_visible, index)\"\r\n                                        </button> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      onClick: function onClick($event) {
        return $options.setStrategyActivityVisibility(strategy.activity_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.description), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    )], 8
    /* PROPS */
    , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.target_indicator = $event;
      },
      onInput: _cache[1] || (_cache[1] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_20)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.target_indicator]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-control",
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.date_from = $event;
      },
      onInput: _cache[2] || (_cache[2] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.date_from]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-control",
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.date_to = $event;
      },
      onInput: _cache[3] || (_cache[3] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.date_to]]), _hoisted_27])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), strategy.strategyProject[0] && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.strategyProject[0].expected_output, function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
      /* TEXT */
      ), _hoisted_29])]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.strategyProject[0].expected_outcome, function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
      /* TEXT */
      ), _hoisted_30])]);
    }), 256
    /* UNKEYED_FRAGMENT */
    ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.expected_output && $props.revision_plan.is_strategy_based == 1, function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
      /* TEXT */
      ), _hoisted_32])]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.expected_outcome && $props.revision_plan.is_strategy_based == 1, function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
      /* TEXT */
      ), _hoisted_33])]);
    }), 256
    /* UNKEYED_FRAGMENT */
    ))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.ps_total, 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_34), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.mooe_total, 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_36), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.co_total, 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_38), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.fe_total, 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.ps_total + strategy.mooe_total + strategy.co_total, 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_42), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.gad_issue = $event;
      },
      onInput: _cache[4] || (_cache[4] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, "\r\n                                        ", 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_44)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.gad_issue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ccet_code = $event;
      },
      onInput: _cache[5] || (_cache[5] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_45)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ccet_code]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.responsible = $event;
      },
      onInput: _cache[6] || (_cache[6] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_46)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.responsible]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_49, [$props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      }
    }, [parseFloat(strategy.finance_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_52, "Set Cost/Budget")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_53, "Hide Cost/Budget"))], 8
    /* PROPS */
    , _hoisted_51)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_54, [strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "dropdown-item",
      href: "/expected-outcomes-revised/".concat(strategy.strategy_id, "/strategy")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outcome id ")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" : {{strategy.id}} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_55, [strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "dropdown-item",
      href: "/expected-outputs-revised/".concat(strategy.strategy_id, "/strategy")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outputs id ")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.setStrategyActivityVisibility(strategy.activity_visible, index);
      }
    }, [parseFloat(strategy.activity_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_58, "Activities")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_59, "Hide Activities"))], 8
    /* PROPS */
    , _hoisted_57)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                                                    <a class=\"dropdown-item\" :href=\"`/activities/${strategy.id}`\">Activities</a>\r\n                                                </li> ")])])])]), strategy.finance_visible && strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q1 = $event;
      },
      onInput: _cache[7] || (_cache[7] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_67), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q1 = $event;
      },
      onInput: _cache[8] || (_cache[8] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_68), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q1 = $event;
      },
      onInput: _cache[9] || (_cache[9] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_69), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q1 = $event;
      },
      onInput: _cache[10] || (_cache[10] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_70), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q2 = $event;
      },
      onInput: _cache[11] || (_cache[11] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_72), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q2 = $event;
      },
      onInput: _cache[12] || (_cache[12] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_73), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q2 = $event;
      },
      onInput: _cache[13] || (_cache[13] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_74), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q2 = $event;
      },
      onInput: _cache[14] || (_cache[14] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_75), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q3 = $event;
      },
      onInput: _cache[15] || (_cache[15] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_77), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q3 = $event;
      },
      onInput: _cache[16] || (_cache[16] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_78), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q3 = $event;
      },
      onInput: _cache[17] || (_cache[17] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_79), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q3 = $event;
      },
      onInput: _cache[18] || (_cache[18] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_80), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q3]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q4 = $event;
      },
      onInput: _cache[19] || (_cache[19] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_82), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q4 = $event;
      },
      onInput: _cache[20] || (_cache[20] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_83), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q4 = $event;
      },
      onInput: _cache[21] || (_cache[21] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_84), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q4 = $event;
      },
      onInput: _cache[22] || (_cache[22] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_85), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q4]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.ps_total), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.mooe_total), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.fe_total), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.co_total), 1
    /* TEXT */
    )])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && $props.revision_plan.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_89, [_hoisted_90, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.activity, function (activity, activity_index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: activity_index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"activity.is_active === '1' || (activity.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        },
        style: {
          "cursor": "pointer"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        checked: Array.isArray(activity.activityProject) && activity.activityProject.length > 0 && activity.is_active === '1',
        onChange: function onChange($event) {
          return $options.toggleActivity(activity.id, $event.target.checked, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_92), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ activity }} ")], 8
      /* PROPS */
      , _hoisted_91), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        },
        style: {
          "cursor": "pointer"
        }
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.description), 9
      /* TEXT, PROPS */
      , _hoisted_93), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea class=\"form-control\" type=\"text\"\r\n                                                            v-model=\"activity.target_indicator\" @input=\"setUnsaved(true)\"\r\n                                                            @change=\"updateActivity(activity, activity_index, index)\"\r\n                                                            v-if=\"activity.is_active==1 \"></textarea> "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(activity.activityProject[0].expected_output, function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.target_indicator), 1
        /* TEXT */
        ), _hoisted_94])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.date_from = $event;
        },
        onInput: _cache[23] || (_cache[23] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_97), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.date_from]]), _hoisted_98])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.date_to = $event;
        },
        onInput: _cache[24] || (_cache[24] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_101), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.date_to]]), _hoisted_102])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(activity.activityProject[0].expected_output, function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
        /* TEXT */
        ), _hoisted_103])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(activity.activityProject[0].expected_outcome, function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1
        /* TEXT */
        ), _hoisted_104])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ activity.activityProject[0].expected_output }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total, 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_105), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.mooe_total, 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_107), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.fe_total, 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_109), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.co_total, 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_111), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total + activity.mooe_total + activity.fe_total + activity.co_total, 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.gad_issue = $event;
        },
        onInput: _cache[25] || (_cache[25] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_114)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.gad_issue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ccet_code = $event;
        },
        onInput: _cache[26] || (_cache[26] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_115)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ccet_code]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.responsible = $event;
        },
        onInput: _cache[27] || (_cache[27] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_116)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.responsible]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "dropdown-item",
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [parseFloat(activity.finance_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_121, "Set Cost/Budget")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_122, "Hide Cost/Budget"))], 8
      /* PROPS */
      , _hoisted_120)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: 0,
        "class": "dropdown-item",
        href: "/expected-outputs-revised/".concat(activity.activity_id, "/activity")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Output " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity_id), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: 0,
        "class": "dropdown-item",
        href: "/expected-outcomes-revised/".concat(activity.activity_id, "/activity")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outcome " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity_id), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), activity.finance_visible && activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_123, [_hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_127, [_hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q1 = $event;
        },
        onInput: _cache[28] || (_cache[28] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_130), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q1 = $event;
        },
        onInput: _cache[29] || (_cache[29] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_131), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q1 = $event;
        },
        onInput: _cache[30] || (_cache[30] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_132), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q1 = $event;
        },
        onInput: _cache[31] || (_cache[31] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_133), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q2 = $event;
        },
        onInput: _cache[32] || (_cache[32] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_135), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q2 = $event;
        },
        onInput: _cache[33] || (_cache[33] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_136), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q2 = $event;
        },
        onInput: _cache[34] || (_cache[34] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_137), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q2 = $event;
        },
        onInput: _cache[35] || (_cache[35] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_138), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q3 = $event;
        },
        onInput: _cache[36] || (_cache[36] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_140), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q3 = $event;
        },
        onInput: _cache[37] || (_cache[37] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_141), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q3 = $event;
        },
        onInput: _cache[38] || (_cache[38] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_142), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q3 = $event;
        },
        onInput: _cache[39] || (_cache[39] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_143), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q3]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q4 = $event;
        },
        onInput: _cache[40] || (_cache[40] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_145), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q4 = $event;
        },
        onInput: _cache[41] || (_cache[41] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_146), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q4 = $event;
        },
        onInput: _cache[42] || (_cache[42] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_147), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q4 = $event;
        },
        onInput: _cache[43] || (_cache[43] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_148), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q4]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_149, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total, 2, true)), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_151, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.mooe_total, 2, true)), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.fe_total, 2, true)), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.co_total, 2, true)), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\r\n                                                                                <th>Total:&nbsp;&nbsp;</th>\r\n                                                                                <td><input v-model=\"activity.ps_total\" class=\"form-control\"/></td>\r\n                                                                                <td><input v-model=\"activity.mooe_total\" class=\"form-control\"/></td>\r\n                                                                                <td><input v-model=\"activity.co_total\" class=\"form-control\"/></td>\r\n                                                                            </tr> ")])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
      /* STABLE_FRAGMENT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])])])], 64
    /* STABLE_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.localData[0] }} ")])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntextarea {\r\n\t/* width: 100%;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    position: absolute;\r\n\tresize: none;\r\n\t-webkit-box-sizing: border-box; /* <=iOS4, <= Android  2.3 */\r\n      /* -moz-box-sizing: border-box; /* FF1+ */\r\n           /* box-sizing: border-box; Chrome, IE8, Opera, Safari 5.1 */\r\n\r\n    width: 100%;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    position: absolute;\r\n    resize: none;\r\n    box-sizing: border-box;\r\n\r\n    /* Hide scrollbar */\r\n    overflow: hidden; /* Hides the scrollbar visually */\r\n    scrollbar-width: none; /* For Firefox */\r\n    -ms-overflow-style: none;\r\n\r\n    /* Auto-resize height */\r\n    height: auto;\r\n    overflow: hidden;\r\n    white-space: pre-wrap;\n}\ntable {\r\n    border-collapse: collapse;\n}\ntable, th, td {\r\n    position: relative;\r\n    border: 1px solid black;\n}\r\n\r\n/* Adjust cell height based on content */\r\n/* td { */\r\n    /* padding: 0px;\r\n    vertical-align: top; */\r\n/* } */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dc6f31a0 */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/StrategyProject/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=dc6f31a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0");


/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");


/***/ })

}]);