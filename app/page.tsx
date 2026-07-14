import Image from "next/image";

export default function Home() {
  return (
    <>
    
   <nav className="flex bg-[#110966] text-white h-20">
  <ul className="flex items-center gap-4">
    <li><img src="" alt="" /></li>
    <li>Home</li>
    <li>Produtos</li>
    <li>Entra</li>
    <li>Carrinho</li>
  </ul>
</nav>
    <div className="flex w-full h-500 ">
      <div className="bg-gray-900 w-1/2 h-1/4" >
      <img src="" alt="" />
      <p>div1</p>
      <h1>div1</h1>
      </div>
      <div className="bg-rose-900 w-1/2 h-1/4">
    <p>div2</p>
    <img src="" alt="" />
      </div>
    </div>
    
    
    </>
  );
}
