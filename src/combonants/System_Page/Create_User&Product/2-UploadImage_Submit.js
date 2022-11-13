import React ,{useState} from 'react';
import {MdOutlineAddAPhoto} from "react-icons/md"
import Button from '@mui/material/Button';
import axios from 'axios';


function Submit_UploadPhoto({GetPhoto}:any) {
    const [ImageUpload,setImageUpload]=useState<any>(false)


    const getImage_file=async(e:any)=>{
        //get the file i will uolodad
        let file=e.target.files[0]

        //create new Form data to can upload on cloudaniry
        const formData = new FormData();

        formData.append("file",file);
        //setting ---> upload--->unsignd upload ---->Upload presets {"lobdevu9"} from cloudinary for unsiged name 
        formData.append('upload_preset', 'ugtx75zu');
        //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
    await axios.post("https://api.cloudinary.com/v1_1/lithhalim/upload",formData).then((alldata)=>{
        GetPhoto(alldata.data?.url)
        setImageUpload(alldata.data?.url)
    })
}




  return (
    <div>

        <Button variant="contained" component="label" className='stylebutton' sx={{width:"100%"}}>
            Upload Image <span style={{fontSize:"1.2em",marginLeft:"4px",marginTop:"4px"}}><MdOutlineAddAPhoto/></span>
            <input hidden accept="image/*" multiple type="file" name="imagesection" onChange={getImage_file} />
        </Button>
        <div className='container-image-upload'>
            {ImageUpload?<img src={ImageUpload} alt="" />:<></>}
        </div>
                     
       <button className='submit-button-section' type="submit">Submit All Data</button>          

    </div>
  )
}

export default Submit_UploadPhoto