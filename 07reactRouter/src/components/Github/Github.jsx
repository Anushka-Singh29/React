import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Anushka-Singh29')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // },
    //     [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} width={250} alt="" />
        </div>
    )
}

export default Github

export const githubinfoloader = async () =>{
    const response = await fetch('https://api.github.com/users/Anushka-Singh29')
    return response.json()
}
