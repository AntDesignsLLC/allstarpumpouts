import { CardService } from "./cardService";

export function Services() {
  return (
    <section className="bg-gray-900 text-white mt-10 rounded-xl">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 text-gray-300 max-w-4xl">
            We Can Always Guarantee The Best Performance & Precise Investigation
            When Present At a Job-site With Full Honesty & Pride In Our Work,
            Technician & Client Will Always Be On The Same Page With Expertise
            Explanation (English or Spanish). Prices Will Always Be Reasonable
            At Any Situation With Me & My Team, Because We Are Not Afraid of
            Honest Hard Work.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <CardService service={"Septic System Services"} image={"septicTank2.jpg"} />
          <CardService service={"Grease Trap Services"} image={"greaseTrap2.jpg"}/>
          <CardService service={"Storm Drain System Services"} image={"stormDrainCleaning.jpg"} />
          <CardService service={"Drainfield Installs"} image={"drainfield.jpg"} />
          <CardService service={"Lift Station Services"} image={"liftStationSystem.jpg"}/>
          <CardService service={"Unclogs/Hydro Jet Cleaning"} image={"hydroJet.jpg"}/>
        </div>
      </div>
    </section>
  );
}
