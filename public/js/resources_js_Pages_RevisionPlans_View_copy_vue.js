"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_View_copy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    CommentModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    auth: Object,
    paps: Object,
    office: String,
    implementation: Object,
    team_members: Object,
    monitors: Object,
    risks: Object,
    sig_rev: Object,
    sig_prep: Object,
    sig_app: Object,
    signatories: Object,
    data: Object,
    imp_amount: Number,
    department_code_project: String,
    department_code_user: String,
    // mooe_gad: Object,
    // mooe_non: Object,
    // cap_gad: Object,
    // cap_non: Object,
    // ps_gad: Object,
    // ps_non: Object,
    s_mooe_gad: Number,
    s_mooe_non: Number,
    s_cap_gad: Number,
    s_cap_non: Number,
    s_ps_gad: Number,
    s_ps_non: Number,
    s_fe_gad: Number,
    s_fe_non: Number,
    capitalOutlay: Object,
    maintenanceOperating: Object,
    personnelServices: Object,
    financialExpenses: Object,
    src: Object
  },
  computed: {},
  data: function data() {
    return {
      unsaved: false,
      show_comment_modal: false,
      comment: '',
      comment_section: '',
      comment_subtitle: '',
      comment_data: '',
      comment_column: '',
      comment_table: '',
      comment_reference_object: [],
      comments: [],
      reply_concat: "",
      is_replying: false,
      reply_index: -1,
      v_imp_fe: 0,
      v_imp_co: 0,
      v_imp_mooe: 0,
      v_imp_ps: 0,
      has: 0,
      tot_gad: 0,
      tot_non: 0,
      grand_total: 0
    };
  },
  mounted: function mounted() {
    this.isOne();
    this.calculateTotals(this.paps.is_strategy_based);

    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloaded');
    }

    window.addEventListener('beforeunload', this.handleBeforeUnload);
    this.tot_gad = parseFloat(this.s_cap_gad) + parseFloat(this.s_mooe_gad) + parseFloat(this.s_ps_gad) + parseFloat(this.s_fe_gad);
    this.tot_non = parseFloat(this.s_cap_non) + parseFloat(this.s_mooe_non) + parseFloat(this.s_ps_non) + parseFloat(this.s_fe_non);
    this.grand_total = this.tot_gad + this.tot_non;
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  watch: {},
  methods: {
    isOne: function isOne() {// var mooe=this.b_mooe.length;
      // var co=this.b_capital.length;
      // var ps=this.b_ps.length;
      // var has=0;
      // if(mooe>0){
      //     has+=1;
      // }
      // if(ps>0){        has+=1;
      // }
      // if(co>0){
      //     has+=1;
      // }
      // this.has=has;
    },
    getBudgetTotal: function getBudgetTotal() {
      var total = parseFloat(this.s_cap_gad) + parseFloat(this.s_cap_non);
      total = total + parseFloat(this.s_mooe_gad) + parseFloat(this.s_mooe_non);
      total = total + parseFloat(this.s_ps_gad) + parseFloat(this.s_ps_non);
      return this.format_number_conv(total, 2, true);
    },
    showBudgetTable: function showBudgetTable() {
      var sb = false; // if (this.mooe_gad.length > 0 || this.mooe_non.length > 0 ||
      //     this.cap_gad.length > 0 || this.cap_non.length > 0 ||
      //     this.ps_gad.length > 0 || this.ps_non.length > 0
      // ) {
      //     sb = true;
      // }

      if (this.maintenanceOperating.length > 0 || this.capitalOutlay.length > 0 || this.personnelServices.length > 0) {
        sb = true;
      }

      return sb;
    },
    calculateTotals: function calculateTotals(revs_is_strat_based) {
      var ps_total = 0;
      var mooe_total = 0;
      var co_total = 0;
      var fe_total = 0;
      this.implementation.forEach(function (strategy) {
        if (revs_is_strat_based == 1) {
          // Sum from the main strategy level
          ps_total += parseFloat(strategy.ps_total) || 0;
          mooe_total += parseFloat(strategy.mooe_total) || 0;
          co_total += parseFloat(strategy.co_total) || 0;
          fe_total += parseFloat(strategy.fe_total) || 0;
        } else {
          // Sum from the activity child table
          if (Array.isArray(strategy.activity)) {
            strategy.activity.forEach(function (activity) {
              ps_total += parseFloat(activity.ps_total) || 0;
              mooe_total += parseFloat(activity.mooe_total) || 0;
              co_total += parseFloat(activity.co_total) || 0;
              fe_total += parseFloat(activity.fe_total) || 0;
            });
          }
        }
      });
      this.v_imp_ps = ps_total;
      this.v_imp_mooe = mooe_total;
      this.v_imp_co = co_total;
      this.v_imp_fe = fe_total;
      return {
        ps_total: ps_total,
        mooe_total: mooe_total,
        co_total: co_total,
        fe_total: fe_total
      };
    },
    can_view_comment: function can_view_comment() {
      var can_comment_here = false;

      if (this.auth.user.department_code == '04') {
        can_comment_here = true;
      }

      return can_comment_here;
    },
    has_comment: function has_comment(section, subtitle, data, column, table, obj, comments_obj) {
      var has_comm = false;
      console.log("comments object ************");
      console.log(comments_obj);
      console.trace(); // if(this.auth.user.department_code==='04'){
      //     has_comm=false
      // }else{

      var count = Array.isArray(comments_obj) ? comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column && comment.comment_status === "0";
      }).length : 0;

      if (count > 0) {
        has_comm = true;
      } // }


      return has_comm;
    },
    handleClick: function handleClick(section, subtitle, data, column, table, obj, comments_obj) {
      this.comment_section = section;
      this.comment_subtitle = subtitle;
      this.comment_data = data;
      this.comment_column = column;
      this.comment_table = table;
      this.comment_reference_object = obj; // this.comments = comments_obj;

      this.comments = comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column;
      });
      this.show_comment_modal = true;
    },
    closeCommentModal: function closeCommentModal() {
      this.show_comment_modal = false;
    },
    saveComment: function saveComment() {
      var _this = this;

      // Logic to save the comment
      // This is just a placeholder, implement your actual saving logic here
      var myurl = "/revision-plan-comments/store"; // await axios

      var table_row_id_l = 0; // console.log(this.comment_table)

      if (this.comment_table === 'revision_plans') {
        table_row_id_l = this.comment_reference_object.id;
      }

      if (this.comment_table === 'strategy_projects') {
        table_row_id_l = this.comment_reference_object.strategy_id;
      }

      if (this.comment_table === 'activity_projects') {
        table_row_id_l = this.comment_reference_object.activity_id;
      }

      if (this.comment_table === 'budget_requirements') {
        table_row_id_l = this.comment_reference_object.id; // alert(table_row_id_l)
        // console.log(this.comment_reference_object)
      }

      if (this.comment_table === 'team_plans') {
        table_row_id_l = this.comment_reference_object.id;
      }

      if (this.comment_table === 'monitoring_and_evaluations') {
        table_row_id_l = this.comment_reference_object.id;
      }

      if (this.comment_table === 'risk_manangements') {
        table_row_id_l = this.comment_reference_object.id;
      }

      if (this.comment_table === 'expected_revised_outputs') {
        table_row_id_l = this.comment_reference_object.id;
      }

      if (this.comment_table === 'expected_revised_outcomes') {
        table_row_id_l = this.comment_reference_object.id;
      } //alert(table_row_id_l)


      this.$inertia.post(myurl, {
        params: {
          table_row_id: table_row_id_l,
          table_name: this.comment_table,
          column_name: this.comment_column,
          comment_status: 0,
          comment: this.comment
        }
      });
      this.closeCommentModal();
      setTimeout(function () {
        _this.comment = "";
      }, 1000); // 1000 milliseconds = 1 second
    },
    submitAction: function submitAction(type, comment_id, index) {
      var _this2 = this;

      var actionText = {
        "delete": "delete this comment",
        reset: "reset the status of this comment to unresolved",
        resolve: "mark this comment as resolved"
      };

      if (!confirm("Are you sure you want to ".concat(actionText[type], "?"))) {
        return; // User cancelled
      }

      var myurl = "/revision-plan-comments/action/done";
      this.$inertia.post(myurl, {
        params: {
          type: type,
          id: comment_id
        }
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          if (type === 'delete') {
            _this2.comments.splice(index, 1);

            alert("Comment deleted successfully.");
          } else if (type === 'reset') {
            _this2.comments[index].comment_status = '0';
            alert("Comment status reset to unresolved.");
          } else if (type === 'resolve') {
            _this2.comments[index].comment_status = '1';
            alert("Comment resolved successfully.");
          }
        }
      });
    },
    getPairedOutputs: function getPairedOutputs(activityProject) {
      var output = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.expected_output) || [];
      var outcome = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.expected_outcome) || [];
      var max_output = Math.max(output.length);
      var max_outcome = Math.max(outcome.length);
      var q1 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q1) || 0;
      var q2 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q2) || 0;
      var q3 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q3) || 0;
      var q4 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q4) || 0;
      var quant = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4);
      var rr1 = Array.from({
        length: max_output
      }, function (_, i) {
        var _output$i, _output$i2, _output$i3, _output$i4, _output$i5, _output$i6, _output$i7, _output$i8;

        return {
          id: ((_output$i = output[i]) === null || _output$i === void 0 ? void 0 : _output$i.id) || '',
          target_indicator: ((_output$i2 = output[i]) === null || _output$i2 === void 0 ? void 0 : _output$i2.target_indicator) || '',
          outcome_description: '',
          output_description: ((_output$i3 = output[i]) === null || _output$i3 === void 0 ? void 0 : _output$i3.description) || '',
          table: 'expected_revised_outputs',
          quantity: parseFloat(((_output$i4 = output[i]) === null || _output$i4 === void 0 ? void 0 : _output$i4.physical_q1) || 0) + parseFloat(((_output$i5 = output[i]) === null || _output$i5 === void 0 ? void 0 : _output$i5.physical_q2) || 0) + parseFloat(((_output$i6 = output[i]) === null || _output$i6 === void 0 ? void 0 : _output$i6.physical_q3) || 0) + parseFloat(((_output$i7 = output[i]) === null || _output$i7 === void 0 ? void 0 : _output$i7.physical_q4) || 0),
          comments: ((_output$i8 = output[i]) === null || _output$i8 === void 0 ? void 0 : _output$i8.comments) || []
        };
      }); // { length: max },

      var rr2 = Array.from({
        length: max_outcome
      }, function (_, i) {
        var _outcome$i, _outcome$i2, _outcome$i3;

        return {
          id: ((_outcome$i = outcome[i]) === null || _outcome$i === void 0 ? void 0 : _outcome$i.id) || '',
          target_indicator: '',
          outcome_description: ((_outcome$i2 = outcome[i]) === null || _outcome$i2 === void 0 ? void 0 : _outcome$i2.description) || '',
          output_description: '',
          table: 'expected_revised_outcomes',
          quantity: 0,
          comments: ((_outcome$i3 = outcome[i]) === null || _outcome$i3 === void 0 ? void 0 : _outcome$i3.comments) || []
        };
      });
      return rr1.concat(rr2);
    },
    updateComment: function updateComment(id, comment, index) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var myurl;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const payload = {
                //         id: id,
                //         // strategy_id: this.form.localData[strategyIndex].id,
                //         reply: reply,
                //         type: "update",
                //     };
                // Clear existing timeout to prevent multiple calls
                // clearTimeout(this.timeouts[`activity_${strategyIndex}_${activityIndex}`]);
                myurl = "/revision-plan-comments/" + id;

                if (_this3.reply_concat.trim()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                try {
                  _this3.$inertia.patch(myurl, {
                    params: {
                      reply: _this3.reply_concat,
                      id: id
                    }
                  }, {
                    preserveScroll: true,
                    onSuccess: function onSuccess() {
                      // $uname . ' replied: ' . $reply . '<br>';
                      var comment_init = "";

                      if (_this3.comments[index].reply) {
                        comment_init = _this3.comments[index].reply;
                      }

                      _this3.comments[index].reply = comment_init + " <b>" + _this3.auth.user.FullName + "</b> replied: <i>" + _this3.reply_concat + "</i> <br><br>";
                      _this3.comments[index].show_comment_box = false; // Hide the comment box after replying

                      _this3.reply_concat = ""; // Clear the reply input after saving

                      _this3.is_replying = false; // Reset the replying state
                    }
                  }); // console.log(payload);


                  _this3.unsaved = false; // Reset unsaved flag after successful save
                } catch (error) {
                  console.error('Error updating comment:', error);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // async saveComment(payload) {
    //     // alert("naabiot");
    //     try {
    //         const response = await axios.post(`/activities-project/r/create`, payload);
    //         console.log(response.data);
    //         // this.refreshData();
    //     } catch (error) {
    //         console.error('Error creating activity:', error);
    //     }
    // },
    setUnsaved: function setUnsaved(status) {
      this.unsaved = status;
    },
    showCommentBox: function showCommentBox(index) {
      // Toggle the show_comment_box property for the comment at the given index
      if (this.is_replying == false || this.reply_index == index) {
        this.comments[index].show_comment_box = !this.comments[index].show_comment_box;
        this.reply_index = index; // Set the reply index to the current comment

        this.reply_concat = ""; // Clear the reply input when showing the comment box

        this.is_replying = !this.is_replying; // Set replying state to true
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      value: null
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "View PAPS", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row gap-10 masonry pos-r"
};
var _hoisted_3 = {
  key: 0,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_7 = {
  key: 1,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_11 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_12 = ["src"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" REPUBLIC OF THE PHILIPPINES "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PROVINCE OF DAVAO DE ORO ")], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_15 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_16 = {
  "class": "fw-bold"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  "class": "col-12"
};
var _hoisted_20 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_21 = {
  "class": "table-responsive"
};
var _hoisted_22 = {
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Title", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Project Location", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Implementation Schedule", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Start", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "End", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Intended Beneficiaries", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Male", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Female", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Total", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Baseline Disaggregated Data", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Male", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Female", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Data Source", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Cost of Program", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Amount (Php)", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Attributed GAD Budget (Php) ", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "HGDG Checklist", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_41 = {
  key: 0
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_44 = ["innerHTML"];

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_46 = {
  key: 1
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_49 = ["innerHTML"];

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_51 = {
  key: 2
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_54 = ["innerHTML"];

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_56 = {
  key: 3
};
var _hoisted_57 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "12%",
    "text-align": "center"
  }
}, "Strategies/Activities"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Performance Target Indicators"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Gender Issues to be Addressed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Timeline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Expected Output"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Personnel Services"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "MOOE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Financial Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Capital Outlay"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Budget"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Climate Change Topology Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Person Responsible")])], -1
/* HOISTED */
);

var _hoisted_59 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_60 = ["onClick"];
var _hoisted_61 = ["onClick"];
var _hoisted_62 = {
  key: 0
};
var _hoisted_63 = {
  key: 0
};
var _hoisted_64 = {
  key: 0
};
var _hoisted_65 = {
  key: 0
};
var _hoisted_66 = {
  key: 1
};
var _hoisted_67 = {
  key: 2
};
var _hoisted_68 = {
  key: 0
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_71 = {
  key: 0
};
var _hoisted_72 = {
  key: 0
};
var _hoisted_73 = {
  key: 0
};
var _hoisted_74 = {
  key: 0
};
var _hoisted_75 = {
  "class": "text-end"
};
var _hoisted_76 = {
  key: 0
};
var _hoisted_77 = {
  key: 0
};
var _hoisted_78 = {
  key: 0
};
var _hoisted_79 = {
  key: 1,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_80 = ["onClick"];
var _hoisted_81 = ["onClick"];
var _hoisted_82 = ["onClick"];
var _hoisted_83 = ["onClick"];
var _hoisted_84 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_85 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_86 = {
  key: 0,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed",
    "flex": "1 1 auto"
  }
};
var _hoisted_87 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "height": "100%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_88 = {
  key: 0
};
var _hoisted_89 = {
  key: 0
};
var _hoisted_90 = ["onClick"];
var _hoisted_91 = ["onClick"];

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_94 = ["rowspan"];
var _hoisted_95 = {
  key: 0
};
var _hoisted_96 = ["onClick"];
var _hoisted_97 = ["onClick"];
var _hoisted_98 = ["rowspan"];
var _hoisted_99 = {
  key: 0
};
var _hoisted_100 = {
  key: 0
};
var _hoisted_101 = ["onClick"];
var _hoisted_102 = ["onClick"];
var _hoisted_103 = {
  key: 1
};
var _hoisted_104 = {
  key: 2
};
var _hoisted_105 = ["onClick"];
var _hoisted_106 = ["onClick"];
var _hoisted_107 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_108 = {
  key: 0
};
var _hoisted_109 = ["onClick"];
var _hoisted_110 = ["onClick"];
var _hoisted_111 = ["onClick"];
var _hoisted_112 = ["onClick"];
var _hoisted_113 = {
  key: 1,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_115 = ["rowspan"];
var _hoisted_116 = {
  key: 0
};
var _hoisted_117 = ["onClick"];
var _hoisted_118 = ["onClick"];
var _hoisted_119 = ["rowspan"];
var _hoisted_120 = {
  key: 0
};
var _hoisted_121 = {
  key: 0
};
var _hoisted_122 = ["onClick"];
var _hoisted_123 = ["onClick"];
var _hoisted_124 = {
  key: 1
};
var _hoisted_125 = {
  key: 2
};
var _hoisted_126 = ["onClick"];
var _hoisted_127 = ["onClick"];

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_129 = {
  key: 0
};
var _hoisted_130 = ["onClick"];
var _hoisted_131 = ["onClick"];
var _hoisted_132 = {
  key: 0
};
var _hoisted_133 = ["onClick"];
var _hoisted_134 = ["onClick"];
var _hoisted_135 = {
  key: 0
};
var _hoisted_136 = ["onClick"];
var _hoisted_137 = ["onClick"];
var _hoisted_138 = {
  key: 0
};
var _hoisted_139 = ["onClick"];
var _hoisted_140 = ["onClick"];
var _hoisted_141 = {
  key: 0
};
var _hoisted_142 = {
  key: 0
};
var _hoisted_143 = ["onClick"];
var _hoisted_144 = ["onClick"];
var _hoisted_145 = {
  key: 0
};
var _hoisted_146 = ["onClick"];
var _hoisted_147 = ["onClick"];

var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5"
}, "TOTAL", -1
/* HOISTED */
);

var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_152 = {
  key: 0,
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "3"
}, "Particular"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD Amount (Php)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Non-GAD Amount (Php)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount (Php)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source")])], -1
/* HOISTED */
);

var _hoisted_154 = {
  key: 0
};

var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "MAINTENANCE, OPERATING, AND OTHER EXPENSES")], -1
/* HOISTED */
);

var _hoisted_156 = [_hoisted_155];

var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_158 = ["onClick"];
var _hoisted_159 = ["onClick"];
var _hoisted_160 = ["onClick"];
var _hoisted_161 = ["onClick"];
var _hoisted_162 = ["onClick"];
var _hoisted_163 = ["onClick"];
var _hoisted_164 = ["onClick"];
var _hoisted_165 = ["onClick"];
var _hoisted_166 = ["onClick"];
var _hoisted_167 = ["onClick"];
var _hoisted_168 = ["onClick"];
var _hoisted_169 = ["onClick"];
var _hoisted_170 = {
  key: 2
};

var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, " SUB-TOTAL (MOOE) ", -1
/* HOISTED */
);

var _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_174 = {
  key: 3
};

var _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PERSONNEL SERVICES")], -1
/* HOISTED */
);

var _hoisted_176 = [_hoisted_175];

var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_178 = ["onClick"];
var _hoisted_179 = ["onClick"];
var _hoisted_180 = ["onClick"];
var _hoisted_181 = ["onClick"];
var _hoisted_182 = ["onClick"];
var _hoisted_183 = ["onClick"];
var _hoisted_184 = ["onClick"];
var _hoisted_185 = ["onClick"];
var _hoisted_186 = ["onClick"];
var _hoisted_187 = ["onClick"];
var _hoisted_188 = ["onClick"];
var _hoisted_189 = ["onClick"];
var _hoisted_190 = {
  key: 5
};

var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, "SUB-TOTAL (PS)", -1
/* HOISTED */
);

var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_194 = {
  key: 6
};

var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "FINANCIAL EXPENSES")], -1
/* HOISTED */
);

var _hoisted_196 = [_hoisted_195];

var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_198 = ["onClick"];
var _hoisted_199 = ["onClick"];
var _hoisted_200 = ["onClick"];
var _hoisted_201 = ["onClick"];
var _hoisted_202 = ["onClick"];
var _hoisted_203 = ["onClick"];
var _hoisted_204 = ["onClick"];
var _hoisted_205 = ["onClick"];
var _hoisted_206 = ["onClick"];
var _hoisted_207 = ["onClick"];
var _hoisted_208 = ["onClick"];
var _hoisted_209 = ["onClick"];
var _hoisted_210 = {
  key: 8
};

var _hoisted_211 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, "SUB-TOTAL (Financial Expenses)", -1
/* HOISTED */
);

var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_214 = {
  key: 9
};

var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "CAPITAL OUTLAY")], -1
/* HOISTED */
);

var _hoisted_216 = [_hoisted_215];

var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_218 = ["onClick"];
var _hoisted_219 = ["onClick"];
var _hoisted_220 = ["onClick"];
var _hoisted_221 = ["onClick"];
var _hoisted_222 = ["onClick"];
var _hoisted_223 = ["onClick"];
var _hoisted_224 = ["onClick"];
var _hoisted_225 = ["onClick"];
var _hoisted_226 = ["onClick"];
var _hoisted_227 = ["onClick"];
var _hoisted_228 = ["onClick"];
var _hoisted_229 = ["onClick"];
var _hoisted_230 = {
  key: 11
};

var _hoisted_231 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_232 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, "SUB-TOTAL (Capital Outlay)", -1
/* HOISTED */
);

var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_234 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4"
}, "TOTAL", -1
/* HOISTED */
);

var _hoisted_235 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_237 = {
  key: 4
};
var _hoisted_238 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_239 = ["innerHTML"];
var _hoisted_240 = {
  key: 5
};
var _hoisted_241 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_242 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Employment Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Role</th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD-related trainings")])], -1
/* HOISTED */
);

var _hoisted_243 = ["onClick"];
var _hoisted_244 = ["onClick"];
var _hoisted_245 = ["onClick"];
var _hoisted_246 = ["onClick"];
var _hoisted_247 = {
  key: 0
};
var _hoisted_248 = {
  key: 1
};
var _hoisted_249 = ["onClick"];
var _hoisted_250 = ["onClick"];
var _hoisted_251 = ["onClick"];
var _hoisted_252 = ["onClick"];

var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_254 = {
  key: 6
};
var _hoisted_255 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_256 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_257 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_258 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_259 = {
  key: 7
};
var _hoisted_260 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_261 = ["innerHTML"];

var _hoisted_262 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_263 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_264 = {
  key: 8
};
var _hoisted_265 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_266 = ["innerHTML"];
var _hoisted_267 = {
  key: 9
};
var _hoisted_268 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_269 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant")])], -1
/* HOISTED */
);

var _hoisted_270 = ["onClick"];
var _hoisted_271 = ["onClick"];
var _hoisted_272 = ["onClick"];
var _hoisted_273 = ["onClick"];
var _hoisted_274 = ["onClick"];
var _hoisted_275 = ["onClick"];
var _hoisted_276 = ["onClick"];
var _hoisted_277 = ["onClick"];

var _hoisted_278 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_279 = {
  key: 10
};
var _hoisted_280 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_281 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_282 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_283 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_284 = {
  key: 11
};
var _hoisted_285 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_286 = ["innerHTML"];
var _hoisted_287 = {
  key: 12
};
var _hoisted_288 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_289 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Prospective Possible Risks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor")])], -1
/* HOISTED */
);

var _hoisted_290 = ["innerHTML"];
var _hoisted_291 = ["onClick"];
var _hoisted_292 = ["onClick"];
var _hoisted_293 = ["innerHTML"];
var _hoisted_294 = ["onClick"];
var _hoisted_295 = ["onClick"];
var _hoisted_296 = ["innerHTML"];
var _hoisted_297 = ["onClick"];
var _hoisted_298 = ["onClick"];

var _hoisted_299 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_300 = {
  key: 13
};
var _hoisted_301 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_302 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_303 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_304 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_305 = {
  "class": "signatory-grid"
};

var _hoisted_306 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_307 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_308 = {
  "class": "text-decoration-underline"
};

var _hoisted_309 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_310 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_311 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_312 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_313 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_314 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, null, -1
/* HOISTED */
);

var _hoisted_315 = {
  key: 0
};

var _hoisted_316 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Section: ", -1
/* HOISTED */
);

var _hoisted_317 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Subtitle:", -1
/* HOISTED */
);

var _hoisted_318 = ["innerHTML"];

var _hoisted_319 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Data:", -1
/* HOISTED */
);

var _hoisted_320 = ["innerHTML"];

var _hoisted_321 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Column:", -1
/* HOISTED */
);

var _hoisted_322 = {
  key: 0
};
var _hoisted_323 = {
  key: 1
};
var _hoisted_324 = {
  key: 2
};

var _hoisted_325 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Table:", -1
/* HOISTED */
);

var _hoisted_326 = {
  "class": "col-9"
};
var _hoisted_327 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_328 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Comment", -1
/* HOISTED */
);

var _hoisted_329 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Status  ", -1
/* HOISTED */
);

var _hoisted_330 = {
  key: 0,
  "class": "bg-secondary text-white"
};

var _hoisted_331 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Date", -1
/* HOISTED */
);

var _hoisted_332 = {
  key: 0
};
var _hoisted_333 = {
  "class": "bg-white p-3 rounded border"
};

var _hoisted_334 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_335 = ["innerHTML"];
var _hoisted_336 = ["onClick"];
var _hoisted_337 = ["disabled", "onClick"];
var _hoisted_338 = ["onClick"];
var _hoisted_339 = {
  key: 0
};
var _hoisted_340 = ["onClick"];

var _hoisted_341 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-check-circle",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
})], -1
/* HOISTED */
);

var _hoisted_342 = [_hoisted_341];
var _hoisted_343 = ["onClick"];

var _hoisted_344 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-arrow-counterclockwise",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"
})], -1
/* HOISTED */
);

var _hoisted_345 = [_hoisted_344];
var _hoisted_346 = ["onClick"];

var _hoisted_347 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-trash-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
})], -1
/* HOISTED */
);

var _hoisted_348 = [_hoisted_347];

var _hoisted_349 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_350 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_CommentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CommentModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("class=\"peers fxw-nw jc-sb ai-c\""), $props.src !== 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/general/administration/services/".concat($props.paps.FFUNCCOD, "/plan") : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/".concat($props.paps.idpaps) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/mforevision/".concat($props.paps.idmfo) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.src === 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getImagePath('logo.png'),
    alt: "",
    "class": "img-fluid",
    style: {
      "width": "100px",
      "height": "100px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_12)]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.office), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_16, [$props.paps.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, "PROJECT PROFILE")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, "PROJECT DESIGN"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MAIN TABLE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("I.    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Title")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_title) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_location) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_start)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_end)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_32, _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_male, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.data_source) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th colspan=\"1\">Total</th>\n                                <td colspan=\"1\" :class=\"{\n                                    'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\n                                }\">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                    <button v-if=\"has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                </td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_36, _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'GAD Attributed Amount', $props.imp_amount, 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("GAD " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.checklist.box_number) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.checklist.sector) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/HGDGScore/".concat($props.paps.id),
    style: {
      "color": "white"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HGDG Score ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.hgdg_score) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RATIONALE "), $props.paps.rationale ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("II. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Rationale")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.rationale,
    style: {
      "white-space": "pre-line"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_44)]), _hoisted_45])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OBJECTIVES "), $props.paps.objective ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("III. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Objectives")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.objective,
    style: {
      "white-space": "pre-line"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_49)]), _hoisted_50])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Target Beneficiaries "), $props.paps.beneficiaries ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("IV. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Target Beneficiaries")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[32] || (_cache[32] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[33] || (_cache[33] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.beneficiaries,
    style: {
      "white-space": "pre-line"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_54)]), _hoisted_55])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION PLAN"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"implementation\">\n\n                        <table class=\"table table-hover table-bordered border-dark\">\n                            <thead>\n                                <tr class=\"bg-secondary text-white\">\n                                    <th>Strategies/Activities</th>\n                                    <th>Performance Target Indicators</th>\n                                    <th>Gender Issues to be Addressed</th>\n                                    <th>Timeline</th>\n                                    <th>Expected Output</th>\n                                    <th>Budget</th>\n                                    <th>Climate Change Topology Code</th>\n                                    <th>Person Responsible</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <template v-for=\"(dat, index) in implementation\" :key=\"dat.id\">\n                                    <tr style=\"background-color:lightgrey; font-weight: bold;\">\n\n                                        <td><b>{{ dat.strategy }}</b></td>\n                                        <td>\n                                            <div v-for=\"target in dat.targets.data\">\n                                                {{ target.indicator_description }}\n                                            </div>\n                                        </td>\n                                        <td>{{ dat.issue }}</td>\n                                        <td>\n\n                                        </td>\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.cc_topology }}</td>\n                                        <td>{{ dat.person_responsible }}</td>\n\n                                    </tr>\n                                    <template v-if=\"dat.activity_implementation\">\n                                        <tr v-for=\"(act, subIndex) in dat.activity_implementation\" :key=\"act.id\">\n\n                                            <td>{{ act.activity }}</td>\n                                            <td>\n\n                                            </td>\n                                            <td>{{ act.issue }}</td>\n                                            <td>\n                                                <div v-if=\"act.date_from\">\n                                                    {{ act.date_from }} - {{ act.date_to }}\n                                                </div>\n                                            </td>\n                                            <td>\n\n                                            </td>\n                                            <td>\n\n                                            </td>\n                                            <td>{{ act.cc_topology }}</td>\n                                            <td>{{ act.person_responsible }}</td>\n\n                                        </tr>\n                                    </template>\n\n                                </template>\n                                <tr>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td colspan=\"2\"><b>TOTAL BUDGET/COST</b> (Php)</td>\n                                    <td>{{ format_number_conv(imp_amount, 2, true) }}</td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div> "), $props.implementation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/strategies-and-activities/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Plan ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation, function (dat, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_60)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_61)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_64, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_66, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_68, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_output, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_69]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_outcome, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_70]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_74)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_75, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_80)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_81)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.activity && $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 2
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.activity, function (act, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: subIndex,
        style: {
          "height": "100%"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DESCRIPTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments)
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description), 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_82)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_83)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET INDICATOR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Implementation Plan','activity target indicator',act.target_indicator,'activity target indicator','activity_projects', act, act.comments)\n                                            }\">\n                                                    <div v-if=\"act.activityProject[0]\" v-for=\"(eo,index) in act.activityProject[0].expected_output\" :key=\"index\">\n                                                        <div>{{ eo.target_indicator }}\n                                                            <span v-if=\"paps.is_strategy_based==0\">{{ act.target_indicator }}\n                                                                <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                                    @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                </button>\n                                                                <button v-if=\"has_comment('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\" class=\"superscript-btn\"\n                                                                    @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                </button>\n                                                                <hr>\n                                                            </span>\n                                                        </div>\n                                                        <hr>\n                                                    </div>\n                                                    <tr v-if=\"act.activityProject[0]\" v-for=\"eo in act.activityProject[0].expected_outcome\">\n                                                        <div>{{ eo.description }} </div>\n                                                        <hr>\n                                                    </tr>\n                                            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD ISSUE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)\n                                            }\">\n                                                <span v-if=\"paps.is_strategy_based==0\">{{ act.gad_issue }}\n                                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                        @click=\"handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)\">*\n                                                    </button>\n                                                    <button v-if=\"has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)\" class=\"superscript-btn\"\n                                                        @click=\"handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)\">*\n                                                    </button>\n                                                </span>\n                                            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATE FROM/DATE TO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments) ||\n                                                has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)\n                                            }\">\n                                                <span v-if=\"paps.is_strategy_based==0\">\n                                                    <span v-if=\"act.date_from\">{{ formatMonthYear(act.date_from) }}\n                                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                            @click=\"handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)\">*\n                                                        </button>\n                                                        <button v-if=\"has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)\" class=\"superscript-btn\"\n                                                            @click=\"handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)\">*\n                                                        </button>\n                                                    </span>\n                                                    <span v-if=\"act.date_from && act.date_to\">&nbsp;to&nbsp;</span>\n                                                    <span v-if=\"act.date_to\">{{ formatMonthYear(act.date_to) }}\n                                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                            @click=\"handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)\">*\n                                                        </button>\n                                                        <button v-if=\"has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)\" class=\"superscript-btn\"\n                                                            @click=\"handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)\">*\n                                                        </button>\n                                                    </span>\n                                                </span>\n                                            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" EXPECTED OUTPUT/OUTCOME "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                                <span v-if=\"paps.is_strategy_based==0\">\n                                                    <div v-if=\"act.activityProject[0]\" v-for=\"(eo,index) in act.activityProject[0].expected_output\" :key=\"index\">\n\n                                                        <div>{{ act.activityProject[0].expected_output[index]?.description }} </div>\n                                                        <hr>\n\n                                                    </div>\n                                                    <tr v-if=\"act.activityProject[0]\" v-for=\"eo in act.activityProject[0].expected_outcome\">\n                                                        <div>{{ eo }} **</div>\n\n                                                        <hr>\n                                                    </tr>\n                                                </span>\n\n                                            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MERGED "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                                <span v-if=\"getPairedOutputs(act.activityProject[0]) && getPairedOutputs(act.activityProject[0]).length\">\n                                                    Dsadasdasdasdasdads\n                                                </span>\n                                                <span v-else>Empty siya</span>\n                                             </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;\" "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_86, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: i,
          style: {
            "height": "100%"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_87, [$props.paps.is_strategy_based == 0 && pair.target_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.target_indicator) + " ", 1
        /* TEXT */
        ), pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_89, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_91)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_92, _hoisted_93]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
            'text-danger': $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments)
          }]),
          style: {
            "width": "25%",
            "border": "1px solid #000",
            "padding": "4px"
          },
          rowspan: $options.getPairedOutputs(act.activityProject[0]).length
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_96)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_97)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_94)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 1,
          style: {
            "width": "25%",
            "border": "1px solid #000",
            "padding": "4px"
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
            'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
          }]),
          rowspan: $options.getPairedOutputs(act.activityProject[0]).length
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_99, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_101)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_102)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_103, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_105)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_106)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments)
          })
        }, [pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.output_description) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_109)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_110)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
        /* CLASS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) || $options.has_comment('Implementation Plan', 'outcome_description', pair.output_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments)
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.outcome_description) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_111)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_112)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
        /* CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments)
        }]),
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_117)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_118)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_115), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_120, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_122)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_123)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_124, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_126)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_127)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_119), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _hoisted_128])])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_130)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_131)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_133)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_134)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_136)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_137)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_139)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_140)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_141, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total) + parseFloat(act.co_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_142, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_143)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_144)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        })
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.responsible), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_146)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_147)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      )]);
    }), 128
    /* KEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_ps, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[34] || (_cache[34] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[35] || (_cache[35] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_mooe, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_fe, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[38] || (_cache[38] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[39] || (_cache[39] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_co, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[40] || (_cache[40] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[41] || (_cache[41] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[43] || (_cache[43] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_149, _hoisted_150])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ implementation }} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_151, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BUDGETARY REQUIREMENTS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"b_mooe.length>0 || b_capital.length>0 || b_ps.length>0\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VI. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/budget/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Estimated Cost/Budgetary Requirements ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ capitalOutlay }}\n                        showBudgetTable: {{ showBudgetTable() }} "), $options.showBudgetTable() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_152, [_hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE **************************************************************** "), parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_154, _hoisted_156)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.maintenanceOperating, function (mooe) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE -PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "2",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.particulars, 'particulars', 'budget_requirements', mooe, mooe.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(mooe.particulars) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.particulars, 'particulars', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_158)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.particulars, 'particulars', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.particulars, 'particulars', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_159)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE -ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.account_code, 'account_code', 'budget_requirements', mooe, mooe.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(mooe.account_code) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.account_code, 'account_code', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_160)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.account_code, 'account_code', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.account_code, 'account_code', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_161)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE GAD Attirbuted "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.GAD_amount, 'GAD_amount', 'budget_requirements', mooe, mooe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(mooe.GAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.GAD_amount, 'GAD_amount', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_162)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.GAD_amount, 'GAD_amount', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.GAD_amount, 'GAD_amount', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_163)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE NON-GAD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', mooe, mooe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(mooe.NONGAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_164)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_165)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE Total "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.Total, 'Total', 'budget_requirements', mooe, mooe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(mooe.Total, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.Total, 'Total', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_166)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.Total, 'Total', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.Total, 'Total', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_167)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE Source "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'MOOE', mooe.Source, 'Source', 'budget_requirements', mooe, mooe.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(mooe.Source) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.Source, 'Source', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_168)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'MOOE', mooe.Source, 'Source', 'budget_requirements', mooe, mooe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'MOOE', mooe.Source, 'Source', 'budget_requirements', mooe, mooe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_169)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_170, [_hoisted_171, _hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_gad, 2, true), _ctx.format_number_conv($props.s_mooe_gad, 2, true), 'budgetary_mooe_gad', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_mooe_gad, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[44] || (_cache[44] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_gad, 2, true), _ctx.format_number_conv($props.s_mooe_gad, 2, true), 'budgetary_mooe_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_gad, 2, true), _ctx.format_number_conv($props.s_mooe_gad, 2, true), 'budgetary_mooe_gad', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[45] || (_cache[45] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_gad, 2, true), _ctx.format_number_conv($props.s_mooe_gad, 2, true), 'budgetary_mooe_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE NON-GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_non, 2, true), _ctx.format_number_conv($props.s_mooe_non, 2, true), 'budgetary_mooe_non', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_mooe_non, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[46] || (_cache[46] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_non, 2, true), _ctx.format_number_conv($props.s_mooe_non, 2, true), 'budgetary_mooe_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_non, 2, true), _ctx.format_number_conv($props.s_mooe_non, 2, true), 'budgetary_mooe_non', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_mooe_non, 2, true), _ctx.format_number_conv($props.s_mooe_non, 2, true), 'budgetary_mooe_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL ****************************************************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), 'budgetary_mooe_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), 'budgetary_mooe_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), 'budgetary_mooe_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[49] || (_cache[49] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non), 2, true), 'budgetary_mooe_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_173])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES ****************************************************** "), parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_174, _hoisted_176)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 4
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.personnelServices, function (ps) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Particulars "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "2",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.particulars, 'particulars', 'budget_requirements', ps, ps.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ps.particulars) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.particulars, 'particulars', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_178)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.particulars, 'particulars', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.particulars, 'particulars', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_179)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Account Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.account_code, 'account_code', 'budget_requirements', ps, ps.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ps.account_code) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.account_code, 'account_code', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_180)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.account_code, 'account_code', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.account_code, 'account_code', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_181)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS GAD Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.GAD_amount, 'GAD_amount', 'budget_requirements', ps, ps.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(ps.GAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.GAD_amount, 'GAD_amount', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_182)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.GAD_amount, 'GAD_amount', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.GAD_amount, 'GAD_amount', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_183)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  PS NONGAD Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', ps, ps.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(ps.NONGAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_184)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_185)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Total "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.Total, 'Total', 'budget_requirements', ps, ps.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(ps.Total, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.Total, 'Total', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_186)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.Total, 'Total', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.Total, 'Total', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_187)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Source "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.Source, 'Source', 'budget_requirements', ps, ps.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ps.Source) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.Source, 'Source', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_188)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Personnel Services', ps.Source, 'Source', 'budget_requirements', ps, ps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Personnel Services', ps.Source, 'Source', 'budget_requirements', ps, ps.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_189)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_190, [_hoisted_191, _hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_gad, 2, true), _ctx.format_number_conv($props.s_ps_gad, 2, true), 'budgetary_ps_gad', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_ps_gad, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[50] || (_cache[50] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_gad, 2, true), _ctx.format_number_conv($props.s_ps_gad, 2, true), 'budgetary_ps_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_gad, 2, true), _ctx.format_number_conv($props.s_ps_gad, 2, true), 'budgetary_ps_gad', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[51] || (_cache[51] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_gad, 2, true), _ctx.format_number_conv($props.s_ps_gad, 2, true), 'budgetary_ps_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS NON-GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_non, 2, true), _ctx.format_number_conv($props.s_ps_non, 2, true), 'budgetary_ps_non', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_ps_non, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[52] || (_cache[52] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_non, 2, true), _ctx.format_number_conv($props.s_ps_non, 2, true), 'budgetary_ps_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_non, 2, true), _ctx.format_number_conv($props.s_ps_non, 2, true), 'budgetary_ps_non', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[53] || (_cache[53] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_ps_non, 2, true), _ctx.format_number_conv($props.s_ps_non, 2, true), 'budgetary_ps_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL ****************************************************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), 'budgetary_ps_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), 'budgetary_ps_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), 'budgetary_ps_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), _ctx.format_number_conv(parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non), 2, true), 'budgetary_ps_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_193])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES ****************************************************** "), parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_194, _hoisted_196)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 7
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.financialExpenses, function (fe) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses Particulars "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "2",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.particulars, 'particulars', 'budget_requirements', fe, fe.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fe.particulars) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.particulars, 'particulars', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_198)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.particulars, 'particulars', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.particulars, 'particulars', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_199)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses Account Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.account_code, 'account_code', 'budget_requirements', fe, fe.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fe.account_code) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.account_code, 'account_code', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_200)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.account_code, 'account_code', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.account_code, 'account_code', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_201)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses GAD Attributed "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.GAD_amount, 'GAD_amount', 'budget_requirements', fe, fe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(fe.GAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.GAD_amount, 'GAD_amount', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_202)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.GAD_amount, 'GAD_amount', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.GAD_amount, 'GAD_amount', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_203)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses NON-GAD Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', fe, fe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(fe.NONGAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_204)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_205)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses Total "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.Total, 'Total', 'budget_requirements', fe, fe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(fe.Total, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.Total, 'Total', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_206)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.Total, 'Total', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.Total, 'Total', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_207)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Financial Expenses Source "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.Source, 'Source', 'budget_requirements', fe, fe.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fe.Source) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.Source, 'Source', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_208)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Financial Expenses', fe.Source, 'Source', 'budget_requirements', fe, fe.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Financial Expenses', fe.Source, 'Source', 'budget_requirements', fe, fe.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_209)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_210, [_hoisted_211, _hoisted_212, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_gad, 2, true), _ctx.format_number_conv($props.s_fe_gad, 2, true), 'budgetary_fe_gad', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_fe_gad, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_gad, 2, true), _ctx.format_number_conv($props.s_fe_gad, 2, true), 'budgetary_fe_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_gad, 2, true), _ctx.format_number_conv($props.s_fe_gad, 2, true), 'budgetary_fe_gad', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_gad, 2, true), _ctx.format_number_conv($props.s_fe_gad, 2, true), 'budgetary_fe_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE NON-GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_non, 2, true), _ctx.format_number_conv($props.s_fe_non, 2, true), 'budgetary_fe_non', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_fe_non, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[58] || (_cache[58] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_non, 2, true), _ctx.format_number_conv($props.s_fe_non, 2, true), 'budgetary_fe_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_non, 2, true), _ctx.format_number_conv($props.s_fe_non, 2, true), 'budgetary_fe_non', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[59] || (_cache[59] = function ($event) {
      return $options.handleClick('Budgetary Requirements', _ctx.format_number_conv($props.s_fe_non, 2, true), _ctx.format_number_conv($props.s_fe_non, 2, true), 'budgetary_fe_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'TOTAL FINANCIAL EXPENSES', _ctx.format_number_conv(parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true), 'budgetary_fe_totl', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'TOTAL FINANCIAL EXPENSES', _ctx.format_number_conv(parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true), 'budgetary_fe_totl', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'TOTAL FINANCIAL EXPENSES', _ctx.format_number_conv(parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true), 'budgetary_fe_totl', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'TOTAL FINANCIAL EXPENSES', _ctx.format_number_conv(parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true), 'budgetary_fe_totl', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_213])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY*********************************************************** "), parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_214, _hoisted_216)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 10
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.capitalOutlay, function (cap) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay Particulars "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "2",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.particulars, 'particulars', 'budget_requirements', cap, cap.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cap.particulars) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.particulars, 'particulars', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_218)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.particulars, 'particulars', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.particulars, 'particulars', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_219)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay Account Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.account_code, 'account_code', 'budget_requirements', cap, cap.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cap.account_code) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.account_code, 'account_code', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_220)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.account_code, 'account_code', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.account_code, 'account_code', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_221)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay GAD Attributed "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.GAD_amount, 'GAD_amount', 'budget_requirements', cap, cap.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(cap.GAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.GAD_amount, 'GAD_amount', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_222)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.GAD_amount, 'GAD_amount', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.GAD_amount, 'GAD_amount', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_223)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay NON-GAD Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', cap, cap.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(cap.NONGAD_amount, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_224)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.NONGAD_amount, 'NONGAD_amount', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_225)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay Total "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.Total, 'Total', 'budget_requirements', cap, cap.comments)
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(cap.Total, 2, true)) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.Total, 'Total', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_226)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.Total, 'Total', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.Total, 'Total', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_227)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Capital Outlay Source "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.Source, 'Source', 'budget_requirements', cap, cap.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cap.Source) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.Source, 'Source', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_228)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay', cap.Source, 'Source', 'budget_requirements', cap, cap.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Budgetary Requirements', 'Capital Outlay', cap.Source, 'Source', 'budget_requirements', cap, cap.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_229)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_230, [_hoisted_231, _hoisted_232, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay GAD -Total', _ctx.format_number_conv($props.s_cap_gad, 2, true), 'budgetary_cap_gad', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_cap_gad, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[62] || (_cache[62] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay GAD -Total', _ctx.format_number_conv($props.s_cap_gad, 2, true), 'budgetary_cap_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay GAD -Total', _ctx.format_number_conv($props.s_cap_gad, 2, true), 'budgetary_cap_gad', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[63] || (_cache[63] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay GAD -Total', _ctx.format_number_conv($props.s_cap_gad, 2, true), 'budgetary_cap_gad', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY NON-GAD ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay Non-GAD -Total', _ctx.format_number_conv($props.s_cap_non, 2, true), 'budgetary_cap_non', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.s_cap_non, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[64] || (_cache[64] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay Non-GAD -Total', _ctx.format_number_conv($props.s_cap_non, 2, true), 'budgetary_cap_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay Non-GAD -Total', _ctx.format_number_conv($props.s_cap_non, 2, true), 'budgetary_cap_non', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[65] || (_cache[65] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay Non-GAD -Total', _ctx.format_number_conv($props.s_cap_non, 2, true), 'budgetary_cap_non', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY TOTAL ******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'Capital Outlay -Total', _ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non), 2, true), 'budgetary_cap_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[66] || (_cache[66] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay -Total', _ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non), 2, true), 'budgetary_cap_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Capital Outlay -Total', _ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non), 2, true), 'budgetary_cap_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[67] || (_cache[67] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Capital Outlay -Total', _ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non), 2, true), 'budgetary_cap_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_233])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY*********************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\n                                <td colspan=\"8\"><b>CAPITAL OUTLAY</b></td>\n                                </tr>\n                                <tr v-for=\"cap in capitalOutlay\">\n                                    <td></td>\n                                    <td colspan=\"2\">{{ cap.particulars }}</td>\n                                    <td>{{ cap.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(cap.GAD_amount,2,true) }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(cap.NONGAD_amount,2,true) }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(cap.Total,2,true) }}</td>\n                                    <td>{{ cap.Source }}</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td colspan=\"3\">SUB-TOTAL (Capital Outlay)</td>\n                                    <td class=\"text-end\">{{ format_number_conv(s_cap_gad,2,true) }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(s_cap_non,2,true) }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true) }}</td>\n                                    <td></td>\n                                </tr> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_234, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD TOTAL *********************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.tot_gad, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[68] || (_cache[68] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[69] || (_cache[69] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NON-GAD TOTAL *********************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'Non-GAD Grand Total', _ctx.format_number_conv($data.tot_non, 2, true), 'non_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.tot_non, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[70] || (_cache[70] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Non-GAD Grand Total', _ctx.format_number_conv($data.tot_non, 2, true), 'non_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Non-GAD Grand Total', _ctx.format_number_conv($data.tot_non, 2, true), 'non_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[71] || (_cache[71] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Non-GAD Grand Total', _ctx.format_number_conv($data.tot_non, 2, true), 'non_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GRAND TOTAL *********************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Budgetary Requirements', 'Overall Grand Total', _ctx.format_number_conv($data.grand_total, 2, true), 'grand_total', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($props.s_cap_gad) + parseFloat($props.s_cap_non) + parseFloat($props.s_ps_gad) + parseFloat($props.s_ps_non) + parseFloat($props.s_mooe_gad) + parseFloat($props.s_mooe_non) + parseFloat($props.s_fe_gad) + parseFloat($props.s_fe_non), 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[72] || (_cache[72] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Overall Grand Total', _ctx.format_number_conv($data.grand_total, 2, true), 'grand_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Overall Grand Total', _ctx.format_number_conv($data.grand_total, 2, true), 'grand_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[73] || (_cache[73] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'Overall Grand Total', _ctx.format_number_conv($data.grand_total, 2, true), 'grand_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_235])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table v-if=\"showBudgetTable()\" class=\"table table-hover table-bordered border-dark\">\n                            <thead>\n                                <tr class=\"bg-secondary text-white\">\n                                    <th colspan=\"3\">Particular</th>\n                                    <th>Account Code</th>\n                                    <th>Amount (Php)</th>\n                                    <th>Source</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                    <th colspan=\"3\">Maintenance, Operating, and Other Expenses</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\" v-for=\"dat in mooe_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_mooe_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\" v-for=\"dat in mooe_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_mooe_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (MOOE) </th>\n                                    <th class=\"text-end\">{{ getSum(s_mooe_gad, s_mooe_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                    <th colspan=\"3\">Capital Outlay</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\" v-for=\"dat in cap_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_cap_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\" v-for=\"dat in cap_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_cap_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (Capital Outlay) </th>\n                                    <th class=\"text-end\">{{ getSum(s_cap_gad, s_cap_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                    <th colspan=\"3\">Personnel Services</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\" v-for=\"dat in ps_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_ps_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\" v-for=\"dat in ps_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_ps_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (Personnel Services) </th>\n                                    <th class=\"text-end\">{{ getSum(s_ps_gad, s_ps_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <th colspan=\"4\">GRAND TOTAL</th>\n                                    <th class=\"text-end\">{{ getBudgetTotal() }}</th>\n                                    <th></th>\n                                </tr>\n                            </tbody>\n                        </table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-else>\n                            <span style=\"color:red; font-weight: bold;\">\n                                This Project has no budgetary requirements! <br>\n                                Click\n                                <Link :href=\"`/budget/${paps.id}`\">here</Link> to edit budgetary requirements.\n                            </span>\n                        </div> "), _hoisted_236]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTING TEAM"), $props.team_members.length > 0 || $props.paps.implementing_team !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_237, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/team/".concat($props.paps.id, "/revision/plan/team") : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementing Team")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[74] || (_cache[74] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[75] || (_cache[75] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.implementing_team }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.implementing_team
  }, null, 8
  /* PROPS */
  , _hoisted_239), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td colspan=\"6\" :class=\"{\n                            'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)\n                        }\">\n                            {{ paps.project_title }}\n                            <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                            </button>\n                            <button v-if=\"has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                            </button>\n                        </td> ")]), $props.team_members.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_241, [_hoisted_242, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.team_members, function (team_member, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Members', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.name) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_243)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_244)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gender "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.gender), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Position "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.position) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_245)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_246)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Employment Status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments)
      })
    }, [team_member.status === 'Regular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_247, "Permanent")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_248, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.status), 1
    /* TEXT */
    )), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_249)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_250)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Competency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\n                                            }\">{{ team_member.competency }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                    </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\n                                            }\">{{ team_member.role }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                    </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.with_gad_training === '1' ? team_member.specify_GAD_training : 'No') + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_251)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_252)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), _hoisted_253])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This Project has no recorded members of the implementation team! "), _hoisted_256, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/team/".concat($props.paps.id, "/revision/plan/team")
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit implementation team. ")]), _hoisted_257])), _hoisted_258, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PARTNERSHIP & SUSTAINABILITY"), $props.paps.partnership !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_259, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VIII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Partnership and Sustainability")];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_260, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.partnership
  }, null, 8
  /* PROPS */
  , _hoisted_261)]), _hoisted_262, _hoisted_263, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MONITORING & EVALUATION"), $props.monitors.length > 0 || $props.paps.monitoring !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_264, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" IX. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/EvaluationMechanismTool/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_265, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.monitoring
  }, null, 8
  /* PROPS */
  , _hoisted_266)]), $props.monitors.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_267, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_268, [_hoisted_269, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.monitors, function (monitor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Evaluation Mechanism Tool "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.evaluation_mechanism_tool) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_270)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_271)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E OPR and their roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.opr) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_272)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_273)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Target Beneficiaries "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.target_beneficiaries) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_274)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_275)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E GAD Expert/Consultant "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.gad) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_276)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_277)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_278])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_279, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_280, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for monitoring and evaluation! "), _hoisted_281, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/EvaluationMechanismTool/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit monitoring and evaluation. ")]), _hoisted_282, _hoisted_283])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RISK MANAGEMENT"), $props.risks.length > 0 || $props.paps.risk_management !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_284, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/RiskManagement/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_285, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.risk_management
  }, null, 8
  /* PROPS */
  , _hoisted_286)]), $props.risks.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_287, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_288, [_hoisted_289, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.risks, function (risk) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Possible Risks "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: risk.possible_risk
    }, null, 8
    /* PROPS */
    , _hoisted_290), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_291)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_292)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Person Affected "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: risk.person_affected
    }, null, 8
    /* PROPS */
    , _hoisted_293), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_294)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_295)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: risk.management
    }, null, 8
    /* PROPS */
    , _hoisted_296), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_297)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_298)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_299])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_300, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_301, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for risk management! "), _hoisted_302, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/RiskManagement/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit risk management. ")]), _hoisted_303, _hoisted_304])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SIGNATORIES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_305, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.signatories, function (signatory, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "signatory-card"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.acted) + " by: ", 1
    /* TEXT */
    ), _hoisted_306, _hoisted_307, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_308, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.name), 1
    /* TEXT */
    )]), _hoisted_309, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.position), 1
    /* TEXT */
    ), _hoisted_310, _hoisted_311, _hoisted_312, _hoisted_313]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"paps.type === 'p'\">\n                        <table class=\"table table-borderless no-border-table\">\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <span v-if=\"sig_prep\">\n                                            Prepared by:<br><br>\n                                            <span v-if=\"sig_prep\" class=\"text-decoration-underline\"><b>{{ sig_prep.name\n                                            }}</b></span>\n                                            <br>{{ sig_prep.position }}\n                                        </span>\n                                    </td>\n                                    <td>\n                                        <span v-if=\"sig_rev\">\n                                            Reviewed by:<br><br>\n                                            <span v-if=\"sig_rev\" class=\"text-decoration-underline\"><b>{{ sig_rev.name\n                                            }}</b></span>\n                                            <br>{{ sig_rev.position }}\n                                        </span>\n                                    </td>\n                                </tr>\n\n\n                                <tr>\n                                    <td>\n                                        <span v-if=\"Object.keys(sig_app).length > 0\">\n                                            <br><br>\n                                            Approved by:<br><br>\n                                            <span v-if=\"sig_app\" class=\"text-decoration-underline\"><b>{{ sig_app[0].name\n                                            }}</b>\n                                            </span>\n                                            <br>{{ sig_app[0].position }}\n                                        </span>\n                                    </td>\n                                    <td>\n                                        <span v-if=\"Object.keys(sig_app).length > 1\">\n                                            <br><br>\n                                            <span v-if=\"Object.keys(sig_app).length > 1\">\n                                                Approved by:<br><br>\n                                                <span v-if=\"sig_app\" class=\"text-decoration-underline\"><b>{{ sig_app[1].name\n                                                }}</b></span>\n                                                <br>{{ sig_app[1].position }}\n                                            </span>\n                                        </span>\n                                    </td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                    </div> ")])])]), $data.show_comment_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CommentModal, {
    key: 2,
    onCloseModalEvent: $options.closeCommentModal,
    title: "COMMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_314, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_315, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        rows: "5",
        "onUpdate:modelValue": _cache[76] || (_cache[76] = function ($event) {
          return $data.comment = $event;
        }),
        placeholder: "Write your comment here..."
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mt-2 text-white",
        onClick: _cache[77] || (_cache[77] = function ($event) {
          return $options.saveComment();
        })
      }, " Submit Comment ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_316, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_section), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_317, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_subtitle
      }, null, 8
      /* PROPS */
      , _hoisted_318)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_319, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_data
      }, null, 8
      /* PROPS */
      , _hoisted_320)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_321, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column) + " ", 1
      /* TEXT */
      ), $data.comment_column == 'Person Affected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_322, "Preventive Measures")) : $data.comment_column == 'Management' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_323, "Mechanisms to monitor")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_324, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.comment_colun), 1
      /* TEXT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_325, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_table), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>Reference Object: {{ comment_reference_object.id }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_326, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_327, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_328, _hoisted_329, $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_330, "Actions  ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\">Comment by&nbsp;&nbsp;</th> "), _hoisted_331])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments, function (comment, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [comment.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_332, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.FullName) + " commented:  ", 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_333, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1
        /* TEXT */
        )]), _hoisted_334, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          innerHTML: comment.reply
        }, null, 8
        /* PROPS */
        , _hoisted_335), comment.show_comment_box == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "btn btn-link p-0",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "reply", 8
        /* PROPS */
        , _hoisted_336)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
          key: 2,
          "class": "form-control",
          type: "text",
          "onUpdate:modelValue": _cache[78] || (_cache[78] = function ($event) {
            return $data.reply_concat = $event;
          })
        }, "\n                                    ", 512
        /* NEED_PATCH */
        )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.reply_concat]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 3,
          disabled: !$data.reply_concat || $data.reply_concat.trim() === '',
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.updateComment(comment.id, comment, index);
          }
        }, "Send", 8
        /* PROPS */
        , _hoisted_337)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 4,
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "Cancel", 8
        /* PROPS */
        , _hoisted_338)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
            color: comment.comment_status === '0' ? '#991b1b' : '#065f46'
          }),
          "class": "px-2 py-1 rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment_status === '0' ? 'Unresolved' : 'OK'), 1
        /* TEXT */
        )], 4
        /* STYLE */
        ), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_339, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-success text-white",
          onClick: function onClick($event) {
            return $options.submitAction('resolve', comment.id, index);
          },
          title: "Mark comment as Resolved"
        }, _hoisted_342, 8
        /* PROPS */
        , _hoisted_340), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.submitAction('reset', comment.id, index);
          },
          title: "Reset to Unresolved"
        }, _hoisted_345, 8
        /* PROPS */
        , _hoisted_343), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.submitAction('delete', comment.id, index);
          },
          title: "Delete this comment"
        }, _hoisted_348, 8
        /* PROPS */
        , _hoisted_346), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                    <span v-if=\"comment.user\">{{ comment.user.FullName }}</span>\n                                    <span v-else>Not recorded</span>\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatDate(comment.created_at)), 1
        /* TEXT */
        )]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])]), _hoisted_349];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_350, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ department_code_project }}\n        {{ department_code_user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }}\n        {{ paps.is_strategy_based }} ")])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
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

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLiveLabel"
}, "Filtering", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('closeFilter');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0e4809fa"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1
  /* HOISTED */
  );
});

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  "class": "modal-body"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.prev
    }])
  }, "Previous", 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [$props.next ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.next,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.next
    }])
  }, "Next", 2
  /* CLASS */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\n  border: 1px solid #000 !important;\n}\ntable {\n  border-collapse: collapse !important;\n}\n.th {\n    background-color: #929292 !important;\n}\n.superscript-btn {\n  /* font-size: 0.6em; */\n  /* vertical-align: super; */\n  border: none;\n  background: none;\n  padding: 0;\n  margin-left: 4px;\n  cursor: pointer;\n  color: #df280c;\n}\n.action-btn {\n  width: 100%;\n}\n.no-border-table td,\n.no-border-table th {\n  border: none !important;\n}\n.no-border-table {\n  border-collapse: collapse !important;\n}\n.signatory-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\n  border: 0px solid #ccc;\n  padding: 1rem;\n  border-radius: 8px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-0e4809fa] {\r\n      display: block;\n}\n.modal[data-v-0e4809fa] {\r\n        z-index: 9999 !important;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_style_index_0_id_952d90d2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_style_index_0_id_952d90d2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_style_index_0_id_952d90d2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/View copy.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_copy_vue_vue_type_template_id_952d90d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View copy.vue?vue&type=template&id=952d90d2 */ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2");
/* harmony import */ var _View_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View copy.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js");
/* harmony import */ var _View_copy_vue_vue_type_style_index_0_id_952d90d2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css */ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_View_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_View_copy_vue_vue_type_template_id_952d90d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/View copy.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Filter.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Filter.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue":
/*!***************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true");
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0e4809fa"],['__file',"resources/js/Shared/ModalDynamicTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_template_id_952d90d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_template_id_952d90d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy.vue?vue&type=template&id=952d90d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=template&id=952d90d2");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=template&id=09f80c58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_vue_vue_type_style_index_0_id_952d90d2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy.vue?vue&type=style&index=0&id=952d90d2&lang=css");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");


/***/ })

}]);