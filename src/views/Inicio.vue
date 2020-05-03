<template lang="pug">
  div
    div.contenedorHero
      hero.hero
    informacionPrincipal
</template>

<script>
import hero from '@/components/index/hero.vue';
import informacionPrincipal from '@/components/index/informacionPrincipal.vue';

export default {
  name: 'Inicio',
  components: {
    hero,
    informacionPrincipal,
  },
};
</script>

<style>
.contenedorHero {
  background: #313E50;
  overflow: hidden;
}

.hero {
  background: rgba(0, 0, 0, .1);
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 1;
}

.hero::before {
  content: '';
  width: 300%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  position: absolute;
  transform: rotate(160deg);
  z-index: -1;
  top: 50%;
  left: -100%;
}

@media (max-width: 750px) {
  .hero {
    height: 90vh;
  }
}
</style>
