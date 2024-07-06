"use client"
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { redirect, usePathname,useRouter } from "next/navigation";
import {  useAuth } from "@clerk/nextjs";

function Bottombar () {
  const pathname=usePathname();
  const router=useRouter();
  const { userId,signOut } = useAuth();
  return (
    <section className="bottombar">
      <div className="bottombar_container ">
      {sidebarLinks.map((link) => {
          const isActive=(pathname.includes(link.route)&& link.route.length>1)||pathname===link.route;

          if (link.route === "/profile" || link.route==="/communities") {
            if(userId===null)
            {
              redirect('/sign-in');
            }
            return (
              <Link
                href={`${link.route}/${userId}`}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
  
                <p className='text-light-1 max-lg:hidden'>{link.label}</p>
              </Link>
            );
          } else {
            return (
              <Link
                href={link.route}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className='text-light-1 max-lg:hidden'>{link.label}</p>
              </Link>
            );
        }})}
      </div>
      
    </section>
  )
}

export default Bottombar