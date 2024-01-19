import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './FetchProducts';

const DemoApp = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state); // use useSelector to get state

  useEffect(() => {
    console.log(JSON.stringify(products.product));
    // You can perform any side effects related to products.data here
  }, [products]); // useEffect will only run when products changes

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{ padding: 20, borderWidth: 0.5 }}
          onPress={() => {
            dispatch(fetchProducts());
          }}>
          Call Api
        </Text>
      </View>

      {products.data === null ? (
        <Text>empty</Text>
      ) : (
        <View>
          <Text>Hello</Text>
          {products?.product.data?.map((item, index) => (
            <React.Fragment key={index}>
              <Image source={{ uri: item.image }} style = {{width:100,aspectRatio:1}} />
              <Text>{item.image}</Text>
            </React.Fragment>
          ))}
        </View>
      )}
    </>
  );
};

export default DemoApp;


// const DemoApp = () => {
//   const dispatch = useDispatch();
//   const [products,setproducts] = useState([]);
  
//   const ankit = useSelector(state => state);
//   setproducts(ankit);
//   console.log(JSON.stringify(products.data));
//   // console.log(products[]);
//   // const [ankit,setankit] = useState([]);
//   //  setankit(JSON.stringify(products));
  
//   // console.log("ankit---------------------------------------------------------------");
//   // console.log(ankit);

//   return (
//     <>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text
//           style={{ padding: 20, borderWidth: 0.5 }}
//           onPress={() => {
//             dispatch(fetchProducts());
//           }}>
//           Call Api
//         </Text>
//       </View>

//       {products.data == null ? (
      
//         <Text>empty</Text>
//       ) : (
        
//         <View>
//           <Text>Hello</Text>
//           {
//           products.data.map((item, index) => (
//             <>
//             <Image source={{ uri: item.image }} key={index} />
//             <Text>Hello</Text>
//             </>
//           ))}
//         </View>
//       )}
      
//     </>
//   );
// };

// export default DemoApp;



// {products.data === null ? (
//   <Text>empty</Text>
// ) : (
//   <View>
//     {ankit?.data?.map((item, index) => (
//       <>
//       <Image source={{ uri: item.image }} key={index} />
//       <Text>Hello</Text>
//       </>
//     ))}
//   </View>
// )}