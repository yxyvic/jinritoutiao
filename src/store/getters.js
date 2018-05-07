// getters 从store 中的 state 中派生出一些状态
// 可以认为是 store 的计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。这样当页面切换回来，数据没有改变就不需要重新获取一遍state中的数据
// 等同于组件Vue实例中的computed属性
export default {
  list: state => state.list,   //此处将state.list 赋值给计算属性list，供其他组件使用，通过mapGetters辅助函数调用
}
