<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Division</h3>
            <h4>{{ dept.FFUNCTION }}</h4>
            <Link :href="`/divisions/${FFUNCCOD}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">DESCRIPTION</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <input type="hidden" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

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

export default {
        props: {
            editData: Object,
            dept: Object,
            FFUNCCOD: String
        },

        data() {
            return {
                submitted: false,
                form: useForm({
                    description: "",
                    FFUNCCOD: "",
                    id: null
                }),
                pageTitle: ""
            };
        },

        mounted() {

            if (this.editData !== undefined) {
                this.pageTitle= "Edit"
                this.form.description=this.editData.description
                this.form.FFUNCCOD=this.editData.FFUNCCOD
                this.form.id =this.editData.id
            } else {
                this.pageTitle = "Create"
                this.form.FFUNCCOD = this.FFUNCCOD
            }

        },

        methods: {
            submit() {

                if (this.editData !== undefined) {
                    this.form.patch("/divisions/" + this.form.id, this.form);
                } else {
                    this.form.post("/divisions/store", this.form);
                }
            },
        },
    };
    </script>
