<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3 v-if="source==='sip'">SIP Profile</h3>
                <h3 v-else>PPA Profile </h3>
            </div>
            <div class="peers">
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">

                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/revision/create/${idpaps}`" v-if="source==undefined">Add Revision Plan</Link>&nbsp;
                    <!-- :href="`/revision/streamlined/create/${idpaps}?source=sip`"  -->
                    <Button class="btn btn-primary btn-sm text-white" @click="showSIPModal" v-if="source=='sip'">Add SIP Profile</Button>&nbsp;
                    <Link class="btn btn-primary btn-sm" :href="`/revision/streamlined/create/${idpaps}`" v-else-if="source==undefined">Add Project Profile</Link>&nbsp;
                    <Link class="btn btn-primary btn-sm" :href="`/revision/create/0?source=direct`" v-else>Add Revision Plan</Link>&nbsp;
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>&nbsp;
                    <button @click="exportUsers" class="btn btn-primary btn-sm mL-2 text-white">Export AIP to Excel</button>&nbsp;
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showAIPModalMethod()">AIP</button>&nbsp;
                    Filter by type:
                    <select v-model="type_filter" @change="filterProjects">
                        <option></option>
                        <option value="p">Project Profile</option>
                        <option value="d">Project Design</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <input
                        type="checkbox"
                        v-model="checked"
                        @change="updateValue"
                    />&nbsp; No Climate Change Expenditure (Please Click the box if your LGU does not have any climate change expenditure)
                </div>


            </div>

        </div>

        <div class="peers fxw-nw jc-sb ai-c" v-if="paps.paps_desc">
            <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Project Title</th>
                                <th>Office</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Full Edit</th>
                                <th></th>
                                <th>Version</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data">
                                <!-- TITLE -->
                                <td>{{ dat.project_title }}
                                    <span style="color:red; font-weight: bold">
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                    </span>
                                </td>
                                <!-- OFFICE -->
                                <td>{{ dat.FFUNCTION }}</td>
                                <!-- STATUS -->
                                <td>
                                    <span
                                        :style="{
                                        display: 'inline-block',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        backgroundColor:
                                            dat.status == '-2' ? 'red' :
                                            dat.status == '-1' ? 'gray' :
                                            dat.status == '0'  ? 'orange' :
                                            dat.status == '1'  ? 'blue' :
                                            dat.status == '2'  ? 'green' :
                                            'black'
                                        }"
                                    >
                                        {{
                                        dat.status == '-2' ? 'Returned' :
                                        dat.status == '-1' ? 'Saved' :
                                        dat.status == '0'  ? 'Submitted' :
                                        dat.status == '1'  ? 'Reviewed' :
                                        dat.status == '2'  ? 'Approved' :
                                        'Unknown'
                                        }}
                                    </span>
                                </td>
                                <!-- VIEW -->
                                <td>
                                    <Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    </Link>


                                    <!-- {{ dat }} -->
                                </td>
                                <!-- EDIT -->
                                <td>
                                    <Link v-if="paps"
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>

                                    <!-- {{ dat }} -->
                                    <Link v-else
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}?source=direct`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>

                                </td>
                                <!-- FULL EDIT -->
                                <td >
                                    <!-- /revision/streamlined/create/{{dat.idpaps}}?source={{source}}&idrevplan={{dat.id}} -->
                                    <Link v-if="dat.idpaps"
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/streamlined/create/${dat.idpaps}?source=${source}&idrevplan=${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td>
                                <!-- SUBMIT/RECALL/GENERATE ACTIONS -->
                                <td>
                                    <!-- Submit button when status = -1 -->
                                    <button
                                        v-if="dat.status == '-1' || dat.status == '-2'"
                                        @click="submitItem(dat, 0)"
                                        :disabled="!can_submit(dat.budget_sum, dat.imp_amount)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: can_submit(dat.budget_sum, dat.imp_amount) ? 'blue' : '#9bbce0', // light greyish blue
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Submit
                                    </button>

                                    <!-- Recall button when status = 0 -->
                                    <button
                                        v-if="dat.status == '0'"
                                        @click="submitItem(dat, -1)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Recall
                                    </button>
                                    <!-- Generate Project Design button when status = 'approved' (example) -->
                                    <button
                                        v-if="dat.status == 1 && parseInt(dat.number_of_clones)<1 && dat.type==='p'"
                                        @click="generateProjectDesign(dat.id, 'd')"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'green',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                        Generate Project Design
                                    </button>

                                    <!-- Generate Project Design button when status = 'approved' (example) -->
                                    <button
                                        v-if="dat.status == 1 && parseInt(dat.number_of_clones)<1 && source==='sip'"
                                        @click="generateProjectDesign(dat.id, 'sip')"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'green',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                        Generate SIP Profile
                                    </button>
                                    <!-- {{ dat.number_of_clones }} -->
                                </td>
                                <!-- VERSIONS -->
                                <td>{{ dat.version }} </td>
                                <!-- TYPE -->
                                <td>{{ formatProjectType(dat.type) }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <!-- action-dropdown  -->
                                        <ul class="dropdown-menu dropdown-menu-start"  aria-labelledby="dropdownMenuButton1">
                                            <!-- <li><Link class="dropdown-item" :href="`/revision/edit/${dat.id}`">Edit</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">Implementation Schedule/ Workplan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <!-- <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementing Team</Link></li>
                                            <!-- <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Partnership and Sustainability</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                            <li><Button class="dropdown-item" @click="setLinkModal(dat.id)">Print Workplan</Button></li>
                                            <li>
                                                <Button class="dropdown-item" @click="openPrintProfile(dat.id)">
                                                    Print Project
                                                    <span v-if="dat.type==='p'">Profile</span>
                                                    <span v-else>Design</span>
                                                </Button>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/cdf/${dat.id}`" v-if="dat.type==='d'">
                                                    Cash Disbursements Forecast
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
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
            <!-- {{ rev_plan_selected }} -->
        </div>
        <AIPModal v-if="showAIPModal" @close-modal-event="hideAIPModal">
            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <iframe :src="aip_printLink" style="width:100%; height:500px" />

            </div>
            <!-- <Link :href="aip_printLink_excel" class="btn btn-primary text-white">
                    Export to Excel
                </Link> {{ aip_printLink_excel }}
                <br>
                {{ aip_printLink }}<br>
            <button @click="exportUsers" class="btn btn-primary text-white">
                    Export to Excel
            </button> -->
        </AIPModal>
        <WorkPlanModal v-if="WorkPlanModalVisible" @close-modal-event="toggleWorkPlanModal" title="Comprehensive Workplan/Schedule">
            <div class="d-flex justify-content-center">
                <!-- {{ cmp_link }} -->
                <iframe :src="cmp_link" style="width:100%; height:500px" />

            </div>
        </WorkPlanModal>
        <SIPModal v-if="SIPModalVisible" @close-modal-event="SIPModalVisible=false" title="SIP Profile">
            Select PAPS: {{ selected_sip_paps }}
            <select v-model="selected_sip_paps" class="form-select">
                <option></option>
                <option v-for="pap in paps" :value="pap.id" >
                    {{ pap.paps_desc }}
                </option>
            </select>
            <Link class="btn btn-primary btn-sm"
                    :href="`/revision/streamlined/create/${selected_sip_paps}?source=sip`"
                    :disabled="!selected_sip_paps"
                    v-if="source=='sip'">
                        Add SIP Profile
            </Link>&nbsp;
        </SIPModal>
        <ProjectPrintModal v-if="printProfileVIsible" @close-modal-event="printProfileVIsible=false" title="Printed Output">
            <h1>Project Profile</h1>

            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <iframe :src="ppa_link" style="width:100%; height:500px" />

            </div>

            <!-- {{ppa_link}} -->
        </ProjectPrintModal>
    </div>
    <!-- src: {{source}} fdfsdf -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import AIPModal from "@/Shared/PrintModal";
import SIPModal from "@/Shared/ModalDynamicTitle";
import ProjectPrintModal from "@/Shared/ModalDynamicTitle";
import { Inertia } from '@inertiajs/inertia';
import WorkPlanModal from "@/Shared/ModalDynamicTitle";

export default {
    props: {
        data: Object,
        //idstrat: String,
        idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,
        source: String,
        // search: String,
        // type_f: String,
    },
    data() {
        return{
            search: this.$props.filters.search,
            showAIPModal: false,
            aip_printLink: "",
            ccet: 'no',       // This is the main variable bound by v-model
            checked: false,    // Internal boolean to control the checkbox
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
            ppa_link: ""
        }
    },
    components: {
        Pagination, Filtering, AIPModal, WorkPlanModal, SIPModal, ProjectPrintModal
    },
    watch: {
        search: _.debounce(function (value) {

            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: value,
                    type_filter: this.type_filter,
                    source:this.source
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    mounted(){
        if(this.paps.id){
            this.paps_id_here=this.paps.id
        }
        this.updateValue(); // Initialize ccet based on the initial state of checked
    },
    methods:{
        printProfileVisible($rev_print_id){
            this.printProfileVIsible=true
        },
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
        deleteStrat(id) {
            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
            }
        },
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
        can_submit(budget, imp_amount){
            // var status_now="";
            // var showAmount ="";
            var bdg = parseFloat(budget);
            var imp = parseFloat(imp_amount);
            return bdg >= 1 && imp >= 1 && bdg === imp;
            // if(bdg>imp){
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
        showAIPModalMethod(){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=pdf';
            var params ='&ccet='+this.ccet
            // console.log(params);
            this.aip_printLink = linkt+jasper_ip+jasper_link+params;
            // this.aip_printLink_excel = this.aip_printLink.replace('&output=pdf', '&output=csv');

            // this.aip_printLink_excel =linkt+jasper_ip+'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=xlsx&ccet='+this.ccet;
            this.showAIPModal=true;
        },
        hideAIPModal(){
            this.showAIPModal=false;
        },
        updateValue() {
            this.ccet = this.checked ? '1' : '0'
        },
        exportUsers() {
            // This opens the Laravel route in a new tab and triggers download
            // window.open(route('export.users'), '_blank');
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var short_link='jasperserver/rest_v2/reports/reports/OPCR_AIP/AIP_Print.xlsx?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no'
            var params ='&ccet='+this.ccet
            var link_final = linkt+jasper_ip+short_link+params;
            // '/revision/export/aip'
            window.open(link_final, '_blank');
        },
        submitItem(revision_plan, newStatus){
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
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return"
            };

            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            Inertia.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {},
                {
                    preserveScroll: true
                }
            );
        },
        //WORKPLAN
        setLinkModal(id){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FComprehensive_WorkPlan&standAlone=true&output=pdf';
            var params ='&id='+id
            // console.log(params);
            this.cmp_link = linkt+jasper_ip+jasper_link+params;
            this.toggleWorkPlanModal()
        },
        toggleWorkPlanModal(){
            this.WorkPlanModalVisible =!this.WorkPlanModalVisible
        },
        // GENERATE PROJECT DEISGN
        generateProjectDesign(id, type){
            if (!id) return;

            // Browser confirmation
            if (!confirm("Are you sure you want to generate the Project Design for this project?")) {
                return; // User canceled
            }

            // Make the Inertia POST request
            Inertia.post(`/project/design/generate/${id}`, {
                'type': type
            }, {
                onSuccess: () => {
                    // optional: anything you want to run after success
                    console.log("Project Design generated.");
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
        },
        // NEW SIP GENERATION
        showSIPModal(){

            axios.get('/get/PAPS')
                .then(res => {
                    this.paps = res.data;
                    this.SIPModalVisible=true;
                })
                .catch(err => {
                    console.error('Failed to load PAPS:', err);
                });
        },
        // FILTER BY TYPE
        filterProjects(){
            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: this.search,
                    type_filter: this.type_filter,
                    source:this.source
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // OPEN PPA
        openPrintProfile(rev_plan_id_p){
            this.rev_plan_id=rev_plan_id_p
            this.printProfileVIsible=true

            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FIndividual_Output&reportUnit=%2Freports%2Fplanning_system%2FIndividual_Output%2FProject_Profile&standAlone=true&standAlone=true&output=pdf';
            var params ='&id='+rev_plan_id_p
            // console.log(params);
            this.ppa_link = linkt+jasper_ip+jasper_link+params;
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
