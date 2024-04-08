<script>

import axios from 'axios';

import { store } from '../store';



export default {
    name: 'SingleProject',

    data() {
        return {
            project: [],
            store
        }
    },
    methods: {
        getSingleProject(){
            axios.get(`${store.apiBaseUrl}/api/test/${this.$route.params.slug}`)
                .then(res => {
                    if (res.data.success) {
                        this.project = res.data.projects    
                    } else {

                    }
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }

}


</script>

<template>
    <div class="container">
    
        <h1>{{ project?.title }}</h1>

        <img class="card-img-top" :src="`${store.apiBaseUrl}/storage/${project.cover_image}`" alt="Title" />
        <div class="card-body">
            <h4 class="card-title">{{ project?.title }}</h4>
            <p class="card-text">
                {{ project?.content }}
            </p>
            <p>
                Type: {{ project.Type?.name }}
            </p>
            <p>
                Technology:
                <span class="me-3 btn btn-primary" v-for="(element, index) in project?.technologies" :key="element.id">
                    {{ element?.name }}
                </span>
            </p>
        </div>
    
    </div>

  
 
</template>

<style scoped>

</style>
