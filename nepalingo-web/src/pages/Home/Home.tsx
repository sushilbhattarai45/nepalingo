import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Header from "../../components/header/Header";
import ReactGA from "react-ga4";
import { useAuth } from "../../components/userAuth/AuthContext";
import { Link } from "react-router-dom";
import GreetingCard from "../../components/GreetingCard";
import DailyQuiz from "../../components/DailyQuiz";

const Home: React.FC = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "home",
  });
  const { user } = useAuth();

  return (
    <div className="flex flex-col w-full justify-between h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="mt-10">
          <div className="text-xl font-bold text-centre">
            <GreetingCard name={user?.user_metadata?.username} />
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="w-40 h-40 border-2 border-white rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="Nepalingo Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-3xl font-bold">Nepalingo</p>
          </div>
          <div className="text-center mt-2">
            <p className="text-xl">
              Learn indigenous languages of Nepal for free
            </p>
          </div>
        </div>
        <div className="mb-5 pt-5">
          <DailyQuiz />
        </div>

        <div className="mb-10">
          <Link
            to="/dictionary"
            className="text-xl font-bold p-5 border-2 border-white rounded-full"
          >
            Go to dictionary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
