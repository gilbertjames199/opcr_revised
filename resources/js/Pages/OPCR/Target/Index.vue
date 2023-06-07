<template>
    <Head>
        <title>OPCR Targets</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR Targets</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/opcrtarget/create/${opcr_list_id}`">Create OPCR</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
                &nbsp;
                <Link :href="`/opcrlist/${FFUNCCOD}`">
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
                    <table class="table table-hover table-striped table-bordered border-dark">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>PAPS</th>
                                <th>Success Indicator</th>
                                <th>Target</th>
                                <th>Target Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dat, index) in data" :key="index">
                                <td v-if="index === 0 || dat.paps_desc !== data[index - 1].paps_desc"
                                        :rowspan="getRowspanPaps(dat.paps_desc, index)"
                                        style="vertical-align:middle"
                                >
                                    {{ dat.paps_desc }}
                                </td>
                                <td>{{ dat.success_indicator }}</td>
                                <td>{{ dat.target_success_indicator }}</td>
                                <td>{{  dat.quantity }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li v-if="dat.id"><Link class="dropdown-item" :href="`/opcrtarget/${dat.id}/edit`">Edit</Link></li>
                                            <li v-if="dat.id"><Link class="text-danger dropdown-item" @click="deleteTarget(dat.id)">Delete </Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="createTarget(dat.idpaps, dat.success_indicator)">
                                                    Add Target
                                                </Link>
                                            </li>
                                            <!-- <li><Link class="dropdown-item" :href="`/opcrlist/${opcr_list.id}/edit`">Edit</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcr/form/${opcr_list.id}/${FFUNCCOD}`">Rating</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcrtarget/${opcr_list.id}`">Target</Link></li> -->
                                            <!-- -->
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
        opcr_list_id: String,
        data: Object,
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


        deleteTarget(id) {
            let text = "WARNING!\nAre you sure you want to delete the Target?";
              if (confirm(text) == true) {
                this.$inertia.delete("/opcrtarget/" + id);
            }
        },
        createTarget(idpaps, success_indic){
            //alert(idpaps);
            if(success_indic===null){
                alert('This PPA has no success indicator! Add success indicator for the target first!');
            }else{
                this.$inertia.get("/opcrtarget/create/" + this.opcr_list_id, {"idpaps": idpaps});
            }

        },
        getRowspanPaps(row, ind){

            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.data.length; i++) {
                if (this.data[i].paps_desc === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count=parseFloat(count)+1;
                } else {
                    break;
                }
            }

            return count;

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
