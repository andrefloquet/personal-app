import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header';
import Hero from '../components/hero';
import How from '../components/how';
import Footer from '../components/footer';

export default function HomeScreen() {
    return (
        <>
            <StatusBar style="auto" />
            <ScrollView className="bg-white">
                <Header />
                <Hero />
                <How />
                <Footer />
            </ScrollView>
        </>
    )
}