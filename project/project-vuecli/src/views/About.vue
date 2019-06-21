<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Header/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Home',
    components: {
        Header
    }
}
</script>