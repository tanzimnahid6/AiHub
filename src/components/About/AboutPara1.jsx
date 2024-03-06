const AboutUsPara1 = () => {
    return (
      <div className="flex flex-col sm:flex-row md:flex-row  md:my-28 lg:gap-20 md:gap-10">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          alt=""
          className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-[#236A68] transition delay-150 duration-300 ease-in-out hover:scale-90 "
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-[#236A68]">
          Guiding Businesses Through AI Success
          </h2>
  
          <ul className="list-image text-sm">
            <li className="flex gap-4 py-3">
              <li className="flex gap-4 py-3">
                Welcome to BizNest AI! We are passionate about driving innovation
                and growth in businesses worldwide through the transformative
                power of Artificial Intelligence (AI). Our mission is simple yet
                profound: to empower businesses, both new and existing, to thrive
                in today's dynamic market landscape by harnessing the potential of
                AI technology.
              </li>
            </li>
  
            <li className="flex gap-4">
              At BizNest AI, we understand that AI can be a game-changer for
              businesses of all sizes and industries. Whether you're a budding
              startup or an established corporation, integrating AI into your
              operations can unlock new efficiency, productivity, and
              profitability opportunities. We aim to make AI accessible and
              actionable for businesses everywhere, regardless of their technical
              expertise or resources.
            </li>
            <li className="flex gap-4 py-3">
              Our deep expertise in business and AI technologies sets us apart.
              Our team comprises seasoned professionals who bring together years
              of experience in business strategy, data science, machine learning,
              and more. We leverage this collective knowledge to provide
              comprehensive solutions tailored to meet the unique needs and
              objectives of each client.
            </li>
  
          
          </ul>
        </div>
      </div>
    );
  };
  
  export default AboutUsPara1;