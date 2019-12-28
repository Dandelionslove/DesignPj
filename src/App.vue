<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<Homepage></Homepage>-->
    <!--<component :is="componentName" v-on:getChangeInfo="getChangeInfo"></component>-->
    <component :is="componentName" ></component>
    <hr>
    <div id="bottom">
      <div id="email">
        <p>yaralee.tj@gmail.com</p>
      </div>
      <div id="link-logos">
        <a href="" id="githubLink"><img src="../static/logos/github-logo.png" alt="githubAddress"
                                        id="githubLogo"/></a>
        <a href="" id="instagramLink"><img src="../static/logos/camera-logo.png" alt="cameraAddress"
                                           id="instagramLogo"/></a>
      </div>
    </div>
    <img src="../static/logos/fixed-logo.png" alt="fixed-logo" id="fixed-logo"/>
  </div>
</template>

<script>

  import Homepage from './components/Homepage'

export default {
  name: 'App',
  components:{
    Homepage
  },
  data(){
    return {
      componentName: 'Homepage'
    }
  },
  methods:{
    getChangeInfo:function(to_component){
      this.componentName = to_component;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div#bottom {
  /*position: absolute;*/
  width: 900px;
  height: 140px;
  margin-left:auto;
  margin-right:auto;
  /*bottom: -150px;*/
}

div#bottom div
{
  display:inline-block;
}
a#githubLink, a#instagramLink
{
  width:25px;
}
img#githubLogo, img#instagramLogo {
  width: 25px;
  height: 24px;
  margin-left:24px;
}

div#email {
  font-weight: bold;
  font-family: Rubik-Medium, Sana, sans-serif;
  color: #333333;
  font-size: 16px;
  letter-spacing: 0.15px;
  line-height: 24px;
  float: left;
  width:175px;
  height:60px;
  margin-left:8px;
  margin-top:32px;
}

div#link-logos
{
  float:right;
  width:200px;
  height:60px;
  margin-right:8px;
  text-align: right;
  margin-top:48px;
}

img#fixed-logo {
  position: fixed;
  width: 48px;
  height: 48px;
  bottom: 24px;
  right: 344px;
}
</style>
