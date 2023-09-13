import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default Verification = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "green",
        paddingHorizontal: 10,
      }}
    >
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

      {/* chat box design */}
      <View style={styles.chatBox}>
        {/* icon */}
        <View style={styles.logo}>
          <MaterialIcons name="account-circle" size={55} color="black" />
        </View>

        {/* chat section */}

        <View style={styles.chatSection}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Gideon IT</Text>
            <Text style={{ fontSize: 16 }}>Hello this is me</Text>
          </View>

          {/* time */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>6:00am</Text>
            <FontAwesome name="check-square-o" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  logo: {
    flex: 1,
  },
  chatSection: {
    flex: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
