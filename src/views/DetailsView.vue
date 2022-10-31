<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { db } from "../firebase/index.js";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
const taskCollectionRef = collection(db, "user");
const route = useRoute();
const task = ref([]);
const taskid = route.params.id;
const getitem = async () => {
  const docRef = doc(taskCollectionRef, taskid);
  onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      task.value = doc.data();
    } else {
      console.log("No such document!");
    }
  });
};
const taskDone = (id) => {
  updateDoc(doc(taskCollectionRef, id), {
    done: !task.done,
  });
  console.log(task.value.done)
};
onMounted(() => {
  getitem();
});
</script>
<template>
  <div class="card w-50 mx-auto mt-3">
  <div class="card-body">
    <h5 class="card-title display-4 text-uppercase fs-3 text-decoration-underline text-center"> {{task.title}}</h5>
    <p class="card-text display-6 text-start"><span class="h2">Description:</span> <br/>{{task.description}}</p>
    <div class="d-flex justify-content-end m-2">
      <router-link :to="{ name: 'edit' , params: { id: taskid}}" ><button class="btn btn-primary">Edit</button></router-link>
      <button class="btn btn-success mx-2" @click="taskDone(taskid)">&check;</button>
    </div>    
  </div>
</div>
</template>
