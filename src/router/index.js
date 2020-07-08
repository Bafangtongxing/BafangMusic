import Vue from "vue";
import VueRouter from "vue-router";
// import Recommend from "components/recommend/recommend";
// import Search from "components/search/search";
// import Rank from "components/rank/rank";
// import Singer from "components/singer/singer";
// import SingerDetail from "components/singer-detail/singer-detail";
// import Disc from "components/disc/disc";
// import TopList from "components/top-list/top-list";
// import UserCenter from "components/user-center/user-center";
const Recommend = resolve => {
  import("components/recommend/recommend").then(recommend => {
    resolve(recommend);
  });
};
const Search = resolve => {
  import("components/recommend/recommend").then(search => {
    resolve(search);
  });
};
const Rank = resolve => {
  import("components/recommend/recommend").then(rank => {
    resolve(rank);
  });
};
const Singer = resolve => {
  import("components/recommend/recommend").then(singer => {
    resolve(singer);
  });
};
const SingerDetail = resolve => {
  import("components/recommend/recommend").then(singerdetail => {
    resolve(singerdetail);
  });
};
const Disc = resolve => {
  import("components/recommend/recommend").then(disc => {
    resolve(disc);
  });
};
const TopList = resolve => {
  import("components/recommend/recommend").then(toplist => {
    resolve(toplist);
  });
};
const UserCenter = resolve => {
  import("components/recommend/recommend").then(usercenter => {
    resolve(usercenter);
  });
};

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
