import * as Yup from 'yup'

export const authSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

export const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
})
