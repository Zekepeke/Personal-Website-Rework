import React from 'react';
import { Link } from "@heroui/react";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeSimpleIcon,
  FileIcon,
} from "@phosphor-icons/react";
import { socials } from "../constants";

const iconMap = {
  Gmail: EnvelopeSimpleIcon,
  Linkedin: LinkedinLogoIcon,
  Github: GithubLogoIcon,
  "CV Download": FileIcon,
};


const Footer = () => {
  return (
    <div className="w-full bg-green-700 px-4 pb-4 pt-32 dark:bg-green-700 sm:pt-24">
      <div className="mx-auto grid w-11/12 grid-cols-12 sm:w-11/12">

        <div className="col-span-12 font-mono sm:col-span-7 sm:-mt-16 lg:col-span-4">
          Thanks for checking out my website! I hope it was great to know me a little better. I love to meet new people and get to know them so feel free to reach out!
        </div>

        {/* Social links */}
        <div className="col-span-12 mt-12 flex justify-end gap-6 pr-12 sm:col-span-6 sm:col-start-7 lg:col-span-3 lg:col-start-10 lg:-mt-16 lg:grid lg:grid-cols-2 lg:justify-items-end lg:pr-0">
          {socials.map((social) => {
            const Icon = iconMap[social.social_name];
            return (
              <Link
                key={social.social_name}
                className="flex items-center justify-end text-foreground"
                href={social.link}
                target="_blank"
                download={social.download || false}
              >
                {Icon ? <Icon size={48} /> : <img src={social.img} alt={social.social_name} className="w-12 h-12" />}
              </Link>
            );
          })}
        </div>

        <div className="col-span-12 mt-20 text-center font-mono text-sm lg:mt-8">
          <h3>
            An{" "}
            <Link
              size="sm"
              href="https://github.com/Zekepeke/Personal-Website-Rework"
              target="_blank"
            >
              open-source
            </Link>{" "}
             creation, licensed MIT
          </h3>
          <h3>&copy; Esequiel Linares, {new Date().getFullYear()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;