import Vue from 'vue'
//导入vuex
import Vuex from 'vuex'
//把vuex安装到vue上
Vue.use(Vuex)
//创建一个公共的状态对象
//每当初始化项目的时候，就先从localStorage中取一下数据
 let car = window.JSON.parse(localStorage.getItem('cart')||'[]')
 const store = new Vuex.Store({
    //这个store中的state，可以想象成组件对象中的data属性
  state:{
    count:0, //在全局，就共享了一个count值
    cart: car //购物车的数组
  },
  mutations:{  //作用：是专门用来修改state中的数据的
    //注意：如果要修改state中的数据，必须要调用mutations提供的方法；
    addToCar(state,goods){
        //将商品添加到购物车
        //如果购物车中，之前曾经有这条商品，则只更新数量即可，如果曾经没有，则直接push
        let flag=false
        state.cart.some(item=>{
            if(item.id==goods.id){
                item.count+=goods.count
                flag=true
                return true
            }
        })
        if(!flag){
            state.cart.push(goods)
        }
        //为了持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localStorage中
        localStorage.setItem('cart',window.JSON.stringify(state.cart))
    },
    add(state){ 
      //mutations中的方法，第一个参数，永远都是state
      state.count++;
    },
    sub(state,val){
      state.count-=val;
    }
  },
  getters:{ //这个getters类似于计算属性
    countInfo(state){
      return '~~~~'+state.count+'~~~~'
    },
    totalCount(state){
        //徽标中的商品数量
        let c= 0;
        state.cart.forEach(item=>c+=item.count)
        return c
    }

  },
  actions:{ //动作
    newAdd(context){
      //在actions，可以定义一些行为，来提交对应的mutations方法
      //在action中不能直接操作state，如果想修改state值，只能在actions中，提交对应的mutations
      setTimeout(()=>{
        context.commit('add')
        
      },1000)
    },
    newSub(context,step){
      context.commit('sub',step)
    }
  }
 })
 export default store