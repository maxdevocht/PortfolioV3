import { avatarSmile } from "@/assets";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="sticky top-0 z-20">
      <div className="flex items-center justify-between p-5">
        <img
          src={avatarSmile}
          alt="avatar"
          width={90}
          height={90}
          className="bg-transparent"
        />
        <Button className="rounded-full font-outfit tracking-wide text-md hover:bg-white/70 hover:text-black">
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Header;
