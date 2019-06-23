<template>
    <div class='body-inner'>
        <div id='banner-area'>
            <img src='images/banner/banner2.jpg' alt>
            <div class='parallax-overlay'></div>
            <SubpageTitle/>
            <!-- Banner area end -->
        </div>
        <!-- Main container start -->

        <section id='main-container'>
            <div class='container'>
                <div class='row'>
                    <!-- Map start here -->
                    <div id='map-wrapper' class='no-padding'>
                        <div class='map' id='map'></div>
                    </div>
                    <!--/ Map end here -->
                </div>
                <!-- Content row  end -->

                <div class='gap-40'></div>

                <div class='row'>
                    <div class='col-md-7'>
                        <form id='contact-form' action='contact-form.php' method='post' role='form'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <div class='form-group'>
                                        <label>Name</label>
                                        <input
                                            class='form-control'
                                            name='name'
                                            id='name'
                                            placeholder
                                            type='text'
                                            required
                                        >
                                    </div>
                                </div>
                                <div class='col-md-4'>
                                    <div class='form-group'>
                                        <label>Email</label>
                                        <input
                                            class='form-control'
                                            name='email'
                                            id='email'
                                            placeholder
                                            type='email'
                                            required
                                        >
                                    </div>
                                </div>
                                <div class='col-md-4'>
                                    <div class='form-group'>
                                        <label>Subject</label>
                                        <input
                                            class='form-control'
                                            name='subject'
                                            id='subject'
                                            placeholder
                                            required
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class='form-group'>
                                <label>Message</label>
                                <textarea
                                    class='form-control'
                                    name='message'
                                    id='message'
                                    placeholder
                                    rows='10'
                                    required
                                ></textarea>
                            </div>
                            <div class='text-right'>
                                <br>
                                <button
                                    class='btn btn-primary solid blank'
                                    type='submit'
                                >Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div class='col-md-5'>
                        <div class='contact-info'>
                            <h3>Contact Details</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget erat magna. Pellentesque justo ante</p>
                            <br>
                            <p>
                                <i class='fa fa-home info'></i> 1102 Saint Marys, Junction City, KS
                            </p>
                            <p>
                                <i class='fa fa-phone info'></i> +(785) 238-4131
                            </p>
                            <p>
                                <i class='fa fa-envelope-o info'></i> info@bizcraft.com
                            </p>
                            <p>
                                <i class='fa fa-globe info'></i> www.bizcraft.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ container end -->
        </section>
        <!--/ Main container end -->
    </div>
    <!-- Body inner end -->
</template>

<script>
import SubpageTitle from '@/components/SubpageTitle'
$(function() {
    $('#map')
        .gmap3({
            address: '14600 Goldenwest St #101A, Westminster, California 92683',
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        })
        .marker(function(map) {
            return {
                position: map.getCenter(),
                icon: 'http://themewinter.com/html/marker.png'
            }
        })
})
export default {
    components: {
        SubpageTitle
    }
}
</script>