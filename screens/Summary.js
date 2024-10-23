import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

const Summary = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-row items-center p-1 justify-between">
        <View className="flex flex-row items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={24} color="black" />
          </Pressable>

          <Text className="text-xl font-bold text-blue-500">Summary</Text>
        </View>
        <Text className="font-bold text-lg">Sleep</Text>
        <Pressable onPress={() => navigation.navigate("sleep")}>
          <Text className="text-blue-500 font-bold text-lg">View data</Text>
        </Pressable>
      </View>
      <ScrollView className="p-2" showsVerticalScrollIndicator={false}>
        <View className="mt-2 w-full rounded-xl h-60 border-gray-300 bg-gray-200">
          <Image
            source={require("../assets/cartsleep.jpg")}
            className="w-full h-44 rounded-t-xl"
          />
          <View className="p-2">
            <Text className="text-lg font-bold">Why is sleep so important</Text>
            <Text>Find out why the body needs sleep</Text>
          </View>
        </View>
        <View className="mt-2 w-full rounded-xl h-60 border-gray-300 bg-gray-200">
          <Image
            source={require("../assets/night.jpg")}
            className="w-full h-44 rounded-t-xl"
          />
          <View className="p-2">
            <Text className="text-lg font-bold">
              How to improve your night's sleep
            </Text>
            <Text>These tips may help with sleep problems</Text>
          </View>
        </View>
        <View className="mt-2 w-full rounded-xl h-60 border-gray-300 bg-gray-200">
          <Image
            source={require("../assets/night.jpg")}
            className="w-full h-44 rounded-t-xl"
          />
          <View className="p-2">
            <Text className="text-lg font-bold">
              How to improve your night's sleep
            </Text>
            <Text>These tips may help with sleep problems</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Summary;
