<template>
    <Head>
        <title>PROGRAMS</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3 v-if="my_source=='budget'">Budget Prep </h3>
            <h3 v-if="my_source=='direct'">Programs</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/${idpaps}`">Add Revision Plan</Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <!--
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            -->
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <!-- <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5> -->
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <filtering v-if="filter" @closeFilter="filter = false">
            <label>Office</label>
            <!-- {{ FFUNCCOD }} -->
            <select class="form-select" v-model="filter_FFUNCCOD" @change="filterPrograms(search, filter_FFUNCCOD)">
                <option></option>
                <option v-for="office in offices" :value="office.FFUNCCOD">{{ office.FFUNCTION }}</option>
            </select>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
        <modal-right-align v-if="showModalRightAlign" @closeFilter="showModalRightAlign = false"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_prep">Add Budget Prep</button>
            <!-- {{ budget_data }} -->
            <div class="table-responsive">
                <table class="table table-sm table-borderless table-striped table-hover" v-if="budget_data.length > 0">
                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>OOE</th>
                            <th>Account Code</th>
                            <th>Particular</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="dat in budget_data">
                            <td>{{ dat.idooe }}</td>
                            <td>{{ dat.account_code }}</td>
                            <td>{{ dat.particulars }}</td>
                            <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                            <td >
                                <Button
                                    class="btn btn-primary btn-sm text-white"
                                    @click="editBudgetPrep(dat.id)"
                                    title="Edit Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>&nbsp;
                                <Button
                                    class="btn btn-danger btn-sm text-white"
                                    @click="deleteBudgetPrep(dat.id)"
                                    title="Delete Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL (Planned Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(budget_sum,2,true) }}</u></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL</b></td>
                            <td class="text-end"><u>{{ format_number_conv(total_budget,2,true) }}</u></td>
                            <td></td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </modal-right-align>
        <ModalRightAlignCRUD v-if="showModalRightAlignCRUD" @closeFilter="closeCRUD"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <form @submit.prevent="submit()">
                <div class="mb-3">
                    <label for="idooe" class="form-label">OOE</label>
                    <!-- <input type="text" class="form-control" id="idooe" v-model="form.idooe">
                    <select class="form-select mt-2" id="idooe" v-model="form.idooe">
                        <option value="">Select OOE</option>
                        <option v-for="ooe in ooes" :value="ooe.id">{{ ooe.description }}</option>
                    </select> -->
                    <multiselect :options="ooe_options" :searchable="true" v-model="form.idooe" label="label"
                        track-by="label" @close="setCode">
                    </multiselect>
                    <!-- <div @keyup.enter="addOOE($event)">
                        <multiselect :options="ooe_description" :searchable="true" v-model="form.idooe" @select="setCode"
                            :value="ooe_id" @search-change="typed = $event">
                        </multiselect>
                    </div> -->
                </div>
                <div class="mb-3">
                    <label for="account_code" class="form-label">Account Code</label>
                    <input type="text" class="form-control" id="account_code" v-model="form.account_code">
                </div>
                <div class="mb-3">
                    <label for="particulars" class="form-label">Particulars</label>
                    <input type="text" class="form-control" id="particulars" v-model="form.particulars">
                </div>
                <div class="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount" v-model="form.amount">
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category" v-model="form.category">
                        <option value="Maintenance, Operating, and Other Expenses">Maintenance, Operating, and Other Expenses</option>
                        <option value="Capital Outlay">Capital Outlay</option>
                        <option value="Financial Expenses">Financial Expenses</option>
                        <option value="Personnel Services">Personnel Services</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="source" class="form-label">Source</label>
                    <input type="text" class="form-control" id="source" v-model="form.source" placeholder="e.g. General Fund, Regular MOOE, etc.">
                </div>
                <div class="mb-3">
                    <label for="category_gad" class="form-label">Category GAD</label>
                    <select class="form-select" id="category_gad" v-model="form.category_gad">
                        <option value="GAD">GAD</option>
                        <option value="NON-GAD">NON-GAD</option>
                    </select>
                </div>
                <input type="hidden" v-model="form.revision_plan_id" >
                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <button type="button" class="btn btn-danger mt-3 text-white" @click="" :disabled="form.processing">
                    Cancel
                </button>
            </form>
        </ModalRightAlignCRUD>

        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>AIP Code</th>
                                <th>Program Title</th>
                                <th>Version</th>
                                <th>Implementing Offices</th>
                                <th>Planned Amount</th>
                                <th>View IPP</th>
                                <th v-if="my_source=='budget'">Budget Details</th>
                                <!-- <th>Edit</th> -->
                                <!-- <th>Actions</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td></td>
                                <td>{{ dat.project_title }}
                                    <span style="color:red; font-weight: bold">
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                    </span>
                                </td>
                                <td>{{ dat.version }}</td>
                                <td>{{ dat.FFUNCTION }}</td>
                                <th class="text-end">
                                    {{ format_number_conv(dat.budget_sum,2,true) }}
                                </th>
                                <td>
                                    <Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}?source=${my_source}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                    </Link>
                                    <!-- {{ dat }} -->
                                </td>
                                <td v-if="my_source=='budget'">
                                    <Button
                                        class="btn btn-primary btn-sm text-white"
                                        @click="openRightAlignModal('budget', dat.id, dat.project_title,dat.budget_sum)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </Button>
                                </td>
                                <!-- <td><Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td> -->

                                <!-- <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-start"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">Implementation Schedule/ Workplan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementing Team</Link></li>
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                        </ul>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <!-- {{ my_source }} -->
    </div>
    <!-- {{ ooe_description }}
    {{ ooe_id }} -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import ModalRightAlign from "../../Shared/ModalRightAlign.vue";
import ModalRightAlignCRUD from "../../Shared/ModalRightAlign.vue";
import { useForm } from "@inertiajs/inertia-vue3";

import { Button } from "bootstrap";
export default {
    props: {
        data: Object,
        FFUNCCOD: String,
        offices: Object,
        ooes: Object,
        ooe_description: Array,
        ooe_id: Array,
        ooe_codes: Array,
        //idstrat: String,
        my_source: String,
        dept_id: String,
        idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,

    },
    data() {
        return{
            filter_FFUNCCOD: "",
            filter: false,
            search: this.$props.filters.search,
            showModalRightAlign: false,
            showModalRightAlignCRUD: false,
            rev_id: null,
            project_title: "",
            total_budget: 0,
            budget_sum: 0,
            budget_data: [],
            editData: undefined,
            form: useForm({
                id: null,
                idooe: "",
                particulars: "",
                account_code: "",
                amount: "",
                category: "",
                source: "",
                revision_plan_id: "",
                category_gad: "",
            }),
            crud_type: "create",
        }
    },
    computed: {
        ooe_options(){
            return this.ooes.map((ooe) => ({
                value: ooe.recid,
                label: ooe.FOOEDESC,
                code: ooe.FACTCODE,
            }));
        },
    },
    components: {
        Pagination, Filtering, ModalRightAlign, ModalRightAlignCRUD
    },
    watch: {
        search: _.debounce(function (value) {
            this.filterPrograms(value, this.filter_FFUNCCOD)
        }, 300),
    },
    methods:{
        showCreate(){
            this.$inertia.get(
                "/targets/create",
                {
                    raao_id: this.raao_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // deleteStrat(id) {
        //     //alert(this.idpaps);
        //     let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
        //       if (confirm(text) == true) {
        //         this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
        //     }
        // },
        getAccomplishment(tar_id){
            this.$inertia.get(
                "/accomplishments",
                {
                    idtarget: tar_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        getPercent(accomp, targqty){
            var accSum=0;
            accomp.forEach(myFunction);
            function myFunction(item){
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum/targqty)*100
            percentt=this.format_number(percentt,2,true)
            return percentt;
        },
        amountStatus(budget, imp_amount){
            var status_now="";
            var showAmount ="";
            var bdg = parseFloat(budget);
            var imp = parseFloat(imp_amount);
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>imp){
                //alert('budget is greater than impamount');
                status_now=showAmount+"Warning: total amount of budgetary requirement is greater than the total implementation plans amount."
            }
            if(bdg<imp){
                status_now=showAmount+"Warning: total amount of implementation plans is greater than the total  amount of budgetary requirement."
            }
            return status_now;
        },
        showFilter() {
            this.filter = !this.filter;
        },
        filterPrograms(search, office_code){
            this.$inertia.get(
                "/revision_plans",
                {
                    search: search,
                    FFUNCCOD: office_code,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        async openRightAlignModal(source, id, title,sum_budget) {
            // this.$modal.show(ModalRightAlign, {
            //     title: "Budget Details",
            //     source: source,
            //     id: id,
            //     title: title,
            //     my_source: this.my_source,
            //     dept_id: this.dept_id,
            //     idpaps: this.idpaps,
            //     monitors: this.monitors
            // });
            var url= `/revision_plans/budget/${id}`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.showModalRightAlign = true;
            this.rev_id = id;
            this.form.revision_plan_id = id;
            this.project_title = title;
            this.total_budget = sum_budget;
            this.budget_sum = this.calculateTotalAmount();
        },
        add_budget_prep() {
            this.form.revision_plan_id = this.rev_id;
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
            this.showModalRightAlign=false;
            this.showModalRightAlignCRUD = true;
        },
        setCode() {
            //alert(this.form.particulars);
            var ind = this.ooes.findIndex(ooe => ooe.recid === this.form.idooe);
            console.log("Index of selected OOE("+this.form.idooe+"): " + ind);
            this.form.account_code = this.ooes[ind].FACTCODE.toString();
            this.form.particulars = this.ooes[ind].FOOEDESC.toString();
            console.log("particulars"+this.form.particulars)
            // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
            //alert(this.budget_code+" code: "+ this.codes[ind]);
        },
        submit() {
            var total_project_budget = this.budget_sum+this.form.amount;
            if(this.editData!==undefined){
                total_project_budget = total_project_budget - this.editData.amount;
            }
            if (total_project_budget > this.total_budget) {
                alert("Total budget for this project is " + this.total_budget + ". You cannot exceed this amount." +total_project_budget);
                return;
            }
            if (this.editData !== undefined) {
                //alert('patch');
                this.form.patch("/revision_plans/",{
                    onSuccess: () => {
                        this.showModalRightAlignCRUD = false;
                        this.showModalRightAlign = true;
                        this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
                        this.editData = undefined; // Reset editData after successful submission
                        this.form.id = null; // Reset form id after successful submission
                        this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
                        this.form.idooe = "";
                        this.form.particulars = "";
                        this.form.account_code = "";
                        this.form.amount = "";
                        this.form.category = "";
                        this.form.source = "";
                        this.form.category_gad = "";
                        this.form.processing = false; // Reset processing state

                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    }
                });
            } else {
                this.form.id = null;
                //alert('store');
                this.form.post("/revision_plans/store",{
                    onSuccess: () => {
                        this.showModalRightAlignCRUD = false;
                        this.showModalRightAlign = true;
                        this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    }
                });

                // this.showModalRightAlignCRUD = false;
                // this.showModalRightAlign = true;
                // this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }

        },
        async editBudgetPrep(id) {
                // this.$modal.show(ModalRightAlign, {
                //     title: "Budget Details",
                //     source: source,
                //     id: id,
                //     title: title,
                //     my_source: this.my_source,
                //     dept_id: this.dept_id,
                //     idpaps: this.idpaps,
                //     monitors: this.monitors
                // });/budget/edit/{id}
                var url= `/revision_plans/budget/edit/${id}`;
                await axios.get(url).then((response) => {
                    console.log("response data in edit budget prep");
                    console.log(response.data);
                    this.editData = response.data;
                    console.log(this.editData.id);
                }).catch((error) => {
                    console.log("Error in fetching budget data", error);
                }).finally(() => {
                    this.form.id = this.editData.id;
                    this.form.idooe = this.editData.idooe;
                    this.form.particulars = this.editData.particulars;
                    this.form.account_code = this.editData.account_code;
                    this.form.amount = this.editData.amount;
                    this.form.category = this.editData.category;
                    this.form.source = this.editData.source;
                    this.form.category_gad = this.editData.category_gad;
                    this.form.revision_plan_id = this.rev_id;
                    this.showModalRightAlignCRUD = true;
                });

        },
        deleteBudgetPrep(id){
            let text = "WARNING!\nAre you sure you want to delete the budget prep?"+id;
            if (confirm(text) == true) {
                this.$inertia.delete("/revision_plans/" + id, {
                    onSuccess: () => {
                        this.budget_data = [];
                        this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
                    },
                });
                this.budget_data=[];
                this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }
        },
        calculateTotalAmount() {
            return this.budget_data.reduce((sum, item) => {
                return sum + parseFloat(item.amount);
            }, 0);
        },
        closeCRUD(){
            this.showModalRightAlignCRUD = false;
            this.showModalRightAlign = true;
            this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            this.editData = undefined; // Reset editData after closing the modal
            this.form.id = null; // Reset form id after closing the modal
            this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
        }
    }
};
</script>
<style>
            .row-centered {
                text-align:center;
            }
            .col-centered {
                display:inline-block;
                float:none;
                text-align:left;
                margin-right:-4px;
            }
            .pos{
                position: top;
                top: 240px;
            }
</style>
