import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./card.jsx";
import Button from "./Button/button.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import SecondList from "./SecondList.jsx";
import EventButton from "./EventButton.jsx";


function App() {
  
  // const fruits=[
    
  // ];
  //               const veg=[{id:4,name:"lo",calories:87},
  //               {id:5,name:"carrots",calories:85},
  //               {id:6,name:"pine",calories:70}];
return(<>
{/* {fruits.lenght >0 && <SecondList items={fruits} category="Fruits"/>}
{veg.length >0 ? <SecondList items={veg} category="Vegetables"/>: null } */}
  
  <EventButton/>
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
