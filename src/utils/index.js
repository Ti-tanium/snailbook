// 工具函数库

import config from '../config'

export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url, // 开发者服务器接口地址",
      data: '', // 请求的参数",
      method: 'GET',
      dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      },
      fail: () => {},
      complete: () => {}
    })
  })
}
