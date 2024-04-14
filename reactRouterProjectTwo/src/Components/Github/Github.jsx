// import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

const data = useLoaderData();


// const [data,setData] = useState([]);


// useEffect(()=>{
// fetch('https://api.github.com/users/yash-ad')
// .then((response)=> response.json())
// .then((data)=> setData(data))
// },[])


    return (
        <div className='bg-gray-600 text-center text-white p-10 text-5xl' >
        {data.name}
           <img className=" flex justify-center align-middle" src={data.avatar_url} alt="git Profile Picture" width={300}/>
        </div>
    );
};

export default Github;

//For best approach and for optimization react-router-dom gives us a loader property.


export const githubInfoLoader = async ()=> {

    const response = await fetch('https://api.github.com/users/yash-ad');

    return response.json();
}