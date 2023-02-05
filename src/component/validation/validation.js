import *  as yup from "yup";


export const clientSchema=yup.object().shape({
  id:yup.string().required("الاسم مطلوب").min(10,"رقم الهوية 10 راقام"),
  natationalty:yup.string().required("معلومات الجنسية مطلوبة"),
  name:yup.string().required("الاسم مطلوب"),
  mobile:yup.string().required("رقم الجوال مطلوب").min(10,"رقم الجوال 10 راقام"),
  email:yup.string().required("الايميل مطلوب").email("الايميل غير صحيح"),
  wId:yup.string().notRequired().min(10,"رقم هوية الوكيل 10 راقام"),
})



export const checkBeforeSave=async(dataToCheck)=>{
    let errorArray=[]
    const isDataValid = await clientSchema
      .validate(dataToCheck, { abortEarly: false })
      .then((responseData) => {
        errorArray = []
        return errorArray;
      })
      .catch((err) => {
        errorArray = err.errors;
        console.log("error :", errorArray);
        return errorArray;
      });

      return errorArray
}
