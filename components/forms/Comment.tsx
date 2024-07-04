"use client";

import { z } from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";

interface props{
    threadId:string,
    currentUserImg:string,
    currentUserId:string
}
const Comment = ({
    threadId,currentUserImg,currentUserId
}:props) => {
    
    const pathname=usePathname();
    const form = useForm({
          resolver:zodResolver(CommentValidation),defaultValues:{
             thread:'',
             accountId:''
          }
      })
const onSubmit = async(values: z.infer<typeof CommentValidation>)=>{
    const accountId = JSON.parse(currentUserId); 
    await addCommentToThread(threadId, values.thread, accountId, pathname);
    form.reset();
};
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form ">
    <FormField
        control={form.control}
        name="thread"
        render={({ field }) => (
          <FormItem className="flex  w-full items-center gap-3 ">
            <FormLabel className="text-base-semibold text-light-2">
             <Image src={currentUserImg}
             alt="Profile photo"
             width={48}
             height={48}
             className="rounded-full object-cover"
             /> 
            </FormLabel>
            <FormControl className="border-none bg-transparent" >
             <Input
               type="text"
               placeholder="Comment....."
               className="no-focus text-light-1 outline-none"
             {...field}/>
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="submit"className="comment-form_btn">Reply</Button>
        </form>
</Form>
  )
}

export default Comment