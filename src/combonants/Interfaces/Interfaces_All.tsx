
export interface DataChart{
    AllDatauser:Array<string>;
    Cash:string,
    NumberItem:string
    RemaningValue:string,
    TotalPrice:string,
    UserName:string,
    createdAt:string,
    delivery:string,
    descount:string
    id:string
    invoiceNumber:string, 
    updatedAt:string
  }
  
export interface ArrayDatachart{
    datause:DataChart[]
}

export interface Authntication{
    datause:{
        Image:string,
        exp:string
        fullName:string,
        iat:string,
        regusterid:string
        role:string    
    }
}


export  interface ResiveMassage {
    dataUse:{
        Image:string,
        fullName:string,
        regusterid:string,
        role:string,
        text:string,
        time:string,
        createdAt?:string,
        id:string,
        updatedAt?:string        
    }
}


export  interface Allproduct{
    Image:string,
    Price:string,
    categories:string,
    createdAt:string,
    description:string,
    id:string,
    postId:string,
    productName:string,
    quantity:string,
    selectItemQuentuty:string,
    updatedAt:string
  }
  
export  interface ReduxAllproduct{
    addToCartSlice:{
      allProduct:Allproduct[],
      value:string
    }
  }
  
