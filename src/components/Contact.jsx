import {useState} from "react";

function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "vaan4d1um@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        });
    };

    return(
        <section className="py-20 contact h-screen">
            {/*<img src={sparkles} alt="sparkles" className="sparkles sparkles-top"/>*/}
            <div className="icon-row">
                <a href="https://www.tiktok.com/@van4d1um" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok fa-4x"></i>
                </a>
                <a href="https://github.com/michelleree" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-4x"></i>
                </a>
                <div className="email-box">
                    <a href={`mailto:${email}`}>
                        <i className="fa-solid fa-envelope fa-4x"></i>
                    </a>
                    <span className="email-text">{email}</span>
                    <button onClick={copyToClipboard} className="copy-btn cursor-pointer" title="Copy email">
                        <i className={copied ? "fa-solid fa-check fa-4x" : "fa-regular fa-copy fa-4x"}></i>
                    </button>
                </div>
            </div>

            {/*<img src={sparkles} alt="sparkles" className="sparkles sparkles-bottom"/>*/}
        </section>
    )
}

export default Contact;