// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { Locale } from '@/intl/config';

// interface LanguageState {
//   locale: Locale;
//   setLocale: (newLocale: Locale) => void;
// }

// const useLanguageStore = create<LanguageState>()(
//   persist(
//     (set) => ({
//       locale: 'zh',
//       setLocale: (newLocale: Locale) => set({ locale: newLocale }),
//     }),
//     {
//       name: 'language-storage',
//     }
//   )
// );

// export default useLanguageStore;
