import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Summary from "../components/Summary";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Dashbaord = () => {
  return (
    <SafeAreaView className="bg-white h-full p-2">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <Image
            source={require("../assets/man.png")}
            className="w-8 h-10 rounded-full"
          />
          <Text className="font-bold text-lg ml-1">
            Good Afternoon, Emmanuel!
          </Text>
        </View>
        <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
          <Image source={require("../assets/bell.png")} className="w-6 h-6" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center justify-between mt-10">
        <Text className="text-3xl font-bold">Summary</Text>
        <Pressable className="bg-gray-200 p-2 rounded-full">
          <Image source={require("../assets/edit.png")} className="w-6 h-6" />
        </Pressable>
      </View>
      <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
        <Summary
          bgcolor={"#b7e4bf"}
          infoName={"Steps"}
          value={"8,089"}
          time={"13:54"}
          icon={<FontAwesome6 name="person-walking" size={24} color="black" />}
        />
        <Summary
          bgcolor={"#b6d9ff"}
          infoName={"Sleep"}
          icon={<MaterialCommunityIcons name="sleep" size={24} color="black" />}
          value={"17hr 17min"}
          time={"7hr ago"}
        />
        <Summary
          bgcolor={"#ffda89"}
          infoName={"Calories"}
          value={"567kcal"}
          icon={<FontAwesome6 name="fire" size={24} color="black" />}
          time={"13:00"}
        />
        <Summary
          time={"yesterday"}
          bgcolor={"#fca5a5"}
          infoName={"Cycle"}
          icon={<Ionicons name="bicycle" size={24} color="black" />}
          value={"1km"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashbaord;
