import createDataContext from './createDataContext';
import instance from '../Api/axiosApi'

const actionReducer = (state, action) => {
    switch (action.type) {
      case 'all_products':
        return { ...state, allProducts: action.payload };  
      case 'add':
        return {...state, allProducts: [...state.allProducts, action.payload]}
      default:
        return state;
    }
  };

const getAllProducts = (dispatch) => async () => {
    try {
        const response = await instance.get('/v1/products')
        dispatch({type: 'all_products', payload: response.data.results})
    } catch (error) {
        console.log(error)
    }  
}

const updateProduct = (dispatch) => async (id, quantity) => {
  try {
    const response = await instance.put('/v1/products/' + id , {quantity}).then(console.log('dddddddddddddddddd'))
    
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

const fetchMore = (dispatch) => async () => {
  try {
    
    const response = await instance.get(`/v1/products?page=${2}`).then(console.log('.......'));
    const data = response.data.results
    dispatch({
      type: 'add',
      dispatch: data
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
   page2: []
  },
);
