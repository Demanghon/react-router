import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/welcome">
                        <Welcome></Welcome>
                    </Route>
                    <Route path="/products" exact={true}>
                        <Products></Products>
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail></ProductDetail>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
