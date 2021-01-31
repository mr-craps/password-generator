import translation from '../translation/pt.json';
import Checkbox from '../src/components/Checkbox';

export default function Home() {
  return (
    <section className="w-screen h-screen">
      <div className="px-4 pt-10 max-w-2xl">
        <h1 className="text-3xl font-bold text-800">{translation.app_name}</h1>
        <p className="text-gray-400 mt-4 text-sm max-w-md">{translation.app_description}</p>
        <form className="mt-8">
          <Checkbox name={"uppercase"} label={translation.uppercase} />
          <Checkbox name={"lowercase"} label={translation.lowercase} />
          <Checkbox name={"numbers"} label={translation.numbers} />
          <Checkbox name={"symbols"} label={translation.symbols} />
          <Checkbox name={"similar-characters"} label={translation.similarCharacters} />
          <Checkbox name={"repeated-characters"} label={translation.repeatedCharacters} />
          <div>
            <label htmlFor="password-length">{translation.passwordLength}</label>
            <input type="number" id="password-length" value="8" />
          </div>
          <button className="block mt-8 bg-gray-800 text-white font-medium py-2 px-5 rounded mx-auto hover:bg-gray-700 focus:outline-none">{translation.btn_generate_password}</button>
        </form>
      </div>
    </section>
  )
}