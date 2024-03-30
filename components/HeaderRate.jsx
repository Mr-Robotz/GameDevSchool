function HeaderRate({ title, text, icon }) {
  return (
    <div className="my-10 relative">
      <div className="bg-white w-[182px] text-center py-2 rounded-3xl relative z-10 -left-3 -top-1">
        <h2 className="text-3xl font-black flex justify-center items-center text-darkBlue">
          {title}{" "}
          <span className="inline-block text-yellow-400 text-4xl">{icon}</span>{" "}
        </h2>
        <p className="text-sm">{text}</p>
      </div>
      <div className="bg-gradient-to-l from-darkBlueColor to-blueColor  absolute inset-0 w-[182px] rounded-3xl -right-5"></div>
    </div>
  );
}
export default HeaderRate;
