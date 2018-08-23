<template>
    <div class="progressbar">
        <progress :percent = "percent" activeColor='#ea5149' show-info = 'true'></progress>
        <p>{{year}}年已经过去{{passdays}}天</p>
    </div>
</template>

<script>
export default {
  methods: {
    isLeapYear () {
      let year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      }
      if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },

    getDayCount () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    passdays () {
      let firstday = new Date()
      firstday.setMonth(0)
      firstday.setDate(1)
      let currentday = new Date().getTime()
      let passdays = (currentday - firstday) / (1000 * 24 * 60 * 60) + 1
      return passdays
    },
    percent () {
      return (this.passdays * 100 / this.getDayCount()).toFixed(1)
    }
  }
}
</script>

<style>
.progressbar {
  margin-bottom: 40rpx;
  width: 80%;
}

.progressbar progress {
  margin-bottom: 30rpx;
}

.progressbar p {
  font-size: 30rpx;
  text-align: center;
}
</style>


