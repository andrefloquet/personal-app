import {View, Text, Image} from 'react-native'

export default function Hero() {
    return (
        <View className="flex-1 items-center bg-sky-100">
            <View className="w-[90%]">
                <View>
                    <Text className="text-6xl font-bold text-blue-500 text-center mt-20">Andre Floquet, The Software Engineer your Team Needs</Text>
                    <Text className="text-lg text-center mt-10">Would you rather have an average Permanent Resident developer or a Senior Engineer who is currently holding a student visa? In over 18 years working as a Software Engineer, there was not anything that I could not do yet.</Text>
                </View>
                <View className="items-center mt-10">
                    <Image source={require('../assets/sitting-removebg-preview.png')} />
                </View>
            </View>
        </View>
    );
}