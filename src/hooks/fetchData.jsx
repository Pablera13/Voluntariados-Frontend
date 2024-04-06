import React from 'react'
import { useQuery } from 'react-query'

function fetchData({key, myFunction}) {
    const { isLoading, isError, data, error } = useQuery({queryKey: [key], queryFn: myFunction})

    if (isLoading) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

  return { isLoading, isError, data, error }
}

export default fetchData