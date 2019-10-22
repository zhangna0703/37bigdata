import request from '../common/request'

// 首页新闻
export function newsInfoList (data) {
  return request({
    url: '/content/info/list',
    method: 'GET',
    params: data
  })
}

//提交信息
export function contact (params) {
  return request({
    url: '/content/contact',
    method: 'POST',
    data:params
  })
}