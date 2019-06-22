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
import About from './views/About'
import blogItem from './views/blogItem'
import career from './views/career'
import contact from './views/contact'
import elements from './views/elements'
import Faq from './views/Faq'
import PortfolioClassic from './views/PortfolioClassic'
import PortfolioStatic from './views/PortfolioStatic'
import Pricing from './views/Pricing'
import PortfolioItem from './views/PortfolioItem'

import MaincontainerTeam from './components/MaincontainerTeam'
import MaincontainerService2 from './components/MaincontainerService2'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Header from './components/Header'
import StyleSwitcher from './components/StyleSwitcher'
import Slider from './components/Slider'
import ServiceBox from './components/ServiceBox'
import Maincontainer from './components/Maincontainer'
import Subpagetitle from './components/Subpagetitle'
import Portfolio from './components/Portfolio'
import Counter from './components/Counter'
import FeatureBox from './components/FeatureBox'
import Team from './components/Team'
import Parallax1 from './components/Parallax1'
import PricingTable from './components/PricingTable'
import Testimonial from './components/Testimonial'
import Copyright from './components/Copyright'
import BubpageTitle from './components/BubpageTitle'
import BlogDetailsPage from './components/BlogDetailsPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
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
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/service2',
            name: 'service2',
            component: () => import(/* webpackChunkName: "service" */ './views/Service2.vue')
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
            path: '/blog-item',
            name: 'blogItem',
            component: blogItem
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/career',
            name: 'career',
            component: career
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/elements',
            name: 'elements',
            component: elements
        },
        {
            path: '/faq',
            name: 'Faq',
            component: Faq
        },
        {
            path: '/portfolio-classic',
            name: 'PortfolioClassic',
            component: PortfolioClassic
        },
        {
            path: '/portfolio-static',
            name: 'PortfolioStatic',
            component: PortfolioStatic
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/portfolio-item',
            name: 'PortfolioItem',
            component: PortfolioItem
        }
    ]
})
