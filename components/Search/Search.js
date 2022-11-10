import { View, TextInput} from 'react-native';
import Svg, { Path } from 'react-native-svg'
import styles from './style.module.scss'

export default function Search() {
    return (
        <View style={styles.search}>
            <TextInput 
                style={styles.searchInput} 
                placeholder="Search"
                placeholderTextColor="#4C4C4C" 
            />
            <Svg style={[styles.searchSvg, {
                transform: [{translateY: -13}]
            }]}  width="25" height="25" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24C19.7467 24 24 19.7467 24 14.5C24 9.25329 19.7467 5 14.5 5ZM3 14.5C3 8.14873 8.14873 3 14.5 3C20.8513 3 26 8.14873 26 14.5C26 20.8513 20.8513 26 14.5 26C8.14873 26 3 20.8513 3 14.5Z" fill="#4C4C4C"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.2177 21.2179C21.6082 20.8274 22.2414 20.8274 22.6319 21.2179L28.7069 27.2929C29.0974 27.6835 29.0974 28.3166 28.7069 28.7072C28.3164 29.0977 27.6832 29.0977 27.2927 28.7072L21.2177 22.6322C20.8272 22.2416 20.8272 21.6085 21.2177 21.2179Z" fill="#4C4C4C"/>
            </Svg>
        </View>
    )
}
