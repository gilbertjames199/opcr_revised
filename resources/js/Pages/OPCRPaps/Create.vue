<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Standard</h3>
            <Link :href="`/OPCRpaps/direct`">
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
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">
                <label for="">Output</label>
                <input type="text" v-model="form.Outputs" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.Outputs">{{ form.errors.Outputs }}</div>

                <label for="">Performance Measures</label>
                <input type="text" v-model="form.PerformanceMeasure" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.PerformanceMeasure">{{ form.errors.PerformanceMeasure }}</div>

                <label for="">Success Indicator</label>
                <input type="text" v-model="form.SuccessIndicator" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.SuccessIndicator">{{ form.errors.SuccessIndicator }}</div>

                <label for="">Office/Individual Accountable</label>
                <input type="text" v-model="form.OfficeAccountable" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.OfficeAccountable">{{ form.errors.OfficeAccountable }}</div>

                <label for="">Monitoring</label>
                <input type="text" v-model="form.Monitoring" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.Monitoring">{{ form.errors.Monitoring }}</div>

                <button type="button" class="btn btn-primary mt-3" @click="showRating">
                 Ratings
                </button>&nbsp;&nbsp;

                <button type="button" class="btn btn-primary mt-3"  @click="showQuality">
                 Quality
                </button>&nbsp;&nbsp;

                <button type="button" class="btn btn-primary mt-3" @click="showTimeliness">
                 Timeliness
                </button><br>

                    <div id="inputRating" v-if="showRatingInput">
                    <label for="input">Numerical Rating</label>
                    <input id="input" type="text" v-model="form.NumericalRating" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.NumericalRating">{{ form.errors.NumericalRating }}</div>

                    <label for="input">Adjectival Rating</label>
                    <input id="input" type="text" v-model="form.AdjectivalRating" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.AdjectivalRating">{{ form.errors.AdjectivalRating }}</div>

                    <label for="input">Efficiency (Quantity)</label>
                    <input id="input" type="text" v-model="form.Efficiency" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.Efficiency">{{ form.errors.Efficiency }}</div>

                    <label for="input">Remarks</label>
                    <input id="input" type="text" v-model="form.RatingRemarks" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.RatingRemarks">{{ form.errors.RatingRemarks }}</div>
                    </div>

                    <div id="inputQuality" v-if="showQualityInput">
                    <label for="input">Numerical Rating</label>
                    <input id="input" type="text" v-model="form.NumericalRating1" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.NumericalRating1">{{ form.errors.NumericalRating1 }}</div>

                    <label for="input">Adjectival Rating</label>
                    <input id="input" type="text" v-model="form.AdjectivalRating1" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.AdjectivalRating1">{{ form.errors.AdjectivalRating1 }}</div>

                    <label for="input">Quality</label>
                    <input id="input" type="text" v-model="form.Quality" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.Quality">{{ form.errors.Quality }}</div>

                    <label for="input">Remarks</label>
                    <input id="input" type="text" v-model="form.QualityRemarks" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.QualityRemarks">{{ form.errors.QualityRemarks }}</div>
                    </div>

                    <div id="inputTimeliness" v-if="showTimelinessInput">
                    <label for="input">Numerical Rating</label>
                    <input id="input" type="text" v-model="form.NumericalRating2" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.NumericalRating2">{{ form.errors.NumericalRating2 }}</div>

                    <label for="input">Adjectival Rating</label>
                    <input id="input" type="text" v-model="form.AdjectivalRating2" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.AdjectivalRating2">{{ form.errors.AdjectivalRating2 }}</div>

                    <label for="input">Timeliness</label>
                    <input id="input" type="text" v-model="form.Timeliness" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.Timeliness">{{ form.errors.Timeliness }}</div>

                    <label for="input">Remarks</label>
                    <input id="input" type="text" v-model="form.TimelinessRemarks" class="form-control" autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.TimelinessRemarks">{{ form.errors.TimelinessRemarks }}</div>
                    </div>
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
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            paps: Object,
            idpaps: Number,
            editData: Object,
            sectors: Object
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
                showRatingInput: true,
                showQualityInput: false,
                showTimelinessInput: false,
                submitted: false,
                form: useForm({
                    Outputs: "",
                    PerformanceMeasure: "",
                    SuccessIndicator: "",
                    OfficeAccountable: "",
                    Monitoring: "",
                    NumericalRating: "",
                    AdjectivalRating: "",
                    Efficiency: "",
                    RatingRemarks:"",
                    NumericalRating1: "",
                    AdjectivalRating1: "",
                    Quality: "",
                    QualityRemarks:"",
                    NumericalRating2: "",
                    AdjectivalRating2: "",
                    Timeliness: "",
                    TimelinessRemarks:"",
                    idpaps: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {
            this.form.idpaps=this.idpaps;
            if (this.editData !== undefined) {
                if(this.bari){
                    this.bar=this.bari
                }
                this.pageTitle = "Edit"
                this.form.Outputs=this.editData.Outputs
                this.form.idpaps=this.editData.idpaps
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
                    this.form.patch("/output/" + this.form.id, this.form);
                } else {
                    // alert("Sample");
                    var url="/output/store"
                    // alert('for store '+url);
                    this.form.post(url);
                }
            },
            showRating() {
            this.showRatingInput = true;
            this.showQualityInput = false;
            this.showTimelinessInput = false;
            },
            showQuality() {
            this.showRatingInput = false;
            this.showQualityInput = true;
            this.showTimelinessInput = false;
            },
            showTimeliness() {
            this.showRatingInput = false;
            this.showQualityInput = false;
            this.showTimelinessInput = true;
            }
        },
    };
    </script>
