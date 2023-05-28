import { useTelegram } from "../../hooks/useTelegram"
import Button from "../Button";

const Header = () => {
  const {user,onClose} = useTelegram();

    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрити</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    )
}

export default Header