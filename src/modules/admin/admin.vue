<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import VcModal from './modal.vue'
    import VcFileUpload from './file-upload/main.vue'

    Vue.use(VueResource)

    export default {
        components: { VcModal, VcFileUpload },
        ready () {
            this.fileModal.width = (window.innerWidth - 100)
            this.fileModal.height = (window.innerHeight - 100)
            Vue.http.get('http://localhost:5000/emails').then((response) => {
                console.log(response)
            }, (error) =>{
                console.log(error)
            });
        },
        methods: {
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
        },
        data () {
            return {
                fileModal: {
                    width: 0,
                    height: 0,
                }
            }
        },
    }
</script>

<template>
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <section class="12u 12u(narrower)">
                    <vc-modal
                          title="File Upload"
                          :width="fileModal.width" :height="fileModal.height"
                          name="file-upload-modal">
                          <vc-file-upload></vc-file-upload>
                    </vc-modal>
                    <a href="#" @click.prevent="openModal"><i class="fa fa-cloud-upload fa-5x" aria-hidden="true"></i></a>
                </section>
            </div>
         </div>
    </section>
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <section class="12u 12u(narrower)">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th><b>E-mail</b></th>
                                <th><b>Mensagem</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>E-mail</td>
                                <td>Mensagem</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>Mensagem</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>Mensagem</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>Mensagem</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    </section>

</template>

<style scoped>
    a:link {
        text-decoration:none;
        text-align: center;
    }
    a:visited {
        text-decoration:none;
    }
    a:hover {
        text-decoration:underline;
    }
</style>