<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} AIP Approver</h3>
            <Link href="/SDG">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <!-- EMPLOYEE PICKER: search + select a single employee by empl_id -->
                <label for="">SELECT EMPLOYEE</label>
                <multiselect
                    v-model="selected_empl_id"
                    :options="employeeOptions"
                    :searchable="true"
                    :close-on-select="true"
                    mode="single"
                    placeholder="Search employee by name..."
                    label="label"
                    value-prop="empl_id"
                    track-by="label"
                    @select="onEmployeeSelect"
                    @clear="onEmployeeClear"
                />
                <div class="fs-6 c-red-500" v-if="form.errors.employee_code">{{ form.errors.employee_code }}</div>

                <label for="">EMPLOYEES</label>
                <QuillEditor theme="snow" v-model:content="form.goal_description" :style="{ backgroundColor: '#ffffff' }"
                    contentType="html" toolbar="full" />
                <div class="fs-6 c-red-500" v-if="form.errors.goal_description">{{ form.errors.goal_description }}</div>

                <label>NAME</label>
                <input type="text" v-model="form.name" class="form-control">
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                <label>ROLE</label>
                <input type="text" v-model="form.position" class="form-control">
                <div class="fs-6 c-red-500" v-if="form.errors.position">{{ form.errors.position }}</div>

                <label>TYPE</label>
                <select v-model="form.type">
                    <option>SP Approver</option>
                    <option>PBO</option>
                    <option>PPDO</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.type">{{ form.errors.type }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>

    </div>
    {{ employees }}
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Places from "@/Shared/PlacesShared";

export default {
    props: {
        editData: Object,
        employees: Object // can arrive as an array OR an object map keyed by id
    },

    data() {
        return {
            submitted: false,
            selected_empl_id: "", // holds the currently selected employee's empl_id
            form: useForm({
                id: "",
                employee_code: "",
                name: "",
                position: "",
                type: "",
                is_present: "",
                with_signature: "",
            }),
            pageTitle: ""
        };
    },

    computed: {
        // Normalizes `employees` (array or object map) into the option
        // shape @vueform/multiselect expects, and keeps the full row
        // attached to each option so we can pull every field on select.
        employeeOptions() {
            if (!this.employees) return [];

            const list = Array.isArray(this.employees)
                ? this.employees
                : Object.values(this.employees);

            return list.map(emp => ({
                empl_id: emp.empl_id,
                label: emp.position ? `${emp.employee_name} — ${emp.position}` : emp.name,
                // keep the original row so onEmployeeSelect can copy every field
                ...emp
            }));
        }
    },

    mounted() {

        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.goal_description = this.editData.goal_description
            this.form.id = this.editData.id

            // if editing an existing record, preselect the matching employee
            if (this.editData.employee_code) {
                this.selected_empl_id = this.editData.employee_code
            }
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        // Fired by the multiselect's @select event. `option` is the full
        // employee row (because we spread ...emp into employeeOptions above),
        // so every column on the employees table is available here.
        onEmployeeSelect(value, option) {
            if (!option) return;

            this.form.employee_code = option.empl_id ?? "";
            this.form.name = option.name ?? "";
            this.form.position = option.position ?? "";
            this.form.type = option.type ?? this.form.type;
            this.form.is_present = option.is_present ?? this.form.is_present;
            this.form.with_signature = option.with_signature ?? this.form.with_signature;

            // If you need the raw selected row elsewhere in the component:
            // this.selectedEmployeeRow = option;
        },

        // Clears the dependent form fields when the selection is cleared
        onEmployeeClear() {
            this.form.employee_code = "";
            this.form.name = "";
            this.form.position = "";
        },

        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/SDG/" + this.form.id, this.form);
            } else {
                this.form.post("/SDG");
            }
        },
    },
};
</script>
