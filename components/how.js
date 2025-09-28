import { View, Text } from 'react-native'
import HowCard from './how-card';

export default function How() {
    return (
        <View className="my-20">
            <Text className="w-[90%] mx-auto text-center text-4xl font-bold mb-16">How can I help you?</Text>
            <View className="gap-8 w-[90%] mx-auto">
                <HowCard type="Server" title="Backend" text="Server side apps in PHP, NodeJs, Python and Frameworks. Modern and Legaly development." />
                <HowCard type="Monitor" title="Frontend" text="Client side apps with HTML, CSS and Javascript. Frameworks like Tailwindcss, Bootstrap, Nextjs and Nuxtjs." />
                <HowCard type="CloudCog" title="DevOps"  text="AWS Ecosystem" />
                <HowCard type="Smartphone" title="Mobile" text="Mobile apps for Android and IOS using React Native." />
                <HowCard type="Database" title="Database" text="Relational and nosql database administrator." />
                <HowCard type="Network" title="Network" text="Cisco and Juniper" />
            </View> 
        </View>
    );
}