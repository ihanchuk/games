## Runing Project

First install like any other project
` npm i`

After, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Areas for future improvement if given more time

- Deal with caching and ISR.
- Add meta tags and etc
- Clean up code a little bit
- Use wrappers for all 3-d party components like i did with src/app/\_\_shadcn/components/ui/custom/link.tsx

## Key decisions or assumptions made during development

- Zustand for client state management. Its super minimalistic and support persistance with Local Storage
- Shadcn components. This library allows us to use simple and editable components. Source code is not packed like npm package and in worst case we can edit components
- I used NextAuth for authentication. right now only with Github provider
