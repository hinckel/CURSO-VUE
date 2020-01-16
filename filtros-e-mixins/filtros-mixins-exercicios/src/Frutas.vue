<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta"> {{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">

    <hr>
    <p>{{global}}</p>
  </div>
</template>

<script>
import frutasMixin from './FrutasMixins'

export default {
  mixins: [frutasMixin]
}
</script>

<style lang="css">
  
</style>