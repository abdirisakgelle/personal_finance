import {  useEffect } from 'react';

const UserTable = (props) => {
 const { users, setUsers } = props;
  
 const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {

    fetchUsers();
  }, [users]);

  return (
    // <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
    //   <table className="min-w-full">
    //     <thead>
    //       <tr>
    //         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //           Username
    //         </th>
    //         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //           Email
    //         </th>
    //         {/* Add other columns as needed */}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* Add table rows here */}
 
    //     {users.map((user) => (
    //         <tr key={user._id}>
    //             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
    //                 {user.username}
    //             </td>
    //             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
    //                 {user.email}
    //             </td>
    //             {/* Add other columns as needed */}
    //         </tr>
    //         ))}
    //       </tbody>
    //           </table>
    //         </div>


    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Username</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                </tr>
              </thead>
              <tbody >
              {users.map((user) => (
              <tr key={user._id}>
            
                  <td className="whitespace-nowrap px-6 py-4 font-medium"> {user.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium"> {user.username}</td>
                  <td className="whitespace-nowrap px-6 py-4"> {user.email}</td>
                
                </tr>
  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTable;
