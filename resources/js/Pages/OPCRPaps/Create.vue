<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Standard
                <!-- {{ idpaps }} -->
            </h3>
            <Link :href="`/OPCRpaps/direct`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div>
            <h6>PAPS Decription: <u>{{ paps.paps_desc }}</u></h6>
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
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">
                            Rating
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">
                            Quality
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">
                            Timeliness
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <button type="button" class="btn btn-primary text-white"
                            @click="increaseLengthEfficiency">Add</button>
                        <button type="button" class="btn btn-danger text-white"
                            @click="decreaseLengthEfficiency">Remove</button>
                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Efficiency Rating</b></legend>
                            <div v-for="(num_r, index) in form.NumericalRating">
                                <p class="float-none w-auto"><b>Rating {{ index + 1 }}</b></p>
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Numerical Rating </th>
                                        <th>Adjectival Rating</th>
                                        <th>Efficiency (Quantity)</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" placeholder="Enter numerical rating"
                                                v-model="form.NumericalRating[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td><input type="text" placeholder="Enter adjectival rating"
                                                v-model="form.AdjectivalRating[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td style="width: 60%;"><input type="text" placeholder="Enter efficiency"
                                                v-model="form.Efficiency[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                    </tr>
                                </table>
                            </div>

                            <label for="input">Remarks</label>
                            <input id="input" type="text" v-model="form.RatingRemarks" class="form-control"
                                autocomplete="positionchrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.RatingRemarks">{{ form.errors.RatingRemarks }}
                            </div>
                        </fieldset>
                    </div>

                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <button type="button" class="btn btn-primary text-white" @click="increaseLengthQuality">Add</button>
                        <button type="button" class="btn btn-danger text-white"
                            @click="decreaseLengthQuality">Remove</button>
                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Quality Rating </b></legend>
                            <div v-for="(num_r, index) in form.NumericalRating1">
                                <p class="float-none w-auto"><b>Rating {{ index + 1 }}</b></p>
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Numerical Rating</th>
                                        <th>Adjectival Rating</th>
                                        <th>Quality</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" placeholder="Enter numerical rating"
                                                v-model="form.NumericalRating1[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td><input type="text" placeholder="Enter adjectival rating"
                                                v-model="form.AdjectivalRating1[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td style="width: 60%;"><input type="text" placeholder="Enter Quality"
                                                v-model="form.Quality[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                    </tr>
                                </table>
                            </div>
                        </fieldset>

                        <label for="input">Remarks</label>
                        <input id="input" type="text" v-model="form.QualityRemarks" class="form-control"
                            autocomplete="positionchrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.QualityRemarks">{{ form.errors.QualityRemarks }}</div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <button type="button" class="btn btn-primary text-white" @click="increaseLengthTime">Add</button>
                        <button type="button" class="btn btn-danger text-white"
                            @click="decreaseLengthTimeliness">Remove</button>
                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Timeliness Rating </b></legend>
                            <div v-for="(num_r, index) in form.NumericalRating2">
                                <p class="float-none w-auto"><b>Rating {{ index + 1 }}</b></p>
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Numerical Rating</th>
                                        <th>Adjectival Rating</th>
                                        <th>Timeliness</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" placeholder="Enter numerical rating"
                                                v-model="form.NumericalRating2[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td><input type="text" placeholder="Enter adjectival rating"
                                                v-model="form.AdjectivalRating2[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                        <td style="width: 60%;"><input type="text" placeholder="Enter Timeliness"
                                                v-model="form.Timeliness[index]" class="form-control"
                                                autocomplete="positionchrome-off"></td>
                                    </tr>
                                </table>
                            </div>

                        </fieldset>
                        <!-- {{ form.Timeliness }} -->
                        <label for="input">Remarks</label>
                        <input id="input" type="text" v-model="form.TimelinessRemarks" class="form-control"
                            autocomplete="positionchrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.TimelinessRemarks">{{ form.errors.TimelinessRemarks }}
                        </div>
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
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        Output: Object,
        Performance: Object,
        Success: Object,
        Office: Object,
        Monitoring: Object,
        RatingRemarks: Object,
        QualityRemarks: Object,
        TimelinessRemarks: Object,
        paps: Object,
        idpaps: Number,
        editData: Object,
        sectors: Object,
        ratings_r: Object,
        qualities_r: Object,
        timeliness_r: Object,
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
                NumericalRating: [],
                AdjectivalRating: [],
                Efficiency: [],
                RatingRemarks: "",
                NumericalRating1: [],
                AdjectivalRating1: [],
                Quality: [],
                QualityRemarks: "",
                NumericalRating2: [],
                AdjectivalRating2: [],
                Timeliness: [],
                TimelinessRemarks: "",
                idpaps: "",
                id: null
            }),
            rating_length: 1,
            quality_length: 1,
            timeliness_length: 1,
            pageTitle: ""
        };
    },

    mounted() {
        this.form.idpaps = this.idpaps;
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.Outputs = this.Output.Outputs
            this.form.PerformanceMeasure = this.Performance.performance
            this.form.SuccessIndicator = this.Success.success_indicator
            this.form.OfficeAccountable = this.Office.office_accountable
            this.form.Monitoring = this.Monitoring.monitoring
            this.form.RatingRemarks = this.RatingRemarks.rating_remarks
            this.form.QualityRemarks = this.QualityRemarks.quality_remarks
            this.form.TimelinessRemarks = this.TimelinessRemarks.timeliness_remarks
            this.form.idpaps = this.editData.idpaps
            this.form.id = this.editData.id
            this.ratings_r.forEach((item, index) => {
                this.form.NumericalRating.push(item.numerical_rating)
                this.form.AdjectivalRating.push(item.adjectival_rating)
                this.form.Efficiency.push(item.efficiency_quantity)
                this.rating_length += 1
            });
            this.qualities_r.forEach((item, index) => {
                this.form.NumericalRating1.push(item.numerical_rating)
                this.form.AdjectivalRating1.push(item.adjectival_rating)
                this.form.Quality.push(item.quality)
                this.quality_length += 1
            });
            this.timeliness_r.forEach((item, index) => {
                this.form.NumericalRating2.push(item.numerical_rating)
                this.form.AdjectivalRating2.push(item.adjectival_rating)
                this.form.Timeliness.push(item.timeliness)
                this.timeliness_length += 1
            });
        } else {
            this.pageTitle = "Create"


        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/OPCRpaps/" + this.form.id, this.form);
            } else {
                // alert("Sample");
                var url = "/OPCRpaps/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
        increaseLengthEfficiency() {
            if (parseFloat(this.rating_length) <= 5) {
                this.form.NumericalRating.push(this.rating_length)
                if (this.rating_length > 4) {
                    //Efficiency
                    this.form.AdjectivalRating.push('O')
                    this.form.Efficiency.push('100% and above')
                } else if (this.rating_length > 3) {
                    //Efficiency
                    this.form.AdjectivalRating.push('VS')
                    this.form.Efficiency.push('100%')
                } else if (this.rating_length > 2) {
                    //Efficiency
                    this.form.AdjectivalRating.push('S')
                    this.form.Efficiency.push('90-99%')
                } else if (this.rating_length > 1) {
                    //Efficiency
                    this.form.AdjectivalRating.push('US')
                    this.form.Efficiency.push('51-89%')
                } else {
                    //Efficiency
                    this.form.AdjectivalRating.push('P')
                    this.form.Efficiency.push('Below 50%')
                }
                this.rating_length = parseFloat(this.rating_length) + 1
            } else {
                alert("You can only add up to five ratings!")
            }
        },
        increaseLengthQuality() {
            if (parseFloat(this.quality_length) <= 5) {
                this.form.NumericalRating1.push(this.quality_length)
                if (this.quality_length > 4) {
                    this.form.AdjectivalRating1.push('O')
                    this.form.Quality.push("Excellent Feedback")
                } else if (this.quality_length > 3) {
                    this.form.AdjectivalRating1.push('VS')
                    this.form.Quality.push("VS Feedback")
                } else if (this.quality_length > 2) {
                    this.form.AdjectivalRating1.push('S')
                    this.form.Quality.push("Satisfactory Feedback")
                } else if (this.quality_length > 1) {
                    this.form.AdjectivalRating1.push('US')
                    this.form.Quality.push("Unsatisfactory Feedback")
                } else {
                    this.form.AdjectivalRating1.push('P')
                    this.form.Quality.push("Poor Feedback")
                }
                this.quality_length = parseFloat(this.quality_length) + 1
            } else {
                alert("You can only add up to five ratings!")
            }
        },
        increaseLengthTime() {
            if (parseFloat(this.timeliness_length) <= 5) {
                this.form.NumericalRating2.push(this.timeliness_length)
                if (this.timeliness_length > 4) {
                    this.form.AdjectivalRating2.push('O')
                    this.form.Timeliness.push("16 days before estimated period")
                } else if (this.timeliness_length > 3) {
                    this.form.AdjectivalRating2.push('VS')
                    this.form.Timeliness.push("1-15 days before estimated period")
                } else if (this.timeliness_length > 2) {
                    this.form.AdjectivalRating2.push('S')
                    this.form.Timeliness.push("Within estimated period")
                } else if (this.timeliness_length > 1) {
                    this.form.AdjectivalRating2.push('US')
                    this.form.Timeliness.push("1-15 days after estimated period")
                } else {
                    this.form.AdjectivalRating2.push('P')
                    this.form.Timeliness.push("16 days after estimated period")
                }
                this.timeliness_length = parseFloat(this.timeliness_length) + 1
            } else {
                alert("You can only add up to five ratings!")
            }
        },
        decreaseLengthEfficiency() {
            if (this.rating_length >= 1) {
                this.form.AdjectivalRating.pop()
                this.form.NumericalRating.pop()
                this.form.Efficiency.pop()
                if (this.rating_length > 1) {
                    this.rating_length = this.rating_length - 1
                }

            }

        },
        decreaseLengthQuality() {
            if (this.quality_length >= 1) {
                this.form.AdjectivalRating1.pop()
                this.form.NumericalRating1.pop()
                this.form.Quality.pop()
                if (this.quality_length > 1) {
                    this.quality_length = this.quality_length - 1
                }

            }
        },
        decreaseLengthTimeliness() {
            if (this.timeliness_length >= 1) {
                this.form.AdjectivalRating2.pop()
                this.form.NumericalRating2.pop()
                this.form.Timeliness.pop()
                if (this.timeliness_length > 1) {
                    this.timeliness_length = this.timeliness_length - 1
                }

            }

        }

    },
};
</script>
