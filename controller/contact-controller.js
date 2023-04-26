// i have done search filter pagination, send message add contact .....
import contact from "../model/contact";

export const addcontact=async(req,res,next)=>{
    const{phonenumber}=req.body;
    let cont;
    try {
        cont=new contact({
           phonenumber
        })
        cont=await cont.save();
    } catch (error) {
        return console.log(error)
    }
    if(!cont){
        return res.status(500).json({message:'message is unble to store'})
    }
    return res.status(200).json({cont});
}


export const getcontact=async(req,res)=>{
    let cont;
    try {
        cont=await contact.find();
    } catch (error) {
        return  console.log(error)
    }
    if(!cont){
        return res.status(500).json({message:'request failed'})
    }
    return res.status(200).json({cont})
}

//pagination


// try {
      //connect to MongoDB here
      //const page = 2; // current page number
      //const pageSize = 5; // number of items to display per page
          // The skip() method takes a single argument, which is the number of documents to skip.
          // In this case, we multiply (page - 1) * pageSize 
          //to calculate the number of documents to skip before retrieving the next set of documents.
//     users = await User.find()
//       .skip((page - 1) * pageSize) // skip the first 5 users
//       .limit(pageSize); // limit to current page size
//   } catch (err) {
//     return next(err); // returns to the next available middleware
//   }


//search and filter with pagination


// export const getalluser = async (req, res, next) => {
//     const perPage = 5;
//     const page = req.query.page || 1;
//     const search = req.query.search || '';
//     const filter = req.query.filter || '';
  
//     const skip = (perPage * page) - perPage;
//     const query = {};
  
//     if (search !== '') {
//       query.$or = [
//         { name: { $eq: search } },
//         { email: { $eq: search } }
//       ];
//     }
  
//     if (filter !== '') {
//       query.role = { $eq: filter };
//     }
  
//     let users;
//     try {
//       users = await User.find(query)
//         .skip(skip)
//         .limit(perPage);
//     } catch (err) {
//       return next(err);
//     }
  
//     if (!users) {
//       return res.status(500).json({
//         message: 'Unexpected error occurred'
//       });
//     }
  
//     return res.status(200).json({ users });
//   };
  

//front end code for the search and filter with pagination


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/api/users?page=${currentPage}&search=${search}&filter=${filter}`);
//         setUsers(res.data.users);
//         setTotalPages(res.data.totalPages);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, [currentPage, search, filter]);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPagination = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <ul>
//         {pageNumbers.map((pageNumber) => (
//           <li key={pageNumber}>
//             <button onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" value={search} onChange={handleSearchChange} placeholder="Search users by name or email" />
//       </div>
//       <div>
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="">Filter users by role</option>
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>
//       </div>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             <div>{user.name}</div>
//             <div>{user.email}</div>
//             <div>{user.role}</div>
//           </li>
//         ))}
//       </ul>
//       {renderPagination()}
//     </div>
//   );
// };

// export default UserList;


















// in the frontend use th following to retrieve phone
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function MyComponent() {
//   const [phoneNumbers, setPhoneNumbers] = useState([]);
//phonenumbers is an array and latter set on
//   useEffect(() => {
//     axios.get('/api/phones')
//       .then((response) => {
//         setPhoneNumbers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error retrieving phone numbers:', error);
//       });
//   }, []);

//   return (
//   
//   );
// }


// in the above code the json data from the api set to the array

// To send messages from a website to users' phones, you will need to use a messaging service or API 
// that can send SMS messages. There are many third-party messaging services available that offer APIs
//  for sending SMS messages, such as Twilio, Nexmo, and Plivo.

// Here are the general steps you can follow to integrate SMS messaging into your MERN stack application:

// Choose a messaging service provider and create an account.
//  Follow their documentation to set up your account and obtain the necessary API keys or credentials.

// Install the provider's SDK or API library in your backend Node.js server. 

// You can use npm to install the library, for example:  npm install twilio
// Create a route in your backend API that will handle sending the SMS messages. 
// This route should receive a phone number and a message body as input,
//  and use the messaging service API to send the message to the phone number.



//

// const accountSid = 'your_account_sid';// you get from the account
// const authToken = 'your_auth_token';
// const client = require('twilio')(accountSid, authToken);
//retrieve phone number using the above code / weyem in front end code when
// admin submit the message handle submit siyaderg retrieve madreg ychallal then send as the message togethor
// app.post('/api/send-sms', async (req, res) => {
//   const { message } = req.body;
     // 
//   try {
//     await client.messages.create({
//       body: message,
//       from: 'your_twilio_phone_number',       
// the Twilio phone number that you have purchased and verified in your Twilio account.
//       to: phoneNumbers// retrieve phone number using the above code
//     });
//     res.status(200).send('SMS message sent successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error sending SMS message');
//   }
// });



// frontend

//import axios from 'axios';
// import React, { useState } from 'react';

// const SendMessage = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await axios.post('/api/send-sms', { phoneNumber, message });
//       alert('SMS message sent successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error sending SMS message');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Phone number:
//         <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Message:
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Send SMS</button>
//     </form>
//   );
// };

// export default SendMessage;
