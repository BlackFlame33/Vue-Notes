<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'/>
                <SubpageTitle/>
            </div>
            <!-- Banner area end -->
            <MaincontainerService/>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import SubpageTitle from '@/components/SubpageTitle'
import MaincontainerService from '@/components/MaincontainerService.vue'

export default {
    components: {
        SubpageTitle,
        MaincontainerService
    }
}
</script>