import React, {useState} from 'react';
import styled from 'styled-components';

export const Button = styled.div`
position: fixed; 
right: 20px;
bottom: 20px;
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
            <Button className='BackTopBtn place-items-center p-[10px] w-[40px] h-[40px]
                    hover:bg-white hover:text-black rounded-full border-[1px]
                    transition-all ease-in-out '
                onClick={scrollToTop} 
                style={{display: visible ? 'grid' : 'none'}}>
                <i className="fa-solid fa-turn-up"></i>
            </Button>
    );
}

export default BackTopBtn;