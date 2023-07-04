<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Programs and Projects <!--{{  idmfo }}--></h3>
            <div v-if="from_mfo==true">
                <Link :href="`/paps/${idmfo}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
            <div v-else>
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>

        </div>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <label for="">Major Final Outputs</label>
                <select class="form-control form-select" v-model="form.idmfo" >
                    <option v-for="mfo in mfos.data" :value="mfo.id" >
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idstrategy">{{ form.errors.idstrategy }}</div>

                <label for="">Program and Projects (PAPS) Description	</label>
                <input type="text" v-model="form.paps_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.paps_desc">{{ form.errors.paps_desc }}</div>

                <label for="">Means of Verification	</label>
                <input type="text" v-model="form.MOV" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.MOV">{{ form.errors.MOV }}</div>

                <label for="">Type</label>
                <select class="form-control form-select" v-model="form.type" >
                    <option>Activity</option>
                    <option>Program</option>
                    <option>Project</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.type">{{ form.errors.type }}</div>

                <label for="">Office</label>
                <!--<input type="number" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control" v-model="form.FFUNCCOD" >
                    <option v-for="functional in functions" :value="functional.FFUNCCOD" >
                        {{ functional.FFUNCTION }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label for="">Chief Executive Agenda</label>
                <select class="form-control form-select" v-model="form.chief_executive_agenda" >
                    <option value=""></option>
                    <option v-for="chief_agenda in chief_agenda" :value="chief_agenda.id" >
                        {{ chief_agenda.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.chief_executive_agenda">{{ form.errors.chief_executive_agenda }}</div>

                <label for="">Socio-Economic Agenda</label>
                <select class="form-control form-select" v-model="form.socio_economic_agenda" >
                    <option value=""></option>
                    <option v-for="socio_economic in socio_economic" :value="socio_economic.id" >
                        {{ socio_economic.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.socio_economic_agenda">{{ form.errors.socio_economic_agenda }}</div>

                <label for="">Sustainable Development Goals</label>
                <select class="form-control form-select" v-model="form.sust_devt_goal" >
                    <option value=""></option>
                    <option v-for="sustainable in sustainable" :value="sustainable.id" >
                        {{ sustainable.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.sust_devt_goal">{{ form.errors.sust_devt_goal }}</div>

                <label for="">Executive Legislative Agenda</label>
                <select class="form-control form-select" v-model="form.executive_legislative_agenda" >
                    <option value=""></option>
                    <option v-for="executive_legislative in executive_legislative" :value="executive_legislative.id" >
                        {{ executive_legislative.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.executive_legislative_agenda">{{ form.errors.executive_legislative_agenda }}</div>

                <label for="">Research Agenda</label>
                <select class="form-control form-select" v-model="form.research_agenda" >
                    <option value=""></option>
                    <option v-for="research in research" :value="research.id" >
                        {{ research.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.research_agenda">{{ form.errors.research_agenda }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{  form }} -->

    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            editData: Object,
            mfos: Object,
            chief_agenda: Object,
            socio_economic: Object,
            sustainable: Object,
            executive_legislative: Object,
            research: Object,
            idmfo: String,
            functions: Object
        },
        components: {

          Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

        },
        data() {
            return {
                from_mfo: false,
                submitted: false,
                form: useForm({
                    paps_desc: "",
                    type: "",
                    FFUNCCOD	: "",
                    idmfo	: "",
                    MOV: "",
                    chief_executive_agenda: "",
                    socio_economic_agenda: "",
                    sust_devt_goal: "",
                    executive_legislative_agenda: "",
                    research_agenda: "",
                    id: null
                }),
                year_values:  ["2000",
                        "2001",
                        "2002",
                        "2003",
                        "2004",
                        "2005",
                        "2006",
                        "2007",
                        "2008",
                        "2009",
                        "2010",
                        "2011",
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                        "2022",
                        "2023",
                        "2024",
                        "2025",
                        "2026",
                        "2027",
                        "2028",
                        "2029",
                        "2030",
                        "2031",
                        "2032",
                        "2033",
                        "2034",
                        "2035",
                        "2036",
                        "2037",
                        "2038",
                        "2039",
                        "2040",
                        "2041",
                        "2042",
                        "2043",
                        "2044",
                        "2045",
                        "2046",
                        "2047",
                        "2048",
                        "2049",
                        "2050",
                        "2051",
                        "2052",
                        "2053",
                        "2054",
                        "2055",
                        "2056",
                        "2057",
                        "2058",
                        "2059",
                        "2060",
                        "2061",
                        "2062",
                        "2063",
                        "2064",
                        "2065",
                        "2066",
                        "2067",
                        "2068",
                        "2069",
                        "2070",
                        "2071",
                        "2072",
                        "2073",
                        "2074",
                        "2075",
                        "2076",
                        "2077",
                        "2078",
                        "2079",
                        "2080",
                        "2081",
                        "2082",
                        "2083",
                        "2084",
                        "2085",
                        "2086",
                        "2087",
                        "2088",
                        "2089",
                        "2090",
                        "2091",
                        "2092",
                        "2093",
                        "2094",
                        "2095",
                        "2096",
                        "2097",
                        "2098",
                        "2099",
                        "2100",
                        ],
                pageTitle: ""
            };
        },

        mounted() {
            if(this.idmfo!==undefined){
                this.from_mfo=true

            }
            this.form.idmfo=this.idmfo
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.paps_desc=this.editData.paps_desc
                this.form.MOV=this.editData.MOV
                this.form.type=this.editData.type
                this.form.FFUNCCOD=this.editData.FFUNCCOD
                this.form.idmfo=this.editData.idmfo
                this.form.chief_executive_agenda = this.editData.chief_executive_agenda
                this.form.socio_economic_agenda = this.editData.socio_economic_agenda
                this.form.sust_devt_goal = this.editData.sust_devt_goal
                this.form.executive_legislative_agenda = this.editData.executive_legislative_agenda
                this.form.research_agenda = this.editData.research_agenda
                this.form.id=this.editData.id
            } else {
                this.pageTitle = "Create"
                if(this.idmfo!=undefined){
                    this.form.idmfo=this.idmfo
                    this.from_mfo=true
                }
                this.setselect();
            }

        },

        methods: {
            submit() {

                this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                if (this.editData !== undefined) {
                    //alert('from mfo: '+this.from_mfo);
                    if(this.from_mfo==true){
                        //alert('paps/update/'+this.form.id);
                        this.form.patch("/paps/update/"+this.form.id, this.form);
                    }else{
                        //alert('direct paps/'+this.form.id);
                        this.form.patch("/paps/"+this.form.id, this.form);
                    }

                } else {
                    this.form.id=null;

                    if(this.from_mfo==true){
                        this.form.post("/paps/save", this.form);
                    }else{
                        this.form.post("/paps/store", this.form);
                    }

                }
            },
            setselect(){
                const now = new Date();
                var year_now = now.getFullYear();
                this.form.plan_period_from=year_now;
                this.form.plan_period_to=year_now;
            }
        },
    };
    </script>


