import request from '../common/request'

// 用户评论
export function produce () {
  return request({
    url: '/content/say/list',
    method: 'GET'
  })
}

//招聘岗位
// export function produce () {
//   return request({
//     url: '/content/say/list',
//     method: 'GET'
//   })
// }