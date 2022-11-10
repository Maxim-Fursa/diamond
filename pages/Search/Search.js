import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import { Container, Search as TopSearch, Header } from 'diamond/components'
import styles from './style.module.scss'

export default function Search({ navigation }) {

	const categories = [
		{id: 1, name: 'Earring', count: 318, photo: 'https://img.freepik.com/free-photo/classy-silver-wedding-rings-made-white-gold-lie-crystal-bracelet_8353-8668.jpg?w=740&t=st=1668073041~exp=1668073641~hmac=cfffc248ee8e5fa9b551a9a76b9eaa99ac68082c0d89e5940f252a6ee2b7dd79'}, 
		{id: 2, name: 'Necklaee', count: 230, photo: 'https://img.freepik.com/free-photo/snake-jewelry-lifestyle-flat-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-13016.jpg?w=740&t=st=1668073121~exp=1668073721~hmac=24e954950e579af5f4dfe4eff5defc2845de6b366f98d9017dc907721d7a5b5c'}, 
		{id: 3, name: 'Bracelet', count: 244, photo: 'https://img.freepik.com/free-photo/jewellery-bangle-background-with-place-text-banner-fashion-accessories_460848-13231.jpg?w=740&t=st=1668073240~exp=1668073840~hmac=ea656b2bff11b10845e919a7db9a15ff4984d3a8cc4250966ef90f69d77fac30'},
		{id: 4, name: 'Ring', count: 529, photo: 'https://img.freepik.com/premium-photo/bride-groom-wedding-engagement-rings-white-background_41451-240.jpg?w=740'}
	]

    return (
        <Container navbar={{visible: true, active: "Search"}} navigation={navigation}>
			<Header text={"Categories"} />
			<TopSearch/>
            <View style={styles.categoriesWrapper}>
                {
                    categories.map(el => 
                        <View style={styles.categoriesWrapperItem} key={el.id}>
                            <Image source={{uri: el.photo}} style={styles.categoriesWrapperItemImage}/>
                            <Svg height="100%" width="100%" style={styles.collectionWrapperItemGradiant}>
                                <Defs>
                                    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <Stop offset="0.01" stopColor="rgb(255,255,255)" stopOpacity="0"/>
                                        <Stop offset="1" stopColor="rgba(0,0,0)" stopOpacity="0.7"/>
                                    </LinearGradient>
                                </Defs>
                                <Rect width="100%" height="100%" fill="url(#grad)"/>
                            </Svg>
                            <View style={[styles.categoriesWrapperItemTextWrapper, el.id % 2 == 0 && styles.categoriesWrapperItemTextWrapperRight]}>
                                <Text style={styles.categoriesWrapperItemText}>{el.name}</Text>
                                <Text style={styles.categoriesWrapperItemAddText}>{el.count} products</Text>
                            </View>
                        </View>    
                    )
                }
            </View>
		</Container>
    )
}
