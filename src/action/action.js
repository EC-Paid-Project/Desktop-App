import * as Api from "../api/index"



export const  login=async(formdata)=>{
try{
    const a=await Api.login(formdata);
    if(a.code==200|| a.code ==201){
        return a.body
    }
    return null
}
catch{
    return null
}
}
export const  getAppointment=async()=>{
try{
    const a=await Api.getAppointment();
    if(a.code==200|| a.code ==201){
        return a.body
    }
    return null
}
catch{
    return null
}
}
export const  deleteAppointment=async(id)=>{
try{
    const a=await Api.deleteAppointment(id);
    if(a.code==200|| a.code ==201){
        return a.body
    }
    return null
}
catch{
    return null
}
}