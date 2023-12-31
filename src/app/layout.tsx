import './globals.css'
import {Provider} from "@/app/provider";

export const metadata = {
  title: 'Ayi Muhammad Iqbal Nasuha',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

        <html lang="en">

          <body>
            <Provider>
              {children}
            </Provider>
          </body>

        </html>

  )
}
