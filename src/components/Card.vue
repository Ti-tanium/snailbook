<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" class="image" mode='aspectFit'>
    </div>
    <div class="detail">
      <div class="row">
        <div class="right">{{book.average}}</div>
        <div class="left">{{book.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 自定义的标签属性 需要声明 才可以使用
  props: ['book']
}
</script>

<style>
.book-card {
  padding: 10rpx;
  overflow: hidden;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
.thumb {
  width: 180rpx;
  height: 180rpx;
  float: left;
  margin: 0 auto;
  overflow: hidden;
}

.image {
  max-width: 100%;
  max-height: 100%;
}
</style>


