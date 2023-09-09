import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Verification } from "../screens";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { MainStack, AuthStack };
