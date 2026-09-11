# Animeverse
A club registration website for seeing their events and registration.  
# Notion Club - Event Registration Portal 🚀

A full-stack web application designed for students to seamlessly register for upcoming club events, workshops, and hackathons. This project provides a smooth user experience with dynamic backend integration, robust form validation, and real-time database storage.

---

## ✨ Features

### 💻 Frontend (Client Side)
* **Hero Section:** Clean UI featuring the event banner, catchy taglines, and a direct registration CTA.
* **About Section:** Clear display of event details, venue/platform, date, time, and guest speaker information.
* **Registration Form:** Intuitive, validation-backed input fields capturing required student details.
* **Instant Alerts:** Real-time visual feedback for successful submissions and API errors.

### ⚙️ Backend (Server Side)
* **REST API:** Handles form submissions securely with JSON request/response pipelines.
* **Database Integration:** Connected with MongoDB Atlas to store and manage participant records.
* **Input Validation:** Schema-level and route-level checks to maintain data integrity.
* **Participant Endpoints:** Built-in routes to fetch and review registration rosters.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+) | Hosted on **Vercel**
* **Backend:** Node.js, Express.js | Hosted on **Render**
* **Database:** MongoDB Atlas via Mongoose ODM

---

## 📂 Project Structure

```text
├── Notion-task/       # Client-side UI pages, styling, and static assets
└── Notion-backend/    # Express server, controllers, API routes, and models


🚀 Quick Setup & Run
Follow these quick commands to get the project running locally:

1. Clone & Install
git clone [https://github.com/bhatibhumi7/Notion-Web.git](https://github.com/bhatibhumi7/Notion-Web.git)
cd Notion-Web

2. Go to backend & install dependencies

cd Backend
npm install
Create .env file

MONGO_URI=mongodb+srv://<YOUR_MONGODB_USERNAME>:<YOUR_MONGODB_PASSWORD>@cluster0.mongodb.net/your_db_name
PORT=5000

Start backend server

node server.js

Start frontend

npm run dev
