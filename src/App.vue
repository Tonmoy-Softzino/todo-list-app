<script setup>
    import MainComp from './components/mainComp.vue';
import TaskAddForm from './components/taskAddForm.vue'

    const addtask = (name) => {
    toDos.value.push({
    id: toDos.value.length + 1,
    label: name,
  });
};
</script>

<template>
    
    <MainComp />
    <!-- <TaskAddForm @addTask="addtask" /> -->
</template>

<style scoped>

</style>
