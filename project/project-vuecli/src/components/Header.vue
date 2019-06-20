<template>
  <div>
    <!-- Header start -->
    <header
      id="header"
      class="navbar-fixed-top header"
      role="banner"
    >
      <div class="container">
        <div class="row">
          <!-- Logo start -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <div class="navbar-brand navbar-bg">
              <router-link to="/">
                <img
                  class="img-responsive"
                  src="images/logo.png"
                  alt="logo"
                >
              </router-link>
            </div>
          </div>
          <!--/ Logo end -->
          <nav
            class="collapse navbar-collapse clearfix"
            role="navigation"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown active">
                <router-link
                  to="/"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Home
                  <i class="fa fa-angle-down" />
                  Home <i class="fa fa-angle-down" />
                </router-link>
                <div class="dropdown-menu">
                  <ul>
                    <li class="active">
                      <router-link to="/">
                        Home
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <router-link
                  to="/"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Company
                  <i class="fa fa-angle-down" />
                  Company <i class="fa fa-angle-down" />
                </router-link>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <router-link to="about">
                        About Us
                      </router-link>
                    </li>
                    <li>
                      <router-link to="service">
                        Services
                      </router-link>
                    </li>
                    <li>
                      <router-link to="career">
                        Career
                      </router-link>
                    </li>
                    <li>
                      <router-link to="testimonial">
                        Testimonials
                      </router-link>
                    </li>
                    <li>
                      <router-link to="faq">
                        Faq
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <router-link
                  to="/"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Portfolio
                  <i class="fa fa-angle-down" />
                </router-link>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="portfolio-classic.html">Portfolio Classic</a>
                    </li>
                    <li>
                      <a href="portfolio-static.html">Portfolio Static</a>
                    </li>
                    <li>
                      <a href="portfolio-item.html">Portfolio Single</a>
                    </li>
                  Portfolio <i class="fa fa-angle-down" />
                </router-link>
                <div class="dropdown-menu">
                  <ul>
                    <li><a href="portfolio-classic.html">Portfolio Classic</a></li>
                    <li><a href="portfolio-static.html">Portfolio Static</a></li>
                    <li><a href="portfolio-item.html">Portfolio Single</a></li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                  <i class="fa fa-angle-down" />
                </a>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="about2.html">About Us - 2</a>
                    </li>
                    <li>
                      <a href="service2.html">Services - 2</a>
                    </li>
                    <li>
                      <a href="service-single.html">Services Single</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Table</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                >Pages <i class="fa fa-angle-down" /></a>
                <div class="dropdown-menu">
                  <ul>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="about2.html">About Us - 2</a></li>
                    <li><a href="service2.html">Services - 2</a></li>
                    <li><a href="service-single.html">Services Single</a></li>
                    <li><a href="pricing.html">Pricing Table</a></li>
                    <li><a href="404.html">404 Page</a></li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Blog
                  <i class="fa fa-angle-down" />
                </a>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="blog-rightside.html">Blog with Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-item.html">Blog Single</a>
                    </li>
                >Blog <i class="fa fa-angle-down" /></a>
                <div class="dropdown-menu">
                  <ul>
                    <li><a href="blog-rightside.html">Blog with Sidebar</a></li>
                    <li><a href="blog-item.html">Blog Single</a></li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Features
                  <i class="fa fa-angle-down" />
                </a>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
                >Features <i class="fa fa-angle-down" /></a>
                <div class="dropdown-menu">
                  <ul>
                    <li><a href="typography.html">Typography</a></li>
                    <li><a href="elements.html">Elements</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="contact.html">Contact</a></li>
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
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
