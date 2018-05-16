//引入常量替代 Mutation 事件类型命名为type
import * as type from './mutation-types.js'
//Vuex 的 store 中的state状态的唯一方法是提交 mutation，会固定接受 state 作为第一个参数
export default {
    //  使用 es6 风格的计算属性命名功能来使用一个常量作为函数名，定义mutation 加上中括号
  [type.GET_NEWSLIST](state,news) {   //type.GET_NEWSLIST即为常量文件中的GET_NEWSLIST  函数接受state为第一个参数，可以对state中数据进行修改  news为mutations的载荷，commit时可传入 对应actions中commit此函数时第二个对象参数
    if (state.list[news.kind]) {     //如果list对应新闻已存在，清空新闻列表，不会重复刷新加载同样新闻
      state.list[news.kind] = [];
    }
    for (var item in news.data) {     //news对应{    data: res.data,  kind: news.kind }   news.data即为jsonp获取接口的数据res.data数组
      state.list[news.kind].push(news.data[item]);       //将对应类型新闻的每一项存入state中的list对应类型数组中
    }
  },
  [type.GET_DETAILNEWS](state,news) {
    state.detailNews = news.data;
  }
}
