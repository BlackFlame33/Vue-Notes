<template>
    <!-- Subpage title start -->
    <div class='banner-title-content'>
        <div class='text-center'>
            <h2>{{msg}} Page</h2>
            <ul class='breadcrumb'>
                <li>Home</li>
                <li>Pages</li>
                <li>
                    <a href='/'>{{msg}}</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- Subpage title end -->
</template>

<script>
export default {
    name: 'SubpageTitle',
    data() {
        return {
            msg: this.$route.path + '/'
        }
    }
}
</script>
