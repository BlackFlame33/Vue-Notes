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
                            <a href='/'>
                                <img class='img-responsive' src='images/logo.png' alt='logo'>
                            </a>
                        </div>
                    </div>
                    <!--/ Logo end -->
                    <nav class='collapse navbar-collapse clearfix' role='navigation'>
                        <ul class='nav navbar-nav navbar-right'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li class='dropdown'>
                                <a href='/service' class='dropdown-toggle' data-toggle='dropdown'>
                                    Services
                                    <i class='fa fa-angle-down'/>
                                </a>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <a href='/service-single'>Service Single</a>
                                        </li>
                                        <li>
                                            <a href='/service'>Service</a>
                                        </li>
                                        <li>
                                            <a href='/service2'>Service2</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <a
                                    href='/portfolio-classic'
                                    class='dropdown-toggle'
                                    data-toggle='dropdown'
                                >
                                    Portfolio
                                    <i class='fa fa-angle-down'/>
                                </a>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <a href='/portfolio-classic'>Portfolio Classic</a>
                                        </li>
                                        <li>
                                            <a href='/portfolio-static'>Portfolio Static</a>
                                        </li>
                                        <li>
                                            <a href='/portfolio-item'>Portfolio Single</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class='dropdown'>
                                <a href='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Pages
                                    <i class='fa fa-angle-down'/>
                                </a>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <a href='/team'>Our Team</a>
                                        </li>
                                        <li>
                                            <a href='/about'>About</a>
                                        </li>
                                        <li>
                                            <a href='/pricing'>Pricing Table</a>
                                        </li>
                                        <li>
                                            <a href='/404'>404 Page</a>
                                        </li>
                                        <li>
                                            <a href='/career'>Career</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href='/blog-item'>Blog</a>
                            </li>
                            <li class='dropdown'>
                                <a href='/' class='dropdown-toggle' data-toggle='dropdown'>
                                    Features
                                    <i class='fa fa-angle-down'/>
                                </a>
                                <div class='dropdown-menu'>
                                    <ul>
                                        <li>
                                            <a href='/typography'>Typography</a>
                                        </li>
                                        <li>
                                            <a href='/elements'>Elements</a>
                                        </li>
                                        <li>
                                            <a href='/faq'>faq</a>
                                        </li>
                                        <li>
                                            <a href='/Testimonial'>Testimonial</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href='/contact'>Contact</a>
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
