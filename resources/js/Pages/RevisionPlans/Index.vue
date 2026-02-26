<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3 v-if="source==='sip'">SIP Profile</h3>
                <h3 v-else>PPA Profile </h3>
            </div>
            <div class="peers">
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
        </div>
        <!-- FILTERING SECTION************************************** -->
        <div class="masonry-item w-100 ">
            <div class="row gap-10">
                <!-- <div class="layers bd bgc-white p-20"> -->
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-10">
                        <div class="layer w-100 mB-10">
                            Filter Plans by Year

                            <select v-model="year_filtering_d" class="form-control form-control-sm" @change="filterProjects()">
                                <option value="">All Years</option>
                                <option v-for="year in pcr_years" :value="year">{{ year }}</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-10">
                        <div class="layer w-100 mB-10">

                            <Link class="btn btn-primary btn-sm" :href="`/revision/create/${idpaps}`" v-if="source==undefined">Add Project Profile</Link>

                            <!-- :href="`/revision/streamlined/create/${idpaps}?source=sip`"  -->
                            <Button class="btn btn-primary btn-sm text-white" @click="showSIPModal" v-if="source=='sip'">Add SIP Profile</Button>

                            <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/0?source=direct`" v-else>Add Project Profile</Link>&nbsp; -->
                            <Link class="btn btn-primary btn-sm" :href="`/revision/create/0?source=direct`" v-else>Add Project Profile</Link>&nbsp;
                            <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>&nbsp;
                            <button @click="exportUsers" class="btn btn-primary btn-sm mL-2 text-white">Export AIP to Excel</button>&nbsp;
                            <button class="btn btn-primary btn-sm mL-2 text-white" @click="showAIPModalMethod()">AIP</button>&nbsp;
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-4">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">

                            <Link class="btn btn-primary btn-sm" :href="`/revision/streamlined/create/${idpaps}`" v-else-if="source==undefined">Add Project Profile</Link>&nbsp;


                        </div>
                    </div>
                </div> -->
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            Filter by type:
                            <select v-model="type_filter" class="form-control form-control-sm" @change="filterProjects">
                                <option></option>
                                <option value="p">Project Profile</option>
                                <option value="d">Project Design</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <input
                                type="checkbox"
                                v-model="checked"
                                @change="updateValue"
                            />&nbsp; No Climate Change Expenditure (Please Click the box if your LGU does not have any climate change expenditure)
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-10">
                        <div class="layer w-100 mB-10">
                            <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                            &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>

                <!-- </div> -->


            </div>
        </div>
        <!-- <div class="peers fxw-nw jc-sb ai-c"> -->
            <!-- <div class="peers"> -->
                <!-- <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">

                </div> -->
                <!-- <div class="peer"> -->
                    <!-- <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search..."> -->
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/${idpaps}`" v-if="source==undefined">Add Project Profile</Link> -->

                    <!-- :href="`/revision/streamlined/create/${idpaps}?source=sip`"  -->
                    <!-- <Button class="btn btn-primary btn-sm text-white" @click="showSIPModal" v-if="source=='sip'">Add SIP Profile</Button> -->

                    <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/0?source=direct`" v-else>Add Project Profile</Link>&nbsp; -->
                     <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/create/0?source=direct`" v-else>Add Project Profile</Link>&nbsp; -->
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/revision/streamlined/create/${idpaps}`" v-else-if="source==undefined">Add Project Profile</Link>&nbsp; -->

                    <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>&nbsp;
                    <button @click="exportUsers" class="btn btn-primary btn-sm mL-2 text-white">Export AIP to Excel</button>&nbsp;
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showAIPModalMethod()">AIP</button>&nbsp;

                    &nbsp;&nbsp;&nbsp;
                    <input
                        type="checkbox"
                        v-model="checked"
                        @change="updateValue"
                    />&nbsp; No Climate Change Expenditure (Please Click the box if your LGU does not have any climate change expenditure)
                    <p> -->

                    <!-- </p> -->
                <!-- </div> -->
                <!-- <div class="peer">
                    Filter by type:
                    <select v-model="type_filter" @change="filterProjects">
                        <option></option>
                        <option value="p">Project Profile</option>
                        <option value="d">Project Design</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <b>Filter Plans by Year</b>
                        <select v-model="year_filtering_d" @change="filterProjects()">
                            <option value="">All Years</option>
                            <option v-for="year in my_years" :value="year">{{ year }}</option>
                        </select>
                </div> -->


            <!-- </div> -->

        <!-- </div> -->
        <!-- END OF FILTERING SECTION******************************* -->
        <!-- FILTERING SECTION V2 -->
        <!-- <body class="bg-gray-50">
            <div id="app" class="container mx-auto px-4 py-8">
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div class="space-y-4">
                        Row 1: Search and Action Buttons
                        <div class="flex flex-wrap items-center gap-3">
                            Search Input
                            <div class="flex-1 min-w-[250px]">
                                <div class="relative">
                                    <input
                                        v-model="search"
                                        type="text"
                                        class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Search projects...">
                                    <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            Action Buttons
                            <div class="flex flex-wrap gap-2">
                                Conditional Add Profile Buttons
                                <button
                                    v-if="source === undefined"
                                    @click="navigateTo(`/revision/create/${idpaps}`)"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                        Add Project Profile
                                    </span>
                                </button>

                                <button
                                    v-if="source === 'sip'"
                                    @click="showSIPModal"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                        Add SIP Profile
                                    </span>
                                </button>

                                <button
                                    v-if="source !== undefined && source !== 'sip'"
                                    @click="navigateTo('/revision/create/0?source=direct')"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                        Add Project Profile
                                    </span>
                                </button>

                                <button
                                    @click="showFilter"
                                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                        </svg>
                                        Filter
                                    </span>
                                </button>

                                <button
                                    @click="exportUsers"
                                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                        Export to Excel
                                    </span>
                                </button>

                                <button
                                    @click="showAIPModalMethod"
                                    class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                        AIP
                                    </span>
                                </button>
                            </div>
                            Row 2: Filter Dropdowns
                            <div class="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-200">
                                Type Filter
                                <div class="flex items-center gap-2">
                                    <label class="text-sm font-medium text-gray-700 whitespace-nowrap">Filter by Type:</label>
                                    <select
                                        v-model="type_filter"
                                        @change="filterProjects"
                                        class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">All Types</option>
                                        <option value="p">Project Profile</option>
                                        <option value="d">Project Design</option>
                                    </select>
                                </div>

                                Year Filter
                                <div class="flex items-center gap-2">
                                    <label class="text-sm font-medium text-gray-700 whitespace-nowrap">Filter by Year:</label>
                                    <select
                                        v-model="year_filtering_d"
                                        @change="filterProjects"
                                        class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">All Years</option>
                                        <option v-for="year in my_years" :key="year" :value="year">{{ year }}</option>
                                    </select>
                                </div>
                            </div>
                            Row 3: Climate Change Checkbox
                            <div class="pt-2 border-t border-gray-200">
                                <label class="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        v-model="checked"
                                        @change="updateValue"
                                        class="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                    <span class="text-sm text-gray-700 group-hover:text-gray-900">
                                        <span class="font-medium">No Climate Change Expenditure</span>
                                        <span class="block text-gray-500 mt-1">Please check this box if your LGU does not have any climate change expenditure</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body> -->

        <!-- FILTERING SECTION END -->
        <div class="peers fxw-nw jc-sb ai-c" v-if="paps.paps_desc">
            <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Project Title</th>
                                <th>Office</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Full Edit</th>
                                <th></th>
                                <th>Forward Next Year</th>
                                <th>Version</th>
                                <th>Year</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data">
                                <!-- TITLE -->
                                <td>{{ dat.project_title }}
                                    <span style="color:red; font-weight: bold">
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}

                                        <!-- {{ dat.budget_sum }} --{{dat.imp_amount}} -- {{dat.id}} -->
                                    </span>
                                </td>
                                <!-- OFFICE -->
                                <td>{{ dat.FFUNCTION }}</td>
                                <!-- STATUS -->
                                <td>
                                    <span
                                        :style="{
                                        display: 'inline-block',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        backgroundColor:
                                            dat.status == '-2' ? 'red' :
                                            dat.status == '-1' ? 'gray' :
                                            dat.status == '0'  ? 'orange' :
                                            dat.status == '1'  ? 'blue' :
                                            dat.status == '2'  ? 'green' :
                                            dat.status == '7' ? 'red' :
                                            'black'
                                        }"
                                    >
                                        {{
                                        dat.status == '-2' ? 'Returned' :
                                        dat.status == '-1' ? 'Saved' :
                                        dat.status == '0'  ? 'Submitted' :
                                        dat.status == '1'  ? 'Reviewed' :
                                        dat.status == '2'  ? 'Approved' :
                                        dat.status == '7'  ? 'Request for Return' :
                                        'Unknown'
                                        }}
                                    </span>
                                    <p v-if="parseFloat(dat.status)>-1 && parseFloat(dat.status) !== 1"><i>{{ dat.gad_status==1 ? 'GAD Approved' : 'GAD Not Yet Evaluated' }}</i></p>

                                </td>
                                <!-- VIEW -->
                                <td>
                                    <Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    </Link>


                                    <!-- {{ dat }} -->
                                </td>
                                <!-- EDIT -->
                                <td>
                                    <Link v-if="paps"
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>

                                    <!-- {{ dat }} -->
                                    <Link v-else
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}?source=direct`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>

                                </td>
                                <!-- FULL EDIT -->
                                <td >
                                    <!-- /revision/streamlined/create/{{dat.idpaps}}?source={{source}}&idrevplan={{dat.id}} -->
                                    <Link v-if="dat.idpaps"
                                        class="btn btn-success btn-sm"
                                        :href="`/revision/streamlined/create/${dat.idpaps}?source=${source}&idrevplan=${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                    <Link v-else
                                        class="btn btn-success btn-sm"
                                        :href="`/revision/streamlined/create/0?source=${source}&idrevplan=${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td>
                                <!-- SUBMIT/RECALL/GENERATE ACTIONS -->
                                <td>
                                    <!-- Submit button when status = -1 -->
                                    <button
                                        v-if="dat.status == '-1' || dat.status == '-2'"
                                        @click="submitItem(dat, 0)"
                                        :disabled="!can_submit(dat.budget_sum, dat.imp_amount)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: can_submit(dat.budget_sum, dat.imp_amount) ? 'blue' : '#9bbce0', // light greyish blue
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Submit
                                    </button>

                                    <!-- Recall button when status = 0 -->
                                    <button
                                        v-if="dat.status == '0'"
                                        @click="submitItem(dat, -1)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Recall
                                    </button>
                                    <!-- Generate Project Design button when status = 'approved' (example) -->
                                    <button
                                        v-if="dat.status == 1 && parseInt(dat.number_of_clones)<1 && dat.type==='p'"
                                        @click="generateProjectDesign(dat.id, 'd')"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'green',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                        Generate Project Design
                                    </button>

                                    <!-- Generate Project Design button when status = 'approved' (example) -->
                                    <button
                                        v-if="dat.status == 1 && parseInt(dat.number_of_clones)<1 && source==='sip'"
                                        @click="generateProjectDesign(dat.id, 'sip')"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'green',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                        Generate SIP Profile
                                    </button>

                                    <!-- Request for Return/Justification  -->
                                    <!-- dat.return_request_status: {{ dat.return_request_status }} -->
                                    <button
                                        v-if="['1','2'].includes(dat.status) && dat.return_request_status=='-1'"
                                        @click="returnWithAmmendments(dat, 5)"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                        Request for return
                                    </button>



                                    <!-- {{ dat.number_of_clones }} -->
                                </td>
                                <!-- FORWARD TO NEXT YEAR -->
                                 <td>
                                    <!-- Forward for Next Year when status = 'approved' (example) -->
                                    <button
                                        v-if="parseInt(dat.number_of_clones)<1 && dat.type==='p'"
                                        @click="generateProjectDesign(dat.id, 'ny')"
                                        :disabled="!((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && dat.status == 0)"
                                        :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor:
                                                ((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && dat.status == 0)
                                                    ? 'green'
                                                    : '#9ca3af',
                                            color: 'white',
                                            cursor:
                                                ((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && dat.status == 0)
                                                    ? 'pointer'
                                                    : 'not-allowed',
                                            fontWeight: 'bold'
                                        }"
                                    >
                                    <!-- {{ !((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && dat.status == 0) }}
                                    {{ parseInt(dat.year) + 1   }}
                                    {{ new Date().getFullYear()  }} -->
                                    <!-- {{ dat.status }} -->
                                        Forward {{ parseInt(dat.year)+1}}
                                    </button>
                                 </td>
                                <!-- VERSIONS -->
                                <td>{{ dat.version }} </td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<b>{{dat.year}}</b>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <!-- TYPE -->
                                <td>{{ formatProjectType(dat.type) }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <!-- action-dropdown  -->
                                        <ul class="dropdown-menu dropdown-menu-start"  aria-labelledby="dropdownMenuButton1">
                                            <!-- <li><Link class="dropdown-item" :href="`/revision/edit/${dat.id}`">Edit</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">Implementation Schedule/ Workplan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <!-- <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementing Team</Link></li>
                                            <!-- <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Partnership and Sustainability</Link></li> -->
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                            <li><Button class="dropdown-item" @click="setLinkModal(dat.id)">Print Comprehensive Workplan</Button></li>
                                            <li>
                                                <Button class="dropdown-item" @click="openPrintProfile(dat.id)">
                                                    Print Project
                                                    <span v-if="dat.type==='p'">Profile</span>
                                                    <span v-else>Design</span>
                                                </Button>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/cdf/${dat.id}`" v-if="dat.type==='d'">
                                                    Cash Disbursements Forecast
                                                </Link>
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
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
            <!-- {{ rev_plan_selected }} -->
        </div>
        <AIPModal v-if="showAIPModal" @close-modal-event="hideAIPModal">
            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <iframe :src="aip_printLink" style="width:100%; height:500px" />

            </div>
            <!-- <Link :href="aip_printLink_excel" class="btn btn-primary text-white">
                    Export to Excel
                </Link> {{ aip_printLink_excel }}
                <br>
                {{ aip_printLink }}<br>
            <button @click="exportUsers" class="btn btn-primary text-white">
                    Export to Excel
            </button> -->
        </AIPModal>
        <WorkPlanModal v-if="WorkPlanModalVisible" @close-modal-event="toggleWorkPlanModal" title="Comprehensive Workplan/Schedule">
            <div class="d-flex justify-content-center">
                <!-- {{ cmp_link }} -->
                <iframe :src="cmp_link" style="width:100%; height:500px" />

            </div>
        </WorkPlanModal>
        <SIPModal v-if="SIPModalVisible" @close-modal-event="SIPModalVisible=false" title="SIP Profile">
            Select PAPS: {{ selected_sip_paps }}
            <select v-model="selected_sip_paps" class="form-select">
                <option></option>
                <option v-for="pap in paps" :value="pap.id" >
                    {{ pap.paps_desc }}
                </option>
            </select>
            <Link class="btn btn-primary btn-sm"
                    :href="`/revision/streamlined/create/${selected_sip_paps}?source=sip`"
                    :disabled="!selected_sip_paps"
                    v-if="source=='sip'">
                        Add SIP Profile
            </Link>&nbsp;
        </SIPModal>
        <ProjectPrintModal v-if="printProfileVIsible" @close-modal-event="printProfileVIsible=false" title="Printed Output">
            <h1>Project Profile</h1>

            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <iframe :src="ppa_link" style="width:100%; height:500px" />

            </div>

            <!-- {{ppa_link}} -->
        </ProjectPrintModal>
        <ReturnWithAmmendmentsModal v-if="ReturnWithAmmendmentsModalVisible" @close-modal-event="hideReturnWithAmmendmentsModal" title="REQUEST FOR RETURN">
            <div class="peers mb-12">

                <table class="table">
                    <thead>
                    <tr>
                        <td><h6>PROJECT TITLE: </h6></td>
                        <td><u>{{selected_plan.project_title }}</u></td>
                        <td><h6>OFFICE: </h6></td>
                        <td><u>{{selected_plan.FFUNCTION }}</u></td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <div class="col-md-5">
                                <!-- Warnings -->
                                <!-- <div v-if="show_warnings">
                                    <div v-if="!isWithinLimit()" class="text-danger mt-2">
                                    ❌ Total file size must not exceed 10 MB.
                                    </div>
                                    <div v-if="!isWithinCount()" class="text-danger mt-2">
                                    ❌ You can only upload a maximum of 2 files.
                                    </div>
                                </div> -->

                                <!-- :disabled="!(isWithinLimit() && isWithinCount())" -->
                                <input
                                    type="file"
                                    multiple
                                    @change="handleFiles"
                                    accept="application/pdf"
                                    ref="fileInput"
                                />
                                <!-- :disabled="!(isWithinLimit() && isWithinCount())" -->
                                <div>
                                    <button type="button" @click="uploadFiles" class="btn btn-primary text-white" >Upload</button>
                                    <button type="button" @click="cancelFiles" class="btn btn-danger text-white">Cancel </button>
                                </div>
                                <p>

                                    <div v-if="files.length>0">
                                        <h3>Selected Files (Pending Upload)</h3>
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>File Name</th>
                                                    <th>File Type</th>
                                                    <th>File Size</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(file, index) in files" :key="index">
                                                    <td>
                                                        <img :src="getPreUploadFileIcon(file.name.split('.').pop())" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/>
                                                    </td>
                                                    <td>{{ file.name }}&nbsp;</td>
                                                    <td>{{ file.name.split('.').pop() }}&nbsp;</td>
                                                    <td>{{ formatFileSize(file.size) }}&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </p>
                            </div>

                            </td>
                            <td colspan="2">
                                <div class="col-md-7">
                                <div class="peers">
                                    <h5>Justification Letters Uploaded</h5>&nbsp;
                                    <button
                                        @click="deleteFiles"
                                        class="btn btn-danger btn-sm mL-2 text-white"
                                        :disabled="!file_ids.length"
                                        >
                                        Delete Selected
                                    </button>
                                </div>
                                <!-- <button @click="previewFile(file)" class="btn btn-primary text-white">Preview</button>&nbsp; -->
                                <!-- /files/proxy-download -->
                                <!-- target="_blank" rel="noopener noreferrer" -->
                                <!-- <a :href="`http://122.53.120.18:8067/images/${file.filename}`" class="btn btn-success">Download</a>&nbsp; -->
                                <!-- http://122.53.120.18:8067/images/{{file.filename}} - /file-upload/download/ -->
                                <!-- <p> http://192.168.80.89:8073//file-upload/download/{{file.id}}</p> -->
                                <table name="tabel" class="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input
                                                type="checkbox"
                                                :checked="allSelected"
                                                v-model="allSelected"
                                                @change="toggleSelectAll($event)"
                                                />
                                            </th>
                                            <th></th>
                                            <th>File Name</th>
                                            <th>File Size</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                            <th>Return No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="file in docs" :key="file.id">
                                            <td>
                                                <input
                                                type="checkbox"
                                                :value="file.id"
                                                @change="toggleFileSelection(file.id, $event)"
                                                v-model="file_ids"
                                                />

                                                <!-- {{ file }} -->
                                            </td>
                                            <!-- <p>http://122.53.120.18:8067/images/{{file.filepath}}</p> -->
                                            <td><img :src="getFileIcon(file)" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/></td>
                                            <td>{{ file.filename }} </td>
                                            <td>{{ format_number((file.file_size/1024),2,true) }} KB </td>
                                            <th
                                                :style="{
                                                    backgroundColor: file.return_executed === '0' ? '#d4f8d4' : '#f8d4d4'
                                                }"
                                            >
                                                {{ file.return_executed === "0" ? 'New' : 'Used' }}
                                            </th>
                                            <td>
                                                <button
                                                    @click="previewFile(file)"
                                                    class="p-1 rounded bg-transparent hover:bg-blue-100 border-0"
                                                    title="Preview"
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
                                                </button>&nbsp;
                                                <!-- download -->
                                                <a
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
                                                </a>&nbsp;

                                                <!-- <button
                                                    @click="deleteFile(file.id)"
                                                    class="p-1 rounded-full bg-transparent hover:bg-red-100 border-0"
                                                    data-toggle="tooltip"
                                                    title="Delete"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="red"
                                                        class="bi bi-trash-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                    </svg>
                                                </button> -->

                                            </td>
                                            <td>0{{  file.return_batch }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table table-hover ">
                                    <tbody>
                                        <tr>
                                            <td>Remarks:</td>
                                            <td><textarea class="form-control" v-model="remarks"></textarea></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div>
                                                    Type:
                                                    <select v-model="return_request_type">
                                                        <option></option>
                                                        <option value="a">
                                                            Administrative Order (New strategies/activities/ not included in approved project profile)
                                                        </option>
                                                        <option>
                                                            Appropriation Ordinance
                                                        </option>
                                                        <option>Justification</option>
                                                    </select>
                                                </div>
                                                <button
                                                        @click="returnWithAmmendmentsActual()"
                                                        :style="{
                                                        padding: '4px 10px',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold'
                                                        }"
                                                    >
                                                        REQUEST FOR RETURN
                                                    </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


             </div>
        </ReturnWithAmmendmentsModal>
    </div>
    <!-- src: {{source}} fdfsdf -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import AIPModal from "@/Shared/PrintModal";
import SIPModal from "@/Shared/ModalDynamicTitle";
import ProjectPrintModal from "@/Shared/ModalDynamicTitle";
import { Inertia } from '@inertiajs/inertia';
import WorkPlanModal from "@/Shared/ModalDynamicTitle";
import ReturnWithAmmendmentsModal from "@/Shared/ModalDynamicTitle";

export default {
    props: {
        data: Object,
        //idstrat: String,
        idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,
        source: String,
        year_filtering: String,
        // search: String,
        // type_f: String,
    },
    data() {
        return{
            search: this.$props.filters.search,
            showAIPModal: false,
            aip_printLink: "",
            ccet: 'no',       // This is the main variable bound by v-model
            checked: false,    // Internal boolean to control the checkbox
            aip_printLink_excel: "",
            rev_plan_selected: [],
            WorkPlanModalVisible: "",
            cmp_link: "",
            SIPModalVisible: false,
            paps: [],
            selected_sip_paps: null,
            type_filter: this.$props.filters.type_filter,
            paps_id_here: 0,
            printProfileVIsible: false,

            // /Project id
            rev_plan_id: 0,
            ppa_link: "",

            // RETURN REQUEST**********************
            //For Project Design
            ReturnWithAmmendmentsModalVisible: false,
            //Justification Uploads
            file: null,
            files: [],
            file_ids: [],
            current_filepath: null,
            allSelected: false,
            selected_plan: [],
            selected_status: 0,
            selected_label: '',
            docs: [],
            remarks: '',
            return_request_type: '',
            //Document Display
            displaySideModal: false,
            showImageModal: false,
            // END OF RETURN REQUEST***************
            year_filtering_d: ''
        }
    },
    components: {
        Pagination, Filtering, AIPModal, WorkPlanModal, SIPModal, ProjectPrintModal, ReturnWithAmmendmentsModal
    },
    watch: {
        search: _.debounce(function (value) {

            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: value,
                    type_filter: this.type_filter,
                    source:this.source
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    mounted(){
        if(this.paps.id){
            this.paps_id_here=this.paps.id
        }
        this.updateValue(); // Initialize ccet based on the initial state of checked
    },
    methods:{
        printProfileVisible($rev_print_id){
            this.printProfileVIsible=true
        },
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
        deleteStrat(id) {
            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
            }
        },
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
            var bdg = parseFloat(parseFloat(budget).toFixed(2));
            var imp = parseFloat(parseFloat(imp_amount).toFixed(2));
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
        can_submit(budget, imp_amount){
            // var status_now="";
            // var showAmount ="";
            var bdg = Number((parseFloat(budget) || 0).toFixed(2));
var imp = Number((parseFloat(imp_amount) || 0).toFixed(2));
            return bdg >= 1 && imp >= 1 && bdg === imp;
            // if(bdg>imp){
            //     return false;
            // }
            // if(bdg<imp){
            //     return false;
            // }
            // if(bdg<1){
            //     return false;
            // }
            // if(imp<1){
            //     return false;
            // }
        },
        showAIPModalMethod(){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=pdf';
            var params ='&ccet='+this.ccet
            // console.log(params);
            this.aip_printLink = linkt+jasper_ip+jasper_link+params;
            // this.aip_printLink_excel = this.aip_printLink.replace('&output=pdf', '&output=csv');

            // this.aip_printLink_excel =linkt+jasper_ip+'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=xlsx&ccet='+this.ccet;
            this.showAIPModal=true;
        },
        hideAIPModal(){
            this.showAIPModal=false;
        },
        updateValue() {
            this.ccet = this.checked ? '1' : '0'
        },
        exportUsers() {
            // This opens the Laravel route in a new tab and triggers download
            // window.open(route('export.users'), '_blank');
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var short_link='jasperserver/rest_v2/reports/reports/OPCR_AIP/AIP_Print.xlsx?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no'
            var params ='&ccet='+this.ccet
            var link_final = linkt+jasper_ip+short_link+params;
            // '/revision/export/aip'
            window.open(link_final, '_blank');
        },
        submitItem(revision_plan, newStatus){
            // let projectTypeLabel = '';
            // if (revision_plan.type === 'p') {
            //     projectTypeLabel = type === 0 ? 'Submit Project Profile' : 'Recall Project Profile';
            // } else if (revision_plan.type === 'd') {
            //     projectTypeLabel = type === 0 ? 'Submit Project Design' : 'Recall Project Design';
            // }

            // // Build confirmation message
            // const confirmMessage = `Are you sure you want to ${type === 0 ? 'Submit' : 'Recall'} the project ${revision_plan.type === 'p' ? 'profile' : 'design'} entitled "${revision_plan.project_title}"?`;

            // // Ask user for confirmation
            // if (!confirm(confirmMessage)) {
            //     return; // Stop if user clicks "Cancel"
            // }
            // const id = revision_plan.id;
            // const new_status = type; // 0 or -1

            // axios.post(`/status/revision/update/${id}/${projectTypeLabel}/${new_status}`)
            //     .then(response => {
            //         // Update local status
            //         revision_plan.status = String(new_status);
            //         console.log(`${projectTypeLabel} successful`);
            //     })
            //     .catch(error => {
            //         console.error(`${projectTypeLabel} failed:`, error);
            //     });
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return"
            };

            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            Inertia.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {},
                {
                    preserveScroll: true
                }
            );
        },
        //WORKPLAN
        setLinkModal(id){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FComprehensive_WorkPlan&standAlone=true&output=pdf';
            var params ='&id='+id
            // console.log(params);
            this.cmp_link = linkt+jasper_ip+jasper_link+params;
            this.toggleWorkPlanModal()
        },
        toggleWorkPlanModal(){
            this.WorkPlanModalVisible =!this.WorkPlanModalVisible
        },
        // GENERATE PROJECT DEISGN
        generateProjectDesign(id, type){
            if (!id) return;

            // Browser confirmation
            if (!confirm("Are you sure you want to generate the Project Design for this project?")) {
                return; // User canceled
            }
            if(type=='p'){
                // Make the Inertia POST request
                Inertia.post(`/project/design/generate/${id}`, {
                    'type': type
                }, {
                    onSuccess: () => {
                        // optional: anything you want to run after success
                        console.log("Project Design generated.");
                    },
                    onError: (errors) => {
                        console.error(errors);
                    }
                });
            }else if(type=='ny'){
                // alert(type)
                Inertia.post(`/project/next_year/${id}`, {
                    'type': type
                }, {
                    onSuccess: () => {
                        // optional: anything you want to run after success
                        console.log("Project Design generated.");
                    },
                    onError: (errors) => {
                        console.error(errors);
                    }
                });
            }


        },
        // NEW SIP GENERATION
        showSIPModal(){

            axios.get('/get/PAPS')
                .then(res => {
                    this.paps = res.data;
                    this.SIPModalVisible=true;
                })
                .catch(err => {
                    console.error('Failed to load PAPS:', err);
                });
        },
        // FILTER BY TYPE
        filterProjects(){
            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: this.search,
                    type_filter: this.type_filter,
                    source:this.source,
                    year: this.year_filtering_d
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // OPEN PPA
        openPrintProfile(rev_plan_id_p){
            this.rev_plan_id=rev_plan_id_p
            this.printProfileVIsible=true

            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FIndividual_Output&reportUnit=%2Freports%2Fplanning_system%2FIndividual_Output%2FProject_Profile&standAlone=true&standAlone=true&output=pdf';
            var params ='&id='+rev_plan_id_p
            // console.log(params);
            this.ppa_link = linkt+jasper_ip+jasper_link+params;
        },

        //Return with Ammendments/PROJECT DESIGN
        toggleReturnWithAmmendmentsModal(){
            this.ReturnWithAmmendmentsModalVisible=true
        },
        hideReturnWithAmmendmentsModal(){
            this.ReturnWithAmmendmentsModalVisible=false
        },
        async returnWithAmmendments(revision_plan, newStatus){
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return",
                5: "Request for Return"
            };

            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            this.selected_label=actionlabelcomplete
            this.selected_plan = revision_plan
            this.selected_status = newStatus

            // this.opcr_rating_id=id;
            let url = '/revison_plan_documents/' + revision_plan.id;
            // let url = '/monthly-details/monthly/accomplishments/object/' + empl_id + '/' + sem + '/' + e_year + '/' + idsemestral + '/' + my_month;
            // alert(empl_id);
            await axios.get(url).then((response) => {
                this.docs = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.toggleReturnWithAmmendmentsModal()
        },
        formatFileSize(size) {
            if (size < 1024) return size + ' B';
            else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            else return (size / (1024 * 1024)).toFixed(2) + ' MB';
        },
        isWithinCount() {
            return (this.files.length + this.movs.length) <= 2;
        },
        isWithinLimit() {
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes

            // Sum size of selected files
            const newFilesSize = this.files.reduce((sum, f) => parseFloat(sum) + parseFloat(f.size), 0);

            // Sum size of already uploaded movs
            const existingFilesSize = this.movs.reduce((sum, f) => parseFloat(sum) + parseFloat(f.file_size), 0);

            const totalSize = parseFloat(newFilesSize) + parseFloat(existingFilesSize);
            console.log("newFilesSize: "+newFilesSize);
            console.log("existingFilesSize: "+existingFilesSize);
            console.log("totalSize: "+totalSize);
            console.log("maxSize: "+maxSize);
            return totalSize <= maxSize;
        },
        async uploadFiles() {
            if (this.files && this.files.length < 1) {
                alert("No file chosen.")
                return
            }
            if (!confirm("Are you sure you want to upload selected files?")) {
                return;
            }
            this.show_warnings=true;
            let formData = new FormData();

            // Single file (optional)
            if (this.file) {
                formData.append("file", this.file);
            }

            // Multiple files
            if (this.files && this.files.length > 0) {
                // this.files.forEach((f, i) => {
                //     formData.append("files[]", f); // use files[] so Laravel can treat it as an array
                // });
                this.files.forEach((f) => {
                    formData.append("files[]", f);
                });
            }
            // `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
            // /update/{id}/{type}/{new_status}/upload/justification
            await axios.post(
                `/status/revision/update/${this.selected_plan.id}/${this.selected_label}/${this.selected_status}/upload/justification`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            .then(response => {
                console.log("Upload success:", response.data);
                this.returnWithAmmendments(this.selected_plan, this.selected_status);
                this.files=[]
            })
            .finally(response=> {
                this.cancelFiles();
            })
            .catch(error => {
                console.error("Upload error:", error.response?.data || error);
            });
        },
        cancelFiles() {
            // this.show_warnings=false;
            this.files = [];                  // Clear the files array
            this.$refs.fileInput.value = null;    // Reset the file input visually
        },
        handleFiles(event) {
            const filesArray = Array.from(event.target.files);

            // Filter only PDF files AND size <= 1 MB
            const pdfFiles = filesArray.filter(file => {
                const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
                const isSmallEnough = file.size <= 1024 * 1024; // 1 MB in bytes
                return isPdf && isSmallEnough;
            });

            // Alert user for invalid files
            if (pdfFiles.length !== filesArray.length) {
                alert("Only PDF files under 1 MB are allowed! Invalid files will be ignored.");
            }

            this.files = pdfFiles;

            console.log("Selected PDF files under 1 MB:", this.files);

            // Optional: reset input if no valid files
            if (this.files.length === 0) {
                this.$refs.fileInput.value = null;
            }


            //**********ORIGINAL UNCHANGED */
            // this.form.files = Array.from(event.target.files); // Store selected files
            // const filesArray = Array.from(event.target.files);
            console.log(filesArray); // check if files are here
            this.files = Array.from(event.target.files);
            console.log(this.files); // check if files are here
        },
        //ICON
        getFileIcon(file) {
            if (!file?.file_type) {
                return '/images/icons/file.png'; // default if missing type
            }

            const type = file.file_type.toLowerCase();
            const excelTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm'];
            const wordTypes = ['doc', 'docx', 'dot', 'dotx', 'dotm'];
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
            const pptTypes = ['ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'];
            const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];

            if (excelTypes.includes(type)) {
                return '/images/icons/excel.png';
            }
            else if (type === 'pdf') {
                return '/images/icons/pdf.png';
            }
            else if (wordTypes.includes(type)) {
                return '/images/icons/word.png';
            }
            else if (pptTypes.includes(type)) {
                return '/images/icons/ppt.png';
            }
            else if (multimediaTypes.includes(type)) {
                return '/images/icons/video.png';
            }
            else if (imageTypes.includes(type)) {
                if(this.disk==='public'){
                    return window.location.origin + "/storage/" + file.filepath;
                }else{
                    // return `http://122.53.120.18:8067/images/${file.filepath}`;
                    return `/images/icons/images.png`;
                }

            }
            else {
                return '/images/icons/file.png'; // default icon
            }
        },
        // FOIR PREVIEWS
        previewFile(file) {
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
            const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];
            // alert("previewFile " + this.disk + " "+file.file_type)
            // console.log(this.fileBaseUrl)
            this.current_filepath = file.filepath
            if(this.disk==='public'){
                // alert("PUBLIC")
                this.view_link = window.location.origin + "/storage/" + file.filepath;
                if (imageTypes.includes(file.file_type?.toLowerCase()) || multimediaTypes.includes(file.file_type?.toLowerCase())) {
                    // Directly open images in a new tab
                    // this.openImageModal()
                    // this.displaySideModal = true
                    window.open(this.view_link, '_blank');
                    //
                    return;
                }

                if (this.isPreviewable(file.file_type)) {
                    this.displaySideModal = true
                    this.file_extension = file.file_type
                    // this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
                    // window.open(file.file_url, '_blank')
                } else {
                    alert('This file type cannot be previewed.')
                }

            }else{

                if (imageTypes.includes(file.file_type?.toLowerCase()) || multimediaTypes.includes(file.file_type?.toLowerCase())) {
                    // Directly open images in a new tab
                    window.open(`http://122.53.120.18:8067/images/${file.filepath}`, '_blank');
                    return;
                }

                if (this.isPreviewable(file.file_type)) {
                    // this.displaySideModal = true
                    this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
                    window.open(this.view_link, '_blank');
                    this.file_extension = file.file_type

                    // window.open(file.file_url, '_blank')
                } else {
                    alert('This file type cannot be previewed.')
                }
            }

        },
        // TOGGLE SELECT
        toggleSelectAll(event) {
            if (event.target.checked) {
                // Add all file IDs
                this.file_ids = this.docs.map(file => file.id);
            } else {
                // Remove all file IDs
                this.file_ids = [];
            }
        },
        // DELETE MULTIPLE
        toggleFileSelection(fileId, event) {
            if (event.target.checked) {
                if (!this.file_ids.includes(fileId)) {
                    this.file_ids.push(fileId);
                }
            } else {
                this.file_ids = this.file_ids.filter(id => id !== fileId);
            }
        },
        async deleteFile(id) {
            var ids=[];
            if (confirm('Are you sure you want to delete this file?')) {
                ids.push(id);
                await axios.delete("/revison_plan_documents/delete-multiple/many", {
                        data: { file_ids: ids }
                    }).then(response => {
                        console.log("Files deleted successfully", response.data);
                        // this.showModalMOV(this.opcr_rating_id);
                    })
                    .catch(error => {
                        console.error("Failed to delete files", error.response?.data || error);
                    });
            }


        },

        async deleteFiles() {
            // alert("/movs/delete-multiple/many")
            if (!this.file_ids.length) {
                alert("No files selected for deletion");
                return;
            }

            if (!confirm("Are you sure you want to delete selected files?")) {
                return;
            }

            try {
                await axios.delete("/revison_plan_documents/delete-multiple/many", {
                    data: { file_ids: this.file_ids }
                }).then(response => {
                    console.log("Files deleted successfully", response.data);
                    this.returnWithAmmendments(this.selected_plan, this.selected_status);
                }).finally(response=>{
                    this.file_ids = [];
                    this.allSelected=false;
                })
                .catch(error => {
                    console.error("Failed to delete files", error.response?.data || error);
                });
            } catch (error) {
                console.error(error);
                alert("Failed to delete files");
            }
        },

        returnWithAmmendmentsActual(){
            // const unexecuted = this.docs.filter(doc => doc.return_executed === "0");
            const unexecuted = this.docs.filter(doc => doc.return_executed == 0);

            var confirm_message="";
            // if (unexecuted.length < 1) {
            //     alert("You need to attach a new justification letter!.");
            //     return;
            // }

            // 2. Validate: remarks must not be empty
            if (!this.remarks || this.remarks.trim() === '') {
                alert("Remarks are required before returning the plan.");
                return;
            }
            if(!this.return_request_type || this.return_request_type.trim()==''){
                alert("You have to select a return type!")
                return;
            }
            // 3. Confirm action
            // confirm_message = `Are you sure you want to ${this.selected_label}?`;

            // if (!confirm(confirm_message)) {
            //     return;
            // }
            //confirm_message = `Are you sure you want to ${this.selected_label}?`;

            //if (!confirm(confirm_message)) {
            //   return;
            //}

            // Call the original method again and pass stored parameters
            // alert(this.selected_status);
            this.statusAction(this.selected_plan, this.selected_status);

            this.ReturnWithAmmendmentsModalVisible=false;

        },
        statusAction(revision_plan, newStatus, column) {
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return",
                5: "request for the return of the"
            };
            // alert(revision_plan.type)
            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            Inertia.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {
                    remarks: this.remarks,   // ← SEND IT HERE
                    column: column,
                    return_request_type: this.return_request_type
                },
                {
                    preserveScroll: true
                }
            );
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
