import Loginpage from '../components/Loginpage.vue';
import Signup from '../components/SignUp.vue';
import Homepage from '../components/Homepage.vue';
import Logout from '../components/Logout.vue';

export default[
  {path: '/', name: 'login', component: Loginpage},
  {path: '/signup', name: 'signup', component: Signup},
  {path: '/home', name: 'home', component: Homepage},
  {path: '/logout', name: 'logout', component: Logout},

]
