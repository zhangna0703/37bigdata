import request from '../common/request'

// 用户评论
export function produce () {
  return request({
    url: '/api/content/say/list',
    method: 'GET'
  })
}

//招聘岗位
export function Hiring () {
  return request({
    url: '/api/content/recruit/list',
    method: 'GET'
  })
}
