<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Annual Investment Plan</h3>

            <Link :href="`/annual-investment-plans`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <h6>Programs, Projects, and Activities (PAPS) Selected:</h6>
        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">

                <!-- <div hidden>
                    <label for="">Chart of Accounts</label>
                    <div @keyup.enter="addAccount($event)">
                        <multiselect :options="accounts" :searchable="true" v-model="chart_selected" @select="setCode"
                            :value="chart_selected" @search-change="typed = $event">
                        </multiselect>
                    </div>
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{ form.errors.object_of_expenditure }}</div>

                    <label>ACCOUNT CODE </label>
                    <input type="number" class="form-control" v-model="form.account_code" @change="searchByAccountCode" />
                    <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div>

                    <label for="">Object of Expenditure</label>
                    <input type="text" v-model="form.object_of_expenditure" class="form-control"
                        autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{
                        form.errors.object_of_expenditure }}</div>
                </div> -->
                <!--*****************************-->
                <label>YEAR</label>
                <input type="number" class="form-control" v-model="form.year" />
                <div class="fs-6 c-red-500" v-if="form.errors.year">{{ form.errors.year }}</div>

                <label>OFFICE</label>
                <!-- {{ form.FFUNCCOD }} -->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option></option>
                    <option v-for="functione in functions" :value="functione.FFUNCCOD">{{ functione.FFUNCTION }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label>RAAO TYPE</label>
                <!-- {{ form.raaotype }} -->
                <select class="form-control" v-model="form.raao_type" ref="raaoSelect" @click="filterProgram">
                    <option></option>
                    <option value="1">Personnel Services</option>
                    <option value="2">Maintenance, Operating, and Other Expenses</option>
                    <option value="3">Capital Outlay</option>
                    <option value="4">Programs</option>
                    <option value="5">Projects</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.raao_type">{{ form.errors.raao_type }}</div>

                <label>PROGRAM</label>&nbsp;
                <!-- <br>{{ form.idprogram }} -->
                <!-- {{ form }} @keyup.enter="searchPrograms($event)"-->
                <div>
                    <multiselect :options="formattedPrograms" :searchable="true" v-model="form.program_id" label="label"
                        track-by="label" >
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.program_id">{{ form.errors.program_id }}</div>

                <label>AIP Code</label>&nbsp;
                <input class="form-control" v-model="form.aip_code" type="text"/>
                <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div>

                <label>Source</label>&nbsp;
                <select class="form-select" v-model="form.source">
                    <option>AIP</option>
                    <option>SIPA</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.source">{{ form.errors.source }}</div>

                <label>Planned PS</label>&nbsp;
                <input class="form-control" v-model="form.planned_ps" type="number"/>
                <div class="fs-6 c-red-500" v-if="form.errors.planned_ps">{{ form.errors.planned_ps }}</div>

                <label>Planned MOOE</label>&nbsp;
                <input class="form-control" v-model="form.planned_mooe" type="number"/>
                <div class="fs-6 c-red-500" v-if="form.errors.planned_mooe">{{ form.errors.planned_mooe }}</div>

                <label>Planned FE</label>&nbsp;
                <input class="form-control" v-model="form.planned_fe" type="number"/>
                <div class="fs-6 c-red-500" v-if="form.errors.planned_fe">{{ form.errors.planned_fe }}</div>

                <label>Planned Capital Outlay</label>&nbsp;
                <input class="form-control" v-model="form.planned_co" type="number"/>
                <div class="fs-6 c-red-500" v-if="form.errors.planned_co">{{ form.errors.planned_co }}</div>

                <label>Planned Total</label>&nbsp;
                <input class="form-control" v-model="form.planned_total" type="number"/>
                <div class="fs-6 c-red-500" v-if="form.errors.planned_total">{{ form.errors.planned_total }}</div>


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3 text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
                <!-- {{ aip }}
                <br/>
                {{ total_budget_year }} -->
                <!-- trte {{ formattedPrograms }} -->
                <!-- {{ dt_ooes }} -->
            </form>
        </div>

    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select';
import Select2 from 'vue-select2';
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        //paps: Object,
        //pap1: Object,
        editData: Object,
        sectors: Object,
        accounts: Object,
        codes: Object,
        //aip: Object,
        //total_budget_year: Object,
        functions: Object,
        programs: Object,
        ooes: Object
    },
    components: {
        //BootstrapModalNoJquery,
        Select2,
        ModelSelect,
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

    },
    data() {
        return {
            submitted: false,
            chart_selected: "",
            pap_selected: "",
            prog_selected: "",
            total: 0,
            idprogram_selected: "0",
            program_typed: "",
            form: useForm({
                // idooe: "",
                year: "",
                FFUNCCOD: "",
                FFUNCTION: "",
                raao_type: "",
                program_id: "",
                aip_code: "",
                source: "",
                planned_ps: "",
                planned_mooe: "",
                planned_fe: "",
                planned_co: "",
                planned_total: "",
                approved_ps: "",
                approved_mooe: "",
                approved_fe: "",
                approved_co: "",
                approved_total: "",
                id: null
                // object_of_expenditure: "",
                // account_code: "",
                // past_year: 0,
                // first_sem: 0,
                // second_sem: 0,
                // budget_year: "",
                // idpaps: "",
                // category: "",
                // GAD: "",
                // CCET: "",

            }),
            pageTitle: "",
            data_programs: [],
            dt_prog: [],
            data_ooes: [],
            dt_ooes: [],
            dt_ooes_length: [],
        };
    },
    computed: {
        // formattedOOEs() {
        //     let dataOoes = this.dt_ooes;
        //     return this.dt_ooes.map((dataOoes) => ({
        //         value: dataOoes.recid,
        //         label: dataOoes.FOOEDESC,
        //         FACTCODE: dataOoes.FACTCODE,
        //         program_id: dataOoes.idprogram,
        //         FFUNCCOD: dataOoes.FFUNCCOD,
        //         sem1: dataOoes.sem1,
        //         sem2: dataOoes.sem2,
        //         past_year: dataOoes.past_year
        //     }));
        // },
        formattedPrograms() {
            let dataPrograms = this.programs;
            if (this.form.raao_type) {
                dataPrograms = dataPrograms.filter((program) => program.ftype === this.form.raao_type);
            }
            if (this.form.FFUNCCOD) {
                dataPrograms = dataPrograms.filter((program) => program.FFUNCCOD === this.form.FFUNCCOD);
            }

            return dataPrograms.map((program) => ({
                value: program.recid,
                label: program.FPROGRAM,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },
        getTotal12() {
            var f1 = parseFloat(this.form.first_sem);
            var f2 = parseFloat(this.form.second_sem);
            var tot = f1 + f2;
            var tat = this.format_number_conv(tot, 2, true);
            return tat;
        },
        computed_pastyear() {
            // var p_year = this.format_number_conv(this.form.past_year,2,true);
            // if(isNaN(p_year)){
            //     return "0.00"
            // }else{
            //     return this.format_number_conv(this.form.past_year,2,true);
            // }
            return this.format_number_conv(this.form.past_year, 2, true);
        },
        computed_sem1() {
            //var s1 = parseFloat(this.form.sem1);
            return this.format_number_conv(this.form.first_sem, 2, true);
            //return this.format_number_conv(s1,2,true);
            //return isNaN(s1) ? '0.00' : s1;

        },
        computed_sem2() {
            return this.format_number_conv(this.form.second_sem, 2, true);
        }
    },
    mounted() {
        //this.setCurrentYear()
        this.dt_prog = this.programs
        this.data_programs = this.programs.map(programs => programs.FPROGRAM);
        this.dt_ooes = [];
        this.dt_ooes = this.ooes;
        // this.pap_selected = this.pap1.paps_desc
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"

            this.form.year = this.editData.year
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.raao_type = this.editData.raao_type
            this.filterProgram();
            this.form.program_id = this.editData.program_id
            this.form.aip_code=this.editData.aip_code
            this.form.source=this.editData.source
            this.form.planned_ps=this.editData.planned_ps
            this.form.planned_mooe=this.editData.planned_mooe
            this.form.planned_fe=this.editData.planned_fe
            this.form.planned_co=this.editData.planned_co
            this.form.planned_total=this.editData.planned_total
            this.form.approved_ps=this.editData.approved_ps
            this.form.approved_mooe=this.editData.approved_mooe
            this.form.approved_fe=this.editData.approved_fe
            this.form.approved_co=this.editData.approved_co
            this.form.approved_total=this.editData.approved_total
            this.form.final_tag=this.editData.final_tag
            //this.loadOOE();
            // this.form.idooe = this.editData.idooe
            // this.form.account_code = this.editData.account_code
            // this.form.past_year = this.editData.past_year
            // this.form.first_sem = this.editData.first_sem
            // this.form.second_sem = this.editData.second_sem
            // this.form.budget_year = this.editData.budget_year
            // this.form.idpaps = this.editData.idpaps
            // this.form.category = this.editData.category
            // this.form.GAD = this.editData.GAD
            // this.form.CCET = this.editData.CCET
            this.form.id = this.editData.id
            // this.form.object_of_expenditure = this.editData.object_of_expenditure
            // this.searchByAccountCodeForEditMounted();
        } else {
            this.pageTitle = "Create "
            // this.form.idpaps = this.pap1.id
            this.setCurrentYear()
        }

    },

    methods: {
        submit() {
            if(this.editData!==undefined){
                this.form.patch("/annual-investment-plans/"+this.editData.id, this.form);

            }else{
                this.form.post("/annual-investment-plans/", this.form);
            }
            // this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            // var aip_mooe = parseFloat(this.aip.MOOE);
            // var aip_ps = parseFloat(this.aip.PS);
            // var aip_co = parseFloat(this.aip.CO);
            // var app_mooe = parseFloat(this.total_budget_year.total_approp_mooe) + parseFloat(this.form.budget_year);
            // var app_ps = parseFloat(this.total_budget_year.total_ps_approp) + parseFloat(this.form.budget_year);
            // var app_co = parseFloat(this.total_budget_year.total_co_approp) + parseFloat(this.form.budget_year);
            // var addable = true;
            //var adval=0;
            // var possible_difference = 0;
            // var maxi = parseFloat(0);
            // if (this.form.category == 'Capital Outlay') {
            //     if (app_co > aip_co) {
            //         addable = false;
            //         // possible_difference=aip_co - parseFloat(this.total_budget_year.total_co_approp);
            //         maxi = parseFloat(aip_co);
            //     }
            // }
            // if (this.form.category == 'Maintenance, Operating, and Other Expenses') {
            //     if (app_mooe > aip_mooe) {
            //         maxi = parseFloat(aip_mooe);
            //         addable = false;
            //         // possible_difference=aip_mooe - parseFloat(this.total_budget_year.total_approp_mooe);
            //     }
            // }
            // if (this.form.category == 'Personnel Services') {
            //     if (app_ps > aip_ps) {
            //         maxi = parseFloat(app_ps);
            //         addable = false;
            //         // possible_difference=aip_ps - parseFloat(this.total_budget_year.total_ps_approp);
            //     }
            // }

            // if (addable == false) {
            //     if (this.editData !== undefined) {
            //         this.form.patch("/appropriations/", this.form);
            //     } else {
            //         alert("The maximum allowable value for budget year is only " + maxi + ". ")
            //     }
            // } else {
            //     if (this.editData !== undefined) {
            //         this.form.patch("/appropriations/", this.form);
            //     } else {
            //         // alert("Sample");
            //         var url = "/appropriations/store"
            //         // alert('for store '+url);
            //         this.form.post(url);
            //     }
            // }

        },
        addAccount() {
            // if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
            // this.selected = this.typed;
            alert('addAccount');
        },

        searchPrograms() {
            //this.program_typed = searchText;
            //alert(this.program_typed)
            // const matchedPrograms = this.formattedPrograms.filter(
            //     (program) => program.label.toLowerCase().includes(this.typed.toLowerCase())
            // );

            // if (matchedPrograms.length > 0) {
            //     // Set the first matching program's value (recid) to form.idprogram
            //     this.form.idprogram = matchedPrograms[0].value;
            // } else {
            //     // Handle the case when there are no matching programs
            //     // For example, you can clear the form.idprogram or show an error message
            //     this.form.idprogram = null;
            // }
            //alert(typed);
            // if (!this.formattedPrograms.includes(this.typed)) this.formattedPrograms.push(this.typed);
            // this.selected = this.typed;
            // Find the program whose label matches the typed search text (case-insensitive)
            // const matchedProgram = this.formattedPrograms.find(
            //     (formattedPrograms) => formattedPrograms.label.toLowerCase() === this.typed.toLowerCase()
            // );

            // if (matchedProgram) {
            //     // Set the selected program's value (recid) to form.idprogram
            //     this.form.idprogram = matchedProgram.value;
            // } else {
            //     // Handle the case when the search text doesn't match any program
            //     // You may want to add some error handling here or reset the value
            //     this.form.idprogram = null;
            // }

        },
        setCode() {
            var ind = this.accounts.indexOf(this.chart_selected);
            this.form.account_code = this.codes[ind];
            this.form.object_of_expenditure = this.chart_selected
            // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
        },
        searchByAccountCode() {
            var ind = this.codes.indexOf(this.form.account_code.toString());
            this.chart_selected = this.accounts[parseInt(ind)];
            this.form.object_of_expenditure = this.chart_selected

        },
        searchByAccountCodeForEditMounted() {
            var ind = this.codes.indexOf(this.form.account_code.toString());
            this.chart_selected = this.accounts[parseInt(ind)];

        },
        setCurrentYear() {

            var yr = new Date().getFullYear()
            this.form.year = parseFloat(yr) + 1;
        },
        filterProgram() {
            // this.form.idprogram=null;
            // this.form.idooe=null;
            const selectElement = this.$refs.raaoSelect;
            this.form.category = selectElement.options[selectElement.selectedIndex].text;

        },
        // loadOOE() {
        //     this.dt_ooes = [];
        //     var year1 = parseFloat(this.form.year) - 1;
        //     axios.get("/ooes/filtered/ooes", {
        //         params: {
        //             program_id: this.form.program_id,
        //             FFUNCCOD: this.form.FFUNCCOD,
        //             raaotype: this.form.raao_type,
        //             year: year1
        //         }
        //     }).then((response) => {
        //         this.dt_ooes = response.data;
        //     }).catch((error) => {
        //         console.error(error);
        //     });
        // },
        setOOEValue() {
            var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
            this.form.account_code = prog_sel[0].FACTCODE;
            this.searchByAccountCode();
            this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
            this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
            this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
            this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        },

    },

};
</script>
