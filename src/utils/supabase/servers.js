// // utils/supabase/server.js
// import { createServerClient } from '@supabase/'
// import { createServerClient } from '@supabase/supabase-js'
// import { cookies } from 'next/headers'

// export function createClient() {
//   const cookieStore = cookies()

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         get(name) {
//           return cookieStore.get(name)?.value
//         },
//         set(name, value, options) {
//           cookieStore.set({ name, value, ...options })
//         },
//         remove(name, options) {
//           cookieStore.set({ name, value: '', ...options })
//         },
//       },
//     }
//   )
// }