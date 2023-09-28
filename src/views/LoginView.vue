<!-- LoginView.vue -->
<template>
    <div>
      <Header />
      <div class="login-form">
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Correo Electrónico:</label>
            <input v-model="email" type="email" id="correo" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input v-model="password" type="password" id="password" required />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        <router-link to="/register" class="register-button">Registrarse</router-link>
        <a href="./">Home</a>
        <a href="./mainControlPanel">contorl</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue';
  import { ref } from 'vue';
  
  
 
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    // Aquí puedes realizar la lógica de inicio de sesión, como llamar a una acción de Vuex
    // y validar las credenciales.

  };
  </script>
  
  <style scoped>
  /* Estilos para la página de inicio de sesión */
  </style>
  
