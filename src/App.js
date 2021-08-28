
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import {Switch,Route} from 'react-router-dom' ;
function App() {
  return (
    <>
<Header />
   <Switch>
<Route exact path='/' component={Home} />
<Route exact path='/product/:productId' component={ProductDetail} />
<Route path="*" component={Page404} />

   </Switch>
   <Footer />
</>
  );
}

export default App;
