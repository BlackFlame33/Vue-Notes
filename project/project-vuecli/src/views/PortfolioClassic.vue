<template>
    <div>
        <div class="body-inner">
            <Header/>

            <div id="banner-area">
                <img src="images/banner/banner2.jpg" alt>
                <div class="parallax-overlay"></div>
                <!-- Subpage title start -->
                <div class="banner-title-content">
                    <div class="text-center">
                        <h2>Portfolio Classic</h2>
                        <ul class="breadcrumb">
                            <li>Home</li>
                            <li>Portfolio</li>
                            <li>
                                <a href="#">Portfolio Classic</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Subpage title end -->
            </div>
            <!-- Banner area end -->

            <Portfolio/>

            <div class="gap-40"></div>

            <Footer2/>
        </div>
        <!-- Body inner end -->
    </div>
</template>
<script>
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Footer2 from '@/components/Footer2'
export default {
    name: 'Home',
    components: {
        Header,
        Portfolio,
        Footer2
    }
}
</script>
