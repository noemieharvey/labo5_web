<template>
    <div>
        <input v-model="task.name">
        <button v-if="task.name !== ''" v-on:click="updateSelf">Update</button>
        <button v-on:click="deleteTask(task.id)">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: ['update', 'deleteTask', 'task'],
        methods: {
            updateSelf() {
                this.update(this.task.id, this.task.name)
            }
        }
    }
</script>

<style scoped>

</style>
