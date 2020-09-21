import { ofType } from 'redux-observable'
import { catchError, mergeMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { ArticleDetailActionTypes } from './types'
import { fetchArticleDetail } from './apis'
import { fetchError, fetchSuccess } from './actions'

export const fetchArticleDetailEpic = (action$: any) =>
  action$.pipe(
    ofType(ArticleDetailActionTypes.FETCH_REQUEST),
    mergeMap(({ payload }) => fetchArticleDetail(payload).pipe(map(({ response }) => fetchSuccess(response)))),
    catchError((error) => of(fetchError(error)))
  )
