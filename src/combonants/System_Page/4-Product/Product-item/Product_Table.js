import React,{useContext} from 'react';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';


// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import "./style/style.scss";
import {RiDeleteBin5Line} from "react-icons/ri";
import {motion} from "framer-motion";
import { Product_Context } from '../../../../context-api/product-context';








function Table_Get_Data() {
    const Product_Context_Item=useContext(Product_Context);
    

    function usePosts() {
        return useQuery([`getDataHave`,Product_Context_Item.showCreatItem], async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}getpostes`);
          return data;
        });
      }  
    
      const { status, data, error, isLoading,refetch } = usePosts();


      const deleteItem=(event)=>{
        let id=event.currentTarget.getAttribute("datatype");
        axios.post(`${process.env.REACT_APP_API}DeleteItem`,{id:id})
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
        
        { field: 'productName', headerName: 'Name Product ', width:150 ,   headerAlign: 'center',align:"center"     },
        { field: 'quantity', headerName: 'Quantity ', width:150 ,    headerAlign: 'center',align:"center"    },
        { field: 'Price', headerName: "Price" , width:150,  headerAlign: 'center',align:"center" },
        { field: 'description', headerName: "Description" , width:150,  headerAlign: 'center',align:"center" },
        { field: 'categories', headerName: 'categories ', width:200, headerAlign: 'center',align:"center", 
            renderCell:(params)=>{
            return(
                <div className='catagory-container'>
                    {params.row.categories}
                </div>
            )
            }
        },
        { field: 'Delete', headerName: 'Delete ', width:200, headerAlign: 'center', align:"center", 
        renderCell:(params)=>{
        return(
            <div className='delete-Product'>
                <button datatype={params.row.id} onClick={deleteItem} ><span>Delete</span> <span><RiDeleteBin5Line/></span></button>
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
    

export default Table_Get_Data



