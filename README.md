# PrepWise AI

PrepWise AI is a web application that helps students create personalized study plans using Artificial Intelligence. Students can enter their subject, study topics, and exam date to generate a structured study schedule automatically.

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the application.

You can start editing the project by modifying the files inside the `app` and `components` folders. The page automatically updates as you save changes.

## Features

* Generate AI-powered study plans
* Create personalized schedules based on exam dates
* Save study plans to the database
* View previously generated plans
* Simple and responsive user interface

## Live Demo

Application URL:

https://prepwise-lite-smoky.vercel.app/

Saved Study Plans:

https://prepwise-lite-smoky.vercel.app/plans

## Technologies Used

* Next.js
* React
* Tailwind CSS
* Supabase
* Groq AI API
* Vercel

## Project Structure

```text
prepwise-lite/
├── app/
├── components/
├── lib/
├── public/
├── package.json
└── README.md
```

## Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## Deployment

The application is deployed using Vercel.

Live Website:
https://prepwise-lite-smoky.vercel.app/

## Future Improvements

* User authentication
* Study progress tracking
* Email reminders
* PDF export for study plans
* Analytics dashboard

## Author

Abishan N

Computer Science Undergraduate
