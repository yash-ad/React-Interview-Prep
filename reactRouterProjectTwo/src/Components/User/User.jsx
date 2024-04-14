import { useParams } from "react-router-dom";


const User = () => {
const {userId} = useParams();
    return (
        <div className='bg-gray-600 text-white text-3xl p-10 text-center'>User  : {userId}</div>
    );
};

export default User;