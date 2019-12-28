import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:"/homepage",
      name: 'Homepage',
      component:()=> import('../components/Homepage.vue'),
      children:[
        {
          path:'about',
          name:'About',
          meta:{index:3},
          component:()=>import('../components/About.vue')
        },
        {
          path:'resume',
          name:'Resume',
          meta:{index:2},
          component:()=>import('../components/Resume.vue')
        },
        {
          path:'work',
          name:'Work',
          meta:{index:1},
          component:()=>import('../components/Work.vue'),
          children:[
            {
              path:'Work1',
              name:'Work1',
              component:()=>import('../components/WorksComponents/Work1.vue')
            },
            {
              path:'Work2',
              name:'Work2',
              component:()=>import('../components/WorksComponents/Work2.vue')
            },
            {
              path:'Work3',
              name:'Work3',
              component:()=>import('../components/WorksComponents/Work3.vue')
            },
            {
              path:'Work4',
              name:'Work4',
              component:()=>import('../components/WorksComponents/Work4.vue')
            },
            {
              path:'Work5',
              name:'Work5',
              component:()=>import('../components/WorksComponents/Work5.vue')
            },
            {
              path:'Work6',
              name:'Work6',
              component:()=>import('../components/WorksComponents/Work6.vue')
            },
            {
              path:'Work7',
              name:'Work7',
              component:()=>import('../components/WorksComponents/Work7.vue')
            },
            {
              path:'Work8',
              name:'Work8',
              component:()=>import('../components/WorksComponents/Work8.vue')
            }
          ]
        }
      ]
    }
  ]
})
