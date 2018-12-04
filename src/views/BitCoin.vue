<template>
  <div>
    <h1>
      Bitcoin
    </h1>
    <Newsfeed query='bitcoin'/>
  </div>
</template>

<script>
import Newsfeed from '@/components/newsfeed';

export default {
  name: 'BitCoin',
    components: {
    Newsfeed
  }
};
</script>