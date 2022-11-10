<template>
  <div class="productos">
    <img src="../assets/logo1.svg" alt="" />
    <h1><span>Helados</span> Yogui</h1>
    
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt voluptatem ad debitis nam! Autem ex placeat, eaque
       id temporibus, esse veritatis similique odit consequatur voluptatibus perspiciatis adipisci iure culpa.</p>
     <Prueba/>
     <!-- <blog/> -->
     <router-view/>

  </div>
</template>

<style scoped>
.splashcreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100hv;
}
h1 {
  color: var(--brand-blue);
}
h1 span {
  color: var(--brand-green);
}
.productos {
     width: 100%;
    height: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<!-- SCCRIPT -->

<script>
import Prueba from '../components/Prueba.vue'
// import Blog from '../views/Blog.vue'
export default {
    name:'test',
  components:{
   Prueba,
}
}
</script>