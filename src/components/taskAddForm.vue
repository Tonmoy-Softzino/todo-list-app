
<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addTask"]);
let newTask = ref("");

const addTask = () => {
  emit("addTask", newTask.value);
  newTask.value = "";
};
</script>

<template>
    <form @submit.prevent="addTask">
        <input v-model="newTask" type="text" placeholder="Task name">
        <button type="submit" :disabled="!newTask.length">Add</button>
    </form>
</template>

<style scoped>
    form{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        padding: .5rem;
        background: white;
        color: rgb(55 65 81);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        font-size: 700;
    }
    input:focus{
        outline: none;
    }

    button{
        padding: .5rem;
        margin-left: .2rem;
        background: white;
        border-left-width: 4px;
        color: indigo;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
</style>