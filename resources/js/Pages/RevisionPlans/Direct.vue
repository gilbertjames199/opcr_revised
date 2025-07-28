<template>
    <Head>
        <title>PROGRAMS</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3 v-if="my_source=='budget'">Budget Prep </h3>
            <h3 v-if="my_source=='direct'">Programs</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/${idpaps}`">Add Revision Plan</Link> -->
                     <button class="btn btn-primary btn-sm mL-2 text-white" @click="showPrint()">Print</button>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <!--
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            -->
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <!-- <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5> -->
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <filtering v-if="filter" @closeFilter="filter = false">
            <label>Office</label>
            <!-- {{ FFUNCCOD }} -->
            <select class="form-select" v-model="filter_FFUNCCOD" @change="filterPrograms(search, filter_FFUNCCOD)">
                <option></option>
                <option v-for="office in offices" :value="office.FFUNCCOD">{{ office.FFUNCTION }}</option>
            </select>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
        <modal-right-align v-if="showModalRightAlign" @closeFilter="showModalRightAlign = false"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_prep">Add Budget Prep</button>
            <!-- {{ budget_data }} -->
            <div class="table-responsive">
                <table class="table table-sm table-borderless table-striped table-hover" v-if="budget_data.length > 0">
                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>OOE</th>
                            <th>Account Code</th>
                            <th>Particular</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="dat in budget_data">
                            <td>{{ dat.idooe }}</td>
                            <td>{{ dat.account_code }}</td>
                            <td>{{ dat.particulars }}</td>
                            <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                            <td >
                                <Button
                                    class="btn btn-primary btn-sm text-white"
                                    @click="editBudgetPrep(dat.id)"
                                    title="Edit Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>&nbsp;
                                <Button
                                    class="btn btn-danger btn-sm text-white"
                                    @click="deleteBudgetPrep(dat.id)"
                                    title="Delete Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL (Planned Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(budget_sum,2,true) }}</u></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL</b></td>
                            <td class="text-end"><u>{{ format_number_conv(total_budget,2,true) }}</u></td>
                            <td></td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </modal-right-align>
        <ModalRightAlignCRUD v-if="showModalRightAlignCRUD" @closeFilter="closeCRUD"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <form @submit.prevent="submit()">
                <div class="mb-3">
                    <label for="idooe" class="form-label">OOE</label>
                    <!-- <input type="text" class="form-control" id="idooe" v-model="form.idooe">
                    <select class="form-select mt-2" id="idooe" v-model="form.idooe">
                        <option value="">Select OOE</option>
                        <option v-for="ooe in ooes" :value="ooe.id">{{ ooe.description }}</option>
                    </select> -->
                    <multiselect :options="ooe_options" :searchable="true" v-model="form.idooe" label="label"
                        track-by="label" @close="setCode">
                    </multiselect>
                    <!-- <div @keyup.enter="addOOE($event)">
                        <multiselect :options="ooe_description" :searchable="true" v-model="form.idooe" @select="setCode"
                            :value="ooe_id" @search-change="typed = $event">
                        </multiselect>
                    </div> -->
                </div>
                <div class="mb-3">
                    <label for="account_code" class="form-label">Account Code</label>
                    <input type="text" class="form-control" id="account_code" v-model="form.account_code">
                </div>
                <div class="mb-3">
                    <label for="particulars" class="form-label">Particulars</label>
                    <input type="text" class="form-control" id="particulars" v-model="form.particulars">
                </div>
                <div class="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount" v-model="form.amount">
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category" v-model="form.category">
                        <option value="Maintenance, Operating, and Other Expenses">Maintenance, Operating, and Other Expenses</option>
                        <option value="Capital Outlay">Capital Outlay</option>
                        <option value="Financial Expenses">Financial Expenses</option>
                        <option value="Personnel Services">Personnel Services</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="source" class="form-label">Source</label>
                    <input type="text" class="form-control" id="source" v-model="form.source" placeholder="e.g. General Fund, Regular MOOE, etc.">
                </div>
                <div class="mb-3">
                    <label for="category_gad" class="form-label">Category GAD</label>
                    <select class="form-select" id="category_gad" v-model="form.category_gad">
                        <option value="GAD">GAD</option>
                        <option value="NON-GAD">NON-GAD</option>
                    </select>
                </div>
                <input type="hidden" v-model="form.revision_plan_id" >
                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <button type="button" class="btn btn-danger mt-3 text-white" @click="" :disabled="form.processing">
                    Cancel
                </button>
            </form>
        </ModalRightAlignCRUD>
        <ModalRightAppropriation v-if="showModalAppropriation" @closeFilter="showModalAppropriation=false" :title="'Budget Proposed'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_proposal">Add Budget</button>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_proposal">Add Budget</button>
            <div class="table-responsive">
                <table class="table table-sm table-borderless table-striped table-hover" v-if="budget_data.length > 0">
                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>Object of Expenditure</th>
                            <th>Account Code</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="dat in budget_data">
                            <td>{{ dat.object_of_expenditure }}</td>
                            <td>{{ dat.account_code }}</td>
                            <td class="text-end">{{ format_number_conv(dat.budget_year,2,true) }}</td>
                            <td >
                                <Button
                                    class="btn btn-primary btn-sm text-white"
                                    @click="editBudgetApprop(dat.id)"
                                    title="Edit Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>&nbsp;
                                <Button
                                    class="btn btn-danger btn-sm text-white"
                                    @click="deleteBudgetApprop(dat.id)"
                                    title="Delete Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL (Planned Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(budget_sum,2,true) }}</u></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL</b></td>
                            <td class="text-end"><u>{{ format_number_conv(total_budget,2,true) }}</u></td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </ModalRightAppropriation>
        <ModalRightAppropriationCrud v-if="showModalAppropriationCrud" @closeFilter="closeCRUDApprop"
            :title="'Budget Proposed'">showModalAppropriationCrud: {{ showModalAppropriationCrud }}
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <form @submit.prevent="submitBudgetProposal()">
                <!--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&-->
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="positionchrome-off">
                <input type="hidden" v-model="form.revision_plan_id" class="form-control" autocomplete="positionchrome-off">

                <div>
                    revision_plan_id: {{ form.revision_plan_id }}
                    idpaps: {{ form.idpaps }}
                </div>
                <div hidden>
                    <!-- <label for="">Chart of Accounts *</label>
                    <div @keyup.enter="addAccount($event)">
                        <multiselect :options="accounts" :searchable="true" v-model="chart_selected" @select="setCode"
                            :value="chart_selected" @search-change="typed = $event">
                        </multiselect>
                    </div> -->

                    <!-- <label>ACCOUNT CODE </label>
                    <input type="number" class="form-control" v-model="form.account_code" @change="searchByAccountCode" />
                    <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div> -->

                    <label for="">Object of Expenditure</label>
                    <input type="text" v-model="form.object_of_expenditure" class="form-control"
                        autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{
                        form.errors.object_of_expenditure }}</div>
                </div>
                <!--*****************************-->
                <label>YEAR</label>
                <input type="number" class="form-control" v-model="form.year" />
                <div class="fs-6 c-red-500" v-if="form.errors.year">{{ form.errors.year }}</div>

                <label>OFFICE</label>
                <!-- {{ form.FFUNCCOD }} -->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option></option>
                    <option v-for="functione in functions" :value="functione.FFUNCCOD">{{ functione.FFUNCTION }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label>RAAO TYPE</label>
                <!-- {{ form.raaotype }} -->
                <select class="form-control" v-model="form.raaotype" ref="raaoSelect" @click="filterProgram">
                    <option></option>
                    <option value="1">Personnel Services</option>
                    <option value="2">Maintenance, Operating, and Other Expenses</option>
                    <option value="3">Capital Outlay</option>
                    <option value="4">Programs</option>
                    <option value="5">Projects</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>

                <label>PROGRAM</label>&nbsp;
                <div>
                    <multiselect :options="formattedPrograms" :searchable="true" v-model="form.idprogram" label="label"
                        track-by="label" @close="loadOOE">
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>
                <!-- <br>{{ form.idprogram }} -->
                <!-- {{ form }} @keyup.enter="searchPrograms($event)"-->
                <!--******************************-->
                <label>Objects of Expenditure</label>&nbsp;
                <!-- idooe: {{ form.idooe }} -->

                <div>
                    <multiselect :options="formattedOOEs" :searchable="true" v-model="form.idooe" label="label"
                    :disabled="no_ooe == true"
                        track-by="label" @close="setOOEValue">
                    </multiselect>
                </div>
                <!-- {{ formattedOOEs }} -->
                <div>
                    <input
                        type="checkbox"
                        v-model="no_ooe"
                        @change="setOOEAndChartCheckBox(no_ooe)"
                    />
                    <i>Check this box if the Object of Expenditure you're looking for is missing. </i>
                </div>

                <label>Account Code</label>&nbsp;{{ form.account_code }}
                <div>
                    <!-- selected_pcr_option: {{ selected_pcr_option }} -->
                    <multiselect ref="Accounts" :options="accounts" :searchable="true" v-model="form.account_code"
                        label="label" track-by="label" :disabled="no_ooe == false"
                        @close="selected_ccountcode"
                    >
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <label>PAST YEAR </label>
                <input type="text" class="form-control" v-model="computed_pastyear" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.past_year">{{ form.errors.past_year }}</div>

                <label>FIRST SEMESTER (Actual) </label>
                <input type="text" class="form-control" :value="computed_sem1" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.first_sem">{{ form.errors.first_sem }}</div>

                <label>SECOND SEMESTER (Estimate) </label>
                <input type="text" class="form-control" :value="computed_sem2" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.second_sem">{{ form.errors.second_sem }}</div>

                <label>TOTAL </label>
                <input type="text" class="form-control" :value="getTotal12" readonly />

                <label>BUDGET YEAR PROPOSED </label>
                <input type="number" class="form-control" v-model="form.budget_year" />
                <div class="fs-6 c-red-500" v-if="form.errors.budget_year">{{ form.errors.budget_year }} OR the budget year
                    value is greater than the value recorded at the LBP Form No. 2</div>

                <label>CATEGORY</label>
                <!-- <input type="text" class="form-control" v-model="form.category" /> -->
                <select class="form-control" v-model="form.category" >
                    <option></option>
                    <option value="Personnel Services">Personnel Services</option>
                    <option value="Maintenance, Operating, and Other Expenses">Maintenance, Operating, and Other Expenses</option>
                    <option value="Capital Outlay">Capital Outlay</option>
                    <option value="Financial Expenses">Financial Expenses</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>

                <label>GAD CATEGORY</label>
                <select class="form-control" v-model="form.GAD">
                    <option>NON-GAD</option>
                    <option>GAD</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3 text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
                <!--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&-->
            </form>
        </ModalRightAppropriationCrud>
        <Printing v-if="print" @closeFilter="print = false">
            Select Form
            <select v-model="lbp_version" class="form-control">
                <option value="0"></option>
                <option value="2">LBP Form 2</option>
                <option value="4">LBP Form 4</option>
            </select>
            <br>
            <div v-if="lbp_version > 2">
                Target Fiscal Year
                <br>
                <input v-model="dates" class="form-control" type="number" name="year" min="1900" max="2099" step="1"
                    oninput="javascript: if (this.value.length > 4) this.value = this.value.slice(0, 4);" />
                <br>
                <br>
            </div>

            <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(FFUNCCOD.FFUNCCOD, FFUNCCOD.FFUNCTION, dates)">Print</button>
            <!-- <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(data.data[0].FFUNCCOD, data.data[0].FFUNCTION, dates)">Print</button> -->
        </Printing>
        <LBP2Modal v-if="displaylbp2" @close-modal-event="hideLBP2Modal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </LBP2Modal>

        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>AIP Code</th>
                                <th>Program Title</th>
                                <th>Version</th>
                                <th>Implementing Offices</th>
                                <th>Planned Amount</th>
                                <th>View IPP</th>
                                <th v-if="my_source=='budget'">Budget Details</th>
                                <!-- <th>Edit</th> -->
                                <!-- <th>Actions</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td></td>
                                <td>{{ dat.project_title }}
                                    <span style="color:red; font-weight: bold">
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                    </span>
                                </td>
                                <td>{{ dat.version }}</td>
                                <td>{{ dat.FFUNCTION }}</td>
                                <th class="text-end">
                                    {{ format_number_conv(dat.budget_sum,2,true) }}
                                </th>
                                <td>
                                    <Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}?source=${my_source}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                    </Link>
                                    <!-- {{ dat }} -->
                                </td>
                                <td v-if="my_source=='budget'">
                                     <button
                                        class="btn btn-primary btn-sm text-white"
                                        @click="openAppropriationRightModal('budget', dat.id, dat.project_title,dat.budget_sum, dat.idpaps)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </button>
                                    <!-- <Button
                                        class="btn btn-primary btn-sm text-white"
                                        @click="openRightAlignModal('budget', dat.id, dat.project_title,dat.budget_sum)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </Button> -->
                                </td>
                                <!-- <td><Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td> -->

                                <!-- <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-start"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">Implementation Schedule/ Workplan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementing Team</Link></li>
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                        </ul>
                                    </div>
                                </td> -->
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
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <!-- {{ my_source }} -->
    </div>
    <!-- {{ ooe_description }}
    {{ ooe_id }} -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import ModalRightAlign from "../../Shared/ModalRightAlign.vue";
import ModalRightAlignCRUD from "../../Shared/ModalRightAlign.vue";
import ModalRightAppropriation from "../../Shared/ModalRightAlign.vue";
import ModalRightAppropriationCrud from "../../Shared/ModalRightAlign.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import Printing from "@/Shared/FilterPrint";
import LBP2Modal from "@/Shared/PrintModal";

import { Button } from "bootstrap";
export default {
    props: {
        auth: Object,
        data: Object,
        FFUNCCOD: String,
        offices: Object,
        ooes: Object,
        ooe_description: Array,
        ooe_id: Array,
        ooe_codes: Array,
        acc: Object,
        //idstrat: String,
        my_source: String,
        dept_id: String,
        // idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,
        functions: Object,
        programs: Object,
        totals: Object,
        pgHead: String
    },
    data() {
        return{
            filter_FFUNCCOD: "",
            filter: false,
            search: this.$props.filters.search,
            showModalRightAlign: false,
            showModalRightAlignCRUD: false,
            showModalAppropriation: false,
            showModalAppropriationCrud: false,
            rev_id: null,
            project_title: "",
            total_budget: 0,
            budget_sum: 0,
            edit_amount: 0,
            budget_data: [],
            editData: undefined,

            idpaps: null,
            form: useForm({
                // id: null,
                // idooe: "",
                // particulars: "",
                // account_code: "",
                // amount: "",
                // category: "",
                // source: "",
                // revision_plan_id: "",
                // category_gad: "",
                idooe: "",
                year: "",
                FFUNCCOD: "",
                raaotype: "",
                idprogram: "",
                revision_plan_id: "",
                object_of_expenditure: "",
                account_code: "",
                past_year: 0,
                first_sem: 0,
                second_sem: 0,
                budget_year: "",
                idpaps: "",
                category: "",
                GAD: "",
                CCET: "",
                AIP_CODE: "",
                id: null
            }),
            dates: "",
            dt_ooes: [],
            crud_type: "create",
            print: false,
            lbp_version: "",
            displaylbp2: false,

            no_ooe: false,
        }
    },
    computed: {
        ooe_options(){
            return this.ooes.map((ooe) => ({
                value: ooe.recid,
                label: ooe.FOOEDESC,
                code: ooe.FACTCODE,
            }));
        },
        formattedOOEs() {
            let dataOoes = this.dt_ooes;
            return this.dt_ooes.map((dataOoes) => ({
                value: dataOoes.recid,
                label: dataOoes.FOOEDESC,
                FACTCODE: dataOoes.FACTCODE,
                program_id: dataOoes.idprogram,
                FFUNCCOD: dataOoes.FFUNCCOD,
                sem1: dataOoes.sem1,
                sem2: dataOoes.sem2,
                past_year: dataOoes.past_year
            }));
        },
        formattedPrograms() {
            let dataPrograms = this.programs;
            if (this.form.raaotype) {
                dataPrograms = dataPrograms.filter((program) => program.ftype === this.form.raaotype);
            }
            if (this.form.FFUNCCOD) {
                dataPrograms = dataPrograms.filter((program) => program.FFUNCCOD === this.form.FFUNCCOD);
            }

            return dataPrograms.map((program) => ({
                value: program.recid,
                label: program.FPROGRAM,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },
        getTotal12() {
            var f1 = parseFloat(this.form.first_sem);
            var f2 = parseFloat(this.form.second_sem);
            var tot = f1 + f2;
            var tat = this.format_number_conv(tot, 2, true);
            return tat;
        },
        computed_pastyear() {
            // var p_year = this.format_number_conv(this.form.past_year,2,true);
            // if(isNaN(p_year)){
            //     return "0.00"
            // }else{
            //     return this.format_number_conv(this.form.past_year,2,true);
            // }
            return this.format_number_conv(this.form.past_year, 2, true);
        },
        computed_sem1() {
            //var s1 = parseFloat(this.form.sem1);
            return this.format_number_conv(this.form.first_sem, 2, true);
            //return this.format_number_conv(s1,2,true);
            //return isNaN(s1) ? '0.00' : s1;

        },
        computed_sem2() {
            return this.format_number_conv(this.form.second_sem, 2, true);
        },
        accounts() {
            let accs = this.acc;
            return accs.map((dat) => ({
                // value: dat.individual_final_output_id,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                value: dat.FACTCODE,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                label: dat.FTITLE ,
                // pcr_type: dat.pcr_type, // include for easier access later
                original: dat           // optional: include full object if needed
            }));
        },

    },
    mounted() {
        this.setCurrentYear()
    },
    components: {
        Pagination, Filtering, ModalRightAlign, ModalRightAlignCRUD, ModalRightAppropriation, ModalRightAppropriationCrud, Printing, LBP2Modal
    },
    watch: {
        // search: _.debounce(function (value) {
        //     this.filterPrograms(value, this.filter_FFUNCCOD)
        // }, 300),
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/revision_plans",
                { search: value,
                    source: this.my_source
                 },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods:{
        showCreate(){
            this.$inertia.get(
                "/targets/create",
                {
                    raao_id: this.raao_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // deleteStrat(id) {
        //     //alert(this.idpaps);
        //     let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
        //       if (confirm(text) == true) {
        //         this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
        //     }
        // },
        getAccomplishment(tar_id){
            this.$inertia.get(
                "/accomplishments",
                {
                    idtarget: tar_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        getPercent(accomp, targqty){
            var accSum=0;
            accomp.forEach(myFunction);
            function myFunction(item){
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum/targqty)*100
            percentt=this.format_number(percentt,2,true)
            return percentt;
        },
        amountStatus(budget, imp_amount){
            var status_now="";
            var showAmount ="";
            var bdg = parseFloat(budget);
            var imp = parseFloat(imp_amount);
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>imp){
                //alert('budget is greater than impamount');
                status_now=showAmount+"Warning: total amount of budgetary requirement is greater than the total implementation plans amount."
            }
            if(bdg<imp){
                status_now=showAmount+"Warning: total amount of implementation plans is greater than the total  amount of budgetary requirement."
            }
            return status_now;
        },
        showFilter() {
            this.filter = !this.filter;
        },
        filterPrograms(search, office_code){
            this.$inertia.get(
                "/revision_plans",
                {
                    search: search,
                    FFUNCCOD: office_code,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // BUDGET PREP
        async openRightAlignModal(source, id, title,sum_budget) {
            // this.$modal.show(ModalRightAlign, {
            //     title: "Budget Details",
            //     source: source,
            //     id: id,
            //     title: title,
            //     my_source: this.my_source,
            //     dept_id: this.dept_id,
            //     idpaps: this.idpaps,
            //     monitors: this.monitors
            // });
            var url= `/revision_plans/budget/${id}`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.showModalRightAlign = true;
            this.rev_id = id;
            this.form.revision_plan_id = id;
            this.project_title = title;
            this.total_budget = sum_budget;
            this.budget_sum = this.calculateTotalAmount();
        },

        add_budget_prep() {
            this.form.revision_plan_id = this.rev_id;
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
            this.showModalRightAlign=false;
            this.showModalRightAlignCRUD = true;
        },


        setCode() {
            //alert(this.form.particulars);
            var ind = this.ooes.findIndex(ooe => ooe.recid === this.form.idooe);
            console.log("Index of selected OOE("+this.form.idooe+"): " + ind);
            this.form.account_code = this.ooes[ind].FACTCODE.toString();
            this.form.particulars = this.ooes[ind].FOOEDESC.toString();
            console.log("particulars"+this.form.particulars)
            // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
            //alert(this.budget_code+" code: "+ this.codes[ind]);
        },
        submit() {
            var total_project_budget = this.budget_sum+this.form.budget_year;
            if(this.editData!==undefined){
                total_project_budget = total_project_budget - this.editData.budget_year;
            }
            if (total_project_budget > this.total_budget) {
                alert("Total budget for this project is " + this.total_budget + ". You cannot exceed this amount." +total_project_budget);
                return;
            }
            // console.log("budget_sum: "+this.budget_sum);
            // console.log("total_project_budget: "+this.budget_sum);
            // console.log("this.editData.budget_year: "+this.editData.budget_year);
            if (this.editData !== undefined) {
                // alert('patch');
                var url =`/appropriation-budget/${this.form.id}`;
                this.form.patch(url,{
                    onSuccess: () => {
                        this.showModalAppropriationCrud = false;
                        this.showModalAppropriation = true;
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                        this.editData = undefined; // Reset editData after successful submission
                        // this.form.id = null; // Reset form id after successful submission
                        // this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
                        // this.form.idooe = "";
                        // this.form.particulars = "";
                        // this.form.account_code = "";
                        // this.form.amount = "";
                        // this.form.category = "";
                        // this.form.source = "";
                        // this.form.category_gad = "";
                        // this.form.processing = false; // Reset processing state
                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    },
                    // finally: () => {
                    //     this.isLoading = false; // Reset loading state
                    //     this.closeCRUDApprop();
                    // }
                });
            } else {
                this.form.id = null;
                var url='/appropriation-budget';
                //alert('store') /revision_plans/store;
                this.form.post(url,{
                    onSuccess: () => {
                        this.showModalAppropriationCrud = false;
                        this.showModalAppropriation = true;
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    }
                });

                // this.showModalAppropriationCrud = false;
                // this.showModalAppropriation = true;
                // this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }

        },
        async editBudgetPrep(id) {
                // this.$modal.show(ModalRightAlign, {
                //     title: "Budget Details",
                //     source: source,
                //     id: id,
                //     title: title,
                //     my_source: this.my_source,
                //     dept_id: this.dept_id,
                //     idpaps: this.idpaps,
                //     monitors: this.monitors
                // });/budget/edit/{id}
                var url= `/revision_plans/budget/edit/${id}`;
                await axios.get(url).then((response) => {
                    console.log("response data in edit budget prep");
                    console.log(response.data);
                    this.editData = response.data;
                    console.log(this.editData.id);
                }).catch((error) => {
                    console.log("Error in fetching budget data", error);
                }).finally(() => {
                    this.form.id = this.editData.id;
                    this.form.idooe = this.editData.idooe;
                    this.form.particulars = this.editData.particulars;
                    this.form.account_code = this.editData.account_code;
                    this.form.amount = this.editData.amount;
                    this.form.category = this.editData.category;
                    this.form.source = this.editData.source;
                    this.form.category_gad = this.editData.category_gad;
                    this.form.revision_plan_id = this.rev_id;
                    this.showModalRightAlignCRUD = true;
                });

        },
        deleteBudgetPrep(id){
            let text = "WARNING!\nAre you sure you want to delete the budget prep?"+id;
            if (confirm(text) == true) {
                this.$inertia.delete("/revision_plans/" + id, {
                    onSuccess: () => {
                        this.budget_data = [];
                        this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
                    },
                });
                this.budget_data=[];
                this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }
        },
        calculateTotalAmount() {
            return this.budget_data.reduce((sum, item) => {
                // alert("Calculating total amount for item:", item);
                // alert("Budget year:", item.budget_year);
                return sum + parseFloat(item.budget_year);
            }, 0);
        },
        closeCRUD(){
            this.showModalRightAlignCRUD = false;
            this.showModalRightAlign = true;
            this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            this.editData = undefined; // Reset editData after closing the modal
            this.form.id = null; // Reset form id after closing the modal
            this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
        },

        //PROPOSED BUDGET
        async openAppropriationRightModal(source, id, title,sum_budget,paps_id){
            this.rev_id = id;
            this.form.revision_plan_id = id;
            this.project_title = title;
            this.total_budget = sum_budget;
            this.form.idpaps = paps_id;
            this.idpaps = paps_id;


            var url= `/appropriation-budget/get/${id}/budget/appropriations`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
                this.budget_sum = this.calculateTotalAmount();
                // alert(this.budget_sum);
            });
            this.showModalAppropriation = true;

        },
        async add_budget_proposal(){
            this.showModalAppropriationCrud = true;
            var url= `/appropriation-budget/get/${this.idpaps}/ooes`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
        },
        calculateTotalAmountProposed() {
            return this.budget_data.reduce((sum, item) => {
                return sum + parseFloat(item.budget_year);
            }, 0);
        },
        setCurrentYear() {
            var yr = new Date().getFullYear()
            this.form.year = parseFloat(yr) + 1;
            this.dates = parseFloat(yr) + 1;
        },
        filterProgram() {
            // this.form.idprogram=null;
            // this.form.idooe=null;
            const selectElement = this.$refs.raaoSelect;
            this.form.category = selectElement.options[selectElement.selectedIndex].text;

        },
        loadOOE() {
            this.dt_ooes = [];
            var year1 = parseFloat(this.form.year) - 1;
            axios.get("/ooes/filtered/ooes", {
                params: {
                    idprogram: this.form.idprogram,
                    FFUNCCOD: this.form.FFUNCCOD,
                    raaotype: this.form.raaotype,
                    year: year1
                }
            }).then((response) => {
                this.dt_ooes = response.data;
            }).catch((error) => {
                console.error(error);
            });
        },
        setOOEValue() {
            var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
            this.form.account_code = prog_sel[0].FACTCODE;
            console.log(prog_sel[0]);
            // this.searchByAccountCode();
            this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
            this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
            this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
            this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        },
        setOOEAndChartCheckBox(no_ooe_data){
            if(no_ooe_data==true){
                // this.form.account
                this.form.idooe=false
            }
        },
        async editBudgetApprop(id){
            this.dt_ooes = [];
            var url= `/appropriation-budget/${id}/edit`;
                await axios.get(url).then((response) => {
                    console.log("response data in edit budget prep");
                    console.log(response.data);
                    this.editData = response.data.editData;
                    this.dt_ooes = response.data.ooes;
                    this.edit_amount = this.editData.budget_year;
                    console.log(this.dt_ooes);
                }).catch((error) => {
                    console.log("Error in fetching budget data", error);
                }).finally(() => {
                    this.form.idooe = this.editData.idooe;
                    this.form.year = this.editData.year;
                    this.form.FFUNCCOD = this.editData.FFUNCCOD;
                    this.form.raaotype = this.editData.raaotype;
                    this.form.idprogram = this.editData.idprogram;
                    this.form.revision_plan_id = this.editData.revision_plan_id;
                    this.form.object_of_expenditure = this.editData.object_of_expenditure;
                    this.form.account_code = this.editData.account_code;
                    this.form.past_year = this.editData.past_year;
                    this.form.first_sem = this.editData.first_sem;
                    this.form.second_sem = this.editData.second_sem;
                    this.form.budget_year = this.editData.budget_year;
                    this.form.idpaps = this.editData.idpaps;
                    this.form.category = this.editData.category;
                    this.form.GAD = this.editData.GAD;
                    this.form.CCET = this.editData.CCET;
                    this.form.AIP_CODE = this.editData.AIP_CODE;
                    this.form.id = this.editData.id;
                    this.showModalAppropriationCrud = true;
                });
        },
        closeCRUDApprop(){
            this.showModalAppropriationCrud = false;
            this.showModalAppropriation = true;
            this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
            this.editData = undefined; // Reset editData after closing the modal
            this.form.id = null; // Reset form id after closing the modal
            this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
            this.form.idooe = "";
            // this.form.year = "";
            this.form.FFUNCCOD = "";
            this.form.raaotype = "";
            this.form.idprogram = "";
            this.form.object_of_expenditure = "";
            this.form.account_code = "";
            this.form.past_year = 0;
            this.form.first_sem = 0;
            this.form.second_sem = 0;
            this.form.budget_year = "";
            // this.form.idpaps = "";
            this.form.category = "";
            this.form.GAD = "";
            this.form.CCET = "";
            this.form.AIP_CODE = "";
            this.form.id = null; // Reset form id after closing the modal
            this.form.processing = false; // Reset processing state
        },
        deleteBudgetApprop(id){
            let text = "WARNING!\nAre you sure you want to delete the budget?"+id;
            if (confirm(text) == true) {
                this.$inertia.delete("/appropriation-budget/" + id, {
                    onSuccess: () => {
                        this.budget_data = [];
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                    },
                });
                // this.budget_data=[];
                // this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
            }
        },
        selected_ccountcode(){
            var ind='';
            setTimeout(() => {

                // alert(this.form.account_code);
                if(this.form.account_code !==null && this.form.account_code !==undefined && this.form.account_code !==''){
                    ind = this.acc.findIndex(data => String(data.FACTCODE) === String(this.form.account_code));
                    this.form.object_of_expenditure = this.acc[ind].FTITLE
                    // alert(ind);
                }
            }, 300);

        },
        //PRINTING
        showPrint() {
            //alert("show filter");
            this.print = !this.print
        },
        showModal(ffunccod, ffunction, dates) {
            // alert(ffunction,ffunccod);
            // alert(this.lbp_version);
            if (this.lbp_version > 2) {
                this.my_link = this.getToRep(ffunccod, ffunction, dates);
            } else {
                this.displaylbp2 = true;
                this.my_link = this.goToRepPrintLBP2();
            }

        },
        goToRepPrintLBP2() {
            //http://122.53.120.27:8080/jasperserver/flow.html?_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2&standAlone=true&decorate=no&output=pdf';
            var params = '&department_code=' + this.auth.user.department_code +
                '&office=' + this.auth.user.office.office +
                '&department_head=' + this.pgHead +
                '&budget_officer=EVA JEAN S. LICAYAN' +
                '&local_chief=ENGR.RAUL G. MABANGLO' +
                '&total_past_year=' + this.totals.past_year +
                '&total_first_sem=' + this.totals.first_sem +
                '&total_second_sem=' + this.totals.second_sem +
                '&total_total=' + this.totals.total +
                '&total_budget_year=' + this.totals.budget_year;
            // alert(params)
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        hideLBP2Modal() {
            this.displaylbp2 = false;
        },
    }
};
</script>
<style>
            .row-centered {
                text-align:center;
            }
            .col-centered {
                display:inline-block;
                float:none;
                text-align:left;
                margin-right:-4px;
            }
            .pos{
                position: top;
                top: 240px;
            }
</style>
