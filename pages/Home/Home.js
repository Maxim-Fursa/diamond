import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import { Dimensions } from 'react-native';
import { Container, Search, Header } from 'diamond/components'
import styles from './style.module.scss'

export default function Home({ }) {
	const [choose, setChoose] = React.useState(1)
	const {height, width} = Dimensions.get('window');
	const itemWidth =  ( width - 60 ) / 2

	const collections = [
		{id: 1, photo: 'https://img.freepik.com/free-photo/young-model-demonstrating-golden-necklace_7502-7049.jpg?w=360&t=st=1667530430~exp=1667531030~hmac=f099e7dc15aab49a9dd6af950949b02d4d5ad722f04e160b62677578d5b32df7', name: 'Winston Cluster Collection'},
		{id: 2, photo: 'https://img.freepik.com/free-photo/female-model-demonstrating-silber-bracelet_7502-7053.jpg?w=360&t=st=1667530412~exp=1667531012~hmac=7d13d8e34a25f95be708b6e8562092ad958cb37aabf680fba33f0b60cb3bd0f4', name: 'Sunflower Altan Collection'}
	]

	const categories = [
		{id: 1, name: 'Popular' }, 
		{id: 2, name: 'Earring'}, 
		{id: 3, name: 'Necklaee'}, 
		{id: 4, name: 'Bracelet'},
		{id: 5, name: 'Ring'}
	]

	const products = [
		{id: 1, photo: 'https://img.freepik.com/free-photo/young-brunette-model-demonstrating-jewelry_7502-7050.jpg?w=360&t=st=1668045271~exp=1668045871~hmac=fe4654425de00933bb5854c5f3fe8f310f5b2804ad0c7ee2af2d182faf0c91d8'},
		{id: 2, photo: 'https://img.freepik.com/free-photo/young-model-demonstrating-expensive-jewelry_7502-7043.jpg?w=360&t=st=1668045304~exp=1668045904~hmac=90148fc7248cb190c4f2f22c27b687f1809aff0510c85dfd186a0546b5d7d22e'},
		{id: 3, photo: 'https://img.freepik.com/free-photo/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant_181624-21106.jpg?w=360&t=st=1668045397~exp=1668045997~hmac=b603eaddfa6bf1ca9e8dde955993a5b8d90dbe79bb194e350f9ee972fc86671c'},
		{id: 4, photo: 'https://img.freepik.com/free-photo/vertical-closeup-shot-female-wearing-silver-necklace-with-beautiful-lock-pendant_181624-27833.jpg?w=360&t=st=1668045400~exp=1668046000~hmac=7465b9632f842d80285cadd95944db88e4794fcc4f3d98376225dfcbc705fac5'}
	]

    return (
        <Container navbar={{visible: true, active: "Home"}}>
			<Header text={"QUENNA"} />
			<Search/>
			<View style={styles.collectionWrapper}>
				<ScrollView style={styles.collectionWrapperScroll} horizontal={true} contentContainerStyle={{paddingRight: 0}}>
					{
						collections.map(el => 
							<View style={styles.collectionWrapperItem} key={el.id}>
								<Image source={{uri: el.photo}} style={styles.collectionWrapperItemImage}/>
								<Svg height="100%" width="100%" style={styles.collectionWrapperItemGradiant}>
									<Defs>
										<LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
											<Stop offset="0.01" stopColor="rgb(255,255,255)" stopOpacity="0"/>
											<Stop offset="1" stopColor="rgba(0,0,0)" stopOpacity="0.7"/>
										</LinearGradient>
									</Defs>
									<Rect width="100%" height="100%" fill="url(#grad)"/>
								</Svg>
								<View style={styles.collectionWrapperItemTextWrapper}>
									<Text style={styles.collectionWrapperItemText}>{el.name}</Text>
								</View>
							</View>	
						)
					}
				</ScrollView>
			</View>
			<View style={styles.categoriesWrapper}>
				<ScrollView style={styles.categoriesWrapperScroll} horizontal={true} contentContainerStyle={{paddingRight: 0}}>
					{
						categories.map(el => 
							<Text style={[styles.categoriesItem, choose === el.id ? styles.categoriesItemActive : styles.categoriesItemInactive]} key={el.id}>{el.name}</Text>
						)
					}
				</ScrollView>
			</View>
			<FlatList 
				numColumns={2}
				style={styles.productsWrapper}
				data={products}
				renderItem={({index, item}) => (
					<View style={[styles.productsWrapperItem, {width: itemWidth, marginRight: index % 2 == 0 ? 30 : 0}]}>
						<Image source={{uri: item.photo}} style={styles.productsWrapperItemImage}/>
						<TouchableOpacity style={styles.productsWrapperItemButton}>
							<Svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<Path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z" fill="white"/>
								<Path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C16.5523 4 17 4.44772 17 5V27C17 27.5523 16.5523 28 16 28C15.4477 28 15 27.5523 15 27V5C15 4.44772 15.4477 4 16 4Z" fill="white"/>
							</Svg>
						</TouchableOpacity>
					</View>
				)}
				ItemSeparatorComponent={() => <View style={{height: 30}} />}
				keyExtractor={item => item.id}
			/>
		</Container>
    )
}
