<script setup>
import { ref, onMounted } from 'vue';
import { db } from "../firebase/index.js"
import { collection,deleteDoc,doc, onSnapshot, updateDoc } from '@firebase/firestore';
import { async } from '@firebase/util';
import { useToast } from '../composables/Toast.js';
const  task = ref([]);
const taskCollectionRef = collection(db, 'user');
const getTask =  ()=>{
    onSnapshot(taskCollectionRef, (querySnapshot)=>{
        const fbtask= [];
        querySnapshot.forEach((doc)=>{
            const task = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                done: doc.data().done
            }
            fbtask.push(task)
        })
        task.value=fbtask;
    })
}
onMounted(()=>{
    getTask();
    console.log("task")
})
const taskDone = (id) => {
  const index = task.value.findIndex((todo) => todo.id === id);
  updateDoc(doc(taskCollectionRef, id), {
    done: !task.value[index].done,
  });
  console.log(task.done)
};
const deleteTask = (id)=>{
    deleteDoc(doc(taskCollectionRef,id));
    useToast('error','Task Successfully Deleted')
}
</script>
<template>
    <div class="container">
      <div class="row flex-row">
        <div class="col-sm-12 d-flex flex-wrap">
          <div v-if="!task.length">
            <h1 class="display-1">No Task Availaible</h1>
          </div>
          <div v-else v-for="todo in task" class="col-sm-12 col-md-4 col-lg-3">
            <div class="card m-1" style="max-width: 18rem">
              <div class="card-body" :class="{'complete': done}">
                <h5 class="card-title">{{ todo.title }}</h5>
                <p class="card-text">
                  {{ todo.date }}
                </p>
                <h5 v-if="!todo.done" class="text-danger">
                task  Panding....
                </h5>
                <h4 v-else class="text-success ">
                  Task Completed
                </h4>
                <div class="d-flex justify-content-between" style="max-width: 16rem;">
                  <router-link :to="{ name: 'detail' , params: { id: todo.id}}" ><button class="btn btn-primary">View</button></router-link>
                  <button class="btn btn-danger" @click="deleteTask(todo.id)">&cross;Del</button>
                  <button v-if="!todo.done" class="btn btn-success mx-2" @click="taskDone(todo.id)">&check;Done</button>
                  <button v-else class="btn btn-outline-secondary mx-2" @click="taskDone(todo.id)">Not Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .complete{
 background-color: gray;
  }
  </style>
