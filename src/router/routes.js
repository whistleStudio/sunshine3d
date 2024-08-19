const Home = () => import("views/home/Home")
const Company = () => import("views/company/Company")
const Product = () => import("views/product/Product")
const Activity = () => import("views/activity/Activity")
const Contact = () => import("views/contact/Contact")
const Details = () => import("views/details/Details")
const ActInfo = () => import("views/actInfo/ActInfo")

const routes = [
  // {
  //   path: '',
  //   redirect: "/home"
  // },
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
    path: "/product/details",
    component: Details
  },
  {
    path: "/activity",
    component: Activity
  },
  {
    path: "/activity/actInfo",
    component: ActInfo
  },
  {
    path: "/contact",
    component: Contact
  }
]

export default routes