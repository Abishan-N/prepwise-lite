# PrepWise AI

PrepWise AI is a simple web application that helps students create personalized study plans using Artificial Intelligence. Students can enter their subject, topics to study, and exam date, and the system generates a structured study schedule.

## Features

* Generate AI-powered study plans
* Enter subject, topics, and exam date
* Save generated study plans to the database
* View previously saved study plans
* Simple and user-friendly interface
* Fast and responsive design

## Technologies Used

* Next.js
* React
* Tailwind CSS
* Supabase
* Groq AI API
* Vercel

## How It Works

1. The student enters the subject, topics, and exam date.
2. The information is sent to the AI service.
3. The AI generates a personalized study plan.
4. The generated plan is saved in the database.
5. Students can view their saved plans at any time.

## Installation

Clone the repository:

```bash
git clone https://github.com/Abishan-N/prepwise-lite.git
```

Go to the project folder:

```bash
cd prepwise-lite
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required environment variables:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

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

## Future Improvements

* User authentication
* Progress tracking
* Study reminders
* Download study plans as PDF
* Dashboard with study statistics

## Author

Abishan N

Computer Science Undergraduate
