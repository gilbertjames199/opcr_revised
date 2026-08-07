<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Annual Investment Plans</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/ImplementingTeam/create`">Add Implementing Team</Link> -->
                </div>
            </div>
            <!-- <Link :href="'/Sectoral'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>
<!-- {{ data }} -->
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th rowspan="2">Year Period</th>
                                <th colspan="3" style="text-align: center">SANGUNIANG PANLALAWIGAN</th>
                                <!-- <th colspan="3" style="text-align: center">LOCAL DEVELOPMENT COUNCIL</th> -->
                                 <th rowspan="2">SP Resolution Number</th>
                                 <th rowspan="2">Last Page Number</th>
                                 <th rowspan="2">SIP Period</th>
                                <th rowspan="2">Action</th>
                            </tr>
                            <tr class="bg-secondary text-white">
                                <th>Year Period</th>
                                <th>Approve</th>
                                <th>Return</th>

                                <!-- <th>Year Period</th>
                                <th>Approve</th>
                                <th>Return</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(dat, index) in localData" :key="dat.id || index">
                                <tr class="clickable-row" @click="toggleAccordion(index)">
                                    <td>{{ dat.year_period }}</td>
                                    <td>{{ formatAipStatus(dat.sp_approved,"sp") }}
                                        <!-- {{ dat.aip_individuals }} -->
                                        <!-- {{ dat }} -->
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-success btn-sm text-white"
                                            :class="{ 'btn-light text-secondary': dat.sp_approved !== '0' }"
                                            :disabled="dat.sp_approved !== '0'"
                                            @click.stop="updateAIPStatus('SP1', dat.year_period)"
                                        >
                                            Approve AIP
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-danger btn-sm text-white"
                                            :class="{ 'btn-light text-secondary': dat.sp_approved !== '0' }"
                                            :disabled="dat.sp_approved !== '0'"
                                            @click.stop="updateAIPStatus('SP-2', dat.year_period)"
                                        >
                                            Return AIP
                                        </button>
                                    </td>
                                    <td>
                                        <input type="text"
                                        v-model="dat.sprn"
                                        class="form-control
                                        orm-control-sm"
                                        @change="updateAnnualInvestmentPlanInstitutional(dat.id, dat.sprn, 'sprn')">
                                    </td>
                                    <td>
                                        <input
                                        type="text" v-model="dat.last_page_number" class="form-control form-control-sm" @change="updateAnnualInvestmentPlanInstitutional(dat.id, dat.last_page_number, 'last_page_number')">
                                    </td>
                                    <td>{{ dat.sip_period }}</td>
                                    <!-- <td>{{ formatAipStatus(dat.ldc_approved,"ldc") }}</td>
                                    <td>Approve</td>
                                    <td>Return</td> -->
                                    <!-- <td>{{ dat.role }}</td> -->
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" @click.stop>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <!-- <li><Link class="dropdown-item" :href="`/ImplementingTeam/${dat.id}/edit`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteImplementingTeam(dat.id)">Delete</Link></li> -->
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="dat.accordion_visible == 1">
                                    <td :colspan="6" class="p-0">
                                        <table class="table table-sm table-borderless mb-0">
                                            <tbody>
                                                <tr v-for="(person, pidx) in dat.aip_individuals" :key="person.id || pidx">
                                                    <td style="width:40px">
                                                        <input type="checkbox" v-model="dat.aip_individuals[pidx].is_present">
                                                    </td>
                                                    <td>{{ person.name }}</td>
                                                    <td>SP Member</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </template>
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

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object,
        filters: Object,
    },
    data() {
        return{
            search: this.$props.filters ? this.$props.filters.search : '',
            localData: Array.isArray(this.$props.data) ? JSON.parse(JSON.stringify(this.$props.data)) : (this.$props.data || []),
        }
    },
    components: {
        Pagination, Filtering,
    },
    watch: {
        data: {
            handler(val) {
                // keep a local reactive copy of the prop so we can toggle accordion visibility
                this.localData = Array.isArray(val) ? JSON.parse(JSON.stringify(val)) : (val || []);
            },
            deep: true,
        },
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/institutional_aip",
                {
                    search: value,
                    // EmploymentStatus: this.EmploymentStatus,
                    // office: this.office_selected,
                    // division: this.division_selected,
                    // active_status: this.active_status,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
            // this.filterData();
        }, 300),
    },
    methods:{

        toggleAccordion(index) {
            // toggle accordion_visible on the local copy
            const item = this.localData[index];
            if (!item) return;
            // Vue 3 doesn't provide this.$set — assign directly to keep reactivity
            item.accordion_visible = item.accordion_visible == 1 ? 0 : 1;
        },

        updateAnnualInvestmentPlanInstitutional(id, value, field) {
            if (!id || !field) {
                return;
            }

            this.$inertia.post(
                `/institutional_aip/update/${field}/value`,
                {
                    id,
                    value,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                }
            );
        },

        // showCreate(){
        //     this.$inertia.get(
        //         "/institutional_aip",
        //         {
        //             raao_id: this.raao_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // deleteImplementingTeam(id) {
        //     let text = "WARNING!\nAre you sure you want to delete the Implementing Team?"+id;
        //       if (confirm(text) == true) {
        //         this.$inertia.delete("/ImplementingTeam/" + id);
        //     }
        // },
        // getAccomplishment(tar_id){
        //     this.$inertia.get(
        //         "/accomplishments",
        //         {
        //             idtarget: tar_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // getPercent(accomp, targqty){
        //     var accSum=0;
        //     accomp.forEach(myFunction);
        //     function myFunction(item){
        //         accSum += parseFloat(item.accomplishment_qty)

        //     }
        //     var percentt = (accSum/targqty)*100
        //     percentt=this.format_number(percentt,2,true)
        //     return percentt;
        // }
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
            .clickable-row{
                cursor: pointer;
            }
</style>
