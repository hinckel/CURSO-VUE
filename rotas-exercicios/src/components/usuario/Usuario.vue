<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view />
    <button sucesso @click="goToBegin()">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToBegin() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
  
</style>