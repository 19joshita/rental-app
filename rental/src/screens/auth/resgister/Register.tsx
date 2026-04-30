import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RegisterInitialValue } from './RegisterWrapper';
import { registerStyle } from './RegisterStyle';
import { Eye, EyeOff } from 'lucide-react-native';

type Props = {
  initialValues: any;
  handleSubmit: (
    values: RegisterInitialValue,
    {}: FormikHelpers<RegisterInitialValue>,
  ) => void;
  ValidationSchema: any;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
};
const Register = ({
  initialValues,
  handleSubmit,
  ValidationSchema,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  navigation,
}: Props) => {
  return (
    <View>
      <Text style={registerStyle.heading}>Register</Text>
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
            <View style={registerStyle.mainContainer}>
              <View>
                <Text style={registerStyle.label}>Name</Text>
                <TextInput
                  style={registerStyle.input}
                  placeholder="Please Enter Name Here"
                  value={values?.name}
                  onChangeText={(text: string) => setFieldValue('name', text)}
                  onBlur={handleBlur('name')}
                  placeholderTextColor={'#666'}
                />
                {touched?.name && errors?.name && (
                  <Text style={registerStyle.error}>{errors?.name}</Text>
                )}
              </View>
              <View>
                <Text style={registerStyle.label}>Email</Text>
                <TextInput
                  value={values?.email}
                  style={registerStyle.input}
                  placeholder="Enter Email here"
                  onChangeText={text => setFieldValue('email', text)}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  placeholderTextColor={'#666'}
                />
                {touched.email && errors?.email && (
                  <Text style={registerStyle.error}>{errors?.email}</Text>
                )}
              </View>

              {/* Password */}
              <View>
                <Text style={registerStyle.label}>Password</Text>
                <View style={registerStyle.passwordView}>
                  <TextInput
                    style={registerStyle.passwordInput}
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
                  <Text style={registerStyle.error}>{errors?.password}</Text>
                )}
              </View>
              <View>
                <Text style={registerStyle.label}>Confirm Password</Text>
                <View style={registerStyle.passwordView}>
                  <TextInput
                    style={registerStyle.passwordInput}
                    value={values?.confirmPassword}
                    placeholder="Enter Confirm Password here"
                    onChangeText={text =>
                      setFieldValue('confirmPassword', text)
                    }
                    onBlur={handleBlur('confirmPassword')}
                    secureTextEntry={!showConfirmPassword}
                    placeholderTextColor={'#666'}
                  />
                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Text>
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
                {touched.confirmPassword && errors?.confirmPassword && (
                  <Text style={registerStyle.error}>
                    {errors?.confirmPassword}
                  </Text>
                )}
              </View>

              {/* Submit */}
              <View style={registerStyle.actions}>
                <TouchableOpacity
                  style={registerStyle.button}
                  onPress={submitForm}
                >
                  <Text style={registerStyle.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={registerStyle.account}>
                  <Text style={registerStyle.accountText}>
                    {' '}
                    Already have an account?
                  </Text>
                  <Text
                    style={registerStyle.login}
                    onPress={() => navigation.navigate('login')}
                  >
                    Login
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

export default Register;
