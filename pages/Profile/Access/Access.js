import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Container, Header } from 'diamond/components'
import styles from './style.module.scss'

export default function Login({ context }) {

    const { signOut } = React.useContext(context);

    return (
        <Container>
			<Header text={"Access"} />
            <View style={styles.loginWrapper}>
                <View style={styles.box}>
                    <Text style={styles.text}>You are logged</Text>
                    <TouchableHighlight style={styles.button} onPress={signOut}>
                        <Text style={styles.buttonText}>Exit</Text>
                    </TouchableHighlight>
                </View>
            </View>
		</Container>
    )
}
