<template>
    <div class="alumnos">
        <div class="alumnos_left">
            <h1>Aqui va el AlumnosPage</h1>
            <Menu></Menu>

        </div>
        <div class="alumnos-rigth">    
           <router-view/>
        </div>
        
    </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
    name: 'menu',
    components: {
        Menu,
    }

}

</script>