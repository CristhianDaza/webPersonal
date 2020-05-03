<template lang="pug">
  div.footerInicio
    div.contenedorFooterInicio
      p I'am available for freelance projects.
      h4 Let's work together indeed!
      div.botones
        v-btn(x-large dark).boton GitHub
        v-btn(x-large dark).boton Contacto
</template>

<style scoped>
.footerInicio {
  background: #011638;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #E6E8E6;
}

.contenedorFooterInicio {
  margin-top: 150px;
}

.contenedorFooterInicio p {
  font-size: 25px;
}

.contenedorFooterInicio h4 {
  font-size: 45px;
  margin-top: 25px;
}

.contenedorFooterInicio .botones {
  margin: 45px 0;

}

.contenedorFooterInicio .botones .boton {
  background-color: #C03221 !important;
  transition: .3s;
  margin: 15px;
}

.contenedorFooterInicio .botones .boton:hover {
  background: #5B616A !important;
}

</style>
