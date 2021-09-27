import createDataContext from './createDataContext';
import instance from '../Api/axiosApi'

const actionReducer = (state, action) => {
    switch (action.type) {
      case 'all_products':
        return { ...state, allProducts: action.payload };  
      case 'add':
        return {
          ...state,
          allProducts: {
            ...state.allProducts,
            ...action.payload,
            results: [
              ...state.allProducts.results,
              ...action.payload.results
            ]
          }
        }
      default:
        return state;
    }
  };

const getAllProducts = (dispatch) => async () => {
    try {
        const response = await instance.get('/v1/products')
        dispatch({type: 'all_products', payload: response.data})
    } catch (error) {
        console.log(error)
    }  
}

const updateProduct = () => async (id, quantity) => {
  try {
    await instance.put('/v1/products/' + id , {quantity})
    
  } catch (error) {
    console.log(error)
  }
}

const fetchMore = (dispatch) => async (page) => {
  try {
    const response = await instance.get(`/v1/products?page=${page}`).then(console.log('.......'));
    const data = response.data
    dispatch({
      type: 'add',
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}




export const {Provider, Context} = createDataContext(
  actionReducer,
  {
    getAllProducts,
    updateProduct,
    fetchMore
  },
  {
   allProducts: [],
  },
);
