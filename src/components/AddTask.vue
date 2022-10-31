<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/index.js";
import {collection, addDoc} from "firebase/firestore";
import { useToast } from '../composables/Toast.js';
const router = useRouter();
const title = ref('');
const description = ref('');
const todoCollectionRef = collection(db, "user");
const addTodo = async () => {
  await addDoc(todoCollectionRef, {
  title: title.value,
  description: description.value,
  
  done: false,
  date: new Date().toLocaleString()
  });

  title.value = "";
  description.value = "";
  useToast('success','Task Added Successfully')
  router.push("/task");

};
</script>
<template>
  <div class="container">
    <h1 class="display-2 text-center">Add Task</h1>
    <div class="form mx-auto" style="max-width: 50%">
      <form @submit.prevent="addTodo">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Title</label
          >
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            v-model="description"
            class="form-control"
            id="textarea"
            rows="10"
            placeholder="Description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary float-end px-5" :disabled="!title.length">
          Add
        </button>
      </form>
    </div>
  </div>
</template>
