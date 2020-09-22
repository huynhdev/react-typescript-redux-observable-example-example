import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequest } from '../store/tagDetail/actions'
import TagDetail from '../components/TagDetail/TagDetail'
import { ApplicationState } from '../store'

type Props = {
  id: string
}
const TagDetailContainer: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRequest(id))
  }, [])

  const tagDetail = useSelector((state: ApplicationState) => state.tagDetail)

  const tagData = tagDetail.payload.data
  if (!tagData) return null

  return <TagDetail tag={tagData} />
}

export default TagDetailContainer
