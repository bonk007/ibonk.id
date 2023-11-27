"use client"

import {ThemeProvider} from "next-themes";

// @ts-ignore
export const Provider = ({children}) => {
  return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light" themes={['light', 'dark']}>
            {children}
        </ThemeProvider>
    )
}
