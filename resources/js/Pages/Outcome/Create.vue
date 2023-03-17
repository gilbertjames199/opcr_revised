<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Outcome</h3>
            <Link href="/outcome">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <label for="">PLAN PERIOD</label>
                <input type="text" v-model="form.plan_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>

                <label for="">OUTCOME DESCRIPTION</label>
                <input type="text" v-model="form.oc_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.oc_desc">{{ form.errors.oc_desc }}</div>

                <label for="">ORGANIZATIONAL GOALS {{ form.id_org_goals }}</label>
                <select class="form-control" v-model="form.id_org_goals" >
                    <option v-for="org_goal in org_goals" :value="org_goal.id" >
                        {{ org_goal.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_org_goals">{{ form.errors.id_org_goals }}</div>

                <label for="">SECTORAL GOALS</label>
                <select class="form-control" v-model="form.id_sec_goals" >
                    <option v-for="sec_goal in sec_goals" :value="sec_goal.id" >
                        {{ sec_goal.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_sec_goals">{{ form.errors.id_sec_goals }}</div>

                <label for="">SUSTAINABLE DEVELOPMENT GOALS</label>
                <select class="form-control" v-model="form.id_sdg_goals" >
                    <option v-for="sdg_goal in sdg_goals" :value="sdg_goal.id" >
                        {{ sdg_goal.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_sdg_goals">{{ form.errors.id_sdg_goals }}</div>
                <!--<input type="text" v-model="form.plan_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>
                -->
                <div></div>
                <label for="">CHIEF EXECUTIVE AGENDA</label>
                <select class="form-control" v-model="form.id_cea" >
                    <option v-for="chief_agend in chief_agenda" :value="chief_agend.id" >
                        {{ chief_agend.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_cea">{{ form.errors.id_cea }}</div>

                <label for="">EIGHT POINT SOCIO-ECONOMIC AGENDA</label>
                <select class="form-control" v-model="form.id_sea" >
                    <option v-for="econ_agend in econ_agenda" :value="econ_agend.id" >
                        {{ econ_agend.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_sea">{{ form.errors.id_sea }}</div>
                <!--<input type="text" v-model="form.plan_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>
                -->
                <label for="">EXECUTIVE LEGISLATIVE AGENDA</label>
                <select class="form-control" v-model="form.id_ela" >
                    <option v-for="ela_agend in ela_agenda" :value="ela_agend.id" >
                        {{ ela_agend.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_ela">{{ form.errors.id_ela }}</div>
                <!--<input type="text" v-model="form.plan_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>
                -->
                <label for="">RESEARCH AGENDA</label>
                <select class="form-control" v-model="form.id_rea" >
                    <option v-for="res_agend in res_agenda" :value="res_agend.id" >
                        {{ res_agend.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_rea">{{ form.errors.id_rea }}</div>
                <!--<input type="text" v-model="form.plan_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>
                -->

                <label for="">FFUNCCOD</label>
                <input type="text" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!--{{ org_goals }}-->


    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            editData: Object,
            org_goals: Object,
            sec_goals: Object,
            chief_agenda: Object,
            econ_agenda: Object,
            sdg_goals: Object,
            ela_agenda: Object,
            res_agenda: Object,
        },
        components: {
          //BootstrapModalNoJquery,

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
                    plan_period: "",
                    oc_desc: "",
                    id_org_goals: "",
                    id_sec_goals: "",
                    id_sdg_goals: "",
                    id_cea: "",
                    id_sea: "",
                    id_ela: "",
                    id_rea: "",
                    FFUNCCOD: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {

            if (this.editData !== undefined) {
                if(this.bari){
                    this.bar=this.bari
                }
                this.pageTitle = "Edit"
                this.form.plan_period=this.editData.plan_period
                this.form.oc_desc=this.editData.oc_desc
                this.form.id=this.editData.id
                this.form.id_cea = this.editData.id_cea
                this.form.id_org_goals = this.editData.id_org_goals
                this.form.id_sec_goals = this.editData.id_sec_goals
                this.form.id_sdg_goals = this.editData.id_sdg_goals
                this.form.id_sea = this.editData.id_sea
                this.form.id_ela = this.editData.id_ela
                this.form.id_rea = this.editData.id_rea
                this.form.FFUNCCOD = this.editData.FFUNCCOD
            } else {
                this.pageTitle = "Create"
            }

        },

        methods: {
            submit() {
                this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                if (this.editData !== undefined) {
                    this.form.patch("/outcome/" + this.form.id, this.form);
                } else {
                    this.form.id=null;
                    this.form.post("/outcome/store", this.form);
                }
            },
        },
    };
    </script>
