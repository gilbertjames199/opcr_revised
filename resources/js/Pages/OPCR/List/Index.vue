<template>
    <Head>
        <title>List of OPCRs</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Office Performance Commitment Rating (OPCR)</h3>

            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/opcrlist/create/${FFUNCCOD}`">Create OPCR</Link>
                    <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button> -->
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6">
            <b>Office</b>: <u>{{ office.FFUNCTION }}</u>
            <p><i
                    title="To have your targets approved, click on the target button associated with the selected OPCR. Upon reaching the target page, click the submit button located at the top right of the targets form.">Note:
                    You can only rate once target is approved </i>
            </p>
        </div>
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
                                <td>OPCR </td>
                                <td>{{ office.FFUNCTION }} </td>
                                <td>{{ opcr_list.semester }}</td>
                                <td>{{ formatMonth(opcr_list.date_from) }} to {{ formatMonthYear(opcr_list.date_to) }}</td>
                                <td>
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link class="dropdown-item" :href="`/opcrlist/${opcr_list.id}/edit`">Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <!-- <Button class="dropdown-item disabled"
                                                    v-if="parseFloat(opcr_list.target_status) < 2" disabled>
                                                    Rating
                                                </Button>
                                                <Link class="dropdown-item" v-else
                                                    :href="`/opcr/form/${opcr_list.id}/${FFUNCCOD}`">
                                                Rating
                                                </Link> -->
                                                <Link class="dropdown-item"
                                                    :href="`/opcr/form/${opcr_list.id}/${FFUNCCOD}`">
                                                Rating
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/opcrtarget/${opcr_list.id}`">Target
                                                </Link>
                                            </li>
                                            <!-- <li>
                                                <Link class="dropdown-item" :href="`/opcraccomplishment/${opcr_list.id}`">
                                                Accomplishment</Link>
                                            </li> -->
                                            <li>
                                                <!--goToRep(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, opcr_id)-->
                                                <button class="dropdown-item" @click="showModal(opcr_list.FFUNCCOD,
                                                    opcr_list.total,
                                                    opcr_list.ave,
                                                    opcr_list.dept_head,
                                                    opcr_list.opcr_date,
                                                    opcr_list.mooe,
                                                    opcr_list.ps,
                                                    opcr_list.id
                                                )">
                                                    Download PDF
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
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:400px" />
            </div>
        </Modal>
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";

export default {
    props: {
        opcr_lists: Object,
        office: Object,
        FFUNCCOD: String
    },
    data() {
        return {
            my_link: "",
            displayModal: false,
        }
    },
    components: {
        Pagination, Filtering, Modal
    },
    methods: {
        deleteRA(id) {
            let text = "WARNING!\nAre you sure you want to delete the Research Agenda?";
            if (confirm(text) == true) {
                this.$inertia.delete("/ResearchAgenda/" + id);
            }
        },
        goToRep(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            //alert("opcr_id: " + id);
            var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Fform%2FMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Fform&decorate=no&output=pdf';
            var params = '&total=' + total + '&ave=' + ave + '&dept_head=' + dept_head +
                '&opcr_date=' + opcr_date + '&mooe=' + mooe + '&ps=' + ps +
                '&FFUNCCOD=' + FFUNCCOD + '&opcr_id=' + id;
            var linkl = linkt + jasper_ip + jasper_link + params;
            const link = document.createElement('a');
            link.href = '/opcr/form/print/o/p/c/r?link=' + encodeURIComponent(linkl);
            link.target = '_blank';
            link.click();
        },
        viewlink(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            //var linkt ="abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var linkt = "http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Fform%2FMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Fform&decorate=no&output=pdf';
            var params = '&total=' + total + '&ave=' + ave + '&dept_head=' + dept_head +
                '&opcr_date=' + opcr_date + '&mooe=' + mooe + '&ps=' + ps +
                '&FFUNCCOD=' + FFUNCCOD + '&opcr_id=' + id;
            var linkl = linkt + jasper_ip + jasper_link + params;

            return linkl;
        },
        showModal(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            this.my_link = this.viewlink(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id);
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
    }
};
</script>
<style>
.row-centered {
    text-align: center;
}

.col-centered {
    display: inline-block;
    float: none;
    text-align: left;
    margin-right: -4px;
}

.pos {
    position: top;
    top: 240px;
}
</style>
