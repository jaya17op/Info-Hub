import React from 'react'
interface props{
    currentUserId:string,
parentId:string|null,
content:string,
author:
{
    name:string,
    image:string,
    id:string
}
community:
    {
        name:string,
        image:string,
        id:string
    }|null,
createdAt:string,
comments:{
    author:{
        image:string,
    }
}[]
isComment?:boolean,
}
const ThreadCard = ({
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments
}:props) => {
    return (
        <article >
        <h2 className='text-small-regular text-light-2'>
            {content}
        </h2>
        </article>
    )
}

export default ThreadCard