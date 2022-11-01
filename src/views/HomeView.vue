<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
limit,
} from "firebase/firestore";
import { db } from "../firebase/index.js";
const loading = ref(false);
const task = ref([]);
const taskCollectionRef = collection(db, "user");
const taskCollectionQuery = query(taskCollectionRef, orderBy("title", "asc"),limit(12));
const getitem = ()=>{
  onSnapshot(taskCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        title: doc.data().title,
        done: doc.data().done,
        date: doc.data().date
      };
      fbTodos.push(todo);
    });
    task.value = fbTodos;
  });
}
onMounted(() => {
  // const querySnapshot = await getDocs(collection(db, "user"));
  // let fbTodos = [];
  // querySnapshot.forEach((doc) => {
  //   // todos.value.push({ id: doc.id, ...doc.data() });
  //   console.log(doc.id, " => ", doc.data());
  //   const todo = {
  //     id: doc.id,
  //     title: doc.data().title,
  //     completed: doc.data().done
  //   }
  //   fbTodos.push(todo);
  // });
  // todos.value = fbTodos;
  getitem();
});

</script>
<template>
  <div class="container">
    <div class="row flex-row">
      <div class="col-sm-12 d-flex justify-content-center flex-wrap">
        <div v-if="!task.length">
            <h1 class="display-1">No Task Availaible</h1>
          </div>
        <div v-else v-for="todo in task" class="col-sm-12 col-md-4 col-lg-3">
          <div class="card m-1" style="max-width: 18rem">
            <div class="card-body">
              <h5 class="card-title">{{ todo.title }}</h5>
              <p class="card-text">
              Added on: <br/>
                {{ todo.date }}
              </p>
              <div class="col-12 d-flex justify-content-around">
                <router-link :to="{ name: 'detail' , params: { id: todo.id}}" class="btn btn-primary">View</router-link>
                <router-link :to="{ name: 'edit', params: {id: todo.id}}"><button class="btn btn-secondary">Edit</button></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end" v-if="task.length>=12">
          <div>
            <router-link :to="{name: 'task'}"><button  class="btn btn-primary">More Task</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.done {
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
}
.delete {
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  margin: 20px;
}
.done:hover {
  background-color: #9fc79f;
}
.delete:hover {
  background-color: #f48787;
}
</style>
