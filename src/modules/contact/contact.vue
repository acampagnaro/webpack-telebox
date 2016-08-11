<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    Vue.use(VueResource)

        export default {
            methods:{
                sendMessage(events){
                    events.preventDefault()                    
                    this.contact.title = "Orçamento"
                    Vue.http.post('http://localhost:5000/sendmail', this.contact).then((response) => {

                          // get status
                          response.status;

                          // get status text
                          response.statusText;

                          // get all headers
                          response.headers;

                          // get 'Expires' header
                          response.headers['Expires'];

                          // set data on vm
                          this.$set('someData', response.json())

                      }, (error) => {
                          window.console.log(error)
                      });
                }
            }
}
</script>

<template>
    <!-- Footer -->
    <div id="footer">
        <div class="container">
            <div class="row">
                <section class="6u 12u(narrower) 12u$(mobilep)">
                    <h3>Nossa Localização, venha fazer um orçamento</h3>
                    <p><b>Endereço:</b> Rua Rezala Simão, 1109</p>
                    <img src="http://maps.google.com/maps/api/staticmap?center=-25.470837,
                                              -49.318482&amp;zoom=15&amp;size=460x230&amp;markers=color:red%7Clabel:%7C-25.470837,
                                              -49.318482&amp;sensor=false"
                         alt="Mapa">

                </section>
                <section class="6u 12u(narrower)">
                    <h3>Contato</h3>
                    <form>
                        <div class="row 50%">
                            <div class="6u 12u(mobilep)">
                                <input type="text" name="name" id="name" placeholder="Nome" v-model="contact.name"/>
                            </div>
                            <div class="6u 12u(mobilep)">
                                <input type="email" name="email" id="email" placeholder="E-mail" v-model="contact.email"/>
                            </div>
                        </div>
                        <div class="row 50%">
                            <div class="12u">
                                <textarea name="message" id="message" placeholder="Mensagem" rows="5" v-model="contact.message"></textarea>
                            </div>
                        </div>
                        <div class="row 50%">
                            <div class="12u">
                                <ul class="actions">
                                    <li><button class="button" v-on:click="sendMessage">Enviar</button></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>

        <!-- Icons -->
        <ul class="icons">
            <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
            <li><a href="#" class="icon fa-google-plus"><span class="label">Google+</span></a></li>
        </ul>

        <!-- Copyright -->
        <div class="copyright">
            <ul class="menu">
                <li>&copy; ACampaganro Ltda. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>

    </div>        
    
</template>