import React from "react";
import { BsInstagram, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsGithub />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                <FaSoundcloud />
            </div>
            <div>
                <BsFacebook />
            </div>
        </div>
    );
};

export default SocialMedia;
