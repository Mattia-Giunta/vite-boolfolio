<script>

import axios from 'axios';
import AppProject from '../components/AppProject.vue'
import {store} from '../store.js'

export default {
    name: 'ProjectList',
    components: {
        AppProject
    },
    data() {
        return {
            arrayProjects: [],
            currentPage: '',
            lastPage: '',
            store

        }
    },
    methods: {
        getProject(projectApiPage) {

            axios.get(`${store.apiBaseUrl}/api/projects`,
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

 
<div class="container mt-5 ">
            
    <h3>Main dove stampare i Project</h3>

        <div>
          
          <!-- ciclare il componente appPost -->
          <AppProject
                v-for=" (element, index) in arrayProjects"
                :key="element.id"
                :title=" element.title "
                :content=" element.content "
                :slug=" element.slug "
                :type=" element.type ? element.type.name : '' "
                :technology="element.technologies "
                :image="element.cover_image"/>

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

    </div>

 
</template>

<style scoped>

</style>