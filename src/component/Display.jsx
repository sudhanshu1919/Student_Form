import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Display() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1100/allusers");
        setAccounts(response.data);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = (filename) => {
    const link = document.createElement("a");
    link.href = `http://localhost:1100/images/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Signature</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 0 ? (
            accounts.map((account, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{account.name}</td>
                <td>{account.email}</td>
                <td>
                  {account.photo && (
                    <img
                      src={`http://localhost:1100/images/${account.photo}`}
                      alt="Photo"
                      width="60"
                    />
                  )}
                </td>
                <td>
                  {account.signature && (
                    <img
                      src={`http://localhost:1100/images/${account.signature}`}
                      alt="Signature"
                      width="60"
                    />
                  )}
                </td>
                <td>
                  {account.photo && (
                    <Button onClick={() => handleDownload(account.photo)}>
                      Download Photo
                    </Button>
                  )}
                  {account.signature && (
                    <Button onClick={() => handleDownload(account.signature)}>
                      Download Signature
                    </Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Data to display</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}

// Styled components
const Wrapper = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
  }

  td {
    font-size: 0.9rem;
  }

  img {
    border-radius: 4px;
    max-width: 60px;
    height: auto;
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-top: 5px;
  font-size: 0.8rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #218838;
  }
`;

export default Display;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

// function Display() {
//   const [accounts, setAccounts] = useState([]);
//   const [editingAccount, setEditingAccount] = useState(null); // Track which account is being edited
//   const [editForm, setEditForm] = useState({ name: "", email: "" }); // Form state for editing

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Fetch user data
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:1100/allusers");
//       setAccounts(response.data);
//     } catch (error) {
//       console.error("Error fetching account data:", error);
//     }
//   };

//   // Handle download
//   const handleDownload = (filename) => {
//     const link = document.createElement("a");
//     link.href = `http://localhost:1100/images/${filename}`;
//     link.download = filename;
//     link.click();
//   };

//   // Handle edit button click
//   const handleEdit = (account) => {
//     setEditingAccount(account.id);
//     setEditForm({ name: account.name, email: account.email });
//   };

//   // Handle input change in edit form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   // Handle save after editing
//   const handleSave = async (id) => {
//     try {
//       await axios.put(`http://localhost:1100/updateuser/${id}`, editForm);
//       setEditingAccount(null); // Exit edit mode
//       fetchData(); // Refresh data
//     } catch (error) {
//       console.error("Error updating account data:", error);
//     }
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:1100/deleteuser/${id}`);
//       fetchData(); // Refresh data
//     } catch (error) {
//       console.error("Error deleting account data:", error);
//     }
//   };

//   return (
//     <Wrapper>
//       <Table>
//         <thead>
//           <tr>
//             <th>Sr. No</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Photo</th>
//             <th>Signature</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {accounts.length > 0 ? (
//             accounts.map((account, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {editingAccount === account.id ? (
//                     <input
//                       type="text"
//                       name="name"
//                       value={editForm.name}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     account.name
//                   )}
//                 </td>
//                 <td>
//                   {editingAccount === account.id ? (
//                     <input
//                       type="email"
//                       name="email"
//                       value={editForm.email}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     account.email
//                   )}
//                 </td>
//                 <td>
//                   {account.photo && (
//                     <img
//                       src={`http://localhost:1100/images/${account.photo}`}
//                       alt="Photo"
//                       width="60"
//                     />
//                   )}
//                 </td>
//                 <td>
//                   {account.signature && (
//                     <img
//                       src={`http://localhost:1100/images/${account.signature}`}
//                       alt="Signature"
//                       width="60"
//                     />
//                   )}
//                 </td>
//                 <td>
//                   {account.photo && (
//                     <Button onClick={() => handleDownload(account.photo)}>
//                       Download Photo
//                     </Button>
//                   )}
//                   {account.signature && (
//                     <Button onClick={() => handleDownload(account.signature)}>
//                       Download Signature
//                     </Button>
//                   )}
//                   {editingAccount === account.id ? (
//                     <Button onClick={() => handleSave(account.id)}>Save</Button>
//                   ) : (
//                     <Button onClick={() => handleEdit(account)}>Edit</Button>
//                   )}
//                   <Button onClick={() => handleDelete(account.id)} deleteButton>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No Data to display</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </Wrapper>
//   );
// }

// // Styled components
// const Wrapper = styled.div`
//   padding: 20px;
//   background-color: #f4f4f9;
//   display: flex;
//   justify-content: center;
// `;

// const Table = styled.table`
//   width: 100%;
//   max-width: 1000px;
//   border-collapse: collapse;
//   background-color: #fff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   th,
//   td {
//     padding: 15px;
//     text-align: center;
//     border-bottom: 1px solid #ddd;
//   }

//   th {
//     background-color: #007bff;
//     color: #fff;
//     font-weight: bold;
//   }

//   td {
//     font-size: 0.9rem;
//   }

//   img {
//     border-radius: 4px;
//     max-width: 60px;
//     height: auto;
//   }
// `;

// const Button = styled.button`
//   padding: 8px 12px;
//   margin-top: 5px;
//   font-size: 0.8rem;
//   color: #fff;
//   background-color: ${(props) => (props.deleteButton ? "#dc3545" : "#28a745")};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-right: 5px;

//   &:hover {
//     background-color: ${(props) =>
//       props.deleteButton ? "#c82333" : "#218838"};
//   }
// `;

// export default Display;
