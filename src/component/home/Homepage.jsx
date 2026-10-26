import { useContext } from 'react'
import { LangContext } from './LangContext'
import { ThemeContext } from './ThemeContext'
import Hero_img from "../../assets/images/png/hero_img.png"

const Homepage = () => {
  const { toggleLanguage, t } = useContext(LangContext)

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <section className={theme === 'dark' ? 'bg-[#18181b] min-h-screen text-white' : 'bg-off-orange min-h-screen'}>
      <header className="pt-3.75">
        <nav className="max-w-294.5 flex mx-auto items-center w-full justify-between">
          <a href="#">
            <h2 className="font-semibold text-custom-4xl text-orange">
              Digi<span className={theme === 'dark' ? 'text-white' : 'text-black'}>ency</span>
            </h2>
          </a>
          <div className="left flex gap-10 items-center">
            <ul className="flex gap-7.25">
              {t.navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    className={`block font-medium text-xl leading-150 ${
                      theme === 'dark' ? 'text-white' : 'text-off-black'
                    }`}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle Button (useContext) */}
            <button
              onClick={toggleTheme}
              className={`font-medium text-xl cursor-pointer leading-150 py-2.5 px-5.5 rounded-[5px] border ${
                theme === 'dark'
                  ? 'text-white border-white hover:text-orange hover:border-orange'
                  : 'text-off-black border-off-black hover:text-orange hover:border-orange'
              }`}
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>

            <button
              className={`font-medium text-xl cursor-pointer leading-150 py-2.5 px-5.5 rounded-[5px] border ${
                theme === 'dark' ? 'text-white border-white' : 'text-off-black border-off-black'
              }`}
            >
              {t.letsTalk}
            </button>
          </div>
        </nav>
      </header>

      <div className="hero-container max-w-294.75 mx-auto py-37.5">
        <div className="hero-row flex justify-between">
          <div className="left max-w-150.5 pt-14.5">
            <h1
              className={`font-bold text-5xl ${
                theme === 'dark' ? 'text-white' : 'text-off-black'
              }`}
            >
              {t.heroHeading}
            </h1>
            <p
              className={`text-base mt-4.5 mb-3.75 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray'
              }`}
            >
              {t.heroDescription}
            </p>
            <div className="flex gap-4 items-center">
              <button className="text-white py-2.5 px-5.5 cursor-pointer bg-orange font-medium text-xl leading-150 rounded-[5px]">
                {t.heroCta}
              </button>

              <button
                onClick={toggleLanguage}
                className={`font-medium text-xl cursor-pointer leading-150 py-2.5 px-5.5 rounded-[5px] border ${
                  theme === 'dark'
                    ? 'text-white border-white hover:text-orange hover:border-orange'
                    : 'text-off-black border-off-black hover:text-orange hover:border-orange'
                }`}
              >
                {t.langBtn}
              </button>
            </div>
          </div>
          <div className="right">
            <img width={553} height={470} src={Hero_img} alt="Hero_img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
