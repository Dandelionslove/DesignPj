<template>
  <div class="model1">
    <p v-if="greeting">hello</p>
    <form>
      <div class="profile">
        name:<input type="text" v-model="data.name" placeholder="" /><br />
        gender:
        <input type="radio" id="man" value="one" v-model="data.sex"/>
        <label for="man">man</label>
        <input type="radio" id="woman" value="two" v-model="data.sex" />
        <label for="woman">woman</label>
        <br />
        interest:
        <input type="checkbox" id="swim" value="swim" v-model="data.interest" />
        <label for="swim">swim</label>
        <input type="checkbox" id="read" value="read" v-model="data.interest" />
        <label for="read">read</label>
        <br />
        identity:
        <select v-model="data.identity">
          <option value="teacher" selected>teacher</option>
          <option value="student">student</option>
        </select>
        <br />
        test:
        <input type="text" v-model="data.msg" debounce="5000"/><br />
        {{data.msg}}<br />
        <ul id="listdemo1">
          <li v-for="item in items" class="item-">
            -:{{item.msg}}
          </li>
        </ul>
        <ul id="listdemo2">
          <li v-for="(key, value) in primitiveValues">{{key}}:{{value}}</li>
        </ul>
        <ul>
          <li v-for="user in users">{{user.name}}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'model1',
  data () {
    return {
      greeting:true,
      data:{
        name:"",
        sex:"",
        interest:[],
        identity:'',
        msg:'here is the lazy msg'
      },
      items: [
        {msg:'a'},
        {msg:'b'}
      ],
      primitiveValues:{
        key1:'v1',
        key2:'v2'
      },
      users:[
        {
          tag:1,
          name:"zhang"
        },
        {
          tag:2,
          name:'Li'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
