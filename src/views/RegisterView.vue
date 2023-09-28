<!-- Registro.vue -->
<template>
    <div>
      <Header />
      <div class="registration-form">
        <h1>Registrarse</h1>
        <form @submit.prevent="register">
          <!-- Campos para información personal -->
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input v-model="nombre" type="text" id="nombre" required>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input v-model="apellido" type="text" id="apellido" required>
          </div>
          <!-- Campo para selección de rol -->
          <div class="form-group">
            <label for="rol">Rol:</label>
            <select v-model="rol" id="rol" required>
              <option value="Comité Técnico">Comité Técnico</option>
              <option value="Directiva">Directiva</option>
              <option value="Delegado de Club">Delegado de Club</option>
              <option value="Planiller@">Planiller@</option>

            </select>
          </div>
          <!-- Campo para subir una imagen -->
          <div class="form-group">
            <label for="imagen">Imagen de Perfil:</label>
            <input type="file" id="imagen" @change="handleImageUpload">
          </div>
          <button type="submit">Registrarse</button>
        </form>
        o
        <!--Campo para navegar -->
        <router-link to="/login" >Iniciar Sesión</router-link>
        <router-link to="/" >Home</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue';
  import { ref } from 'vue';
  
  const nombre = ref('');
  const apellido = ref('');
  const rol = ref('Delegado de Club');
  const imagen = ref(null);
  
  const register = () => {
    // Aquí puedes realizar la lógica de registro, como llamar a una acción de Vuex
    // y enviar los datos del formulario, incluida la imagen.
    
  };
  
  const handleImageUpload = (e) => {
    // Maneja la carga de la imagen y actualiza la referencia 'imagen'.
    imagen.value = e.target.files[0];
  };
  </script>
  
  <style scoped>
  /* Estilos para la página de registro */
  </style>
  