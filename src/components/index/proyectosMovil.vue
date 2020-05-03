<template lang="pug">
  div.contenedorProyecto
    img(src="@/assets/last_proyect.png")
    v-container
      h2 {{titulo}}
      h3 {{subtitulo}}
      p {{texto}}
</template>

<style scoped>
.contenedorProyecto {
  background: #5B616A;
  height: 50vh;
  color: #E6E8E6;
  margin-top: 80px;
}

.contenedorProyecto img {
  width: 750px;
  float: right;
}

.contenedorProyecto h2 {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 35px;
}

.contenedorProyecto h3 {
  font-size: 25px;
  margin-bottom: 15px;
}

.contenedorProyecto p {
  font-size: 20px;
}

@media (max-width: 1024px) {
  .contenedorProyecto img {
    width: 50%;
  }

  .contenedorProyecto h2 {
    font-size: 25px;
  }

  .contenedorProyecto h3 {
    font-size: 20px;
  }

  .contenedorProyecto p {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    .contenedorProyecto {
      display: inline-block;
      height: 100vh;
    }
    .contenedorProyecto img {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      titulo: 'Sed volutpat eget dui ut tempus init bibendum nunc.',
      subtitulo: 'Fusce fringilla tincidunt laoreet volutpat cras varius sit suscipit.',
      texto: 'Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras varius lorem ac velit pharetra, non scelerisque mi vulputate. Phasellus bibendum suscipit nunc, non semper erat iaculis in. Nulla volutpat porttitor magna vel euismod. Aenean sit amet diam nec sem amet metus.',
    };
  },
};
</script>
