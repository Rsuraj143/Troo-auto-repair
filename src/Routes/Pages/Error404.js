import React from 'react'
import ErrorPageComponent from '../../Components/ErrorPageComponent/ErrorPageComponent'
import useDocumentTitle from '../../PageTitle'

const Error404 = () => {
  useDocumentTitle("TRoo | ErrorPage")
  return (
    <div className="error">
      <ErrorPageComponent/>
    </div>
  )
}

export default Error404