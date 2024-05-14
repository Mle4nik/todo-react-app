import { useState } from 'react'
// import { MdCheckBox } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io"
// import { FaTrash } from "react-icons/fa";
// import { MdModeEdit } from "react-icons/md";
import List from './components/List.jsx';


let nextId = 0

function App() {
  const [all, setAll] = useState(0)
  const [inProgress, setInProgress] = useState(0)
  const [done, setDone] = useState(0)


  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todolist')) || [])
  const [name, setName] = useState('')
  const [isStatus, setIsStatus] = useState('all')
  // const [now, setNow] = useState(new Date())
  // const [check, setCheck] = useState(false)
  // const [okno, setOkno] = useState(false)
  // const [select, setSelect] = useState('')

  const pushItem = (event) => {
    if (event.key === 'Enter' && event.target.value.length != 0) {
      // setNow(new Date())
      setTodo([...todo, { id: nextId++, title: name, status: 'incomplete' }])
      // console.log(todo);
      setName(event.target.value = '')
      setAll(all + 1)
      setInProgress(inProgress + 1)
    }


    // localStorage.setItem('todolist', JSON.stringify(todo))

  }

  function getStatus(status) {
    setIsStatus(status)
    // console.log(status.filter(el => el.status == 'complete').length);
  }

  function setData(status) {
    if (status == 'complete') {
      setDone(done + 1)
      setInProgress(inProgress - 1)
    } else {
      setDone(done - 1)
      setInProgress(inProgress + 1)
    }


  }

  function deleteItem(id) {
    // let indexToDelete = arr.indexOf(valueToDelete)

    // arr.splice(indexToDelete, 1); // Удаляем элемент
    // if (todo[id]) {
    //   setDone(done - 1)
    // } else if (todo.filter(item => item.id == id && item.status == 'incomplete')) {
    //   setInProgress(inProgress - 1)
    // }

    setTodo(todo.filter(item => item.id != id))

    setAll(all - 1)
    setDone(todo.filter(el => el.status == 'complete').length)
    setInProgress(todo.filter(el => el.status == 'incomplete').length)
    setIsStatus(todo.filter(el => el))

    // localStorage.setItem('todolist', JSON.stringify(todo))
  }

  return (
    <div className='flex justify-center items-start h-screen overflow-hidden'>
      <div className="w-1/2">
        <h1 className="text-6xl font-extrabold text-purple-400 text-center mt-7">
          TODO LIST
        </h1>

        <div className='flex justify-between items-center mt-7'>
          <div className='bg-slate-100 rounded-md flex justify-center items-center w-full mr-2'>
            <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(pushItem)} type="text" placeholder="to do something..." className="mr-4 pl-4 py-3 w-full bg-slate-100 rounded-md focus:outline-none text-slate-500 whitespace-nowrap text-ellipsis" />
            {name.length > 0 ?
              <IoIosCloseCircle onClick={() => setName('')} className='text-xl mr-3 text-gray-400 cursor-pointer' />
              :
              null
            }
          </div>
          <select className='focus:outline-none bg-slate-300 py-3 rounded-md px-3' name="status" id="status-select" onChange={(e) => e.target.value == 'all' ? setTodo(isStatus.filter(el => el)) : setTodo(isStatus.filter(el => el.status == e.target.value))}>
            <option value='all'>All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>

        {/* <div className='h-screen'>
          <ul className='flex flex-col justify-start items-start bg-slate-100 mt-3 mb-7 rounded-xl py-3 px-4 max-h-customH overflow-scroll'>
            {todo.length ?
              todo.map((notice) =>
                <div key={notice.id} id={notice.id} className='flex justify-between rounded-md items-center bg-white w-full my-1.5 py-1.5 text-sm duration-1000'>
                  <div className='flex justify-between items-center'>
                    {
                      check ?
                        <div><MdCheckBox onClick={() => (todo.filter(el => el.id == notice.id ? setCheck(false) : null))} className='text-purple-400 mx-2 text-4xl cursor-pointer duration-300' /></div>
                        :
                        <div><MdCheckBox onClick={() => (todo.filter(el => el.id == notice.id ? setCheck(true) : null))} className='text-gray-200 mx-2 text-4xl cursor-pointer duration-300' /></div>
                    }
                    {
                      check ?
                        <li><span className='font-medium line-through opacity-50 text-base'>{notice.title}</span><br /><span className='text-xs'>{now.toLocaleString("en-US")}</span></li>
                        :
                        <li><span className='font-medium text-base'>{notice.title}</span><br /><span className='text-xs'>{now.toLocaleString("en-US")}</span></li>
                    }
                  </div>
                  <div className='flex items-center'>
                    <div onClick={() => setOkno(true)} className='bg-gray-200 hover:bg-gray-300 rounded-sm p-1.5 mr-4 cursor-pointer duration-300'>
                      <MdModeEdit className='text-lg text-gray-600' />
                    </div>
                    {okno ?
                      <div className='overflow-hidden'>
                        <div className='absolute w-screen bg-black/50 top-0 left-0 h-screen z-10'></div>
                        <div className='absolute top-[47%] left-[46%] z-50'>
                          <h2 className='text-4xl text-white cursor-pointer' onClick={() => setOkno(false)}>LADNO</h2>
                        </div>
                      </div>
                      :
                      null
                    }
                    <div id={notice.id} onClick={() => {let newId = 0; todo.filter(el => el.id == notice.id ? (todo.splice(el.id, 1), (todo.map((item) => item.id = newId++ ))) : null), setTodo(todo.filter(val => val))}} className='bg-gray-200 hover:bg-gray-300 rounded-sm p-1.5 mr-4 cursor-pointer duration-300'>
                      <FaTrash className='text-base text-gray-600' />
                    </div>  
                  </div>
                </div>
              )
              :
              <div className='w-full flex justify-center items-center'>
                <h2 className='text-center bg-gray-300 w-32 rounded-md py-1'>No Todo Found</h2>
              </div>
            }
          </ul>
        </div> */}


        <div className='h-screen'>
          <div className='w-full'>
            <ul className='w-full flex justify-evenly py-3'>
              <li>all: {all}</li>
              <li>in progress: {inProgress}</li>
              <li>done: {done}</li>
            </ul>
          </div>
          <ul className='flex flex-col justify-start items-start bg-slate-100 mb-7 rounded-xl py-3 px-4 max-h-customH overflow-scroll'>
            {todo.length ?
              todo.toReversed().map((notice) =>
                <div key={notice.id} id={notice.id} className='flex justify-between rounded-md items-center bg-white w-full my-1.5 py-1.5 text-sm duration-1000'>
                  <List status={notice.status} title={notice.title} todo={todo} setTodo={setTodo} notId={notice.id} deleteItem={deleteItem} setData={setData} getStatus={getStatus} />
                </div>
              )
              :
              <div className='w-full flex justify-center items-center'>
                <h2 className='text-center bg-gray-300 w-32 rounded-md py-1'>No Todo Found</h2>
              </div>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
