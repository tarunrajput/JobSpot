import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const LoginScreen = () => {
  const [isPassMasked, setIsPassMasked] = useState(true);

  const togglePasswordMask = () => {
    setIsPassMasked(!isPassMasked);
  };

  return (
    <View style={{ margin: 32, borderWidth: 0, flex: 1 }}>
      <View
        style={{
          height: "15%",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0,
        }}
      >
        <Text style={{ color: "#0D0140", fontWeight: "700", fontSize: 30 }}>
          Welcome
        </Text>
      </View>
      <View style={{ borderWidth: 0, flex: 1 }}>
        <Text style={{ fontSize: 12, fontWeight: "700", color: "#0D0140" }}>
          Email
        </Text>
        <TextInput
          style={{
            borderWidth: 0,
            height: 60,
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 16,
          }}
          placeholder={"youremail@domain"}
          placeholderTextColor={"rgba(13, 1, 64, 0.6)"}
        />
        <Text style={{ fontSize: 12, fontWeight: "700", color: "#0D0140" }}>
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFF",
            height: 60,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            secureTextEntry={isPassMasked}
            autoCorrect={false}
            style={{ borderWidth: 0, width: "90%", height: 60 }}
          />
          <Pressable onPress={togglePasswordMask}>
            <Icon
              name={isPassMasked ? "eye" : "eye-off"}
              size={24}
              color={"black"}
            />
          </Pressable>
        </View>

        <Text style={{ alignSelf: "flex-end" }}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

});
