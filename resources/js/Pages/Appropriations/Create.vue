<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Appropriations</h3>

            <Link :href="`/appropriations/${pap1.id}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>
        <h6>Programs, Projects, and Activities (PAPS) Selected: <u>{{ pap_selected }}</u> </h6>
        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">

                <label for="">Chart of Accounts</label>
                <div @keyup.enter="addAccount($event)">
                    <multiselect
                        :options="accounts"
                        :searchable="true"
                        v-model="chart_selected"
                        @select="setCode"
                        :value="chart_selected"
                        @search-change="typed = $event"
                    >
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{ form.errors.object_of_expenditure }}</div>

                <label>ACCOUNT CODE </label>
                <input type="number" class="form-control" v-model="form.account_code" @input="searchByAccountCode"/>
                <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div>

                <div >
                    <label for="">Object of Expenditure</label>
                    <input type="text" v-model="form.object_of_expenditure" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{ form.errors.object_of_expenditure }}</div>
                </div>


                <label>PAST YEAR </label>
                <input type="number" class="form-control" v-model="form.past_year" />
                <div class="fs-6 c-red-500" v-if="form.errors.past_year">{{ form.errors.past_year }}</div>

                <label>FIRST SEMESTER (Actual) </label>
                <input type="number" class="form-control" v-model="form.first_sem" />
                <div class="fs-6 c-red-500" v-if="form.errors.first_sem">{{ form.errors.first_sem }}</div>

                <label>SECOND SEMESTER (Estimate) </label>
                <input type="number" class="form-control" v-model="form.second_sem" />
                <div class="fs-6 c-red-500" v-if="form.errors.second_sem">{{ form.errors.second_sem }}</div>

                <label>TOTAL </label>
                <input type="text" class="form-control" :value="getTotal12" />

                <label>BUDGET YEAR PROPOSED </label>
                <input type="number" class="form-control" v-model="form.budget_year" />
                <div class="fs-6 c-red-500" v-if="form.errors.budget_year">{{ form.errors.budget_year }} OR the budget year value is greater than the value recorded at the LBP Form No. 2</div>

                <label>CATEGORY</label>
                <select class="form-control" v-model="form.category" >
                    <option>Capital Outlay</option>
                    <option>Maintenance, Operating, and Other Expenses</option>
                    <option>Personnel Services</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>

                <label>GAD CATEGORY</label>
                <select class="form-control" v-model="form.GAD" >
                    <option>NON-GAD</option>
                    <option>GAD</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <!-- {{ aip }}
                <br/>
                {{ total_budget_year }} -->
            </form>
        </div>


    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select'
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            paps: Object,
            pap1: Number,
            editData: Object,
            sectors: Object,
            accounts: Object,
            codes: Object,
            aip: Object,
            total_budget_year: Object,
        },
        components: {
          //BootstrapModalNoJquery,
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
                total: 0,
                form: useForm({
                    object_of_expenditure: "",
                    account_code: "",
                    past_year: "",
                    first_sem: 0,
                    second_sem: 0,
                    budget_year: "",
                    idpaps: "",
                    category: "",
                    GAD: "",
                    CCET: "",
                    id: null
                }),
                pageTitle: ""
            };
        },
        computed: {
            getTotal12(){
                var f1 = parseFloat(this.form.first_sem);
                var f2 = parseFloat(this.form.second_sem);
                var tot = f1+f2;
                return tot;
            }
        },
        mounted() {
            this.pap_selected = this.pap1.paps_desc
            if (this.editData !== undefined) {
                if(this.bari){
                    this.bar=this.bari
                }
                this.pageTitle = "Edit"
                this.form.object_of_expenditure	=this.editData.object_of_expenditure
                this.form.account_code=this.editData.account_code
                this.form.past_year=this.editData.past_year
                this.form.first_sem=this.editData.first_sem
                this.form.second_sem=this.editData.second_sem
                this.form.budget_year=this.editData.budget_year
                this.form.idpaps=this.editData.idpaps
                this.form.category=this.editData.category
                this.form.GAD=this.editData.GAD
                this.form.CCET=this.editData.CCET
                this.form.id=this.editData.id
                this.searchByAccountCodeForEditMounted();
            } else {
                this.pageTitle = "Create "
                this.form.idpaps = this.pap1.id
            }

        },

        methods: {
            submit() {
                this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                var aip_mooe = parseFloat(this.aip.MOOE);
                var aip_ps = parseFloat(this.aip.PS);
                var aip_co = parseFloat(this.aip.CO);
                var app_mooe = parseFloat(this.total_budget_year.total_approp_mooe)+parseFloat(this.form.budget_year);
                var app_ps = parseFloat(this.total_budget_year.total_ps_approp)+parseFloat(this.form.budget_year);
                var app_co = parseFloat(this.total_budget_year.total_co_approp)+parseFloat(this.form.budget_year);
                var addable=true;
                //var adval=0;
                var possible_difference = 0;

                if(this.form.category=='Capital Outlay'){
                    if(app_co>aip_co){
                        addable=false;
                        possible_difference=aip_co - parseFloat(this.total_budget_year.total_co_approp);

                    }
                }
                if(this.form.category=='Maintenance, Operating, and Other Expenses'){

                    if(app_mooe>aip_mooe){

                        addable=false;
                        possible_difference=aip_mooe - parseFloat(this.total_budget_year.total_approp_mooe);
                    }
                }
                if(this.form.category=='Personnel Services'){
                    if(app_ps>aip_ps){
                        addable=false;
                        possible_difference=aip_ps - parseFloat(this.total_budget_year.total_ps_approp);
                    }
                }

                if(addable==false){
                    alert("The amount for budget year exceeds the value of the recorded "+this.form.category+
                            " for this PAPS. The maximum allowable value for budget year is only "+possible_difference+".")
                }else{
                    if (this.editData !== undefined) {
                        this.form.patch("/appropriations/", this.form);
                    } else {
                        // alert("Sample");
                        var url="/appropriations/store"
                        // alert('for store '+url);
                        this.form.post(url);
                    }
                }

            },
            addAccount(){
                if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
                this.selected = this.typed;
            },
            setCode(){
                var ind=this.accounts.indexOf(this.chart_selected);
                this.form.account_code=this.codes[ind];
                this.form.object_of_expenditure = this.chart_selected
                // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
                // this.form.particulars = this.chart_selected
            },
            searchByAccountCode(){
                var ind = this.codes.indexOf(this.form.account_code.toString());
                this.chart_selected=this.accounts[parseInt(ind)];
                this.form.object_of_expenditure = this.chart_selected
                //alert('search by account tgttg! '+ind);
            },
            searchByAccountCodeForEditMounted(){
                var ind = this.codes.indexOf(this.form.account_code.toString());
                this.chart_selected=this.accounts[parseInt(ind)];
                //this.form.object_of_expenditure = this.chart_selected
                //alert('search by account tgttg! '+ind);
            }

        },

    };
    </script>
