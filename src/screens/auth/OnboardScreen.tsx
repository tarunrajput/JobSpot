import React from "react";
import { View, Image, Text } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';

const OnboardScreen = () => {
  return (
    <View style={{ margin: 32 }}>
      <View style={{ height: "10%" }}>
        <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Jobspot
          </Text>
        </View>
      </View>
      <View
        style={{
          height: "60%",
          position: "relative",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          source={require("../../assets/images/onboardbg.png")}
          style={{ position: "absolute" }}
        />
        <Image
          source={require("../../assets/images/onboard.png")}
          style={{ position: "absolute" }}
        />
      </View>
      <View style={{ height: "30%", borderWidth: 0 }}>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 40, color: "#000000", lineHeight: 38 }}>
            Find Your
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 40, color: "#FCA34D", lineHeight: 38, textDecorationLine: 'underline' }}>
            Dream Job
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 40, color: "#000000", lineHeight: 38 }}>
            Here!
          </Text>
        </View>
        <View style={{ paddingTop: 12 }}>
          <Text style={{ color: "#524B6B", fontSize: 14, fontWeight: "400" }}>
            Explore all the most exciting job roles based on your interest and
            study major.
          </Text>
        </View>
        <View style={{ backgroundColor: '#130160', borderRadius: 30, width: 60, height: 60, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='arrowright' size={32} color='#FFF' />
        </View>
      </View>
    </View>
  );
};

export default OnboardScreen;
