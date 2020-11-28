import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    titleCode: Yup.string()
        .required('Title is required'),
    customerType: Yup.string()
        .required('Account type is required'),
    firstName: Yup.string()
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    email: Yup.string()
        .email('Incorrect email format')
        .required('Email Address is required'),
    password: Yup.string()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters')
});

export {
    RegisterSchema
}