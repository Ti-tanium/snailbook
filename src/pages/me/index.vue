<template>
  <div class="container">
    <div class="userinfo">
      <img class='avatar' src="/static/avatar.jpg" alt="">
      <p class='nickName'>Titanium</p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn">登录</button>
    <button class="btn" @click="scanBook">扫描图书</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      userinfo: {}
    };
  },

  methods: {
    scanBook() {
      wx.scanCode({
        onlyFromCamera: true, //是否只能从相机扫码，不允许从相册选择图片,
        success: res => {
          console.log(res);
        }
      });
    }
  },

  created() {
    this.userinfo = wx.getStorageSync("userinfo");
    console.log(this.userinfo);
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo {
  display: flex;
  flex-direction: column;
  margin-top: 150rpx;
  margin-bottom: 200rpx;
}

.nickName {
  margin-top: 40rpx;
}

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
}
</style>
