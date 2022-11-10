<template>
    <div class="recet">
        
        <h1>Libro de recetas</h1>
        <Menu1/>
        <Menu2/>
        <router-view/>
    </div>
</template>

<!-- CSS -->
<style>
.recet {  
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

</style>

<!-- SCRIPT -->
<script>
import  Menu1 from '@/components/receta/Menu1.vue'
import Menu2 from '@/components/receta/Menu2.vue'

export default {
    name:'menu',
  components:{
    Menu1,
    Menu2,
}
}
</script>
