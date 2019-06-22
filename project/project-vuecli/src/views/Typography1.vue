<template>
    <div>
        <div class="body-inner">
            <Header/>

            <div id="banner-area">
                <img src="images/banner/banner2.jpg" alt>
                <div class="parallax-overlay"/>
                <!-- Subpage title start -->
                <div class="banner-title-content">
                    <div class="text-center">
                        <h2>Typography</h2>
                        <ul class="breadcrumb">
                            <li>Home</li>
                            <li>Features</li>
                            <li>
                                <a href="#">Typography</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Subpage title end -->
            </div>
            <!-- Banner area end -->

            <div>
                <MaincontainerService/>
            </div>
            <Footer1/>
            <Footer2/>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MaincontainerService from '@/components/MaincontainerService.vue'
import Footer1 from '@/components/Footer1.vue'
import Footer2 from '@/components/Footer2.vue'

export default {
    components: {
        Header,
        MaincontainerService,
        Footer1,
        Footer2
    }
}
</script>