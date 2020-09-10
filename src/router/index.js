import Loginpage from '../components/Loginpage.vue';
import Signup from '../components/SignUp.vue';
import Homepage from '../components/Homepage.vue';
import Logout from '../components/Logout.vue';
import Profile from '../components/Profile.vue';
import Product from '../components/Product.vue';
import Category from '../components/Category.vue';
import ProductDetail from '../components/ProductDetails.vue';

export default[
  {path: '/', name: 'login', component: Loginpage},
  {path: '/signup', name: 'signup', component: Signup},
  {path: '/home', name: 'home', component: Homepage},
  {path: '/logout', name: 'logout', component: Logout},
  {path: '/profile', name: 'profile', component: Profile},
  {path: '/products', name: 'product', component: Product},
  {path: '/category', name: 'category', component: Category},
  {path: '/product-details/:id', name: 'product-details', component: ProductDetail},

]
