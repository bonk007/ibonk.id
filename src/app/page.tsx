'use client'

import Image from 'next/image'
import dynamic from "next/dynamic";
import careers from "@/resources/careers.json";
import skills from "@/resources/skills.json";
import {useTheme} from "next-themes";

const ThemeChanger = dynamic(() => import('@/components/ThemeChanger'), { ssr: false })
const Home = () => {
  const {theme} = useTheme()
  return (
    <main className="w-[960px] mx-auto my-4">
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="flex justify-between my-4">
          <div className="text-sm flex gap-2">
            <a href="mailto:bonk007@gmail.com" target="_blank"><span className="material-symbols-outlined">mail</span></a>
            <a href="https://linkedin.com/in/bonk007" target="_blank">
              {theme === 'dark' ? (<Image src="/linkedin-white.svg" alt="LinkedIn" width={24} height={24} />) : <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />}
            </a>
            <a href="https://github.com/bonk007" target="_blank">
              {theme === 'dark' ? (<Image src="/github-white.svg" alt="Github" width={24} height={24} />) : <Image src="/github.svg" alt="Github" width={24} height={24} />}
            </a>
            <a href="https://wa.me/6282217215033" target="_blank">
              {theme === 'dark' ? (<Image src="/whatsapp-white.svg" alt="Whatsapp me" width={20} height={20} />) : <Image src="/whatsapp.svg" alt="Whastapp me" width={20} height={20} />}
            </a>
          </div>
          <ThemeChanger></ThemeChanger>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <span className="block text-xl">Ayi Muhammad Iqbal Nasuha</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
            Senior Software Engineer at <a href="https://farcapital.com.my" className="font-bold text-red-900" target="_blank">FAR Capital</a>
          </span>
            <p className="mt-4 text-gray-500 dark:text-gray-300">I am a backend engineer with over 10 years experience, and proficient in PHP, NodeJS, frameworks,
              and tools, with a strong focus on creating efficient and secure backend architectures.</p>
            <a href="#" className="text-blue-500">Download Resume</a>
          </div>
          <div>
            <Image src="/ibonk.jpg"
                   width={120}
                   height={120}
                   className={`rounded-full`}
                   alt={"something"} />
          </div>
        </div>
        <div id="skills" className="mt-8">
          <div className="border-b text-xl">Skills</div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {skills.map((skill, index) => {
              const { group, skills } = skill;
              return (
                  <div className="" key={`s-${index}`}>
                    <span className="block mb-2 font-[400]">{group}</span>
                    <div className="flex flex-col gap-3">
                      {skills.map((skill, index) => (<span className="text-xs" key={`sa-${index}`}>{skill}</span>))}
                    </div>

                  </div>
              )
            })}
          </div>
        </div>
        <div id="careers" className="mt-8">
          <div className="border-b text-xl mb-4">Careers</div>
          {careers.map((career, index) => {
            const {
              company,
              company_logo,
              website,
              start,
              end,
                details
            } = career;
            return (
                <div className="flex items-start mb-4" key={`c-${index}`}>
                  <Image alt={company}
                         src={company_logo}
                         height={64}
                         width={96}
                         style={{objectFit: 'contain'}}
                         className="block bg-white" />
                  <div className="flex-1 ml-4">
                    <div>
                      <a href={website}
                         target={`_blank`}
                         className="block font-bold text-red-900">{company}</a>
                      <span className="text-xs text-gray-500 dark:text-gray-300">{end === null ? `${start} - now` : `${start} - ${end}`}</span>
                    </div>
                    <div>{
                      details.map((detail, index) => {
                        return (
                            <div className="text-sm text-gray-500 dark:text-gray-300 mt-4" key={`d-${index}`}>
                              <span className="font-[600]">{detail.position}</span>
                              {detail.summary ? (<p>{detail.summary}</p>) : null}
                              <ul className="list-disc list-inside">
                                {detail.jobs.map((highlight, index) => {
                                  return (
                                      <li key={`h-${index}`}>{highlight}</li>
                                  )
                                })}
                              </ul>
                            </div>
                        )
                      })
                    }</div>
                  </div>
                </div>
            )
          })}
        </div>
        <div id="education" className="mt-8">
          <div className="border-b text-xl">Education</div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2">
              <span className="block font-[400]">Universitas Pendidikan Indonesia</span>
              <span className="text-xs text-red-900">not graduated</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs">2007 - 2014</span>
              <span className="text-xs">Bandung, Indonesia</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2">
              <span className="block font-[400]">SMA Negeri 1 Sumber</span>
              <span className="text-xs">High School</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs">2004 - 2007</span>
              <span className="text-xs">Cirebon, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-3/4 mx-auto mt-16">
        <span className="text-sm text-gray-500">Copyright {(new Date()).getFullYear()} | Ayi Muhammad Iqbal Nasuha</span>
      </div>
    </main>
  )
}

export default Home
