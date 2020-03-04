<template>
    <div>
        <div id="briefIntro">
            <p id="work_intro">
                <span class="designerName">YaraLEE</span> recently graduated from Tongji University, the College of
                Design and
                Innovation with a bachelor's degree in Industrial Design. She aspires to be a UI/UX designer.
            </p>
            <p id="about_intro">
                <span class="designerName">YaraLEE</span><br/>
                Tongji University /Industrial Design + UI/UX design
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BriefIntro",
        props:[
            'show_msg'
        ],
        methods:{

        },
        mounted(){
            document.getElementById('work_intro').classList.remove('not_show');
            document.getElementById('about_intro').classList.add('not_show');
        },
        watch:{
            show_msg:{
                handler(newVal, oldVal){
                    if(newVal == 0){
                        document.getElementById('work_intro').classList.remove('not_show');
                        document.getElementById('about_intro').classList.add('not_show');
                    }
                    else if (newVal == 1){
                        document.getElementById('work_intro').classList.add('not_show');
                        document.getElementById('about_intro').classList.remove('not_show');
                    }
                }
            }
        }
    }
</script>

<style scoped>
    span.designerName {
        font-weight: bold;
    }

    div#briefIntro {
        width: 456px;
        /*height: 84px;*/
        text-align: left;
        margin-left: 53px;
        float: left;
    }
    div#briefIntro p {
        font-family: Rubik-Regular, sans-serif;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0.44px;
        line-height: 28px;
    }
    p.not_show{
        display: none;
    }
</style>