import ErrorMessage from '../errorMessage/ErrorMessage'
import { Link } from 'react-router-dom'


import React from 'react'

export default function Page404(props) {
  return (
    <div>
      <ErrorMessage />
      <p style={{'textAlign':'center','fontWeight':'bold','fontSize':'24px'}}>Page doesn't exist</p>
      <Link style={{'display':'block','textAlign':'center','fontWeight':'bold','fontSize':'24px'}} to="/MarvelStarter/">Back to main page</Link>
    </div>
  )
}
