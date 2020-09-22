import { API_URL } from '../../config/constants'
import { ApiHandler } from '../../utils/ApiHandler'

export function fetchTagDetail(id: string) {
  return ApiHandler.request({
    url: `${API_URL}/api/v1/tags/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
}
