const AboutUs = () => {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden my-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="pt-1" />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left ">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About us
                </h2>
                <p>
                  Welcome to BizNest AI! We are passionate about driving
                  innovation and growth in businesses worldwide through the
                  transformative power of Artificial Intelligence (AI). Our
                  mission is simple yet profound: to empower businesses, both
                  new and existing, to thrive in today's dynamic market
                  landscape by harnessing the potential of AI technology. <br />
                  At BizNest AI, we understand that AI can be a game-changer for
                  businesses of all sizes and industries. Whether you're a
                  budding startup or an established corporation, integrating AI
                  into your operations can unlock new efficiency, productivity,
                  and profitability opportunities. We aim to make AI accessible
                  and actionable for businesses everywhere, regardless of their
                  technical expertise.
                  <span className="text-primary hover:opacity-65 cursor-pointer">See more...</span>
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
