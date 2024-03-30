import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
function Header() {
  return (
    <header className="bg-gradient-to-t from-darkBlueColor to-blueColor h-[896px] overflow-hidden mb-60">
      <Navbar />
      <HeaderContent />
    </header>
  );
}
export default Header;
