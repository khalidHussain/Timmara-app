import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {Button} from 'react-native-elements'
import {Context} from '../context/productContext'


const PrductDetailScreen = ({route}) => {
    const {state, updateProduct} = useContext(Context)
    const {product} = route.params;
    return (
        <View> 
            <Image
                source={{uri: 'https://images.freeimages.com/images/large-previews/157/young-and-old-1399297.jpg'}}
                style={{ width: '100%', height: 300, borderRadius:5}}
              />
              <Text style = {{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>{product.name}</Text>
              <Button title = 'Add To Cart' type = 'solid' containerStyle = {{top: 200}} onPress = {() => {
                  updateProduct(product.id, product.quantity - 1)
              }}/>
        </View>
    )
}

export default PrductDetailScreen
