<template lang="pug">
  #app(dark)
    router-view
    footerPrincipal
</template>

<style>
body {
  font-family: 'Sarabun', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Vidaloka', serif;
}

a {
  text-decoration: none;
}
.mdi-menu{
  display: none !important;
}

@media (max-width: 960px){
  .menuPrincipal {
    display: none !important;
  }
  .mdi-menu{
    display: contents !important;
  }
}
</style>

<script>
import footerPrincipal from '@/components/footerPrincipal.vue';

export default {
  name: 'App',
  components: {
    footerPrincipal,
  },
};
</script>
