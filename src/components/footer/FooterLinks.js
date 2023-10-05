import ShowFooterLinks from "./ShowFooterLinks";

const FooterLinks = () => {

    const state = {
        pages: [
            { id: 1, name: 'Home', route: '/' },
            { id: 2, name: 'Profile', route: '/profile'},
            { id: 3, name: 'Films', route: '/films'},
        ],
    };
    const {pages} = state;
    return (
        <div className="row">
            <div className="col-4 p-15">
                <ShowFooterLinks links={pages}/>
            </div>
        </div>
    )
}

export default FooterLinks;
