<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>LOGICAL FRAMEWORK</h3>
            <div class="peers">


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
                                <th>Office</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="functional in data">
                                <td>{{ functional.FFUNCTION }}</td>
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
                                            <!--/{id}/{idinteroutcome}/edit
                                            <li><Link class="dropdown-item" :href="`/paps/${dat.id}/${dat.idmfo}/edit`">Edit</Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="deletePAPS(dat.id)">Delete</Link></li>-->

                                            <li>
                                                <Link class="dropdown-item"
                                                    :href="`/divisions/${functional.department_code}`">Divisions</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item"
                                                    :href="`/office-aip-code/${functional.department_code}`">AIP Code</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item"
                                                    :href="`/revision/general/administration/services/${functional.FFUNCCOD}/plan`">
                                                GAS Profile/Design</Link>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" target="_blank"
                                                    :href="`/logframe/${functional.FFUNCCOD}`">
                                                    Logframe Details
                                                </a>
                                            </li>
                                            <!-- <li v-if="functional.FFUNCCOD === '1031'">
                                                <button class="dropdown-item"
                                                    @click="showModalAd(functional.FFUNCCOD, functional.FFUNCTION)">
                                                    Print Logframe
                                                </button>
                                            </li>
                                            <li v-else> -->
                                            <li>
                                                <button class="dropdown-item"
                                                    @click="showModal(functional.FFUNCCOD, functional.FFUNCTION)">
                                                    Print Logframe ...
                                                </button>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/opcrlist/${functional.FFUNCCOD}`">OPCR
                                                </Link>
                                            </li>
                                            <!-- <li><Link class="dropdown-item" :href="`/logframe/${functional.FFUNCCOD}`">View Logframe</Link></li> -->
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- <div class="row justify-content-center">
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
                </div> -->

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">

            <div class="d-flex justify-content-center">
                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
        <!-- {{ my_link }} -->
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        // idinteroutcome: String,
        // idmfo: String,
        // can: Object,
        // filters: Object,
    },
    data() {
        return {
            my_link: "",
            displayModal: false,
            //search: this.$props.filters.search,
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/" + this.idmfo,
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    components: {
        Pagination, Filtering, Modal,
    },

    methods: {



        showCreate() {
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
        deletePAPS(id) {
            let text = "WARNING!\nAre you sure you want to delete the Program and Projects? " + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id + "/" + this.idmfo);
            }
        },
        getToRep(ffunccod, ffunction) {
            // alert(data[0].FFUNCCOD);
            // var linkt = "http://";
            // var jasper_ip = this.jasper_ip;
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FLogFrame&reportUnit=%2Freports%2Fplanning_system%2FLogFrame%2FLogframe&standAlone=true&decorate=no&output=pdf';
            // var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            // var link1 = linkt + jasper_ip + jasper_link + params;
            // return link1;
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            //var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FLogFrame&reportUnit=%2Freports%2Fplanning_system%2FLogFrame%2FLogframe&standAlone=true&decorate=no&output=pdf';
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FNLogFrame%2FLogframe&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FNLogFrame&standAlone=true&decorate=no&output=pdf'
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            // prompt('getToRep: ' + link1, link1);
            return link1;
        },

        showModal(ffunccod, ffunction) {
            // alert(ffunccod+"\n"+ffunction);
            this.my_link = this.getToRep(ffunccod, ffunction);
            this.displayModal = true;
        },
        showModalAd(ffunccod, ffunction) {
            //alert("showModalAd\n"+ffunccod+"\n"+ffunction);
            // var linkt = "http://";
            // var jasper_ip = this.jasper_ip;
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogframe_spcl%2FMAIN_LOGFRAME&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogframe_spcl&decorate=no&output=pdf'
            // var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            // var link1 = linkt + jasper_ip + jasper_link + params;
            // this.displayModal = true;
            // this.my_link = link1;

            var linkt = "http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogframe_spcl%2FMAIN_LOGFRAME&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogframe_spcl&decorate=no&output=pdf'
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            this.displayModal = true;
            // alert('ad: ' + link1)
            this.my_link = link1;

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
