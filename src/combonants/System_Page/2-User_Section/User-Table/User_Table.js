import React,{useContext} from 'react';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';


// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import "./style/style.scss";
import {RiDeleteBin5Line} from "react-icons/ri";
import {motion} from "framer-motion";
import { Product_Context } from '../../../../context-api/product-context';





function Table_Get_Data_AllUser() {
    const Product_Context_Item=useContext(Product_Context);
    

    function usePosts() {
        return useQuery([`getDataHave`,Product_Context_Item.showCreateUser], async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}getAllData`);
          return data;
        });
      }  
    
      const { status, data, error, isLoading,refetch } = usePosts();


      const deleteItem=(event)=>{
        let regusterid=event.currentTarget.getAttribute("datatype");
        axios.post(`${process.env.REACT_APP_API}removeUser`,{regusterid:regusterid})
        refetch()
      }


    
  
      const columns = [

        { field: 'image', headerName: 'Image ', width:180, headerAlign: 'center',align:"center", 
            renderCell:(params)=>{
            return(
                <div className='Image-container'>
                    <img src={params.row.Image}/>
                </div>
            )
            }
        },
        
        { field: 'fullName', headerName: 'Full Name ', width:150 ,   headerAlign: 'center',align:"center"     },
        { field: 'regusterid', headerName: 'Reguster Id ', width:150 ,    headerAlign: 'center',align:"center"    },
        { field: 'email', headerName: "Email" , width:150,  headerAlign: 'center',align:"center" },
        { field: 'role', headerName: 'Role ', width:200, headerAlign: 'center',align:"center", 
            renderCell:(params)=>{
            return(
                <div className='catagory-container'>
                    {params.row.role}
                </div>
            )
            }
        },
        { field: 'Delete', headerName: 'Delete ', width:200, headerAlign: 'center', align:"center", 
        renderCell:(params)=>{
        return(
            <div className='delete-Product'>
                <button datatype={params.row.regusterid} onClick={deleteItem} ><span>Delete</span> <span><RiDeleteBin5Line/></span></button>
            </div>
        )
        }
    },
    ];
      
    
    
    
      //To get All Data I Have
      const rows =data?data:<></>
    
    
    
      return (
        <motion.div className='product-container' 
        style={{height:"85vh"    }}
        >
            <DataGrid rows={rows}  columns={columns}  rowHeight={55}
               sx={{ fontWeight: 'bold'}}  />
        </motion.div>
      );
    }
    

export default Table_Get_Data_AllUser



