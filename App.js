import "./global.css"

import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Hero from './components/hero';
import How from './components/how';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <Hero />
        <How />
        <Footer />
      </ScrollView>
    </>
  );
}

