<template>
    <div>
        <div class="body-inner">

            <header/>

            <div id="banner-area">
                <img src="images/banner/banner2.jpg" alt ="" />
                <div class="parallax-overlay"></div>

                <subpagetitle/>

            </div><!-- Banner area end -->

            <BlogDetailsPage/>

            <div class="gap-40"></div>

            <Footer1/>

            <Footer2/>
        </div><!-- Body inner end -->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Subpagetitle from "@/components/Subpagetitle";
    import BlogDetailsPage from "@/components/BlogDetailsPage";
    import Footer1 from "@/components/Footer1";
    import Footer2 from "@/components/Footer2";
    export default {
        name: "biog-item",
        components: {
            Footer2,
            Footer1,
            BlogDetailsPage,
            Subpagetitle,
            Header
        }
    }
</script>

<style scoped>

</style>