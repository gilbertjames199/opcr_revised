<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <p class="text-center">
        <h4>Review/Approve </h4>
        </p>
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR (Rating)</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/Societal/create`">Add Societal Goals</Link>
                </div>
            </div>
            <!-- <Link :href="'/Sectoral'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Office</th>
                                <th>Semester</th>
                                <th>Period Covered</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>
                                    {{ dat.office.FFUNCTION }}
                                </td>
                                <td>
                                    {{ dat.semester }}
                                </td>
                                <td>
                                    {{ dat.opcr_date }}
                                </td>
                                <td>
                                    {{ getStatus(dat.rating_status) }}
                                </td>
                                <td>
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
                                                <!-- <Link class="dropdown-item" :href="`/Societal/${dat.id}/edit`">Edit</Link> -->
                                                <button class="dropdown-item"
                                                    @click="viewModal(dat.id, dat.rating_status, dat)">View</button>
                                            </li>
                                            <li>
                                                <!-- <Link class="text-danger dropdown-item" @click="deleteSectoral(dat.id)">
                                                Delete</Link> -->
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
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
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal" :title="`${mode_1}`">
            <!-- {{ opcr_current }} -->
            <div>
                <div><b>OFFICE:&nbsp;</b><u>{{ opcr_current.office.FFUNCTION }}</u></div>
                <div><b>SEMESTER:&nbsp;</b><u>{{ opcr_current.semester }}</u></div>
                <div><b>PERIOD COVERED:&nbsp;</b><u>{{ opcr_current.opcr_date }}</u></div>
                <div><b>STATUS:&nbsp;</b><u>{{ getStatus(opcr_current.rating_status) }}</u></div>
            </div>
            <div class="d-flex justify-content-center">
                <!-- <iframe :src="my_link" style="width:100%; height:500px" /> -->
                <!-- {{ opcr_data }} -->
                <table class="table table-sm table-borderless table-striped table-hover">
                    <thead class="sticky-header">
                        <tr class="bg-secondary text-white">
                            <th rowspan="2" >MFO</th>
                            <th rowspan="2" >PAPS</th>
                            <th colspan="8" rowspan="1" style="text-align: center" >Rating</th>
                            <th rowspan="2" >Remarks</th>
                            <th rowspan="2" >MOVs</th>
                        </tr>
                        <tr class="bg-secondary text-white">
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                            <th>E1</th>
                            <th>E2</th>
                            <th>E3</th>
                            <th>T1</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(dat, index) in opcr_data" :key="index">
                            <tr >
                                <td>{{ dat.mfo_desc }}</td>
                                <td>
                                    {{ dat.paps_desc }}

                                </td>
                                <!-- <td>{{ dat.success_indicator }}</td>
                                <td>{{ dat.target_success_indicator }}</td>
                                <td>{{ dat.quantity }}</td>
                                @change="saveRating()"
                                -->
                                <td>
                                    <!-- width: 2.5em;  -->
                                    <select v-model="opcr_data[index].q1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && !dat.q1" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <!-- {{  dat }} -->
                                    <!-- width: 2.5em;  -->
                                    <select v-model="opcr_data[index].q2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].q2, opcr_data[index].opcr_rating_id, 'q2')"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && !dat.q2" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <!-- width: 2.5em;  -->
                                    <select v-model="opcr_data[index].q3" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].q3, opcr_data[index].opcr_rating_id, 'q3')"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && !dat.q3" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <!--  width: 2.5em; -->
                                    <select v-model="opcr_data[index].e1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1')"
                                        :disabled="dat.e1_standard === 'No'"
                                        :style="dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && dat.e1_standard === 'Yes' && !dat.e1" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <!-- width: 2.5em;  -->
                                    <select v-model="opcr_data[index].e2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2')"
                                        :disabled="dat.e2_standard === 'No'"
                                        :style="dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && dat.e2_standard === 'Yes' && !dat.e2" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <!-- style="width: 2.5em; text-align: center;"   -->
                                    <select v-model="opcr_data[index].e3" class="form-select" style="width: 4.2em; text-align: center;" type="number"
                                        @change="saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3')"
                                        :disabled="dat.e3_standard === 'No'"
                                        :style="dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && dat.e3_standard === 'Yes' && !dat.e3" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td>
                                    <select v-model="opcr_data[index].t1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                        @change="saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1')"
                                        :disabled="dat.t1_standard !== 'Yes'"
                                        :style="dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <div v-if="submit_attempt==true && dat.t1_standard === 'Yes' && !dat.t1" style="color: red; font-weight: bold">
                                        Rating for this field is required to proceed with submission.
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <textarea class="form-control"
                                        v-model="opcr_data[index].remarks"
                                        @input="autoResize($event)"
                                        @change="saveRating(opcr_data[index].remarks, opcr_data[index].opcr_rating_id,'remarks')"
                                        ref="remarksTextarea"
                                    />
                                </td>
                                <td>
                                    <button
                                        @click="updateMOVisVisible(opcr_data[index].mov_is_visible, index)"
                                        class="p-1 rounded bg-transparent hover:bg-blue-100 border-0"
                                        title="View MOVs"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="blue"
                                            class="bi bi-eye-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="opcr_data[index].mov_is_visible">
                                <tr v-for="file in dat.movs">
                                    <td>
                                        <img :src="getPreUploadFileIcon(file.filename.split('.').pop())" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/>

                                    </td>
                                    <td>{{ file.filename }}</td>
                                    <td><a
                                        :href="`/movs/download/${file.id}`"

                                        class="inline-flex items-center"
                                        title="Download"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="green"
                                            class="bi bi-cloud-arrow-down-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
                                        </svg>
                                    </a>&nbsp;</td>
                                </tr>
                            </tr>
                        </template>

                    </tbody>
                </table>
            </div>
            <!-- {{ opcr_data }} -->
            <div class="d-flex justify-content-center">
                <label>REMARKS: </label>&nbsp;&nbsp;&nbsp;
                <input class="form-control" v-model="form.remarks" type="text" /><br />
            </div>
            <div>
                <hr>
            </div>
            <div class="d-flex justify-content-center">
                <button v-if="opcr_current.rating_status == 0" @click="reviewSubmit()"
                    class="btn btn-primary text-white">Review</button>&nbsp;
                <button v-if="opcr_current.rating_status == 1" @click="approveSubmit()"
                    class="btn btn-success text-white">Approve</button>&nbsp;
                <button @click="returnSubmit()" class="btn btn-danger text-white">Return</button>
            </div>
        </Modal>
        <!--
        <Modal2 v-if="displayModal2" @close-modal-event="hideModal">
            <button @click="backTo()" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                    <path fill-rule="evenodd"
                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>
            {{ mode }} Remarks:
            <input class="form-control" v-model="remarks" type="text" />
            viewModal(opcr_id, status, opcr)
            &nbsp;v-if="auth.user.office.department_code == '04'"
            <button @click="confirmSubmission()" class="btn btn-primary text-white">Done</button>&nbsp;
            <button @click="hideModal()" class="btn btn-danger text-white">Cancel</button>
        </Modal2> -->
        <!-- {{ auth }}
        {{ auth.user.office.department_code }}
        -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/ModalDynamicTitle2";
import Modal2 from "@/Shared/PrintModal";
export default {
    props: {
        auth: Object,
        data: Object,
        mode_1: String
    },
    data() {
        return {
            displayModal: false,
            displayModal2: false,
            opcr_data: [],
            status_val: -3,
            opcr_current: [],
            remarks: "",
            mode: "",
            form: useForm({
                remarks: "",
                opcr_list_id: "",
            }),
            can_submit: false,
            submit_attempt: false,
        }
    },
    mounted() {
        // auto-resize all rendered textareas on initial load
        this.$nextTick(() => {
            this.$refs.remarksTextarea.forEach((ta) => {
            ta.style.height = "auto";
            ta.style.height = ta.scrollHeight + "px";
            });
        });
    },
    updated() {
        // auto-resize whenever data changes after updates
        this.$nextTick(() => {
            if (this.$refs.remarksTextarea) {
            this.$refs.remarksTextarea.forEach((ta) => {
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            });
            }
        });
    },
    components: {
        Pagination, Filtering, Modal, Modal2
    },

    methods: {
        updateMOVisVisible(mov_is_visible, index){
            this.opcr_data[index].mov_is_visible = !mov_is_visible
        },
        formatFileSize(size) {
            if (size < 1024) return size + ' B';
            else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            else return (size / (1024 * 1024)).toFixed(2) + ' MB';
        },
        deleteSectoral(id) {
            let text = "WARNING!\nAre you sure you want to delete the Societal Goals?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/Societal/" + id);
            }
        },
        getPercent(accomp, targqty) {
            var accSum = 0;
            accomp.forEach(myFunction);
            function myFunction(item) {
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum / targqty) * 100
            percentt = this.format_number(percentt, 2, true)
            return percentt;
        },
        async viewModal(opcr_id, status, opcr) {
            // alert('View Modal');
            this.status_val = status
            this.opcr_current = opcr
            var url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission"
            await axios.get(url, {
                params: {

                }
            }).then((response) => {
                this.opcr_data = response.data;
            }).catch((error) => {
                console.error(error);
            });
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
            this.displayModal2 = false;
            this.submit_attempt =false;
        },
        showModal2(md) {
            this.hideModal();
            this.displayModal2 = true;
            if (md === 'v') {
                this.mode = "Review"
            } else if (md === 'a') {
                this.mode = "Approve"
            } else if (md === 'r') {
                this.mode = "Return"
            }
        },
        backTo() {
            this.hideModal();
            this.viewModal(this.opcr_current.id, this.opcr_current.status_val, this.opcr_current)
        },
        confirmSubmission() {

        },
        reviewSubmit() {
            // var opcr_list_id_here = this.opcr_current.id;
            this.submit_attempt=true;
            var cansub = this.canSubmit();
            if(cansub){
                // alert(cansub+ " true")
                var url = '/review-approve/ratings/' + this.opcr_current.id + '/review';
                this.form.opcr_list_id = this.opcr_current.id;
                let text = "WARNING!\nAre you sure you want to review the OPCR?";
                if (confirm(text) == true) {
                    this.form.get(url, this.form);
                }
                this.hideModal();
                this.clearForm();
            }else{
                // alert(cansub+ " false")
                alert("⚠️ Review blocked: Some required items have not been scored. Please complete all scores before proceeding.")
            }

        },
        approveSubmit() {

            var url = '/review-approve/ratings/approve/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to approve the IPCR?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }
            this.hideModal();
            this.clearForm();
        },
        returnSubmit() {
            // /return/remarks / { opcr_list_id } / opcr
            var url = '/review-approve/ratings/return/remarks/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to return the selected OPCR?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }

            this.hideModal();
            this.clearForm();
        },
        clearForm() {
            this.form.remarks = "";
            this.form.opcr_list_id = "";
        },
        saveRating(rating, opcr_rating_id, column){
            // alert("rating: "+ rating + " \n"+"opcr_rating_id: "+opcr_rating_id)
            // review-approve/ratings/sub/mit/opcr/{opcr_rating_id}/{item_score}
            // @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')"
            if(!rating){
                rating="rating is null";
            }
            var url = "/review-approve/ratings/submit/opcr/"+column+"/"+opcr_rating_id+"/"+rating;
            axios.post(url).then(response=>{

            }).finally(response=>{

            }).catch(error=>{

            });
        },
        canSubmit() {
        // loop through each row in opcr_data
            for (let row of this.opcr_data) {
                // define the mappings of score fields to their standards
                const checks = [
                    { score: row.q1, standard: 'Yes'},
                    { score: row.q2, standard: 'Yes'},
                    { score: row.q3, standard: 'Yes'},
                    { score: row.e1, standard: row.e1_standard },
                    { score: row.e2, standard: row.e2_standard },
                    { score: row.e3, standard: row.e3_standard },
                    { score: row.t1, standard: row.t1_standard }
                ];
                console.log(checks);

                for (let { score, standard } of checks) {
                    if (standard === "Yes") {
                        // check if score is not null/empty and between 1–5
                        if (
                            score === null ||
                            score === "" ||
                            isNaN(score) ||
                            Number(score) < 1 ||
                            Number(score) > 5
                        ) {
                            // alert("null ang score "+score)
                            return false;
                        }
                    }else{
                        // alert("No")
                    }
                }
            }
            return true;
        },
        autoResize(event) {
            const textarea = event.target;
            textarea.style.height = "auto"; // reset first to recalc
            textarea.style.height = textarea.scrollHeight + "px"; // fit content
        },
    }
};
</script>
<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background: white; /* Important so header isn’t transparent */
  z-index: 2;        /* Keeps header above body rows */
}
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
