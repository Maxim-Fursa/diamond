import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg'
import { Container, Search as TopSearch, Header, Item } from 'diamond/components'
import styles from './style.module.scss'

export default function List({ navigation }) {

	const products = [
		{id: 1, name: 'Wiston Diamond Ring', price: '1,800.00', photo: 'https://img.freepik.com/free-photo/classy-silver-wedding-rings-made-white-gold-lie-crystal-bracelet_8353-8668.jpg?w=740&t=st=1668073041~exp=1668073641~hmac=cfffc248ee8e5fa9b551a9a76b9eaa99ac68082c0d89e5940f252a6ee2b7dd79'}, 
		{id: 2, name: 'Crison Diamond Ring', price: '3,200.00', photo: 'https://img.freepik.com/free-photo/closeup-shot-two-diamond-rings-white-surface_181624-47070.jpg?w=740&t=st=1668127525~exp=1668128125~hmac=df51ad95da4d96611e4746486728e0657870205f37d7fba0b1a87679201c0225'}, 
		{id: 3, name: 'Red Gold Ring', price: '3,000.00', photo: 'https://img.freepik.com/premium-photo/golden-wedding-rings-with-diamonds-white-background-symbol-love-marriage_105517-355.jpg?w=740'},
		{id: 4, name: 'Silver Gold Ring', price: '500.00', photo: 'https://img.freepik.com/premium-photo/bride-groom-wedding-engagement-rings-white-background_41451-240.jpg?w=740'},
        {id: 5, name: 'Wedding Ring', price: '890.00', photo: 'https://img.freepik.com/premium-photo/concept-wedding-accessories-with-wedding-rings-white-background_185193-69924.jpg?w=740'},
		{id: 6, name: 'Triple Diamond Ring', price: '2,400.00', photo: 'https://img.freepik.com/premium-photo/two-diamond-engagement-wedding-rings-isolated-white-background_41451-433.jpg?w=740'},
        {id: 7, name: 'Gold Ring', price: '890.00', photo: 'https://img.freepik.com/free-photo/jewellery-bangle-background-with-place-text-banner-fashion-accessories_460848-13233.jpg?w=740&t=st=1668127391~exp=1668127991~hmac=90780242ac6d1e7aae3bdb42dbead7c8a10dcfd019e6e8ea4b04debb8c3fd552'},
		{id: 8, name: 'Sunflower Diamond Ring', price: '2,400.00', photo: 'https://img.freepik.com/premium-photo/luxury-jewelry-diamond-ring-white-fur-texture_293060-13485.jpg?w=740'},
	]

    return (
        <Container paddingBottom={false}>
			<Header 
                text={"Rings"} 
                leftFunc={() => navigation.navigate('Search_Categories')}
                leftSvg={
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967L14.5303 7.53033ZM9 12L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L9 12ZM13.4697 17.5303C13.7626 17.8232 14.2374 17.8232 14.5303 17.5303C14.8232 17.2374 14.8232 16.7626 14.5303 16.4697L13.4697 17.5303ZM13.4697 6.46967L8.46967 11.4697L9.53033 12.5303L14.5303 7.53033L13.4697 6.46967ZM8.46967 12.5303L13.4697 17.5303L14.5303 16.4697L9.53033 11.4697L8.46967 12.5303Z" fill="white"/>
                    </Svg>
                }
                rightSvg={
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M4 4.25C3.58579 4.25 3.25 4.58579 3.25 5C3.25 5.41421 3.58579 5.75 4 5.75L4 4.25ZM14 5L13.25 5L14 5ZM20 5.75C20.4142 5.75 20.75 5.41421 20.75 5C20.75 4.58579 20.4142 4.25 20 4.25V5.75ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L4 11.25ZM8 19H7.25H8ZM20 19.75C20.4142 19.75 20.75 19.4142 20.75 19C20.75 18.5858 20.4142 18.25 20 18.25V19.75ZM6 17V16.25V17ZM6 21V20.25V21ZM4 19H3.25H4ZM18 10V9.25V10ZM20 12H19.25H20ZM18 14V13.25V14ZM12 3V2.25V3ZM12 7V6.25V7ZM4 5.75L10 5.75V4.25L4 4.25L4 5.75ZM14 5.75L20 5.75V4.25L14 4.25V5.75ZM4 12.75L16 12.75V11.25L4 11.25L4 12.75ZM8 19.75L20 19.75V18.25L8 18.25V19.75ZM6 17.75C6.69036 17.75 7.25 18.3096 7.25 19H8.75C8.75 17.4812 7.51878 16.25 6 16.25V17.75ZM7.25 19C7.25 19.6904 6.69036 20.25 6 20.25L6 21.75C7.51878 21.75 8.75 20.5188 8.75 19H7.25ZM6 20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25C3.25 20.5188 4.48122 21.75 6 21.75L6 20.25ZM4.75 19C4.75 18.3096 5.30964 17.75 6 17.75V16.25C4.48122 16.25 3.25 17.4812 3.25 19H4.75ZM18 10.75C18.6904 10.75 19.25 11.3096 19.25 12H20.75C20.75 10.4812 19.5188 9.25 18 9.25V10.75ZM19.25 12C19.25 12.6904 18.6904 13.25 18 13.25V14.75C19.5188 14.75 20.75 13.5188 20.75 12H19.25ZM18 13.25C17.3096 13.25 16.75 12.6904 16.75 12H15.25C15.25 13.5188 16.4812 14.75 18 14.75V13.25ZM16.75 12C16.75 11.3096 17.3096 10.75 18 10.75V9.25C16.4812 9.25 15.25 10.4812 15.25 12H16.75ZM12 3.75C12.6904 3.75 13.25 4.30964 13.25 5L14.75 5C14.75 3.48122 13.5188 2.25 12 2.25V3.75ZM13.25 5C13.25 5.69036 12.6904 6.25 12 6.25V7.75C13.5188 7.75 14.75 6.51878 14.75 5L13.25 5ZM12 6.25C11.3096 6.25 10.75 5.69036 10.75 5H9.25C9.25 6.51878 10.4812 7.75 12 7.75V6.25ZM10.75 5C10.75 4.30964 11.3096 3.75 12 3.75V2.25C10.4812 2.25 9.25 3.48122 9.25 5H10.75Z" fill="white"/>
                    </Svg>
                }
            />
			<TopSearch/>
            <View style={styles.productsWrapper}>
                {
                    products.map(el => 
                        <Item el={el} key={el.id}/>
                    )
                }
            </View>
		</Container>
    )
}
