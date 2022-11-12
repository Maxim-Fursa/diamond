import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import { Container, Header } from 'diamond/components'
import { observer } from 'mobx-react-lite'
import cart from 'diamond/store/cart'
import styles from './style.module.scss'

export default function Product({ route, navigation }) {
    const { data } = route.params
    const sizes = ['S','M','L']
    const [chooseSize, setChooseSize] = React.useState(1)
    const [chooseInfo, setChooseInfo] = React.useState(0)

    const ButtonWrapper = observer(() => {
    
        return (
            <View style={styles.buttonWrapper}>
                <Svg height="100%" width="100%" style={styles.buttonWrapperGradiant}>
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0.01" stopColor="rgb(255,255,255)" stopOpacity="0"/>
                            <Stop offset="1" stopColor="rgba(0,0,0)" stopOpacity="0.7"/>
                        </LinearGradient>
                    </Defs>
                    <Rect width="100%" height="100%" fill="url(#grad)"/>
                </Svg>
                <TouchableHighlight style={[styles.addToCart, styles.button]} onPress={() => {
                    cart.addProduct({...data, size: sizes[chooseSize]})
                    navigation.navigate('Cart')
                }}>
                    <Text style={[styles.addToCartText, styles.buttonText]}>Add to Cart</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buyItNow, styles.button]}>
                    <Text style={[styles.buyItNowText, styles.buttonText]}>Buy it Now</Text>
                </TouchableHighlight>
            </View>
        )
    })

    return (
        <Container elem={<ButtonWrapper data={data} sizes={sizes} chooseSize={chooseSize} />}>
			<Header 
                leftFunc={() => navigation.goBack()}
                leftSvg={
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967L14.5303 7.53033ZM9 12L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L9 12ZM13.4697 17.5303C13.7626 17.8232 14.2374 17.8232 14.5303 17.5303C14.8232 17.2374 14.8232 16.7626 14.5303 16.4697L13.4697 17.5303ZM13.4697 6.46967L8.46967 11.4697L9.53033 12.5303L14.5303 7.53033L13.4697 6.46967ZM8.46967 12.5303L13.4697 17.5303L14.5303 16.4697L9.53033 11.4697L8.46967 12.5303Z" fill="white"/>
                    </Svg>
                }
                rightSvg={
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M12 20L11.6954 20.6854C11.8893 20.7715 12.1107 20.7715 12.3046 20.6854L12 20ZM10.76 5.38071L11.2999 4.86011V4.86011L10.76 5.38071ZM13.24 5.38071L12.7001 4.86011L13.24 5.38071ZM11.2802 5.92016L10.7403 6.44076L10.7403 6.44076L11.2802 5.92016ZM12.7198 5.92016L12.18 5.39956L12.18 5.39956L12.7198 5.92016ZM10.2201 5.90131L10.7403 6.44076L11.82 5.39956L11.2999 4.86011L10.2201 5.90131ZM13.2597 6.44076L13.7799 5.90131L12.7001 4.86011L12.18 5.39956L13.2597 6.44076ZM16.4543 3.25C15.0408 3.25 13.691 3.83256 12.7001 4.86011L13.7799 5.90131C14.494 5.16076 15.4566 4.75 16.4543 4.75V3.25ZM21.75 9.71405C21.75 7.72323 21.2036 6.10798 20.2392 4.97749C19.2683 3.83942 17.92 3.25 16.4543 3.25V4.75C17.4991 4.75 18.4237 5.16058 19.098 5.95102C19.7788 6.74904 20.25 7.99082 20.25 9.71405H21.75ZM7.54569 4.75C8.54338 4.75 9.50598 5.16076 10.2201 5.90131L11.2999 4.86011C10.309 3.83256 8.95917 3.25 7.54569 3.25V4.75ZM3.75 9.71405C3.75 7.98756 4.21411 6.74612 4.89008 5.94951C5.5583 5.16201 6.48125 4.75 7.54569 4.75V3.25C6.06444 3.25 4.71455 3.83799 3.74634 4.979C2.78589 6.1109 2.25 7.72648 2.25 9.71405H3.75ZM12 20C12.3046 19.3146 12.3048 19.3147 12.3049 19.3148C12.3049 19.3148 12.305 19.3148 12.305 19.3148C12.305 19.3148 12.3048 19.3147 12.3045 19.3146C12.304 19.3144 12.3029 19.3139 12.3012 19.3131C12.298 19.3117 12.2926 19.3092 12.2852 19.3059C12.2704 19.2991 12.2473 19.2885 12.2167 19.2742C12.1554 19.2455 12.0636 19.2018 11.9456 19.1435C11.7097 19.0269 11.3698 18.8521 10.9606 18.6226C10.1406 18.1627 9.05134 17.488 7.96625 16.6268C5.75597 14.8726 3.75 12.4953 3.75 9.71405H2.25C2.25 13.2187 4.74403 15.9844 7.03375 17.8017C8.19866 18.7263 9.3594 19.4444 10.2269 19.9309C10.6615 20.1747 11.0247 20.3615 11.2809 20.4882C11.4091 20.5515 11.5107 20.5999 11.5812 20.6329C11.6164 20.6494 11.644 20.6621 11.6632 20.6708C11.6728 20.6752 11.6803 20.6786 11.6857 20.681C11.6884 20.6822 11.6906 20.6832 11.6922 20.6839C11.693 20.6843 11.6937 20.6846 11.6942 20.6848C11.6945 20.6849 11.6948 20.6851 11.6949 20.6851C11.6952 20.6853 11.6954 20.6854 12 20ZM20.25 9.71405C20.25 12.4953 18.244 14.8726 16.0338 16.6268C14.9487 17.488 13.8594 18.1627 13.0394 18.6226C12.6302 18.8521 12.2903 19.0269 12.0544 19.1435C11.9364 19.2018 11.8446 19.2455 11.7833 19.2742C11.7527 19.2885 11.7296 19.2991 11.7148 19.3059C11.7074 19.3092 11.702 19.3117 11.6988 19.3131C11.6971 19.3139 11.696 19.3144 11.6955 19.3146C11.6952 19.3147 11.695 19.3148 11.695 19.3148C11.695 19.3148 11.6951 19.3148 11.6951 19.3148C11.6952 19.3147 11.6954 19.3146 12 20C12.3046 20.6854 12.3048 20.6853 12.3051 20.6851C12.3052 20.6851 12.3055 20.6849 12.3058 20.6848C12.3063 20.6846 12.307 20.6843 12.3078 20.6839C12.3094 20.6832 12.3116 20.6822 12.3143 20.681C12.3197 20.6786 12.3272 20.6752 12.3368 20.6708C12.356 20.6621 12.3836 20.6494 12.4188 20.6329C12.4893 20.5999 12.5909 20.5515 12.7191 20.4882C12.9753 20.3615 13.3385 20.1747 13.7731 19.9309C14.6406 19.4444 15.8013 18.7263 16.9662 17.8017C19.256 15.9844 21.75 13.2187 21.75 9.71405H20.25ZM10.7403 6.44076C11.4285 7.15445 12.5715 7.15445 13.2597 6.44076L12.18 5.39956C12.0816 5.50151 11.9184 5.50151 11.82 5.39956L10.7403 6.44076Z" fill="white"/>
                    </Svg>
                }
            />
            <View style={styles.wrapper}>
                <Text style={styles.name}>{data.name}</Text>
                <Image style={styles.image} source={{uri: data.photo}}/>
                <Text style={styles.additional}>5 pear-shaped diaminds weighing a total of approximently 1.00 carat, set in platinum</Text>
                <Text style={styles.price}>${data.price}</Text>
                <View style={styles.sizeWrapper}>
                    <Text style={styles.sizeWrapperName}>Size</Text>
                    <View style={styles.sizeWrapperBox}>
                        {
                            sizes.map((el, index) => 
                                <TouchableHighlight key={index} style={[styles.sizeWrapperItem, chooseSize === index && styles.sizeWrapperItemChoose]} onPress={() => setChooseSize(index)}>
                                    <Text>{el}</Text>
                                </TouchableHighlight>
                            )
                        }
                    </View>
                </View>
                <ScrollView style={styles.infoButtonWrapper} horizontal={true} contentContainerStyle={{paddingRight: 0}} showsHorizontalScrollIndicator={false}>
                    {
                        ['Description', 'Spesification', 'Review'].map((el, index) =>
                            <Text key={index} style={[styles.infoButton, index === chooseInfo && styles.infoButtonChoose]}>{el}</Text>
                        )
                    }
                </ScrollView>
                <Text style={styles.additional}>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                </Text>
            </View>
		</Container>
    )
}
