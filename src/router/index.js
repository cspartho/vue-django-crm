import { createRouter, createWebHistory } from "vue-router";

import store from "../store";

import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import DashBoard from "../views/dashboard/DashBoard.vue";
import MyAccount from "../views/dashboard/MyAccount.vue";
import Leads from "../views/dashboard/Leads.vue";
import Lead from "../views/dashboard/Lead.vue";
import AddLead from "../views/dashboard/AddLead.vue";
import EditLead from "../views/dashboard/EditLead.vue";
import AddTeam from "../views/dashboard/AddTeam.vue";
import Team from "../views/dashboard/Team.vue";
import AddMember from "../views/dashboard/AddMember.vue";
import Clients from "../views/dashboard/Clients.vue";
import AddClient from "../views/dashboard/AddClient.vue";
import Client from "../views/dashboard/Client.vue";
import EditClient from "../views/dashboard/EditClient.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/myaccount",
    name: "MyAccount",
    component: MyAccount,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/team",
    name: "Team",
    component: Team,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/team/addmember",
    name: "AddMember",
    component: AddMember,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/addteam",
    name: "AddTeam",
    component: AddTeam,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/leads",
    name: "Leads",
    component: Leads,
    meta: {
      requiredLogin: true,
    },
  },

  {
    path: "/dashboard/leads/add",
    name: "AddLead",
    component: AddLead,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/leads/:id",
    name: "Lead",
    component: Lead,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/leads/:id/edit",
    name: "EditLead",
    component: EditLead,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/clients",
    name: "Clients",
    component: Clients,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/clients/add",
    name: "AddClient",
    component: AddClient,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/clients/:id",
    name: "Client",
    component: Client,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/clients/:id/edit",
    name: "EditClient",
    component: EditClient,
    meta: {
      requiredLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
