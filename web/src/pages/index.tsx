import Image from "next/image";

import appPreviewImg from "../assets/app-nlw-preview.png";
import logoImg from "../assets/logo.svg";
import avataresUsersImg from "../assets/avatares-example.png";
import iconCheckImg from "../assets/icon-check.svg";

// interface HomeProps {
//   count: Number;
// }

export default function Home() {  
  return (
    <div>
      <main>
        <Image src={logoImg} alt="Logo da aplicação - NLW Copa" />

        <h1>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div>
          <Image src={avataresUsersImg} alt="avatares de usuários" quality={100} />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?"/>
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀          
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="2 celulares exibindo a prévia da aplicação" quality={100} />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3333/pools/count");
//   const data = await response.json();

//   console.log(data);  

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }
