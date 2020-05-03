<template lang="pug">
  div.contenedorPrinciapal
    div(v-for="slider in sliders" :key="slider.id").contenedorSlider
      h1 {{slider.titulo}}
      p {{slider.id}}
      img(:src="slider.imagenPrincipal" :alt="slider.titulo")
      div.contenedorSkills
        img(:src="slider.imagenSkill[0].img1" :alt="slider.titulo")
        img(:src="slider.imagenSkill[0].img2" :alt="slider.titulo")
        img(
          v-if="slider.imagenSkill[0].img3"
          :src="slider.imagenSkill[0].img3"
          :alt="slider.titulo"
        )
</template>

<style scoped>
  .contenedorPrinciapal {
    position: relative;
    width: 80vh;
    left: 25%;
    /* top: -300%; */
  }
  .contenedorSlider {
    position: relative;
    left: 25%;
    top: 250px;
    margin-bottom: 100%;
  }
  .contenedorSlider img {
    width: 100%;
    max-width: 100%;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, .8) 10px 10px 15px;
    overflow: hidden;
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
  .contenedorSlider p {
    color: rgba(255, 255, 255, .5);
    position: absolute;
    font-size: 350px;
    font-weight: bold;
    left: -130px;
    top: -100px;
    z-index: -1;
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
  .iconosFronted {
    width: 45%;
  }

  .iconosBackend {
    width: 80%;
  }

  @media (max-width: 2560px) {
    .contenedorPrinciapal {
      top: -150px;
    }
  }

  @media (max-width: 1024px) {
    .contenedorPrinciapal {
      left: 15%;
    }
  }

  @media (max-width: 768px) {
    .contenedorPrinciapal {
      top: -150px;
      left: 15%;
    }
    .contenedorSlider {
      left: 0;
    }
    .contenedorSlider h1 {
      font-size: 30px;
      top: -20px;
    }
    .contenedorSlider p {
      font-size: 200px;
      left: -50px;
    }
        .iconosFronted {
      width: 100%;
    }

    .iconosBackend {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    .contenedorPrinciapal {
      width: 100vh;
      height: 100%;
      left: 2%;
      top: 25px;
    }

    .contenedorSlider {
      top: 15%;
    }

    .contenedorSlider img {
      border-radius: 0;
      max-width: 60%;
    }
    .contenedorSlider p{
      left: 15%;
      top: -60%;
    }

    .contenedorSkills {
      max-width: 60%;
    }

  }

  @media (max-width: 375px) {
    .contenedorPrinciapal {
      left: 0;
      top: 15px;
    }
  }
</style>

<script>
import slider from '@/helpers/slider';

export default {
  data() {
    return {
      sliders: [],
    };
  },
  methods: {
    sliderCarrusel() {
      // let tituloContenedor = document.querySelector('.contenedorSlider h1');
      slider.forEach((data) => {
        // eslint-disable-next-line no-console
        console.log(data.imagenSkill[0].img1);
        // eslint-disable-next-line no-console
        // console.log(this.sliders);
        // const resultado = Object.values(data);
        this.sliders.push(data);
      });
    },
  },
  created() {
    this.sliderCarrusel();
  },
};
</script>
