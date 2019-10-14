import request from '../common/request'

// 首页新闻
export function newsInfoList(data) {
  return request({
    url: '/content/info/list',
    method: 'GET',
    params: data
  })
}
