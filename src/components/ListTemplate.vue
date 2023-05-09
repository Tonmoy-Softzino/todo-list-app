<script setup>
import { defineProps } from "vue";

// props are coming from the parent todoList.vue
const props = defineProps({
  task: Object,
});


const deleteTask = () => {
  props.task.deleted = true;
};

const updateTask = (task) => {
  console.log('require to change the task');
}
</script>

<!-- Script End here and HTML start -->

<template>
  <li>
    <label>
      <div>
        <input
          v-show="!task.deleted"
          type="checkbox"
          v-model="task.completed"
        />
        <span> {{ task.label }}</span>
      </div>
      <div class="button">
        <button v-show="!task.deleted" type="button" @click="deleteTask">
          Delete
        </button>
        <button v-show="!task.deleted" type="button" @click="updateTask(task.label)">
          Update
        </button>
      </div>
    </label>
  </li>
</template>

<!-- HTML end here and CSS start -->

<style scoped>
li label {
  display: flex;
}
.button {
  margin-left: 0.3rem;
}
li {
  display: flex;
}

button:hover{
  cursor: pointer;
}
</style>
