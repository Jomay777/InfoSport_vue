<template>
    <div class="panel-control">
      <div class="menu-icon" @click="toggleSidebar">
        <!-- Aquí coloca tu icono, por ejemplo, un icono de hamburguesa -->
        <img src="../assets/vue.svg"/>
        
      </div>
      <nav class="sidebar" :class="{ 'active': sidebarActive }">
        <ul>
          <!-- Opciones de menú -->
        <li>
          <router-link to="/panel-control/gestion-usuarios">Gestión de Usuarios</router-link>
        </li>
        <li>
          <router-link to="/panel-control/gestion-jugadores">Gestión de Jugadores</router-link>
        </li>
        <li>
          <router-link to="/panel-control/gestion-campeonatos">Gestión de Campeonatos</router-link>
        </li>
        </ul>
      </nav>
      <div class="content">
        <!-- Contenido principal -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarActive: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el panel de control y el menú lateral */
  .panel-control {
    display: flex;
  }
  
  .menu-icon {
    cursor: pointer;
  }
  
  .sidebar {
    width: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    overflow-x: hidden;
    transition: 0.3s;
  }
  
  .sidebar.active {
    width: 250px; /* Ancho del menú cuando está activo */
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
    transition: 0.3s;
  }
  
  /* Estilos para los ítems del menú */
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding: 10px;
    text-align: center;
  }
  
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
    display: block;
  }
  
  /* Estilos para el icono del menú */
  .menu-icon {
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    color: #fff;
  }
  
  /* Estilos para el icono del menú cuando está activo */
  .menu-icon.active {
    background-color: #333;
  }
  </style>
  