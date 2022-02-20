import { CustomButton } from "./custom-button"
export const DefaultButton = ({ char, add }) => (
    <CustomButton 
        key={`button{${char}}`}
        className={"button-normal"}
        onClick={() => add(char)}
    >
        {char}
    </CustomButton>
)