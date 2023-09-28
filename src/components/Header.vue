<template>
    <header class=" head">
        <div class="name">        
            <h2>{{ associationName }}</h2>
        </div>
        <div class="logo">
            <img  @click="reload" src="../assets/vue.svg" alt="logo"/>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue';

    const associationName = ref('A.M.F.S.B.');
    const reload = () => {
        location.reload();
    };
</script>
<style scoped>
@import '../scss/componentsStyles/header.scss';
</style>
