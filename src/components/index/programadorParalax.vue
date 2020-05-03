<template lang="pug">
  div.contenedorParalax
    div.paralax
</template>

<style scoped>
  .contenedorParalax {
    margin-top: 200px;
    background: url('/programador.png') no-repeat fixed bottom;
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
