"use client";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { redirect, usePathname,useRouter } from "next/navigation";
import { SignOutButton, SignedIn,useAuth  } from "@clerk/nextjs";


const LeftSidebar = () => {
  const pathname=usePathname();
  const router=useRouter();
  const { userId,signOut } = useAuth();
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
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
            }

        })}
      </div>
      <div className="mt-10 px-6">
      <SignedIn>
      <SignOutButton redirectUrl="/sign-in">
        <div className='flex cursor-pointer gap-4 p-4'>
          <Image src="/assets/logout.svg" alt="Logout" width={24} height={24} />
          <p className="text-light-2 max-lg:hidden">Logout</p>
        </div>
      </SignOutButton>
    </SignedIn>
      </div>
      </section>
  );
};

export default LeftSidebar;