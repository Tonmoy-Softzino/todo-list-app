<script setup>
import TaskAddForm from "./ListAddForm.vue";
import { ref, computed, watch, watchEffect } from "vue";
import TodoLists from "./todoLists.vue";
// import util from './utill'

const toDos = ref([]);

const { saveDataToLocal, set } = util;

watchEffect(() => {
  if (sessionStorage.getItem("tasks")) {
    toDos.value = [...JSON.parse(sessionStorage.getItem("tasks"))];
  } else {
    saveDataToLocal(toDos.value);
  }
});

watch(toDos,(newVal)=>{saveDataToLocal(newVal)},{deep:true})

const completed = computed(() => {
  return toDos.value.filter((todo) => todo.completed && !todo.deleted);
});

const inCompleted = computed(() => {
  return toDos.value.filter((todo) => !todo.completed && !todo.deleted);
});

const deletedTasks = computed(() => {
  return toDos.value.filter((todo) => todo.deleted);
});

const taskAddByEmit = (name) => {
  toDos.value.push({
    id: toDos.value.length + 1,
    label: name,
    completed: false,
    deleted: false,
    updated: false
  });
};
</script>

<template>
  <section>
    <h2>To Do Application</h2>
    <div class="taskSection">
      <TodoLists :tasks="inCompleted" title="Incomplated Task" />
      <TodoLists :tasks="completed" title="Complated Task" />
    </div>
    <div>
      <TaskAddForm @addTask="taskAddByEmit" />
    </div>
      <div class="deleteSection">
        <TodoLists :tasks="deletedTasks" title="Deleted Task" />
      </div>
  </section>
</template>

<style scoped>
  .taskSection{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    /* padding: .5rem 0; */
  }

  .deleteSection{
    margin-top: 1rem;
    padding-top: .5rem;
  }
  h2{
    text-align: center;
    padding-bottom: 0;
  }
</style>
