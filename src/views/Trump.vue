<template>
  <div>
    <h1>
      Trump
    </h1>
    <Newsfeed query='trump'/>
  </div>
</template>

<script>
import Newsfeed from '@/components/newsfeed';

export default {
  name: 'Trump',
    components: {
    Newsfeed
  }
};
</script>