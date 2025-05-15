import { Route, Routes } from "react-router-dom";
import MyFuture from "../../pages/MyFuture";
import NotFound from "../../pages/NotFound";
import MyCity from "../../pages/MyCity";
import AboutMe from "../../pages/AboutMe";
import Layout from "../Layout/Layout";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="future" element={<MyFuture />} />
            <Route path="city" element={<MyCity />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default AppRoutes;
