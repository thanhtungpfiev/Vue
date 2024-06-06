<template>
    <h1>Real-time Listeners</h1>
    <div v-for="post in posts" :key="post.id">
        <div>{{ post.title }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore';

import { projectFirestore } from '../firebase/config';

export default {
    setup() {
        const posts = ref([]);

        const q = query(collection(projectFirestore, 'posts'), orderBy('createdAt', 'desc'));

        onSnapshot(q, (snap) => {
            console.log('snapshot: ', snap);
            let docs = snap.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            console.log('documents: ', docs);
            posts.value = docs;
        });

        return { posts };
    }
}
</script>

<style></style>