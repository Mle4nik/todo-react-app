import React from 'react';
import { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";


const List = ({ title, todo, setTodo, notId, status, deleteItem, setData, getStatus}) => {

    const [now, setNow] = useState(new Date())
    const [check, setCheck] = useState(false)
    const [okno, setOkno] = useState(false)
    // const [newTodo, setNewTodo] = useState([...todo])

    // console.log(todo);

    // if (title.length > 56) {
    //     title = 'ladno'
    // }

    return (
        <div className='w-full'>
            {/* <div><h1>snjrvdbivrb</h1></div> */}
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-start items-center w-5/6'>
                    {
                        check ?
                            <div><MdCheckBox onClick={() => (todo.filter(el => el.id == notId ? (el.status = 'incomplete', setCheck(false), setData(el.status), getStatus(todo.filter(el => el))) : null))} className='text-purple-400 mx-2 text-4xl cursor-pointer duration-300' /></div>
                            :
                            <div><MdCheckBox onClick={() => (todo.filter(el => el.id == notId ? (el.status = 'complete', setCheck(true), setData(el.status), getStatus(todo.filter(el => el))) : null))} className='text-gray-200 mx-2 text-4xl cursor-pointer duration-300' /></div>
                    }
                    {
                        check ?
                            <li className='truncate w-full'><span className='font-medium line-through opacity-50 text-base'>{title}</span><br /><span className='text-xs'>{now.toLocaleString("en-US")}</span></li>
                            :
                            <li className='truncate w-full'><span className='font-medium text-base'>{title}</span><br /><span className='text-xs'>{now.toLocaleString("en-US")}</span></li>
                    }
                </div>
                <div className='flex items-center'>
                    <div onClick={() => setOkno(true)} className='bg-gray-200 hover:bg-gray-300 rounded-sm p-1.5 mr-4 cursor-pointer duration-300'>
                        <MdModeEdit className='text-lg text-gray-600' />
                    </div>
                    {okno ?
                        <div className='absolute w-screen h-screen top-0 left-0'>
                            <div className='absolute w-screen bg-black/50 h-screen z-10'></div>
                            <div className='flex justify-center items-center w-screen h-screen relative z-50'>
                                <h2 className='text-4xl text-white cursor-pointer' onClick={() => setOkno(false)}>{title}</h2>
                            </div>
                        </div>
                        :
                        null
                    }
                    {/* <div id={id} onClick={() => { let newId = 0; todo.filter(el => el.id == id ? (todo.splice(el.id, 1), (todo.map((item) => item.id = newId++))) : null), setTodo(todo.filter(val => val)) }} className='bg-gray-200 hover:bg-gray-300 rounded-sm p-1.5 mr-4 cursor-pointer duration-300'>
                    <FaTrash className='text-base text-gray-600' />
                </div> */}
                    <div onClick={() => { deleteItem(notId) }} className='bg-gray-200 hover:bg-gray-300 rounded-sm p-1.5 mr-4 cursor-pointer duration-300'>
                        <FaTrash className='text-base text-gray-600' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;