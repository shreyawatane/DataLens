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
| Groq             | To generate insights based on the data |
| React            | Frontend|
| Python            | Server|

---

## **Installation**  

Follow these steps to set up the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/shreyawatane/DataLens.git
   ```
   
2. **Navigate to the Client Directory**  
   ```bash
   cd client
   ```

3. **Add a `.env` File to the Root Directory**  
   Create a `.env` file in the `client` folder with the following template:  
   ```env
   VITE_API_BASE_URL="your-proxy-server-url" 
   VITE_API_AUTH_TOKEN="your-auth-token"
   VITE_FLOW_ID="your-flow-id"
   VITE_LANGFLOW_ID="your-langflow-id"
   ```
   > Replace placeholder values with your actual credentials.

4. **Navigate to the Server Directory**  
   ```bash
   cd ../server
   ```

5. **Add a `.env` File to the Server Directory**  
   Create a `.env` file in the `server` folder with the following template:  
   ```env
   BASE_API_URL=https://api.langflow.astra.datastax.com
   APPLICATION_TOKEN=your-api-token
   LANGFLOW_ID=your-langflow-id
   FLOW_ID=your-flow-id
   ```
   > Use the provided `BASE_API_URL` as-is. Replace other placeholders with your actual credentials.

6. **Host the Server**  
   Host your server or run it locally. If running locally, use the generated local URL as the value for `VITE_API_BASE_URL` in the client `.env` file.

---

## **Usage**

1. **Start the Server**  
   Navigate to the `server` directory and start the server.

2. **Start the Client**  
   Navigate back to the `client` directory and run:  
   ```bash
   npm run dev
   ```

3. **Open Project in browser**  
   Access the application in your browser using the client URL provided by the development server.

--- 

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
- **Assitant**: Get insights about the data based on user queries.

---

### **Backend Layer**

#### **Proxy Server**
The backend includes a **proxy server** to handle client requests and manage real-time data flow:

- **Request Handling**: Manages incoming requests from the frontend.  
- **Response Streaming**: Streams data back to the frontend removing the headers that makes your browser block them for seamless performance.
- **Error Management**: Handles errors and ensures system reliability.

#### **Data Processing**
The backend processes engagement data to generate meaningful insights:

- **Text Splitting and Chunking**: Splits large text data into smaller chunks for processing.  
- **Data Parsing**: Parses incoming data to prepare it for analysis.  
- **Vector Store Implementation**: Stores processed data efficiently.

Thank you for taking the time to explore the **DataLens** Social Media Analytics Platform. We hope this documentation gives you a clear understanding of how the platform works. If you have any questions or need further details, feel free to dive into the individual sections or reach out to the development team—we're here to help!
