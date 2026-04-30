import React, { useState } from 'react';
import Login from './Login';
import { FormikHelpers } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { loginStyle } from './LoginStyle';
export type loginInitialValue = {
  name: string;
  email: string;
  password: string;
  term: boolean;
};

const LoginWrapper = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const initialValues: loginInitialValue = {
    name: '',
    email: '',
    password: '',
    term: false,
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
  });
  const handleSubmit = (
    values: loginInitialValue,
    {}: FormikHelpers<loginInitialValue>,
  ) => {
    console.log('values', values);
  };
  return (
    <SafeAreaView style={loginStyle.container}>
      <Login
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        ValidationSchema={ValidationSchema}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default LoginWrapper;
