<template>
  <!-- <SplashScreem/> -->
  <div id="app">
    
    <header>
          <nav>
            <section class="contenedor nav">
              <div class="logo">
             
                <!-- <img src="@/assets/logo.png" alt="" /> -->
              </div>
              <div class="enlaces-header">
                
                <router-link to="/">Inicio</router-link>
                <router-link to="/productos">Productos</router-link>
                <router-link to="/alumnos">Cursos</router-link>
                <router-link to="/recet">Recetas</router-link>
               
                
                <!-- <a href="#">Incio</a> | 
                <a href="#">Productos</a> |
                <a href="#">Blog</a> | -->
                <!-- <a href="#">Incio</a>
                      <a href="#">Incio</a> -->
              </div>
              <!-- <div class="hamburguer">
                <i class="fa-solid fa-bars"></i>
              </div> -->
            </section>
          </nav>
          <!-- <div class="contenedor">
            <section class="contenido-header">
              <section class="text-header">
                <h1>TO TRAVEL HOME</h1>
                <p>
                  Colombia es un país del extremo norte de Sudamérica. Su paisaje
                  cuenta con bosques tropicales, las montañas de los Andes y
                  varias plantaciones de café. En Bogotá, su capital a gran
                  altura, el distrito Zona Rosa es famoso por sus restaurantes y
                  tiendas. Cartagena, en la costa del Caribe, tiene una Ciudad
                  Antigua colonial
                </p>
                <a href="#"> Viajar es vida</a>
              </section>
              <img src="@/assets/d5.svg" alt="" />
            </section>
          </div> -->
        </header>
    <router-view/>
  </div>
</template>

<script> 

export default {
  name:'app',
}
</script>

<style>
 body {
    font-family: "Roboto", sans-serif;
  }

  .nav::before {
    content: "";
    display: block;
    margin-bottom: 80px;
  }
  
  nav {
    width: 100%;
    height: 80px;
    background: #fff;
    border-bottom: 1px solid transparent;
    box-shadow: 1px 1px 10px 0 rgb(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    z-index: 100;
    /* transition: ease-in-out 0.5s; */
    /* background: #000; */
  }
  .nav {
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    align-items: center;
  }
  .nav .logo {
    height: 80px;
  }
  .nav .logo .img {
    height: 100%;
    vertical-align: top;
  }
  .enlaces-header {
    font-weight: 300;
  }
  .nav .enlaces-header a {
    color: #5d6678;
    text-decoration: none;
    margin-left: 20px;
  }
  
</style>
