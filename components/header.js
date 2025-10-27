import {View, Text, Image} from 'react-native'

export default function Header() {
    return (
        <View className="flex items-center bg-sky-100 pt-20">
            <Image source={require('../assets/logo.png')} className="h-24 w-24" />
        </View>
    )
}