import { Badge } from "lucide-react";

const Projects = () => {
  return (
    <section className="relative z-10 h-full bg-black flex flex-col gap-20">
      <div className="flex items-center justify-center mt-20">
        <Badge
          variant="outline"
          className="text-white text-xl tracking-wider font-caveat"
        >
          My projects
        </Badge>
      </div>
    </section>
  );
};

export default Projects;
