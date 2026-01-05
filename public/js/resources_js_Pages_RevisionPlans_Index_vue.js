"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/PrintModal */ "./resources/js/Shared/PrintModal.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: Object,
    //idstrat: String,
    idpaps: String,
    filters: Object,
    paps: Object,
    monitors: Object,
    source: String // search: String,
    // type_f: String,

  },
  data: function data() {
    return {
      search: this.$props.filters.search,
      showAIPModal: false,
      aip_printLink: "",
      ccet: 'no',
      // This is the main variable bound by v-model
      checked: false,
      // Internal boolean to control the checkbox
      aip_printLink_excel: "",
      rev_plan_selected: [],
      WorkPlanModalVisible: "",
      cmp_link: "",
      SIPModalVisible: false,
      paps: [],
      selected_sip_paps: null,
      type_filter: this.$props.filters.type_filter,
      paps_id_here: 0,
      printProfileVIsible: false,
      // /Project id
      rev_plan_id: 0,
      ppa_link: "",
      // RETURN REQUEST**********************
      //For Project Design
      ReturnWithAmmendmentsModalVisible: false,
      //Justification Uploads
      file: null,
      files: [],
      file_ids: [],
      current_filepath: null,
      allSelected: false,
      selected_plan: [],
      selected_status: 0,
      selected_label: '',
      docs: [],
      remarks: '',
      return_request_type: '',
      //Document Display
      displaySideModal: false,
      showImageModal: false // END OF RETURN REQUEST***************

    };
  },
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    AIPModal: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    WorkPlanModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    SIPModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProjectPrintModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ReturnWithAmmendmentsModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  watch: {
    search: _.debounce(function (value) {
      this.$inertia.get("/revision/" + this.paps_id_here, {
        search: value,
        type_filter: this.type_filter,
        source: this.source
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true
      });
    }, 300)
  },
  mounted: function mounted() {
    if (this.paps.id) {
      this.paps_id_here = this.paps.id;
    }

    this.updateValue(); // Initialize ccet based on the initial state of checked
  },
  methods: {
    printProfileVisible: function printProfileVisible($rev_print_id) {
      this.printProfileVIsible = true;
    },
    showCreate: function showCreate() {
      this.$inertia.get("/targets/create", {
        raao_id: this.raao_id
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true
      });
    },
    deleteStrat: function deleteStrat(id) {
      //alert(this.idpaps);
      var text = "WARNING!\nAre you sure you want to delete the strategy?" + id;

      if (confirm(text) == true) {
        this.$inertia["delete"]("/strategies/" + id + "/" + this.idpaps);
      }
    },
    getAccomplishment: function getAccomplishment(tar_id) {
      this.$inertia.get("/accomplishments", {
        idtarget: tar_id
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true
      });
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
    amountStatus: function amountStatus(budget, imp_amount) {
      var status_now = "";
      var showAmount = "";
      var bdg = parseFloat(budget);
      var imp = parseFloat(imp_amount); //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "

      if (bdg > imp) {
        //alert('budget is greater than impamount');
        status_now = showAmount + "Warning: total amount of budgetary requirement is greater than the total implementation plans amount.";
      }

      if (bdg < imp) {
        status_now = showAmount + "Warning: total amount of implementation plans is greater than the total  amount of budgetary requirement.";
      }

      return status_now;
    },
    can_submit: function can_submit(budget, imp_amount) {
      // var status_now="";
      // var showAmount ="";
      var bdg = parseFloat(budget);
      var imp = parseFloat(imp_amount);
      return bdg >= 1 && imp >= 1 && bdg === imp; // if(bdg>imp){
      //     return false;
      // }
      // if(bdg<imp){
      //     return false;
      // }
      // if(bdg<1){
      //     return false;
      // }
      // if(imp<1){
      //     return false;
      // }
    },
    showAIPModalMethod: function showAIPModalMethod() {
      var linkt = "https://";
      var jasper_ip = this.jasper_ip;
      var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=pdf';
      var params = '&ccet=' + this.ccet; // console.log(params);

      this.aip_printLink = linkt + jasper_ip + jasper_link + params; // this.aip_printLink_excel = this.aip_printLink.replace('&output=pdf', '&output=csv');
      // this.aip_printLink_excel =linkt+jasper_ip+'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=xlsx&ccet='+this.ccet;

      this.showAIPModal = true;
    },
    hideAIPModal: function hideAIPModal() {
      this.showAIPModal = false;
    },
    updateValue: function updateValue() {
      this.ccet = this.checked ? '1' : '0';
    },
    exportUsers: function exportUsers() {
      // This opens the Laravel route in a new tab and triggers download
      // window.open(route('export.users'), '_blank');
      var linkt = "https://";
      var jasper_ip = this.jasper_ip;
      var short_link = 'jasperserver/rest_v2/reports/reports/OPCR_AIP/AIP_Print.xlsx?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no';
      var params = '&ccet=' + this.ccet;
      var link_final = linkt + jasper_ip + short_link + params; // '/revision/export/aip'

      window.open(link_final, '_blank');
    },
    submitItem: function submitItem(revision_plan, newStatus) {
      // let projectTypeLabel = '';
      // if (revision_plan.type === 'p') {
      //     projectTypeLabel = type === 0 ? 'Submit Project Profile' : 'Recall Project Profile';
      // } else if (revision_plan.type === 'd') {
      //     projectTypeLabel = type === 0 ? 'Submit Project Design' : 'Recall Project Design';
      // }
      // // Build confirmation message
      // const confirmMessage = `Are you sure you want to ${type === 0 ? 'Submit' : 'Recall'} the project ${revision_plan.type === 'p' ? 'profile' : 'design'} entitled "${revision_plan.project_title}"?`;
      // // Ask user for confirmation
      // if (!confirm(confirmMessage)) {
      //     return; // Stop if user clicks "Cancel"
      // }
      // const id = revision_plan.id;
      // const new_status = type; // 0 or -1
      // axios.post(`/status/revision/update/${id}/${projectTypeLabel}/${new_status}`)
      //     .then(response => {
      //         // Update local status
      //         revision_plan.status = String(new_status);
      //         console.log(`${projectTypeLabel} successful`);
      //     })
      //     .catch(error => {
      //         console.error(`${projectTypeLabel} failed:`, error);
      //     });
      var actions = {
        0: "Submit",
        "-1": "Recall",
        1: "Review",
        2: "Approve",
        "-2": "Return"
      };
      var actionLabel = actions[newStatus];
      var typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
      var confirmMessage = "Are you sure you want to ".concat(actionLabel, " the ").concat(typeLabel, " entitled \"").concat(revision_plan.project_title, "\"?");
      var actionlabelcomplete = actionLabel + ' ' + typeLabel;
      if (!confirm(confirmMessage)) return;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.post("/status/revision/update/".concat(revision_plan.id, "/").concat(actionlabelcomplete, "/").concat(newStatus), {}, {
        preserveScroll: true
      });
    },
    //WORKPLAN
    setLinkModal: function setLinkModal(id) {
      var linkt = "https://";
      var jasper_ip = this.jasper_ip;
      var jasper_link = '/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FComprehensive_WorkPlan&standAlone=true&output=pdf';
      var params = '&id=' + id; // console.log(params);

      this.cmp_link = linkt + jasper_ip + jasper_link + params;
      this.toggleWorkPlanModal();
    },
    toggleWorkPlanModal: function toggleWorkPlanModal() {
      this.WorkPlanModalVisible = !this.WorkPlanModalVisible;
    },
    // GENERATE PROJECT DEISGN
    generateProjectDesign: function generateProjectDesign(id, type) {
      if (!id) return; // Browser confirmation

      if (!confirm("Are you sure you want to generate the Project Design for this project?")) {
        return; // User canceled
      } // Make the Inertia POST request


      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.post("/project/design/generate/".concat(id), {
        'type': type
      }, {
        onSuccess: function onSuccess() {
          // optional: anything you want to run after success
          console.log("Project Design generated.");
        },
        onError: function onError(errors) {
          console.error(errors);
        }
      });
    },
    // NEW SIP GENERATION
    showSIPModal: function showSIPModal() {
      var _this = this;

      axios.get('/get/PAPS').then(function (res) {
        _this.paps = res.data;
        _this.SIPModalVisible = true;
      })["catch"](function (err) {
        console.error('Failed to load PAPS:', err);
      });
    },
    // FILTER BY TYPE
    filterProjects: function filterProjects() {
      this.$inertia.get("/revision/" + this.paps_id_here, {
        search: this.search,
        type_filter: this.type_filter,
        source: this.source
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true
      });
    },
    // OPEN PPA
    openPrintProfile: function openPrintProfile(rev_plan_id_p) {
      this.rev_plan_id = rev_plan_id_p;
      this.printProfileVIsible = true;
      var linkt = "https://";
      var jasper_ip = this.jasper_ip;
      var jasper_link = '/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FIndividual_Output&reportUnit=%2Freports%2Fplanning_system%2FIndividual_Output%2FProject_Profile&standAlone=true&standAlone=true&output=pdf';
      var params = '&id=' + rev_plan_id_p; // console.log(params);

      this.ppa_link = linkt + jasper_ip + jasper_link + params;
    },
    //Return with Ammendments/PROJECT DESIGN
    toggleReturnWithAmmendmentsModal: function toggleReturnWithAmmendmentsModal() {
      this.ReturnWithAmmendmentsModalVisible = true;
    },
    hideReturnWithAmmendmentsModal: function hideReturnWithAmmendmentsModal() {
      this.ReturnWithAmmendmentsModalVisible = false;
    },
    returnWithAmmendments: function returnWithAmmendments(revision_plan, newStatus) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var actions, actionLabel, typeLabel, actionlabelcomplete, url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                actions = {
                  0: "Submit",
                  "-1": "Recall",
                  1: "Review",
                  2: "Approve",
                  "-2": "Return",
                  5: "Request for Return"
                };
                actionLabel = actions[newStatus];
                typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
                actionlabelcomplete = actionLabel + ' ' + typeLabel;
                _this2.selected_label = actionlabelcomplete;
                _this2.selected_plan = revision_plan;
                _this2.selected_status = newStatus; // this.opcr_rating_id=id;

                url = '/revison_plan_documents/' + revision_plan.id; // let url = '/monthly-details/monthly/accomplishments/object/' + empl_id + '/' + sem + '/' + e_year + '/' + idsemestral + '/' + my_month;
                // alert(empl_id);

                _context.next = 10;
                return axios.get(url).then(function (response) {
                  _this2.docs = response.data;
                })["finally"](function () {
                  _this2.isLoading = false;
                });

              case 10:
                _this2.toggleReturnWithAmmendmentsModal();

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
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
                } // `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                // /update/{id}/{type}/{new_status}/upload/justification


                _context2.next = 11;
                return axios.post("/status/revision/update/".concat(_this3.selected_plan.id, "/").concat(_this3.selected_label, "/").concat(_this3.selected_status, "/upload/justification"), formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then(function (response) {
                  console.log("Upload success:", response.data);

                  _this3.returnWithAmmendments(_this3.selected_plan, _this3.selected_status);

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
      var filesArray = Array.from(event.target.files); // Filter only PDF files AND size <= 1 MB

      var pdfFiles = filesArray.filter(function (file) {
        var isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        var isSmallEnough = file.size <= 1024 * 1024; // 1 MB in bytes

        return isPdf && isSmallEnough;
      }); // Alert user for invalid files

      if (pdfFiles.length !== filesArray.length) {
        alert("Only PDF files under 1 MB are allowed! Invalid files will be ignored.");
      }

      this.files = pdfFiles;
      console.log("Selected PDF files under 1 MB:", this.files); // Optional: reset input if no valid files

      if (this.files.length === 0) {
        this.$refs.fileInput.value = null;
      } //**********ORIGINAL UNCHANGED */
      // this.form.files = Array.from(event.target.files); // Store selected files
      // const filesArray = Array.from(event.target.files);


      console.log(filesArray); // check if files are here

      this.files = Array.from(event.target.files);
      console.log(this.files); // check if files are here
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
        this.file_ids = this.docs.map(function (file) {
          return file.id;
        });
      } else {
        // Remove all file IDs
        this.file_ids = [];
      }
    },
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
                return axios["delete"]("/revison_plan_documents/delete-multiple/many", {
                  data: {
                    file_ids: ids
                  }
                }).then(function (response) {
                  console.log("Files deleted successfully", response.data); // this.showModalMOV(this.opcr_rating_id);
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
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this4.file_ids.length) {
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
                return axios["delete"]("/revison_plan_documents/delete-multiple/many", {
                  data: {
                    file_ids: _this4.file_ids
                  }
                }).then(function (response) {
                  console.log("Files deleted successfully", response.data);

                  _this4.returnWithAmmendments(_this4.selected_plan, _this4.selected_status);
                })["finally"](function (response) {
                  _this4.file_ids = [];
                  _this4.allSelected = false;
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
    returnWithAmmendmentsActual: function returnWithAmmendmentsActual() {
      // const unexecuted = this.docs.filter(doc => doc.return_executed === "0");
      var unexecuted = this.docs.filter(function (doc) {
        return doc.return_executed == 0;
      });
      var confirm_message = ""; // if (unexecuted.length < 1) {
      //     alert("You need to attach a new justification letter!.");
      //     return;
      // }
      // 2. Validate: remarks must not be empty

      if (!this.remarks || this.remarks.trim() === '') {
        alert("Remarks are required before returning the plan.");
        return;
      }

      if (!this.return_request_type || this.return_request_type.trim() == '') {
        alert("You have to select a return type!");
        return;
      } // 3. Confirm action
      // confirm_message = `Are you sure you want to ${this.selected_label}?`;
      // if (!confirm(confirm_message)) {
      //     return;
      // }
      //confirm_message = `Are you sure you want to ${this.selected_label}?`;
      //if (!confirm(confirm_message)) {
      //   return;
      //}
      // Call the original method again and pass stored parameters
      // alert(this.selected_status);


      this.statusAction(this.selected_plan, this.selected_status);
      this.ReturnWithAmmendmentsModalVisible = false;
    },
    statusAction: function statusAction(revision_plan, newStatus, column) {
      var actions = {
        0: "Submit",
        "-1": "Recall",
        1: "Review",
        2: "Approve",
        "-2": "Return",
        5: "request for the return of the"
      }; // alert(revision_plan.type)

      var actionLabel = actions[newStatus];
      var typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
      var confirmMessage = "Are you sure you want to ".concat(actionLabel, " the ").concat(typeLabel, " entitled \"").concat(revision_plan.project_title, "\"?");
      var actionlabelcomplete = actionLabel + ' ' + typeLabel;
      if (!confirm(confirmMessage)) return;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.post("/status/revision/update/".concat(revision_plan.id, "/").concat(actionlabelcomplete, "/").concat(newStatus), {
        remarks: this.remarks,
        // ← SEND IT HERE
        column: column,
        return_request_type: this.return_request_type
      }, {
        preserveScroll: true
      });
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
  mounted: function mounted() {
    this.makeDraggable();
    this.makeResizable();
  },
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    makeDraggable: function makeDraggable() {
      var dialog = this.$refs.dialog;
      var header = this.$refs.header;
      var isDragging = false;
      var startX = 0;
      var startY = 0;
      var currentX = 0;
      var currentY = 0;
      header.style.cursor = 'move';
      header.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        document.body.style.userSelect = 'none';
      });
      document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        dialog.style.transform = "translate(".concat(currentX, "px, ").concat(currentY, "px)");
      });
      document.addEventListener('mouseup', function () {
        isDragging = false;
        document.body.style.userSelect = '';
      });
    },

    /* ======================
    RESIZABLE
    ====================== */
    makeResizable: function makeResizable() {
      var content = this.$refs.content;
      var handle = this.$refs.resizeHandle;
      var startX, startY, startWidth, startHeight;
      handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = content.offsetWidth;
        startHeight = content.offsetHeight;
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      });

      var resize = function resize(e) {
        var newWidth = startWidth + (e.clientX - startX);
        var newHeight = startHeight + (e.clientY - startY);
        content.style.width = Math.max(newWidth, 500) + 'px';
        content.style.height = Math.max(newHeight, 300) + 'px';
      };

      var stopResize = function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        document.body.style.userSelect = '';
      };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_4 = {
  "class": "peers"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1
};
var _hoisted_7 = {
  "class": "peers"
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

var _hoisted_9 = {
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_10 = {
  "class": "peers"
};
var _hoisted_11 = {
  "class": "peer mR-10"
};
var _hoisted_12 = {
  "class": "peer"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "p"
}, "Project Profile", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "d"
}, "Project Design", -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_13, _hoisted_14, _hoisted_15];
var _hoisted_17 = {
  key: 0,
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "masonry-sizer col-md-6"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "masonry-item w-100"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row gap-20"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_22 = {
  "class": "table-responsive"
};
var _hoisted_23 = {
  "class": "table table-sm table-borderless table-striped table-hover"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Project Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Office"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "View"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Edit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Full Edit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Version"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_25 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-eye-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
})], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
})], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
})], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
})], -1
/* HOISTED */
);

var _hoisted_30 = ["onClick", "disabled"];
var _hoisted_31 = ["onClick"];
var _hoisted_32 = ["onClick"];
var _hoisted_33 = ["onClick"];
var _hoisted_34 = ["onClick"];
var _hoisted_35 = {
  "class": "dropdown dropstart"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary btn-sm action-btn",
  type: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "data-bs-auto-close": "outside",
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

var _hoisted_37 = {
  "class": "dropdown-menu dropdown-menu-start",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_38 = {
  key: 0
};
var _hoisted_39 = {
  key: 1
};
var _hoisted_40 = {
  "class": "row justify-content-center"
};
var _hoisted_41 = {
  "class": "col-md-12"
};
var _hoisted_42 = {
  "class": "row justify-content-center"
};
var _hoisted_43 = {
  "class": "col-md-12"
};
var _hoisted_44 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_45 = ["src"];
var _hoisted_46 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_47 = ["src"];

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_49 = ["value"];

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Project Profile", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_52 = ["src"];
var _hoisted_53 = {
  "class": "peers mb-12"
};
var _hoisted_54 = {
  "class": "table"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "PROJECT TITLE: ")], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "OFFICE: ")], -1
/* HOISTED */
);

var _hoisted_57 = {
  colspan: "2"
};
var _hoisted_58 = {
  "class": "col-md-5"
};
var _hoisted_59 = {
  key: 0
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Selected Files (Pending Upload)", -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Size")], -1
/* HOISTED */
);

var _hoisted_62 = ["src"];
var _hoisted_63 = {
  colspan: "2"
};
var _hoisted_64 = {
  "class": "col-md-7"
};
var _hoisted_65 = {
  "class": "peers"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Justification Letters Uploaded", -1
/* HOISTED */
);

var _hoisted_67 = ["disabled"];
var _hoisted_68 = {
  name: "tabel",
  "class": "table table-hover table-striped"
};
var _hoisted_69 = ["checked"];

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1
/* HOISTED */
);

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Name", -1
/* HOISTED */
);

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File Size", -1
/* HOISTED */
);

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status", -1
/* HOISTED */
);

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions", -1
/* HOISTED */
);

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Return No.", -1
/* HOISTED */
);

var _hoisted_76 = ["value", "onChange"];
var _hoisted_77 = ["src"];
var _hoisted_78 = ["onClick"];

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_80 = [_hoisted_79];
var _hoisted_81 = ["href"];

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_83 = [_hoisted_82];
var _hoisted_84 = {
  "class": "table table-hover"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Remarks:", -1
/* HOISTED */
);

var _hoisted_86 = {
  colspan: "2"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "a"
}, " Administrative Order (New strategies/activities/ not included in approved project profile) ", -1
/* HOISTED */
);

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, " Appropriation Ordinance ", -1
/* HOISTED */
);

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Justification", -1
/* HOISTED */
);

var _hoisted_91 = [_hoisted_87, _hoisted_88, _hoisted_89, _hoisted_90];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  var _component_AIPModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AIPModal");

  var _component_WorkPlanModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WorkPlanModal");

  var _component_SIPModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SIPModal");

  var _component_ProjectPrintModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProjectPrintModal");

  var _component_ReturnWithAmmendmentsModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ReturnWithAmmendmentsModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p style=\"text-align: justify;\">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.\n    </p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_5, "SIP Profile")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_6, "PPA Profile "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/paps/direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Search..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$props.source == undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "btn btn-primary btn-sm",
    href: "/revision/create/".concat($props.idpaps)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Revision Plan")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :href=\"`/revision/streamlined/create/${idpaps}?source=sip`\"  "), $props.source == 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
    key: 1,
    "class": "btn btn-primary btn-sm text-white",
    onClick: $options.showSIPModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add SIP Profile")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])) : $props.source == undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    "class": "btn btn-primary btn-sm",
    href: "/revision/streamlined/create/".concat($props.idpaps)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Project Profile")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 3,
    "class": "btn btn-primary btn-sm",
    href: "/revision/create/0?source=direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Revision Plan")];
    }),
    _: 1
    /* STABLE */

  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary btn-sm mL-2 text-white",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.showFilter();
    })
  }, "Filter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.exportUsers && $options.exportUsers.apply($options, arguments);
    }),
    "class": "btn btn-primary btn-sm mL-2 text-white"
  }, "Export AIP to Excel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary btn-sm mL-2 text-white",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.showAIPModalMethod();
    })
  }, "AIP"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Filter by type: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.type_filter = $event;
    }),
    onChange: _cache[5] || (_cache[5] = function () {
      return $options.filterProjects && $options.filterProjects.apply($options, arguments);
    })
  }, _hoisted_16, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.type_filter]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.checked = $event;
    }),
    onChange: _cache[7] || (_cache[7] = function () {
      return $options.updateValue && $options.updateValue.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.checked]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  No Climate Change Expenditure (Please Click the box if your LGU does not have any climate change expenditure) ")])])]), $data.paps.paps_desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Program/Project: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.paps.paps_desc), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data, function (dat) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TITLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.project_title) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.amountStatus(dat.budget_sum, dat.imp_amount)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OFFICE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.FFUNCTION), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STATUS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '4px',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: dat.status == '-2' ? 'red' : dat.status == '-1' ? 'gray' : dat.status == '0' ? 'orange' : dat.status == '1' ? 'blue' : dat.status == '2' ? 'green' : dat.status == '7' ? 'red' : 'black'
      })
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.status == '-2' ? 'Returned' : dat.status == '-1' ? 'Saved' : dat.status == '0' ? 'Submitted' : dat.status == '1' ? 'Reviewed' : dat.status == '2' ? 'Approved' : dat.status == '7' ? 'Request for Return' : 'Unknown'), 5
    /* TEXT, STYLE */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" VIEW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "btn btn-primary btn-sm",
      href: "/revision/view/project/paps/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_26];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" EDIT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "btn btn-primary btn-sm",
      href: "/revision/edit/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_27];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "btn btn-primary btn-sm",
      href: "/revision/edit/".concat(dat.id, "?source=direct")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_28];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])], 2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FULL EDIT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /revision/streamlined/create/{{dat.idpaps}}?source={{source}}&idrevplan={{dat.id}} "), dat.idpaps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "btn btn-success btn-sm",
      href: "/revision/streamlined/create/".concat(dat.idpaps, "?source=").concat($props.source, "&idrevplan=").concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_29];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUBMIT/RECALL/GENERATE ACTIONS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Submit button when status = -1 "), dat.status == '-1' || dat.status == '-2' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      onClick: function onClick($event) {
        return $options.submitItem(dat, 0);
      },
      disabled: !$options.can_submit(dat.budget_sum, dat.imp_amount),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: $options.can_submit(dat.budget_sum, dat.imp_amount) ? 'blue' : '#9bbce0',
        // light greyish blue
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
      })
    }, " Submit ", 12
    /* STYLE, PROPS */
    , _hoisted_30)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Recall button when status = 0 "), dat.status == '0' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      onClick: function onClick($event) {
        return $options.submitItem(dat, -1);
      },
      style: {
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'red',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, " Recall ", 8
    /* PROPS */
    , _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Generate Project Design button when status = 'approved' (example) "), dat.status == 1 && parseInt(dat.number_of_clones) < 1 && dat.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      onClick: function onClick($event) {
        return $options.generateProjectDesign(dat.id, 'd');
      },
      style: {
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'green',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, " Generate Project Design ", 8
    /* PROPS */
    , _hoisted_32)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Generate Project Design button when status = 'approved' (example) "), dat.status == 1 && parseInt(dat.number_of_clones) < 1 && $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      onClick: function onClick($event) {
        return $options.generateProjectDesign(dat.id, 'sip');
      },
      style: {
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'green',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, " Generate SIP Profile ", 8
    /* PROPS */
    , _hoisted_33)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Request for Return/Justification  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" dat.return_request_status: {{ dat.return_request_status }} "), ['1', '2'].includes(dat.status) && dat.return_request_status == '-1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 4,
      onClick: function onClick($event) {
        return $options.returnWithAmmendments(dat, 5);
      },
      style: {
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'red',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, " Request for return ", 8
    /* PROPS */
    , _hoisted_34)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.number_of_clones }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" VERSIONS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.version), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TYPE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatProjectType(dat.type)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" action-dropdown  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li><Link class=\"dropdown-item\" :href=\"`/revision/edit/${dat.id}`\">Edit</Link></li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/HGDGScore/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HGDG Score")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/strategies-and-activities/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementation Schedule/ Workplan")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/budget/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Budget Requirements ")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li><Link class=\"dropdown-item\" :href=\"`/implementation/${dat.id}`\">Implementation Plan</Link></li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/team/".concat(dat.id, "/revision/plan/team")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementing Team")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li><Link class=\"dropdown-item\" :href=\"`/team/${dat.id}/revision/plan/team`\">Partnership and Sustainability</Link></li> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/EvaluationMechanismTool/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/RiskManagement/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "dropdown-item",
      href: "/Signatories/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signatories")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.setLinkModal(dat.id);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Print Comprehensive Workplan")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.openPrintProfile(dat.id);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Print Project "), dat.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_38, "Profile")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_39, "Design"))];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [dat.type === 'd' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "dropdown-item",
      href: "/cdf/".concat(dat.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cash Disbursements Forecast ")];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
    next: $props.data.next_page_url,
    prev: $props.data.prev_page_url
  }, null, 8
  /* PROPS */
  , ["next", "prev"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.total) + " entries ", 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ rev_plan_selected }} ")]), $data.showAIPModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AIPModal, {
    key: 1,
    onCloseModalEvent: $options.hideAIPModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ aip_printLink }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: $data.aip_printLink,
        style: {
          "width": "100%",
          "height": "500px"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_45)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link :href=\"aip_printLink_excel\" class=\"btn btn-primary text-white\">\n                    Export to Excel\n                </Link> {{ aip_printLink_excel }}\n                <br>\n                {{ aip_printLink }}<br>\n            <button @click=\"exportUsers\" class=\"btn btn-primary text-white\">\n                    Export to Excel\n            </button> ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.WorkPlanModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WorkPlanModal, {
    key: 2,
    onCloseModalEvent: $options.toggleWorkPlanModal,
    title: "Comprehensive Workplan/Schedule"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ cmp_link }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: $data.cmp_link,
        style: {
          "width": "100%",
          "height": "500px"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_47)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.SIPModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SIPModal, {
    key: 3,
    onCloseModalEvent: _cache[9] || (_cache[9] = function ($event) {
      return $data.SIPModalVisible = false;
    }),
    title: "SIP Profile"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Select PAPS: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selected_sip_paps) + " ", 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.selected_sip_paps = $event;
        }),
        "class": "form-select"
      }, [_hoisted_48, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paps, function (pap) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          value: pap.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pap.paps_desc), 9
        /* TEXT, PROPS */
        , _hoisted_49);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selected_sip_paps]]), $props.source == 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: 0,
        "class": "btn btn-primary btn-sm",
        href: "/revision/streamlined/create/".concat($data.selected_sip_paps, "?source=sip"),
        disabled: !$data.selected_sip_paps
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add SIP Profile ")];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href", "disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.printProfileVIsible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProjectPrintModal, {
    key: 4,
    onCloseModalEvent: _cache[10] || (_cache[10] = function ($event) {
      return $data.printProfileVIsible = false;
    }),
    title: "Printed Output"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ aip_printLink }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: $data.ppa_link,
        style: {
          "width": "100%",
          "height": "500px"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_52)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ppa_link}} ")];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ReturnWithAmmendmentsModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ReturnWithAmmendmentsModal, {
    key: 5,
    onCloseModalEvent: $options.hideReturnWithAmmendmentsModal,
    title: "REQUEST FOR RETURN"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selected_plan.project_title), 1
      /* TEXT */
      )]), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selected_plan.FFUNCTION), 1
      /* TEXT */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Warnings "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"show_warnings\">\n                                <div v-if=\"!isWithinLimit()\" class=\"text-danger mt-2\">\n                                ❌ Total file size must not exceed 10 MB.\n                                </div>\n                                <div v-if=\"!isWithinCount()\" class=\"text-danger mt-2\">\n                                ❌ You can only upload a maximum of 2 files.\n                                </div>\n                            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"!(isWithinLimit() && isWithinCount())\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        multiple: "",
        onChange: _cache[11] || (_cache[11] = function () {
          return $options.handleFiles && $options.handleFiles.apply($options, arguments);
        }),
        accept: "application/pdf",
        ref: "fileInput"
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"!(isWithinLimit() && isWithinCount())\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[12] || (_cache[12] = function () {
          return $options.uploadFiles && $options.uploadFiles.apply($options, arguments);
        }),
        "class": "btn btn-primary text-white"
      }, "Upload"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[13] || (_cache[13] = function () {
          return $options.cancelFiles && $options.cancelFiles.apply($options, arguments);
        }),
        "class": "btn btn-danger text-white"
      }, "Cancel ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [$data.files.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [_hoisted_61, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.files, function (file, index) {
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
        , _hoisted_62)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name) + " ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name.split('.').pop()) + " ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatFileSize(file.size)) + " ", 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[14] || (_cache[14] = function () {
          return $options.deleteFiles && $options.deleteFiles.apply($options, arguments);
        }),
        "class": "btn btn-danger btn-sm mL-2 text-white",
        disabled: !$data.file_ids.length
      }, " Delete Selected ", 8
      /* PROPS */
      , _hoisted_67)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"previewFile(file)\" class=\"btn btn-primary text-white\">Preview</button>&nbsp; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /files/proxy-download "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" target=\"_blank\" rel=\"noopener noreferrer\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a :href=\"`http://122.53.120.18:8067/images/${file.filename}`\" class=\"btn btn-success\">Download</a>&nbsp; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" http://122.53.120.18:8067/images/{{file.filename}} - /file-upload/download/ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p> http://192.168.80.89:8073//file-upload/download/{{file.id}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        checked: $data.allSelected,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $data.allSelected = $event;
        }),
        onChange: _cache[16] || (_cache[16] = function ($event) {
          return $options.toggleSelectAll($event);
        })
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_69), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.allSelected]])]), _hoisted_70, _hoisted_71, _hoisted_72, _hoisted_73, _hoisted_74, _hoisted_75])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.docs, function (file) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: file.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "checkbox",
          value: file.id,
          onChange: function onChange($event) {
            return $options.toggleFileSelection(file.id, $event);
          },
          "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
            return $data.file_ids = $event;
          })
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_76), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.file_ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ file }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p>http://122.53.120.18:8067/images/{{file.filepath}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: $options.getFileIcon(file),
          alt: "file preview",
          style: {
            "width": "30px",
            "height": "30px",
            "object-fit": "cover"
          }
        }, null, 8
        /* PROPS */
        , _hoisted_77)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.filename), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number(file.file_size / 1024, 2, true)) + " KB ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: file.return_executed === '0' ? '#d4f8d4' : '#f8d4d4'
          })
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.return_executed === "0" ? 'New' : 'Used'), 5
        /* TEXT, STYLE */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.previewFile(file);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "Preview"
        }, _hoisted_80, 8
        /* PROPS */
        , _hoisted_78), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" download "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: "/movs/download/".concat(file.id),
          "class": "inline-flex items-center",
          title: "Download",
          target: "_blank"
        }, _hoisted_83, 8
        /* PROPS */
        , _hoisted_81), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\n                                                @click=\"deleteFile(file.id)\"\n                                                class=\"p-1 rounded-full bg-transparent hover:bg-red-100 border-0\"\n                                                data-toggle=\"tooltip\"\n                                                title=\"Delete\"\n                                            >\n                                                <svg\n                                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                                    width=\"20\"\n                                                    height=\"20\"\n                                                    fill=\"red\"\n                                                    class=\"bi bi-trash-fill\"\n                                                    viewBox=\"0 0 16 16\"\n                                                >\n                                                    <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0\"/>\n                                                </svg>\n                                            </button> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "0" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.return_batch), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $data.remarks = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.remarks]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Type: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
          return $data.return_request_type = $event;
        })
      }, _hoisted_91, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.return_request_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[20] || (_cache[20] = function ($event) {
          return $options.returnWithAmmendmentsActual();
        }),
        style: {
          padding: '4px 10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: 'red',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold'
        }
      }, " REQUEST FOR RETURN ")])])])])])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" src: {{source}} fdfsdf ")], 64
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
  "class": "modal-dialog modal-xl draggable-dialog",
  ref: "dialog"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content resizable-content",
  ref: "content"
};
var _hoisted_6 = {
  "class": "modal-header draggable-header",
  style: {
    "background-color": "#030014"
  },
  ref: "header"
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

var _hoisted_12 = {
  "class": "resize-handle",
  ref: "resizeHandle"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 100% !important; height: 40% !important; \" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
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
  }, _hoisted_9)], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🔽 Resize handle "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, null, 512
  /* NEED_PATCH */
  )], 512
  /* NEED_PATCH */
  )])], 512
  /* NEED_PATCH */
  )])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.row-centered {\n                text-align:center;\n}\n.col-centered {\n                display:inline-block;\n                float:none;\n                text-align:left;\n                margin-right:-4px;\n}\n.pos{\n                position: top;\n                top: 240px;\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-0e4809fa] {\r\n      display: block;\n}\n.modal[data-v-0e4809fa] {\r\n        z-index: 9999 !important;\n}\n.modal[data-v-0e4809fa] {\r\n        display: block;\r\n        z-index: 9999 !important;\n}\n.draggable-header[data-v-0e4809fa] {\r\n        cursor: move;\n}\n.draggable-dialog[data-v-0e4809fa] {\r\n        transition: none;\n}\n.resizable-content[data-v-0e4809fa] {\r\n        position: relative;\r\n        min-width: 500px;\r\n        min-height: 300px;\n}\r\n\r\n    /* .draggable-header {\r\n        cursor: move;\r\n    } */\n.resize-handle[data-v-0e4809fa] {\r\n        position: absolute;\r\n        width: 16px;\r\n        height: 16px;\r\n        right: 0;\r\n        bottom: 0;\r\n        cursor: se-resize;\r\n        background: transparent;\n}\r\n  ", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_2431bad9_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=2431bad9&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_2431bad9_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_2431bad9_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/RevisionPlans/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2431bad9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2431bad9 */ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_2431bad9_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=2431bad9&lang=css */ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_2431bad9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/Index.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0e4809fa"],['__file',"resources/js/Shared/ModalDynamicTitle.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_january_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e8c5b748"],['__file',"resources/js/Shared/PrintModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2431bad9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2431bad9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=2431bad9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=template&id=2431bad9");


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

/***/ "./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_2431bad9_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=2431bad9&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/Index.vue?vue&type=style&index=0&id=2431bad9&lang=css");


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