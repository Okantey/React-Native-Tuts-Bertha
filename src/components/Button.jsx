import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default Button = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: "100%",
    padding: 20,
    marginVertical: 30,
    borderRadius: 15,
  },
});
