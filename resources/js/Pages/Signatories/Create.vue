<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Signatories</h3>
            <Link href="/Signatories">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.revision_plan_id" class="form-control" autocomplete="positionchrome-off">
                <label for="">NAME</label>
                <input type="text" v-model="form.name" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                <label for="">POSITION</label>
                <input type="text" v-model="form.position" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.position">{{ form.errors.position }}</div>

                <label for="">ACTED</label>
                <select v-model="form.acted" class="form-control" autocomplete="chrome-off">
                    <option>Prepared</option>
                    <option>Reviewed</option>
                    <option>Noted</option>
                    <option>Approved</option>
                </select>
                <!-- <input type="text" v-model="form.gad" class="form-control" autocomplete="chrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.acted">{{ form.errors.acted }}</div>

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
        revs: Object,
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
            submitted: false,
            form: useForm({
                name: "",
                position: "",
                acted: "",
                revision_plan_id: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        this.form.revision_plan_id = this.revs.id;
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.name = this.editData.name
            this.form.position = this.editData.position
            this.form.acted = this.editData.acted
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/Signatories/" + this.form.id, this.form);
            } else {
                var url = "/Signatories/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
    },
};
</script>
