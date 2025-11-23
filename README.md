# Novira

Novira is a modern E-learning platform built with **Angular 20**, **Angular Material**, and **Tailwind CSS**. It provides a comprehensive environment for students to browse courses, enroll, watch course content, and track their progress.

## 🚀 Features

- **User Authentication**: Secure Login and Signup functionality.
- **Course Management**: Browse, search, and view details of available courses.
- **Video Player**: Interactive course video player for an immersive learning experience.
- **Student Dashboard**: Personalized profile area to track enrolled courses and progress.
- **Certificates**: View and download certificates upon course completion.
- **Interactive Home Page**: Featuring statistics, mentors, partners, and FAQs.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend Framework**: [Angular](https://angular.io/) v20
- **UI Component Library**: [Angular Material](https://material.angular.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **State Management / Data**: RxJS
- **Build Tool**: Angular CLI

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v18 or higher recommended)
- **npm** (usually comes with Node.js)
- **Angular CLI** (globally installed, though not strictly required if using `npm run` commands)
  ```bash
  npm install -g @angular/cli
  ```

## 🔧 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Amr-shawky/Novira.git
    cd novira
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

## 🏃‍♂️ Development Server

Run the development server for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
npm start
# or
ng serve
```

## 🏗️ Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
npm run build
```

## 🧪 Running Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```bash
npm test
```

## 📂 Project Structure

A brief overview of the project structure in `src/app`:

- **components/**: Contains all the UI components (Home, Courses, Student Dashboard, etc.).
- **services/**: Services for API communication (Auth, Course, Search, etc.).
- **interfaces/**: TypeScript interfaces for type definitions.
- **app.routes.ts**: Application routing configuration.
- **app.config.ts**: Application configuration.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/amazing-feature`).
6.  Open a Pull Request.
