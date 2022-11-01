<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {db} from "../firebase/index.js";
import { updateDoc, doc } from '@firebase/firestore';
import { useToast } from '../composables/Toast.js';
import Swal from 'sweetalert2';
const newTitle = ref('');
const newDescription = ref('');
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const updateTask = ()=>{
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
            updateDoc(doc(db, 'user',id), {
                title: newTitle.value,
                description: newDescription.value,
                date: new Date().toLocaleString()
            });
            newTitle.value = '';
            newDescription.value = '';
          useToast('success','Task Updated Successfully')
          router.push('/task');
        } else if (result.isDenied) {
            newTitle.value = '';
            newDescription.value = '';
          useToast('Changes are not saved', '', 'info')
        }
      })
}
</script>
<template>
    <div class="container">
      <h1 class="display-2 text-center">Edit Task</h1>
      <div class="form mx-auto" style="max-width: 80%">
        <form action="" @submit.prevent="updateTask">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Title</label
            >
            <input
              v-model="newTitle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              v-model="newDescription"
              class="form-control"
              id="textarea"
              rows="10"
              placeholder="Description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success float-end px-5" :disabled="!newTitle.length && !newDescription.length">
            &check; Update
          </button>
          <router-link :to="{ name: 'detail', params: { id: id}}"><button type="button" class="btn btn-danger float-end px-5 mx-2">
            &cross; Cancel
          </button></router-link>
        </form>
      </div>
    </div>
  </template>