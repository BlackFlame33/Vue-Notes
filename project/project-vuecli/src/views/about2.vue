<template>
    <div>
        <div class="body-inner">

            <header/>

            <div id="banner-area">
                <img src="images/banner/banner1.jpg" alt ="" />
                <div class="parallax-overlay"></div>

                <BubpageTitle/>

            </div><!-- Banner area end -->

            <Maincontainer/>

            <div class="gap-40"></div>
            <Footer1/>
            <Footer2/>
        </div><!-- Body inner end -->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import BubpageTitle from "@/components/BubpageTitle";
    import Maincontainer from "@/components/Maincontainer";
    import Footer1 from "@/components/Footer1";
    import Footer2 from "@/components/Footer2";
    export default {
        name: "home",
        components: {
            Footer2,
            Footer1,
            Maincontainer,
            BubpageTitle,
            Header
        }
    }
</script>

<style scoped>

</style>