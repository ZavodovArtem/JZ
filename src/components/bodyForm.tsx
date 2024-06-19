import React, { useState } from "react";

import '../components/scss/bodyForm.scss'


import RectangleForm  from '../components/img/body/RectangleForm.svg'

function BodyForm () {

    const [valueName, setValueName] = useState('');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueName(event.target.value)
    }

    const [valueTel, setValueTel] = useState('');
    const handleChangeTel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTel(event.target.value)
    }

    const [valueMail, setValueMail] = useState('');
    const handleChangeMail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValueMail(event.target.value)
    }

    const [valueGift, setValueGift] = useState('');
    const handleChangeGift = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueGift(event.target.value)
    }

    return (
        <div className="bodyForm">
            <div className="bodyFormAll">
                <img className="bodyFormRectangle" src={RectangleForm} alt="" />
                 <div className="bodyFormGroup">
                    <div className="bodyFormSend">
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder='Как Вас зовут?' value= {valueName} onChange={handleChangeName}/>
                        <input className="inputForForm bodyFormSendInput" type="tel" placeholder='Номер телефона' value= {valueTel} onChange={handleChangeTel}/>
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder='E-mail or massenger' value= {valueMail} onChange={handleChangeMail}/>
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder='Какое изделие хоттите получить?' value= {valueGift} onChange={handleChangeGift}/>
                        <p className="bodyFormSendPolicy fontRegular" >Нажимая на кнопку, Вы принимаете условия политики обработки персональных данных</p>
                        <button className="bodyFormSendButton" type="submit"><p>Отправить</p></button>
                    </div>
                    <p className="bodyFormSendP fontRegular">Заполните форму для обратной связи, <br/> и мы создадим одежду вашей мечты!</p>
                </div>
            </div>  
            <p className="bodyFormEnd fontRegular">Создайте свой идеальный образ</p>



        </div>
    )
}

export default BodyForm