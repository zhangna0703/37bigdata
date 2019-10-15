import request from '../common/request'

// 首页新闻
export function produce () {
  return request({
    url: '/content/say/list',
    method: 'GET'
  })
}
