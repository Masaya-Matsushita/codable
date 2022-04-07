import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeView.vue"
import Lv1_Leaf from "../views/Lv1_Leaf.vue"
import Lv2_Cylinder from "../views/Lv2_Cylinder.vue"
import Lv3_CancelButton from "../views/Lv3_CancelButton.vue"
import Lv4_UnknownIcon from "../views/Lv4_UnknownIcon.vue"
import Lv5_Triangle from "../views/Lv5_Triangle.vue"
import Lv6_Infinity from "../views/Lv6_Infinity.vue"
import Lv7_Diamond from "../views/Lv7_Diamond.vue"
import Lv8_Star from "../views/Lv8_Star.vue"
import Feedback from "../views/FeedbackView.vue"
import Record from "../views/RecordView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
    path: "/feedback",
    name: "feedback",
    component: Feedback,
    props: true,
  },
  {
    path: "/record",
    name: "record",
    component: Record,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
