<script setup>
// import { defineProps } from "vue";
import List from "./ListTemplate.vue";

defineProps({
  tasks: Array,
  title: String,
});
</script>

<template>
  <section>
    <h4>{{ title }}</h4>
    <p v-show="!tasks.length">No tasks to show</p>
    <div>
      <ul>
        <List
          v-for="task in tasks"
          :task="task"
          :label="task.label"
          :key="task.id"
          :title="title"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  min-width: 23rem;
  min-height: 20rem;
  border: 1px solid black;
  background: rgb(215, 199, 199);
  padding: 0.8rem;
  /* padding-left: .2rem; */
}
h2 {
  text-align: center;
}
ul {
  margin-top: 0.5rem;
}
</style>
