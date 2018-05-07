import jsonp from 'jsonp'

import * as type from './mutation-types.js'
//等同于组件中的methods属性
export default {
  //Action 提交的是 mutation，而不是直接变更状态 使用commit提交触发mutations中的函数 第二个news为函数实际执行参数
  //在其他组件中使用需要mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用，或者this.$store.dispatch('xxx') 分发 action
  //在其他组件执行的是actions
  getNews({commit,state}, news) {
    jsonp('http://m.toutiao.com/list/?tag=' + news.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
      function(err, res) {
        commit(type.GET_NEWSLIST, {     //commit中第二个参数对象是传入的载荷，为mutations中函数中的额外参数 第一个参数为固定提交的mutation类型  type.GET_NEWSLIST对应'GET_NEWSLIST'
          data: res.data,
          kind: news.kind
        });
      }
    )
  }
}
