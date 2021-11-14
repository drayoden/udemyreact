
// this crates and exports the function all-in-one!

// accepts props; see arg to function...
// export default function Title(props) {
// destructing props works too:
export default function Title( {title, subtitle} ) {return (
        <div>
            {/* regular way... */}
            {/* <h1 className="title">{props.title}</h1> */}
            {/* destructured way... */}
            <h1 className="title">{title}</h1>
            <br />
            {/* <h2 className="subtitle">{props.subtitle}</h2> */}
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}