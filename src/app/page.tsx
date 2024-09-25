// import Image from "next/image";

import Link from "next/link";
import Navbar from '@/components/CommonComponents/Layout/Navbar'

export default function Home() {
  return (
    <main >
      <Navbar>
        <h1>Homepage</h1>
        <Link href="/order" style={{color:'#eb455f', fontSize:'30px'}}>Order</Link>
        <br />
        {/* <Link href="/dashboard">Dashboard</Link> */}
      </Navbar>
    </main>
  );
}
