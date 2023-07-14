<script setup>
// import { defineProps } from "vue";

// props are coming from the parent todoList.vue
const props = defineProps({
  task: Object,
});

// const editing = ref(false);
// const editInput = ref(null);

const updateTask = () => {
  editing.value = true;
    // nextTick(() => {
    //   editInput.value.focus();
    // });
};

// const textLength = computed(() => {
//   return props.task.label?.length * 10 ?? 40;
// });


const deleteTask = () => {
  const res = confirm("Are you sure to delete the task?");
  if (res) props.task.deleted = true;
};

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
        <span> 
          <!-- <input
          :style="{ width: textLength + 'px' }"
          ref="editInput"
          type="text"
          :placeholder="task.label"
          :disabled="!editing"
          v-model="task.label"
          @keydown.enter="editing = false"
          @focusout="editing = false"
          /> -->
          {{ task.label }}
        </span>
      </div>
      <div class="button">
        <button v-show="!task.deleted" type="button" @click="deleteTask">
          Delete
        </button>
        <!-- <button 
         type="button" @click="updateTask()">
          Update
        </button> -->
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
