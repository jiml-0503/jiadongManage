<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>
      <svg class="table"></svg>
    </div>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data () {
    return {
      
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>