import { Card } from '@mui/material'
import React from 'react'

const Buttonbox = ({ num, name, icon }) => {
    return (
        <Card className='px-5 !py-[15px] rounded-md flex gap-2 items-center'>
            {num && (
                <h2 className='text-[24px] font-bold'>{num}</h2>
            )}
            <h2 className='text-[18px] font-bold'>{name}</h2>
            {icon && (
                <h2>{icon}</h2>
            )}
        </Card>
    )
}

export default Buttonbox