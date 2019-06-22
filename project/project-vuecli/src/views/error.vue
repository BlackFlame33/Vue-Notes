<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'/>
                <BubpageTitle/>
            </div>
            <!-- Banner area end -->

            <!-- Main container start -->

            <section id='main-container'>
                <div class='container'>
                    <div class='error-page text-center'>
                        <div class='error-code'>
                            <strong>404</strong>
                        </div>
                        <div class='error-message'>
                            <h3>Oops... Page Not Found!</h3>
                        </div>
                        <div class='error-body'>
                            Try using the button below to go to main page of the site
                            <br>
                            <a href='index.html' class='btn btn-primary solid blank'>
                                <i class='fa fa-arrow-circle-left'>&nbsp;</i> Go to Home
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!--/ Main container end -->
        </div>
        <!-- Body inner end -->
    </div>
</template>

<script>
import BubpageTitle from '@/components/BubpageTitle'
export default {
    name: 'home',
    components: {
        BubpageTitle
    }
}
</script>

<style scoped>
</style>