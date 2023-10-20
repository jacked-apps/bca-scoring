import * as yup from 'yup';

//phone format (###)###-####
const phoneRegEx = /^\(\d{3}\)\d{3}-\d{4}$/;
//zip format ##### or #####-####
const zipRegEx = /^\d{5}(-\d{4})?$/;
// 21 years ago
const minimumAge = new Date();
minimumAge.setFullYear(minimumAge.getFullYear() - 21);

export const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, 'First name must be at least 1 character')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),
  nickname: yup.string().max(10, 'Nickname must be less than 10 characters'),
  phone: yup
    .string()
    .matches(phoneRegEx, 'Phone number must be in (###)###-#### format')
    .required('Phone Number is required'),
  address: yup.string().max(100, 'Address must be less than 100 characters'),
  city: yup
    .string()
    .max(40, 'City must be less than 40 characters')
    .required('City is required'),
  zip: yup
    .string()
    .matches(zipRegEx, 'Please enter a valid ZIP code')
    .required('Zip code is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  dob: yup
    .date()
    .required('Date of Birth is required')
    .typeError('Please provide a valid date')
    .max(minimumAge, 'You must be at least 21 years old'),
});
