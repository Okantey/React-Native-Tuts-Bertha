import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default Verification = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "white",
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
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Continue with phone
        </Text>
      </View>

      {/* chat box design */}
      <View style={styles.chatBox}>
        {/* icon */}
        <View style={styles.logo}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=740&t=st=1694771254~exp=1694771854~hmac=9411ec8c1fdd539a1e37d41df2654ff494f0b7d8b94989f8ff475bea2b2e65ba",
            }}
            style={styles.image}
          />
          <Text style={styles.chatNumber}>2</Text>
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
    position: "relative",
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 100,
  },
  chatNumber: {
    position: "absolute",
    top: -2,
    right: 2,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 100,
  },
  chatSection: {
    flex: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
