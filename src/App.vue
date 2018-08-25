<script>
import qcloud from 'wafer2-client-sdk'
import config from './config'
export default {
  async created () {
    qcloud.setLoginUrl(config.loginUrl)
  }
}
</script>

<style>
.btn {
  color: white;
  background-color: #ea5419;
  margin-bottom: 20rpx;
  width: 90%;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 32rpx;
}

.page-footer {
  text-align: center;
  font-size: 12px;
  color: #888;
}

.btn:active {
  background: #c24514;
}
</style>
