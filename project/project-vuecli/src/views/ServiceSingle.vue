<template>
    <div class='body-inner'>
        <div id='banner-area'>
            <img src='images/banner/banner2.jpg' alt>
            <div class='parallax-overlay'/>
            <section class='call-to-action'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <h3>Join with BizCraft and Give Your Website a Brand New Look</h3>
                            <a href='#' class='pull-right btn btn-primary white'>Purchase Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Body inner end -->
        <SubpageTitle/>
        <Maincontainer/>
    </div>
</template>

<script>
// @ is an alias to /src
import SubpageTitle from '@/components/SubpageTitle'
import Maincontainer from '@/components/Maincontainer'
export default {
    components: {
        SubpageTitle,
        Maincontainer
    }
}
</script>
