import useSound from "use-sound"

import { CustomButton } from "./custom-button"

export const FunkyButton = ({ char, add }) => {
    const [ play ] = useSound(`../../sounds/${char}.mp3`, { volume: 1})
    
    const onClick = () => {
        add(char)
        play()
    }

    return (
        <CustomButton 
            key={`button{${char}}`}
            onClick={onClick}
            className="button-normal"
        >
            {char}
        </CustomButton>
    )
}