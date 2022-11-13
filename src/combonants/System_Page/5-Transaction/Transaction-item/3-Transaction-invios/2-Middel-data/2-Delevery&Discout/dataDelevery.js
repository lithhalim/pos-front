import {TbTruckDelivery} from "react-icons/tb";
import {TbDiscount2} from "react-icons/tb";
import * as Yup from 'yup';


const DataDelevery={
    input:[
        {name:"Delevery",value:"delevery",type:"text",icon:<TbTruckDelivery/>},
        {name:"Descount",value:"descout",type:"text",icon:<TbDiscount2/>},
    ]
    ,initialValues:{
        descout: 0,
        delevery:0,
        currency:"USA"
      }
    ,SignupSchema : Yup.object().shape({
        descout:Yup.number().required(),    
        delevery: Yup.number().required(),
        currency: Yup.string().required(),
    })      
    
}


export default DataDelevery