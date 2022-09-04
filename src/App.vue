<template>
    <div id="page" class="hfeed site">
        <header-layout></header-layout>
        <router-view />
        <brands-carousel></brands-carousel>
        <footer-layout></footer-layout>

    </div><!-- #page -->
</template>

<script>
    import HeaderLayout from '@/components/layout/HeaderLayout'
    import FooterLayout from '@/components/layout/FooterLayout'
    import BrandsCarousel from '@/components/BrandsCarousel'

    export default {
        name: 'App',
        components: {
            HeaderLayout,
            FooterLayout,
            BrandsCarousel
        }
    }
</script>