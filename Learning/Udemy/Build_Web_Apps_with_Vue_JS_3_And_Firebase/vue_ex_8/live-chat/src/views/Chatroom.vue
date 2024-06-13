<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'

import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'


export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
        const router = useRouter()
        const { user } = getUser()
        watch(user, (newUser) => {
            if (!newUser) {
                router.push({ name: "Welcome" })
            }
        })
    }
}
</script>

<style></style>