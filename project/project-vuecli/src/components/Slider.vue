<template>
  <div>
    <!-- Slider start -->
    <section
      id="home"
      class="no-padding"
    >
      <div
        id="main-slide"
        class="cd-hero"
      >
        <ul class="cd-hero-slider">
          <li class="selected">
            <div class="overlay2">
              <img
                class=""
                src="images/slider/bg1.jpg"
                alt="slider"
              >
            </div>
            <div class="cd-full-width">
              <h2>Need To Invent The Future!</h2>
              <h3>We Making Difference To Great Things Possible</h3>
              <a
                href="#0"
                class="btn btn-primary white cd-btn"
              >Start Now</a>
              <a
                href="#0"
                class="btn btn-primary solid cd-btn"
              >Learn More</a>
            </div>
            <!-- .cd-full-width -->
          </li>
          <li>
            <div class="overlay2">
              <img
                class=""
                src="images/slider/bg2.jpg"
                alt="slider"
              >
            </div>
            <div class="cd-half-width">
              <h2>How Big Can You Dream?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
              <a
                href="#0"
                class="cd-btn btn btn-primary solid"
              >Take a Tour</a>
            </div>
            <!-- .cd-half-width -->

            <div class="cd-half-width cd-img-container">
              <img
                src="images/slider/bg-thumb1.png"
                alt=""
              >
            </div>
            <!-- .cd-half-width.cd-img-container -->
          </li>
          <li>
            <div class="overlay2">
              <img
                class=""
                src="images/slider/bg3.jpg"
                alt="slider"
              >
            </div>
            <div class="cd-half-width cd-img-container img-right">
              <img
                src="images/slider/bg-thumb2.png"
                alt=""
              >
            </div>
            <!-- .cd-half-width.cd-img-container -->
            <div class="cd-half-width">
              <h2>Your Challenge is Our Progress</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
              <a
                href="#0"
                class="cd-btn btn btn-primary white"
              >Start</a>
              <a
                href="#0"
                class="cd-btn btn secondary btn-primary solid"
              >Learn More</a>
            </div>
            <!-- .cd-half-width -->
          </li>
          <li class="cd-bg-video">
            <div class="cd-full-width">
              <h2>WE ARE HERE TO MAKE IT HAPPEN</h2>
              <h3>We Making Difference To Great Things Possible</h3>

              <a
                href="#0"
                class="cd-btn btn btn-primary solid"
              >Learn more</a>
            </div>
            <!-- .cd-full-width -->

            <div
              class="cd-bg-video-wrapper"
              data-video="videos/video"
            >
              <!-- video element will be loaded using jQuery -->
            </div>
            <!-- .cd-bg-video-wrapper -->
          </li>
        </ul>
        <!--/ cd-hero-slider -->

        <div class="cd-slider-nav">
          <nav>
            <span class="cd-marker item-1" />
            <ul>
              <li class="selected">
                <a href="#0"><i class="fa fa-bicycle" /> Invent</a>
              </li>
              <li><a href="#0"><i class="fa fa-hotel" /> Dream</a></li>
              <li><a href="#0"><i class="fa fa-android" /> Tech</a></li>
              <li class="video">
                <a href="#0"><i class="fa fa-video-camera" /> Video</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- .cd-slider-nav -->
      </div>
      <!--/ Main slider end -->
    </section>
    <!--/ Slider end -->
  </div>
</template>
<script>
export default {
  name: "Slider"
};
</script>