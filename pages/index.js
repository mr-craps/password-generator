import PasswordGenerator from '../src/components/PasswordGenerator';
import AsidePage from '../src/components/AsidePage';

export default function Home() {
  return (
    <section className="w-screen h-screen divide-x flex">
      <div className="w-144 px-10 pt-10 bg-white">
        <PasswordGenerator />
      </div>
      <div className="flex-grow w-144 px-10 pt-10 bg-primary-700">
        <AsidePage />
      </div>
    </section>
  )
}