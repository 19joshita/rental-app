import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginWrapper from '../screens/auth/login/LoginWrapper';
import RegisterWrapper from '../screens/auth/resgister/RegisterWrapper';

type AuthParamList = {
  login: undefined;
  register: undefined;
};

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginWrapper} />
      <Stack.Screen name="register" component={RegisterWrapper} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
