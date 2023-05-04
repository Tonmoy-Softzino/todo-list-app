<script setup>
import { defineProps } from "vue";
const props = defineProps({
  task: Object,
});

const deleteTask = () => {
  props.task.deleted = true;
}
</script>


<template>
    <li>
    <label>
      <div>
        <input
          v-show="!task.deleted "
          type="checkbox"
          v-model="task.completed"
        />
        <span>
          {{ task.label }}</span
        >
      </div>
      <div class="button">
        <button v-show="!task.deleted" type="button" @click="deleteTask">remove</button>
      </div>
    </label>
  </li>
</template>

<style scoped>
  label{
    display: flex;
  }
  .button{
    margin-left: .3rem;
  }
  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>