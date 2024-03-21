import React from 'react'
import Case from './Case';

export default function Grid() {

    let cases = []

    for (let i = 0; i < 25; i++) {
        cases.push(<Case id={i} state='EDIT' value='Test' key={i}/>)
    }

  return (
    
    <div id='grid' className='flex w-[880px] flex-row flex-wrap'>
        {cases}
    </div>
  )
}
