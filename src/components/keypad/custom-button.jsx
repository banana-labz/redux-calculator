export const CustomButton = ({ children, className, onClick }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
)