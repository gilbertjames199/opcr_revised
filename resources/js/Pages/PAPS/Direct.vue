<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Programs and Projects </h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/paps/direct/create`">Add Programs and Projects </Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showModal(
                        func_code,
                        func_name
                    )">Print DPCR Standard</button>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
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
            <div v-if="$page.props.auth.user.department_code === '04'">
                Filter by Office
                <select v-model="FFUNCCOD" class="form-control" @change="filterMFOs()">
                    <option v-for="FFUNCCOD in offices" :value="FFUNCCOD.FFUNCCOD">
                        {{ FFUNCCOD.FFUNCTION }}
                    </option>
                </select>
            </div>
            <div v-if="$page.props.auth.user.department_code === '02'">
                Filter by Division
                <select v-model="division_code" class="form-control" @change="filterMFOs()">
                    <option v-for="div in divisions" :value="div.division_code">
                        {{ div.division_name1 }}
                    </option>
                </select>
            </div>
            Filter by MFO
            <select v-model="mfosel" class="form-control" @change="filterData()">
                <option v-for="mfo in mfos_data" :value="mfo.id">
                    {{ mfo.mfo_desc }}
                </option>
            </select>
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
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td>
                                    <div v-if="dat.m_f_o">{{ dat.m_f_o.mfo_desc }}</div>
                                </td>
                                <td>
                                    <!-- <div v-if="dat.type==='GAS'">General Administration and Support (GAS) - {{ dat.paps_desc }}</div> -->
                                    <div>{{ dat.paps_desc }}</div>
                                </td>
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
                                                <Link class="dropdown-item"
                                                    :href="`/strategies/${dat.id}/${ismfo}/strat/mfo`">Strategies</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/revision/${dat.id}`">PPA Profile</Link>
                                            </li>
                                            <li v-if="Number(FFUNCCODE) === 4421">
                                                <Link class="dropdown-item" :href="`/hospitals/${dat.id}`">Hospital Output</Link>
                                            </li>
                                            <li v-else>
                                                <Link class="dropdown-item" :href="`/divisions/${dat.id}`">Division Output</Link>
                                            </li>
                                            <!-- <li>
                                                <Link class="dropdown-item" :href="`/divisions/${dat.id}`">Division Output</Link>
                                            </li> -->
                                            <li>
                                                <Link class="dropdown-item" :href="`/paps/${dat.id}/${dat.idmfo}/edit`">Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteMFO(dat.id)">Delete
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
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <!-- FFUNCCOD: {{ FFUNCCOD }} <br />
        mfosel: {{ mfosel }} -->
        <!-- {{ FFUNCCOD }} <br />
        {{ offices }} -->
         <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
        <!-- {{ divisions }} -->
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        filters: Object,
        offices: Object,
        FFUNCCODE: Object,
        department_code: Object,
        office: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        // idmfo: String,
        can: Object,
        divisions: Object,
        mfos: Object
    },
    data() {
        return {
            displayModal: false,
            search: this.$props.filters.search,
            filter: false,
            ismfo: 0,
            mfos_data: [],
            mfosel: "",
            FFUNCCOD: "",
            func_code: "",
            func_name: "",
            filter_FFUNCTION: "",
            division_code: ""
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/direct",
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
    mounted() {
        this.office_function()
        this.func_name = this.office
        this.func_code = this.FFUNCCODE
        this.mfos_data = this.mfos;
    },
    methods: {
        office_function(){
            if(this.department_code === '04'){
                const selectedOffice = this.offices.find(office => office.FFUNCCOD === this.FFUNCCOD);
                this.func_code = this.FFUNCCOD
                this.func_name = selectedOffice ? selectedOffice.FFUNCTION : '';

                //  console.log(this.func_name)
            } else {
                this.func_code = this.FFUNCCODE
                this.func_name = this.office
            }
        },

        showModal(ffunccod, ffunction) {
            // alert("FFUNCCOD: " + ffunccod + "\n "
            //     + " FFUNCTION: " + ffunction + "\n " +
            //     "MOOE: " + MOOE + " \n" +
            //     "PS: " + PS
            // )
            console.log("test1: "+ffunccod);
            console.log("test2: "+ffunction);
            this.my_link = this.getToRep(ffunccod, ffunction);
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        deleteMFO(id) {
            let text = "WARNING!\nAre you sure you want to delete the PAP?";
            if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id + "/");
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        getToRep(ffunccod, ffunction) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FDPCR&reportUnit=%2Freports%2Fplanning_system%2FDPCR%2FDPCR_Standard&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        async clearFilter() {
            this.mfosel = "";
            this.filterData();
        },
        async filterMFOs() {
            this.office_function();

            this.mfos_data = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.FFUNCCOD;
                // alert(my_url);
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async filterMFOsByDivision() {
            this.office_function();

            this.mfos_data = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.division_code  +"/filter/by/division";
                // alert(my_url);
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async filterData() {
            //alert(this.mfosel);

            this.$inertia.get(
                "/paps/direct",
                {
                    mfosel: this.mfosel
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }
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
