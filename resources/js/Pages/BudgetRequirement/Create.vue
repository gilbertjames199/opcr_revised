<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Budget Requirements  {{ idrev }}</h3>
            <Link :href="`/revision/${idrev}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <div class="col-md-8">

            <form @submit.prevent="submit()">
                <input type="hidden" required>
                {{ budgets }} {{  form.particulars }}
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>
                <div>
                    <label for="">PARTICULARS</label>
                    <div @keyup.enter="addAccount($event)">
                        <multiselect
                            :options="accounts"
                            :searchable="true"
                            v-model="form.particulars"
                            @select="setCode"
                            @search-change="typed = $event"
                            :value="form.particulars"
                        >
                        </multiselect>
                    </div>
                    <div class="fs-6 c-red-500" v-if="form.errors.particulars">{{ form.errors.particulars }}</div>
                </div>
                <!--{{ budget_code }} budgets: {{ budgets }} form.account_code: {{ form.account_code }}-->
                <label>ACCOUNT CODE budget_code: </label>
                <input type="number" class="form-control" v-model="form.account_code" readonly/>
                <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div>
                <label>AMOUNT</label>
                <input type="number" class="form-control" v-model="form.amount"/>
                <div class="fs-6 c-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>
                <label>CATEGORY</label>
                <select class="form-control" v-model="form.category">
                    <option>Capital Outlay</option>
                    <option>Maintenance, Operating, and Other Expenses</option>
                    <option>Personal Services</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>
                <!---->
                <label>CATEGORY 2</label>
                <select class="form-control" v-model="form.category_gad">
                    <option>GAD</option>
                    <option>NON-GAD</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category_gad">{{ form.errors.category_gad }}</div>
                <!--<input type="text" v-model="searchTerm" @input="filteredAccounts" placeholder="Search">
                <select class="form-control" v-model="form.particulars" >
                    <option v-for="account in filteredAccounts" :value="account.FTITLE">
                        {{  account.FTITLE }}
                    </option>
                </select>-->
                <!--<model-select :options="accounts" v-model="form.particulars" placeholder="item-item">
                    <options v-for="account in filteredAccounts">
                        {{ account.FTITLE }}
                    </options>
                </model-select>-->
                <!--{{ accounts[0].FTITLE }}<input type="text" v-model="form.project_title" class="form-control" autocomplete="chrome-off">-->



                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{  form }} -->

    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select'
//import Multiselect from "vue-multiselect";

    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            editData: Object,
            revs: Object,
            //duplicate: Object,
            idrev: Number,
            accounts: Object,
            codes: Object,
            budgets: Object
        },
        components: {
            ModelSelect,
            Places: () => new Promise((resolve) => {
                setTimeout(() => {
                    resolve(Places)
                }, 2000)
            })
        },
        computed:{
            filteredAccounts(){
                return this.accounts.filter(account => account.FTITLE.toLowerCase().includes(this.searchTerm.toLowerCase()))
            }
        },
        data() {
            return {
                submitted: false,
                form: useForm({
                    revision_plan_id: "",
                    particulars: "",
                    account_code: "",
                    amount: "",
                    category: "",
                    category_gad: "NON-GAD",
                    id: null
                }),
                pageTitle: "",
                // searchTerm: "",
                // selectedOption: "",
                selected: "",
                typed: "",
                //budget_code: "",
            };
        },

        mounted() {

            //alert(this.idrev);
            this.form.revision_plan_id=this.idrev
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.revision_plan_id=this.editData.revision_plan_id
                this.form.particulars=this.editData.particulars
                this.form.account_code=this.editData.account_code
                this.form.amount=this.editData.amount
                this.form.category=this.editData.category
                this.form.category_gad=this.editData.category_gad
            } else {
                this.pageTitle = "Create"

                this.form.particulars =this.budgets[0];
                var ind=this.codes.indexOf(parseInt(this.form.particulars));
                //alert(ind);
                this.form.particulars=this.accounts[ind];
                //this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            }

        },

        methods: {
            submit() {
                //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                //alert('account code: '+this.form.account_code)
                var indr=this.budgets.indexOf(this.form.account_code.toString());
                //alert(this.budgets)
                //alert(indr);
                if (this.editData !== undefined) {
                    //alert('patch');
                    this.form.patch("/strategies/", this.form);
                } else {
                    this.form.id=null;
                    //alert('store');
                    if(indr<0){
                        this.form.post("/budget/store", this.form);
                    }else{
                        alert("Account code already exists!");
                    }

                }
            },
            // reset(){
            //     this.form.particulars="";
            //     this.form.account_code="";
            // },
            // selectFromParentComponent1(){
            //     this.form.particulars=this.accounts[0].FTITLE;
            // }
            addAccount(){
                // if(!this.accounts.includes(this.searchTerm)) this.accounts.push(this.searchTerm);
                // this.selectedOption=this.searchTerm;
                if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
                this.selected = this.typed;
            },
            setCode(){
                //alert(this.form.particulars);
                var ind=this.accounts.indexOf(this.form.particulars);
                this.form.account_code=this.codes[ind];
                this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
                //alert(this.budget_code+" code: "+ this.codes[ind]);
            }
        },
    };
    </script>
