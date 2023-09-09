import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import logo from "../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <View style={styles.inputContainerOne}>
        <TextInput placeholder="Your email" style={styles.input} />
      </View>
      <View style={styles.inputContainerTwo}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
            Forgot Password?
          </Text>
          <Feather name="eye-off" size={24} color="gray" />
        </View>
      </View>
      <Button
        name="Login"
        onPress={() => navigation.navigate("Verification")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerOne: {
    width: "100%",
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginTop: 40,
  },
  inputContainerTwo: {
    width: "100%",
    borderBottomWidth: 1,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
  },
});
