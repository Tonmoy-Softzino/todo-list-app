<script setup>
import { defineProps } from "vue";
import List from "./list.vue";

defineProps({
  tasks: Array,
  title: String,
});
</script>

<template>
  <section>
    <h3>{{ title }}</h3>
    <p v-show="!tasks.length">No tasks to show</p>
    <div>
      <ul>
        <List
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          :title="title"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
  section{
    width: 100%;;
    border: 1px solid black;
    background: rgb(215, 199, 199);
    padding: .8rem;
    /* padding-left: .2rem; */
  }
  h2{
    text-align: center;
  }
  ul{
    list-style-type: none;
    display: flex;
    float: left;
  }
</style>
bg-cyan-500 shadow-lg shadow-cyan-500/50 p-3 rounded-lg