
<template>
<div class="container">
  <Card :key='book.id' v-for='book in books' :book='book'></Card>
  <p class="page-footer" :hidden='hasMoreDataOfBook'>没有更多数据</p>
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
      pageIndex: 0,
      pageSize: 5
    }
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading()
      const books = await get(config.bookListUrl, {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      console.log('book getted:', books)
      if (books.data.list.length <= 0) {
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
    this.pageIndex += 1
    this.getList()
  }
}
</script>

<style>
.container {
  background-color: #f2f2f2;
}
</style>

