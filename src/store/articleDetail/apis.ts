import { API_URL } from '../../config/constants'
import { ApiHandler } from '../../utils/ApiHandler'

export function fetchArticleDetail(id: string) {
  return ApiHandler.request({
    url: `${API_URL}/api/v1/articles/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
}
