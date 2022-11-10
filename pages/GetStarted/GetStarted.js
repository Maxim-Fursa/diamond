import { Text, View, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import getStarted from 'diamond/assets/img/get-started.jpg'
import styles from './style.module.scss'

export default function GetStarted({ navigation }) {

    return (
        <View style={styles.container}>
			<Image style={styles.image} source={getStarted}/>
			<Svg height="100%" width="100%" style={styles.gradient}>
				<Defs>
					<LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
						<Stop offset="0.01" stopColor="rgb(255,255,255)" stopOpacity="0"/>
						<Stop offset="1" stopColor="rgba(0,0,0)" stopOpacity="0.7"/>
					</LinearGradient>
				</Defs>
				<Rect width="100%" height="100%" fill="url(#grad)"/>
			</Svg>
			<View style={styles.content}>
				<View style={styles.bottom}>
					<Text style={styles.mainText}>DIAMOND CLUSTER</Text>
					<Text style={styles.addText}>5 pear-shaped diaminds weighing a total of approximently 1.00 carat, set in platinum</Text>
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={styles.buttonText}>Get started</Text>
						<Svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
							<Path fillRule="evenodd" clipRule="evenodd" d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L12.7071 26.7071C12.3166 27.0976 11.6834 27.0976 11.2929 26.7071C10.9024 26.3166 10.9024 25.6834 11.2929 25.2929L20.5858 16L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289Z" fill="white"/>
						</Svg>
					</TouchableOpacity> 
				</View>
			</View>
		</View>
    )
}
