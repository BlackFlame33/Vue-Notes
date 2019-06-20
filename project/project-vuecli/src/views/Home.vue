<template>
  <div class="home">
    <StyleSwitcher />
    <div class="body-inner">
      <Header />
      <Slider />
      <ServiceBox />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StyleSwitcher from "@/components/StyleSwitcher.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import ServiceBox from "@/components/ServiceBox.vue";

export default {
  name: "Home",
  components: {
    StyleSwitcher,
    Header,
    Slider,
    ServiceBox
  }
};
</script>
