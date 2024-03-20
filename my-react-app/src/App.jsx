import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./card.jsx";
import Button from "./Button/button.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {
return(
  // <> 
  //  <Header></Header>
  //  <Food></Food>
  //  <Food></Food>
  // <Footer/>
  // <Card></Card>
  // <Card></Card>
  // <Card></Card>
  // <Button/>
  // </>
  <>
{/* <Student name="sponge" age={13} isStudent={true}/>
<Student name="patrick" age="12" isStudent={false}/>
<Student name="hello"/> */}
<UserGreeting isLoggedIn={true} />
</>

);
}

export default App
