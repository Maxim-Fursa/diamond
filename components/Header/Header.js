import { Pressable, Text, View } from 'react-native';
import styles from './style.module.scss'

export default function Header({ text, leftFunc, leftSvg, rightFunc, rightSvg }) {

    return (
        <View style={styles.top}>
            {
                leftSvg && (
                    <Pressable onPress={leftFunc}>{leftSvg}</Pressable>
                )
            }
            {
                text && (
                    <Text style={styles.topText}>{text}</Text>
                )
            }
            {
                rightSvg && (
                    <Pressable onPress={rightFunc}>{rightSvg}</Pressable>
                )
            }
        </View>
    )
}
