import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TagDetailContainer from '../../containers/TagDetailContainer'

interface RouteParams {
  id: string
}

const TagShow: React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const {
    match: { params }
  } = props
  return <TagDetailContainer id={params.id} />
}

export default TagShow
