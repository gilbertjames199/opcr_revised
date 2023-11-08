<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR Standard</h3>
            <div class="peers" v-if="auth.user.department_code === '04'">
                <div class="peer mR-10">
                    Search MFO
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
                <div class="peer mR-10">

                    Select Office <span style="color:red">(select office before printing)</span>
                    <select v-model="FFUNCCOD" class="form-control form-control-sm" @change="filterMFOs()">
                        <option></option>
                        <option v-for="func in functions" :value="func.FFUNCCOD">
                            {{ func.FFUNCTION }}
                        </option>
                    </select>
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/paps/direct/create`">Add Programs and Projects </Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showModal(
                        filter_FFUNCCOD,
                        filter_FFUNCTION,
                        filter_mooe,
                        filter_Ps
                    )">Print OPCR Standard</button>
                    <button class="btn btn-sm btn-danger mL-2 text-white" @click="clearFilter">Clear Filter</button>
                </div>
            </div>
            <div class="peers" v-else>
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">

                </div>
                <div class="peer mR-10">
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/paps/direct/create`">Add Programs and Projects </Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showModal(
                        filter_FFUNCCOD,
                        filter_FFUNCTION,
                        filter_mooe,
                        filter_Ps
                    )">Print OPCR Standard</button>

                </div>
            </div>

            <!-- <Link :href="`/inter_outcome/${idoutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>
        <filtering v-if="filter" @closeFilter="filter = false">
            <div v-if="auth.user.department_code === '04'">
                Filter by Office
                <select v-model="FFUNCCOD" class="form-control" @change="filterMFOs()">
                    <option value=""></option>
                    <option v-for="func in functions" :value="func.FFUNCCOD">
                        {{ func.FFUNCTION }}
                    </option>
                </select>
            </div>

            Filter by MFO
            <select v-model="mfosel" class="form-control" @change="filterData()">
                <option></option>
                <option v-for="mfo in mfos_data" :value="mfo.id">
                    {{ mfo.mfo_desc }}
                </option>
            </select>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="showModal(
                filter_FFUNCCOD,
                filter_FFUNCTION,
                filter_mooe,
                filter_Ps
            )">Print OPCR Standard</button>&nbsp;
            <button class="btn btn-sm btn-danger mT-5 text-white" @click="clearFilter">Clear Filter</button>
        </filtering>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Major Final Output</th>
                                <th>PAPS Description</th>
                                <th>Means of Verification</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td>
                                    <div v-if="dat.m_f_o">{{ dat.m_f_o.mfo_desc }}</div>
                                </td>
                                <td>{{ dat.paps_desc }}</td>
                                <td>{{ dat.MOV }}</td>
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
                                            <!--/{id}/{idinteroutcome}/edit-->
                                            <li>
                                                <Link v-if="isEmptyObject(dat.output)" class="dropdown-item"
                                                    :href="`/OPCRpaps/create/${dat.id}`">Add Standard</Link>
                                            </li>
                                            <li>
                                                <Link v-if="isNotEmptyObject(dat.output)" class="dropdown-item"
                                                    :href="`/OPCRpaps/edit/${dat.id}`">Edit Standard</Link>
                                            </li>
                                            <li>
                                                <Link v-if="isNotEmptyObject(dat.output)" class="text-danger dropdown-item"
                                                    @click="deleteStandard(dat.id)">Delete Standard</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/Rating/${dat.id}`">Ratings</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/Quality/${dat.id}`">Quality</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/Timeliness/${dat.id}`">Timeliness
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
                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                        <Pagination_Preserved :links="data.links" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
        <!-- {{ functions }} -->
        <!-- {{ mfos_data }} -->
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Pagination_Preserved from "../../Shared/Pagination_Preserved.vue";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        auth: Object,
        data: Object,
        filters: Object,
        functions: Object,
        MOOE: Object,
        PS: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        // idmfo: String,
        idpaps: Number,
        can: Object,
        mfos: Object
    },

    data() {
        return {
            my_link: "",
            displayModal: false,
            search: this.$props.filters.search,
            filter: false,
            FFUNCCOD: "",
            mfos_data: [],
            filter_FFUNCCOD: "",
            filter_mooe: "",
            filter_FFUNCTION: "",
            filter_Ps: "",
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/OPCRpaps/direct",
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
        Pagination, Filtering, Modal, Pagination_Preserved
    },
    mounted() {

        if (this.auth.user.department_code !== '04') {
            this.filter_FFUNCCOD = this.functions[0].FFUNCCOD
            this.filter_FFUNCTION = this.functions[0].FFUNCTION
            this.filter_mooe = this.functions[0].MOOE
            this.filter_Ps = this.functions[0].PS
        }
        this.mfos_data = this.mfos;
    },
    methods: {
        deleteStandard(id) {
            let text = "WARNING!\nAre you sure you want to delete this Standard?";
            if (confirm(text) == true) {
                this.$inertia.delete("/OPCRpaps/" + id + "/");
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        async filterMFOs() {
            this.mfos_data = [];
            var dataFFUNCCOD = this.functions.filter((func) => func.FFUNCCOD === this.FFUNCCOD);
            this.filter_FFUNCCOD = dataFFUNCCOD[0].FFUNCCOD;
            this.filter_FFUNCTION = dataFFUNCCOD[0].FFUNCTION;
            this.filter_Ps = dataFFUNCCOD[0].PS;
            this.filter_mooe = dataFFUNCCOD[0].MOOE;
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.FFUNCCOD;
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
            this.filterData();
        },
        async clearFilter() {
            this.mfosel = "";
            this.FFUNCCOD = "";
            this.filterData();
        },
        async filterData() {
            //alert(this.mfosel);
            this.$inertia.get(
                "/OPCRpaps/direct",
                {
                    mfosel: this.mfosel,
                    FFUNCCOD: this.FFUNCCOD
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        getToRep(ffunccod, ffunction, MOOE, PS) {
            // alert(data[0].FFUNCCOD);
            var linkt = "http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR_Standard&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Standard%2FOPCRStandard&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction + '&MOOE=' + MOOE + '&PS=' + PS;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },

        showModal(ffunccod, ffunction, MOOE, PS) {
            // alert("FFUNCCOD: " + ffunccod + "\n "
            //     + " FFUNCTION: " + ffunction + "\n " +
            //     "MOOE: " + MOOE + " \n" +
            //     "PS: " + PS
            // )
            this.my_link = this.getToRep(ffunccod, ffunction, MOOE, PS);
            this.displayModal = true;
        },

        hideModal() {
            this.displayModal = false;
        },
        isEmptyObject(obj) {
            // Check if the object is empty
            return Object.keys(obj).length === 0;
        },
        isNotEmptyObject(obj) {
            return Object.keys(obj).length > 0;
        },
        pageChange(direction, limit_local) {
            var num = 0;
            if (direction === 'next') {
                num = this.data.current_page + 1;
            } else {
                if (this.data.current_page === 1) {
                    num = 1;
                } else {
                    num = this.data.current_page - 1;
                }
            }
            this.$inertia.get(
                "/OPCRpaps/direct",
                {
                    page: num,
                    mfosel: this.mfosel,
                    FFUNCCOD: this.FFUNCCOD
                    // mun: this.select_mun,
                    // bar: this.select_bar,
                    // pur: this.select_pur,
                    // gender: this.gender,
                    // curr_school: this.curr_school,
                    // tab_sel: this.tab_selected,
                    // my_table_data: this.my_table_data
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                });


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
