import AboutBody from "@/components/AboutBody";
import AboutTeam from "@/components/AboutTeam";

function About() {
  return (
    <div className="flex">
      <div className="flex-1 bg-myGray10">
        <div className="p-4 bg-white">
          <h1 className="text-3xl font-bold">About us</h1>
          <p className="text-myGray40">A brief introduction of who we are and what we do</p>
        </div>
        <AboutBody />
      </div>
      <AboutTeam />
    </div>
  );
}

export default About;
