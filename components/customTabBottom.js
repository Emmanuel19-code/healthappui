import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CustomBottom = ({ navigation, state, descriptors }) => {
  return (
    <View className="h-24 items-center p-1">
      <View className="bg-gray-200 w-60 py-2 flex flex-row justify-around rounded-full">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let icon;
          if (route.name === "home") {
            icon = (
              <Entypo name="home" size={24} color={isFocused ? "white" : "black"} />
            );
          } else if (route.name === "search") {
            icon = (
              <AntDesign name="search1" size={24} color={isFocused ? "#673ab7" : "black"} />
            );
          } else if (route.name === "profile") {
            icon = (
              <AntDesign name="user" size={24} color={isFocused ? "#673ab7" : "black"} />
            );
          } else if (route.name === "subdash") {
            icon = (
              <MaterialIcons name="dashboard" size={24} color={isFocused ? "#673ab7" : "black"} />
            );
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              className={`${
                isFocused ? "bg-blue-500" : "bg-white"
              } p-1 ml-4 mr-4 w-12 rounded-full justify-center items-center h-12`}
            >
              {icon}
              
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottom;
