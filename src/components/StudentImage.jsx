import photo from "../assets/myphoto.jpg";

function StudentImage() {
  return (
    <div className="flex justify-center my-4">
      <img
        src={photo}
        alt="Student"
        className="w-32 h-40 border-4 border-red-500 object-cover"
      />
    </div>
  );
}

export default StudentImage;