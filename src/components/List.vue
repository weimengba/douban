<template>
  <div class="list">
  	<router-link class="thumbnail" :to="{name:'DetailView',params: {id:item.id}}">
  	  <div class="content">
  	  	<img src="" alt="cover">
  	  	<h3></h3>
  	  	<p></p>
  	  </div>
  	  <div class="author">
  	  	<span class="name"></span>
  	  	<span class="label"></span>
  	  </div>
  	</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  	name: 'list',
  }
</script>

<style lang='scss' scoped>
.list {
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;

    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size: 1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #42bd56;
    }
  }
}
</style>
