<script>
import axios from 'axios';

export default {
    name: 'MainApp',
    data() {
        return {
            arrayProjects: [],
            currentPage: '',
            lastPage: '',

        }
    },
    methods: {
        getProject(projectApiPage) {

            axios.get('http://127.0.0.1:8000/api/test',
                {
                    params: {
                        page: projectApiPage
                    }
                })
                .then(res => {
                    this.arrayProjects = res.data.projects.data
                    this.currentPage = res.data.projects.current_page
                    this.lastPage = res.data.projects.last_page
                })
        }

    },
    mounted() {
        this.getProject(1)
    },
}


</script>

<template>

    <main>

        <h3>Main dove stampare i Project</h3>

        <div>
            <p v-for="(element, index) in arrayProjects" :key="element.id">

                <a href="#">
                    {{ element.title }}
                </a>

                <!-- <span class="ms-3">{{ element.type.name }}</span> -->

                <span class="ms-3 bg-success " v-for="(elements, index) in element.technologies" :key="index">

                    {{ elements.name }}

                </span>

            </p>

            <nav aria-label="Page navigation example">

                <ul class="pagination">

                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <button class="page-link" @click="getProject(currentPage - 1)">Previous</button>
                    </li>

                    <li class="page-item" v-for=" (element, index) in lastPage " :key="index">
                        <button class="page-link" @click="getProject(element)">{{ element }}</button>
                    </li>

                    <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                        <button class="page-link" @click="getProject(currentPage + 1)">Next</button>
                    </li>

                </ul>

            </nav>

        </div>

    </main>



</template>

<style scoped></style>
