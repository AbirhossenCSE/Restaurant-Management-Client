# Food Planet
### Live Site Link : https://restaurant-management-b98e1.web.app/


This project is a **Food Restaurant Website** built with **React** and **Vite**. It provides a user-friendly interface for browsing and purchasing food items, managing the restaurant's menu, and more. The application is designed to enhance the customer experience and streamline restaurant operations.

## Features
- **Responsive Design**: The website is fully responsive, ensuring a smooth experience on mobile, tablet, and desktop.
- **Menu Page**: Users can view the menu with food names, descriptions, and prices.
- **My Food**: Restaurant owners can view their added food items.
- **Add Food**: Restaurant owners can add new food items to the menu.
- **Update Food**: Restaurant owners can update existing food items (name, description, price, etc.).
- **Delete Food**: Restaurant owners can delete food items from the menu.
- **Cart Functionality**: Users can add items to the cart and place an order.
- **My Order**: Users can view their previous food orders.
- **Backend Integration**: The app integrates with a backend API to manage food items and purchases.
- **Firebase Authentication**:
  - **Sign In/Sign Up**: Users can register and log in using Firebase Authentication.
  - **Sign Out**: Users can sign out from the app.
  - **Google Sign-In**: Users can sign in using their Google account.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A fast development environment for building modern web applications.
  - **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
  - **Axios**: A promise-based HTTP client for making API requests.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the backend server.
  - **Express.js**: Web framework for building RESTful APIs.
  - **MongoDB**: NoSQL database for storing menu items and user data.

  ## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbirhossenCSE/Restaurant-Management-Client.git
   cd Restaurant-Management-Client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Backend Setup:**
   - Navigate to the backend folder: `cd backend`
   - Install backend dependencies: `npm install`
   - Start the backend server: `npm run start`

## Dependencies
```json
{
  "@smastrom/react-rating": "^1.5.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "@tanstack/react-table": "^8.20.6",
  "axios": "^1.7.9",
  "chart.js": "^4.4.7",
  "date-fns": "^4.1.0",
  "firebase": "^11.2.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-chartjs-2": "^5.3.0",
  "react-collapse": "^5.1.1",
  "react-datepicker": "^7.6.0",
  "react-dom": "^18.3.1",
  "react-helmet": "^6.1.0",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-paginate": "^8.2.0",
  "react-query": "^3.39.3",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^7.1.1",
  "react-slick": "^0.30.3",
  "slick-carousel": "^1.8.1",
  "sort-by": "^1.2.0",
  "stripe": "^17.5.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```

## Backend Setup
Ensure you have Node.js installed.

1. **Create a `.env` file** and add:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

2. **Run the backend server:**
   ```sh
   node server.js
   ```


