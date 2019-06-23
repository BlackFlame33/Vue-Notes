import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About'
import BlogItem from './views/BlogItem'
import Career from './views/Career'
import Contact from './views/Contact'
import Elements from './views/Elements'
import Error from './views/Error'
import Faq from './views/Faq'
import Home from './views/Home'
import PortfolioClassic from './views/PortfolioClassic'
import PortfolioItem from './views/PortfolioItem'
import PortfolioStatic from './views/PortfolioStatic'
import Pricing from './views/Pricing'
import Service from './views/Service'
import Service2 from './views/Service2'
import ServiceSingle from './views/ServiceSingle'
import Team1 from './views/Team1'
import Testimonial1 from './views/Testimonial1'
import Typography1 from './views/Typography1'

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
            component: About
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/service2',
            name: 'service2',
            component: Service2
        },
        {
            path: '/service-single',
            name: 'service-single',
            component: ServiceSingle
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
            path: '/blog-item',
            name: 'blog-item',
            component: BlogItem
        },
        {
            path: '/career',
            name: 'career',
            component: Career
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/elements',
            name: 'elements',
            component: Elements
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
            name: 'portfolio-static',
            component: PortfolioStatic
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/portfolio-item',
            name: 'portfolio-item',
            component: PortfolioItem
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
})
