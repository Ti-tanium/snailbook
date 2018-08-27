
<template>
<div class="container">
  <swiper :top9Books='top9Books'></swiper>
  <Card :key='book.id' v-for='book in books' :book='book'></Card>
  <p class="page-footer" :hidden='hasMoreDataOfBook'>没有更多数据</p>
</div>

</template>


<script>
import config from '@/config'
import { get } from '@/utils/index'
import Card from '@/components/Card'
import Swiper from '@/components/Swiper'
export default {
  components: {
    Card,
    Swiper
  },
  data () {
    return {
      books: [],
      hasMoreDataOfBook: true,
      pageIndex: 0,
      pageSize: 10,
      top9Books: []
    }
  },
  methods: {
    async getList (pageSize) {
      wx.showNavigationBarLoading()
      const books = await get(config.bookListUrl, {
        pageIndex: this.pageIndex,
        pageSize: pageSize
      })
      console.log('book getted:', books)
      if (books.data.list.length <= 0) {
        this.hasMoreDataOfBook = false
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        return
      }
      this.books = this.books.concat(books.data.list)
      this.top9Books = this.books.slice(0, 9)
      console.log('books:', this.books)
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  },

  mounted () {
    this.getList(this.pageSize)
  },
  async onPullDownRefresh () {
    this.pageIndex = 0
    this.hasMoreDataOfBook = true
    wx.showNavigationBarLoading()
    const books = await get(config.bookListUrl, {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    })
    console.log('book getted:', books)
    if (books.data.list.length <= 0) {
      this.hasMoreDataOfBook = false
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      return
    }
    this.books = books.data.list
    this.top9Books = this.books.slice(0, 9)
    wx.stopPullDownRefresh()
    wx.hideNavigationBarLoading()
  },

  onReachBottom () {
    if (!this.hasMoreDataOfBook) {
      return
    }
    this.pageIndex += 1
    this.getList(this.pageSize)
  }
}
</script>

<style>
.container {
  background-color: #f2f2f2;
}
</style>

