import "./global.css"

import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Hero from './components/hero';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <Hero />
      </ScrollView>
    </>
  );
}

