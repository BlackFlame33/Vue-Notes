<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner1.jpg' alt>
                <div class='parallax-overlay'></div>

                <SubpageTitle/>
            </div>
            <!-- Banner area end -->

            <Maincontainer/>

            <div class='gap-40'></div>
        </div>
        <!-- Body inner end -->
    </div>
</template>

<script>
import SubpageTitle from '@/components/SubpageTitle'
import Maincontainer from '@/components/Maincontainer'
export default {
    name: 'home',
    components: {
        SubpageTitle,
        Maincontainer
    }
}
</script>

<style scoped>
</style>