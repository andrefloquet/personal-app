import {View, Text, Image} from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function Footer() {

    const size = 24;
    const color = "#0284c7"

    return (
        <View className='bg-sky-100'>
            <View className="flex flex-col gap-10 justify-center items-center w-[90%] mx-auto py-6">
                <View className="flex flex-col gap-6 justify-center items-center">
                    <View>
                        <Image 
                            source={require('../assets/logo.png')}
                            className="w-24 h-24"
                         />
                    </View>
                    <View className="flex flex-col gap-4">
                        <Text>Link 1</Text>
                        <Text>Link 2</Text>
                        <Text>Link 3</Text>
                        <Text>Link 4</Text>
                    </View>
                </View>
                <View className="flex flex-col items-center justify-center mb-4">
                    <View className="flex flex-row items-center justify-center gap-4 mb-4">
                        <FontAwesome name="linkedin-square" size={size} color={color} />
                        <AntDesign name="github" size={size} color={color} />
                        <Entypo name="instagram" size={size} color={color} />
                        <Entypo name="facebook" size={size} color={color} />
                    </View>
                    <View>
                        <Text className="text-sm">{'\u00A9'} 2025 Andre Floquet. All rights reserved.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}