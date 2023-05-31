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
                <!-- <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div> -->
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
                                    <!--MFO-->
                                    <td v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)"
                                        style="vertical-align:middle"
                                    >
                                        {{ opcr.mfo_desc }}
                                    </td>
                                    <!--Success Indicator-->
                                    <td v-if="index === 0 || opcr.success_indicator !== opcrs[index - 1].success_indicator"
                                        :rowspan="getRowspanIndicator(opcr.success_indicator, index)"
                                        style="vertical-align:middle">
                                        {{ opcr.success_indicator }}
                                    </td>
                                    <!--Alloted Budget-->
                                    <td :rowspan="form.opcrs.length" v-if="index===0" style="vertical-align:middle">
                                        PS = {{ halfSem(ps) }} <br>(annual={{ format_number_conv(ps)  }}) <br><br>MOOE = {{ halfSem(mooe) }} (annual={{ format_number_conv(mooe)  }})
                                    </td>
                                    <!--Accountable Division-->
                                    <td v-if="index === 0 || opcr.office_accountable !== opcrs[index - 1].office_accountable"
                                        :rowspan="getRowspan2(opcr.office_accountable, index)"
                                        style="vertical-align:middle"
                                    >
                                        {{ opcr.office_accountable }}
                                    </td>
                                    <!--Actual Accomplsihemnts-->
                                    <td><textarea v-model="form.opcrs[index].accomplishments"></textarea></td>
                                    <!--Rating Q-->
                                    <td>
                                        <input v-model="form.opcrs[index].rating_q" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <!--Rating E-->
                                    <td>
                                        <input v-model="form.opcrs[index].rating_e" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <!--Rating T-->
                                    <td>
                                        <input v-model="form.opcrs[index].rating_t" class="centered-input"  type="number" min="1" max="5" step="1">
                                    </td>
                                    <td>{{ getAverage(index) }}</td>
                                    <td><input type="text" v-model="form.opcrs[index].remarks" /></td>
                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="3">TOTAL RATING</td>
                                    <td>{{ getTotalAverage() }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="3">FINAL AVERAGE RATING</td>
                                    <td>{{ getAverageAll() }}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered border-dark">
                        <tbody>
                            <tr>
                                <td>Assessed by PMT Secretariat:</td>
                                <td>Reviewed by:</td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <br><br>
                                    <strong>ALICIA M. GRACIADAS</strong>
                                </td>
                                <td class="text-center font-weight-bold"><br><br>
                                    <strong>FATIMA P. MONTEJO</strong>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" style="font-size: 12px">PMT Head Secretariat</td>
                                <td class="text-center" style="font-size: 12px">PMT Chairperson</td>
                            </tr>
                            <tr>
                                <td style="font-size: 12px">Date:</td>
                                <td style="font-size: 12px">Date:</td>
                            </tr>
                        </tbody>
                    </table>
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
        FFUNCCOD: String,
        mooe: Number,
        ps: Number,
    },
    data() {
        return{
            total_ave: 0,
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
        if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
    },
    methods:{

        halfSem(amount){
            var ret = parseFloat(amount)/2;
            return this.format_number_conv(ret,2,true);
        },
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
                    break;
                }
            }

            return count;
        },
        getRowspan2(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].office_accountable === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count=parseFloat(count)+1;
                } else {
                    break;
                }
            }

            return count;
        },
        getRowspanIndicator(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].success_indicator === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count=parseFloat(count)+1;
                } else {
                    break;
                }
            }

            return count;
        },
        getTotalAverage(){
            var total=0;
            for(let i =0; i<this.form.opcrs.length; i++){
                var rat_e= this.form.opcrs[i].rating_e;
                var rat_q = this.form.opcrs[i].rating_q;
                var rat_t = this.form.opcrs[i].rating_t;
                var avee = parseFloat(rat_e)+parseFloat(rat_q)+parseFloat(rat_t)
                total = total +(avee/3);
            }
            this.total_ave=total;
            return this.format_number_conv(total,2,true);

        },
        getAverageAll(){
            var aver = parseFloat(this.total_ave)/(parseFloat(this.form.opcrs.length));
            this.total_ave = aver;
            return this.format_number_conv(aver,2,true)
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
            if(this.opcrs[ind].rating_e==""){
                this.opcrs[ind].rating_e=1;
            }
            if(this.opcrs[ind].rating_q==""){
                this.opcrs[ind].rating_q=1;
            }
            if(this.opcrs[ind].rating_t==""){
                this.opcrs[ind].rating_t=1;
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
            if(isNaN(this.total_ave)){
                alert('Some values are empty!');
            }else{
                let text = "WARNING!\nAre you sure you want to save changes to this OPCR?";
                if (confirm(text) == true) {
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
                }

            }

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
