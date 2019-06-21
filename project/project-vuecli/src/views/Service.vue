<template>
  <div>
    <Header />
    <div class="body-inner">
      <div id="banner-area">
        <img
          src="images/banner/banner2.jpg"
          alt
        >
      </div>
      <!-- Banner area end -->
      <div id="banner-area">
        <img
          src="images/banner/banner2.jpg"
          alt
        >
        <div class="parallax-overlay" />

        <!-- Subpage title start -->
        <div class="banner-title-content">
          <div class="text-center">
            <h2>Services</h2>
            <ul class="breadcrumb">
              <li>Home</li>
              <li>Company</li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Subpage title end -->
      </div>
      <!-- Banner area end -->
    </div>
    <SubpagetitleService />
    <MaincontainerService />
    <section class="call-to-action">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>Join with BizCraft and Give Your Website a Brand New Look</h3>
            <a
              href="#"
              class="pull-right btn btn-primary white"
            >Purchase Now</a>
          </div>
        </div>
      </div>
    </section>

    <Footer1Service />
    <Footer2Service />   
  </div>
  <!-- Body inner end -->
</template>



<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SubpagetitleService from "@/components/SubpagetitleService.vue";
import MaincontainerService from "@/components/MaincontainerService.vue";
import Footer1Service from "@/components/Footer1Service.vue";
import Footer2Service from "@/components/Footer2Service.vue";
export default {
  components: {
    Header,
    SubpagetitleService,
    MaincontainerService,
    Footer1Service,
    Footer2Service
  }
};
</script>