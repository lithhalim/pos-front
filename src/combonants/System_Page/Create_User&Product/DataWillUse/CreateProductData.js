import * as Yup from 'yup';


const Data_Details={
    input:[
        {name:"productName",placeholder:"Product Name",type:"text"},
        {name:"Price",placeholder:"Price",type:"text"},
        {name:"quantity",placeholder:"Quantity",type:"text"}
    ],
    select:{
        name:"categories",placeholder:"Categories",option:[
                {value:"sweet",name:"Sweet"},
                {value:"drink",name:"Drink"},
                {value:"pizza",name:"Pizza"},
                {value:"pastta",name:"Pastta"},
                {value:"fried chicken",name:"fried chicken"}]
    }
    ,initialValues:{
        productName : '',
        categories:'',
        Price:"",
        quantity:10
      }
    ,SignupSchema : Yup.object().shape({
        productName:Yup.string()
        .label('product Name Required')
        .required(),
        categories: Yup.string()
        .label('categories')
        .required(),
        Price:Yup.number()
        .label("Insert Price")
        .required(),
        quantity:Yup.number()
        .label("Insert quantity")
        .required()
    }),
    fetchInform:{
        url:"createpost",
        item:"postId"
    }
      
    
}


export default Data_Details