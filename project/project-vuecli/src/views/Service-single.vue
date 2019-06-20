<template>
  <div class="body-inner">
    <Header />
    <div id="banner-area">
      <img
        src="images/banner/banner2.jpg"
        alt=""
      >
      <div class="parallax-overlay" />
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
    </div><!-- Body inner end -->
    <Header/>
    <Subpagetitle/>
    <Maincontainer/>
    <Footer1 />
    <Footer2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Subpagetitle from '@/components/Subpagetitle.vue'
import Maincontainer from '@/components/Maincontainer.vue'
import Footer1 from '@/components/Footer1.vue'
import Footer2 from '@/components/Footer2.vue'
export default {
  components: {
    Header,
    Subpagetitle,
    Maincontainer,
    Footer1,
    Footer2,
  },
}
</script>
