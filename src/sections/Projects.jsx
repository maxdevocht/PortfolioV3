import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <Badge
          variant="outline"
          className="text-white text-xl tracking-wider font-caveat"
        >
          My Projects
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          MY BOOKING PLATFORM 🏨
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          🧠 BRAINWAVE BENTO
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          SEO AI 🤖
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          🔣 SSSYMBOLSSS
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          MY SHOPPING LIST 🛒
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          🗓 MY TODO APP
        </h1>
        <h1 className="text-white/70 hover:text-white hover:scale-105 transition-all text-4xl font-light font-outfit tracking-wide cursor-pointer">
          IX UITLEENFORMULIER 📥
        </h1>
      </div>
    </section>
  );
};

export default Projects;
