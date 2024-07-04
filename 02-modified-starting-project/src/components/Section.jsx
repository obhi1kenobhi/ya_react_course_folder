export default function Section({ title, children, ...props }) {
    // the above parameter ...props will group together (not spread) all props which have not been manually destructured. Useful for importing id and classNames 
    // also makes for a flexible wrapper component
    return(
        <section {...props}>
            {/* the above line spreads the grouped props as attributes for the element */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}