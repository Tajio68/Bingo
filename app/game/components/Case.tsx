'use client';

import React from 'react';

interface Props {
    id: number,
    value: string,
    state: 'EDIT' | 'PLAY' | 'VALID'
}

export default function Case({value, state}: Props) {

  return (
    <div className='m-2 flex size-40 items-center justify-center border-2 border-solid border-black bg-slate-400'>
        <p className='text-2xl'>{value}</p>
    </div>
  )
}
