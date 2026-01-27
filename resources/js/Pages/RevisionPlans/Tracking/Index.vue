<template>
    <Head>
        <title>ELA</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>IPP Tracking</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Action</th>
                                <th>Project Title</th>
                                <th>Date</th>
                                <!-- <th>Rationale</th>
                                <th>Action</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <!-- :class="actionTypeClass(dat.action_type)" -->
                            <tr v-for="dat in data" :key="dat.id" style="font-weight: bold" >
                                <td :class="actionTypeClass(dat.action_type)">
                                    {{ formatType(dat.action_type) }}
                                </td>
                                <td>{{ dat.revision_plan.project_title }}</td>
                                <td>{{ formatDateTime(dat.created_at) }}</td>
                                <!-- <td>{{ dat.agenda_description }}</td>
                                <td>{{ dat.year_from }}</td>
                                <td>{{ dat.year_to }}</td>
                                <td>

                                    {{ truncateText(dat.rationale, 10) }}
                                </td> -->
                                <!-- <td>
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link class="dropdown-item" :href="`/ELA/${dat.id}/edit`">Edit</Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteEla(dat.id)">Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div> -->

            </div>
        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object
    },
    data() {
        return {

        }
    },
    components: {
        Pagination, Filtering,
    },

    methods: {


        deleteEla(id) {
            let text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/ELA/" + id);
            }
        },
        actionTypeClass(action) {
            if (!action) return '';

            const value = action.toLowerCase();

            if (value.includes('approve')) return 'action-approve';
            if (value.includes('review')) return 'action-review';
            if (value.includes('submit')) return 'action-submit';
            if (value.includes('return')) return 'action-return';
            if (value.includes('recall')) return 'action-recall';

            return '';
        },
        formatType(action){
            if (!action) return '';

            const value = action.toLowerCase();

            if (value.includes('recall')) return 'Recalled Project Profile';
            if (value.includes('request')) return 'Requested for the return of the Project Profile';
            if (value.includes('return')) return 'Returned Project Profile';
            if (value.includes('review')) return 'Reviewed Project Profile';
            if (value.includes('submit')) return 'Submitted Project Profile';
            if (value.includes('approve')) return 'Approved Project Profile';

            return '';
        }

    }
};
</script>
<style>
.row-centered {
    text-align: center;
}

.col-centered {
    display: inline-block;
    float: none;
    text-align: left;
    margin-right: -4px;
}

.pos {
    position: top;
    top: 240px;
}


.action-approve {
  background-color: #acf8be; /* light green */
  color: #07691e;           /* dark green */
}

.action-review {
  background-color: #d1f1e6; /* light blue */
  color: #02693e;            /* dark blue */
}

.action-submit {
  background-color: #ffe5b4; /* light orange */
  color: #b45309;            /* dark orange */
}

.action-return {
  background-color: #f8d7da; /* pale red */
  color: #721c24;            /* dark/pale red */
}

.action-recall {
  background-color: #ada8f8; /* pale red */
  color: #1a047e;            /* dark/pale red */
}
</style>
