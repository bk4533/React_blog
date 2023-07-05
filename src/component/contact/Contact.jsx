import React,{useRef} from 'react';
//import {useDispatch} from 'react-redux';
import './contact.css';
import emailJs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    //const dispatch = useDispatch();
    const myid = {
        SERVICE_ID : "bk4533Gmail",
        TEMPLATE_ID : "bk4533",
        USER_ID : "tqWkqabdlkMk8taYm"
    }
    // const closeEmail = () => {
    //     dispatch({type: "CLOSE_EMAIL"});
    // }
    const sendEmail = (e)=> {
        e.preventDefault();
        emailJs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
        .then((rs)=>{
            console.log(rs.text);
            alert("전송완료")
            //closeEmail();
        },
        (error)=>{
            console.log(error.text);
            alert("전송실패");
        });
    };
    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>
                    <div className="content d-flex">
                        <div className="left">
                            <div className="box btn-shadow">
                                <div className="img">
                                    <img src="img/together.jpg" alt="함께" />
                                </div>
                                <div className="details">
                                    <h1>저에게 연락 주세요!</h1>
                                    <p>저는 말이지요~</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box btn-shadow">
                                <form ref={form} onSubmit={sendEmail} className='emailform'>
                                    <div className='f-flex'>
                                        <div className='col-50'>
                                            <label>보내시는 분 성함</label>
                                            <input type="text" name="user_name" placeholder="이름"/>
                                        </div>
                                        <div className='col-50'>
                                            <label>보내시는 분 이메일</label>
                                            <input type="text" name="user_email" placeholder="이메일"/>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea name='message' placeholder='하실 말씀'></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit'> 이메일 전송 </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;