<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'></div>

                <SubpageTitle/>
            </div>
            <!-- Banner area end -->

            <BlogDetailsPage/>

            <div class='gap-40'></div>
        </div>
        <!-- Body inner end -->
    </div>
</template>

<script>
import SubpageTitle from '@/components/SubpageTitle'
import BlogDetailsPage from '@/components/BlogDetailsPage'
export default {
    name: 'biog-item',
    components: {
        SubpageTitle,
        BlogDetailsPage
    }
}
</script>

<style scoped>
</style>