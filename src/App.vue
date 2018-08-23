<script>
import { get } from './utils/index'
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

.btn:active {
  background: #c24514;
}
</style>
