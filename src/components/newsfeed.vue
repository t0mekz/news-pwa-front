<template>
  <div class="grid-container">
    <news-tile v-for="news in newsfeed" :key="news.id" :news="news" />
  </div>
</template>

<script>
import NewsTile from '@/components/news-tile';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Newsfeed',
  components: {
    NewsTile
  },
  props: ['query'],
  computed: {
    ...mapState({
      newsfeed: 'news'
    })
  },
  created() {
    let path = `https://newsapi.org/v2/top-headlines?country=pl&apiKey=APIKEY`;
    if (this.query) {
      path = `https://newsapi.org/v2/top-headlines?q=${this.query}&apiKey=APIKEY`;
    }
    this.fetch( {path: path });
  },
  methods: {
    ...mapActions(['fetch']),
  }
};
</script>
