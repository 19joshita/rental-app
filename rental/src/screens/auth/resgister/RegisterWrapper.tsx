import React, { useState } from 'react';
import Register from './Register';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerStyle } from './RegisterStyle';
export type RegisterInitialValue = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const RegisterWrapper = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const registerInitialValue: RegisterInitialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const ValidationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),

    email: Yup.string()
      .trim()
      .email('Invalid email')
      .required('Email is required'),

    password: Yup.string()
      .trim()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm password is required'),
  });
  const handleSubmit = (
    values: RegisterInitialValue,
    {}: FormikHelpers<RegisterInitialValue>,
  ) => {
    console.log('values', values);
  };
  return (
    <SafeAreaView style={registerStyle.container}>
      <Register
        initialValues={registerInitialValue}
        handleSubmit={handleSubmit}
        ValidationSchema={ValidationSchema}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default RegisterWrapper;
