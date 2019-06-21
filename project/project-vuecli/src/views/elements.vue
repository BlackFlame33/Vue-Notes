<template>
    <div class="body-inner">
        <Header/>

        <div id="banner-area">
            <img src="images/banner/banner2.jpg" alt ="" />
            <div class="parallax-overlay"></div>
            <Subpagetitle/>
        </div><!-- Banner area end -->

        <Maincontainer/>

        <Footer1Service/>

        <Footer2/>
    </div><!-- Body inner end -->
</template>

<script>
    import Header from "@/components/Header";
    import Subpagetitle from "@/components/Subpagetitle";
    import Maincontainer from "@/components/Maincontainer";
    import Footer1Service from "@/components/Footer1Service";
    import Footer2 from "@/components/Footer2";
    export default {
        name: "elements",
        components: {
            Footer2,
            Footer1Service,
            Maincontainer,
            Subpagetitle,
            Header
        }
    }
</script>

<style scoped>

</style>