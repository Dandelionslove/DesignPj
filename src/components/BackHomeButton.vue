<template>
    <div id="back_home">
        <!--<img :src="home" id="back_home_img" />-->
        <p @click.prevent="backHome" id="back_home_link" :class="home_color">HOME</p>
    </div>
</template>

<script>
    export default {
        name: "BackHomeButton",
        data(){
            return{

            }
        },
        methods:{
            backHome:function (e) {
                this.$parent.$emit('func','Homepage');
            }
        },
        props:[
            'home_color'
        ],
        watch:{
            // work: {
            //     handler(newVal, oldVal) {
            //         console.log('home');
            //         let p=document.getElementById('back_home_link');
            //         if(newVal ===1)//work1
            //         {
            //             p.style.color = 'rgba(65,58,146,1)';
            //         }
            //         else if(newVal === 2){
            //             p.style.color = 'rgba(164,32,52,1)';
            //         }
            //         else if(newVal === 5){
            //             p.style.color = 'rgba(36,211,255,1)';
            //         }
            //         else if(newVal === 6){
            //             p.style.color = 'rgba(4,5,243,1)';
            //         }
            //     }
            // }
        }
    }
</script>

<style scoped>

    div#back_home:hover{
        cursor: url('../../static/logos/greyCircle.png') 16 16, pointer;
        font-weight:bold;
        /*color:red;*/
    }
    div#back_home{
        /*background-color: palevioletred;*/
        font-family: 'Rubik';
        font-size:16px;
    }
    p.work1_color{
        color:rgba(65,58,146,1);
    }
    p.work2_color{
        color:rgba(164,32,52,1);
    }
    p.work3_color{

    }
    p.work4_color{

    }
    p.work5_color{
        color:rgba(36,211,255,1);
    }
    p.work6_color{
        color:rgba(4,5,243,1);
    }
    p.work7_color{

    }
    p.work8_color{

    }


p#back_home_link{
    display: inline-block;
}
</style>