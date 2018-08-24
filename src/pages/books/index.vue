
<template>
<div class="containter">
  <Card :key='book.id' v-for='book in books' :book='book'></Card>
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
      books: []
    }
  },
  methods: {
    async getList () {
      const books = await get(config.bookListUrl)
      this.books = books.data.list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style>
</style>

