<template lang="pug">
  v-container.contenedor
    div.contenedorImagen
      img(src="@/assets/cristhian.jpg")
    div.contenedorInformacion
      h2 {{titulo}}
      p {{parrafo}}
      v-btn(x-large).boton
        router-link(to="/portafolio") My live Work
</template>

<style scoped>
img {
  width: 260px;
  height: 100%;
}
.contenedor {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}

.contenedorImagen img{
  border-radius: 25px;
}

.contenedorInformacion {
  padding-left: 30px;
}

.contenedorInformacion h2 {
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 45px;
}

.contenedorInformacion p {
  font-size: 20px;
}

.contenedorInformacion .boton {
  float: right;
  margin-top: 25px;
  background-color: #011638 !important;
  font-size: 15px;
  padding: 0 40px !important;
  transition: .3s;
}

.contenedorInformacion .boton:hover {
  background: #C03221 !important;
}

a {
  color: #E6E8E6;
}
@media (max-width: 768px) {
  img {
    width: 150px;
    height: 50%;
  }

  .contenedorInformacion h2 {
    font-size: 30px;
  }

  .contenedorInformacion p {
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .contenedor {
    display: block;
    margin-top: 15px;
  }
  .contenedorInformacion {
    padding: 0;
  }

  .contenedorInformacion p {
    order: 3;
  }

  .contenedorImagen {
    order: 2;
  }

  .contenedor img {
    float: right;
  }

  .contenedorInformacion h2 {
    order: 1;
    margin: 25px 0;
    width: 100%;
  }
}

@media (max-width: 375px) {
  .contenedor {
    display: block;
    flex-direction: column;
  }
  .contenedor img {
    float: none;
    width: 100%;
  }
}

</style>

<script>
export default {
  data() {
    return {
      titulo: 'I Specialize in Branding and Strategy, and am passionate about creating Awesome Portfolio work.',
      parrafo: 'Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra orci condimentum a. Quisque nibh tortor, mollis placerat semper ac, auctor quis mauris. Praesent dignissim sed magna eu urna consectetur, at pretium nisi aliquet. Sed vestibulum malesuada semper. Init Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec malesuada nibh sed dolorinet libero posuere, sed cursus elit congue. Sed vestibulum malesuada semper. Init Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec malesuada nibh sed dolorinet libero posuere, sed cursus elit congue donec malesuada nibhe',
    };
  },
};
</script>
