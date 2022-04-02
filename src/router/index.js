import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Lv1_Leaf from "../views/Lv1_Leaf.vue"
import Lv2_Cylinder from "../views/Lv2_Cylinder.vue"
import Lv3_CancelButton from "../views/Lv3_CancelButton.vue"
import Lv4_UnknownIcon from "../views/Lv4_UnknownIcon.vue"
import Lv5_Triangle from "../views/Lv5_Triangle.vue"
import Lv6_Infinity from "../views/Lv6_Infinity.vue"
import Lv7_Diamond from "../views/Lv7_Diamond.vue"
import Lv8_Star from "../views/Lv8_Star.vue"
import Ex_MonsterBall from "../views/Ex_MonsterBall.vue"
import Ex_Frog from "../views/Ex_Frog.vue"
import Ex_Guitar from "../views/Ex_Guitar.vue"
import Ex_Gift from "../views/Ex_Gift.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Lv1_Leaf",
    name: "Lv1_Leaf",
    component: Lv1_Leaf,
  },
  {
    path: "/Lv2_Cylinder",
    name: "Lv2_Cylinder",
    component: Lv2_Cylinder,
  },
  {
    path: "/Lv3_CancelButton",
    name: "Lv3_CancelButton",
    component: Lv3_CancelButton,
  },
  {
    path: "/Lv4_UnknownIcon",
    name: "Lv4_UnknownIcon",
    component: Lv4_UnknownIcon,
  },
  {
    path: "/Lv5_Triangle",
    name: "Lv5_Triangle",
    component: Lv5_Triangle,
  },
  {
    path: "/Lv6_Infinity",
    name: "Lv6_Infinity",
    component: Lv6_Infinity,
  },
  {
    path: "/Lv7_Diamond",
    name: "Lv7_Diamond",
    component: Lv7_Diamond,
  },
  {
    path: "/Lv8_Star",
    name: "Lv8_Star",
    component: Lv8_Star,
  },
  {
    path: "/Ex_MonsterBall",
    name: "Ex_MonsterBall",
    component: Ex_MonsterBall,
  },
  {
    path: "/Ex_Frog",
    name: "Ex_Frog",
    component: Ex_Frog,
  },
  {
    path: "/Ex_Guitar",
    name: "Ex_Guitar",
    component: Ex_Guitar,
  },
  {
    path: "/Ex_Gift",
    name: "Ex_Gift",
    component: Ex_Gift,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
