import Image from 'next/image'

function Header(){
  return <nav className='fixed top-0 left-0 flex'>
    <ul className='position-fixed flex flex-row space-x-1'>
      <li>1ffdfsadjln</li>
      <li>2blfaablba</li>
      <li>3asdfabdfka</li>
    </ul>
  </nav>
}

function Home() {
  return(
    <>
      <Header />
      <div>
        <h1 className="font-bold font-white font-mono top-0 left-0">TESt</h1>
      </div>
    </>
  )  
}

export default Home;
