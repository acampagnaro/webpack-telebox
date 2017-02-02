<script>
    import Vue from 'vue'


    export default{
        data() {
            return {
                images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
                currentNumber: 0,
                timer: null
            }
        },

        ready() {
            this.startRotation();
        },

        methods: {
            startRotation() {
                //this.timer = setInterval(this.next, 3000)
            },
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
            stopRotation() {
                clearTimeout(this.timer);
                this.timer = null;
            },

            next()  {
                this.currentNumber += 1
            },
            prev: function() {
                this.currentNumber -= 1
            }
        }
    }
</script>
<template>
    <image-slider>
        <p>
            <a @click="prev">Previous</a> || <a @click="next">Next</a>
        </p>

        <div
                v-for="number in [currentNumber]"
                transition="fade"
        >
            <img
                    :src="images[Math.abs(currentNumber) % images.length]"
                    :mouseover="stopRotation"
                    :mouseout="startRotation"
            />
        </div>
    </image-slider>
</template>

<style>
    .fade-transition {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
        visibility: hidden;
    }
</style>