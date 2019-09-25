<template>
  <div class="main">
    <div class="gauntlet">
      <button @click="disAppear">消失</button>
    </div>
    <Content :heroes="heroes"/>
  </div>
</template>
<script>
import Content from './Content'
import { heroes } from './heroes'
export default {
  data() {
    return {
      heroes: heroes
    }
  },
  components: {
    Content,
    lostHeroId: []
  },
  methods: {
   disAppear() {
    this.lostHeroId = this.heroes.slice.sort(() => 0.5 - Math.random()).slice(0, Math.ceil(this.heroes.lengyh / 2))
     .map(hero => hero.id);
   } 
  }
}
</script>
<style scoped>

</style>