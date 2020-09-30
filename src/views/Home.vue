<template>
  <div class="home">
    <b-button @click="login()" type="is-danger">Login With Google</b-button>


  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'Home',
  methods: mapActions('auth', ['login']),
};
</script>
