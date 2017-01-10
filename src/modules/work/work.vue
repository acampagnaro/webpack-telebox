<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import Cu from '../pagination.vue'

    Vue.use(VueResource)

    export default {
        ready () {
            Vue.http.get('http://localhost:5000/images').then(
                (response) => {
                    console.log(response.data.length);
                    this.images = response.data;
                }, (error) =>{
                    console.log(error)
                }
             );
        },
        data(){
            return {
                images: '',
                URL: 'http://localhost:5000/',
                src: '',
            }
        },
        components: {
            Cu
        }
    }

</script>
<template>
    <section id="works" class="wrapper style2">
      <div class="container">
            <ul>
                <li v-for="item in images">
                    <img :src="URL + item" alt="">
                </li>
            </ul>
      </div>
    </section>
    <cu :cur.sync="cur" :all.sync="all" v-on:btn-click="listen"></cu>

</template>

 <style scoped>
 
    #works ul {
        padding:0;
        list-style-type:none;
        text-align:center;
    }

    #works  li {
            display: inline-block;
            list-style-type: none;
            padding-right: 20px;
            vertical-align: middle;
            width: 360px;
    }

    #works li img{
            width: 360px;
            height: 247px;
    }

</style>
