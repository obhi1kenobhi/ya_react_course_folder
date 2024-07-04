export default function Tabs({ children, buttons, wrapperType }) {
    const WrapperType = wrapperType;
    return(
        <>
            <WrapperType>
                {buttons}
            </WrapperType>
            {children}
        </>
    )
}