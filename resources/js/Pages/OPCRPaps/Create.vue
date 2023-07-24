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
                    <br>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rating</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Timeliness</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <table class="table table-bordered">
                        <tr>
                            <th>Numerical Rating</th>
                            <th>Adjectival Rating</th>
                            <th>Efficiency (Quantity)</th>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Enter numerical rating"  v-model="form.NumericalRating" class="form-control" autocomplete="positionchrome-off"></td>
                            <td><input type="text" placeholder="Enter adjectival rating" v-model="form.AdjectivalRating" class="form-control" autocomplete="positionchrome-off"></td>
                            <td style="width: 60%;"><input type="text" placeholder="Enter efficiency" v-model="form.Efficiency" class="form-control" autocomplete="positionchrome-off"></td>
                        </tr>
                </table>
                        <label for="input">Remarks</label>
                        <input id="input" type="text" v-model="form.RatingRemarks" class="form-control" autocomplete="positionchrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.RatingRemarks">{{ form.errors.RatingRemarks }}</div>
                    </div>

                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
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
            }
        },
    };
    </script>
