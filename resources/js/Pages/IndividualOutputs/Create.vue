<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Individual Final Output</h3>
            <!-- <h4>{{ dept.FFUNCTION }}</h4> -->
            <Link :href="`/individual/outputs`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <label for="">IPCR CODE</label>
                <input type="number" maxlength = "5" v-model="form.ipcr_code" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.ipcr_code">{{ form.errors.ipcr_code }}</div>

                <label for="">DIVISION</label>
                <select type="text" v-model="division_id" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="division in divisions" :value="division.id">
                        {{ division.description }}
                    </option>
                </select>

                <label for="">DIVISION OUTPUTS</label>
                <select type="text" v-model="form.id_div_output" @click="filterDivOutput()" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="division in my_div_outputs" :value="division.id">
                        {{ division.output }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_div_output">{{ form.errors.id_div_output }}</div>

                <label for="">MAJOR FINAL OUTPUT</label>
                <select type="text" v-model="form.idmfo" @click="filterSubMFO()" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="mfo in mfos" :value="mfo.id">
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>

                <label for="">SUB MFO</label>
                <select type="text" v-model="form.idsubmfo" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="submfo in my_submfos" :value="submfo.id">
                        {{ submfo.submfo_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idsubmfo">{{ form.errors.idsubmfo }}</div>

                <label for="">INDIVIDUAL OUTPUT</label>
                <input type="text" v-model="form.individual_output" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.individual_output">{{ form.errors.individual_output }}</div>

                <label for="">PERFORMANCE MEASURE</label>
                <input type="text" v-model="form.performance_measure" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.performance_measure">{{ form.errors.performance_measure }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>

    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";

export default {
        props: {
            editData: Object,
            mfos: Object,
            divisions: Object,
            div_outputs: Object,
            submfos: Object,
            divid: Object
        },

        data() {
            return {
                submitted: false,
                my_div_outputs: [],
                my_submfos: [],
                division_id: null,
                idmfo: null,
                form: useForm({
                    ipcr_code: "",
                    idmfo: "",
                    idsubmfo: "",
                    id_div_output: "",
                    individual_output: "",
                    performance_measure: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {

            if (this.editData !== undefined) {
                this.pageTitle= "Edit"
                this.form.ipcr_code=this.editData.ipcr_code
                this.form.idmfo=this.editData.idmfo
                this.form.id =this.editData.id
                this.division_id = this.divid
                this.filterDivOutput()
                this.filterSubMFO()
                this.form.idsubmfo = this.editData.idsubmfo
                this.form.id_div_output = this.editData.id_div_output
                this.form.individual_output = this.editData.individual_output
                this.form.performance_measure = this.editData.performance_measure
            } else {
                this.pageTitle = "Create"
                this.my_submfos = []
                this.my_div_outputs = []
                //this.form.FFUNCCOD = this.FFUNCCOD
            }

        },

        methods: {
            submit() {

                if (this.editData !== undefined) {
                    this.form.patch("/individual/outputs/", this.form);
                } else {
                    this.form.post("/individual/outputs/store", this.form);
                }
            },
            filterDivOutput(){
                this.my_div_outputs=[];
                this.div_outputs.forEach(i=>{
                    if(i.division_id===this.division_id){
                        this.my_div_outputs.push(i);
                    }
                });
                console.log(this.my_div_outputs);
                return this.my_div_outputs;
            },
            filterSubMFO(){
                this.my_submfos=[];
                this.submfos.forEach(i=>{
                    if(i.idmfo===this.form.idmfo){
                        this.my_submfos.push(i);
                    }
                });
                console.log(this.my_submfos);
                return this.my_submfos;
            }
        },
    };
    </script>
