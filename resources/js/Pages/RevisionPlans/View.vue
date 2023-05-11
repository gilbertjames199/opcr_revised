<template>
     <Head>
        <title>View PAPS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>
                {{ paps.project_title }}

            </h3>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default{
    components: {Filtering, Pagination},
    props: {
        paps: Object
    },
    computed: {},
    data(){},
    watch:{}
}
</script>
