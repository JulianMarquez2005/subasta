import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Header from "./feactures/components/Header";
import Card from "./feactures/components/Card";
import { Layout } from "./feactures/components/Layout";
import "./App.css";
import FiltroBusqueda from "./feactures/components/FiltroBusqueda";
import CardMenu from "./feactures/components/CardMenu";
import { getCars } from "./feactures/services/carService";


const App = () => {
  const [cars, setCars] = useState([]);

  const dataCars = async () => {
    try {
      const response = await getCars();
      setCars(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataCars()
  }, [])
  

  return (
    <>
      <div>
        <Header />
      </div>
      <main className="h-full mt-18">
        <section className="h-full ">
          <div>
            <FiltroBusqueda />
          </div>
          <div>
            <CardMenu />
          </div>
        </section>

        <Layout>
          <section className=" grid gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <Card
                key={car.id}
                year={car.year}
                mileage={car.mileage}
                brand={car.brand}
                image={car.image}
                monthly_installment={car.monthly_installment}
              />
            ))}
          </section>
        </Layout>
      </main>

      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default App;