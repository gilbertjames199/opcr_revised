<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Implementing Team</h3>
            <Link :href="`/team/${revid}/revision/plan/team`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->
        <!-- {{ revid }} -->
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.revision_plan_id" class="form-control" autocomplete="chrome-off">
                <label for="">ASSIGN PERSON</label>
                <multiselect :options="employees_computed" :searchable="true" v-model="form.implementing_team_id" label="label"
                    track-by="label">
                </multiselect>
                <!-- <select type="text" v-model="form.implementing_team_id" class="form-control" autocomplete="positionchrome-off">
                    <option v-for="person in people" :value="person.id">
                        {{ person.name }}
                    </option>
                </select> -->
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                <label for="">ROLE IN THE PROJECT</label>
                <input type="text" v-model="form.role" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.role">{{ form.errors.role }}</div>

                <!-- <label for="">COMPETENCY</label>
                <input type="text" v-model="form.competency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.competency">{{ form.errors.competency }}</div> -->

                <!-- <label for="">With GAD training</label> -->
                <input type="checkbox"
                v-model="form.with_gad_training"
                :true-value="1"
                :false-value="0">
                    &nbsp;With GAD training
                <br>
                <div class="fs-6 c-red-500" v-if="form.errors.with_gad_training">{{ form.errors.with_gad_training }}</div>
                <span>
                    <label for="">Specify GAD Training</label>
                    <input type="text" v-model="form.specify_GAD_training" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.specify_GAD_training ==='' && form.with_gad_training==1">{{ form.errors.specify_GAD_training }}</div>
                </span>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary text-white mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>


    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import { ModelSelect } from 'vue-search-select';

import Places from "@/Shared/PlacesShared";
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            editData: Object,
            people: Object,
            sectors: Object,
            revid: String,
            revs: Object
        },
        components: {
          //BootstrapModalNoJquery,
          ModelSelect,
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
                    competency: "",
                    revision_plan_id: this.rev_id,
                    implementing_team_id: "",
                    role: "",
                    with_gad_training: "0",
                    specify_GAD_training: "",
                    id: null
                }),
                clicked_submit: false,
                pageTitle: ""
            };
        },
        computed: {
            employees_computed() {
                let emps = this.people;
                return emps.map((emp) => ({
                    value: emp.empl_id,
                    label: emp.empl_id+' - '+emp.employee_name ,

                }));
            },
        },

        mounted() {
            this.form.revision_plan_id=this.revid
            if (this.editData !== undefined) {
                if(this.bari){
                    this.bar=this.bari
                }
                this.pageTitle = "Edit"
                this.form.implementing_team_id=this.editData.implementing_team_id
                this.form.role=this.editData.role
                this.form.id=this.editData.id
                this.form.with_gad_training = this.editData.with_gad_training
                this.form.specify_GAD_training = this.editData.specify_GAD_training
                this.form.empl_id=this.editData.empl_id
                this.form.competency =this.editData.competency
            } else {
                this.pageTitle = "Create"
            }

        },

        methods: {
            submit() {
                this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                if (this.editData !== undefined) {
                    this.form.patch("/team/" + this.form.id, this.form);
                } else {
                    this.form.post("/team", this.form);
                }
            },
        },
    };
    </script>
