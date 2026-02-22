import React,{useState , useEffect} from 'react'

const Users =()=> {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] =useState(true);
    const[error , setError] =useState(null);

    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }
                const userData = await response.json();
                setUsers(userData);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);
  return (
    <div>
        <h1>User List</h1>
        {loading && <p> Loading...</p>}
        {error && <p> Error:{error}</p>}
        {!loading && !error && (
            <ul>
                {users.map((user)=>{
                    return (
                        <li key ={user.id}>
                            <strong>{user.name}</strong>-{user.email}
                        </li>
                    )
                })}
            </ul>
        )}
    </div>
  );
};

export default Users;