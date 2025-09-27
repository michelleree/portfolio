import {useState} from "react";
import "../styles/ContactInfo.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope as fasEnvelope, faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faTiktok as fabTiktok } from '@fortawesome/free-brands-svg-icons';

library.add(fasEnvelope, fasCheck, farCopy, fabGithub, fabTiktok);

function ContactInfo() {
    const [copied, setCopied] = useState(false);
    const email = "vaan4d1um@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        });
    };

    return(
        <section className="contact">
            <div className="icon-row">
                <a href="https://www.tiktok.com/@van4d1um" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'tiktok']} size="4x" />
                </a>
                <a href="https://github.com/michelleree" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
                </a>
                <div className="email-box">
                    <a href={`mailto:${email}`}>
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="4x" />
                    </a>
                    <span className="email-text">{email}</span>
                    <button onClick={copyToClipboard} className="copy-btn cursor-pointer" title="Copy email">
                        <FontAwesomeIcon icon={copied ? ['fas', 'check'] : ['far', 'copy']} size="4x" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;