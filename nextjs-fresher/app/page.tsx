import Image from "next/image"
export default function Home() {
  return (
    <div>
      <h1>My Home page</h1>
      <Image
        src="/hero.png"
        alt="Hero"
        width={300}
        height={300}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci officiis, rerum temporibus obcaecati accusantium aliquam suscipit est error repellendus!</p>
    </div>
    
  )
}