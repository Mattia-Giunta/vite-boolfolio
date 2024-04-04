<script>
import axios from 'axios';

    export default {
        name: 'MainApp',
        data() {
            return {
                arrayProjects: []
                
            }
        },
        methods: {
            getProject(){

                axios.get( 'http://127.0.0.1:8000/api/test' )
                    .then( res => {
                        this.arrayProjects = res.data.projects
                    })
            }
            
        },
        mounted() {
            this.getProject()
        },
    }


</script>

<template>

    <main>

        <h3>Main dove stampare i Project</h3>

        <ul>
            
            <li v-for="(element,index) in arrayProjects"
                :key="element.id">
                <a href="#">
                    {{ element.title }}
                </a>
               

            </li>
        
        
        </ul>

    </main>

    

</template>

<style scoped>

</style>
