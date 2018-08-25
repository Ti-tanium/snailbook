<template>
  <div class="star-container">
    <div class="star">
      <span class="hollow">☆☆☆☆☆</span>
      <div class="concrete" :style="style ">★★★★★</div>
    </div>
    <div class="average">{{average}}</div>
  </div>
</template>

<script>
export default {
  props: {
    average: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    style () {
      return 'width:' + this.average * 10 + '%'
    }
  }
}
</script>

<style>
.star-container {
  display: flex;
  flex-direction: row;
}

.star {
  position: relative;
  letter-spacing: 0;
  margin-right: 4px;
  color: #fd9104;
}

.concrete {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}

.average {
  color: #444;
}
</style>

