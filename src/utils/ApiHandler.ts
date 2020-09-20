import { ajax } from 'rxjs/ajax'

export class ApiHandler {
  public static request(params: object) {
    return ajax({
      headers: {
        'Content-Type': 'application/json',
        timeout: 5000
      },
      ...params
    })
  }
}
