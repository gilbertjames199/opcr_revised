<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Individual Final Output</h3>
            <!-- <h4>{{ dept.FFUNCTION }}</h4> -->
            <Link :href="`/individual/outputs/${iddpcr}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <input type="hidden" v-model="form.iddpcr" class="form-control" autocomplete="positionchrome-off">

                <label for="">Output</label>
                <input type="text" v-model="form.individual_output" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.individual_output">{{ form.errors.individual_output }}</div>
<!--
                <label for="">Performance Measures / Success Indicator</label>
                <input type="text" v-model="form.performance_measure" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.performance_measure">{{ form.errors.performance_measure }}</div> -->

                <label for="">Verb</label>
                <input type="text" v-model="form.performance_measure" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.performance_measure">{{ form.errors.performance_measure }}</div>

                <!-- <label for="">Success Indicator</label>
                <input type="text" v-model="form.success_indicator" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.success_indicator">{{ form.errors.success_indicator }}</div> -->
                <label for="">Prescribed Period</label>
                <input type="text" v-model="form.prescribed_period" class="form-control" autocomplete="positionchrome-off" >
                <div class="fs-6 c-red-500" v-if="form.errors.prescribed_period">{{ form.errors.prescribed_period }}</div>
                <br>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">
                            Quality/Effectiveness
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">
                            Efficiency
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false" :disabled="form.efficiency1 === 'Yes'">
                            Timeliness
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Quality/Effectiveness</b></legend>

                            <div>
                                                <select class="form-control" v-model="form.quality1" :disabled="isDisabled">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                    <option value="Personal Initiative">Personal Initiative</option>
                                                </select>

                                            </div>
                                            <br>
                                             <div>
                                                <select class="form-control" v-model="form.quality2" :disabled="isDisabled">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                    <option value="Personal Initiative">Personal Initiative</option>
                                                </select>
                                            </div>
                                            <br>
                                             <div>
                                                <select class="form-control" v-model="form.quality3" :disabled="isDisabled">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                    <option value="Personal Initiative">Personal Initiative</option>
                                                </select>
                                            </div>

                        </fieldset>
                    </div>

                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Efficiency</b></legend>
                            <div>

                            <label for="">Standard Response Time</label>
                            <select class="form-control" v-model="form.efficiency1" :disabled="isDisabled">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <br>
                            <label for="">Number of requests/applications acted upon over number of request/applications received</label>
                            <select class="form-control" v-model="form.efficiency2" :disabled="isDisabled">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <br>
                            <label for="">Optimum use or resources (e.g., money, logistics, office supplies)</label>
                            <select class="form-control" v-model="form.efficiency3" :disabled="isDisabled">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            </div>
                        </fieldset>


                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Timeliness Rating </b></legend>
                            <div>
                                <input type="text" v-model="form.timeliness" class="form-control" autocomplete="positionchrome-off">

                            </div>

                        </fieldset>
                        </div>
                        </div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
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
            divid: Object,
            iddpcr: Number,
            auth: Object,
        },

        data() {
            return {
                submitted: false,
                my_div_outputs: [],
                my_submfos: [],
                division_id: null,
                idmfo: null,
                form: useForm({
                individual_output: "",
                prescribed_period:"",
                quality1:"",
                quality2:"",
                quality3:"",
                efficiency1:"",
                efficiency2:"",
                efficiency3:"",
                timeliness: "",
                performance_measure:"",
                department_code: "",
                idDPCR: "",
                id: null
                }),
                pageTitle: ""
            };
        },
        computed:{
            my_submfos_formatted(){
                let submfos_1 = this.submfos;
                if (this.form.idmfo) {
                    submfos_1 = submfos.filter((submfos) => submfos.idmfo === this.form.idmfo);
                }
                return submfos_1;
                // return submfos_1.map((subm)=>({
                //     id: subm.id,
                //     submfo_description: subm.submfo_description,
                //     idmfo: subm.idmfo
                // }));
            }
        },
        watch: {
        'form.efficiency1'(newValue) {
        if (newValue === 'Yes') {
            this.form.timeliness = 'No'; // Set timeliness to No when efficiency1 is Yes
        }
        },
    },
        mounted() {
            // console.log(this.auth.user.department_code);
            this.form.idDPCR = this.iddpcr;
            this.form.department_code = this.auth.user.department_code;
            if (this.editData !== undefined) {
                this.form.individual_output = this.editData.individual_output
            this.form.prescribed_period = this.editData.prescribed_period
            this.form.quality1 = this.editData.quality1
            this.form.quality2 = this.editData.quality2
            this.form.quality3 = this.editData.quality3
            this.form.efficiency1 = this.editData.efficiency1
            this.form.efficiency2 = this.editData.efficiency2
            this.form.efficiency3 = this.editData.efficiency3
            this.form.timeliness = this.editData.timeliness
            this.form.performance_measure = this.editData.performance_measure
            this.form.idpaps = this.editData.idpaps
            this.form.id = this.editData.id
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
