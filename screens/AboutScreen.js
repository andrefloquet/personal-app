import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CircleCheck } from "lucide-react-native";

import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutScreen() {
    return (
        <>
            <StatusBar style="auto" />
            <ScrollView className="bg-white">
                <Header />
                <View className="w-[90%] mx-auto my-20">
                    <Text className="text-center text-4xl">About me</Text>
                </View>
                <View className="w-[90%] mx-auto">
                    <Text className="text-center">Hi there! My name is Andre Floquet, I have a bachelor's degree of science in computer science and I have been working as a Software Engineer for over 18 years. I worked on web development (backend and frontend), Desktop systems, ERP systems, Mobile apps and so on. Hosting and deploying the apps on premises and cloud environments.</Text>
                </View>
                <View className="w-[90%] mx-auto mt-10">
                    <Text className="text-center">My interests are web and mobile app development, DevOps, Network and AI. My hobbies are surfing, skating, skydiving and studying. I am a forever student :) </Text>
                </View>
                <View className="w-[90%] mx-auto my-20">
                    <Text className="text-center text-4xl">About The App</Text>
                </View>
                <View className="w-[90%] mx-auto">
                    <Text className="text-center">This app is built using React Native and it is available for IOS and Android devices. It will have the sections below:</Text>
                </View>
                <View className="w-[90%] mx-auto mt-20"></View>
                <View className="w-[90%] mx-auto">
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#16A34A' /></View>
                    <View><Text className="line-through">Header / Main Navigation</Text></View>
                </View>
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#16A34A' /></View>
                    <View><Text className="line-through">Hero Section</Text></View>
                </View>
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#16A34A' /></View>
                    <View><Text className="line-through">How Can I help you section</Text></View>
                </View>
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#fff' /></View>
                    <View><Text className="line-through">Skills</Text></View>
                </View>   
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#fff' /></View>
                    <View><Text className="line-through">Work Experience</Text></View>
                </View>
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#fff' /></View>
                    <View><Text className="line-through">Education</Text></View>
                </View>     
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#fff' /></View>
                    <View><Text className="line-through">Certifications</Text></View>
                </View>      
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#16A34A' /></View>
                    <View><Text className="line-through">About Page</Text></View>
                </View>   
                <View className="flex-row justify-start items-center bg-white gap-4 p-6">
                    <View><CircleCheck size={24} color='#16A34A' /></View>
                    <View><Text className="line-through">Footer</Text></View>
                </View>                                                                                                                 
</View>
                <Footer className="mt-20" />
            </ScrollView>
        </>
    )
}