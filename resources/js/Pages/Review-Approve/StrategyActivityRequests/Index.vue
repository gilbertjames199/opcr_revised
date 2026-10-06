<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <h3>Requests for Additional Strategies and Activities</h3>

        <div class="toolbar-card">
            <!-- Top Row: Actions -->
            <div class="toolbar-row toolbar-actions">
                <div class="toolbar-left">
                    <span class="toolbar-label">
                        <i class="fas fa-sliders-h"></i> FILTER PANEL
                    </span>
                </div>
                <div class="toolbar-right">
                    <div class="search-wrapper">
                        <i class="fas fa-search search-icon"></i>
                        <input v-model="search" type="text" class="filter-input" placeholder="Search...">
                    </div>
                    <!-- <Link class="tool-btn tool-btn-primary" :href="`/Sectoral/create`">
                        <i class="fas fa-plus"></i> Add Sectoral Outcomes
                    </Link>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button> -->
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- Search Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-search"></i> Search Filter
                    </label>
                    <input type="text" class="filter-input" placeholder="Filter by keyword">
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Clear
                    </button>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <!-- {{data.total}} -->
                <!-- <p>_______________________</p> -->
                <div v-if="data && data.total" class="accordion accordion-flush" id="strategyRequestsAccordion">
                    <div v-for="(request, index) in data.data" :key="request.id ?? index" class="accordion-item border rounded mb-2">
                        <h2 class="accordion-header d-flex align-items-center">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="`#strategy-request-${request.id ?? index}`" aria-expanded="false">
                                <span class="fw-bold">{{ request.revision_plan?.project_title ? ` - ${request.revision_plan.project_title}` : '' }}</span>

                            </button>
                            <!-- status: {{ request.status}} -->
                            <!-- <button
                                type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap"
                                @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')">
                                Submit Request</button>
                            <br> -->
                            <!-- <button type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap" @click="openStrategyOnlyModal(request.id)">Add Strategy</button> -->
                            <!-- @click="submitStrategyActivityRequest(request)" -->
                                <!-- @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')" -->
                            <button v-if="String(request.status) === '0'"
                                type="button"
                                class="btn btn-primary btn-sm text-white me-2 text-nowrap"
                                @click="submitStrategyActivityRequest(request,'1')"

                            >
                                Approve
                            </button>
                            <button v-if="String(request.status) === '0'"
                                type="button"
                                class="btn btn-danger btn-sm text-white me-2 text-nowrap"
                                @click="submitStrategyActivityRequest(request,'-2')"

                            >
                                Return
                            </button>
                            <button type="button" class="btn btn-outline-primary btn-sm me-2 text-nowrap" @click.stop="showStrategyRequestFiles(request)">
                                View File
                            </button>
                        </h2>
                        <div :id="`strategy-request-${request.id ?? index}`" class="accordion-collapse collapse">
                            <div class="accordion-body p-0">
                                <table class="table table-bordered mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th style="width: 50%;">Strategy</th>
                                            <th style="width: 25%;">Status</th>
                                            <th style="width: 25%;">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="3" class="p-0">
                                                <div v-if="!request.strategy || !request.strategy.length" class="p-3 text-muted">No strategy linked to this request.</div>
                                                <div v-else v-for="(strategy, strategyIndex) in request.strategy" :key="strategy.id ?? strategyIndex" class="accordion accordion-flush" :id="`strategyDetailAccordion-${request.id ?? index}`">
                                                    <div class="accordion-item border-0">
                                                        <h3 class="accordion-header">
                                                            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse"
                                                                :data-bs-target="`#strategy-detail-${request.id ?? index}-${strategy.id ?? strategyIndex}`" aria-expanded="false">
                                                                {{ strategy.name || strategy.description || 'Strategy' }}
                                                            </button>
                                                        </h3>
                                                        <div :id="`strategy-detail-${request.id ?? index}-${strategy.id ?? strategyIndex}`" class="accordion-collapse collapse">
                                                            <div class="accordion-body p-0">
                                                                <!-- <div class="p-2 border-bottom d-flex justify-content-between align-items-center">
                                                                    <label class="fw-bold mb-0">Strategy Description</label>
                                                                    <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(strategy.id, 'strategies')">Delete Strategy</button>
                                                                </div> -->
                                                                <div class="p-2 border-bottom d-flex align-items-start gap-2">
                                                                    <textarea class="form-control" rows="2" v-model="strategy.description"
                                                                        @change="updateStrategyActivityRequestField(strategy.id, 'strategies', 'description', strategy.description)"></textarea>
                                                                    <!-- <button type="button" class="btn btn-primary btn-sm text-white text-nowrap" @click="openActivityOnlyModal(strategy.id, strategy.description)">Add Activity</button> -->
                                                                </div>

                                                                <div class="table-responsive">
                                                                <table class="table table-sm table-bordered mb-0" style="min-width: 1500px;">
                                                                    <thead class="table-light">
                                                                        <tr>
                                                                            <th>Activity</th>
                                                                            <th>Timeline</th>
                                                                            <th>GAD Issue</th>
                                                                            <th>PS (Q1-Q4)</th>
                                                                            <th>MOOE (Q1-Q4)</th>
                                                                            <th>CO (Q1-Q4)</th>
                                                                            <th>FE (Q1-Q4)</th>
                                                                            <th>Responsible</th>
                                                                            <th>CCET</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-if="!(strategy.activity || []).length">
                                                                            <td colspan="10" class="text-muted text-center py-3">No activities available.</td>
                                                                        </tr>
                                                                        <template v-else>
                                                                            <tr v-for="(activity, activityIndex) in (strategy.activity || [])" :key="activity.id ?? activity.activity_id ?? `${request.id ?? index}-${strategyIndex}-${activityIndex}`">
                                                                                <td>
                                                                                    {{ activity.description }}
                                                                                    <!-- <textarea class="form-control" rows="2" v-model="activity.description"
                                                                                        @change="updateStrategyActivityRequestField(activity.id, 'activities', 'description', activity.description)"></textarea> -->
                                                                                </td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="date" class="form-control mb-1" v-model="activity.activityProject[0].date_from"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'date_from', activity.activityProject[0].date_from)">
                                                                                    <input type="date" class="form-control" v-model="activity.activityProject[0].date_to"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'date_to', activity.activityProject[0].date_to)">
                                                                                </td>
                                                                                <td v-else class="text-muted">Project details unavailable</td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <textarea class="form-control" rows="2" v-model="activity.activityProject[0].gad_issue"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'gad_issue', activity.activityProject[0].gad_issue)"></textarea>
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <template v-for="category in ['ps', 'mooe', 'co', 'fe']" :key="`${activity.id}-${category}`">
                                                                                    activityProject: {{ activity.activityProject }}
                                                                                    <td v-if="activity.activityProject && activity.activityProject.length">

                                                                                        <div v-for="quarter in ['q1', 'q2', 'q3', 'q4']" :key="`${activity.id}-${category}-${quarter}`" class="mb-1">
                                                                                            <input type="number" min="0" step="0.01" class="form-control form-control-sm"
                                                                                                :aria-label="`${category.toUpperCase()} ${quarter.toUpperCase()}`"
                                                                                                :placeholder="quarter.toUpperCase()"
                                                                                                v-model.number="activity.activityProject[0][`${category}_${quarter}`]"
                                                                                                @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', `${category}_${quarter}`, activity.activityProject[0][`${category}_${quarter}`])">
                                                                                        </div>
                                                                                    </td>
                                                                                    <td v-else class="text-muted">—</td>
                                                                                </template>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="text" class="form-control" v-model="activity.activityProject[0].responsible"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'responsible', activity.activityProject[0].responsible)">
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="text" class="form-control" v-model="activity.activityProject[0].ccet_code"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'ccet_code', activity.activityProject[0].ccet_code)">
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <!-- <td>
                                                                                    <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(activity.id, 'activities')">Delete</button>
                                                                                </td> -->
                                                                            </tr>
                                                                        </template>
                                                                    </tbody>
                                                                </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{data}} -->
    </div>
    <NewActivityStrategyRequestModal v-if="strategyRequestFilesModalVisible" @close-modal-event="closeStrategyRequestFilesModal" title="STRATEGY REQUEST FILES">
        <!-- <div class="mb-3 d-flex align-items-end gap-2">
            <div class="flex-grow-1">
                <label class="form-label" for="strategy-request-extra-file">Add a file</label>
                <input id="strategy-request-extra-file" ref="strategyRequestFileInput" type="file" class="form-control" accept=".pdf,.doc,.docx,image/*" @change="handleAdditionalStrategyRequestFile">
            </div>
            <button type="button" class="btn btn-primary text-white" :disabled="!strategyRequestFileToUpload" @click="addStrategyRequestFile">Upload</button>
        </div> -->
        <div v-if="strategyRequestFiles.length" class="table-responsive">
            <table class="table table-sm table-bordered align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Strategy Activity Request ID</th>
                        <th>File name</th>
                        <th>File path</th>
                        <th>File type</th>
                        <th>File size</th>
                        <th>Uploaded by</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(file, fileIndex) in strategyRequestFiles" :key="file.id ?? fileIndex">
                        <tr>
                            <td>{{ file.id }}</td>
                            <td>{{ file.strategy_activity_request_id }}</td>
                            <td>{{ file.file_name }}</td>
                            <td>{{ file.file_path }}</td>
                            <td>{{ file.file_type }}</td>
                            <td>{{ formatFileSize(file.file_size) }}</td>
                            <td>{{ file.uploaded_by }}</td>
                            <td>{{ file.created_at }}</td>
                            <td>{{ file.updated_at }}</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="collapse"
                                    :data-bs-target="`#strategy-request-file-${file.id ?? fileIndex}`" aria-expanded="false"
                                    :aria-controls="`strategy-request-file-${file.id ?? fileIndex}`">
                                    Preview
                                </button>
                                <button type="button" class="btn btn-danger btn-sm text-white ms-1" @click="deleteStrategyRequestFile(file.id)">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="10" class="p-0">
                                <div :id="`strategy-request-file-${file.id ?? fileIndex}`" class="accordion-collapse collapse">
                                    <div class="p-3 text-center">
                                        <img v-if="isStrategyRequestImage(file)" :src="getStrategyRequestFileUrl(file)" :alt="file.file_name" class="img-fluid" style="max-height: 70vh;" />
                                        <iframe v-else-if="isStrategyRequestPdf(file)" :src="getStrategyRequestFileUrl(file)" :title="file.file_name" class="w-100 border" style="height: 70vh;"></iframe>
                                        <a v-else :href="getStrategyRequestFileUrl(file)" target="_blank" rel="noopener">Open {{ file.file_name }}</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div v-else class="text-muted p-3">No files attached to this request.</div>
    </NewActivityStrategyRequestModal>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import NewActivityStrategyRequestModal from "@/Shared/ModalDynamicTitleLarge";

export default {
    props: {
        auth: Object,
        data: Object,
        filters: Object,
    },
    data() {
        return {
            search: this.$props.filters?.search || '',
            filter: false,
            strategyRequestFilesModalVisible: false,
            strategyRequestFiles: [],
            strategyRequestId: null,
            strategyRequestFiles: null,
            strategyRequestFileToUpload: null,
            strategyRequestFilesModalVisible: null,
            // strategyRequestFileToUpload: null,
        }
    },
    components: {
        Pagination, Filtering, NewActivityStrategyRequestModal
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/strategy-and-activity-request" ,
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
        showStrategyRequestFiles(request) {
            this.strategyRequestId = request?.id ?? null;
            this.strategyRequestFiles = Array.isArray(request?.files) ? [...request.files] : [];
            this.strategyRequestFileToUpload = null;
            this.strategyRequestFilesModalVisible = true;
        },
        closeStrategyRequestFilesModal() {
            this.strategyRequestFilesModalVisible = false;
            this.strategyRequestFiles = [];
            this.strategyRequestId = null;
            this.strategyRequestFileToUpload = null;
        },
        formatFileSize(size) {
            return `${(size / 1024).toFixed(1)} KB`;
        },
        getStrategyRequestFileUrl(file) {
            const directory = String(file?.file_path || '')
                .replace(/\\/g, '/')
                .replace(/^\/+|\/+$/g, '')
                .replace(/^public\//, '');
            const fileName = encodeURIComponent(file?.file_name || '');

            return `/${directory}/${fileName}`;
        },
        isStrategyRequestImage(file) {
            return String(file?.file_type || '').toLowerCase().startsWith('image/');
        },
        isStrategyRequestPdf(file) {
            return String(file?.file_type || '').toLowerCase() === 'application/pdf';
        },
        submitStrategyActivityRequest(request, status) {
            if(status==='1'){
                stat = 'approve';
            }else if(status==='-2'){
                stat = 'return';
            }
            const confirmed = window.confirm(
                'Are you sure you want to '+stat+' this strategy activity request?'
            );

            if (!confirmed) {
                return Promise.resolve(false);
            }
            return this.updateStrategyActivityRequestField(
                request.id,
                'strategy_activity_requests',
                'status',
                status
            ).then((response) => {
                // if (response) {
                //     request.status = status;
                // }
            });
        },
        updateStrategyActivityRequestField(id, tableName, columnName, newValue) {
            if (!id || !tableName || !columnName) {
                return Promise.resolve();
            }

            return axios.patch('/strategy-and-activity-request/update/status', {
                id: id,
                table_name: tableName,
                column_name: columnName,
                new_value: newValue ?? ''
            }, {
                preserveScroll: true,
                preserveState: true
            })
            .then((response) => {
                // this.unsaved = false;
                // return response;
            })
            .catch((error) => {
                // console.error('Failed to update strategy/activity row:', error);
                // alert('Failed to update the selected row.');
                // return false;
            });
        },
        // showCreate() {
        //     this.$inertia.get(
        //         "/targets/create",
        //         {
        //             raao_id: this.raao_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // deleteSectoral(id) {
        //     let text = "WARNING!\nAre you sure you want to delete the Sectoral Goals?" + id;
        //     if (confirm(text) == true) {
        //         this.$inertia.delete("/Sectoral/" + id);
        //     }
        // },
        // getAccomplishment(tar_id) {
        //     this.$inertia.get(
        //         "/accomplishments",
        //         {
        //             idtarget: tar_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // getPercent(accomp, targqty) {
        //     var accSum = 0;
        //     accomp.forEach(myFunction);
        //     function myFunction(item) {
        //         accSum += parseFloat(item.accomplishment_qty)

        //     }
        //     var percentt = (accSum / targqty) * 100
        //     percentt = this.format_number(percentt, 2, true)
        //     return percentt;
        // }
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
</style>
