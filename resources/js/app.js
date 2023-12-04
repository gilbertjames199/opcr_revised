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
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

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
                        get jasper_ip() {
                            var lo = "192.168.6.23:8080/";
                            var gl = "122.54.19.171:8080/";
                            var nw = "122.53.120.27:8080/"
                            return nw;
                        },
                    }
                },
                methods: {
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
