import React,{useContext} from 'react';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';


// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import "./style/style.scss";
import {RiDeleteBin5Line} from "react-icons/ri";
import {motion} from "framer-motion";
import { Product_Context } from '../../../../context-api/product-context';
import Loding_Page from '../../../loading/Loding-Page';
import { invios_Context } from '../../../../context-api/Invios-context';





function Table_All_Report() {
  const invios_Context_Item=useContext(invios_Context)

    function usePosts() {
        return useQuery([`getInvios`], async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}getInvios`);
          return data;
        });
      }  
    
      const { status, data, error, isLoading,refetch } = usePosts();



      const deleteItem=(event)=>{
        let AllUserData=event.currentTarget.getAttribute("datatype");
        let Datause=data.filter((All)=>(All.invoiceNumber==AllUserData));
        invios_Context_Item.setAllDataPrint(Datause[0])
      }
      

      if(isLoading){
        return(<Loding_Page/>)
      }


    
  
      const columns = [

        { field: 'invoiceNumber', headerName: 'Invoice Number ', width:200, headerAlign: 'center',align:"center"},
        { field: 'createdAt', headerName: 'Date ', width:180 ,   headerAlign: 'center',align:"center"     },
        { field: 'UserName', headerName: 'Cashire ', width:150 ,    headerAlign: 'center',align:"center"    },
        { field: 'TotalPrice', headerName: "Total Price" , width:150,  headerAlign: 'center',align:"center" },
        { field: 'NumberItem', headerName: 'Item ', width:140, headerAlign: 'center',align:"center"},
        { field: 'descount', headerName: 'Descount ', width:140, headerAlign: 'center',align:"center"},
        { field: 'Delete', headerName: 'Delete ', width:200, headerAlign: 'center', align:"center", 
          renderCell:(params)=>{
          return(
              <div className='delete-Product-section'>
                  <button datatype={params.row.invoiceNumber} onClick={deleteItem} ><span>Print</span> <span><RiDeleteBin5Line/></span></button>
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
    

export default Table_All_Report



