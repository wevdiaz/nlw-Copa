import Image from "next/image";
import { api } from "../lib/axios";

import appPreviewImg from "../assets/app-nlw-preview.png";
import logoImg from "../assets/logo.svg";
import avataresUsersImg from "../assets/avatares-example.png";
import iconCheckImg from "../assets/icon-check.svg";

interface HomeProps {
  poolCount: Number;
  guessCount: Number;
  userCount: Number;
}

export default function Home(props: HomeProps) {  
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="Logo da aplicação - NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avataresUsersImg} alt="avatares de usuários" quality={100} />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
              className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm" 
              type="text" 
              required 
              placeholder="Qual nome do seu bolão?"
          />
          <button 
              className="bg-nlwYellow-500 px-6 py-4 rounded text-gray-900 font-bold uppercase hover:bg-nlwYellow-700 transition" 
              type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀          
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-600"></div>

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="2 celulares exibindo a prévia da aplicação" quality={100} />
    </div>
  )
}

export const getServerSideProps = async () => {
  
  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([   
    api.get("pools/count"),
    api.get("guesses/count"),
    api.get("users/count") 
  ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.guesses,
      userCount: userCountResponse.data.users
    }
  }
}
