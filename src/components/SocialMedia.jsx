import React from "react";
import { BsInstagram, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a
                href="https://www.linkedin.com/in/yahya-hafez/"
                target="_target"
                rel="noreferer"
                title="Yahya's LinkedIn"
            >
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a
                href="https://github.com/yhafez"
                target="_target"
                rel="noreferer "
                title="Yahya's GitHub"
            >
                <div>
                    <BsGithub />
                </div>
            </a>
            <a
                href="https://www.instagram.com/double_aries_fire/"
                target="_target"
                rel="noreferer "
                title="Yahya's Instagram"
            >
                <div>
                    <BsInstagram />
                </div>
            </a>
            <a
                href="https://soundcloud.com/djariesfire"
                target="_target"
                rel="noreferer "
                title="DJ Aries Fire's SoundCloud"
            >
                <div>
                    <FaSoundcloud />
                </div>
            </a>
            <a
                href="https://www.facebook.com/yahya.u.hafez/"
                target="_target"
                rel="noreferer "
                title="Yahya's Instagram"
            >
                <div>
                    <BsFacebook />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
