import { getProjects } from "../data/project";
import SingleCard from "./SingleCard";

const projects = getProjects();
const ModelCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10  my-8 ">
      {projects.length > 0 ? (
        projects.map((p) => <SingleCard key={p.id} project={p}></SingleCard>)
      ) : (
        <p>No Model found</p>
      )}
    </div>
  );
};

export default ModelCard;
