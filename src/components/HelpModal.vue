<template>
    <div class="modal fade" id="help-modal" tabindex="-1" aria-labelledby="help-modal-title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-sm">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="help-modal-title">Ajuda</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        O TCC Review não exige autenticação. No entanto, é essencial que seu texto no Google Docs
                        esteja público. Por favor, certifique-se de que na opção de compartilhamento esteja selecionada
                        a opção de <strong>qualquer pessoa com link</strong>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelpModal'
    }
</script>