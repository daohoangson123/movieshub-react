import React, {useState} from 'react';
import styled from 'styled-components';

export const Button = styled.div`
position: fixed;
right: 5px;
bottom: 20px;
width: 35px;
height: 35px;
place-items: center;
border: solid 1px white;
border-radius: 50%;
cursor: pointer;
z-index: 1;
`

const BackTopBtn = () => {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
        setVisible(true)
    } 
    else if (scrolled <= 300) {
        setVisible(false)
    }
};

window.addEventListener("scroll", toggleVisible);

const scrollToTop = () => {
    window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    });
};


    return (
            <Button className='BackTopBtn hover:text-black hover:bg-white bg-opacity-50 transition-all ease-in-out duration-300 '
                onClick={scrollToTop} 
                style={{display: visible ? 'grid' : 'none'}}>
                <i className="fa-solid fa-turn-up"></i>
            </Button>
    );
}

export default BackTopBtn;