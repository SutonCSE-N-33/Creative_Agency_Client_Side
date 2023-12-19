import React, { useContext } from 'react';
import CarouselPart from './CarouselPart/CarouselPart';
import ClientLogo from './ClientLogo/ClientLogo';
import Contact from './Contact/Contact';
import FeedbackArea from './FeedbackArea/FeedbackArea';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = ({loggedUser}) => {
   
    return (
        <div>
            <Header></Header>
            <ClientLogo></ClientLogo>
            <Services></Services>
            <CarouselPart></CarouselPart>
            <FeedbackArea></FeedbackArea>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;