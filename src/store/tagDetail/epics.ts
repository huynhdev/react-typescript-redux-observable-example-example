import { ofType } from 'redux-observable'
import { catchError, mergeMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { TagDetailActionTypes } from './types'
import { fetchTagDetail } from './apis'
import { fetchError, fetchSuccess } from './actions'

export const fetchTagDetailEpic = (action$: any) =>
  action$.pipe(
    ofType(TagDetailActionTypes.FETCH_REQUEST),
    mergeMap(({ payload }) => fetchTagDetail(payload).pipe(map(({ response }) => fetchSuccess(response)))),
    catchError((error) => of(fetchError(error)))
  )
