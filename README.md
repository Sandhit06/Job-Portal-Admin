<h1 align="center"><b>💼 JobBoard – Admin Job Management System</b></h1>

![Demo Screenshot](/pp.png)

## 📌 Introduction
**JobBoard** is a full-stack application that allows an **admin** to create and manage job postings through a sleek, modern UI. It includes a responsive job listing page with filters and a fully functional job creation modal — built using **Next.js**, **Mantine UI**, **NestJS**, and **PostgreSQL**.

---

## ✨ Features

- 🧾 **Create Job Postings**: Add job title, company, type, salary, deadline & more
- 🧭 **Filterable Job List**: Filter jobs by title, type, location, or salary range
- 📦 **PostgreSQL Integration**: Persistent storage of all job data
- 🔁 **Realtime Form Validation**: Built with `React Hook Form`
- 🎨 **Responsive UI**: Designed with Mantine for seamless cross-device support
- 🎯 **Custom Theming**: Consistent black styling on all form field focus rings
- 🔐 **Backend with NestJS**: REST API architecture using TypeORM

---

## 🛠️ Tech Stack

| Technology       | Purpose                                   |
|------------------|--------------------------------------------|
| **Next.js**       | Frontend framework                        |
| **Mantine**       | Component library (UI styling)            |
| **React Hook Form** | Form validation & management            |
| **NestJS**        | Backend API & business logic              |
| **PostgreSQL**    | Relational database                       |
| **TypeORM**       | ORM to connect NestJS with PostgreSQL     |

---


## 📂 Folder Structure

```shell
JobBoard/
├── backend/                      # NestJS backend app
│   ├── src/
│   │   ├── job/                  # Job module: controller, service, entity
│   │   ├── app.module.ts         # Module registration
│   │   └── main.ts               # Entry point
│   └── .env                      # PostgreSQL credentials
│
├── frontend/                     # Next.js frontend app
│   ├── components/               # Header, JobCard, CreateJobModal, etc.
│   ├── pages/
│   │   └── index.js              # Job listing page
│   ├── styles/                   # Global and component-specific CSS
│   ├── public/                   # Static assets (e.g. screenshot.png)
│   └── _app.js                   # MantineProvider & global theme
│
├── .gitignore                           # Ignored files for git
├── package.json                         # Project dependencies and scripts
├── tsconfig.json                        # TypeScript compiler configuration
└── README.md                            # 📖 Project overview and documentation
```

## 🚀 Getting Started

Want to set this up locally? Follow these steps:

1. **📦 Install PostgreSQL (Without Docker)**: Download from: https://www.postgresql.org/download
2. **Backend Setup (NestJS + TypeORM)**: 

```bash
cd backend
cp .env.example .env     # Fill in PostgreSQL details
npm install
npm run start:dev
```
This runs your API on: http://localhost:5000
3. 🖥️ Frontend Setup (Next.js)
```bash
cd frontend
npm install
npm run dev
```

4. **Visit the Local Server**: Open your browser and navigate to the local server URL.
5. This runs your app on: http://localhost:3000
---

## 📱 Mobile Support

Fully responsive across:

- 📱 iOS / Android Phones  
- 💻 Desktop & Tablets  
- ✅ Built with `@media` queries and responsive layout principles

---

## 📧 Contact

- 💼 [Portfolio Website](http://sandhit.tech/)
- 📧 Email: [sandhitkarmakar@gmail.com](mailto:sandhitkarmakar@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/sandhit-karmakar/)

---


## 🌟 Show Your Support
If you liked the Netflix Portfolio:

- ⭐ Star the repo

- 🔀 Fork and customize

- 🤝 Connect on LinkedIn

---

## Still need help?
Open an issue on our GitHub repository, and we will help you as soon as possible.

Enjoy exploring and extending this project! Feel free to contribute and suggest improvements.

---

## Developer
<table>
    <tr align="center">
        <td>
        Sandhit Karmakar
        <p align="center">
            <img src = "https://avatars.githubusercontent.com/u/90787826?v=4" width="150" height="150" alt="Dhruv Shah">
        </p>
            <p align="center">
                <a href = "https://github.com/Sandhit06">
                    <img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
                </a>
                <a href = "https://www.linkedin.com/in/sandhit-karmakar/" target="_blank">
                    <img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
                </a>
                <a href = "mailto:sandhitkarmakar@gmail.com" target="_blank">
                    <img src = "https://www.iconninja.com/files/312/807/734/share-send-email-chat-circle-message-mail-icon.svg" width="36" height="36" alt="Email"/>
                </a>
            </p>
        </td>
    </tr>
</table>

<p align="center">
    Made with ❤️ by <a href="https://github.com/Sandhit06">Sandhit Karmakar</a>
</p>
