<template>
    <!-- <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11"> -->
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1000">
        <div class="toast align-items-center" role="alert" aria-atomic="true" aria-live="polite" data-bs-autohide="true"
            data-bs-delay="5000">
            <!-- //class="d-flex text-white bg-success" -->
            <div class="d-flex text-white bg-gradient-success" v-if="$page.props.flash.message !== null">
                <div class="toast-body">
                    {{ $page.props.flash.message }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>

            <div class="d-flex text-white bg-gradient-danger" v-if="$page.props.flash.error !== null">
                <div class="toast-body">
                    {{ $page.props.flash.error }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <!-- <div class="d-flex text-white bg-gradient-success-fin" v-if="$page.props.flash.success !== null">
                <div class="toast-body">
                    {{ $page.props.flash.success }}
                </div>
            </div> -->
            <!-- <div class="d-flex text-white bg-gradient-success-fin" v-if="$page.props.flash.success !== null">
                <div class="toast-body">
                    {{ $page.props.flash.success }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

        </div>
    </div>
</template>

<script>
export default {
    watch: {
        '$page.props.flash': {
            handler(value) {

                let myAlert = document.querySelector('.toast')
                // let bsAlert = new window.bootstrap.Toast(myAlert)
                let bsAlert = new bootstrap.Toast(myAlert)
                bsAlert.show()
            },
            deep: true
        },
    },
}
</script>

<style>
.bg-gradient-success {
    background: linear-gradient(to right, #036219, #80f541);
    /* Dark to light shade */
}

.bg-gradient-danger {
    background: linear-gradient(to right, #62030d, #ffb82a);
    /* Dark to light shade */
}

.bg-gradient-success-fin {
    background: linear-gradient(to right, #030f55, #4dacff);
}
</style>
