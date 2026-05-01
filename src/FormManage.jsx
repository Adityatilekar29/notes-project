import React, { useState } from 'react'

const FormManage = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [datas, setDatas] = useState([]);

    const Addproduct = () => {
        setDatas([...datas, data])

        setData({
            name: "",
            email: "",
            password: "",
        })
    }

    const [editdata, setEditdata] = useState(false);

    const [editIndex, setEditIndex] = useState(null)

    const getEditdata = (item, index) => {
        setData(item)
        setEditdata(true)
        setEditIndex(index)
    }

    const Updatedata = () => {
        const updated = [...datas];
        updated[editIndex] = data;

        setDatas(updated)
        setEditdata(false)
        setEditIndex(null);

        setData({
            name: "",
            email: "",
            password: "",
        })

    }


    const deleteProduct = (index) => {
        setDatas(datas.filter((temp, i) => i != index))
    }
    
    return (
        <div className='min-h-screen bg-pink-200 flex items-center justify-center'>

            <div className='bg-white p-8 rounded-2xl shadow-lg w-96'>

                <h1 className='text-2xl font-bold text-center mb-5'>
                    Form Manage
                </h1>

                <div className='mb-4'>
                    <label className='block mb-1 font-medium'>Name</label>
                    <input
                        type="text"
                        placeholder='Enter Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                        className='w-full p-2 border-2 rounded-lg outline-none focus:border-pink-400'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block mb-1 font-medium'>Email</label>
                    <input
                        type="email"
                        placeholder='Enter Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                        className='w-full p-2 border-2 rounded-lg outline-none focus:border-pink-400'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block mb-1 font-medium'>Password</label>
                    <input
                        type="password"
                        placeholder='Enter Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                        className='w-full p-2 border-2 rounded-lg outline-none focus:border-pink-400'
                    />
                </div>

                {editdata == true ? <button type='button' onClick={Updatedata} className='w-full bg-pink-500 cursor-pointer active:bg-black text-white py-2 rounded-lg mt-3 hover:bg-pink-600'>
                    Update
                </button> :
                    <button type='button' onClick={Addproduct} className='w-full bg-pink-500 cursor-pointer active:bg-black text-white py-2 rounded-lg mt-3 hover:bg-pink-600'>
                        Add
                    </button>}

            </div>

            <div className="bg-white p-5 rounded-xl mx-5 shadow-md">
                <table className='table table-responsive'>

                    <thead>
                        <tr className='bg-pink-300'>
                            <th className='px-3 text-center py-2'>Name</th>
                            <th className='px-3 text-center py-2'>Email</th>
                            <th className='px-3 text-center py-2'>Password</th>
                            <th className='px-3 text-center py-2'>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {datas.map((item, index) => (
                            <tr key={index} className='text-center border-t'>
                                <td className='px-3 py-2'>{item.name}</td>
                                <td className='px-3 py-2'>{item.email}</td>
                                <td className='px-3 py-2'>{item.password}</td>
                                <td><i className="fa fa-trash cursor-pointer text-red-500" onClick={() => deleteProduct(index)}></i></td>
                                <td><i className="fa fa-pen cursor-pointer text-yellow-400" onClick={() => getEditdata(item,index)}></i></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default FormManage