<template>
    <div class='body-inner'>
        <div id='banner-area'>
            <img src='images/banner/banner2.jpg' alt>
            <div class='parallax-overlay'></div>
            <SubpageTitle/>
        </div>
        <!-- Banner area end -->

        <Portfolio/>

        <div class='gap-40'></div>
    </div>
    <!-- Body inner end -->
</template>
<script>
import SubpageTitle from '@/components/SubpageTitle'
import Portfolio from '@/components/Portfolio'
export default {
    name: 'Home',
    components: {
        SubpageTitle,
        Portfolio
    }
}
</script>
