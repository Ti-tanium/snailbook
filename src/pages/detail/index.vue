<template>
<div class="detail-container">{{bookid}}</div>
</template>

<script>
export default {
  data () {
    return {
      bookid: ''
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
  }
}
</script>

<style>
</style>


