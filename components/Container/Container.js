import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style.module.scss'

export default function Container({ children }) {

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={{paddingBottom: 30}}>
                {children}
			</ScrollView>
		</SafeAreaView>
    )
}
