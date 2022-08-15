import {IoMdFingerPrint as Finger } from 'react-icons/io'
import {AiOutlineDown as Down} from 'react-icons/ai'
export default function Header(){

    return (
        <nav className="navbar bg-transparent px-4 py-4 flex w-screen  justify-between overflow-x-hidden">
            <div className="navbar-intro flex gap-x-9 flex-row items-center justify-center px-4  ">
                <a href="/home" className='flex flex-row items-center text-neutral-800 text-3xl   px-2 tracking-wider'> <Finger/>Digtal</a>
                <ul className='flex flex-row  gap-x-4 w-100'>
                    <li className='text-2xl text-neutral-900 mx-6'><a href="/home">Home</a></li>
                    <li className='text-2xl text-neutral-900 mx-6'><a href="/contact" className='flex gap-x-2 items-center'>Contact<Down/></a></li>
                    <li className='text-2xl text-neutral-900 mx-6'><a href="/serice">Service</a></li>
                    <li className='text-2xl text-neutral-900 mx-6'><a href="/about" className='flex gap-x-2 items-center'>About<Down/></a></li>
                </ul>
            </div>
            <div className='navbar-next flex flex-row items-center justify-end gap-x-4 px-4'>
                <a href="/login" className='text-2xl text-neutral-900'>Login</a>
                <a href="/register" className='btn text-2xl bg-slate-600 text-slate-100 p-2 leading-none hover:bg-slate-800 rounded-md focus:ring focus:ring-slate-500'>Sign Up</a>
            </div>
        </nav>
    )

}