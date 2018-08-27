<template>
  <div class="siwperContainer">
    <swiper indicator-dots='true' autoplay='true' circular='true'>
      <div v-for="(book,idx) in imgUrls" :key='idx'>
        <swiper-item>
          <img
          @click='bookDetail(img.id)'
          :src="img.image"
          mode='aspectFit'
          class='swiperImg'
          v-for="img in book"
          :key='index'
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['top9Books'],
  computed: {
    imgUrls () {
      let res = this.top9Books
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
    }
  },
  methods: {
    bookDetail (id) {
      console.log('click img')
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      })
    }
  }
}
</script>

<style>
.swiperContainer {
  margin-top: 5px;
}
.swiperImg {
  width: 33%;
  height: 100%;
}
</style>

