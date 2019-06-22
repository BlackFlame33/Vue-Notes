<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'/>
                <!-- Subpage title start -->
                <div class='banner-title-content'>
                    <div class='text-center'>
                        <h2>Typography</h2>
                        <ul class='breadcrumb'>
                            <li>Home</li>
                            <li>Features</li>
                            <li>
                                <a href='#'>Typography</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Subpage title end -->
            </div>
            <!-- Banner area end -->
            <MaincontainerService/>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import MaincontainerService from '@/components/MaincontainerService.vue'

export default {
    components: {
        MaincontainerService
    }
}
</script>