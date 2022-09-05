import '../styles/Link.css';

function Link(props) {

    const linkText = props.linkText
    const linkUrl = props.linkUrl

    return (
        <div className="linkBlock">
            <a className="link" href={ linkUrl } >{ linkText }</a>
        </div>
    );
}

export default Link;