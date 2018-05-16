import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {     //等同于组件中的data属性
  list: {                //首页所有新闻栏目内容
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: []
    },
  detailNews:{
    title:'',
    media_user:{
      avatar_url:'',     //需将组件中用到的数据都列出来初始化一遍，否则在渲染使用数据时会出现undefined
      screen_name:''
    }
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
