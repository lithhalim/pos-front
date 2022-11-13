import * as Yup from 'yup';


const Data_UserCreate={
    input:[
        {name:"fullName",placeholder:"Full Name",type:"text"},
        {name:"email",placeholder:"Email",type:"email"},
        {name:"password",placeholder:"Password",type:"password"}
    ],
    select:{
        name:"role",placeholder:"Role",option:[
                {value:"admin",name:"Admin"},
                {value:"writer",name:"Writer"},
                {value:"editor",name:"Editor"},
                {value:"user",name:"User"}]
    }
    ,initialValues:{
        fullName : '',
        email:'',
        password:"",
        role:""
      }
    ,SignupSchema : Yup.object().shape({
        fullName:Yup.string()
        .label('fullName  Required')
        .required(),
        email: Yup.string()
        .label('email')
        .required(),
        password:Yup.string()
        .label("Insert password")
        .required(),
        role:Yup.string()
        .label("Insert role")
        .required()
    }),
    fetchInform:{
        url:"signup",
        item:"regusterid"
    }


      
    
}


export default Data_UserCreate