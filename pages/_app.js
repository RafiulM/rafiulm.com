import '../styles/globals.css'
import { ThemeProvider } from "next-themes"
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
    >
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  )
}

export default MyApp
