import Vue from 'vue'
import Router from 'vue-router'
import FoodReport from '@/components/foodReport/FoodReport'
import GoodsClass from '@/components/goodsClass/GoodsClass'
import UserCenter from '@/components/userCenter/UserCenter'
import FoodWay from '@/components/foodReport/FoodsWay'
import FoodInfo from "@/components/food/FoodInfo"
import Login from "@/components/login/Login"
import Register from "@/components/login/Register"
import Address from "@/components/address/Address"
import Home from "@/components/home/Home"
import ShopCar from "@/components/shopCar/ShopCar"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/user"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/class',
      component: GoodsClass
    },
    {
      path: '/shopcar',
      component: ShopCar
    },
    {
      path: '/menu',
      component: FoodReport
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
