import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginInitialValue } from './LoginWrapper';
import { loginStyle } from './LoginStyle';
import { Eye, EyeOff } from 'lucide-react-native';
type Props = {
  initialValues: any;
  handleSubmit: (
    values: loginInitialValue,
    {}: FormikHelpers<loginInitialValue>,
  ) => void;
  ValidationSchema: any;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
};

const Login = ({
  initialValues,
  handleSubmit,
  ValidationSchema,
  showPassword,
  setShowPassword,
  navigation,
}: Props) => {
  return (
    <View>
      <Text style={loginStyle.heading}>Welcome</Text>
      <View style={loginStyle.paraContainer}>
        <Text style={loginStyle.paragraph}>
          Access your Orders, Wishlist and exclusive offers by logging in
        </Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {({
          handleBlur,
          touched,
          errors,
          values,
          setFieldValue,
          handleSubmit: submitForm,
        }) => {
          return (
            <View style={loginStyle.mainContainer}>
              {/* Name */}
              <View>
                <Text style={loginStyle.label}>Name</Text>
                <TextInput
                  style={loginStyle.input}
                  placeholder="Please Enter Name Here"
                  value={values?.name}
                  onChangeText={(text: string) => setFieldValue('name', text)}
                  onBlur={handleBlur('name')}
                  placeholderTextColor={'#666'}
                />
                {touched?.name && errors?.name && (
                  <Text style={loginStyle.error}>{errors?.name}</Text>
                )}
              </View>

              {/* Email */}
              <View>
                <Text style={loginStyle.label}>Email</Text>
                <TextInput
                  value={values?.email}
                  style={loginStyle.input}
                  placeholder="Enter Email here"
                  onChangeText={text => setFieldValue('email', text)}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  placeholderTextColor={'#666'}
                />
                {touched.email && errors?.email && (
                  <Text style={loginStyle.error}>{errors?.email}</Text>
                )}
              </View>

              {/* Password */}
              <View>
                <Text style={loginStyle.label}>Password</Text>
                <View style={loginStyle.passwordView}>
                  <TextInput
                    style={loginStyle.passwordInput}
                    value={values?.password}
                    placeholder="Enter password here"
                    onChangeText={text => setFieldValue('password', text)}
                    onBlur={handleBlur('password')}
                    secureTextEntry={!showPassword}
                    placeholderTextColor={'#666'}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </Text>
                  </TouchableOpacity>
                </View>
                {touched.password && errors?.password && (
                  <Text style={loginStyle.error}>{errors?.password}</Text>
                )}
              </View>
              <View style={loginStyle.termContainer}>
                <View style={loginStyle.checkboxContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setFieldValue('term', !values.term);
                    }}
                    style={[
                      loginStyle.checkbox,
                      {
                        borderColor: values.term ? '#1BD751' : '#999',
                        backgroundColor: values.term
                          ? '#1BD751'
                          : 'transparent',
                      },
                    ]}
                  >
                    {values.term && (
                      <Text style={loginStyle.checkboxIcon}>✓</Text>
                    )}
                  </TouchableOpacity>
                  <Text>Remember me</Text>
                </View>
                <Text style={loginStyle.forgotText}>Forgot Password ?</Text>
              </View>
              {/* Submit */}
              <View style={loginStyle.actions}>
                <TouchableOpacity
                  style={loginStyle.button}
                  onPress={submitForm}
                >
                  <Text style={loginStyle.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={loginStyle.account}>
                  <Text style={loginStyle.accountText}>
                    {' '}
                    Don't have an account ?
                  </Text>
                  <Text
                    style={loginStyle.register}
                    onPress={() => navigation.navigate('register')}
                  >
                    Register
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Login;
