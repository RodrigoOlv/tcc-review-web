<template>
    <main class="main-container pt-5">
        <div class="container">
            <div class="row">
                <div class="col-md mb-5">
                    <form @submit.prevent="fetchGeneratedText">
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control border border-secondary rounded-pill text-primary fw-bold px-4"
                                id="docs-id"
                                placeholder="Url do docs"
                                v-model="form.url"
                                :disabled="loading"
                            >
                            <label for="docs-id" class="text-primary fw-bold ps-4">Url do docs</label>
                        </div>
                        <div class="d-flex align-items-center mt-lg-5 mt-4 mb-3">
                            <label class="switch">
                                <input type="checkbox" v-model="form.options.validateSummary" :disabled="loading">
                                <span class="slider"></span>
                            </label>
                            <span class="ms-4 text-light">Validar resumo</span>
                            <a href="#" class="tip-wrapper" @click="handleClick">
                                <div class="btn btn-dark btn-tip rounded-circle">?</div>
                                <span class="tip">Valida se a seção de resumo está alinhada com os tópicos discutidos no restante do artigo</span>
                            </a>
                        </div>
                        <div class="d-flex align-items-center mt-lg-5 mt-4 mb-3">
                            <label class="switch">
                                <input type="checkbox" v-model="form.options.findKeywords" :disabled="loading">
                                <span class="slider"></span>
                            </label>
                            <span class="ms-4 text-light">Identificar palavras chave</span>
                            <a href="#" class="tip-wrapper" @click="handleClick">
                                <div class="btn btn-dark btn-tip rounded-circle">?</div>
                                <span class="tip">Determina quais os termos com maior ocorrência ao longo do texto</span>
                            </a>
                        </div>
                        <div class="d-flex align-items-center mt-lg-5 mt-4 mb-3">
                            <label class="switch">
                                <input type="checkbox" v-model="form.options.checkReferences" :disabled="loading">
                                <span class="slider"></span>
                            </label>
                            <span class="ms-4 text-light">Validar citações</span>
                            <a href="#" class="tip-wrapper" @click="handleClick">
                                <div class="btn btn-dark btn-tip rounded-circle">?</div>
                                <span class="tip">Valida se as citações presentes no texto possuem as respectivas referências</span>
                            </a>
                        </div>
                        <div class="mt-lg-5 mt-4">
                            <button
                                type="submit"
                                class="btn btn-secondary-gradient w-100 rounded-pill fw-bold text-light px-4 py-3"
                                :disabled="loading"
                            >
                                {{ loading ? 'Aguarde...' : 'Verificar' }}
                                <img src="../assets/spinner.svg" id="spinner" alt="" v-show="loading">
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-md mb-5">
                    <div class="analysis-result form-control border border-secondary text-primary fw-bold px-4">
                        <p>Análise:</p>
                        <p v-for="(paragraph, index) in resultDefault" :key="index">
                            {{ paragraph }}
                        </p>
                        <p v-if="resultSummary">{{ resultSummary }}</p>
                        <p v-if="resultKeywords">{{ resultKeywords }}</p>
                    </div>
                </div>
            </div>
        </div>        
    </main>
</template>

<script>
    export default {
        name: 'FormComponent',

        data() {
            return {
                form: {
                    url: '',
                    options: {
                        validateSummary: false,
                        findKeywords: false,
                        checkReferences: false
                    }
                },
                resultDefault: [],
                resultSummary: '',
                resultKeywords: '',
                loading: false,
            }
        },

        methods: {
            fetchGeneratedText() {
                this.loading = true; // Indica que a requisição está em andamento

                this.resultDefault = [];
                this.resultSummary = '';
                this.resultKeywords = '';

                const payload = {
                    url: this.form.url,
                    options: {
                        validateSummary: this.form.options.validateSummary,
                        findKeywords: this.form.options.findKeywords,
                        checkReferences: this.form.options.checkReferences
                    }
                };

                this.$http
                    .post('http://localhost:3000/document', payload)
                    .then((response) => {
                        this.resultDefault = response.data.analysis;
                        this.resultSummary = response.data.summary;
                        this.resultKeywords = response.data.keywords;
                    })
                    .catch((error) => {
                        // Exibe a mensagem de erro padrão para outros erros
                        this.resultDefault = 'Erro ao buscar texto gerado. Verifique sua conexão e tente novamente.';
                        
                        console.log('Erro ao buscar texto gerado:', error);
                    })
                    .finally(() => {
                        this.loading = false; // Reseta o estado da variável "loading"
                    });
            },

            handleClick(event) {
                event.preventDefault();
            },
        },

    }
</script>