import {View, Text, Image} from 'react-native'

export default function Hero() {
    return (
        <View className="flex-1 items-center bg-sky-100">
            <View className="w-[90%]">
                <View>
                    <Text className="text-6xl font-bold text-blue-500 text-center mt-20">The Software Engineer your Team Needs</Text>
                    <Text className="text-lg text-center mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus tellus, placerat in consequat bibendum, porttitor in tellus. Maecenas nec ante luctus, vulputate mi in, porta nulla.</Text>
                </View>
                <View className="items-center mt-10">
                    <Image source={require('../assets/sitting-removebg-preview.png')} />
                </View>
            </View>
        </View>
    );
}