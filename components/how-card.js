import { View, Text } from 'react-native'
import { Monitor, Server, Database, CloudCog, Network, Smartphone } from "lucide-react-native";
import { cssInterop } from "nativewind";

//TODO: reduce this duplicate code. 
const iconsArray = [Monitor, Server, Database, CloudCog, Network, Smartphone];

const iconsObject = {Monitor, Server, Database, CloudCog, Network, Smartphone}

// Map Tailwind's computed `color` to the icon's `color` prop
iconsArray.forEach((Icon) => {
  cssInterop(Icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: "color",
      },
    },
  });
});

export default function HowCard({ type, title, text }) {

    const Icon = iconsObject[type]; 

    return (
        <View className="bg-white items-center p-6 rounded-md shadow-sm md:items-start">
            <Icon className="text-sky-600" size={32}  />
            <Text className="mt-2 text-lg font-bold mb-3">{title}</Text>
            <Text>{text}</Text>
        </View>
    );
}