import profilePic from './assets/Screenshot 2024-03-14 120351.png'

function Card(){
    return(
        <div>
             <div className="card">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <h2>CHAYSS</h2>
        <p>HELLO WORLD. TESTING THIS</p>
    </div>

    <div className="card2">
        <img className='card-image' src={profilePic} alt="profile" />
        <h2 className='title'>CHAYSS</h2>
        <p className='text'>HELLO WORLD. TESTING THIS</p>
    </div>
    </div>
       



    );
}
export default Card