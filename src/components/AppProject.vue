<script> 
import {store} from '../store.js'

export default {
  name: "AppProject",
  props: ["title", "content", "slug", "type", "technology", "image"],
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {},
};

</script>

<template>

    <router-link :to="{ name: 'single-project', params: { slug: slug } }">

        <div class="card mb-5 w-50">

            <img
                class="card-img-top"
                :src="`${store.apiBaseUrl}/storage/${image}`"
                alt="Title"
            />

            <div class="card-body">

                <h4 class="card-title">{{ title }}</h4>

                <p class="card-text">

                    {{ content }}

                </p>

                <p>Type: {{ type }}</p>

                <p>

                    <span
                        class="me-3 btn btn-primary"
                        v-for="(element, index) in technology"
                        :key="element.id"
                    >
                    {{ element.name }}
                    </span>

                </p>
                
            </div>

        </div>

    </router-link>

</template>

<style scoped></style>
