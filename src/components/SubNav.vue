<template>
  <div class="sub-nav">
    <div class="quickNav" v-if="mold === 'quickNav'">
      <ul class="quick-nav">
      	<li><router-link :to="{name: 'MovieView'}">影院热映</router-link></li>
      	<li><router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link></li>
      	<li><router-link :to="{name: 'RegisterView'}">注册账号</router-link></li>
      	<li>
      	  <template v-if="currentUser.email">
      	  	<a href="#" @click.prevent="logout()">退出登录</a>
      	  </template>
      	  <template v-else>
      	  	<router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
      	  </template>
      	</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
  	name: 'sub-nav',
  	props: {
  	  mold: {
  	  	type: String,
  	  	default: 'quickNav'
  	  }
  	},
  	// created() {
  	//   console.log('打印数据：')
  	//   console.log(this.currentUser)
  	// },
  	computed: {

  	  ...mapGetters(['currentUser'])
  	}
  }
</script>

<style lang='scss' scoped>
.navBottom {
  width: 100%;
  border-bottom: 0.1rem solid #f3f3f3;

  .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
  }

  a {
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;

    &:first-child {
      border-right: 0.1rem solid #e5e5e5;
    }
  }
}

.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}

.quickNav {
  ul {
    overflow: hidden;
    margin: 1rem 0 0 0;
    padding-top: 0.6rem;

    li {
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
</style>