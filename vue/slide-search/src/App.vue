<template>
  <div>
    <!-- <SlideSearch></SlideSearch> -->
    <slide-search :showSearchPage="showSearchPage"/>
    <ul class="main">
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
      <li>ziyin_666</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index';

export default {
  name: 'App',
  data () {
    return {
      showSearchPage: false
    }
  },
  components: {
    SlideSearch
  },
  // 已经转化为真实 dom
  mounted:function() {
    const ul = document.querySelector('.main');
    ul.addEventListener('scroll', () => {
      if(ul.scrollTop === 0) {
        this.showSearchPage = false;
      }
      if(ul.scrollTop > 10) {
        this.showSearchPage = true;
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}
.main::-webkit-scrollbar {
  display: none;
}
li {
  margin-top: 20px;
}
</style>
