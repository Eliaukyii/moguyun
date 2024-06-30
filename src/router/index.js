import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/Home.vue";
import Products from "@/view/Products.vue";
import AboutUs from "@/view/AboutUs.vue";
import Customer from "@/view/Customer.vue";
import Document from "@/view/Document.vue";
import Contact from "@/view/Contact.vue";
import Message from "@/view/Message.vue";
import Approve from "@/view/Approve.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Products",
    component: Products,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/document",
    name: "Document",
    component: Document,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
