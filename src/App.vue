<template lang="pug">
  #app(dark)
    router-view
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
export default {
  name: 'App',
  components: {
  },
};
</script>
