import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Servicesingle from './views/Service-single'
import Service from './views/Service'
import Service2 from './views/Service2'
import Team1 from './views/Team1'
import Testimonial1 from './views/Testimonial1'
import Typography1 from './views/Typography1'
import error from './views/error'
import about2 from './views/about2'
import blogItem from './views/blogItem'
import career from './views/career'
import contact from './views/contact'
import elements from './views/elements'

import MaincontainerTeam from './components/MaincontainerTeam'
import MaincontainerService2 from './components/MaincontainerService2'
import Footer1Service from './components/Footer1Service'
import Footer2Service from './components/Footer2Service'
import Header from "./components/Header";
import StyleSwitcher from "./components/StyleSwitcher";
import Slider from "./components/Slider";
import ServiceBox from "./components/ServiceBox";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Maincontainer from "./components/Maincontainer";
import Subpagetitle from "./components/Subpagetitle";
import Portfolio from "./components/Portfolio";
import Counter from "./components/Counter";
import FeatureBox from "./components/FeatureBox";
import Team from "./components/Team";
import Parallax1 from "./components/Parallax1";
import PricingTable from "./components/PricingTable";
import Testimonial from "./components/Testimonial";
import Copyright from "./components/Copyright";
import BubpageTitle from "./components/BubpageTitle";
import BlogDetailsPage from "./components/BlogDetailsPage";



Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/service2',
            name: 'service2',
            component: () =>
                import ( /* webpackChunkName: "service" */ './views/Service2.vue')
        },
        {
            path: '/service-single',
            name: 'service-single',
            component: Servicesingle
        },
        {
            path: '/team',
            name: 'team',
            component: Team1
        },
        {
            path: '/testimonial',
            name: 'testimonial',
            component: Testimonial1
        },
        {
            path: '/typography',
            name: 'typography',
            component: Typography1
        },
        {
            path: '/error',
            name: 'error',
            component: error
        },
        {
            path: "/blogItem",
            name: "blogItem",
            component: blogItem
        },
        {
            path: "/about2",
            name: "about2",
            component: about2
        },
        {
            path: "/career",
            name: "career",
            component: career
        },
        {
            path: "/contact",
            name: "contact",
            component: contact
        },
        {
            path: "/elements",
            name: "elements",
            component: elements
        }
    ]
})