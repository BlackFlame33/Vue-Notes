<template>
    <div>
        <div class="body-inner">

            <Header/>

            <div id="banner-area">
                <img src="images/banner/banner2.jpg" alt ="" />
                <div class="parallax-overlay"></div>
                <Subpagetitle/>
            </div><!-- Banner area end -->

            <Maincontainer/>

            <section class="call-to-action">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3>Join with BizCraft and Give Your Website a Brand New Look</h3>
                            <a href="#" class="pull-right btn btn-primary white">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer1/>

            <Footer2/>

        </div><!-- Body inner end -->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Subpagetitle from "@/components/Subpagetitle";
    import Maincontainer from "@/components/Maincontainer";
    import Footer1 from "@/components/Footer1";
    import Footer2 from "@/components/Footer2";
    export default {
        name: "career",
        components: {
            Footer2,
            Footer1,
            Maincontainer,
            Subpagetitle,
            Header
        }
    }
</script>

<style scoped>

</style>