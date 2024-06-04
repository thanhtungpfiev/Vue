<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import getPost from '@/composables/getPost'

import Spinner from '../components/Spinner.vue'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const { error, post, load } = getPost(props.id)

        load()

        return { error, post }
    },
}
</script>

<style scoped>
.tags a {
    margin-right: 10px;
}

.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}

/* .post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: green;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
} */
</style>