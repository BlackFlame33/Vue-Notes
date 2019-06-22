<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'></div>

                <subpagetitle/>
            </div>
            <!-- Banner area end -->

            <BlogDetailsPage/>

            <div class='gap-40'></div>
        </div>
        <!-- Body inner end -->
    </div>
</template>

<script>
import Subpagetitle from '@/components/Subpagetitle'
import BlogDetailsPage from '@/components/BlogDetailsPage'
export default {
    name: 'biog-item',
    components: {
        BlogDetailsPage,
        Subpagetitle
    }
}
</script>

<style scoped>
</style>