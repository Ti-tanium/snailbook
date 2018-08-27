<template>
<a :href="bookDetailUrl">
  <div class="book-card">
    <scroll-view>
      <div class="thumb">
      <img :src="book.image" class="image" mode='aspectFit'>
    </div>
    <div class="detail">
      <div class="head">
        <div class="average">
          <star :average='book.average'></star>
        </div>
        <div class="title">{{book.title}}</div>
      </div>
      <div class="content">
        <div class="author">{{book.author}}</div>
        <div class="publisher">{{book.publisher}}</div>
      </div>
      <div class="footer">
        <img src="/static/images/icon/View.png">
        <div class="viewCount">{{book.count}}</div>
        <div class="contributor">
          <div>{{book.nickName}}</div>
        </div>
      </div>
    </div>
    </scroll-view>
  </div>
  </a>

</template>

<script>
import star from '@/components/star'
export default {
  // 自定义的标签属性 需要声明 才可以使用
  props: ['book'],
  components: {
    star
  },
  computed: {
    bookDetailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  }
}
</script>

<style>
.book-card {
  padding: 10rpx;
  overflow: hidden;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
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

.detail {
  margin-left: 200rpx;
  height: 200rpx;
  display: flex;
  flex-direction: column;
}

.head {
  line-height: 40rpx;
  margin-bottom: 3px;
  font-size: 32rpx;
  color: #222;
}

.average {
  float: right;
}

.title {
  white-space: normal;
  margin-right: 80rpx;
}

.content {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #666;
}

.footer {
  display: flex;
  flex-direction: row;
  height: 20rpx;
  font-size: 10px;
  color: #666;
}

.footer img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 10rpx;
}

.contributor {
  margin-left: 80rpx;
  display: flex;
  flex-direction: row;
}
</style>


