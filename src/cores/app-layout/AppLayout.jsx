import { Suspense, useEffect } from "react";
import { AppHeader } from "../../cores";
import { Route, Routes } from "react-router-dom";
import "../../grid.css";
import { routes } from "../../routing";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="font-sans grid-contain">
        <div className="col-span-12">
          <div className="bg-white  ">
            <AppHeader />
          </div>
          <div className="h-full overflow-hidden">
            <section >
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
