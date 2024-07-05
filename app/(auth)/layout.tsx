import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css';
export const metadata={
    title:'InfoWeb',
    description:'InfoWeb is a web application helps you to connect and react ively with people around the world.',
}
// const inter=Inter({subsets:["latin"]})
export default function RootLayout({
    children
}:{children:React.ReactNode}){return(
    <ClerkProvider>
        <html lang="en">
            <body className='bg-dark-1'>
                {children}
            </body>
        </html>
    </ClerkProvider>
)}

