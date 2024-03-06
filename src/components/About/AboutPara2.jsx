

const AboutUSPara2 = () => {
    return (
        <div>
          <div className="flex flex-col sm:flex-row md:flex-row-reverse  md:my-28 lg:gap-20 md:gap-10">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        alt=""
        className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-[#236A68] transition delay-150 duration-300 ease-in-out hover:scale-90 hidden md:block "
      />
      <div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-[#236A68] hidden md:block">
        Partnering for AI Excellence
        </h2>

        <ul className="list-image text-sm">
          <li className="flex gap-4 py-3">
            <li className="flex gap-4 py-3">
            From strategic consulting to hands-on implementation and ongoing support, we guide businesses through every stage of their AI journey. Whether you're looking to optimize processes, enhance customer experiences, or gain actionable insights from data, we have the tools, expertise, and dedication to help you succeed.
            </li>
          </li>

          <li className="flex gap-4">
          At BizNest AI, we're not just a service provider – we're your trusted partner committed to your success. We work closely with our clients to understand their goals, challenges, and opportunities, and we tailor our solutions to drive meaningful and sustainable results.
          </li>
          <li className="flex gap-4 py-3">
          Join us on this exciting journey as we unlock the full potential of AI for businesses worldwide. Explore our website to learn more about our services, expertise, and success stories, and discover how BizNest AI can help your business thrive in the age of AI.
          </li>

        
        </ul>
      </div>
    </div>  
        </div>
    );
};

export default AboutUSPara2;