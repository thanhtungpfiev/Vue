<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <button @click="handleDelete" class="delete">Delete Post</button>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { doc, deleteDoc } from "firebase/firestore";
import getPost from '@/composables/getPost';
import { projectFirestore } from "../firebase/config";

import Spinner from '../components/Spinner.vue';

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const router = useRouter();
        const { error, post, load } = getPost(props.id);

        load();

        const handleDelete = async () => {
            const docRef = doc(projectFirestore, "posts", props.id);
            await deleteDoc(docRef);
            router.push({name: 'home'});
        };

        return { error, post, handleDelete };
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

button.delete {
    margin: 10px auto;
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