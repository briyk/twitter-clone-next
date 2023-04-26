import { ReactNode } from "react"
import Head from "next/head"
import Sidebar from "./Sidebar"
import FollowBar from "./FollowBar"

type ChildrenProps = {
     children: ReactNode
}


const Layout = ({children}:ChildrenProps) => {
  return (
    <>
    <Head>
          <title>Twitter Clone With NextJS </title>
          <link rel="shortcut icon" href="/twitter-favicon.png"/>
          <meta property="og:title" content="Twitter Clone with NextJs" key="ogtitle" />
          <meta property="og:description" content="Clone Twitter with NextJS and Tailwind" key="ogdesc" />
          <meta property="og:image" content="/twitter-favicon.png" key="ogimage"/>
    </Head>
     <main className="h-screen">
     <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
               <Sidebar/>
               <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
               
               {children}
               </div>    
               <FollowBar/>
          </div>
     </div>
     </main>
     </>
  )
}

export default Layout