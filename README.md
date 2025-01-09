# 📊 DataLens: Your Lens to Social Media Insights
### Uncover actionable insights and optimize your social media strategy with DataLens!
### This project is developed for the Level Supermind Hackathon to analyze mock social media engagement data using Langflow and DataStax Astra DB

## Table of Contents  
1. [About the Project](#about-the-project)  
2. [Objective](#objective )  
3. [Tech Stack](#tech-stack)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Insights Example](#insights-example)  
7. [System Architecture](#system-architecture)  
8. [License](#license)  
9. [Contact](#contact)

## **About the Project**  

**DataLens** is a social media analytics tool that provides actionable insights into engagement metrics. It helps users analyze how different types of posts (carousels, reels, images) perform and offers suggestions to improve social media strategies using GPT.

---

## **Objective**  

The goal of this project is to:  
1. Simulate social media engagement data (likes, shares, comments, post types).  
2. Store the data in **DataStax Astra DB**.  
3. Use **Langflow** to build workflows that analyze the data and generate insights using **GPT**.

---

## **Tech Stack**  

| Technology       | Purpose                           |
|------------------|-----------------------------------|
| DataStax Astra DB| Database for storing engagement data |
| Langflow         | Workflow creation and GPT integration |
| GPT              | To generate insights based on the data |

---

## **Installation**  

Follow these steps to set up the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/DataLens.git
   
## **Usage**

Follow these steps to use **DataLens**:

1. **Open Langflow** in your browser by running the command:  
   ```bash
   langflow

## **Insights Example**

Here are some sample insights that **DataLens** can generate:  

> ✅ "Carousel posts have 20% higher engagement than static images."  
> ✅ "Reels generate twice as many comments compared to other formats."  

These insights can help users optimize their social media strategies.

## **System Architecture**

The architecture of **DataLens** is divided into two key layers: **Frontend Layer** and **Backend Layer**. Here's a detailed breakdown:

---

### **Frontend Layer**

#### **Landing Page**
The landing page provides an engaging introduction to **DataLens** with the following components:

- **Header with Navigation**: Easy navigation to different sections of the website.  
- **Features Showcase**: Highlight key features of **DataLens**.  
- **Team Information**: Display team members' names and roles.  
- **Call-to-Action Elements**: Encourage users to explore the analytics dashboard.

#### **Analytics Dashboard**
The core feature of **DataLens**, providing users with actionable insights into social media performance:

- **Performance Overview Cards**: Quick summary of key metrics such as likes, shares, and comments.  
- **Data Visualization Section**: Interactive charts and graphs to represent engagement data.  
- **Analytics Insights Panel**: Displays GPT-generated insights based on engagement data.  
- **Data Grid for Detailed View**: A tabular format for users to view post-level details.

---

### **Backend Layer**

#### **Proxy Server**
The backend includes a **proxy server** to handle client requests and manage real-time data flow:

- **WebSocket Connections**: Supports real-time data streaming and interactions.  
- **Request Handling**: Manages incoming requests from the frontend.  
- **Response Streaming**: Streams data back to the frontend for seamless performance.  
- **Error Management**: Handles errors and ensures system reliability.

#### **Data Processing**
The backend processes engagement data to generate meaningful insights:

- **Text Splitting and Chunking**: Splits large text data into smaller chunks for processing.  
- **Data Parsing**: Parses incoming data to prepare it for analysis.  
- **Vector Store Implementation**: Stores processed data effici

Thank you for taking the time to explore the **DataLens** Social Media Analytics Platform. We hope this documentation gives you a clear understanding of how the platform works. If you have any questions or need further details, feel free to dive into the individual sections or reach out to the development team—we're here to help!
