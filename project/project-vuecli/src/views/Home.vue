<template>
  <div class="home">
    <StyleSwitcher />
    <div class="body-inner">
      <Header />
      <Slider />
      <ServiceBox />
      <Portfolio />
      <Counter />
      <FeatureBox />
      <section
        id="image-block"
        class="image-block no-padding"
      >
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-6 ts-padding"
              style="height:650px;background:url(images/image-block-bg.jpg) 50% 50% / cover no-repeat;"
            />
            <div class="col-md-6 ts-padding img-block-right">
              <div class="img-block-head text-center">
                <h2>Know More About Our Company</h2>
                <h3>Why Choose Us</h3>
                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
              </div>

              <div class="gap-30" />

              <div class="image-block-content">
                <span class="feature-icon pull-left">
                  <i class="fa fa-bicycle" />
                </span>
                <div class="feature-content">
                  <h3>Tons of Features</h3>
                  <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut</p>
                </div>
              </div>
              <!--/ End 1st block -->

              <div class="image-block-content">
                <span class="feature-icon pull-left">
                  <i class="fa fa-diamond" />
                </span>
                <div class="feature-content">
                  <h3>PowerPack Theme</h3>
                  <p>Proin gravida nibh vel velit auctor Aenean sollicitudin adipisicing</p>
                </div>
              </div>
              <!--/ End 1st block -->

              <div class="image-block-content">
                <span class="feature-icon pull-left">
                  <i class="fa fa-street-view" />
                </span>
                <div class="feature-content">
                  <h3>Day Night Support</h3>
                  <p>Simply dummy text and typesettings industry has been the industry</p>
                </div>
              </div>
              <!--/ End 1st block -->
            </div>
          </div>
        </div>
      </section>
      <!--/ Image block end -->
      <Team />
      <Parallax1 />
      <PricingTable />
      <Testimonial />
      <Clients />
      <Footer1 />
      <Copyright />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StyleSwitcher from "@/components/StyleSwitcher.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import ServiceBox from "@/components/ServiceBox.vue";
import Portfolio from "@/components/Portfolio.vue";
import Counter from "@/components/Counter.vue";
import FeatureBox from "@/components/FeatureBox.vue";
import Team from "@/components/Team.vue";
import Parallax1 from "@/components/Parallax1"
import PricingTable from "@/components/PricingTable";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Footer1 from "@/components/Footer1";
import Copyright from "@/components/Copyright";

export default {
  name: "Home",
  components: {
    StyleSwitcher,
    Header,
    Slider,
    ServiceBox,
    Portfolio,
    Counter,
    FeatureBox,
    Team,
    Parallax1,
    PricingTable,
    Testimonial,
    Clients,
    Footer1,
    Copyright
  }
};
</script>
