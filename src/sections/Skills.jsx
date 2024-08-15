import { Badge } from "@/components/ui/badge";
import { collabApps } from "@/constants";
import { avatar } from "../assets";

const Skills = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex items-center justify-center">
        <Badge
          variant="outline"
          className="text-white text-xl tracking-wider font-caveat"
        >
          My Skills
        </Badge>
      </div>

      <div className="relative left-1/2 flex w-[22rem] aspect-square border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mb-20 ">
        <div className="flex w-60 aspect-square m-auto border-n-6 rounded-full ">
          <div className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full ">
            <div className="relative flex items-center justify-center w-full h-full border shadow-lg rounded-full">
              <img src={avatar} width={70} height={70} alt="avatar" />
            </div>
          </div>
        </div>

        <ul>
          {collabApps.map((app, index) => (
            <li
              key={app.id}
              className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                index * 45
              }`}
            >
              <div
                className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border shadow-lg hover:scale-125 transition-all border-n-1/15 rounded-xl -rotate-${
                  index * 45
                }`}
              >
                <img
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  src={app.icon}
                  alt={app.title}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
