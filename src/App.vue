<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Copyright from './components/Copyright.vue';
</script>
<template>
  <Navigation/>
  <div>
    <RouterView />
  </div>
  <Copyright/>
</template>