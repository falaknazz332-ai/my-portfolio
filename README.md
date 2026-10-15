# Falak Naz — Portfolio (React + Vite + Tailwind CSS)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Add your resume
Put your real PDF at `public/Falak-Naz-Resume.pdf`. The "Download Resume" button turns on automatically
(until then it shows "Resume coming soon" — no fake download).

## Deploy on Vercel
1. Create a GitHub repo and push this folder:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/falaknazz332-ai/<repo-name>.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Vercel reads `vercel.json`: Framework **Vite**, Build `npm run build`, Output `dist`. Click **Deploy**.
4. Every `git push` to `main` redeploys automatically.
