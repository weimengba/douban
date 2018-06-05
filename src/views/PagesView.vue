<template>
  <div class="pages-view">
  	<header-bar></header-bar>
  	<router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from '@/components/HeaderBar'
  export default {
  	name: 'PageView',
  	components: {
  	  HeaderBar
  	}
  }
</script>