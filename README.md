# Payment Integration Backend

A RESTful backend built with **Node.js**, **Express**, and **Prisma**, implementing user authentication and **Stripe payment gateway integration**.  

This backend allows users to register, login, purchase plans, and handle payments securely via Stripe. Webhooks are used to track payment status in real-time.

---

## 🚀 Features

- **User Management**
  - User registration
  - User login with JWT authentication
  - Get logged-in user profile

- **Payment Integration**
  - Stripe Checkout for purchasing plans
  - Webhook handling for payment success/failure
  - Store payment and order information in the database
  - Atomic updates using Prisma transactions

- **Tech Stack**
  - Node.js
  - Express.js
  - TypeScript
  - Prisma ORM
  - Stripe API
  - PostgreSQL / MySQL / SQLite (via Prisma)
  - JWT Authentication
  - CORS & Cookie Handling

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <https://github.com/mostafizdev01/payment-integrate>
