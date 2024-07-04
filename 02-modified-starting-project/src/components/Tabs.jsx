export default function Tabs({ children, buttons, WrapperType="menu" }) {
    //const WrapperType = wrapperType;
    return(
        <>
            <WrapperType>
                {buttons}
            </WrapperType>
            {children}
        </>
    )
}