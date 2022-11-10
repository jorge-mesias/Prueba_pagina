<template>

    <div class="home">
  
        <!-- About -->
<!--    
        <section class="about-us">
          <div class="contenedor1">
            <h2 class="titulo">Conociendo Lugares</h2>
            <div class="contenedor-articulo">
              <div class="articulo">
                <i class="fa-sharp fa-solid fa-hammer"></i>
                <h3>Buscando lugares</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  explicabo ad reprehenderit a iusto temporibus, impedit, nesciunt
                  illum provident distinctio soluta voluptas cumque ea, placeat
                  atque dolorum sunt! Laboriosam, omnis!
                </p>
                <a href="#">Read More </a>
              </div>
              
              <div class="articulo">
                <i class="fa-sharp fa-solid fa-hammer"></i>
                <h3>Aprende a programar</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  explicabo ad reprehenderit a iusto temporibus, impedit, nesciunt
                  illum provident distinctio soluta voluptas cumque ea, placeat
                  atque dolorum sunt! Laboriosam, omnis!
                </p>
                <a href="#">Read More </a>
              </div>
              
              <div class="articulo">
                <i class="fas fa-cog"></i>
                <h3>Viaja y vive la vida</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  explicabo ad reprehenderit a iusto temporibus, impedit, nesciunt
                  illum provident distinctio soluta voluptas cumque ea, placeat
                  atque dolorum sunt! Laboriosam, omnis!
                </p>
                <a href="#">Read More </a>
              </div>
             
            </div>
          </div>
        </section> --> -->
  
      
  
         <section class="question-contenedor">
          <section class="textos-question">
            <h1>Realiza tus inquietudes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              aliquam? Accusantium ab laboriosam animi atque quidem vero natus
              nulla odit nihil distinctio ea dolorum, reprehenderit dolorem non
              sed itaque eius.
            </p>
            <a href="#"> ¿ Dónde quieres llegar ?</a>
          </section>
          <img src="../assets/d3.svg" alt="" />
        </section>
        <section class="resultados">
          <div class="content-resultados">
            <section class="numbers">
              <div class="numero">
                <h4>(602) 486 5050</h4>
                <p>Centro Comercial UNICO</p>
              </div>
              <div class="numero">
                <h4>(602) 486 5050</h4>
                <p>Centro Comercial UNICO</p>
              </div>
              <div class="numero">
                <h4>(602) 486 5050</h4>
                <p>Centro Comercial UNICO</p>
              </div>
              <div class="numero">
                <h4>(602) 486 5050</h4>
                <p>Centro Comercial UNICO</p>
              </div>
            </section>
            <section class="resultados-text">
          <h4>Final</h4>
          <p>estamos trabajando en alcanzar nuestros sueños</p>
          <a href="#">Ingresar aqui</a>
        </section>
          </div>
        </section>
        
  
        <section class="contenedor1 services">
          <img src="../assets/d4.svg" alt="" />
          <div class="caja-habilidades">
            <h4><i class="fa-solid fa-envelope-circle-check"></i> Siito Web</h4>
            <h4><i class="fa-solid fa-envelope-circle-check"></i> vistas</h4>
            <h4><i class="fa-solid fa-envelope-circle-check"></i> Soporte</h4>
          </div>
        </section>
          <footer class="footer">
          <div class="partFooter">
            <img src="@/assets/d5.svg" alt="" />
          </div>
          <div class="partFooter">
            <h4>Servicios</h4>
            <a href="" hrerf="#">Servicios 1</a>
            <a href="" hrerf="#">Servicios 2</a>
            <a href="" hrerf="#">Servicios 3</a>
          </div>
          <div class="partFooter">
            <h4>Acerca de</h4>
            <a href="#">About 1</a> 
            <a href="#">About 2</a>
            <a href="#">About 3</a>
          </div>
          <div class="partFooter">
            <h4>Redes Sociales</h4>
            <div class="social-media">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </footer>

        
      <router-view></router-view>
      <Footer></Footer> 
    </div>
  </template>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  h1,
  h2,
  h3,
  h4 {
    color: #1d273b;
    font-weight: 300;
  }
  .contenedor {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
  }
  .contenedor1 {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 60px 0;
  }
  h1 {
    font-size: 40px;
  }
  /*Header*/
 
  
  .hamburguer {
    width: 80px;
    height: 80px;
    display: none;
    text-align: center;
    z-index: 100;
    cursor: pointer;
  }
  .hamburguer > i {
    font-size: 25px;
    line-height: 80px;
  }
  .contenido-header {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contenido-header > img {
    width: 550px;
    animation: ease-in animat 3s;
  }
  @keyframes animat {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .text-header {
    margin: 0 0 0 3px;
  }
  .contenido-header {
    font-weight: 100;
    margin-top: 14px;
    color: #5d6678;
  }
  .contenido-header a {
    margin: 28px 0 0 0;
    width: 130px;
    display: inline-block;
    background: #1fde82;
    text-align: center;
    padding: 12px 0;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0 8px 32px rgb(31, 222, 130, 0.46);
  }
  .titulo {
    font-size: 50px;
  }
  
  /* About us */
   .about-us {
    background: #f2f2f2;
  }
  .contenedor-articulo {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    justify-content: space-around;
  }
  .articulo {
    width: 30%;
    background: rgba(34, 74, 255, 0.2);
    margin-bottom: 30px;
    border-radius: 10px;
    transition: 0.5s;
    padding: 45px 30px 60px 30px;
  }
  .articulo:hover {
    box-shadow: 0 4px 10px rgb(18, 29, 48, 0.26);
  }
  .articulo > i {
    font-size: 30px;
    color: #fff;
    background: #1fde82;
    display: inline-block;
    width: 70px;
    height: 70px;
    text-align: center;
    padding-top: 20px;
    border-radius: 50%;
    box-shadow: 0 8px 32px rgb(31, 222, 130, 0.4);
  }
  .articulo > p {
    font-weight: 100;
    color: #5d6678;
    margin-top: 15px;
    padding-bottom: 20px;
  }
  .articulo > a {
    color: #5d6678;
    font-weight: 400;
    text-decoration: none;
  }
  .articulo > a:hover {
    color: #1fde82;
    transition: color 1s;
  } 
  
  /* preguntas */
  
  .question-contenedor {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question-contenedor > img {
    width: 550px;
  }
  .textos-question {
    margin: 0 0 0 30px;
  }
  .textos-question p {
    font-weight: 100;
    margin-top: 14px;
    color: #5d6678;
  }
  .textos-question a {
    margin: 28px 0 0 0;
    width: 130px;
    display: inline-block;
    background: #1fde82;
    text-align: center;
    padding: 12px 0;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0 8px 32px rgb(31, 222, 130, 0.46);
  }
  
  /* Resultados */
  
  
  .resultados {
    background: #2570ff;
    padding-top: 30px;
  }
  .content-resultados {
    display: flex;
    justify-content: space-evenly;
  }
  .numbers {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .numbers .numero {
    width: 45%;
    background: rgb(255, 255, 255, .2);
    color: #fff;
    border-radius: 10px;
    padding: 40px 35px;
    margin-bottom: 20px;
  }
  .numbers .numero h4 {
    color: #fff;
    font-size: 50px;
    margin-bottom: 20px;
  }
  .numbers .numero p {
    column-rule: #f2f2f5fc;
    font-weight: 300;
  }
  .resultados-text {
    width: 40%;
  }
  .resultados-text h4 {
    color: #fff;
    font-size: 40px;
  }
  .resultados-text p {
    color: #fff;
    font-weight: 300;
    margin: 20px 0;
  }
  .resultados-text>a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #fff;
    padding: 10px 0;
    width: 120px;
    text-align: center;
    border-radius: 5px;
  }
  
  /* Services */
  .services {
    display: flex;
    justify-content: space-between;
  }
  .services>img {
    width: 500px;
  }
  .caja-habilidades {
    margin: 30px 30px 0 0;
  }
  .caja-habilidades h4 {
    font-size: 25px;
    background: #1fde82;
    width: 350px;
    border-radius: 6px;
    padding: 10px 0 10px 15px;
    margin-bottom: 10px;
  
  }
  .caja-habilidades i {
    color: #1d273b;
    font-size: 25px;
  }
  /* Foooter */
  footer {
    background: #6FF88A;
    padding: 60px 0;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto;
  }
  .partFooter {
    width: 20%;
    text-align: center;
  }
  .partFooter h4 {
    color: #1d273b;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .partFooter a {
    display: block;
    text-decoration: none;
    color: #5d6678;
    font-weight: 300;
    margin-bottom: 10px;
    transition: color .3s ease-in-out;
  }
  .partFooter a:hover {
    color: #fff;
  }
  .partFooter img {
    width: 80%;
  }
  .social-media i {
    font-size: 20px;
    display: inline-block;
    color: #adb6c7;
    border: 1px solid #adb6c7;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 38px;
    cursor: pointer;
    text-align: center;
    margin-right: 5px;
  }
  .social-media i:hover {
    color: #f2f2f2;
    background-color: #846ff8;
    border-color: #1FDE82;

  }
  </style>

  <!-- SCRIPT -->
  <script>

</script>