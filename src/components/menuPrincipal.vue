<template lang="pug">
  v-container
    v-layout
      router-link(to="/")
        img(src="@/assets/logo.png" height="75px")
      v-spacer
      v-toolbar-items.menuPrincipal
        router-link(to="/").pr-3
          v-btn(height="100%" text) Inicio
        router-link(to="/").pr-3
          v-btn(height="100%" text) Cristhian
        router-link(to="/").pr-3
          v-btn(height="100%" text) Servicios
        router-link(to="/").pr-3
          v-btn(height="100%" text) Portafolio
        router-link(to="/").pr-3
          v-btn(height="100%" text) Contacto
      v-app-bar-nav-icon(
        @click.stop="menuHamburgesa = !menuHamburgesa"
      ).menu

    v-layout
      v-navigation-drawer(
        v-model="menuHamburgesa"
        absolute
        temporary
        right
      )
        v-list(shaped nav)
          v-subheader Menú Principal
          hr.mb-2
          v-list-item-group(
            v-model="group"
            active-class="activadoLinkMenu"
          )
            v-list-item(to="/")
              v-list-item-title Inicio
            v-list-item(to="/")
              v-list-item-title Cristhian
            v-list-item(to="/")
              v-list-item-title Servicios
            v-list-item(to="/")
              v-list-item-title Portafolio
            v-list-item(to="/")
              v-list-item-title Contacto
</template>

<style scoped>
.v-list--nav
.v-list-item:not(:last-child):not(:only-child),
.v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
  margin: 0;
}
</style>>

</style>

<script>
export default {
  name: 'menuPrincipal',
  data() {
    return {
      menuHamburgesa: false,
      group: null,
    };
  },
};
</script>
