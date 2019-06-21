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
              <a href="index.html">
                <img
                  class="img-responsive"
                  src="images/logo.png"
                  alt="logo"
                >
              </a>
            </div>
          </div>
          <!--/ Logo end -->
          <nav
            class="collapse navbar-collapse clearfix"
            role="navigation"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown active">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Home
                  <i class="fa fa-angle-down" />
                </a>
                <div class="dropdown-menu">
                  <ul>
                    <li class="active">
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 4</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Company
                  <i class="fa fa-angle-down" />
                </a>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="career.html">Career</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Portfolio
                  <i class="fa fa-angle-down" />
                </a>
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
