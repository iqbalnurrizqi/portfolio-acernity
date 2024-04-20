import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Navbar({className}: {className?: string}) {
    const socials = [
      {
        Label: "GitHub",
        Link: "https://github.com/iqbalnurrizqi",
        icons: SiGithub,
      },
      {
        Label: "Instagram",
        Link: "https://github.com/iqbalnurrizqi",
        icons: SiInstagram,
      },
      {
        Label: "LinkedIn",
        Link: "https://www.linkedin.com/in/iqbal-nurrizqi/",
        icons: SiLinkedin,
      },
    ];
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Iqbal Nurrizqi 👨🏽‍💻</h1>
      <div className='flex items-center gap-5 '>
        {socials.map((social, index) => {
            const Icon = social.icons;
            return (
              <Link key={index} href={social.Link} aria-label={social.Label}>
                <Icon className="w-8 h-8 hover:scale-110 transition-all" />
              </Link>
            );
        })}
      </div>
    </nav>
  );
}
