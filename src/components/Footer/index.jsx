import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center p-4 bg-green-800 text-sm border-t">
            <span className="text-white">Developed under the KP Government Innovation Fellowship Program, supported by the <Link to={"https://www.kpitb.gov.pk/"} target="_blank" className="font-medium underline">KP Information Technology Board</Link> and <Link to={"https://www.codeforpakistan.org/"} target="_blank" className="font-medium underline">Code for Pakistan</Link>.</span>
        </footer>
    );
}

export default Footer;