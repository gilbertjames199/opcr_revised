<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Target</h3>
            <Link :href="`/opcrtarget/${opcr_list_id}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <div v-if="form.idpaps">
                    <label for="">SUCCESS INDICATOR</label>
                    <select v-model="success_indicator_holder" class="form-control" autocomplete="chrome-off" @change="setSuccessTarget">
                        <option v-for="success_indicator in success_indicators">
                            {{ success_indicator.success_indicator }}
                        </option>
                    </select>
                    <!-- <input type="text" v-model="form.semester" class="form-control" autocomplete="chrome-off"> -->
                    <div class="fs-6 c-red-500" v-if="form.errors.semester">{{ form.errors.semester }}</div>
                </div>
                <label for="">Target Description</label>
                <input type="text" v-model="form.target_success_indicator" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_success_indicator">{{ form.errors.target_success_indicator }}</div>

                <label for="">Quantity</label>
                <input type="number" v-model="form.quantity" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.quantity">{{ form.errors.quantity }}</div>
                <!--OPCR_list_id-->
                <input type="hidden" v-model="form.office_performance_commitment_rating_list_id" class="form-control" autocomplete="chrome-off">
                <!--idpaps-->
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="chrome-off">

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
            FFUNCCOD: String,
            office: Object,
            paps: Object,
            idpaps: String,
            opcr_list_id: String,
            success_indicators: Object
        },

        data() {
            return {
                success_indicator_holder: "",
                submitted: false,
                form: useForm({
                    target_success_indicator:           "",
                    quantity:          "",
                    idpaps:            "",
                    office_performance_commitment_rating_list_id:"",
                    id:                 null
                }),
                pageTitle:                  ""
            };
        },

        mounted() {

            if (this.editData !== undefined) {
                this.pageTitle= "Edit"
                this.form.target_success_indicator=this.editData.target_success_indicator
                this.form.quantity=this.editData.quantity
                this.form.idpaps=this.editData.idpaps
                this.form.office_performance_commitment_rating_list_id=this.editData.office_performance_commitment_rating_list_id
                this.form.id  =this.editData.id
                this.success_indicator_holder=this.editData.target_success_indicator
            } else {
                this.pageTitle = "Create"
                this.form.idpaps = this.idpaps;
                this.form.office_performance_commitment_rating_list_id=this.opcr_list_id
                this.form.id=null
            }
        },

        methods: {
            submit() {
                if(this.success_indicator_holder===""){
                    alert("Select success indicator first!");
                }else{
                    if (this.editData !== undefined) {
                        this.form.patch("/opcrtarget" , this.form);
                    } else {
                        this.form.post("/opcrtarget/store");
                    }
                }

            },
            setSuccessTarget(){
                //alert('setSuccessTarget');
                this.form.target_success_indicator=this.success_indicator_holder;
            }


        },
    };
    </script>
