<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
const email = ref('');
const password = ref('');
const login = async () => {
  try {
    const res = await signInWithEmailAndPassword(email.value, password.value);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
</script>
<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
