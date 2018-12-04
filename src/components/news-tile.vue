<template>
  <div class="grid-item">
    <img :src="news.urlToImage" alt="">
    <h3>{{news.title}}</h3>
    {{news.author}}
    <p>{{news.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'news-tile',
  props: ['news']
};
</script>

