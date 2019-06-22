<template>
    <div>
        <div class='body-inner'>
            <div id='banner-area'>
                <img src='images/banner/banner2.jpg' alt>
                <div class='parallax-overlay'/>
                <SubpageTitle/>
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
                            <router-link to='/' class='btn btn-primary solid blank'>
                                <i class='fa fa-arrow-circle-left'>&nbsp;</i> Go to Home
                            </router-link>
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
import SubpageTitle from '@/components/SubpageTitle'
export default {
    name: 'home',
    components: {
        SubpageTitle
    }
}
</script>

<style scoped>
</style>