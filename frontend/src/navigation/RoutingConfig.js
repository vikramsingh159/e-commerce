
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './../core/Home';
import Signup from './../user/Signup';
import Signin from './../user/Signin';
import Cart from './../core/Cart';
import UserDashBoard from './../user/UserDashBoard';
import AdminDashBoard from './../user/AdminDashBoard';
import AddCategory from './../admin/AddCategory';
import AddProduct from './../admin/AddProduct';
import ManageProducts from './../admin/ManageProducts';
import UpdateProduct from './../admin/UpdateProduct';
import PrivateRoutes from '../auth/helper/PrivateRoutes';
import AdminRoutes from '../auth/helper/AdminRoutes';
import ManagaeCategory from '../admin/ManageCategories';
import UpdateCategory from '../admin/UpdateProduct';





const RoutingConfig = () => {
    return (
        <Router>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard} />
                <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard} />
                <AdminRoutes
                    path="/admin/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoutes
                    path="/admin/categories"
                    exact
                    component={ManagaeCategory}
                />
                <AdminRoutes
                    path="/admin/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoutes path="/admin/products" exact component={ManageProducts} />
                <AdminRoutes
                    path="/admin/product/update/:productId"
                    exact
                    component={UpdateProduct}
                />
                <AdminRoutes
                    path="/admin/category/update/:categoryId"
                    exact
                    component={UpdateCategory}
                />
            </Switch>

        </Router>
    )
}

export default RoutingConfig