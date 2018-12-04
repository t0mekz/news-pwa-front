<template>
  <div>
    <h1>
      World Cup
    </h1>
    <Newsfeed query='world cup'/>>
  </div>
</template>

<script>
import Newsfeed from '@/components/newsfeed';

export default {
  name: 'WorldCup',
    components: {
    Newsfeed
  }
};
</script>