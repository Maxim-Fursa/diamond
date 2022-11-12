import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style.module.scss'

export default function Container({ children, elem, paddingBottom = true }) {

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={paddingBottom ? {paddingBottom: 30} : {}} showsVerticalScrollIndicator={false}>
                {children}
			</ScrollView>
            {elem}
		</SafeAreaView>
    )
}
