
<template>
<div class="containter">
  <div :key='book.id' v-for='book in book'>{{book.title}}</div>
</div>

</template>


<script>
import config from '@/config'
import { get } from '@/utils/index'
export default {
  data () {
    return {
      book: []
    }
  },
  methods: {
    async getList () {
      const book = await get(config.bookListUrl)
      console.log('a', book)
      this.book = book.data.list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style>
</style>

