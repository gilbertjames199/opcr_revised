require('./bootstrap');

import { createApp, h, Vue } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import Layout  from "./Shared/Layout"
import Notification  from "./Shared/Notification"
import { InertiaProgress } from '@inertiajs/progress'

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

//Bootstrap Vue
//import { BootstrapVue } from 'bootstrap-vue';
/*.use(BootstrapVue)
      .use(IconsPlugin) */

//Vue Multiselect 3
import Multiselect from '@vueform/multiselect';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform
);

createInertiaApp({
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;
    page.layout ??= Layout
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("multiselect",Multiselect)
      .component("Link", Link)
      .component("Head", Head)
      .component('CardModal', CardModal)
      .component("Notification", Notification)
      .component("FilePond", FilePond)
      .component("v-select", vSelect)
      .mixin({
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
            format_number(number, num_decimals, include_comma)
            {

                return number.toLocaleString('en-US', {useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals});
            },
            format_number_conv(number, num_decimals, include_comma)
            {
                var numm=parseFloat(number);
                return numm.toLocaleString('en-US', {useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals});
            },
            yearNow(){
                const d = new Date();
                let year = d.getFullYear();
                return year;
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
