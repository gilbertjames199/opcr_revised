<template>
    <Head>
        <title>List of OPCRs</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>List of OPCR Forms</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/opcrlist/create/${FFUNCCOD}`">Create OPCR</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
                &nbsp;
                <Link :href="`/OPCRStandard`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Description</th>
                                <th>Office</th>
                                <th>Semester</th>
                                <th>Period Covered</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="opcr_list in opcr_lists">
                                <td>OPCR</td>
                                <td>{{ office.FFUNCTION }} </td>
                                <td>{{ opcr_list.semester }}</td>
                                <td>{{ formatMonth(opcr_list.date_from) }} to {{ formatMonthYear(opcr_list.date_to) }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/opcrlist/${opcr_list.id}/edit`">Edit</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcr/form/${opcr_list.id}/${FFUNCCOD}`">Rating</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcrtarget/${opcr_list.id}`">Target</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcraccomplishment/${opcr_list.id}`">Accomplishment</Link></li>
                                            <li>
                                                <!--goToRep(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, opcr_id)-->
                                                <button class="dropdown-item"
                                                    @click="goToRep(opcr_list.FFUNCCOD,
                                                                opcr_list.total,
                                                                opcr_list.ave,
                                                                opcr_list.dept_head,
                                                                opcr_list.opcr_date,
                                                                opcr_list.mooe,
                                                                opcr_list.ps,
                                                                opcr_list.id
                                                            )">
                                                    Download PDF {{ opcr_list.id }}
                                                </button>
                                            </li>
                                            <!-- <li><Link class="text-danger dropdown-item" @click="deleteRA(dat.id)">Delete</Link></li> -->
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p> -->
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        opcr_lists: Object,
        office: Object,
        FFUNCCOD: String
    },
    data() {
        return{

        }
    },
    components: {
        Pagination, Filtering,
    },

    methods:{


        deleteRA(id) {
            let text = "WARNING!\nAre you sure you want to delete the Research Agenda?";
              if (confirm(text) == true) {
                this.$inertia.delete("/ResearchAgenda/" + id);
            }
        },
        goToRep(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            //alert("opcr_id: " + id);
            var linkt ="abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2FPlanningSystem%2FOPCR%2FZ_OPCR_List%2FMAIN&standAlone=true&ParentFolderUri=%2Freports%2FPlanningSystem%2FOPCR%2FZ_OPCR_List&decorate=no&output=pdf';
            var params = '&total=' + total + '&ave=' + ave + '&dept_head=' + dept_head +
                '&opcr_date=' + opcr_date + '&mooe=' + mooe + '&ps=' + ps +
                '&FFUNCCOD=' + FFUNCCOD + '&opcr_id=' + id;
            var linkl = linkt+jasper_ip + jasper_link + params;
            const link = document.createElement('a');
            link.href='/opcr/form/print/o/p/c/r?link=' + encodeURIComponent(linkl);
            link.target = '_blank';
            link.click();
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
