<template lang="pug">
  div.footer
    v-container
      p &copy; Copyright {{copyright}} Design by
       |
       span  Cristhian Daza
       |  with 💙.
</template>

<style scoped>
.footer {
  background: #313E50;
  color: #E6E8E6;
  font-size: 18px;
}

.footer span {
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      copyright: new Date().getFullYear(),
    };
  },
};
</script>
