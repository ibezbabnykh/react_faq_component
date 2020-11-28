import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Incorrect email format')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters')
});

export {
    LoginSchema
}