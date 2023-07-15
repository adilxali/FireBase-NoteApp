<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Copyright from './components/Copyright.vue';
</script>
<template>
<div class="position-relative h-100">
<Navigation/>
<div>
  <RouterView />
</div>

<Copyright/>

</div>
</template>
