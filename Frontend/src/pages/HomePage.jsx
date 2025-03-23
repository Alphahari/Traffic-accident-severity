import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <hr />
      <main className="flex flex-col flex-1 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col md:px-32 mt-12 px-12">
            <p className="font-bold">
              Understand How Road Conditions Affect Accident Severity
            </p>
            <p className="font-medium text-gray-600 lg:text-md md:text-sm mt-2">
              This application helps us understand how road conditions play a crucial role in accidents. By exploring various 
              factors such as road type, weather conditions, city, pedestrian crossing facilities, junction types, and more, 
              users can gain insights into how each element affects the severity of accidents. This interactive tool leverages 
              robust machine learning models like XGBoost, Random Forest, and More to provide a deeper understanding of the 
              complex relationship between road conditions and accident outcomes. With these advanced techniques, users can 
              explore and analyze accident data to uncover patterns and improve safety measures on the roads.
            </p>
          </div>
          <img className="mx-auto" src="logo.png" alt="Logo" />
        </div>

        <div className="min-h-dvh md:mt-8 px-12 md:px-32">
          <section className="flex justify-center items-center flex-col md:p-0 sm:px-12">
            <p className="font-bold">Predict Accident Severity with Machine Learning</p>
            <p className="text-lg lg:w-1/2 md:w-2/3 text-gray-500 mt-2 font-semibold">
              Our advanced machine learning models analyze road condition data to accurately predict the severity of accidents.
              Take control of road safety with our powerful tool.
            </p>
          </section>
          <div>
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;