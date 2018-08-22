<script>
import { get } from "./utils/index";
import qcloud from "wafer2-client-sdk";
import config from "./config";
export default {
  async created() {
    qcloud.setLoginUrl(config.loginUrl);
    qcloud.login({
      success: function(userInfo) {
        console.log("登录成功", userInfo);
      },
      fail: function(err) {
        console.log("登录失败", err);
      }
    });
  }
};
</script>

<style>
.btn {
  color: white;
  background-color: #ea5419;
  margin-bottom: 20rpx;
  width: 300rpx;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 32rpx;
}

.btn:active {
  background: #c24514;
}
</style>
