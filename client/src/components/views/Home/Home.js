import Hero from '../../layout/Hero/Hero';
import CourseCatalogue from '../../layout/CourseCatalogue/CourseCatalogue';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container-fluid">
        <CourseCatalogue />
      </div>
    </>
  );
};

export default Home;