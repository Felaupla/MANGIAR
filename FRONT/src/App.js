import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import CreateUser from "./components/FormUser/formUser";
import Home from "./pages/Home/Home.jsx";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe.jsx";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail.jsx";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import UserPage from "./components/userPage/UserPage";
import Appmodel from "../src/Admin/Appmodel";
import UserList from "./Admin/pages/userList/UserList";
import Transactions from "./Admin/components/Transactions/Transactions";
import Products from "../src/Admin/components/Products/Products";
import Email from "./Admin/components/Email/Email";
import Reviews from "./Admin/components/Reviews/Reviews";
import Feedback from "../src/Admin/components/Feedback/Feedback";

// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = "https://mangiare-production.up.railway.app/";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/home"} element={<NavBar />} />
        <Route exact path={"/createrecipe"} element={<CreateRecipe />} />
        <Route path="/" element={<LandingPage />} />
        <Route exact path="formUser" element={<CreateUser />} />
        <Route exact path="/recipes/:id" element={<RecipeDetail />} />
        <Route exact path="/createRecipe" element={<CreateRecipe />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/myRecipes" element={<MyRecipes />} />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
        <Route exact path="/user" element={<UserPage />} />
        <Route exact path="/admin" element={<Appmodel />} />
        <Route exact path="/admin/user" element={<UserList />} />
        <Route exact path="/admin/products" element={<Products />} />
        <Route exact path="/admin/pransactions" element={<Transactions />} />
        <Route exact path="/admin/email" element={<Email />} />
        <Route exact path="/admin/reviews" element={<Reviews />} />
        <Route exact path="/admin/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}
