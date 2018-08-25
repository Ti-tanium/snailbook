
<template>
<div class="container">
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
  },
  onPullDownRefresh () {
    this.getList()
  },
  }
}
</script>

<style>
.container {
  background-color: #f2f2f2;
}
</style>

