
import Image from 'next/image'
import dynamic from "next/dynamic";
import careers from "@/resources/careers.json";

const ThemeChanger = dynamic(() => import('@/components/ThemeChanger'), { ssr: false })
const Home = () => {

  return (
    <main className="w-[960px] mx-auto my-4">
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="flex justify-between">
          <div></div>
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
        <div id="skills">
          <div className="border-b text-xl">Skills</div>
        </div>
        <div id="careers">
          <div className="border-b text-xl">Careers</div>
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
                <div className="flex items-top mb-4" key={`c-${index}`}>
                  {/*<div className={`bg-[url(${company_logo})]`}></div>*/}
                  <img alt={company} src={company_logo} width={64} className="block bg-white" />
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
                            <div className="text-sm text-gray-500 dark:text-gray-300" key={`d-${index}`}>{detail.position}</div>
                        )
                      })
                    }</div>
                  </div>
                </div>
            )
          })}
        </div>
        <div id="education">
          <div className="border-b text-xl">Education</div>
        </div>
      </div>
    </main>
  )
}

export default Home
