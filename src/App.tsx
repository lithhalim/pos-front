import { Login_Provider } from "./context-api/authntication-context";
import { store } from './redux/store/store'
import { Provider } from 'react-redux'


import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'


import Login_Section from "./combonants/LogIn/Login_Section";
import Header_system from "./combonants/System_Page/Header-system/Header_system";
import SideBar_Section from "./combonants/Side-bar/SideBar_Section";
import Dashbord_main from "./combonants/System_Page/1-Dashboard/Dashbord-main";
import Product_main from "./combonants/System_Page/4-Product/Product-main";
import { Product_Provider } from "./context-api/product-context";
import User_Section from "./combonants/System_Page/2-User_Section/User_Section";
import Transaction_main from "./combonants/System_Page/5-Transaction/Transaction_main";
import { Invios_Provider } from "./context-api/Invios-context";
import Data_Print from "./combonants/Printer_Data/Data_Print";
import Report_Section from "./combonants/System_Page/6-Report/Report_Section";
import Chate_Section from "./combonants/System_Page/3-Chate_Section/Chate_Section";
import Page_Not_Found from "./combonants/page-not-found/Page_Not_Found";
import { Alert_Provider } from "./context-api/Alert_context";
import Alert_Section from "./combonants/Alert_Section/Alert_Item";



const queryClient = new QueryClient()




function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Alert_Provider>
            <Invios_Provider>
              <Product_Provider>
                  <Login_Provider>
                      <BrowserRouter>
                          <Routes>
                              <Route path="/" element={<><Login_Section/></>}/>
                                <Route path="/dashboard" element={<><Header_system/> <SideBar_Section/> <Dashbord_main/> </>}/>
                                  <Route path="/product" element={<><Header_system/> <SideBar_Section/> <Product_main/><Alert_Section/> </>}/>
                                    <Route path="/Transaction" element={<><Header_system/> <SideBar_Section/> <Transaction_main/><Data_Print/>  </>}/>
                                      <Route path="*" element={<><Page_Not_Found/></>}/>
                                    <Route path="/chate" element={<><Header_system/> <SideBar_Section/> <Chate_Section/> </>}/>
                                  <Route path="/Report" element={<><Header_system/> <SideBar_Section/> <Report_Section/><Data_Print/> </>}/>
                              <Route path="/User" element={<><Header_system/> <SideBar_Section/> <User_Section/><Alert_Section/> </>}/>
                          </Routes>
                      </BrowserRouter>
                  </Login_Provider>
                </Product_Provider>
              </Invios_Provider>
            </Alert_Provider>
        </Provider>
    </QueryClientProvider>
  );
}

export default App;
