# 📱 SIM Activation Portal

A full-stack web application developed using **Spring Boot**, **Java**, **MySQL**, **HTML**, **CSS**, and **JavaScript** to automate the SIM activation process. The portal provides a seamless workflow for customer registration, SIM validation, address updates, ID proof verification, and SIM activation.

---

## 🚀 Features

### 👤 Customer Management
- Register new customers
- Validate customer using Email & Date of Birth
- Validate customer details
- Automatically generate Customer ID

### 📱 SIM Management
- Add new SIM cards
- Validate SIM details
- Activate SIM
- Deactivate SIM
- Delete SIM

### 📍 Address Management
- Update customer address
- Store complete address information

### 🪪 ID Proof Verification
- Update ID proof
- Validate customer ID proof

### 🎁 Special Offers
- Display offers for activated SIMs
- Restrict offers for inactive SIMs

### 📊 Dashboard
- Total Customers
- Total SIMs
- Activated SIMs
- Inactive SIMs

---

# 🛠️ Technologies Used

## Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

## Frontend
- HTML5
- CSS3
- JavaScript

## Database
- MySQL

## IDE
- Spring Tool Suite (STS)
- Visual Studio Code

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```
sim-activation-portal
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.example.demo
│   │   │       ├── controller
│   │   │       ├── service
│   │   │       ├── repository
│   │   │       ├── entity
│   │   │       ├── dto
│   │   │       ├── exception
│   │   │       └── SimActivationPortalApplication.java
│   │   │
│   │   ├── resources
│   │   │       └── application.properties
│   │   │
│   │   └── static
│   │       ├── index.html
│   │       ├── customer.html
│   │       ├── validation.html
│   │       ├── activation.html
│   │       ├── address.html
│   │       ├── id-proof.html
│   │       ├── offers.html
│   │       ├── script.js
│   │       └── style.css
│
├── screenshots
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/kajithak017-India/sim-activation-portal.git
```

---

## 2. Open the Project

Import the project into **Spring Tool Suite (STS)** or **Eclipse** as an Existing Maven Project.

---

## 3. Configure MySQL

Create a MySQL database.

Example:

```sql
CREATE DATABASE sim_activation_portal;
```

Update your `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sim_activation_portal
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 4. Run the Project

Run:

```
SimActivationPortalApplication.java
```

or

```
mvn spring-boot:run
```

---

## 5. Open the Application

```
http://localhost:8080
```

---

# 📸 Screenshots

## 🏠 Dashboard

![Dashboard](snaps/home.png)

---

## 👤 Customer Management

![Customer Management](snaps/customer.png)

---

## 📍 Address Update

![Address Update](snaps/address.png)

---

## 🪪 ID Proof Validation

![ID Proof Validation](snaps/id-proof.png)

---

## ✅ SIM Activation

![SIM Activation](snaps/activation.png)

---

# 📌 REST API Endpoints

## Customer APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/customer/add` | Add Customer |
| GET | `/customer/all` | View All Customers |
| POST | `/customer/validate` | Validate Customer |
| POST | `/customer/validateDetails` | Validate Customer Details |
| PUT | `/customer/updateAddress/{id}` | Update Address |
| PUT | `/customer/updateIdProof/{id}` | Update ID Proof |
| POST | `/customer/validateId` | Validate ID Proof |

---

## SIM APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/customer/addSim` | Add SIM |
| POST | `/customer/validateSim` | Validate SIM |
| POST | `/customer/activateSim` | Activate SIM |
| POST | `/customer/deactivateSim` | Deactivate SIM |
| DELETE | `/customer/deleteSim/{simNumber}` | Delete SIM |
| GET | `/customer/offers/{simNumber}` | Get Special Offers |

---

## Dashboard API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/customer/dashboard` | Dashboard Statistics |

---

# 🌟 Future Enhancements

- Login Authentication
- OTP Verification
- Email Notifications
- PDF Receipt Generation
- Admin Dashboard
- Search & Filter Customers
- Responsive Mobile Design

---

# 👨‍💻 Author

## Kajitha K

**Software Engineer | Java Developer | Spring Boot Developer | Web Developer**

📧 Email: **kajithak017@gmail.com**

🔗 GitHub: **https://github.com/kajithak017-lndia**

🔗 LinkedIn: **https://www.linkedin.com/in/kajitha-k-729889308**


---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.

---

## 📜 License

This project is developed for educational and learning purposes.
