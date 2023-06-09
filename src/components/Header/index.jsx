import { useTelegram } from "../../hooks/useTelegram"
import Button from "../Button";
import "./Header.css"

const Header = () => {
  const {user,onClose} = useTelegram();

    return (
        <div className={"header"}>
            <Button className={"button"} onClick={onClose}>Закрити</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    )
}

export default Header