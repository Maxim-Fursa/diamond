import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style.module.scss'

export default function Header({ text, leftSvg, rightSvg }) {

    return (
        <View style={styles.top}>
            {
                leftSvg && (
                    <TouchableOpacity>{leftSvg}</TouchableOpacity>
                )
            }
            <Text style={styles.topText}>{text}</Text>
            {
                rightSvg && (
                    <TouchableOpacity>{rightSvg}</TouchableOpacity>
                )
            }
        </View>
    )
}
