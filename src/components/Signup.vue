<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
const email = ref('');
const password = ref('');
const auth = getAuth();
const signup = async () => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email.value, password.value);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

</script>
<template>
    <div>
        <form @submit.prevent="signup">
        <h2>Signup</h2>
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="password..." v-model="password" />
        <button type="submit" class="btn btn-primary">Signup</button>
        </form>
    </div>
</template>