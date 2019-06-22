<template>
    <div id='app'>
        <Header/>
        <router-view/>
        <Footer1/>
        <Footer2/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer1 from '@/components/Footer1'
import Footer2 from '@/components/Footer2'
export default {
    components: {
        name: 'Home',
        components: {
            Header,
            Footer1,
            Footer2
        }
    }
}
</script>