import { API_URL } from '../../config/constants'
import { ApiHandler } from '../../utils/ApiHandler'

export function fetchArticles(params: Record<string, any>) {
  const qs = new URLSearchParams(params).toString()
  return ApiHandler.request({
    url: `${API_URL}/api/v1/articles?${qs}`,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
}
