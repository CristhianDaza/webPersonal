<template lang="pug">
  #app(dark)
    menuPrincipal
    v-container
      router-view
</template>

<style>
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
import menuPrincipal from '@/components/menuPrincipal.vue';

export default {
  name: 'App',
  components: {
    menuPrincipal,
  },
};
</script>
