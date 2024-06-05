<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";

import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getPosts();
    const route = useRoute();

    load();

    const postsWithTag = computed(() => {
      const tag = route.params.tag;
      return posts.value.filter((post) => post.tags.includes(tag));
    });

    return { posts: postsWithTag, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
