import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Verification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "green", paddingHorizontal: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          padding: 10,
        }}
      >
        <Ionicons
          name="chevron-back-circle-outline"
          size={40}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Continue with phone
        </Text>
      </View>
    </SafeAreaView>
  );
};
