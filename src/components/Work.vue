<template>
  <div id="works">
    <div id="left-part">
      <ul>
        <li v-for="work in leftWorks" @mouseenter="ActiveWork" @mouseleave="DisactiveWork" @click="ClickWork">
          <!--<router-link :to="{name:work.name, params:{id:work.name}}">-->
            <img :src="work.url" :alt="work.name" :class="work.name" />
          <!--</router-link>-->
        </li>
      </ul>
    </div>
    <div id="right-part">
      <ul>
        <li v-for="work in rightWorks" @mouseenter="ActiveWork"
            @mouseleave="DisactiveWork" @click="ClickWork">
          <img :src="work.url" :alt="work.name" :class="work.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Work1 from './WorksComponents/Work1'
import Work2 from './WorksComponents/Work2'
import Work3 from './WorksComponents/Work3'
import Work4 from './WorksComponents/Work4'
import Work5 from './WorksComponents/Work5'
import Work6 from './WorksComponents/Work6'
import Work7 from './WorksComponents/Work7'
import Work8 from './WorksComponents/Work8'

  export default {
    name: "Work",
    data() {
      return {
        works: [],
        leftWorks: [
          {name: 'Work1', url: '../../static/works/1.png', activeUrl: '../../static/works/1-active.png', type:'web design'},
          {name: 'Work2', url: '../../static/works/2.png', activeUrl: '../../static/works/2-active.png', type:'product design'},
          {name: 'Work3', url: '../../static/works/3.png', activeUrl: '../../static/works/3-active.png', type:'product design'},
          {name: 'Work4', url: '../../static/works/4.png', activeUrl: '../../static/works/4-active.png', type:'product design'},
        ],
        rightWorks: [
          {name: 'Work5', url: '../../static/works/5.png', activeUrl: '../../static/works/5-active.png', type:'product design'},
          {name: 'Work6', url: '../../static/works/6.png', activeUrl: '../../static/works/6-active.png', type:'product design'},
          {name: 'Work7', url: '../../static/works/7.png', activeUrl: '../../static/works/7-active.png', type:'product design'},
          {name: 'Work8', url: '../../static/works/8.png', activeUrl: '../../static/works/8-active.png', type:'product design'}
        ],
        timer: null,
        isMouseHover: false
      }
    },
    created:function(){
      this.works = this.leftWorks.concat(this.rightWorks);
    },
    methods: {
      ActiveWork: function (e) {   // mouse enter
        e.stopPropagation();
        var workname = e.target.childNodes[0].getAttribute('class');
        // var works = this.leftWorks.concat(this.rightWorks);
        for (let i = 0; i < this.works.length; i++) {
          if (this.works[i].name === workname) {
            e.target.childNodes[0].setAttribute('src', this.works[i].activeUrl);
            // console.log(e.target.parentNode);
            let infoDiv = e.target.childNodes[1];
            infoDiv.style.display = "block";
            break;
          }
        }
        return false;
      },
      DisactiveWork: function (e) {
        e.stopPropagation();
        var workname = e.target.childNodes[0].getAttribute('class');
        for (let i = 0; i < this.works.length; i++) {
          if (this.works[i].name === workname) {
            e.target.childNodes[0].setAttribute('src', this.works[i].url);
            let infoDiv = e.target.childNodes[1];
            infoDiv.style.display = "none";
            break;
          }
        }
        return false;
      },
      ClickWork: function(e){

      },
      CreateWorkInfoDiv: function (workElement, typeInfo, nameInfo) {
        let imgParent = workElement.parentNode;
        let infoDivForWork = document.createElement('div');
        infoDivForWork.classList.add('workInfo');
        infoDivForWork.style.display = "none";
        infoDivForWork.setAttribute('pointer-events', 'inherit');
        imgParent.appendChild(infoDivForWork);
        infoDivForWork.style.position = 'absolute';
        infoDivForWork.style.bottom = '0px';
        infoDivForWork.style.left = '0px';
        infoDivForWork.style.fontSize = '14px';
        infoDivForWork.style.color = '#333333';
        infoDivForWork.style.fontWeight = 'bold';
        infoDivForWork.style.backgroundColor = 'rgba(0,0,0,0.1)';
        infoDivForWork.style.height = '115px';
        infoDivForWork.style.width = '432px';
        infoDivForWork.style.margin = '0px';

        let typeInfoDiv = document.createElement('div');
        typeInfoDiv.style.backgroundColor = '#ffe300';
        if(typeInfo == 'web design'){
          typeInfoDiv.style.width = '93px';
        }
        else
        {
          typeInfoDiv.style.width = '120px';
        }
        typeInfoDiv.style.height = '24px';
        typeInfoDiv.style.borderRadius = '12px';
        typeInfoDiv.style.position = 'absolute';
        typeInfoDiv.style.top = '20px';
        typeInfoDiv.style.left = '23px';
        let typeInfoText = document.createTextNode(typeInfo);
        typeInfoDiv.appendChild(typeInfoText);
        infoDivForWork.appendChild(typeInfoDiv);

        let nameInfoP = document.createElement('p');
        nameInfoP.appendChild(document.createTextNode(nameInfo));
        nameInfoP.style.textAlign = 'left';
        nameInfoP.style.paddingLeft = '23px';
        let nameInfoDiv = document.createElement('div');
        nameInfoDiv.style.color = '#ffffff';
        nameInfoDiv.style.fontSize = '24px';
        nameInfoDiv.style.position = 'absolute';
        nameInfoDiv.style.top = '25px';
        nameInfoDiv.style.left = '0px';
        nameInfoDiv.appendChild(nameInfoP);
        infoDivForWork.appendChild(nameInfoDiv);

      }

    },
    mounted:function(){
      // var imgLis = document.querySelectorAll('li');
      // for(let i=0;i<imgLis.length;i++){
      //   document.getComputedStyle(imgLis[i], ':hover')
      // }
      // document.getComputedStyle()
      var leftWorks = document.querySelectorAll('div#left-part img');
      for(let i=0;i<leftWorks.length;i++){
        if(i%2==0){
          leftWorks[i].setAttribute('height', '408px');
          // leftWorks[i].parentNode.setAttribute('height', '408px');
        }
        else{
          leftWorks[i].setAttribute('height', '240px');
        }
        // 创建图片上的信息
        let typeInfo = this.leftWorks[i].type;
        let nameInfo = this.leftWorks[i].name;
        this.CreateWorkInfoDiv(leftWorks[i], typeInfo, nameInfo);
      }
      var rightWorks = document.querySelectorAll('div#right-part img');
      for(let i=0;i<rightWorks.length;i++){
        if(i%2 == 0){
          rightWorks[i].setAttribute('height', '240px');
        }
        else{
          rightWorks[i].setAttribute('height', '408px');
        }
        // 创建图片上的信息
        let typeInfo = this.rightWorks[i].type;
        let nameInfo = this.rightWorks[i].name;
        this.CreateWorkInfoDiv(rightWorks[i], typeInfo, nameInfo);
      }

    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    /*overflow: scroll;*/

  }

  li img:hover {
    cursor: pointer;
  }

  li img {
    width: 432px;
  }

  /*li:hover div*/
  /*{*/
    /*display:block;*/
  /*}*/

  /*li div*/
  /*{*/
    /*display:none;*/
  /*}*/

  /*#works {*/
    /*width: 900px;*/
    /*!*text-align:center;*!*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  /*}*/

  #works div ul {
    padding: 0px;
    margin: 0px;
    /*margin-left:auto;*/
    /*margin-right:auto;*/
    /*margin-top:0px;*/
    /*margin-buttom:0px;*/
  }

  #works div ul li {
    display: inline-block;
    /*float:left;*/
    margin: 8px;
    width:432px;
    position:relative;
  }

  div#left-part, div#right-part
  {
    width:440px;
    margin:0px;
    padding:0px;
    display: inline-block;
  }

  /*div.workInfo*/
  /*{*/
    /*display: inline-block;*/
    /*background-color: rgba(0,0,0,0.1);*/
    /*width:100%;*/
    /*height:120px;*/
    /*position:relative;*/
    /*bottom:-120px;*/
  /*}*/


  /*div.typeInfoDiv*/
  /*{*/
    /*background-color: #ffe300;*/
    /*border-radius: 12px;*/
    /*width:93px;*/
    /*height:24px;*/
  /*}*/


</style>
