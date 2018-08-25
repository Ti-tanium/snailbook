<template>
<div class="detail-container">{{bookid}}</div>
</template>

<script>
import config from '@/config'
import { get } from '@/utils/index'
export default {
  data () {
    return {
      bookid: ''
    }
  },
  methods: {
    async getDetail () {
      await get(config.host + '/weapp/bookdetail', { id: this.bookid })
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style>
</style>


