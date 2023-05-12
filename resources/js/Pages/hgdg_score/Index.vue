<template>
    <Head>
        <title>Questions</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{  hgdg_checklist.box_number }}. {{  hgdg_checklist.sector }}
            </h3>
            <!--<h6>List of User Accounts</h6>-->
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/HGDGQuestions/create/${hgdg_checklist.id}`">Add Question</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Sample Inputs</label>
            <input type="text" class="form-control">
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <form @submit.prevent="submit()">
                    <!--<Table :questions="questions" />-->
                        <table name="tabel" class="table table-hover table-striped">
                            <thead class="bg-secondary text-white">
                                <tr >
                                    <th>Item Number</th>
                                    <th>Question</th>
                                    <th>Not Done</th>
                                    <th>Partly Done</th>
                                    <th>Done</th>
                                    <!--<th>Score</th>-->
                                    <th scope="col" style="text-align: right" >score</th>
                                    <th>Remarks</th>
                                </tr>
                                <!--v-if="showActionsColumn(user.can.canEditUsers, user.can.canUpdateUserPermissions, user.can.canDeleteUsers)"-->
                            </thead>
                            <tbody>
                                <tr v-for="(hgdg_score, index) in form.hgdg_scores">
                                    <th>{{ form.hgdg_scores[index].question_number }}</th>
                                    <th>{{ form.hgdg_scores[index].question }}</th>
                                    <th>
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion!='0'"
                                            :value="0"
                                        />
                                    </th>
                                    <th>
                                        <!--@click="viewScore(hgdg_score.score)"-->
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion!='0'"
                                            :value="form.hgdg_scores[index].q_score"

                                        /><br>

                                    </th>
                                    <th>
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion!='0'"
                                            :value="form.hgdg_scores[index].q_score * 2"

                                        />
                                    </th>
                                    <th><div v-bind:hidden="hgdg_score.has_subquestion!='0'">{{ setScore(form.hgdg_scores[index].score) }}</div></th>
                                    <th><textarea v-bind:hidden="hgdg_score.has_subquestion!='0'" v-model="form.hgdg_scores[index].result_comment"></textarea></th>
                                </tr>
                                <tr colspan="7" >

                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <button type="button"
                                class="btn btn-primary mt-3 text-white"
                                @click="submit()" :disabled="form.processing">
                            Save changes
                        </button>
                    </div>
                </div>

                <!--{{ auth }}-->
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!--<pagination :next="users.next_page_url" :prev="users.prev_page_url" />-->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            <!--{{ users.from }} to {{ users.to }} of {{ users.total }} entries-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
//import Table from './Table.vue'               , Table

export default {
    components: { Pagination, Filtering },
    props: {
        auth: Object,
        users: Object,
        filters: Object,
        can: Object,
        permissions_all: Object,
        questions: Object,
        hgdg_checklist: Object,
        idrevplan: Object
    },
    mounted(){
        this.form.hgdg_scores=this.questions
    },
    data() {
        return {
            selected_permissions: [],
            permission_index: [],
            permission_particular: [],
            permission_option: [],
            form: useForm({
                hgdg_scores: [],
            }),
            my_name: '',
            my_status: '0',
            my_id: 0,
            my_pass1: null,
            my_pass2: null,
            selected_user_id: null,
            permissions_selected_user: [],
            search: null,
            confirm: false,
            filter: false,
            results: []
        };
    },
    computed:{
        setScore(){
            return (score)=>{
                return `${score}`
            }
        }

    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/users",
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
        submit(){

            let jsonString = JSON.stringify(this.form.hgdg_scores);
            //alert("submit"+jsonString);
            //this.form.get("/HGDGScore/store/hgdg", jsonString);
            this.$inertia.post(
                "/HGDGScore/store/hgdg",
                {
                    scores: jsonString,
                    idrevplan: this.idrevplan
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            )
        },
        getIndex(index) {
            let parentIndexes = [];
            let parent = this.questions[index];
            while (parent) {
                parentIndexes.unshift(parent.index);
                parent = parent.parent;
            }
            return parentIndexes.join('.');
        },

        deleteQ(id, has_subquestion){

            if(has_subquestion>0){
                alert("This question has subquestions! Delete the subquestions first!");
            }else{
                let text = "WARNING!\nAre you sure you want to delete the Checklist?";
                if (confirm(text) == true) {
                    this.$inertia.delete("/HGDGQuestions/delete/" + id);
                }
            }
        },
        viewScore(sc_val){
            alert(sc_val);
        }
    },
};
</script>
