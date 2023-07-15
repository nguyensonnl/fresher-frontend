import Cart from "../pages/clients/Cart";
import Catalog from "../pages/clients/Catalog";
import Home from "../pages/clients/Home";
import NotFound from "../pages/clients/NotFound";
import Product from "../pages/clients/Product";
import Login from "../pages/clients/Auth/Login";
import Register from "../pages/clients/Auth/Register";
import Checkout from "../pages/clients/Checkout";
import SearchHeader from "../pages/clients/SearchHeader";
import Account from "../pages/clients/Account/LayoutAccount";
import Text from "../components/Text";
import AccountInfo from "../pages/clients/Account/AccountInfo";
import AccountOrder from "../pages/clients/Account/AccountOrder";
import NewCatalog from "../pages/clients/Catalog/NewCatalog";
import Updating from "../pages/clients/Updating";
import English from "../components/English";
import Upload from "../components/Upload";

const publicRoutes = [
  { path: "/", page: Home },
  { path: "/cart", page: Cart },
  { path: "/sp/:slug", page: Product },
  { path: "/danh-muc/:cate", page: NewCatalog },
  { path: "*", page: NotFound },
  { path: "/account/login", page: Login },
  { path: "/account/register", page: Register },
  { path: "/checkout", page: Checkout, layout: null },
  { path: "/search-results", page: SearchHeader },
  { path: "/account", page: AccountInfo, private: 1 },
  { path: "/account/orders", page: AccountOrder, private: 1 },
  { path: "/test", page: Text, layout: null },
  { path: "/about", page: Updating },
  { path: "/contact", page: Updating },
  { path: "/english", page: English, layout: null },
  { path: "/upload", page: Upload, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
