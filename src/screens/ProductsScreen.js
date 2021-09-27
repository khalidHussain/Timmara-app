import React, { useEffect, useContext, useState} from "react";
import { View, Text, FlatList, Image,TouchableOpacity } from "react-native";
import { Context } from "../context/productContext";
import { Button } from "react-native-elements";

const ProductsScreen = ({ navigation }) => {
  const { state, getAllProducts, fetchMore } = useContext(Context);
  const [data, setData] = useState([]);
  const getP = async () => {
    await getAllProducts();
  };

  useEffect(() => {
    getP();
  }, []);

  useEffect(() => {
    setData(state.allProducts.results);
  }, [state]);
  const { page, totalPages } = state.allProducts;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle = {{marginLeft: 3, marginTop: 5}}
        columnWrapperStyle = {{marginBottom: 10}}
        numColumns = {2}
        ListFooterComponent = {
            page < totalPages ? <View>
                <Button title = 'View More' onPress = {() => {
                    fetchMore(page + 1)
                }}/>
            </View> : <></>
        }
        ListFooterComponentStyle = {{marginBottom: 20}}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity key={item.id} onPress = {() => {
                navigation.navigate('Detail', {product: item})
              }}>
                <View style = {{marginRight: 3, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingBottom: 5}}>
                  <Image
                    source={{uri: 'https://images.freeimages.com/images/large-previews/157/young-and-old-1399297.jpg'}}
                    style={{ width: 200, height: 200, borderRadius:5 }}
                  />
                  <Text style = {{fontWeight: 'bold'}}>{item.name}</Text>
                  <Text>$400 ({ item.quantity })</Text>
                </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProductsScreen;
