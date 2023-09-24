
interface Prop {
    title: string;
}

export const Navbar: React.FC<Prop> = ({ title }) => {
    return (
        <>

            {/* <!-- As a heading --> */}
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">{title}</span>
                </div>
            </nav>
        </>
    )
}
