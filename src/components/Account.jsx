// import React, { useState, useEffect } from "react";
// import authService from "../appwrite/auth";
// import { LoadingSpinner } from "./index";
// function Account() {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         async function fetchCurrentUser() {
//             try {
//                 const user = await authService.getCurrentUser();
//                 setCurrentUser(user);
//             } catch (error) {
//                 console.log("Error fetching current user:", error);
//             }
//         }

//         fetchCurrentUser();
//     }, []);

//     return (
//         <div>
//             {currentUser ? (
//                 <div>
//                     <h2>Account Details</h2>
//                     <p>Name: {currentUser.name}</p>
//                     <p>Email: {currentUser.email}</p>

//                 </div>
//             ) : (
//                 <LoadingSpinner />
//             )}
//         </div>
//     );
// }

// export default Account; 



import React, { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { LoadingSpinner } from "./index";

function Account() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const user = await authService.getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                console.log("Error fetching current user:", error);
            }
        }

        fetchCurrentUser();
    }, []);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            {currentUser ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Account Details</h2>
                    <p className="text-lg">Name: {currentUser.name}</p>
                    <p className="text-lg">Email: {currentUser.email}</p>
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
}

export default Account;
