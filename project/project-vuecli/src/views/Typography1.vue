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
                    <div class='row'>
                        <div class='col-md-6'>
                            <h3 class='title-border'>Heading</h3>
                            <h1>h1. Heading 1</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donâ€™t look even slightly.</p>
                            <h2>h2. Heading 2</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donâ€™t look even.</p>
                            <h3>h3. Heading 3</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donâ€™t look.</p>
                            <h4>h4. Heading 4</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donâ€™t.</p>
                            <h5>h5. Heading 5</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                            <h6>h6. Heading 6</h6>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                        </div>
                        <!--/ Col end -->

                        <div class='col-md-6'>
                            <h3 class='title-border'>Paragraph</h3>

                            <p>
                                Lorem ipsum dolor sit amet,
                                <mark>a mark here</mark> adipisicing elit. Atque, iusto, minus sequi natus nesciunt rerum tenetur corrupti autem officiis fugiat expedita laudantium ea aspernatur
                            </p>
                            <p>
                                <strong class='text-success'>Consectetur adipisicing elit</strong>. Corrupti, aliquam, voluptates, nulla, blanditiis totam voluptatem
                                <strong
                                    class='text-danger'
                                >voluptatum quod ipsa debitis non</strong> ab odio natus.
                            </p>

                            <div class='gap-20'></div>

                            <h3 class='title-border'>Blockquote</h3>

                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>
                                    Someone famous in
                                    <cite title='Source Title'>Source Title</cite>
                                </small>
                            </blockquote>

                            <blockquote class='pull-right'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>
                                    Someone famous in
                                    <cite title='Source Title'>Source Title</cite>
                                </small>
                            </blockquote>
                        </div>
                        <!--/ Col end -->
                    </div>
                    <!-- Content row  end -->
                </div>
                <!--/ container end -->
            </section>
            <!--/ Main container end -->
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import SubpageTitle from '@/components/SubpageTitle'

export default {
    components: {
        SubpageTitle
    }
}
</script>