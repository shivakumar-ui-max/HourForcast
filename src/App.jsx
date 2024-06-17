import React from "react";
import { Suspense } from "react";
const Layout = React.lazy(() => import("./Layout"));
import Loading from "./components/Loading";

const App = () => {
   return (
      <>
         <Suspense
            fallback={
               <div className="grid place-items-center min-h-screen">
                  <Loading />
               </div>
            }
         >
            <Layout />
         </Suspense>
      </>
   );
};

export default App;
