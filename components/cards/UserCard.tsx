"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

interface props{
key:string,
id:string,
name:string,
username:string,
imgUrl:string,
personType:string,
}

const UserCard = (
  { key, id, name,username,imgUrl,personType,}:props
) => {
  const router=useRouter();
  return (
   <article className="user-card">
        <div className="user-card_avatar">
            <Image
            src={imgUrl}
            width={48}
            height={48}
            alt='Profile Photo'
            className="rounded-full"
            />
            <div className="flex-1 text-ellipsis">
              <h4 className="text-light-1 text-base-semibold">{name}</h4>
              <p className="text-small-medium text-gray-1">@{username}</p>

            </div>
        </div>
        <Button className="user-card_btn" onClick={()=>router.push(`/profile/${id}`)}>
           view
        </Button>
   </article>
  )
}

export default UserCard