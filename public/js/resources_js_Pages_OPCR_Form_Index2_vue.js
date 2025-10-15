"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_OPCR_Form_Index2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/PrintModal */ "./resources/js/Shared/PrintModal.vue");
/* harmony import */ var _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle2 */ "./resources/js/Shared/ModalDynamicTitle2.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// FilterModal ModalDynamicTitle2






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    opcr_id: String,
    FFUNCCOD: String,
    mooe: String,
    ps: String,
    opcr_date: String,
    ave: String,
    total: String,
    dept_head: String,
    opcrs: Object,
    fileBaseUrl: String,
    rating_status: Number,
    disk: String
  },
  data: function data() {
    return {
      imageTypes: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
      total_ave: 0,
      total_comp: 0,
      displayModal: false,
      displayModalMOV: false,
      displaySideModal: false,
      showImageModal: false,
      opcr_rating_id: null,
      movs: [],
      search: "",
      // total_divisor: 0,
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        opcrs: []
      }),
      file: null,
      files: [],
      file_ids: [],
      current_filepath: null,
      allSelected: false,
      rating_status_dt: null,
      show_warnings: false
    };
  },
  computed: {},
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalMOV: _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_5__["default"],
    SideModal: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // beforeMount() {
  //     this.form.opcrs = this.opcrs
  //     if (localStorage.getItem('reloaded')) {
  //         localStorage.removeItem('reloaded');
  //     } else {
  //         localStorage.setItem('reloaded', '1');
  //         location.reload();
  //     }
  // },
  mounted: function mounted() {
    //this.adjustTextareaHeight();
    this.rating_status_dt = this.rating_status;
    this.form.opcrs = this.opcrs;

    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }

    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    //Format File Size
    formatFileSize: function formatFileSize(size) {
      if (size < 1024) return size + ' B';else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';else return (size / (1024 * 1024)).toFixed(2) + ' MB';
    },
    isWithinCount: function isWithinCount() {
      return this.files.length + this.movs.length <= 2;
    },
    isWithinLimit: function isWithinLimit() {
      var maxSize = 10 * 1024 * 1024; // 10 MB in bytes
      // Sum size of selected files

      var newFilesSize = this.files.reduce(function (sum, f) {
        return parseFloat(sum) + parseFloat(f.size);
      }, 0); // Sum size of already uploaded movs

      var existingFilesSize = this.movs.reduce(function (sum, f) {
        return parseFloat(sum) + parseFloat(f.file_size);
      }, 0);
      var totalSize = parseFloat(newFilesSize) + parseFloat(existingFilesSize);
      console.log("newFilesSize: " + newFilesSize);
      console.log("existingFilesSize: " + existingFilesSize);
      console.log("totalSize: " + totalSize);
      console.log("maxSize: " + maxSize);
      return totalSize <= maxSize;
    },
    computeAverage: function computeAverage(opcr) {
      // extract the values
      var values = [opcr.rating_q, opcr.rating_e, opcr.rating_t]; // filter out zero or null

      var validValues = values.filter(function (v) {
        return v > 0;
      });

      if (validValues.length === 0) {
        return 0; // or '' if you want it blank
      } // compute average


      var sum = validValues.reduce(function (a, b) {
        return a + b;
      }, 0);
      return (sum / validValues.length).toFixed(2); // keep 2 decimals
    },
    halfSem: function halfSem(amount) {
      var ret = parseFloat(amount) / 2;
      return this.format_number_conv(ret, 2, true);
    },
    deleteEla: function deleteEla(id) {
      var text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?" + id;

      if (confirm(text) == true) {
        this.$inertia["delete"]("/ELA/" + id);
      }
    },
    getRowspan: function getRowspan(row, ind) {
      var count = 1;
      var index = ind;

      for (var i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
        if (this.opcrs[i].mfo_desc === row) {
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

      for (var i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
        if (this.opcrs[i].office_accountable === row) {
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

      for (var i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
        if (this.opcrs[i].success_indicator === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }

      return count;
    },
    getTotalAverage: function getTotalAverage() {
      var total = 0;

      for (var i = 0; i < this.form.opcrs.length; i++) {
        var rat_e = this.form.opcrs[i].rating_e;
        var rat_q = this.form.opcrs[i].rating_q;
        var rat_t = this.form.opcrs[i].rating_t;
        var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t); // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);

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
      } // total = "44.44555555";
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
    getAverageAll: function getAverageAll() {
      var _this = this;

      // compute averages for all rows
      var rowAverages = this.form.opcrs.map(function (opcr) {
        return _this.computeRowAverage(opcr);
      }); // filter out rows that are 0

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
      // var total_div = 0;
      // var total = 0;
      // for (let i = 0; i < this.form.opcrs.length; i++) {
      //     var rat_e = this.form.opcrs[i].rating_e;
      //     var rat_q = this.form.opcrs[i].rating_q;
      //     var rat_t = this.form.opcrs[i].rating_t;
      //     var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
      //     var div = 0;
      //     if (parseFloat(rat_e) >= 1) {
      //         div = div + 1;
      //     }
      //     if (parseFloat(rat_q) >= 1) {
      //         div = div + 1;
      //     }
      //     if (parseFloat(rat_t) >= 1) {
      //         div = div + 1;
      //     }
      //     if (div == 0) {
      //         div = 1;
      //     }
      //     if (avee > 0) {
      //         total_div = total_div + 1;
      //     }
      //     // total_div = total_div + div;
      //     total = total + (avee / div);
      // }
      // // this.total_divisor = this.form.opcrs.length;
      // //this.total_comp
      // var aver = parseFloat(total) / total_div
      // //(parseFloat(this.form.opcrs.length));
      // this.total_ave = aver;
      // return this.format_number_conv(aver, 2, true)
    },
    numberInput: function numberInput(value) {
      if (value < 0) {
        this.numberInput = 0;
      } else if (value > 5) {
        this.numberInput = 5;
      }
    },
    disableTyping: function disableTyping(event) {
      if (!event.metaKey && !event.ctrlKey) {
        event.preventDefault();
      }
    },
    getAverage: function getAverage(ind) {
      // alert("getAverage");
      if (parseFloat(this.opcrs[ind].rating_e) > 5) {
        this.opcrs[ind].rating_e = 5;
      }

      if (this.opcrs[ind].rating_e == "") {
        this.opcrs[ind].rating_e = 0;
      }

      if (this.opcrs[ind].rating_q == "") {
        this.opcrs[ind].rating_q = 0;
      }

      if (this.opcrs[ind].rating_t == "") {
        this.opcrs[ind].rating_t = 0;
      }

      if (parseFloat(this.opcrs[ind].rating_e) < 0) {
        this.opcrs[ind].rating_e = 0;
      }

      if (parseFloat(this.opcrs[ind].rating_q) > 5) {
        this.opcrs[ind].rating_q = 5;
      }

      if (parseFloat(this.opcrs[ind].rating_q) < 0) {
        this.opcrs[ind].rating_q = 0;
      }

      if (parseFloat(this.opcrs[ind].rating_t) > 5) {
        this.opcrs[ind].rating_t = 5;
      }

      if (parseFloat(this.opcrs[ind].rating_t) < 0) {
        this.opcrs[ind].rating_t = 0;
      }

      var div = 0;

      if (parseFloat(this.opcrs[ind].rating_e) >= 1) {
        div = div + 1;
      }

      if (parseFloat(this.opcrs[ind].rating_q) >= 1) {
        div = div + 1;
      }

      if (parseFloat(this.opcrs[ind].rating_t) >= 1) {
        div = div + 1;
      }

      if (div == 0) {
        div = 1;
      }

      var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
      ave = this.format_number_conv(ave / div, 2, true);
      return ave;
    },
    submit: function submit() {
      if (isNaN(this.total_ave)) {
        alert('Some values are empty!');
      } else {
        var text = "WARNING!\nAre you sure you want to save changes to this OPCR?";

        if (confirm(text) == true) {
          var jsonString = JSON.stringify(this.form.opcrs);
          this.$inertia.post("/opcr/form/store", {
            opcrs: jsonString,
            FFUNCCOD: this.FFUNCCOD,
            opcr_id: this.opcr_id
          }, {
            preserveScroll: true,
            preserveState: true,
            replace: true
          });
        }
      }
    },
    handleKeydown: function handleKeydown(e) {
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        e.preventDefault();
        this.submit();
      }
    },
    showModal: function showModal() {
      // alert("e_name: " + e_name);
      this.viewlink();
      this.displayModal = true;
    },
    showModalMOV: function showModalMOV(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // alert(id)
                _this2.opcr_rating_id = id;
                url = '/movs/get/mov/' + id; // let url = '/monthly-details/monthly/accomplishments/object/' + empl_id + '/' + sem + '/' + e_year + '/' + idsemestral + '/' + my_month;
                // alert(empl_id);

                _context.next = 4;
                return axios.get(url).then(function (response) {
                  _this2.movs = response.data;
                })["finally"](function () {
                  _this2.isLoading = false;
                });

              case 4:
                _this2.displayModalMOV = true;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // async uploadFiles(){
    //     const payload = {
    //         file: this.file,
    //         files: this.files,
    //         // skills: ["Vue", "Laravel", "MySQL"]
    //     }
    //     await axios.post('/movs/save/'+this.opcr_rating_id+'/'+this.opcr_id, payload)
    // },
    uploadFiles: function uploadFiles() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.files && _this3.files.length < 1)) {
                  _context2.next = 3;
                  break;
                }

                alert("No file chosen.");
                return _context2.abrupt("return");

              case 3:
                if (confirm("Are you sure you want to upload selected files?")) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _this3.show_warnings = true;
                formData = new FormData(); // Single file (optional)

                if (_this3.file) {
                  formData.append("file", _this3.file);
                } // Multiple files


                if (_this3.files && _this3.files.length > 0) {
                  // this.files.forEach((f, i) => {
                  //     formData.append("files[]", f); // use files[] so Laravel can treat it as an array
                  // });
                  _this3.files.forEach(function (f) {
                    formData.append("files[]", f);
                  });
                }

                _context2.next = 11;
                return axios.post("/movs/save/".concat(_this3.opcr_rating_id, "/").concat(_this3.opcr_id), formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then(function (response) {
                  console.log("Upload success:", response.data);

                  _this3.showModalMOV(_this3.opcr_rating_id);

                  _this3.files = [];
                })["finally"](function (response) {
                  _this3.cancelFiles();
                })["catch"](function (error) {
                  var _error$response;

                  console.error("Upload error:", ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data) || error);
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    cancelFiles: function cancelFiles() {
      // this.show_warnings=false;
      this.files = []; // Clear the files array

      this.$refs.fileInput.value = null; // Reset the file input visually
    },
    handleFiles: function handleFiles(event) {
      // this.form.files = Array.from(event.target.files); // Store selected files
      var filesArray = Array.from(event.target.files);
      console.log(filesArray); // check if files are here

      this.files = Array.from(event.target.files);
      console.log(this.files); // check if files are here
    },
    viewlink: function viewlink() {
      var tot = this.getTotalAverage();
      var ave = this.getAverageAll(); // var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";

      var linkt = "https://";
      var jasper_ip = this.jasper_ip; // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Rating&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
      // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_rating_revised&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';

      var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025%2Fopcr_ratings_july2025&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025&standAlone=true&decorate=no&output=pdf';
      var params = '&opcr_id=' + this.opcr_id + '&FFUNCCOD=' + this.FFUNCCOD + '&total=' + tot + '&average=' + ave;
      var linkl = linkt + jasper_ip + jasper_link + params;
      this.report_link = linkl;
      return linkl;
    },
    hideModal: function hideModal() {
      this.displayModal = false;
    },
    hideModalMOV: function hideModalMOV() {
      this.displayModalMOV = false;
      this.opcr_id = null;
    },
    isPA: function isPA(opcr_date, type) {
      if (!opcr_date || !type) return false;
      var year = parseInt(opcr_date.match(/\d{4}/)[0]);
      var isFirstSem = opcr_date.includes("JANUARY"); // console.log(opcr_date)
      // console.log("Year: " + year + " isFirstSem: " + isFirstSem + " type: " + type);

      if (type === "PA 1") {
        return year < 2025 || year === 2025 && isFirstSem;
      } else if (type === "PA 2") {
        return year > 2025 || year === 2025 && !isFirstSem;
      }

      return false;
    },
    // adjustTextareaHeight() {
    //     const textarea = this.$refs.textarea;
    //     if (textarea) {
    //         const rowHeight = textarea.parentNode.offsetHeight; // Height of the table row
    //         textarea.style.height = rowHeight + 'px';
    //     }
    // }
    // DELETE MULTIPLE
    toggleFileSelection: function toggleFileSelection(fileId, event) {
      if (event.target.checked) {
        if (!this.file_ids.includes(fileId)) {
          this.file_ids.push(fileId);
        }
      } else {
        this.file_ids = this.file_ids.filter(function (id) {
          return id !== fileId;
        });
      }
    },
    deleteFile: function deleteFile(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var ids;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ids = [];

                if (!confirm('Are you sure you want to delete this file?')) {
                  _context3.next = 5;
                  break;
                }

                ids.push(id);
                _context3.next = 5;
                return axios["delete"]("/movs/delete-multiple/many", {
                  data: {
                    file_ids: ids
                  }
                }).then(function (response) {
                  console.log("Files deleted successfully", response.data);

                  _this4.showModalMOV(_this4.opcr_rating_id);
                })["catch"](function (error) {
                  var _error$response2;

                  console.error("Failed to delete files", ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data) || error);
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteFiles: function deleteFiles() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this5.file_ids.length) {
                  _context4.next = 3;
                  break;
                }

                alert("No files selected for deletion");
                return _context4.abrupt("return");

              case 3:
                if (confirm("Are you sure you want to delete selected files?")) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                _context4.prev = 5;
                _context4.next = 8;
                return axios["delete"]("/movs/delete-multiple/many", {
                  data: {
                    file_ids: _this5.file_ids
                  }
                }).then(function (response) {
                  console.log("Files deleted successfully", response.data);

                  _this5.showModalMOV(_this5.opcr_rating_id);
                })["finally"](function (response) {
                  _this5.file_ids = [];
                  _this5.allSelected = false;
                })["catch"](function (error) {
                  var _error$response3;

                  console.error("Failed to delete files", ((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.data) || error);
                });

              case 8:
                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](5);
                console.error(_context4.t0);
                alert("Failed to delete files");

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[5, 10]]);
      }))();
    },
    // FOIR PREVIEWS
    previewFile: function previewFile(file) {
      var imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
      var multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3']; // alert("previewFile " + this.disk + " "+file.file_type)
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
          window.open(this.view_link, '_blank'); //

          return;
        }

        if (this.isPreviewable(file.file_type)) {
          this.displaySideModal = true;
          this.file_extension = file.file_type; // this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
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
          this.file_extension = file.file_type; // window.open(file.file_url, '_blank')
        } else {
          alert('This file type cannot be previewed.');
        }
      }
    },
    // TOGGLE SELECT
    toggleSelectAll: function toggleSelectAll(event) {
      if (event.target.checked) {
        // Add all file IDs
        this.file_ids = this.movs.map(function (file) {
          return file.id;
        });
      } else {
        // Remove all file IDs
        this.file_ids = [];
      }
    },
    //ICON
    getFileIcon: function getFileIcon(file) {
      if (!(file !== null && file !== void 0 && file.file_type)) {
        return '/images/icons/file.png'; // default if missing type
      }

      var type = file.file_type.toLowerCase();
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
        if (this.disk === 'public') {
          return window.location.origin + "/storage/" + file.filepath;
        } else {
          // return `http://122.53.120.18:8067/images/${file.filepath}`;
          return "/images/icons/images.png";
        }
      } else {
        return '/images/icons/file.png'; // default icon
      }
    },
    //IMAGE MODAL
    openImageModal: function openImageModal() {
      alert("open image modal");
      this.showImageModal = true;
    },
    closeImageModal: function closeImageModal() {
      this.showImageModal = false;
    },
    //SUBMIT
    submitRecallRating: function submitRecallRating(curr_stat, staged_for, staged_status, question) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (confirm(question)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return axios.post("/opcr/form/" + _this6.opcr_id + "/submit", {
                  data: {
                    curr_stat: curr_stat,
                    staged_for: staged_for
                  }
                }).then(function (response) {// console.log("Files deleted successfully", response.data);
                  // this.showModalMOV(this.opcr_rating_id);
                })["finally"](function (response) {
                  // this.file_ids = [];
                  // this.allSelected=false;
                  _this6.rating_status_dt = staged_for;
                  alert(staged_status);
                })["catch"](function (error) {
                  console.error("Failed to submit OPCR Rating Form", error);
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
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
      //my_id: this.props.userId,
      value: null //   options: [
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {//userId: Object,
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "OPCR", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row gap-10 masonry pos-r"
};
var _hoisted_3 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "OFFICE PERFORMANCE COMMITMENT AND RATING FORM ", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "peers"
};
var _hoisted_6 = {
  "class": "peer mR-10"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_8 = {
  "class": "masonry-sizer col-md-6"
};
var _hoisted_9 = {
  "class": "col-12"
};
var _hoisted_10 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_11 = {
  "class": "table-responsive"
};
var _hoisted_12 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Major Final Output"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Success Indicators (Targets + Measures)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Alloted Budget"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Accountable Division"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Actual Accomplishments"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "4"
}, "Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Remarks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "MOV")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Average")])], -1
/* HOISTED */
);

var _hoisted_14 = ["rowspan"];
var _hoisted_15 = ["rowspan"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr }} ")], -1
/* HOISTED */
);

var _hoisted_17 = ["rowspan"];
var _hoisted_18 = ["onUpdate:modelValue"];
var _hoisted_19 = ["onUpdate:modelValue"];
var _hoisted_20 = ["onUpdate:modelValue"];
var _hoisted_21 = ["onUpdate:modelValue"];
var _hoisted_22 = ["value"];
var _hoisted_23 = ["onUpdate:modelValue"];
var _hoisted_24 = ["onClick"];

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "6"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, "TOTAL RATING", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "6"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, "FINAL AVERAGE RATING", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "table-responsive"
};
var _hoisted_32 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Assessed by PMT Secretariat:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Reviewed by:")], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "ALICIA M. GRACIADAS")], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "text-center font-weight-bold"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_38 = {
  key: 0
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "LEWIS JAKE G. CAIMAN", -1
/* HOISTED */
);

var _hoisted_40 = [_hoisted_39];
var _hoisted_41 = {
  key: 1
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "IVAN KLEB N. ULGASAN", -1
/* HOISTED */
);

var _hoisted_43 = [_hoisted_42];

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "font-size": "12px"
  }
}, "PMT Head Secretariat"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "font-size": "12px"
  }
}, "PMT Chairperson")], -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "font-size": "12px"
  }
}, "Date:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "font-size": "12px"
  }
}, "Date:")], -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-danger font-weight-bold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "SAVE CHANGES THEN PRINT")], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "row justify-content-center"
};
var _hoisted_48 = {
  "class": "col-md-12"
};
var _hoisted_49 = ["disabled"];
var _hoisted_50 = ["disabled"];
var _hoisted_51 = {
  key: 0
};
var _hoisted_52 = ["disabled"];
var _hoisted_53 = {
  key: 1
};
var _hoisted_54 = ["disabled"];

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcrs[0].mfo_desc }} ** {{ opcrs[1].mfo_desc }} <br>\r\n                            {{ opcrs[2].mfo_desc }} ** {{ opcrs[3].mfo_desc }} "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ data.from }} to {{ data.to }} of\r\n                            {{ data.total }} entries ")])])], -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "justify-content-center"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "text-align": "center"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "OFFICE PERFORMANCE COMMITMENT AND RATING FORM")], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "masonry-item w-100"
};
var _hoisted_59 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_60 = {
  "class": "table-responsive"
};
var _hoisted_61 = ["src"];

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "align": "center"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn-primary text-white\" @click=\"submitAction('1')\" v-if=\"emp_status === '0'\">\r\n                        Review\r\n                    </button>\r\n                    <button class=\"btn btn-primary text-white\" @click=\"submitAction('2')\" v-if=\"emp_status === '1'\">\r\n                        Approve\r\n                    </button>&nbsp;\r\n                    <button class=\"btn btn-danger text-white\" @click=\"showModal3()\">\r\n                        Return\r\n                    </button> ")], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "peers mb-12"
};
var _hoisted_64 = {
  "class": "col-md-5"
};
var _hoisted_65 = {
  key: 0
};
var _hoisted_66 = {
  key: 0,
  "class": "text-danger mt-2"
};
var _hoisted_67 = {
  key: 1,
  "class": "text-danger mt-2"
};
var _hoisted_68 = ["disabled"];
var _hoisted_69 = ["disabled"];
var _hoisted_70 = {
  key: 0
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Selected Files (Pending Upload)", -1
/* HOISTED */
);

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Size")], -1
/* HOISTED */
);

var _hoisted_73 = ["src"];
var _hoisted_74 = {
  "class": "col-md-7"
};
var _hoisted_75 = {
  "class": "peers"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Files Uploaded", -1
/* HOISTED */
);

var _hoisted_77 = ["disabled"];
var _hoisted_78 = {
  name: "tabel",
  "class": "table table-hover table-striped"
};
var _hoisted_79 = ["checked"];

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1
/* HOISTED */
);

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Name", -1
/* HOISTED */
);

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Size", -1
/* HOISTED */
);

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions", -1
/* HOISTED */
);

var _hoisted_84 = ["value", "onChange"];
var _hoisted_85 = ["src"];
var _hoisted_86 = ["onClick"];

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "blue",
  "class": "bi bi-eye-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
})], -1
/* HOISTED */
);

var _hoisted_88 = [_hoisted_87];
var _hoisted_89 = ["href"];

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "green",
  "class": "bi bi-cloud-arrow-down-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"
})], -1
/* HOISTED */
);

var _hoisted_91 = [_hoisted_90];
var _hoisted_92 = ["onClick"];

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "red",
  "class": "bi bi-trash-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
})], -1
/* HOISTED */
);

var _hoisted_94 = [_hoisted_93];

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-lg font-semibold"
}, "Preview SideModal", -1
/* HOISTED */
);

var _hoisted_96 = {
  key: 0
};
var _hoisted_97 = {
  key: 0
};
var _hoisted_98 = ["src"];
var _hoisted_99 = ["src"];
var _hoisted_100 = {
  key: 2
};
var _hoisted_101 = ["src"];
var _hoisted_102 = {
  key: 1
};
var _hoisted_103 = {
  key: 0
};
var _hoisted_104 = ["src"];
var _hoisted_105 = {
  key: 1
};
var _hoisted_106 = ["src"];
var _hoisted_107 = {
  key: 2
};
var _hoisted_108 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  var _component_ModalMOV = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalMOV");

  var _component_SideModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Search..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"peer\">\r\n                    <Link class=\"btn btn-primary btn-sm\" :href=\"`/ELA/create`\">Add Agenda</Link>\r\n                    <button class=\"btn btn-primary btn-sm mL-2 text-white\" @click=\"showFilter()\">Filter</button>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/opcrlist/".concat($props.FFUNCCOD)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_date }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("PERIOD: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.opcr_date), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row gap-20\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"overflow-x: auto; display: block; align-items-center width: 100%; -webkit-overflow-scrolling: touch;\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if=\"index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc\"\r\n                                        :rowspan=\"getRowspan(opcr.mfo_desc, index)\""), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.opcrs, function (opcr, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [index === 0 || opcr.mfo_desc !== $props.opcrs[index - 1].mfo_desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
      key: 0,
      rowspan: $options.getRowspan(opcr.mfo_desc, index),
      style: {
        "vertical-align": "middle"
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.mfo_desc), 9
    /* TEXT, PROPS */
    , _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 0 || opcr.success_indicator !== $props.opcrs[index - 1].success_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
      key: 1,
      rowspan: $options.getRowspanIndicator(opcr.success_indicator, index),
      style: {
        "vertical-align": "middle"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr.success_indicator }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.target_success_indicator), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :rowspan=\"form.opcrs.length\" v-if=\"index === 0\" style=\"vertical-align:middle\">\r\n                                        PS = {{ halfSem(ps) }} <br>(annual={{ format_number_conv(ps) }}) <br><br>MOOE = {{\r\n                                            halfSem(mooe) }} (annual={{ format_number_conv(mooe) }})\r\n                                    </td> "), _hoisted_16, index === 0 || opcr.office_accountable !== $props.opcrs[index - 1].office_accountable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
      key: 2,
      rowspan: $options.getRowspan2(opcr.office_accountable, index),
      style: {
        "vertical-align": "middle"
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.office_accountable), 9
    /* TEXT, PROPS */
    , _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr.id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.opcrs[index].accomplishments = $event;
      },
      style: {
        "height": "inherit"
      }
    }, null, 8
    /* PROPS */
    , _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.opcrs[index].accomplishments]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RATINGS***************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.opcrs[index].rating_q = $event;
      },
      "class": "centered-input",
      type: "number",
      min: "0",
      max: "5",
      step: "1",
      disabled: ""
    }, null, 8
    /* PROPS */
    , _hoisted_19), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.opcrs[index].rating_q]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.opcrs[index].rating_e = $event;
      },
      "class": "centered-input",
      type: "number",
      min: "0",
      max: "5",
      step: "1",
      disabled: ""
    }, null, 8
    /* PROPS */
    , _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.opcrs[index].rating_e]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.opcrs[index].rating_t = $event;
      },
      "class": "centered-input",
      type: "number",
      min: "0",
      max: "5",
      step: "1",
      disabled: ""
    }, null, 8
    /* PROPS */
    , _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.opcrs[index].rating_t]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      value: $options.computeAverage($data.form.opcrs[index]),
      "class": "centered-input",
      type: "number",
      min: "0",
      max: "5",
      step: "1",
      disabled: ""
    }, null, 8
    /* PROPS */
    , _hoisted_22)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("**********************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.form.opcrs[index].remarks = $event;
      },
      style: {
        "height": "inherit"
      }
    }, null, 8
    /* PROPS */
    , _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.opcrs[index].remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-primary text-white",
      onClick: function onClick($event) {
        return $options.showModalMOV($data.form.opcrs[index].id);
      }
    }, "Upload MOVs", 8
    /* PROPS */
    , _hoisted_24)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getTotalAverage()), 1
  /* TEXT */
  ), _hoisted_27]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getAverageAll()), 1
  /* TEXT */
  ), _hoisted_30])])])])], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, [_hoisted_36, _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_date }} "), $options.isPA($props.opcr_date, 'PA 1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_38, _hoisted_40)) : $options.isPA($props.opcr_date, 'PA 2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, _hoisted_43)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_44, _hoisted_45])])]), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3 text-white",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, " Save changes ", 8
  /* PROPS */
  , _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success mt-3 text-white",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.showModal();
    }),
    disabled: $data.form.processing
  }, " Print ", 8
  /* PROPS */
  , _hoisted_50), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), $data.rating_status_dt == -1 || $data.rating_status_dt == -2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3 text-white",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.submitRecallRating(-1, 0, 'Successfully submitted OPCR', 'Are you sure you want to submit this OPCR');
    }),
    disabled: $data.form.processing
  }, " Submit ", 8
  /* PROPS */
  , _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" rating_status_dt{{ rating_status_dt }} "), $data.rating_status_dt == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-secondary mt-3 text-white",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.submitRecallRating(0, -1, 'Successfully recalled OPCR submission', 'Are you sure you want to recall the submission of this OPCR');
    }),
    disabled: $data.form.processing
  }, " Recall ", 8
  /* PROPS */
  , _hoisted_54), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <pagination :next=\"data.next_page_url\" :prev=\"data.prev_page_url\" /> ")])]), _hoisted_55])]), $data.displayModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 0,
    onCloseModalEvent: $options.hideModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ report_link }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.report_link,
        style: {
          "width": "100%",
          "height": "450px"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_61)])])]), _hoisted_62])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.displayModalMOV ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ModalMOV, {
    key: 1,
    onCloseModalEvent: $options.hideModalMOV,
    title: "Means of Verification"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1>Means of Verification </h1> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Warnings "), $data.show_warnings ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [!$options.isWithinLimit() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, " ❌ Total file size must not exceed 10 MB. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.isWithinCount() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_67, " ❌ You can only upload a maximum of 2 files. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        multiple: "",
        onChange: _cache[6] || (_cache[6] = function () {
          return $options.handleFiles && $options.handleFiles.apply($options, arguments);
        }),
        ref: "fileInput",
        disabled: !($options.isWithinLimit() && $options.isWithinCount())
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_68), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[7] || (_cache[7] = function () {
          return $options.uploadFiles && $options.uploadFiles.apply($options, arguments);
        }),
        "class": "btn btn-primary text-white",
        disabled: !($options.isWithinLimit() && $options.isWithinCount())
      }, "Upload", 8
      /* PROPS */
      , _hoisted_69), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[8] || (_cache[8] = function () {
          return $options.cancelFiles && $options.cancelFiles.apply($options, arguments);
        }),
        "class": "btn btn-danger text-white"
      }, "Cancel ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [$data.files.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [_hoisted_72, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.files, function (file, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: _ctx.getPreUploadFileIcon(file.name.split('.').pop()),
          alt: "file preview",
          style: {
            "width": "30px",
            "height": "30px",
            "object-fit": "cover"
          }
        }, null, 8
        /* PROPS */
        , _hoisted_73)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name) + " ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name.split('.').pop()) + " ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatFileSize(file.size)) + " ", 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[9] || (_cache[9] = function () {
          return $options.deleteFiles && $options.deleteFiles.apply($options, arguments);
        }),
        "class": "btn btn-danger btn-sm mL-2 text-white",
        disabled: !$data.file_ids.length
      }, " Delete Selected ", 8
      /* PROPS */
      , _hoisted_77)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"previewFile(file)\" class=\"btn btn-primary text-white\">Preview</button>&nbsp; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /files/proxy-download "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" target=\"_blank\" rel=\"noopener noreferrer\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a :href=\"`http://122.53.120.18:8067/images/${file.filename}`\" class=\"btn btn-success\">Download</a>&nbsp; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" http://122.53.120.18:8067/images/{{file.filename}} - /file-upload/download/ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p> http://192.168.80.89:8073//file-upload/download/{{file.id}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        checked: $data.allSelected,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.allSelected = $event;
        }),
        onChange: _cache[11] || (_cache[11] = function ($event) {
          return $options.toggleSelectAll($event);
        })
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_79), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.allSelected]])]), _hoisted_80, _hoisted_81, _hoisted_82, _hoisted_83])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.movs, function (file) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: file.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "checkbox",
          value: file.id,
          onChange: function onChange($event) {
            return $options.toggleFileSelection(file.id, $event);
          },
          "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
            return $data.file_ids = $event;
          })
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_84), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.file_ids]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p>http://122.53.120.18:8067/images/{{file.filepath}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: $options.getFileIcon(file),
          alt: "file preview",
          style: {
            "width": "30px",
            "height": "30px",
            "object-fit": "cover"
          }
        }, null, 8
        /* PROPS */
        , _hoisted_85)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.filename), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number(file.file_size / 1024, 2, true)) + " KB ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.previewFile(file);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "Preview"
        }, _hoisted_88, 8
        /* PROPS */
        , _hoisted_86), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" download "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: "/movs/download/".concat(file.id),
          "class": "inline-flex items-center",
          title: "Download",
          target: "_blank"
        }, _hoisted_91, 8
        /* PROPS */
        , _hoisted_89), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.deleteFile(file.id);
          },
          "class": "p-1 rounded-full bg-transparent hover:bg-red-100 border-0",
          "data-toggle": "tooltip",
          title: "Delete"
        }, _hoisted_94, 8
        /* PROPS */
        , _hoisted_92), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a\r\n                                    :href=\"`/file-upload/download/${file.id}`\"\r\n                                    class=\"btn btn-success\"\r\n                                    download\r\n                                    >\r\n                                    Download\r\n                                    </a>&nbsp; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\r\n                                    @click=\"deleteFile(file.id)\"\r\n                                    class=\"btn btn-danger text-white\">\r\n                                    Delete\r\n                                    </button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\r\n                                    @click=\"deleteFile(file.id)\"\r\n                                    class=\"p-1 rounded hover:bg-red-100\"\r\n                                    title=\"Delete\"\r\n                                    >\r\n                                    <svg\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"20\"\r\n                                        height=\"20\"\r\n                                        fill=\"red\"\r\n                                        class=\"bi bi-trash-fill\"\r\n                                        viewBox=\"0 0 16 16\"\r\n                                    >\r\n                                        <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0\"/>\r\n                                    </svg>\r\n                                    </button> ")])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @closeFilter=\"displaySideModal = false\" "), $data.displaySideModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SideModal, {
    key: 2,
    onCloseModalEvent: _cache[15] || (_cache[15] = function ($event) {
      return $data.displaySideModal = false;
    }),
    style: {
      "z-index": "9999"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" file_extension: {{ file_extension }} -- {{ view_link }} -- {{ disk }} "), $props.disk === 'public' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <iframe v-if=\"file_extension === 'pdf'\"\r\n                    :src=\"`/storage/${current_filepath}`\"\r\n                    width=\"100%\"\r\n                    height=\"500px\">\r\n                </iframe> "), _ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, "\r\n                    ", 8
      /* PROPS */
      , _hoisted_98)])) : $data.imageTypes.includes(_ctx.file_extension) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .toLowerCase() "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[13] || (_cache[13] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8
      /* PROPS */
      , _hoisted_99)])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, "\r\n                    ", 8
      /* PROPS */
      , _hoisted_101)]))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_102, [_ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, "\r\n                    ", 8
      /* PROPS */
      , _hoisted_104)])) : $data.imageTypes.includes(_ctx.file_extension.toLowerCase()) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[14] || (_cache[14] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8
      /* PROPS */
      , _hoisted_106)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, "\r\n                    ", 8
      /* PROPS */
      , _hoisted_108)]))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <br>\r\n            <iframe :src=\"`/storage/${current_filepath}`\"></iframe>\r\n            <br>\r\n            <a :href=\"`/storage/${current_filepath}`\" target=\"_blank\">\r\n                Open File\r\n            </a> ")];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMAGE MODAL ************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fullscreen Modal ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" opcr_id: {{ opcr_id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" disk: {{ disk }} ")], 64
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-8a5e42b0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1
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
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11])])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e8c5b748"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "modal-title",
    style: {
      "color": "#ffe819",
      "text-align": "center !important"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PRINT PREVIEW")], -1
  /* HOISTED */
  );
});

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
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.row-centered {\r\n    text-align: center;\n}\n.col-centered {\r\n    display: inline-block;\r\n    float: none;\r\n    text-align: left;\r\n    margin-right: -4px;\n}\n.pos {\r\n    position: top;\r\n    top: 240px;\n}\r\n\r\n/* force horizontal overflow for testing */\r\n    /* table {\r\n      min-width: 800px;\r\n    }\r\n    .table-responsive {\r\n      display: block;\r\n      width: 100%;\r\n      overflow-x: auto;\r\n      -webkit-overflow-scrolling: touch;\r\n    } */\r\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-modal[data-v-8a5e42b0] {\r\n  max-width: 80% !important; /* width of modal */\r\n  width: 80% !important;\n}\r\n    /* Override default value of 'none' */\n.modal[data-v-8a5e42b0] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-e8c5b748] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_style_index_0_id_c4657956_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index2.vue?vue&type=style&index=0&id=c4657956&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_style_index_0_id_c4657956_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_style_index_0_id_c4657956_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./resources/js/Pages/OPCR/Form/Index2.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/OPCR/Form/Index2.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index2_vue_vue_type_template_id_c4657956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index2.vue?vue&type=template&id=c4657956 */ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956");
/* harmony import */ var _Index2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index2.vue?vue&type=script&lang=js */ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js");
/* harmony import */ var _Index2_vue_vue_type_style_index_0_id_c4657956_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index2.vue?vue&type=style&index=0&id=c4657956&lang=css */ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index2_vue_vue_type_template_id_c4657956__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/OPCR/Form/Index2.vue"]])
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
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-8a5e42b0"],['__file',"resources/js/Shared/ModalDynamicTitle2.vue"]])
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
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");
/* harmony import */ var _PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
/* harmony import */ var _PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e8c5b748"],['__file',"resources/js/Shared/PrintModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_template_id_c4657956__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_template_id_c4657956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index2.vue?vue&type=template&id=c4657956 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=template&id=c4657956");


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

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");


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

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index2_vue_vue_type_style_index_0_id_c4657956_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index2.vue?vue&type=style&index=0&id=c4657956&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OPCR/Form/Index2.vue?vue&type=style&index=0&id=c4657956&lang=css");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");


/***/ })

}]);