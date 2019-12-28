<template>
  <div id="homepage">
    <div id="top">
      <div id="liLogo">
        <img src="../../static/logos/11-homepage-combined-shape-1@2x.png" alt="" id="liLogo-1"/>
        <img src="../../static/logos/11-homepage-combined-shape-2@2x.png" alt="" id="liLogo-2"/>
      </div>
      <div id="briefIntro">
        <p>
          <span id="designerName">YaraLEE</span> recently graduated from Tongji University, the College of Design and
          Innovation with a bachelor's degree in Industrial Design. She aspires to be a UI/UX designer.
        </p>
      </div>
      <div id="menu">
        <a href="" @click.prevent="toWork" class="_menu">work</a>
        <a href="" @click.prevent="toResume" class="_menu">resume</a>
        <a href="" @click.prevent="toAbout" class="_menu">about</a>
      </div>
    </div>
    <div id="middle">
      <component :is="componentName"></component>
    </div>
  </div>
</template>

<script>
  import Work from './Work.vue'
  import Resume from './Resume'
  import About from './About'

  export default {
    name: "Homepage",
    data() {
      return {
        slideAnimation: '',
        componentName: 'Work'
      }
    },
    watch: {},
    mounted() {
      document.getElementsByClassName('_menu')[0].classList.add('click');
    },
    methods: {
      toWork: function (e) {
        this.componentName = 'Work';
        // var menus = document.getElementsByClassName('_menu');
        // for(let i=0;i<menus.length;i++)
        // {
        //   menus[i].classList.remove('click');
        // }
        this.removeClickStyle();
        e.target.classList.add("click");
      },
      toResume: function (e) {
        this.componentName = 'Resume';
        this.removeClickStyle();
        e.target.classList.add("click");
      },
      toAbout: function (e) {
        this.componentName = 'About';
        this.removeClickStyle();
        e.target.classList.add("click");
      },
      removeClickStyle: function () {
        var menus = document.getElementsByClassName('_menu');
        for (let i = 0; i < menus.length; i++) {
          menus[i].classList.remove('click');
        }
      }
    },
    components: {
      Work,
      Resume,
      About
    }
  }
</script>

<style scoped>
  div#top
  {
    overflow: hidden;
  }
  div#top div {
    display: inline-block;
  }
  img#liLogo-1 {
    width: 30px;
    height: 54px;
  }
  img#liLogo-2 {
    width: 23px;
    height: 10px;
  }

  div#liLogo {
    width: 72px;
    height: 72px;
    margin: 8px;
    float:left;
  }

  span#designerName {
    font-weight: bold;
  }

  div#briefIntro {
    width: 456px;
    /*height: 84px;*/
    text-align: left;
    margin-left:53px;
    float: left;
  }

  div#briefIntro p {
    font-family: Rubik-Regular, sans-serif;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.44px;
    line-height: 28px;
  }

  div#menu {
    margin-left: 100px;
    margin-top: 16px;
    margin-right: 8px;
    float:right;
  }

  div#menu a {
    width: 36px;
    height: 20px;
    font-weight: bold;
    color: #333333;
    text-decoration: none;
    font-family: Rubik-Medium, sans-serif;
    font-size: 14px;
    letter-spacing: 0.44px;
    line-height: 20px;
  }

  div#menu a:hover {
    cursor: pointer;
  }

  div#menu a.click {
    border-bottom: yellow solid 4px;
  }

  div#middle {
    margin-top: 88px;
    /*width:880px;*/
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
    /*text-align:center;*/
  }

  div#homepage {
    position: relative;
    height: 100%;
    width:900px;
    margin-left: auto;
    margin-right: auto;
  }


</style>
