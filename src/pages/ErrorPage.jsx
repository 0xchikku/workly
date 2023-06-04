import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError();
  console.log({error});

  return (
    <div id='error-page'>
      <h2>Oops! Something went Wrong!</h2>
      <p>Please Reload the Page!</p>
      <p>
        <strong>{error.status}</strong>{" "}
        <strong>{error.statusText || error.message}</strong>
      </p>
    </div>
  )
}

export default ErrorPage