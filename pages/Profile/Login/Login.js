import React from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Container, Header } from 'diamond/components'
import * as LocalAuthentication from 'expo-local-authentication';
import styles from './style.module.scss'

export default function Login({ context }) {
    const [fingerPrint, setFingerPrint] = React.useState(0)
    const { signIn } = React.useContext(context);
    
    React.useEffect(() => {
        LocalAuthentication.hasHardwareAsync()
            .then(response => {
                if (response) {
                    LocalAuthentication.authenticateAsync({
                        cancelLabel: 'Cancel'
                    })
                    .then(response_auth => {
                        if (response_auth.success) signIn("diamond__token")
                    })
                }
            })
    }, [fingerPrint])

    return (
        <Container>
			<Header text={"Login"} />
            <View style={styles.loginWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#4C4C4C"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#4C4C4C"
                />
                <TouchableHighlight style={[styles.button, styles.buttonFull]}>
                    <Text style={[styles.buttonText, styles.buttonFullText]}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.buttonOutline]} onPress={() => setFingerPrint(fingerPrint + 1)}>
                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Login by Fingerprint</Text>
                </TouchableHighlight>
            </View>
		</Container>
    )
}
