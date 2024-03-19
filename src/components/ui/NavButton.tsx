"use client";

import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation';

interface props {
    children: string,
    link: string,
    style: string
}

const NavButton = ({children, link, style}: props) => {

    const router = useRouter();

    return (
        <Button onClick={() => {router.push(link)}} className={style}>{children}</Button>
    )
}

export default NavButton