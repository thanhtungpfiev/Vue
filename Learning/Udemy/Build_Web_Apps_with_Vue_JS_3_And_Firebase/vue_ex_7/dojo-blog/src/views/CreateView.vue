<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" type="text" required />
            <label>Content:</label>
            <textarea v-model="body" required></textarea>
            <label>Tags (hit enter to add a tag):</label>
            <input @keydown.enter.prevent="handleKeydown" v-model="tag" type="text" />
            <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
            <button>Add Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import router from "../router";
import getPosts from '../composables/getPosts'


export default {
    setup() {
        const title = ref("");
        const body = ref("");
        const tags = ref([]);
        const tag = ref("");

        const handleKeydown = () => {
            tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
            }
            tag.value = "";
        };

        const handleSubmit = async () => {
            // Fetch the current posts
            const { posts, error, load } = getPosts()
            await load()

            // Find the highest ID
            const highestId = Math.max(...posts.value.map(post => Number(post.id)));

            // Prepare the new post
            const post = {
                id: String(highestId + 1),
                title: title.value,
                body: body.value,
                tags: tags.value,
            };

            // Add the new post
            await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            })
                .then(() => {
                    router.push("/");
                })
                .catch((err) => console.log(err));
        };

        return { body, title, tags, tag, handleKeydown, handleSubmit };
    },
};
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}

label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}

.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>
