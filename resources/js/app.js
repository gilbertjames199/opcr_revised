require('./bootstrap');

import { createApp, h, Vue } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import Layout from "./Shared/Layout"
import Notification from "./Shared/Notification"
import { InertiaProgress } from '@inertiajs/progress'
//Vue Search Select
import 'vue-search-select/dist/VueSearchSelect.css'

//Card modal
//.component('CardModal', CardModal)
import CardModal from "./Shared/CardModal"

// FileUpload
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

//VUe-select
//import Vue from 'vue';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import VueSelect from 'vue-select';

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
import Quill from 'quill'; // Import core Quill
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css';

Quill.register({
    'modules/better-table': QuillBetterTable,
}, true);
window.Quill = Quill

//Vue Multiselect 3
import Multiselect from '@vueform/multiselect';

//VUE Sweetalert
import VueSweetalert2 from 'vue-sweetalert2';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform
);
//.use(yearPicker)
const setFavicon = (iconUrl) => {
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement("link")
        link.rel = "icon"
        document.head.appendChild(link)
    }
    link.href = iconUrl
}

// ✅ Set your favicon
setFavicon('/images/OPCR_ICON.png')
// .use(VTooltip)
createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
        page.layout ??= Layout
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueSweetalert2)
            .component("multiselect", Multiselect)
            .component("Link", Link)
            .component("Head", Head)
            .component('CardModal', CardModal)
            .component("Notification", Notification)
            .component("FilePond", FilePond)
            .component("v-select", vSelect)
            .component('QuillEditor', QuillEditor)
            .mixin({
                data() {
                    return {
                        my_years: [
                            "2000",
                            "2001",
                            "2002",
                            "2003",
                            "2004",
                            "2005",
                            "2006",
                            "2007",
                            "2008",
                            "2009",
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017",
                            "2018",
                            "2019",
                            "2020",
                            "2021",
                            "2022",
                            "2023",
                            "2024",
                            "2025",
                            "2026",
                            "2027",
                            "2028",
                            "2029",
                            "2030",
                            "2031",
                            "2032",
                            "2033",
                            "2034",
                            "2035",
                            "2036",
                            "2037",
                            "2038",
                            "2039",
                            "2040",
                            "2041",
                            "2042",
                            "2043",
                            "2044",
                            "2045",
                            "2046",
                            "2047",
                            "2048",
                            "2049",
                            "2050",
                            "2051",
                            "2052",
                            "2053",
                            "2054",
                            "2055",
                            "2056",
                            "2057",
                            "2058",
                            "2059",
                            "2060",
                            "2061",
                            "2062",
                            "2063",
                            "2064",
                            "2065",
                            "2066",
                            "2067",
                            "2068",
                            "2069",
                            "2070",
                            "2071",
                            "2072",
                            "2073",
                            "2074",
                            "2075",
                            "2076",
                            "2077",
                            "2078",
                            "2079",
                            "2080",
                            "2081",
                            "2082",
                            "2083",
                            "2084",
                            "2085",
                            "2086",
                            "2087",
                            "2088",
                            "2089",
                            "2090",
                            "2091",
                            "2092",
                            "2093",
                            "2094",
                            "2095",
                            "2096",
                            "2097",
                            "2098",
                            "2099",
                            "2100",
                        ],
                        measurement_units: [
                            'meter', 'kilometer', 'mile', 'yard', // Units of measure for distance
                            'centimeter', 'inch', 'foot', 'meter', // Units of measure for length
                            'gram', 'kilogram', 'ounce', 'pound', // Units of measure for weight
                            'milliliter', 'liter', 'gallon', 'cubic meter', // Units of measure for volume
                            'volt', 'kilovolt', 'megavolt' // Units of measure for voltage
                            // Add other measurement units as needed
                        ],
                        comparison_operators: [
                            '<', '>', '≥', '≤'
                        ],
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
                            "1121": "01-03-009",
                        },
                        getFirstFourChars(str) {
                            return str.slice(0, 4);
                        },
                        sectors: {
                            "General Public Services Sector": [
                                "",
                                "Executive Services",
                                "Legislative Services",
                                "Planning and Development Coordination Services",
                                "Budgeting Services",
                                "Treasury Services",
                                "Accounting Services",
                                "Administrative Services",
                                "Civil Registry Services",
                                "General Services",
                                "Assessment of Real Property Services",
                                "Auditing Services | Information Services",
                                "Legal Services | Prosecution Services",
                                "Administration of Justice Services",
                                "Land Registration Services",
                                "Claim Registration Services",
                                "Police Services",
                                "Fire Protection Services",
                                "Repair and Maintenance of Government Facilities"
                            ],
                            "Social Services Sector": [
                                "",
                                "Education and Manpower Development",
                                "Public Education Services",
                                "Medical Subsidiary Services",
                                "Manpower Development Services",
                                "Sports Center, Athletic Field, and Playground Maintenance Service cultural",
                                "Project Services",
                                "Cultural/Conference/Convention Center",
                                "Operation Services",
                                "Health",
                                "Health Services Field Projects (Immunization, Inoculation, Blood Donor Services)",
                                "Day Care Clinic",
                                "Hospital Services",
                                "Chest Clinic",
                                "Housing and Community Development",
                                "Housing Projects",
                                "Sanitary Services",
                                "Street Cleaning",
                                "Garbage Collection",
                                "Sewerage and Drainage",
                                "Street Lighting",
                                "Community Development Services"
                            ],
                            "Economic Services": [
                                "",
                                "Agricultural Services",
                                "Veterinary Services",
                                "Natural Resources Services",
                                "Architectural Services",
                                "Engineering Services",
                                "Economic Enterprises and Public Operation Services",
                                "Tourism Services"
                            ],
                            "Other Services": [
                                // "Other Services"
                            ]
                        },
                        isPreviewable(filename) {
                            // const ext = filename.split('.').pop().toLowerCase()
                            const ext = filename
                            // 'jpg', 'jpeg', 'png', 'gif',
                            return ['pdf', 'doc', 'docx', 'dot', 'dotx', 'dotm', 'xls', 'xlsx', 'xlsm',
                                'xlsb', 'xlt', 'xltx', 'xltm', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp',
                                'mp3', 'mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'
                            ].includes(ext)
                        },
                        isDragging: false,
                        dragOffsetX: 0,
                        dragOffsetY: 0,
                    }
                },
                methods: {
                    goBack() {
                        window.history.back();  // or this.$router.go(-1)
                    },
                    cleanVariable(event) {
                        this.variable = event.target.value.replace(/[^0-9]/g, "");
                    },
                    NumbersOnly(evt) {
                        let stringValue = evt.target.value.toString()
                        let regex = /^\d*(\.\d{1,2})?$/

                        evt = (evt) ? evt : window.event;
                        var charCode = (evt.which) ? evt.which : evt.keyCode;
                        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                            evt.preventDefault();;
                        } else {
                            return true;
                        }
                        evt.toFixed(2)
                    },
                    format_number(number, num_decimals, include_comma) {

                        return number.toLocaleString('en-US', { useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals });
                    },
                    format_number_conv(number, num_decimals, include_comma) {

                        var numm = parseFloat(number);
                        return numm.toLocaleString('en-US', { useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals });


                    },
                    getStatus(stat_num) {
                        if (typeof stat_num !== 'string') {
                            stat_num = String(stat_num);
                        }
                        if (stat_num === '-2') {
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
                    GAD_remark(val) {
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
                    yearNow() {
                        const d = new Date();
                        let year = d.getFullYear();
                        return year;
                    },
                    year_values() {
                        var a = 90;
                        var b = 30;
                        b = b + createApp;

                        return ["2000",
                            "2001",
                            "2002",
                            "2003",
                            "2004",
                            "2005",
                            "2006",
                            "2007",
                            "2008",
                            "2009",
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017",
                            "2018",
                            "2019",
                            "2020",
                            "2021",
                            "2022",
                            "2023",
                            "2024",
                            "2025",
                            "2026",
                            "2027",
                            "2028",
                            "2029",
                            "2030",
                            "2031",
                            "2032",
                            "2033",
                            "2034",
                            "2035",
                            "2036",
                            "2037",
                            "2038",
                            "2039",
                            "2040",
                            "2041",
                            "2042",
                            "2043",
                            "2044",
                            "2045",
                            "2046",
                            "2047",
                            "2048",
                            "2049",
                            "2050",
                            "2051",
                            "2052",
                            "2053",
                            "2054",
                            "2055",
                            "2056",
                            "2057",
                            "2058",
                            "2059",
                            "2060",
                            "2061",
                            "2062",
                            "2063",
                            "2064",
                            "2065",
                            "2066",
                            "2067",
                            "2068",
                            "2069",
                            "2070",
                            "2071",
                            "2072",
                            "2073",
                            "2074",
                            "2075",
                            "2076",
                            "2077",
                            "2078",
                            "2079",
                            "2080",
                            "2081",
                            "2082",
                            "2083",
                            "2084",
                            "2085",
                            "2086",
                            "2087",
                            "2088",
                            "2089",
                            "2090",
                            "2091",
                            "2092",
                            "2093",
                            "2094",
                            "2095",
                            "2096",
                            "2097",
                            "2098",
                            "2099",
                            "2100",
                        ];

                    },
                    allCaps(val) {
                        return val.toUpperCase();
                    },
                    formatMonthYear(date_value) {
                        const dateParts = date_value.split('-');
                        const year = dateParts[0];
                        const month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', { month: 'long' });

                        return `${month} ${year}`;
                    },
                    formatMonthYear2(date_value) {
                        // Make sure the value exists
                        if (!date_value) return '';

                        // Split the date string
                        const [year, month] = date_value.split('-');

                        // Create a date object (month index is zero-based)
                        const dateObj = new Date(year, month - 1);

                        // Format month name
                        const monthName = dateObj.toLocaleString('en-US', { month: 'long' });

                        return `${monthName} ${year}`;
                    },
                    formatMonth(date_value) {
                        const dateParts = date_value.split('-');
                        const year = dateParts[0];
                        const month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', { month: 'long' });

                        return `${month}`;
                    },
                    getImagePath(filename) {
                        return `/images/${filename}`;
                    },
                    getSum(n1, n2) {
                        var n3 = parseFloat(n1) + parseFloat(n2);
                        //alert(n1);
                        return this.format_number_conv(n3, 2, true);
                    },
                    getDifference(n1, n2) {
                        var n3 = parseFloat(n1) - parseFloat(n2);
                        //alert(n1+" --- ");
                        return this.format_number_conv(n3, 2, true);
                    },
                    truncateText(text, limit) {
                        const words = text.split(' ');
                        if (words.length > limit) {
                            return words.slice(0, limit).join(' ') + '...'; // Add ellipsis for truncation
                        } else {
                            return text;
                        }
                    },
                    getPlainTextWithoutTags(htmlString) {
                        // Use a regular expression to remove HTML tags
                        return htmlString.replace(/<[^>]+>/g, '');
                    },
                    formatDate(isoDate) {
                        const date = new Date(isoDate);
                        const options = { year: 'numeric', month: 'long', day: '2-digit' };
                        return date.toLocaleDateString('en-US', options);
                    },
                    getPreUploadFileIcon(file_type) {
                        // if (!file?.file_type) {
                        //   return '/images/icons/file.png'; // default if missing type
                        // }

                        const type = file_type.toLowerCase();

                        const excelTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm'];
                        const wordTypes = ['doc', 'docx', 'dot', 'dotx', 'dotm'];
                        const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
                        const pptTypes = ['ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'];
                        const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];

                        if (excelTypes.includes(type)) {
                            return '/images/icons/excel.png';
                        }
                        else if (type === 'pdf') {
                            return '/images/icons/pdf.png';
                        }
                        else if (wordTypes.includes(type)) {
                            return '/images/icons/word.png';
                        }
                        else if (pptTypes.includes(type)) {
                            return '/images/icons/ppt.png';
                        }
                        else if (multimediaTypes.includes(type)) {
                            return '/images/icons/video.png';
                        }
                        else if (imageTypes.includes(type)) {
                            return `/images/icons/images.png`;
                        }
                        else {
                            return '/images/icons/file.png'; // default icon
                        }
                    },
                    getStatus(number_status) {
                        const status = parseFloat(number_status);

                        if (status === -1) return 'Saved';
                        if (status === 0) return 'Submitted';
                        if (status === 1) return 'Reviewed';
                        if (status === 2) return 'Approved';

                        return 'unknown';
                    },
                    //DRAGGABLE PANELS
                    startDrag(e) {
                        if (e.target.closest("button")) return; // do NOT drag when clicking buttons

                        this.isDragging = true;
                        this.dragOffsetX = e.clientX - this.$refs.dragPanel.offsetLeft;
                        this.dragOffsetY = e.clientY - this.$refs.dragPanel.offsetTop;

                        document.addEventListener("mousemove", this.onDrag);
                        document.addEventListener("mouseup", this.stopDrag);
                    },
                    onDrag(e) {
                        if (!this.isDragging) return;

                        this.$refs.dragPanel.style.left = e.clientX - this.dragOffsetX + "px";
                        this.$refs.dragPanel.style.top = e.clientY - this.dragOffsetY + "px";
                    },
                    stopDrag() {
                        this.isDragging = false;
                        document.removeEventListener("mousemove", this.onDrag);
                        document.removeEventListener("mouseup", this.stopDrag);
                    }

                }
            })
            .mount(el)
    },
    title: title => 'PPA: ' + title
})

InertiaProgress.init({
    delay: 250,
    color: '#29d',
    includeCSS: true,
    showSpinner: false,
})
