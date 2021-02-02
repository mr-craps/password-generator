import translation from '../../../translation/pt.json';
import Checkbox from '../Checkbox';
import Input from '../Input';

function onSubmit(event) {
  event.preventDefault();
}

export default function PasswordGenerator() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary-700">{translation.app_name}</h1>
      <p className="text-gray-400 mt-4 text-sm">{translation.app_description}</p>
      <form className="mt-4" onSubmit={onSubmit}>
        <Checkbox label={translation.uppercase} />
        <Checkbox label={translation.lowercase} />
        <Checkbox label={translation.numbers} />
        <Checkbox label={translation.symbols} />
        <Checkbox label={translation.similarCharacters} />
        <Checkbox label={translation.repeatedCharacters} />
        <Input className="mt-4" label={translation.passwordLength} />
        <div className="mt-4 text-center text-white text-lg bg-gray-700 py-4 rounded hover:bg-gray-600">zv4ngjHBJDyFhK5dq6R36</div>
        <button className="block mt-4 bg-primary-700 shadow-lg text-white font-medium py-2 px-5 rounded mx-auto hover:bg-primary-600 focus:outline-none">{translation.generate_password}</button>
      </form>
    </section>
  )
}