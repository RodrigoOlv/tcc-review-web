<template>
    <nav class="navbar navbar-expand-lg bg-primary py-lg-4 py-2 shadow-lg sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/tcc-review.svg" alt="TCC Review">
            </a>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="w-100 d-flex justify-content-end">
                    <button
                        type="button"
                        class="btn btn-secondary-gradient rounded-pill fw-bold text-light px-4 py-3"
                        data-bs-toggle="modal"
                        data-bs-target="#help-modal"
                    >
                        Ajuda
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>