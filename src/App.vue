<script setup>
    import MainComp from './components/HomePage.vue';
// import ListAddForm from './components/ListAddForm.vue'

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
