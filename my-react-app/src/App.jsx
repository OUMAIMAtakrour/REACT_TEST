
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";

import Button from "./Button/button.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import SecondList from "./SecondList.jsx";
import EventButton from "./EventButton.jsx";
import KPISection from './KPISection';
import SideMenu from './SideMenu';




import MyComponent from "./MyComponent.jsx";
import PatientInformation from "./PatientInfo.jsx";
import CallToAction from "./CallToAction.jsx";
import Hero from "./Application.jsx";
import Header from "./Application.jsx";
import Steps from "./Application.jsx";
import StepCard from "./StepCard.jsx"
import FAQ from "./FAQ.jsx";
import Pharm from "./pharm.jsx";
import SidebarLink from "./SidebarLink.jsx";
import PatientPage from "./PatientPage.jsx";
import Departments from "./Departments.jsx";
import Blog from "./Blog.jsx";

import Card from "./card.jsx";
import Signup from "./SignUp.jsx";
import Post from "./Post.jsx";
import { CCard} from '@coreui/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
// import Navbar from './components/Navbar';
import Dashboard from './dashboard';
// import Users from './pages/Users';
// import Products from './pages/Products';




function App() {
  
  // const fruits=[
  // ];
  //               const veg=[{id:4,name:"lo",calories:87},
  //               {id:5,name:"carrots",calories:85},
  //               {id:6,name:"pine",calories:70}];
return(<>
{/* {fruits.lenght >0 && <SecondList items={fruits} category="Fruits"/>}
{veg.length >0 ? <SecondList items={veg} category="Vegetables"/>: null } */}
  <Steps/>
  <CallToAction/>
  <MyComponent/>
  <Pharm/>
  <FAQ/>
 
  <Sidebar/>
  <Footer/>
  <PatientPage/>
  <Departments/>
  <Blog/>
  <Signup/>
  
  <Post/>
   <Dashboard/>
   
 
  
  

  
 

 
    {/* <Header></Header>
    <Food></Food>
    <Food></Food>
  <Footer/>
   <Card></Card>
   <Card></Card>
   <Card></Card>
 <Button/> */}
  
{/* <Student name="sponge" age={13} isStudent={true}/>
<Student name="patrick" age="12" isStudent={false}/>
<Student name="hello"/> */}
{/* <UserGreeting isLoggedIn={true} /> */}
{/* <List/> */}

</>

);
}

export default App
