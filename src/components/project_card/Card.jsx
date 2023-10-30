import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './Card.css';

function Card(props) {

  const cards = document.querySelectorAll(".card");
for(let i=0; i<cards.length; i++){
	cards[i].addEventListener('mousemove', rotate);
	cards[i].addEventListener('mouseleave', clearRotate);
}

function rotate(e){
	const cardItem = this.querySelector(".card-item");
	const force = 10;
	const offsetY = -(e.offsetY - cardItem.offsetHeight/2)/force;
	const offsetX = (e.offsetX - cardItem.offsetWidth/2)/force-12;
	cardItem.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)';
}

function clearRotate(e){
	if(e.target.classList.contains("card")){
		const cardItem = this.querySelector(".card-item");
		cardItem.style.transform = 'rotateX(0) rotateY(0)';
	}
}



  return (
    <div className='projectCard'>
      <div className="card">
        <div className="card-item">
          <div className='cardImg'>
            <img src={props.image} alt="1" />
          </div>
          <div className='cardContent'>
            <div className='projHead'>{props.name}</div>
            <div className='githubLink'><a href={props.github}>GitHub <AiFillGithub style={{ color: 'black' }} /></a></div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Card;
