
<template>
<div class="container">
  <Card :key='book.id' v-for='book in books' :book='book'></Card>
  <p class="footer" :hidden='hasMoreDataOfBook'>没有更多数据</p>
</div>

</template>


<script>
import config from '@/config'
import { get } from '@/utils/index'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      books: [],
      hasMoreDataOfBook: true,
      pageOfNewData: 0
    }
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading()
      const books = await get(config.bookListUrl, { page: this.pageOfNewData })
      console.log('book getted:', books)
      console.log(books.data.list.length)
      if (books.data.list.length <= 0) {
        console.log('booklen==0')
        this.hasMoreDataOfBook = false
        return
      }
      this.books = this.books.concat(books.data.list)
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  },
  mounted () {
    this.getList()
  },
  onPullDownRefresh () {
    this.getList()
  },
  onReachBottom () {
    if (!this.hasMoreDataOfBook) {
      return
    }
    this.pageOfNewData += 1
    this.getList()
  }
}
</script>

<style>
.container {
  background-color: #f2f2f2;
}
.footer {
  color: #999;
  text-align: center;
  font-size: 12rpx;
}
</style>

