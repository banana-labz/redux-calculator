export const CustomButton = className => ({ onClick, children }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
)