# Serverless Application on AWS – Ritual Roast Recipe Contest

This project demonstrates a **serverless web application built on AWS** for the **Ritual Roast coffee shop**.
The application allows customers to **submit and share their favourite snack or beverage recipes** as part of a **Recipe Contest**, using a fully managed, scalable serverless architecture.

---

## ☕ Project Overview

The **Ritual Roast Recipe Contest App** enables customers to participate in an online competition by posting their favourite coffee-inspired drinks or snack recipes.

The application uses **Amazon S3 and Amazon CloudFront** to deliver a fast, secure static website, while backend services are implemented using a serverless-first approach to eliminate server management and scale automatically during peak contest activity.

**Key goals of this project:**

* Increase customer engagement through a recipe submission platform
* Deliver fast, global access to the web application
* Eliminate server management
* Automatically scale during high traffic periods
* Pay only for actual usage
* Follow AWS best practices for security and reliability

---

## 🏗️ Architecture

The application follows this high-level flow:

1. Customers access the Ritual Roast Recipe Contest website via Amazon CloudFront
2. Static web content (HTML, CSS, JavaScript) is served from Amazon S3
3. Client-side requests are sent to Amazon API Gateway
4. AWS Lambda processes recipe submissions and retrieval requests
5. Amazon DynamoDB stores customer recipes and contest entries
6. Responses are returned to the client application through the API

---

## 🧰 AWS Services Used

* **Amazon S3** – Hosts the static web application
* **Amazon CloudFront** – Global content delivery with low latency and HTTPS
* **Amazon API Gateway** – Exposes APIs for submitting and viewing recipes
* **AWS Lambda** – Handles backend business logic for the recipe contest
* **Amazon DynamoDB** – Stores recipe submissions and contest data
* **AWS IAM** – Manages secure access and permissions
* **Amazon CloudWatch** – Logging, monitoring, and observability

---

## 🔐 Security Considerations

* CloudFront provides HTTPS and edge-level security
* Least-privilege IAM roles for Lambda functions
* Controlled access between API Gateway and backend services
* No servers or inbound ports exposed
* Application logs and metrics captured using CloudWatch

---

## 📈 Benefits of This Architecture

* **Serverless and fully managed**
* **Fast global content delivery via CloudFront**
* **Automatic scaling during recipe contests**
* **High availability by default**
* **Cost-effective, pay-per-use pricing**
* **Secure and resilient design**

---

## 🧪 Testing & Monitoring

* Validate API endpoints using Postman or curl
* Test frontend functionality via CloudFront distribution URL
* Monitor logs, metrics, and errors using CloudWatch

---

## 📚 Learning Outcomes

By working with this project, you will learn:

* How to build a static website using Amazon S3 and CloudFront
* How to integrate frontend applications with API Gateway and Lambda
* How DynamoDB supports scalable application data storage
* How IAM secures serverless workloads
* How monitoring and observability work in serverless architectures

---

## 📝 Notes

This project is intended for **educational and demonstration purposes**, inspired by a real-world coffee shop use case, and aligns with AWS Well-Architected Framework principles.

---

## 📌 Author

Created as part of the **Ritual Roast serverless application learning project**.

---

## 📜 License

This project is provided for educational use.
