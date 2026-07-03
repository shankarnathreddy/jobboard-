# JobBoard

A responsive Job Board web application built using **HTML, CSS, and JavaScript**. Users can browse jobs, apply for jobs, create an account, log in, and manage their applications. The project is automatically deployed to **Vercel** using a **GitHub Actions CI/CD pipeline**.

## Live Demo

🌐 Live Website: https://job-board-kappa-nine.vercel.app/

## GitHub Repository

🔗 https://github.com/shankarnathreddy/jobboard-

---

# Features

## Home Page
- Responsive navigation bar
- Hero section
- Featured jobs
- Popular categories
- Top hiring companies
- Call-to-action section

## Jobs Page
- View available jobs
- Search jobs by keyword
- Filter jobs by:
  - Category
  - Location
  - Job Type
- Responsive job cards

## Job Details
- View complete job information
- Company details
- Salary
- Location
- Apply button

## Apply Page
- Application form
- Name validation
- Email validation
- 10-digit mobile validation
- Resume upload
- Stores applications using Local Storage

## My Applications
- Displays applied jobs
- Remove individual application
- Clear all applications

## Login
- Email validation
- Password validation
- Show/Hide password
- Login using Local Storage credentials

## Sign Up
- Create new account
- Full Name validation
- Email validation
- Mobile number validation
- Password confirmation
- Show/Hide password
- Stores user information in Local Storage

## About Page
- Company overview
- Features
- Statistics

## Contact Page
- Contact information
- Contact form
- Google Maps location

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome
- Local Storage
- Git
- GitHub
- GitHub Actions
- Vercel

---

# Running the Project

Clone the repository

bash
git clone https://github.com/shankarnathreddy/jobboard-.git


Open the project folder

bash
cd jobboard-


Open **index.html** in your browser.

No additional installation is required.

---

# CI/CD Pipeline

This project uses **GitHub Actions** to automatically deploy the application to **Vercel**.

Whenever code is pushed to the **main** branch, GitHub Actions will:

- Checkout the repository
- Install Node.js
- Install Vercel CLI
- Pull Vercel project configuration
- Build the project
- Deploy automatically to Vercel

### GitHub Secrets

The following repository secrets are configured:

- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID

---


---

### 5. Deployment Section


# Deployment

The application is deployed on **Vercel** using a **GitHub Actions CI/CD pipeline**.

Production URL: https://job-board-kappa-nine.vercel.app/


---

# Future Improvements

- Backend integration
- Database support
- User authentication
- Resume download
- Email notifications
- Admin dashboard
- Company login
- Job posting functionality

---

# Author

**Shankarnath Reddy**

GitHub: https://github.com/shankarnathreddy

---

# License

This project was developed for assessment purposes.
