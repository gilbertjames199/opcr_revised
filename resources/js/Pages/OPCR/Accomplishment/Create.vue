<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Accomplishment</h3>
            <Link :href="`/opcraccomplishment/${opcr_list_id}`">
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
                    <label for="">OPCR TARGET</label>
                    <select v-model="form.opcr_target_id" class="form-control" autocomplete="chrome-off" @change="setTarget">
                        <option v-for="target in targets" :value="target.id">
                            {{ target.target_success_indicator	 }}
                        </option>
                    </select>
                    <input type="hidden" v-model="form.opcr_target_id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.opcr_target_id">{{ form.errors.opcr_target_id }}</div>
                </div>
                <label for="">Accomplishment Description</label>
                <input type="text" v-model="form.actual_accomplishments" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_accomplishments">{{ form.errors.actual_accomplishments }}</div>

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
            targets: Object
        },

        data() {
            return {
                opcr_target_holder: "",
                submitted: false,
                form: useForm({
                    actual_accomplishments:           "",
                    quantity:          "",
                    idpaps:            "",
                    opcr_target_id: "",
                    office_performance_commitment_rating_list_id:"",
                    id:                 null
                }),
                pageTitle:                  ""
            };
        },

        mounted() {

            if (this.editData !== undefined) {
                this.pageTitle= "Edit"
                this.form.actual_accomplishments=this.editData.actual_accomplishments
                this.form.quantity=this.editData.quantity
                this.form.idpaps=this.editData.idpaps
                this.form.opcr_target_id= this.editData.opcr_target_id
                this.form.office_performance_commitment_rating_list_id=this.editData.office_performance_commitment_rating_list_id
                this.form.id  =this.editData.id
                //this.opcr_target_holder=this.editData.
            } else {
                this.pageTitle = "Create"
                this.form.idpaps = this.idpaps;
                this.form.office_performance_commitment_rating_list_id=this.opcr_list_id
                //this.form.opcr_target_id =
                this.form.id=null
            }
        },

        methods: {
            submit() {
                if(this.success_indicator_holder===""){
                    alert("Target");
                }else{
                    if (this.editData !== undefined) {
                        //alert('update accompl');
                        this.form.patch("/opcraccomplishment" , this.form);
                    } else {
                        this.form.post("/opcraccomplishment/store");
                    }
                }

            },
            setTarget(event){
                //alert('setSuccessTarget');
                /*if(e.target.options.selectedIndex>-1){
                    selectedText = e.target.options[e.target.options.selectedIndex].targets.target_success_indicator
                    this.opcr_target_holder = selectedText;
                    this.form.actual_accomplishments=selectedText;

                }*/
                var selectedText = event.target.selectedOptions[0].text;
                this.form.actual_accomplishments=selectedText;
                this.form.target_success_indicator=this.success_indicator_holder;
                //alert(selectedText);
            }


        },
    };
    </script>
