// App.js
import React from 'react';
import Header from './header';
import styled from 'styled-components';
import MembershipSection from './MembershipCard';
import AboutSection from './AboutSection';
import TrainerCard from './TrainerCard';
import HeroSection from './header';
import TrainersSection from './TrainerCard';
import ReasonsToJoinSection from './ReasonsToJoinSection';
import Footer from './GymFooter';
import SignUpPage from './GymSign';
import LoginPage from './LoginPage';


const App = () => {
  const membershipPlans = [
    {
      title: 'Basic',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard',
      price: 19.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium',
      price: 29.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  const trainers = [
    { name: 'Trainer 1', image: "https://via.placeholder.com/150" },
    { name: 'Trainer 2', image: "https://via.placeholder.com/150" },
    { name: 'Trainer 3', image: "https://via.placeholder.com/150" },
    { name: 'Trainer 4', image:"https://via.placeholder.com/150" },
  ];

  return (
    <>
    <div>
      <HeroSection />
     
       
     
          
              <MembershipSection/>
       
        
        
      <ReasonsToJoinSection/>
      <TrainersSection />
      <Footer/>
    
    </div>
    <SignUpPage/>
    <LoginPage/>
    </>

  );
};

export default App;