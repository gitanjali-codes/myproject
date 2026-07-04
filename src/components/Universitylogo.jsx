import logo from "../assets/logo.png";

function UniversityLogo() {
  return (
    <div className="text-center mb-4">
      <img
        src={logo}
        alt="University Logo"
        className="w-20 h-20 mx-auto"
        />
      <h2 className="text-2xl font-bold text-blue-900 mt-2">
        Ganpat University
      </h2>
    </div>
  );
}

export default UniversityLogo;