"use client"

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Signup() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="flex">
            <div className="w-full flex items-center justify-between py-6 px-12 fixed z-10">
                <Link href="/">
                    <Image src="/logo-white.png" width={100} height={60} alt="Singly" />
                </Link>
                <Link href="/login">
                    <Button variant="ghost">Log in</Button>
                </Link>
            </div>
            <div className="flex-1 h-screen max-w-[45%] bg-[#630CED] flex items-end p-16 relative">
                <Image className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%]" src="/signup2.gif" width={300} height={200} alt="Sign up" />
                <blockquote className="space-y-2 text-white">
                    <p className="text-lg">“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”</p>
                    <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
            </div>
            <div className="flex flex-1 h-screen justify-center items-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[50%]">
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};