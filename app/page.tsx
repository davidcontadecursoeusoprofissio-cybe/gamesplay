import Image from "next/image";
import ProdutosPromocoes from "@/app/Components/ProdutosPromocoes";
import Nav from "@/app/Components/Nav"

export default function Home() {
  return (
    <>
    <Nav/>

    <div className="flex w-full h-500 ">
      <div className="bg-gray-900 w-1/2 h-1/4 flex flex-col items-center justify-center" >
      
      <img className="w-full h-full object-cover" src="imagem/Hollow-Knight-Silksong-e-adiado-nova-data-nao-foi-anunciada.webp" alt="" />
      <h1 id="h1-1" className="">DIGITALGAMES</h1>
      <p id="p-1" className="whitespace no-warp bg-transparent">Explore nossa coleção de jogos digitais, com títulos retrô que marcaram época e os games mais recentes do mercado.</p>
      </div>
      <div className="bg-[#093c66] w-1/2 h-1/4">
    <p>div2</p>
    <img className="absolute right-0" src="imagem/images-removebg-preview (5).png" alt="" />
    <img id="imagem" src="imagem/169-1691582_mario-pixel-jump-super-mario-world-mario-jumping-removebg-preview.png" alt="" />
      </div>
    </div>
    
    <ProdutosPromocoes/>
    
    
    </>
    
  );
}
