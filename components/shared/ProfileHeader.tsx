import Image from "next/image"

interface props{
    accountId:string,
authUserId:string,
name:string,
username:string,
imgUrl:string,
bio:string,
type?:string
}
const ProfileHeader = ({
  accountId,
authUserId,
name,
username,
imgUrl,
bio,
type,
}:props) => {
  return (
    <div className="flex flex-col w-full justify-start">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-20 w-20 object-cover">
                <Image src={imgUrl}
                className="rounded-full object-cover shadow-2xl"
                alt="Profilr Photo"
                fill
                 />
            </div>
       <div className="flex-1">
        <h2 className="text-left text-heading3-bold text-light-1">{name}</h2>
        <p className="text-base-medium text-grey-1">@{username}</p>
       </div>
          </div>
        </div>
          <p className="mt-6 max-w-lg text-base-regular text-light-2">
            {bio}
          </p>
          <div className="mt-12 h-0.5 w-full bg-dark-3"></div>
    </div>
  )
}

export default ProfileHeader