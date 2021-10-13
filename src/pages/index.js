import Layout from '../components/Layout/Layout'

export default function Home({countries}) {
  console.log(countries)
  return <Layout>
    <div className={style.count}>Found {countries.length} countries</div>

    <SearchInput />
  </Layout>
}

export const getStaticProps = async () => {
  const rest = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await rest.json();

  return {
    props:{
      countries,
    }
  };
};