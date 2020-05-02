<template lang="pug">
  #app(dark)
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
export default {
  name: 'App',
  components: {
  },
};
</script>
