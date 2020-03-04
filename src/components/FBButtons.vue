<template>
    <div id="FB">
        <div id="previous" @click.prevent="clickPre">
            <img src="../../static/logos/icon_previews@2x.png">
            <p>PREVIOUS</p>
        </div>
        <div id="next" @click.prevent="clickNext">
            <p>NEXT</p>
            <img src="../../static/logos/icon_next@2x.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FBButtons",
        methods:{
            clickPre:function (e) {
                // console.log(this.cur_work_num);
                if(this.cur_work_num==1){
                    // this.$parent.$emit('func','Work')
                    return;
                }
                else if(this.cur_work_num==2){
                    this.$parent.$emit('func','Work5');
                }
                else if(this.cur_work_num==3){
                    this.$parent.$emit('func','Work6');
                }
                else if(this.cur_work_num==4){
                    this.$parent.$emit('func','Work7');
                }
                else if(this.cur_work_num==5){
                    this.$parent.$emit('func','Work1');
                }
                else if(this.cur_work_num==6){
                    this.$parent.$emit('func','Work2');
                }
                else if(this.cur_work_num==7){
                    this.$parent.$emit('func','Work3');
                }
                else if(this.cur_work_num==8){
                    this.$parent.$emit('func','Work4');
                }
                return;
            },
            clickNext:function (e) {
                // console.log(this.cur_work_num);
                if(this.cur_work_num==8){
                    // this.$parent.$emit('func','Work')
                    return;
                }
                else if(this.cur_work_num==7){
                    this.$parent.$emit('func','Work4');
                }
                // else if(this.cur_work_num==6){
                //     this.$parent.$emit('func','Work3');
                // }
                else if(this.cur_work_num==5){
                    this.$parent.$emit('func','Work2');
                }
                else if(this.cur_work_num==4){
                    this.$parent.$emit('func','Work8');
                }
                else if(this.cur_work_num==3){
                    this.$parent.$emit('func','Work7');
                }
                else if(this.cur_work_num==2){
                    this.$parent.$emit('func','Work6');
                }
                else if(this.cur_work_num==1){
                    this.$parent.$emit('func','Work5');
                }
            }
        },
        props:[
            'cur_work_num'
        ]
    }
</script>

<style scoped>
    div#FB{
        width:900px;
        height:20px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom: 60px;
        margin-top:30px;
    }
    div#FB p{
        display:inline-block;
    }

    div#previous, div#next{
        display:inline-block;
        width:120px;
        margin:0;
        padding:0;
    }
    div#previous:hover, div#next:hover{
        cursor: url('../../static/logos/greyCircle.png') 12 12, pointer;
        font-weight: bold;
    }

    div#previous{
        float:left;
        text-align: left;
    }
    div#next{
        float:right;
        text-align: right;
    }
    img{
        width:30px;
        height:30px;
        vertical-align: middle;
    }




</style>