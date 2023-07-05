import React from 'react';
import "./hero.css";
import HeroImg from"../../img/main.jpg";
import { Typewriter } from 'react-simple-typewriter'
import { SiKakaotalk,SiInstagram,SiFacebook,SiHtml5,SiCsswizardry,SiJavascript } from "react-icons/si";

const Hero = () => {
    return (
        <>
            <section className='hero' id='hero'>
                <div className='container f-flex top'>
                    <div className='left top'>
                        <h3>welcome to my world</h3>
                        <h1>
                            Hi, I'm <span>baeng Kim</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                <Typewriter words={[" Newbie Developer."," Professional Coder."]}
                                            loop cursor cursorStyle="|"
                                            delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                                />
                            </span>
                        </h2>
                        <p>
                            그들은 희망의 목숨이 청춘은 대중을 봄바람이다. 얼마나 낙원을 불어 붙잡아 살았으며, 끝까지 부패뿐이다.
                            그들은 희망의 목숨이 청춘은 대중을 봄바람이다. 얼마나 낙원을 불어 붙잡아 살았으며, 끝까지 부패뿐이다.
                            그들은 희망의 목숨이 청춘은 대중을 봄바람이다. 얼마나 낙원을 불어 붙잡아 살았으며, 끝까지 부패뿐이다.
                        </p>
                        <div className='hero-btn d-flex'>
                            <div className="col">
                                <h4>View My SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow"><SiKakaotalk className='icon'/></button>
                                    <button className="btn-shadow"><SiInstagram className='icon'/></button>
                                    <button className="btn-shadow"><SiFacebook className='icon'/></button>
                                </div>
                            </div>
                            <div className="col">
                            <h4>BEST MY SKILL</h4>
                                <div className="button">
                                    <button className="btn-shadow"><SiHtml5 className='icon'/></button>
                                    <button className="btn-shadow"><SiCsswizardry className='icon'/></button>
                                    <button className="btn-shadow"><SiJavascript className='icon'/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right-img'>
                            <img src={HeroImg} alt='me'/>
                        </div>
                    </div>
                </div>
            
            </section>  
        </>
    );
};

export default Hero;