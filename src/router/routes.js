const Home = () => import("views/home/Home")
const Company = () => import("views/company/Company")
const Product = () => import("views/product/Product")
const Activity = () => import("views/activity/Activity")
const Mall = () => import("views/mall/Mall")
const Contact = () => import("views/contact/Contact")

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: "/company",
    component: Company
  },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/activity",
    component: Activity
  },
  {
    path: "/mall",
    component: Mall
  },
  {
    path: "/contact",
    component: Contact
  }
]

export default routes