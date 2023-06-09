import React from 'react'
import CommingSoonComponent from '../../Components/CommingSoon/CommingSoonComponent'
import useDocumentTitle from '../../PageTitle'

const CommingSoon = () => {
  useDocumentTitle("TRoo | Comming Soon")
  return (
    <div className="coming-soon">
      <CommingSoonComponent/>
    </div>
  )
}

export default CommingSoon