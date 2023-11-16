import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

export const RegisterSchema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().min(4).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
})

