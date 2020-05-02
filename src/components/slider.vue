<template lang="pug">
  div.contenedorSlider
    h1 Desarrollo Web
    img(src="@/assets/desktop.jpg" alt="Desarrollo Web")
    div.contenedorSkills
      img(src="@/assets/html.svg" alt="HTML5")
      img(src="@/assets/CSS.svg" alt="CSS3")
      img(src="@/assets/JavaScript.svg" alt="JavaScript ECMAScript 6")
</template>

<style scoped>
  .contenedorSlider {
    display: flex;
    position: relative;
    left: 25%;
    top: 10%;
  }
  .contenedorSlider img {
    max-width: 50%;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, .8) 10px 10px 15px;
  }
  .contenedorSlider h1 {
    color: white;
    position: absolute;
    font-size: 50px;
    text-align: center;
    top: -30px;
    left: 25px;
    text-shadow: rgba(0, 0, 0, .8) 10px 5px 5px;
  }

  .contenedorSkills {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  .contenedorSkills img {
    width: 15%;
    border-radius: 0;
    margin-right: 15px;
    box-shadow: rgba(0, 0, 0, 00) 0px 0 0;
  }

  @media (max-width: 750px) {
    .contenedorSlider {
      left: 10%;
    }
    .contenedorSlider img {
      max-width: 80%;
    }
    .contenedorSlider h1 {
      font-size: 30px;
      top: -20px;
    }
    .contenedorSkills {
      bottom: -160px;
    }
    .contenedorSkills img {
      max-width: 20%;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      titulos: [
        {
          id: 1,
          nombre: 'Desarrollo Web',
        },
        {
          id: 2,
          nombre: 'Fronted',
        },
        {
          id: 3,
          nombre: 'Backend',
        },
      ],
    };
  },
};
</script>
