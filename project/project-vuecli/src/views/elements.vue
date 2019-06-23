<template>
    <div class='body-inner'>
        <div id='banner-area'>
            <img src='images/banner/banner2.jpg' alt>
            <div class='parallax-overlay'></div>
            <SubpageTitle/>
        </div>
        <!-- Banner area end -->

        <!-- Main container start -->

        <section id='main-container'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-6'>
                        <h3 class='title-border'>Accordion</h3>

                        <div class='panel-group' id='accordion'>
                            <div class='panel panel-default'>
                                <div class='panel-heading'>
                                    <h4 class='panel-title'>
                                        <a
                                            data-toggle='collapse'
                                            data-parent='#accordion'
                                            href='#collapseOne'
                                        >Collapsible Group Item # 1</a>
                                    </h4>
                                </div>
                                <div id='collapseOne' class='panel-collapse collapse in'>
                                    <div class='panel-body'>
                                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                    </div>
                                </div>
                            </div>
                            <!--/ Panel 1 end-->

                            <div class='panel panel-default'>
                                <div class='panel-heading'>
                                    <h4 class='panel-title'>
                                        <a
                                            data-toggle='collapse'
                                            class='collapsed'
                                            data-parent='#accordion'
                                            href='#collapseTwo'
                                        >Collapsible Group Item # 2</a>
                                    </h4>
                                </div>
                                <div id='collapseTwo' class='panel-collapse collapse'>
                                    <div class='panel-body'>
                                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                    </div>
                                </div>
                            </div>
                            <!--/ Panel 2 end-->

                            <div class='panel panel-default'>
                                <div class='panel-heading'>
                                    <h4 class='panel-title'>
                                        <a
                                            data-toggle='collapse'
                                            class='collapsed'
                                            data-parent='#accordion'
                                            href='#collapseTwo'
                                        >Collapsible Group Item # 3</a>
                                    </h4>
                                </div>
                                <div id='collapseTwo' class='panel-collapse collapse'>
                                    <div class='panel-body'>
                                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                    </div>
                                </div>
                            </div>
                            <!--/ Panel 3 end-->
                        </div>
                        <!--/ Accordion end -->

                        <div class='gap-40'></div>

                        <!-- Counter Strat -->

                        <h3 class='title-border'>Facts</h3>

                        <div class='ts_counter elements no-padding'>
                            <div class='row text-center'>
                                <div class='facts one col-md-3 col-sm-6'>
                                    <span class='facts-icon'>
                                        <i class='fa fa-user'></i>
                                    </span>
                                    <div class='facts-num'>
                                        <span class='counter'>1200</span>
                                    </div>
                                    <h3>Clients</h3>
                                </div>

                                <div class='facts two col-md-3 col-sm-6'>
                                    <span class='facts-icon'>
                                        <i class='fa fa-institution'></i>
                                    </span>
                                    <div class='facts-num'>
                                        <span class='counter'>1277</span>
                                    </div>
                                    <h3>Item Sold</h3>
                                </div>

                                <div class='facts three col-md-3 col-sm-6'>
                                    <span class='facts-icon'>
                                        <i class='fa fa-suitcase'></i>
                                    </span>
                                    <div class='facts-num'>
                                        <span class='counter'>869</span>
                                    </div>
                                    <h3>Projects</h3>
                                </div>

                                <div class='facts four col-md-3 col-sm-6'>
                                    <span class='facts-icon'>
                                        <i class='fa fa-trophy'></i>
                                    </span>
                                    <div class='facts-num'>
                                        <span class='counter'>76</span>
                                    </div>
                                    <h3>Awwards</h3>
                                </div>
                            </div>
                        </div>
                        <!--/ Counter end -->
                    </div>
                    <!--/ Col end -->

                    <div class='col-md-6'>
                        <h3 class='title-border'>Tabs</h3>

                        <div class='widget widget-tab'>
                            <ul class='nav nav-tabs'>
                                <li class='active'>
                                    <a href='#tab1' data-toggle='tab'>Section 1</a>
                                </li>
                                <li>
                                    <a href='#tab2' data-toggle='tab'>Section 2</a>
                                </li>
                                <li>
                                    <a href='#tab3' data-toggle='tab'>Section 3</a>
                                </li>
                            </ul>
                            <div class='tab-content'>
                                <div class='tab-pane active' id='tab1'>
                                    <p>Curabitur ultrices commodo magna, Mauris urna risus, adipiscing sit amet tempor sed, mollis eget ante. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle Etiam pellentesque ornare nulla. Suspendisse tellus leo, tincidunt sed convallis at, tristique ac ligula</p>
                                </div>
                                <div class='tab-pane' id='tab2'>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class='tab-pane' id='tab3'>
                                    <p>Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenemodo ligula eget dolorenean massa. Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenemodo ligula eget dolorenean massa.</p>
                                </div>
                            </div>
                        </div>
                        <!-- End default tabs -->

                        <div class='gap-40'></div>

                        <h3 class='title-border'>Testimonials</h3>

                        <!-- Testimonial start-->
                        <div class='testimonial elements'>
                            <div class='row'>
                                <div
                                    id='testimonial-carousel'
                                    class='owl-carousel owl-theme text-center testimonial-slide'
                                >
                                    <div class='item'>
                                        <div class='testimonial-thumb'>
                                            <img
                                                src='images/team/testimonial1.jpg'
                                                alt='testimonial'
                                            >
                                        </div>
                                        <div class='testimonial-content'>
                                            <p
                                                class='testimonial-text'
                                            >Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is that it as opposed to using.</p>
                                            <h3 class='name'>
                                                Sarah Arevik
                                                <span>Chief Executive</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div class='testimonial-thumb'>
                                            <img
                                                src='images/team/testimonial2.jpg'
                                                alt='testimonial'
                                            >
                                        </div>
                                        <div class='testimonial-content'>
                                            <p
                                                class='testimonial-text'
                                            >Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is that it as opposed to using.</p>
                                            <h3 class='name'>
                                                Narek Bedros
                                                <span>Sr. Manager</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div class='testimonial-thumb'>
                                            <img
                                                src='images/team/testimonial3.jpg'
                                                alt='testimonial'
                                            >
                                        </div>
                                        <div class='testimonial-content'>
                                            <p
                                                class='testimonial-text'
                                            >Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is that it as opposed to using.</p>
                                            <h3 class='name'>
                                                Taline Lucine
                                                <span>Sales Manager</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <!--/ Testimonial carousel end-->
                            </div>
                        </div>
                        <!--/ Testimonial end-->
                    </div>
                    <!--/ Col end -->
                </div>
                <!-- Content row  end -->
            </div>
            <!--/ container end -->
        </section>
        <!--/ Main container end -->
    </div>
    <!-- Body inner end -->
</template>

<script>
import SubpageTitle from '@/components/SubpageTitle'
export default {
    components: {
        SubpageTitle
    }
}
</script>