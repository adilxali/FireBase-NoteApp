<script setup>
//import { getAuth, signOut } from '@firebase/auth';
// import { useRouter } from 'vue-router';
// import { useToast } from '../composables/Toast.js';
// const router = useRouter();
// const auth = getAuth();
// const logout = () => {
//   signOut(auth)
//     .then(() => {
//       console.log('logged out');
//       useToast('success', 'Logged Out');
//     })
//     .catch((error) => {
//       console.log(error.message);
//       useToast('error', error.message);
//     });
//     router.push('/')
// };
 </script>
<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Firebase Task Manger</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/addtask">Add Task</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/task">Tasks</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link "  :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link "  :to="{name: 'register'}">Signup</router-link>
        </li>
        <li class="nav-item"  @click="logout">
          signOut
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>