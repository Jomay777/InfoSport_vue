<template>
    <Header/>
    
    <div class="home-container">
        <h1>{{ associationName }}</h1>
        <p>Bienvenido al sistema de gestión de información del fútbol de salón en Bermejo</p>
        <div class="home-button">
            <router-link to="/login" class="login-button" >Iniciar Sesión</router-link>
            
            <router-link to="/register" class="register-button">Registrarse</router-link>
        </div>
    </div>
    
</template>

<script setup>
    import Header from '../components/Header.vue';
    
    const associationName= "Asociación Municipal de Futbol de Salón Bermejo";
</script>
   
<style scoped>
@import '../scss/componentsStyles/HomeView.scss';
</style>

