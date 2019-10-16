- product   cart 
  商品数据
  数量

  cart ?
- 模块化后，看一眼设计稿，
  核心的状态， 状态的修改
  添加核心的mutations， actions
  state -> actions -> api -> mutations -> state
  数据的流转进行逻辑设计
- 添加到购物车
  cart.state.items
  mapActions('cart', {
    addProductToCart
  })