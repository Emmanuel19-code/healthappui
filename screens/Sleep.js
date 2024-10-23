import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import GridView from "../components/GridView";
const Sleep = ({navigation}) => {
  const [time, setTime] = useState("D");
  return (
    <SafeAreaView className="p-2">
      <View className="flex flex-row items-center justify-between">
        <Pressable  onPress={()=>navigation.goBack()}>
        <Entypo name="chevron-small-left" size={24} color="black" />
        </Pressable>
        
        <Text className="text-blue-500 font-bold text-lg">Add data</Text>
      </View>
      <Text className="font-bold text-3xl mt-8">Sleep</Text>
      <View className="flex flex-row items-center bg-gray-200 p-1 mt-4 rounded-full justify-between">
        <Pressable
          onPress={() => setTime("D")}
          className={`${
            time === "D" && "bg-white"
          } p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <Text className="text-center">D</Text>
        </Pressable>
        <Pressable
          onPress={() => setTime("W")}
          className={`${
            time === "W" && "bg-white"
          } p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <Text className="text-center">W</Text>
        </Pressable>
        <Pressable
          onPress={() => setTime("M")}
          className={`${
            time === "M" && "bg-white"
          } p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <Text className="text-center">M</Text>
        </Pressable>
        <Pressable
          onPress={() => setTime("6M")}
          className={`${
            time === "6M" && "bg-white"
          } p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <Text className="text-center">6M</Text>
        </Pressable>
        <Pressable
          onPress={() => setTime("Y")}
          className={`${
            time === "Y" && "bg-white"
          } p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <Text className="text-center">Y</Text>
        </Pressable>
      </View>
      <View className="flex flex-row mt-2">
        <View className="flex flex-1 px-2 py-1 bg-blue-200 m-1 justify-between rounded-xl">
          <Text className="font-bold text-lg">Avg. time asleep</Text>
          <View className="flex flex-row items-center">
            <Text className="font-bold text-2xl">7</Text>
            <Text className="font-bold text-sm">hr</Text>
            <Text className="font-bold text-2xl">17</Text>
            <Text className="font-bold text-sm">min</Text>
          </View>
        </View>
        <View className="flex flex-1 m-1 ">
          <Image
            source={require("../assets/sleep.jpg")}
            className="w-full h-24 rounded-xl"
          />
        </View>
      </View>
      <View className=" mt-4 rounded  p-1 h-72 bg-gray-200">
        <View className="flex flex-row justify-between">
          <View className="p-1  w-72 ">
            <GridView />
            <View className="absolute left-3 flex flex-wrap flex-row  w-full justify-between top-1">
              <View className="bg-blue-500 p-2   h-10 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-16 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-20 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-16 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-22 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-12 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-20 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-28 rounded-lg"></View>
              <View className="bg-blue-500 p-2 h-32 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-24 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-16 rounded-lg"></View>
              <View className="bg-blue-500 p-2   h-26 rounded-lg"></View>
            </View>
          </View>
          <View className="justify-between h-56 p-1 ">
            <Text className=" font-bold m-1">01:00</Text>
            <Text className=" font-bold m-1">03:00</Text>
            <Text className=" font-bold m-1">04:00</Text>
            <Text className=" font-bold m-1">05:00</Text>
            <Text className=" font-bold m-1">06:00</Text>
            <Text className=" font-bold m-1">07:00</Text>
            <Text className=" font-bold m-1">08:00</Text>
            <Text className=" font-bold m-1">09:00</Text>
            <Text className=" font-bold m-1">10:00</Text>
          </View>
        </View>
        <View className="flex flex-row -mt-5  justify-between items-center">
          <Text className="text-center w-10 font-bold">Mon</Text>
          <Text className="text-center w-10 font-bold">Tue</Text>
          <Text className="text-center w-10 font-bold">Wed</Text>
          <Text className="text-center w-10 font-bold">Thu</Text>
          <Text className="text-center w-10 font-bold">Fri</Text>
          <Text className="text-center w-10 font-bold">Sat</Text>
          <Text className="text-center w-10 font-bold"></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sleep;
