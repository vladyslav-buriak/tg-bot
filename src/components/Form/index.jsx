import { useCallback, useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {

    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [age, setAge] = useState("");
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {

        const data = {
            name,
            tel,
            age
        }
        tg.onSendData(JSON.stringify(data))
    },[ name,
        tel,
        age,tg])

    useEffect(() => {
        tg.WebApp.onEvent('mainButtonClicked', onSendData)

        return () => {
            tg.WebApp.offEvent('mainButtonClicked', onSendData)
        }
    })
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'відправити данні'
        })
    })

    useEffect(() => {
        if (!tel || !age) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [age, tel, tg.MainButton])


    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePhone = (e) => {
        setTel(e.target.value)
    }
    const onChangeAge = (e) => {

        setAge(e.target.value)


    }
    return (
        <div className="form">
            <h3>Введіть ваші данні</h3>
            <input onChange={onChangeName} value={name} className="input" type="text" placeholder="Ім'я" />
            <input onChange={onChangePhone} className="input" type="tel" value={tel} placeholder="Телефон номер" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            <input onChange={onChangeAge} value={age} className="input" type="number" placeholder="ваш вік" />
        </div>
    )
}

export default Form