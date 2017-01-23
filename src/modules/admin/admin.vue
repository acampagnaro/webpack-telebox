<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import VcModal from './modal.vue'
    import VcFileUpload from './file-upload/main.vue'
    import AcPagination from '../pagination.vue'

    Vue.use(VueResource)

    export default {
        components: { VcModal, VcFileUpload, AcPagination },
        ready () {
            this.fileModal.width = (window.innerWidth - 100)
            this.fileModal.height = (window.innerHeight - 100)
            Vue.http.get('http://localhost:5000/emails').then((response) => {
                this.items = response.data;
                this.pagination = response.pagination;

                console.log(response.headers['X-Total-Count']);
            }, (error) =>{
                console.log(error)
            });
        },
        methods: {
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
            onChangePage(page){
                this.page = page
                this.loadBreweries()
          },
          loadBreweries(){
            let t = this
            this.showLoading()
            let start = (this.page * this.itensPerPage) - (this.itensPerPage)
            let end = this.page * this.itensPerPage
            let qString = "";
            if (this.search){
              qString = `&q=${this.search}`
            }
            this.$http.get(`/breweries?_start=${start}&_end=${end}${qString}`).then(
             response=>{
               t.breweries = response.json()
               t.total = response.headers['X-Total-Count']
             },
             error=>{
               console.log(error)
             }).finally(function () {
              t.hideLoading();
            })                    
           },           
        },
        data () {
            return {
                page: 1,
                total: 0,
                itensPerPage: 10,
                fileModal: {
                    width: 0,
                    height: 0,
                },
                items: '',
                pagination: ''
            }
        },
    }
</script>

<template>
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <section class="12u 12u(narrower)">
                    <h2>Subir imagens</h2>
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
    <hr/>
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <section class="12u 12u(narrower)">
                    <h2>Emails Enviados</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-sm-1"><b>E-mail</b></th>
                                <th class="col-sm-6"><b>Mensagem</b></th>
                            </tr>
                        </thead>
                        <tbody v-for="item in items">
                            <tr>
                                <td>{{item.email}}</td>
                                <td>{{item.message}}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
        <ac-pagination :source="pagination"></ac-pagination>
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
    table {
        width: 97%;
    }
</style>