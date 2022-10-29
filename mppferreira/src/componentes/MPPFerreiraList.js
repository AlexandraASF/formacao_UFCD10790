import React from 'react'
import MPPFerreiraItem from './MPPFerreiraItem'


function MPPFerreiraList({data, handleDelete}) {
  return (
    <div className='feedback-list'>
        {data.map((item) => (
            <MPPFerreiraItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default MPPFerreiraList