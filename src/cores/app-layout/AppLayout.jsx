import { Suspense} from "react";
import { AppHeader } from "../../cores";

import { Route, Routes } from "react-router-dom";
import "../../grid.css"
import { routes } from "../../routing";


const AppLayout = () => {
   
  return (
    <>
      <main className="font-sans grid-contain">
       <div className="col-span-12">
            <div className="bg-white  ">
              <AppHeader />
            </div>
            <div className="h-full overflow-hidden">
              <section className="h-full">
                <Suspense fallback={<div></div>}>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </section>
            </div>
           
            </div>
      </main>
    </>
  );
};

export default AppLayout;
