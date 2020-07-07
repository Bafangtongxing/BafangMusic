import Vue from "vue";
import VueRouter from "vue-router";
import Recommend from "components/recommend/recommend";
import Search from "components/search/search";
import Rank from "components/rank/rank";
import Singer from "components/singer/singer";
import SingerDetail from "components/singer-detail/singer-detail";
import Disc from "components/disc/disc";
import TopList from "components/top-list/top-list";
import UserCenter from "components/user-center/user-center";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    component: Recommend,
    children: [
      {
        path: ":id",
        component: Disc
      }
    ]
  },
  {
    path: "/rank",
    component: Rank,
    children: [
      {
        path: ":id",
        component: TopList
      }
    ]
  },
  {
    path: "/singer",
    component: Singer,
    children: [
      {
        path: ":id",
        component: SingerDetail
      }
    ]
  },
  {
    path: "/search",
    component: Search,
    children: [
      {
        path: ":id",
        component: SingerDetail
      }
    ]
  },
  {
    path: "/user",
    component: UserCenter
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
