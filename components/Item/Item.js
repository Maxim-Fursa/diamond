import React from 'react'
import { Text, TouchableOpacity, Image, Pressable } from 'react-native';
import Svg, { Path } from "react-native-svg"
import like from 'diamond/store/like'
import { observer } from 'mobx-react-lite'
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import styles from './style.module.scss'

export default function Item({ el }) {
    const navigation = useNavigation()
    const {height, width} = Dimensions.get('window');
	const itemWidth =  ( width - 60 ) / 2

    const LikeWrapper = observer(() => {
        const liked = [...like.favorites.filter(item => item.id == el.id)]
        
        return (
            <Pressable style={styles.like} onPress={() => {
                if (liked.length > 0) {
                    like.removeFavorite(el.id)
                } else like.addFavorite(el)
            }}>
                {
                    liked.length > 0 ? (
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z" fill="#F75E5E" stroke="#F75E5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    ) : (
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z" stroke="#F75E5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    )
                }
            </Pressable>
        )
    })

    return (
        <TouchableOpacity style={[styles.item, {width: itemWidth}]} onPress={() => navigation.navigate('Product', {data: el})}>
            <Image source={{uri: el.photo}} style={styles.image}/>
            <Text style={styles.text}>{el.name}</Text>
            <Text style={styles.text}>${el.price}</Text>
            <LikeWrapper/>
        </TouchableOpacity>    
    )
}
