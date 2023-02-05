import * as yup from "yup";
export const offerSchema = yup.object({
  title: yup
    .string()
    .required("لابد من عنوان للعرض")
    .min(25, "العنوان لا يقل عن 25 حرف "),
  offerDate: yup.date().default(() => new Date()),

  detail: yup
    .string()
    .required("وصف العرض مهم")
    .min(5, "العنوان لا يقل عن 5 حرف ").nullable(),

  ReigonSelect: yup.string().required("بجب اختيار المنطقة ").nullable(),

  CitySelect: yup
    .string()
    .required("بجب اختيار المدينة ").min(1,"fffffبجب اختيار المدينة ").nullable(),
     

  DistSelect: yup
    .string()
    .required("بجب اختيار الحي ").nullable() ,

  price: yup
    .number().min(0, "السعر غير صحيح").nullable()

    // .test("Is positive?", "السعر غير صحيح", (value) => value >= 0),
});