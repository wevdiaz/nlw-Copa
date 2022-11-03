
interface HomeProps {
  count: Number;
}

export default function Home(props: HomeProps) {  
  return (
    <h1 className="text-green-500">Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  console.log(data);  

  return {
    props: {
      count: data.count,
    }
  }
}
