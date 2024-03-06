

const Accordion = () => {
  return (
    <div className="my-12">
        <h1 className="text-center font-bold text-3xl md:text-5xl my-4">FAQs</h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
         1.What is BizNest AI?
          </div>
          <div className="collapse-content">
            <p>BizNest AI is a leading provider of Artificial Intelligence solutions and services aimed at helping businesses worldwide leverage AI technologies to drive growth, innovation, and success.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
           2. Who can benefit from BizNest AI services?
          </div>
          <div className="collapse-content">
            <p>Our services are designed to cater to both new and existing businesses seeking to integrate AI into their operations, as well as individuals interested in learning how to apply AI in a business context.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
           3. What types of AI solutions does BizNest AI offer?
          </div>
          <div className="collapse-content">
            <p>We offer a wide range of AI solutions, including consulting services, implementation and integration, training and education, solution development, and ongoing support and maintenance.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
           4. How can I get started with BizNest AI?
          </div>
          <div className="collapse-content">
            <p>To get started, simply visit our website and explore our services. You can contact us directly to discuss your specific needs and objectives, and our team will work with you to develop a tailored solution.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
           5. Is my data safe with BizNest AI?
          </div>
          <div className="collapse-content">
            <p>Yes, we are committed to safeguarding the privacy and security of your personal information. We implement appropriate measures to protect data against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
