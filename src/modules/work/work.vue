<script>
        import Vue from 'vue'
        import VueResource from 'vue-resource'

        Vue.use(VueResource)

        export default {
            ready () {
                Vue.http.get('http://localhost:5000/a').then(
                    (data) => {
                        console.log(data);
                    }, 
                    console.log()
                 );
            }
        }

</script>
<template>
        <section id="works" class="wrapper style2">
              <div class="container">
                    <ul>
                        <li><img src="../../../images/thumbs/01.jpg" alt=""></li>
                        <li><img src="../../../images/thumbs/01.jpg" alt=""></li>
                        <li><img src="../../../images/thumbs/01.jpg" alt=""></li>
                        <li><img src="../../../images/thumbs/01.jpg" alt=""></li>
                        <li><img src="../../../images/thumbs/01.jpg" alt=""></li>
                    </ul>
              </div>
        </section>
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
    </style>
