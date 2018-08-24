<template>
  <div class="container">
    <div class="userinfo" open-type="getUserInfo" @click="doLogin">
      <img class='avatar' :src="userinfo.avatarUrl">
      <p class='nickName'>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button v-if="userinfo.openId" class="btn" @click="scanBook">扫描图书</button>
  </div>
</template>

<script>
import YearProgress from '@/components/YearProgress'
import qcloud from 'wafer2-client-sdk'
import { showSuccess, showModal, post } from '@/utils/index'
import config from '@/config'
export default {
  components: {
    YearProgress
  },

  data () {
    return {
      userinfo: {
        avatarUrl: '/static/images/alt-avatar.png',
        nickName: '点击登录'
      },
      logged: false
    }
  },

  methods: {
    doLogin () {
      const session = qcloud.Session.get()
      if (session) {
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        qcloud.loginWithCode({
          success: res => {
            this.userinfo = res
            this.logged = true
            wx.setStorageSync('userinfo', res)
            showSuccess('登录成功')
            console.log(this.userinfo)
          },
          fail: err => {
            console.error(err)
            showModal('登录失败', '请检查网络连接状态')
          }
        })
      } else {
        // 首次登录
        qcloud.login({
          success: res => {
            this.userinfo = res
            this.logged = true
            wx.setStorageSync('userinfo', res)
            console.log(res)
            showSuccess('登录成功')
          },
          fail: err => {
            console.error(err)
            showModal('登录错误', '请检查网络连接状态')
          }
        })
      }
    },
    scanBook () {
      wx.scanCode({
        onlyFromCamera: false, // 是否只能从相机扫码，不允许从相册选择图片,
        success: res => {
          // res.result contains ISBN number of the book
          if (res.result) {
            this.addbook(res.result)
          }
        },
        fail: err => {
          console.error(err)
        }
      })
    },
    async addbook (ISBN) {
      const res = await post(config.addBookUrl, {
        ISBN,
        openId: this.userinfo.openId
      })
      if (res.code === 0 && res.data.title) {
        showSuccess('添加成功')
      }
    }
  },

  created () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.userinfo {
  display: flex;
  flex-direction: column;
  margin-top: 150rpx;
  margin-bottom: 200rpx;
}

.nickName {
  margin-top: 40rpx;
  text-align: center;
}

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
}
</style>
