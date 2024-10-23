import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Summary = ({ bgcolor, infoName, icon,value,time }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      className={`p-2 m-1 h-32 justify-between rounded-lg`}
      style={{ backgroundColor: bgcolor }}
      onPress={() => navigation.navigate("summary")}
    >
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <View className="bg-white w-10 h-10 p-1 items-center justify-center rounded-full">
            {icon}
          </View>
          <Text className="ml-2 text-lg font-bold">{infoName}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text>{time}</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
      <View className="flex flex-row justify-between  items-end">
        <Text className="text-2xl">{value}</Text>
        <View className="flex-row items-end">
          <View className="p-1 bg-gray-100 mx-0.5 rounded-lg opacity-40 h-8" />
          <View className="p-1 bg-gray-100 mx-0.5 rounded-lg opacity-40 h-14" />
          <View className="p-1 bg-gray-100 mx-0.5 rounded-lg opacity-40 h-10" />
          <View className="p-1 bg-gray-100 mx-0.5 rounded-lg opacity-40 h-10" />
          <View className="p-1 bg-gray-100 mx-0.5 rounded-lg opacity-40 h-8" />
          <View className="p-1  mx-0.5 rounded-lg opacity-40 h-6 bg-black" />
        </View>
      </View>
    </Pressable>
  );
};

export default Summary;
