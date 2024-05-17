<template>
  <!-- <h1>My First Vue App!</h1> -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <!-- <Modal heading="Sign up for the Givaway!" text="Grab your ninja swag for half price!" /> -->
  <div v-if="showModal">
    <MyModal theme='' @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </MyModal>
  </div>
  <button @click="toggleModal">open modal</button>
  <p></p>
  <div v-if="showModal2">
    <MyModal theme='' @close="toggleModal2">
      <h1>Sign up to the Newsletter</h1>
      <p>For updates and promo codes!</p>
    </MyModal>
  </div>
  <button @click="toggleModal2">open modal 2</button>

</template>

<script>
import MyModal from './components/MyModal'

export default {
  name: 'App',
  components: { MyModal },
  data() {
    return {
      title: 'My First Vue App!',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
