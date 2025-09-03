# 📝 Blog Web Application Plan

> 🚧 This project is built **only for learning purposes** where I implemented multiple functionalities to explore frontend development concepts.

### A full-featured **Blog Web Application** built with modern web technologies. This project demonstrates user-based content management, authentication with role-based access, and secure API handling using tokens. The application allows users to create, manage, and interact with blogs in a personalized and secure environment.
---

## 🚀 Features

### 🔐 Authentication & Authorization
- **Login / Register / Forgot Password**
- **JWT-based Token Authentication**
- **Role-based Access Control** (Admin/User)
- **Protected Routes** – Accessible only after login
- **Token refresh & auto logout on expiry**

### 👤 User Management
- **Profile Page** – View and update user information
- **Conditional UI** based on role (Admin/Regular User)

### 📝 Blog Management
- **Blog List Page** – All blogs listed for authenticated users
- **Add Blog** – Only logged-in users can create blogs
- **Delete Blog** – Users can delete only their own blogs
- **Edit Blog** – Edit your own blog posts
- **View Blog Details** – Read full content in a dedicated page
- **Dynamic Routing** based on blog IDs

### 💬 Comments System
- **Comment on Blogs** – Authenticated users can comment
- **User-Specific Comments** – Shows who commented
- **Comment Moderation** (Future scope)

### 🔍 UX Features
- **Pagination** for blog lists (for better performance)
- **Infinite Scrolling** (optional toggle with pagination)
- **Multiple View Modes**: Switch between **Card View** and **Table/List View**
- **Responsive UI** – Mobile-friendly layout
- **Loading Skeletons** while fetching blogs
- **Error & Success Toasts**
- **Form Validations** using libraries or custom logic
- **User Feedback** on all actions (e.g., blog posted, deleted, etc.)


## 🛠️ Tech Stack

**Frontend:** React, Tailwind CSS, DaisyUI, Framer Motion, Redux, Axios / Unirest, Font Awesome Icons  
**Backend:** Node.js, JWT, Prisma  
**Database:** MongoDB


## 🧩 Future Enhancements

- 🛡️ Admin Panel for managing all blogs and users
- 🔎 Blog Search & Filters
- 🌐 Public Blog View (for unauthenticated users)
- 🏷️ Tags / Categories for blogs
- ❤️ Like / Bookmark functionality
- 📊 Analytics Dashboard

## 🙏 Thank You

Thank you for checking out my project and its structure. I hope it helps you understand how to implement full-stack features in a real-world style application.
