<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>LOGFRAME</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>

                <div class="peer">

                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                    &nbsp;&nbsp;
                    <Link :href="`/mfos/direct`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link>
                </div>

            </div>
<!--
            <Link :href="`/mfos/${idinteroutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-hover border">

                        <tbody>
                            <tr>
                                <td>SOCIETAL GOAL</td>
                                <td v-for="soc in societal" col-span="4">{{ soc.description }}</td>
                            </tr>
                            <tr>
                                <td>SECTOR OUTCOMES</td>
                                <td>
                                    <div v-if="FFUNCCOD===1031">
                                        <div v-if="sec_econ">
                                            Economic Services Sector:
                                            {{ sec_econ }}
                                        </div>
                                        <div v-if="sec_social">
                                            Social Services Sector:
                                            <div v-for="soc in sec_social">
                                                {{ soc.goal_description }}
                                            </div>
                                        </div>
                                        <div v-if="sec_general">
                                            <b>General and Public Services Sector:</b>
                                            <div v-for="gen in sec_general">
                                                {{ gen.goal_description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div v-for="sec in sec_goal">
                                            {{ sec.goal_description }}
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>ORGANIZATIONAL OUTCOME</td>
                                <div v-for="org in organizational">
                                    <div>- {{ org.goal_description }}</div>
                                </div>
                            </tr>
                            <tr>
                                <td>MAJOR FINAL OUTPUTS</td>
                                <td v-for="mfo in mfos">
                                    <tr >
                                        <td><b>{{ mfo.mfo_desc }}</b>

                                        </td>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>PAPS</td>
                                <td v-for="mfo in mfos">
                                    <tr >
                                        <td>
                                            <div v-for="pap in mfo.paps">
                                                {{ pap.paps_desc }} <span v-if="pap.MOV!=='-'">(<i>MOV: {{ pap.MOV }}</i>)</span>
                                                <div style="color: white"> .</div>
                                            </div>
                                        </td>
                                    </tr>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <!--
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
                -->
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
        societal: Object,
        sec_econ: Object,
        sec_social: Object,
        sec_general: Object,
        organizational: Object,
        sec_goal: Object,
        mfos: Object,
        // idinteroutcome: String,
        // idmfo: String,
        // can: Object,
        // filters: Object,
    },
    data() {
        return{
            //search: this.$props.filters.search,
        }
    },
    watch: {
            search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/"+this.idmfo,
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
        Pagination, Filtering,
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
        deletePAPS(id) {
            let text = "WARNING!\nAre you sure you want to delete the Program and Projects? "+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id+"/"+this.idmfo);
            }
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
