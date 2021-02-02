import SocialMedia from '../SocialMedia';

export default function AsidePage() {
  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex-grow">
        <div className="w-full h-56 bg-gray-700 rounded-xl">
          <img className="rounded-full w-48 h-48 bg-white" src="/images/app-image.svg" />
        </div>
        <div className="w-full mt-5 text-gray-200">
          <h2 className="mb-2">Versão extendida da sua senha:</h2>
          <p className="font-light">golf SIERRA whiskey YANKEE BRAVO november QUEBEC BRAVO WHISKEY juliet charlie SIERRA juliet golf 4 SIERRA UNIFORM bravo VICTOR GOLF NOVEMBER UNIFORM zulu 9 bravo xray MIKE 5 BRAVO 7 KILO WHISKEY QUEBEC yankee mike DELTA 8 FOXTROT hotel charlie uniform NOVEMBER 2 yankee golf KILO papa zulu ROMEO GOLF</p>
        </div>
      </div>
      <SocialMedia />
    </section>
  );
}