"use client"

import { Card, Drawer } from '@mui/material';
import React, { useState } from 'react'
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { GrHomeRounded } from 'react-icons/gr';
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='fixed w-full z-[999]'>
            <div className='relative w-full'>
                <div className='w-full flex justify-center'>
                    <Card className='px-5 w-full h-[84px] flex justify-between items-center'>
                        <div className='h-full flex items-center md:gap-3 gap-2'>
                            <Link href={'/'} className='flex gap-2 items-center'>
                                <div className='bg-[#9FBCCE] rounded-lg text-5xl font-semibold  text-white p-1' >@</div>
                                <h1 className='lg:text-[22px] text-[20px] leading-[26.63px] font-extrabold'>Aran Choudhary</h1>
                            </Link>
                        </div>
                        <div className='h-full flex justify-end items-center'>
                            <div className='md:hidden gap-2 flex h-full items-center justify-center'>

                                <MenuOpenTwoToneIcon className='text-4xl' onClick={() => setOpen(true)} />
                                <Drawer open={open} anchor='bottom' onClose={() => setOpen(false)}>
                                    <div className='w-full flex justify-end p-3'>
                                        <CloseTwoToneIcon onClick={() => setOpen(false)} className='!text-5xl' />
                                    </div>
                                    <div className='!w-full'>
                                        <div className=' pb-5 flex w-full justify-between text-2xl px-5 hover:text-green'>
                                            <a href='/' className="gap-1 flex flex-col items-center font-medium">
                                                <GrHomeRounded />
                                                Home
                                            </a>
                                            <a href='/about' className="gap-1 flex flex-col items-center font-medium">
                                                <ErrorOutlineOutlinedIcon />
                                                About
                                            </a>
                                            <a href='/contact' className="gap-1 flex flex-col items-center font-medium">
                                                <Person2OutlinedIcon />
                                                Contact
                                            </a>
                                            <a href='https://github.com/aran08' className="gap-1 flex flex-col items-center font-medium">
                                                <GitHubIcon />
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </Drawer>
                            </div>
                            <div className='h-full gap-6  md:flex hidden items-center justify-center'>
                                <div className='h-full rounded-lg flex items-center justify-center'>
                                    <CgProfile className='text-3xl text-black opacity-85' />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Navbar;



