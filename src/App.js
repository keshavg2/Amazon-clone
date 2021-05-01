import './App.css';
import Navbar from './Components/Navbar';
import CartContainer from './Components/CartContainer'; 
import { createStore } from  'redux';
import reducer from './reducer.js';
import { Provider } from 'react-redux';
// initial Store


// store

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log(store.getState);
function App() {
  //if(loading){
    //return(
      //<div className='loading'>
        //<h1>Loading...</h1>
      //</div>
    //);
  //}
  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer />
    </Provider>
  );
}

export default App;
