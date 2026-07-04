function HostelLabel() {
  return (
    <div className="w-16 bg-blue-900 flex justify-center items-center">
      <span
        className="text-white font-bold text-sm"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        HOSTEL-STUDENT 
      </span>
    </div>
  );
}

export default HostelLabel;