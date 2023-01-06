<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Programs and Progjects {{  idmfo }}</h3>
            <Link :href="`/paps/${idmfo}`">
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

                <label for="">Major Final Outputs</label>

                <select class="form-control form-select" v-model="form.idmfo" >
                    <option v-for="mfo in mfos" :value="mfo.id" >
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idstrategy">{{ form.errors.idstrategy }}</div>

                <label for="">Program and Projects (PAPS) Description	</label>
                <input type="text" v-model="form.paps_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.paps_desc">{{ form.errors.paps_desc }}</div>

                <label for="">YEAR</label>
                <select class="form-control form-select" v-model="form.tyear" >
                    <option v-for="year in years" :value="year.tyear" >
                        {{ year.tyear }}
                    </option>
                </select>
                <!--<input type="text" v-model="form.tyear" class="form-control" autocomplete="chrome-off">-->
                <div class="fs-6 c-red-500" v-if="form.errors.tyear">{{ form.errors.tyear }}</div>

                <label for="">FRAOTYPE</label>
                <input type="text" v-model="form.FRAOTYPE" class="form-control" maxlength="1" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FRAOTYPE">{{ form.errors.FRAOTYPE }}</div>

                <label for="">FRAODESC	</label>
                <input type="text" v-model="form.FRAODESC" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FRAODESC">{{ form.errors.FRAODESC }}</div>

                <label for="">FALLTCOD	</label>
                <input type="text" v-model="form.FALLTCOD" class="form-control" maxlength="3" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FALLTCOD">{{ form.errors.FALLTCOD }}</div>

                <label for="">FFUNCCOD	</label>
                <input type="text" v-model="form.FFUNCCOD" class="form-control" maxlength="6" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label for="">FFUNDCOD	</label>
                <input type="text" v-model="form.FFUNDCOD" class="form-control" maxlength="3" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNDCOD">{{ form.errors.FFUNDCOD }}</div>

                <label for="">idsource	</label>
                <input type="number" v-model="form.idsource" class="form-control" maxlength="10" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idsource">{{ form.errors.idsource }}</div>

                <label for="">idappttype	</label>
                <input type="number" v-model="form.idappttype" class="form-control" maxlength="10" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idappttype">{{ form.errors.idappttype }}</div>

                <label for="">idprogram	</label>
                <input type="number" v-model="form.idprogram" class="form-control" maxlength="10" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idprogram">{{ form.errors.idprogram }}</div>

                <label for="">aipcode	</label>
                <input type="text" v-model="form.aipcode" class="form-control" maxlength="30" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.aipcode">{{ form.errors.aipcode }}</div>

                <label for="">excludetag	</label>
                <input type="number" v-model="form.excludetag" class="form-control" maxlength="11" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.excludetag">{{ form.errors.excludetag }}</div>

                <label for="">previd	</label>
                <input type="number" v-model="form.previd" class="form-control" maxlength="10" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.previd">{{ form.errors.previd }}</div>

                <label for="">idpaps	</label>
                <input type="text" v-model="form.idpaps" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idpaps">{{ form.errors.idpaps }}</div>

                <!-- <label for="">idmfo	</label>
                <input type="text" v-model="form.idmfo" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>
                -->

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
            idmfo: String,
            years: Object,
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
                    paps_desc: "",
                    tyear: "",
                    FRAOTYPE: "",
                    FRAODESC: "",
                    FALLTCOD: "",
                    FFUNCCOD: "",
                    FFUNDCOD: "",
                    idsource: "",
                    idappttype: "",
                    idprogram: "",
                    aipcode: "",
                    date_created: "",
                    excludetag: "",
                    previd: "",
                    idpaps: "",
                    idmfo: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {
            this.form.idmfo=this.idmfo
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.paps_desc=this.editData.paps_desc
                this.form.tyear=this.editData.tyear
                this.form.FRAOTYPE=this.editData.FRAOTYPE
                this.form.FRAODESC=this.editData.FRAODESC
                this.form.FALLTCOD=this.editData.FALLTCOD
                this.form.FFUNCCOD=this.editData.FFUNCCOD
                this.form.FFUNDCOD=this.editData.FFUNDCOD
                this.form.idsource=this.editData.idsource
                this.form.idappttype=this.editData.idappttype
                this.form.idprogram=this.editData.idprogram
                this.form.aipcode=this.editData.aipcode
                this.form.date_created=this.editData.date_created
                this.form.excludetag=this.editData.excludetag
                this.form.previd=this.editData.previd
                this.form.idpaps=this.editData.idpaps
                this.form.idmfo=this.editData.idmfo
                this.form.id=this.editData.id
            } else {
                this.pageTitle = "Create"
            }

        },

        methods: {
            submit() {
                this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
                //alert(this.form.target_qty);
                if (this.editData !== undefined) {
                    alert('paps/'+this.form.id);
                    this.form.patch("/paps/"+this.form.id, this.form);
                } else {
                    this.form.id=null;

                    this.form.post("/paps/store", this.form);
                }
            },
        },
    };
    </script>


