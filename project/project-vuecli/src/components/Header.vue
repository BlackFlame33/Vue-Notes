<template>
    <div>
        <!-- Header start -->
        <header id='header' class='navbar-fixed-top header' role='banner'>
            <div class='container'>
                <div class='row'>
                    <!-- Logo start -->
                    <div class='navbar-header'>
                        <button
                            type='button'
                            class='navbar-toggle'
                            data-toggle='collapse'
                            data-target='.navbar-collapse'
                        >
                            <span class='sr-only'>Toggle navigation</span>
                            <span class='icon-bar'/>
                            <span class='icon-bar'/>
                            <span class='icon-bar'/>
                        </button>
                        <div class='navbar-brand navbar-bg'>
                            <router-link to='/'>
                                <img class='img-responsive' src='images/logo.png' alt='logo'>
                            </router-link>
                        </div>
                    </div>
                    <!--/ Logo end -->
                    <nav class='collapse navbar-collapse clearfix' role='navigation'>
                        <ul class='nav navbar-nav navbar-right'>
                            <li class='dropdown active'>
                                <router-link to='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Home
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                            </li>
                            <li class='dropdown'>
                                <router-link
                                    to='/service'
                                    class='dropdown-toggle'
                                    data-toggle='dropdown'
                                >
                                    Services
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <router-link to='/service-single'>Service Single</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/service'>Service</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/service2'>Service2</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <router-link
                                    to='/portfolio-classic'
                                    class='dropdown-toggle'
                                    data-toggle='dropdown'
                                >
                                    Portfolio
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <router-link to='/portfolio-classic'>Portfolio Classic</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/portfolio-static'>Portfolio Static</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/portfolio-item'>Portfolio Single</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <router-link to='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Pages
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <router-link to='/team'>Our Team</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/about'>About</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/pricing'>Pricing Table</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/404'>404 Page</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/career'>Career</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <router-link to='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Blog
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <router-link to='/blog-item'>Blog Single</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <router-link to='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Features
                                    <i class='fa fa-angle-down'/>
                                </router-link>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <router-link to='/typography'>Typography</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/elements'>Elements</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/faq'>faq</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/Testimonial'>Testimonial</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <router-link to='contact.html'>Contact</router-link>
                            </li>
                        </ul>
                    </nav>
                    <!--/ Navigation end -->
                </div>
                <!--/ Row end -->
            </div>
            <!--/ Container end -->
        </header>
        <!--/ Header end -->
    </div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
