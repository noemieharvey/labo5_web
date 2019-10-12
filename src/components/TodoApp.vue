<template>
    <div>
        <h2>New task</h2>
        <input v-model="taskInput" placeholder="Enter new task">
        <button v-if="taskInput !== ''" v-on:click="createTask">Save</button>
        <h2>My tasks</h2>
        <Task
              v-for="task of tasks"
              v-bind:key="task.id"
              v-bind:task="task"
              v-bind:deleteTask="deleteTask"
              v-bind:update="updateTask"
        />
    </div>
</template>

<script>
    import Task from "@/components/Task";
    import * as api from "@/scripts/api"

    export default {
        name: "TodoApp",
        components : {
            Task
        },
        data: () => ({
            taskInput: '',
            tasks: []
        }),
        methods: {
            createTask() {
                try {
                    api.createTask(this.taskInput).then((newTask) => {
                        this.taskInput = ''
                        this.tasks.push(newTask)
                    })
                } catch (e) {
                    alert(e)
                }
            },
            async deleteTask(taskId) {
                try {
                    await api.deleteTask(taskId)
                    const taskIndex = this.tasks.findIndex(task => task.id = taskId)
                    this.tasks.splice(taskIndex, 1)
                } catch (e) {
                    alert(e)
                }
            },
            updateTask(taskId, newName) {
                try {
                    api.updateTask(taskId, newName).then((updatedTask) => {
                        const taskIndex = this.tasks.findIndex(task => task.id = taskId)
                        this.tasks[taskIndex].name = updatedTask.name
                    })
                } catch (e) {
                    alert(e)
                }
            }
        },
        created() {
            try {
                api.getTasks().then((tasks) => {
                    this.tasks = tasks;
                });
            } catch (e) {
                alert(e)
            }
        }
    }
</script>

<style scoped>

</style>
