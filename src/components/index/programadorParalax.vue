<template lang="pug">
  div.contenedorParalax
    div.paralax
</template>

<script>
// import paralax from '@/assets/programador.png';

export default {
  data() {
    return {
      // imagenParlax: paralax,
    };
  },
};
</script>

<style scoped>
  .contenedorParalax {
    margin-top: 200px;
    background: url('/programador.png') fixed center;
    height: 50vh;
    width: 100%;
  }

  .paralax {
    background: rgba(0, 0, 0, .3);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    .contenedorParalax {
      margin-top: 100px;
    }
  }
  @media (max-width: 768px) {
    .contenedorParalax {
      margin-top: 0;
    }
  }
</style>
