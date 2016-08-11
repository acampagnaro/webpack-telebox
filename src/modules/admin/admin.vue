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
                    <section class="4u 12u(narrower)">
                        <vc-modal
                              title="File Upload"
                              :width="fileModal.width" :height="fileModal.height"
                              name="file-upload-modal">
                              <vc-file-upload></vc-file-upload>
                        </vc-modal>
                        <a href="#" @click.prevent="openModal">Abrir modal</a>
                    </section>
                </div>
             </div>
        </section>
</template>