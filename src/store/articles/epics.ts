import { ofType } from 'redux-observable'
import { catchError, mergeMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { ArticlesActionTypes, ApiResponse } from './types'
import { fetchArticles } from './apis'
import { fetchError, fetchSuccess } from './actions'

export const fetchArticlesEpic = (action$: any) =>
  action$.pipe(
    ofType(ArticlesActionTypes.FETCH_REQUEST),
    mergeMap(({ payload }) => fetchArticles(payload).pipe(map(({ response }) => fetchSuccess(response)))),
    catchError((error) => of(fetchError(error)))
  )
