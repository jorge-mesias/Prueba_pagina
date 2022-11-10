<template>
    <div class="menu">
        
        <h1>Cursos </h1>
        <ul>
            <li>
                <router-link :to="{name: 'cursomenu'}"> Curso A</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cursomenub'}"> Curso B</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cursomenuc'}"> Curso C</router-link>
            </li>
        </ul>
        
    </div>
</template>
<style>
.menu {
    
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>