<template>
     <Head>
        <title>View PAPS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <!--class="peers fxw-nw jc-sb ai-c"-->
        <div class="peers fxw-nw jc-sb ai-c justify-content-end">
            <Link :href="`/revision/${paps.idpaps}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>
        <div class="d-flex justify-content-center">
            <h3>
                {{ office }}
            </h3>
        </div>
        <div class="d-flex justify-content-center ">
            <h4 class="fw-bold ">
                <div v-if="paps.type==='p'">PROJECT PROFILE</div>
                <div v-else >PROJECT DESIGN</div>
            </h4>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table name="tabel" class="table table-hover table-bordered border-dark">
                        <tbody>
                            <!--<tr class="bg-secondary text-white"><td colspan="7"></td></tr>-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Title</th>
                                <td colspan="6">{{ paps.project_title }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Project Location</th>
                                <td colspan="6">{{ paps.project_location }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Implementation Schedule</th>
                                <th colspan="1">Start</th>
                                <td colspan="2">{{ formatMonthYear(paps.date_start) }}</td>
                                <th colspan="1">End</th>
                                <td colspan="2"> {{ formatMonthYear(paps.date_end) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Intended Beneficiaries</th>
                                <th colspan="1">Male</th>
                                <td colspan="1">{{ format_number_conv(paps.beneficiary_male,0,true) }}</td>
                                <th colspan="1">Female</th>
                                <td colspan="1">{{ format_number_conv(paps.beneficiary_female,0,true) }}</td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv((paps.beneficiary_male + paps.beneficiary_female),0,true) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Baseline Disaggregated Data</th>
                                <th colspan="1">Male</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_male,0,true) }}</td>
                                <th colspan="1">Female</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_female,0,true) }}</td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_male + paps.baseline_female,0,true) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Cost of Program</th>
                                <th colspan="1">Amount (Php)</th>
                                <td colspan="2">{{ format_number_conv(paps.amount,2,true) }} </td>
                                <th colspan="1">Attributed GAD Budget (Php) dxxcxc</th>
                                <td colspan="2">{{ format_number_conv((paps.amount*paps.hgdg_percent),2,true) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">HGDG Checklist</th>
                                <td colspan="3">GAD {{ paps.checklist.box_number }} {{ paps.checklist.sector }}</td>
                                <th class="bg-secondary text-white" colspan="1">HGDG Score</th>
                                <td colspan="2">{{ paps.hgdg_score }} -<b>{{ GAD_remark(paps.hgdg_score) }}</b>
                                    <br>({{ paps.hgdg_percent*100 }}%)
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Rationale</th>
                                <td colspan="6" align="justify">
                                    {{ paps.rationale }}
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Objectives</th>
                                <td colspan="6" align="justify">
                                    {{ paps.objective }}
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Beneficiaries</th>
                                <td colspan="6" align="justify">{{ paps.beneficiaries }}</td>
                            </tr>


                        </tbody>
                    </table>
                    <br>
                    <div v-if="b_mooe.length>0 || b_capital.length>0 || b_ps.length>0">
                        <h3>
                            Estimated Cost/Budgetary Requirements
                        </h3>
                        <table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th colspan="2">Particulars</th>
                                    <th>Account Code</th>
                                    <th v-if="paps.hgdg_percent>0">GAD</th>
                                    <th v-if="paps.hgdg_percent>0">NON-GAD</th>
                                    <th v-if="paps.hgdg_percent>0">Total</th>
                                    <th v-if="paps.hgdg_percent<0.1">Amount</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="b_mooe.length>0" class="fw-bold bg-light">
                                    <td colspan="2"><b>MOOE</b></td>
                                    <td></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="b_mooe.length>0" v-for="mooe in b_mooe">
                                    <td></td>
                                    <td>{{ mooe.particulars }}</td>
                                    <td>{{ mooe.account_code }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv((mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount-(mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td>{{ mooe.source }}</td>
                                </tr>
                                <tr v-if="b_mooe.length>0" >
                                    <td></td>
                                    <td><b><span v-if="has>1">SUB-</span>TOTAL</b></td>
                                    <td></td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv((s_mooe*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(s_mooe-(s_mooe*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(s_mooe,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1" class=" text-decoration-underline">{{ format_number_conv(s_mooe,2,true) }}</td>
                                    <td></td>
                                </tr>
                                <tr v-if="b_capital.length>0" class="fw-bold bg-light">
                                    <td colspan="2"><b>Capital Outlay</b></td>
                                    <td></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="b_capital.length>0" v-for="mooe in b_capital" >
                                    <td></td>
                                    <td>{{ mooe.particulars }}</td>
                                    <td>{{ mooe.account_code }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv((mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount-(mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td>{{ mooe.source }}</td>
                                </tr>
                                <tr v-if="b_capital.length>0">
                                    <td></td>
                                    <td><b><span v-if="has>1">SUB-</span>TOTAL</b></td>
                                    <td></td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv((s_capital*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(s_capital-(s_capital*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(s_capital,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1" class=" text-decoration-underline">{{ format_number_conv(s_capital,2,true) }}</td>
                                    <td></td>
                                </tr>
                                <tr v-if="b_ps.length>0">
                                    <td colspan="2"><b>Personnel Services</b></td>
                                    <td></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td v-if="paps.hgdg_percent>0"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="b_ps.length>0" v-for="mooe in b_ps">
                                    <td></td>
                                    <td>{{ mooe.particulars }}</td>
                                    <td>{{ mooe.account_code }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv((mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount-(mooe.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1">{{ format_number_conv(mooe.amount,2,true) }}</td>
                                    <td>{{ mooe.source }}</td>
                                </tr>
                                <tr v-if="has>1" class="fw-bold bg-light">
                                    <th colspan="3" style="text-align: center"><b>GRAND TOTAL</b></th>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv((paps.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(paps.amount-(paps.amount*paps.hgdg_percent),2,true) }}</td>
                                    <td v-if="paps.hgdg_percent>0" class=" text-decoration-underline">{{ format_number_conv(paps.amount,2,true) }}</td>
                                    <td v-if="paps.hgdg_percent<0.1" class=" text-decoration-underline">{{ format_number_conv(paps.amount,2,true) }}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <h3 v-if="team_members.length>0 ||  paps.implementing_team!==null">
                        Implementing Team
                    </h3>
                    <div align="justify">{{ paps.implementing_team }}</div>
                    <div v-if="team_members.length>0">

                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Name</th>
                                    <th>Position/Designation</th>
                                    <th>Competency</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="team_member in team_members">
                                    <td>{{ team_member.name }}</td>
                                    <td>{{ team_member.position }}</td>
                                    <td>{{ team_member.competency }}</td>
                                    <td>{{ team_member.role }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <br>
                    <h3 v-if="paps.partnership!==null">Partnership and Sustainability</h3>
                    <div align="justify">{{ paps.partnership }}</div>
                    <br>
                    <br>
                    <h3 v-if="monitors.length>0 ||  paps.monitoring!==null">Monitoring and Evaluation</h3>
                    <div align="justify">{{ paps.monitoring }}</div>
                    <div v-if="monitors.length>0">

                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Evaluation Mechanism/Tools</th>
                                    <th>OPR and their Roles</th>
                                    <th>Target Beneficiaries</th>
                                    <th>Need for External M&E Team or GAD Expert/Consultant</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="monitor in monitors">
                                    <td>{{ monitor.evaluation_mechanism_tool }}</td>
                                    <td>{{ monitor.opr }}</td>
                                    <td>{{ monitor.target_beneficiaries }}</td>
                                    <td>{{ monitor.gad }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <h3 v-if="risks.length>0 ||  paps.risk_management!==null">Risk Management</h3>
                    <div align="justify">{{ paps.risk_management }}</div>
                    <div v-if="risks.length>0">
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Prospective Possible Risks</th>
                                    <th>Person Affected</th>
                                    <th>Management</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="risk in risks">
                                    <td>{{ risk.possible_risk }}</td>
                                    <td>{{ risk.person_affected }}</td>
                                    <td>{{ risk.management }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>

                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">

        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default{
    components: {Filtering, Pagination},
    props: {
        paps: Object,
        office: String,
        implementation: Object,
        b_mooe: Object,
        b_capital: Object,
        b_ps: Object,
        s_mooe: Object,
        s_capital: Object,
        s_ps: Object,
        team_members: Object,
        monitors: Object,
        risks: Object
    },
    computed: {},
    mounted(){
        this.isOne();
    },
    data(){
        return{
            has: 0
        }
    },
    watch:{},
    methods:{
        isOne(){
            var mooe=this.b_mooe.length;
            var co=this.b_capital.length;
            var ps=this.b_ps.length;
            var has=0;
            if(mooe>0){
                has+=1;
            }
            if(ps>0){        has+=1;
            }
            if(co>0){
                has+=1;
            }
            this.has=has;
        }
    }
}
</script>
<style>
.th{
    background-color: #929292 !important;
}
</style>
