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
                    <!--<Table :questions="questions" />-->
                    <table name="tabel" class="table table-hover table-striped">
                        <thead class="bg-secondary text-white">
                            <tr >
                                <th>Item Number</th>
                                <th>Question</th>
                                <th>Score for Partly Done</th>
                                <th>Score for Done</th>
                                <!--<th>Score</th>-->
                                <th scope="col" style="text-align: right" >ACTION</th>
                            </tr>
                            <!--v-if="showActionsColumn(user.can.canEditUsers, user.can.canUpdateUserPermissions, user.can.canDeleteUsers)"-->
                        </thead>
                        <tbody>
                            <template v-for="(question, index) in questions" :key="question.id">
                                <tr>
                                    <td><b>{{ question.question_number }}</b></td>
                                    <td><b>{{ question.question }}</b></td>
                                    <td><b>{{ format_number_conv(question.score,2,true) }}</b></td>
                                    <td><b>{{ format_number_conv(question.score*2,2,true) }}</b></td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li >
                                                <Link class="dropdown-item"
                                                        :href="`/HGDGQuestions/create/subquestions/${question.checklist_id}/${question.id}`">
                                                    Add Subquestion
                                                </Link>
                                                <Link class="dropdown-item"
                                                        :href="`/HGDGQuestions/${question.id}/edit`">
                                                    Edit
                                                </Link>
                                                <li><Link class="text-danger dropdown-item" @click="deleteQ(question.id, question.has_subquestion)">Delete</Link></li>
                                            </li>
                                        </ul>
                                    </div>
                                </tr>
                                <template v-if="question.subQuestions">
                                    <template v-for="(subQuestion, subIndex) in question.subQuestions" :key="subQuestion.id">
                                    <tr>
                                        <td>&nbsp;&nbsp;&nbsp;{{ subQuestion.question_number }}</td>
                                        <td>{{ subQuestion.question }}</td>
                                        <td><b>{{ format_number_conv(subQuestion.score,2,true) }}</b></td>
                                        <td><b>{{ format_number_conv(subQuestion.score*2,2,true) }}</b></td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">

                                                <!--<li ><Link class="dropdown-item" :href="`/users//edit`">Edit</Link></li>-->
                                                <li >
                                                    <Link class="dropdown-item" :href="`/HGDGQuestions/create/subquestions/${subQuestion.checklist_id}/${subQuestion.id}`">
                                                        Add Subquestion
                                                    </Link>
                                                    <Link class="dropdown-item"
                                                        :href="`/HGDGQuestions/${subQuestion.id}/edit`">
                                                        Edit
                                                    </Link>
                                                    <li><Link class="text-danger dropdown-item" @click="deleteQ(subQuestion.id,subQuestion.has_subquestion)">Delete</Link></li>
                                                </li>
                                            </ul>
                                        </div>
                                    </tr>
                                    <template v-if="subQuestion.subQuestions">
                                        <template v-for="(subSubQuestion, subSubIndex) in subQuestion.subQuestions" :key="subSubQuestion.id">
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ subSubQuestion.question_number }}</td>
                                                <td>{{ subSubQuestion.question }}</td>
                                                <td><b>{{ format_number_conv(subSubQuestion.score,2,true) }}</b></td>
                                                <td><b>{{ format_number_conv(subSubQuestion.score*2,2,true) }}</b></td>
                                                <div class="dropdown dropstart" >
                                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                        </svg>
                                                    </button>
                                                    <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">

                                                        <!--<li ><Link class="dropdown-item" :href="`/users//edit`">Edit</Link></li>-->
                                                        <li >
                                                            <Link class="dropdown-item" :href="`/HGDGQuestions/create/subquestions/${subSubQuestion.checklist_id}/${subSubQuestion.id}`">
                                                                Add Subquestion
                                                            </Link>
                                                            <Link class="dropdown-item"
                                                                :href="`/HGDGQuestions/${subSubQuestion.id}/edit`">
                                                                Edit
                                                            </Link>
                                                            <li><Link class="text-danger dropdown-item" @click="deleteQ(subSubQuestion.id,subSubQuestion.has_subquestion)">Delete</Link></li>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </tr>
                                            <template v-if="subSubQuestion.subQuestions">
                                                <template v-for="(subSubSubQuestion, subSubSubIndex) in subSubQuestion.subQuestions" :key="subSubSubQuestion.id">
                                                    <tr>
                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ subSubSubQuestion.question_number }}</td>
                                                        <td>{{ subSubSubQuestion.question }}</td>
                                                        <td><b>{{ format_number_conv(subSubSubQuestion.score,2,true) }}</b></td>
                                                        <td><b>{{ format_number_conv(subSubSubQuestion.score*2,2,true) }}</b></td>
                                                        <div class="dropdown dropstart" >
                                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                                </svg>
                                                            </button>
                                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">

                                                                <!--<li ><Link class="dropdown-item" :href="`/users//edit`">Edit</Link></li>-->
                                                                <li >
                                                                    <Link class="dropdown-item" :href="`/HGDGQuestions/create/subquestions/${subSubSubQuestion.checklist_id}/${subSubSubQuestion.id}`" >
                                                                        Add Subquestion
                                                                    </Link>
                                                                </li>
                                                                <Link class="dropdown-item"
                                                                    :href="`/HGDGQuestions/${subSubSubQuestion.id}/edit`">
                                                                    Edit
                                                                </Link>
                                                                <li><Link class="text-danger dropdown-item" @click="deleteQ(subSubSubQuestion.id,subSubSubQuestion.has_subquestion)">Delete</Link></li>
                                                            </ul>
                                                        </div>
                                                    </tr>
                                                    <template v-if="subSubSubQuestion.subQuestions">
                                                        <template v-for="(subSubSubSubQuestion, subSubSubSubIndex) in subSubSubQuestion.subQuestions" :key="subSubSubSubQuestion.id">
                                                            <tr>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ subSubSubQuestion.question_number }}</td>
                                                                <td>{{ subSubSubSubQuestion.question }}</td>
                                                                <td><b>{{ format_number_conv(subSubSubSubQuestion.score,2,true) }}</b></td>
                                                                <td><b>{{ format_number_conv(subSubSubSubQuestion.score*2,2,true) }}</b></td>
                                                                <div class="dropdown dropstart" >
                                                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                                        </svg>
                                                                    </button>
                                                                    <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">

                                                                        <!--<li ><Link class="dropdown-item" :href="`/users//edit`">Edit</Link></li>-->
                                                                        <li >
                                                                            <Link class="dropdown-item"
                                                                                :href="`/HGDGQuestions/create/subquestions/${subSubSubSubQuestion.checklist_id}/${subSubSubSubQuestion.id}`"
                                                                            >
                                                                                Add Subquestion
                                                                            </Link>
                                                                            <Link class="dropdown-item"
                                                                                :href="`/HGDGQuestions/${subSubSubSubQuestion.id}/edit`">
                                                                                Edit
                                                                            </Link>
                                                                            <li><Link class="text-danger dropdown-item" @click="deleteQ(subSubSubSubQuestion.id,subSubSubSubQuestion.has_subquestion)">Delete</Link></li>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </tr>
                                                        </template>

                                                    </template>
                                                </template>
                                            </template>
                                        </template>
                                    </template>
                                    </template>
                                </template>
                            </template>
                            <template>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>{{ format_number_conv(sum,2,true) }}</td>
                                    <td>{{ format_number_conv(sum*2,2,true) }}</td>
                                    <td></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                    {{  format_number_conv(sum,2,true) }}
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
        sum: Number
    },
    mounted(){
        //this.getPermissionAll();
    },
    data() {
        return {
            selected_permissions: [],
            permission_index: [],
            permission_particular: [],
            permission_option: [],
            form: useForm({
                my_id: 0,
                value: [],
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
        flattenedQuestions() {
            const flatten = (questions, indent) =>
                questions.flatMap((question) => [
                {
                    ...question,
                    indent,
                },
                ...flatten(question.subQuestions || [], indent + 1),
                ]);
            return flatten(this.questions, 0);
        },
        allQuestions() {
            const flatten = (question, parentNumber = "") => {
                const number = parentNumber
                ? `${parentNumber}.${question.item}`
                : question.item;
                return [
                {
                    number,
                    question: question.question,
                    item: question.item,
                },
                ...question.subQuestions.flatMap((subQuestion) =>
                    flatten(subQuestion, number)
                ),
                ];
            };
            return this.questions.flatMap((question) => flatten(question));
        },
        generateNumberedQuestions(questions, parentNumber = '') {
            let result = [];
            if(Array.isArray(questions)){
                questions.forEach((question, index) => {
                    const number = parentNumber ? `${parentNumber}.${index + 1}` : `${index + 1}`;
                    result.push({
                        number,
                        question: question.question,
                    });

                    if (question.subQuestions) {
                    result.push(...generateNumberedQuestions(question.subQuestions, number));
                    }
                });
            }else{
                console.error('questions is not an array');
            }


            return result;
        },


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
        }
    },
};
</script>
