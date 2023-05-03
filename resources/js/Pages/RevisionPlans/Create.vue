<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Revision Plan {{ idpaps }}</h3>
            <Link :href="`/revision/${idpaps}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <label for="">PROGRAMS AND PROJECTS </label>
                <input type="text" v-model="paps[0].paps_desc" class="form-control" />

                <label for="">PROJECT TITLE</label>
                <input type="text" v-model="form.project_title" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.project_title">{{ form.errors.project_title }}</div>

                <label for="">LIST OF LGUs COVERED</label>
                <input type="text" v-model="form.list_of_lgu_covered" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.list_of_lgu_covered">{{ form.errors.list_of_lgu_covered }}</div>

                <hr style="background-color: black !important; border:1px; height: 1px;">
                IMPLEMENTATION SCHEDULE<br>
                <label for="">START</label>
                <input type="date" v-model="form.date_start" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_start">{{ form.errors.date_start }}</div>

                <label for="">END</label>
                <input type="date" v-model="form.date_end" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_end">{{ form.errors.date_end }}</div>
                <hr style="background-color: black !important; border:1px; height: 1px;">

                INTENDED BENEFICIARIES<br>
                <label for="">MALE</label>
                <input type="number" v-model="form.beneficiary_male" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.beneficiary_male">{{ form.errors.beneficiary_male }}</div>

                <label for="">FEMALE</label>
                <input type="number" v-model="form.beneficiary_female" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.beneficiary_female">{{ form.errors.beneficiary_female }}</div>

                <hr style="background-color: black !important; border:1px; height: 1px;">
                BASELINE DISAGGREGATED DATA<br>
                <label for="">MALE</label>
                <input type="number" v-model="form.baseline_male" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.baseline_male">{{ form.errors.baseline_male }}</div>

                <label for="">FEMALE</label>
                <input type="number" v-model="form.baseline_female" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.baseline_female">{{ form.errors.baseline_female }}</div>

                <label for="">TOTAL</label>
                <input type="number" v-model="form.baseline_total" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.baseline_total">{{ form.errors.baseline_total }}</div>
                <hr style="background-color: black !important; border:1px; height: 1px;">

                <label for="">RATIONALE</label>
                <textarea v-model="form.rationale" style="height:100px;" class="form-control" autocomplete="chrome-off"></textarea>
                <div class="fs-6 c-red-500" v-if="form.errors.baseline_total">{{ form.errors.baseline_total }}</div>

                <label for="">OBJECTIVES</label>
                <textarea v-model="form.objective" style="height:100px;" class="form-control" autocomplete="chrome-off"></textarea>
                <div class="fs-6 c-red-500" v-if="form.errors.objective">{{ form.errors.objective }}</div>

                <label for="">BENEFICIARIES</label>
                <textarea v-model="form.beneficiaries" style="height:100px;" class="form-control" autocomplete="chrome-off"></textarea>
                <div class="fs-6 c-red-500" v-if="form.errors.beneficiaries">{{ form.errors.beneficiaries }}</div>

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
            paps: Object,
            duplicate: Object,
            idpaps: Number
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
                submitted: false,
                form: useForm({
                    idpaps: "",
                    project_title: this.paps[0].paps_desc,
                    list_of_lgu_covered: "",
                    date_start: "",
                    date_end: "",
                    beneficiary_male: 0,
                    beneficiary_female: 0,
                    baseline_male: 0,
                    baseline_female: 0,
                    baseline_total: 0,
                    rationale: "",
                    objective: "",
                    beneficiaries: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {
            //this.form.idpaps=this.idpaps;
            this.form.idinteroutcome=this.idinteroutcome
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.idpaps=this.editData.idpaps
                this.form.project_title=this.editData.project_title
                this.form.list_of_lgu_covered=this.editData.list_of_lgu_covered
                this.form.date_start=this.editData.date_start
                this.form.date_end=this.editData.date_end
                this.form.beneficiary_male=this.editData.beneficiary_male
                this.form.beneficiary_female=this.editData.beneficiary_female
                this.form.baseline_male=this.editData.baseline_male
                this.form.baseline_female=this.editData.baseline_female
                this.form.baseline_total=this.editData.baseline_total
                this.form.rationale=this.editData.rationale
                this.form.objective=this.editData.objective
                this.form.beneficiaries=this.editData.beneficiaries

            } else {
                this.pageTitle = "Create"
                //this.form.idpaps=this.idpaps
                if(this.duplicate!==undefined){
                    this.form.idpaps=this.duplicate[0].idpaps
                    this.form.project_title=this.duplicate[0].project_title
                    this.form.list_of_lgu_covered=this.duplicate[0].list_of_lgu_covered
                    this.form.date_start=this.duplicate[0].date_start
                    this.form.date_end=this.duplicate[0].date_end
                    this.form.beneficiary_male=this.duplicate[0].beneficiary_male
                    this.form.beneficiary_female=this.duplicate[0].beneficiary_female
                    this.form.baseline_male=this.duplicate[0].baseline_male
                    this.form.baseline_female=this.duplicate[0].baseline_female
                    this.form.baseline_total=this.duplicate[0].baseline_total
                    this.form.rationale=this.duplicate[0].rationale
                    this.form.objective=this.duplicate[0].objective
                    this.form.beneficiaries=this.duplicate[0].beneficiaries
                }
            }

        },

        methods: {
            submit() {
                //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                if (this.editData !== undefined) {
                    //alert('patch');
                    this.form.patch("/strategies/", this.form);
                } else {
                    this.form.id=null;
                    //alert('store');
                    this.form.post("/revision/store", this.form);
                }
            },
        },
    };
    </script>
