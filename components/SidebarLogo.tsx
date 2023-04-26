import { BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";

const SidebarLogo = () => {
     const router = useRouter() ;

  return (
    <div
     onClick={() =>router.push('/') }
    className="h-14 w-14 rounded-full flex justify-center items-center hover:bg-blue-300 hover:bg-opacity-10   cursor-pointer">
          <BsTwitter className="text-[#00acee]" size={30}/>
    </div>
  )
}

export default SidebarLogo