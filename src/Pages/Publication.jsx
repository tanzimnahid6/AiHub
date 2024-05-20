import Book from "../components/Book";
import Heading from "../components/Heading";
import ResearchTable from "../components/Publication/ResearchTable";

const Publication = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-2 border-2 mb-4 ">
      <div className="md:w-9/12 my-4">
        <Heading>Research Article</Heading>
        <ResearchTable></ResearchTable>
      </div>
      <div className="border md:w-3/12">
        <Heading>Book/Patent</Heading>
        <div className="p-5">
        <Book></Book>
        </div>
      </div>
    </div>
  );
};

export default Publication;
