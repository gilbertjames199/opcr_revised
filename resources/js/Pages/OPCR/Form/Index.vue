<template>
    <Head>
        <title>OPCR</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OFFICE PERFORMANCE COMMITMENT AND RATING FORM </h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
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
                    <form @submit.prevent="submit()">
                        <table class="table table-hover table-bordered border-dark">
                            <thead class="text-center align-items-center">
                                <tr class="bg-secondary text-white">
                                    <th rowspan="2">Major Final Output</th>
                                    <th rowspan="2">Success Indicators (Targets + Measures)</th>
                                    <th rowspan="2">Alloted Budget</th>
                                    <th rowspan="2">Accountable Division</th>
                                    <th rowspan="2">Actual Accomplishments</th>
                                    <th colspan="4" >Rating</th>
                                    <th rowspan="2">Remarks</th>
                                </tr>
                                <tr class="bg-secondary text-white">
                                    <th>Q</th>
                                    <th>E</th>
                                    <th>T</th>
                                    <th>Ave</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)"-->

                                <tr v-for="(opcr, index) in form.opcrs" :key="index">
                                    <td v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                    :rowspan="getRowspan(opcr.mfo_desc, index)">
                                        {{ opcr.mfo_desc }}
                                    </td>
                                    <td>{{ opcr.success_indicator }}</td>
                                    <td :rowspan="form.opcrs.length" v-if="index===0" style="vertical-align:middle">
                                        PS = 8,048,758 <br>MOOE=P3,082,250
                                    </td>
                                    <td >{{ opcr.office_accountable }}</td>
                                    <td><textarea v-model="form.opcrs[index].accomplishments"></textarea></td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_q" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_e" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <td>
                                        <!-- @keydown="disableTyping"-->
                                        <input v-model="form.opcrs[index].rating_t" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <td>{{ getAverage(index) }}</td>
                                    <td><input type="text" v-model="form.opcrs[index].remarks" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <button type="button"
                                class="btn btn-primary mt-3 text-white"
                                @click="submit()" :disabled="form.processing">
                            Save changes
                        </button>
                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            <!-- {{ opcrs[0].mfo_desc }} ** {{ opcrs[1].mfo_desc }} <br>
                            {{ opcrs[2].mfo_desc }} ** {{ opcrs[3].mfo_desc }} -->
                            <!-- {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries -->
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        opcrs: Object,
        FFUNCCOD: String
    },
    data() {
        return{
            form: useForm({
                opcrs: [],
            })
        }
    },
    computed:{

    },
    components: {
        Pagination, Filtering,
    },
    mounted(){
        this.form.opcrs = this.opcrs
    },
    methods:{


        deleteEla(id) {
            let text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/ELA/" + id);
            }
        },
        getRowspan(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].mfo_desc === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count=parseFloat(count)+1;
                } else {
                    //break;
                }
            }

            return count;
        },
        numberInput(value) {
            if (value < 1) {
                this.numberInput = 1;
            } else if (value > 5) {
                this.numberInput = 5;
            }
        },
        disableTyping(event) {
            if (!event.metaKey && !event.ctrlKey) {
                event.preventDefault();
            }
        },
        getAverage(ind){
            if(parseFloat(this.opcrs[ind].rating_e)>5){
                this.opcrs[ind].rating_e=5;
            }
            if(parseFloat(this.opcrs[ind].rating_e)<1){
                this.opcrs[ind].rating_e=1;
            }

            if(parseFloat(this.opcrs[ind].rating_q)>5){
                this.opcrs[ind].rating_q=5;
            }
            if(parseFloat(this.opcrs[ind].rating_q)<1){
                this.opcrs[ind].rating_q=1;
            }

            if(parseFloat(this.opcrs[ind].rating_t)>5){
                this.opcrs[ind].rating_t=5;
            }
            if(parseFloat(this.opcrs[ind].rating_t)<1){
                this.opcrs[ind].rating_t=1;
            }
            var ave = parseFloat(this.opcrs[ind].rating_e)+ parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
            ave = this.format_number_conv(ave/3,2,true);
            return ave;
        },
        submit(){
            let jsonString = JSON.stringify(this.form.opcrs);
            this.$inertia.post(
                "/opcr/form/store",
                {
                    opcrs: jsonString,
                    FFUNCCOD: this.FFUNCCOD
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            )
        },

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
