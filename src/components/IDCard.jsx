import UniversityLogo from "./UniversityLogo";
import HostelLabel from "./HostelLabel";
import StudentImage from "./StudentImage";
import StudentInfo from "./StudentInfo";

function IDCard() {
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[380px]">
      <HostelLabel />

      <div className="flex-1 p-4">
        <UniversityLogo />
        <StudentImage />
        <StudentInfo />
      </div>
    </div>
  );
}

export default IDCard;