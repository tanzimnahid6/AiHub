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
            <p>
              BizNest AI is a leading provider of Artificial Intelligence
              solutions and services aimed at helping businesses worldwide
              leverage AI technologies to drive growth, innovation, and success.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2. Who can benefit from BizNest AI services?
          </div>
          <div className="collapse-content">
            <p>
              Our services are designed to cater to both new and existing
              businesses seeking to integrate AI into their operations, as well
              as individuals interested in learning how to apply AI in a
              business context.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3. What types of AI solutions does BizNest AI offer?
          </div>
          <div className="collapse-content">
            <p>
              We offer a wide range of AI solutions, including consulting
              services, implementation and integration, training and education,
              solution development, and ongoing support and maintenance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            4. How can I get started with BizNest AI?
          </div>
          <div className="collapse-content">
            <p>
              To get started, simply visit our website and explore our services.
              You can contact us directly to discuss your specific needs and
              objectives, and our team will work with you to develop a tailored
              solution.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            5. Is my data safe with BizNest AI?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We offer demos and consultations to interested parties
              to demonstrate our capabilities and discuss how AI can benefit
              their business. Contact us to schedule a demo or consultation
              today.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            6. Do you provide training for individuals interested in learning AI
            with business?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer training programs designed to empower individuals
              with the knowledge and skills to leverage AI for business success.
              Our training sessions cover various AI concepts and their
              applications in real-world business scenarios.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            7. Is my data safe with BizNest AI?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we are committed to safeguarding the privacy and security of
              your personal information. We implement appropriate measures to
              protect data against unauthorized access, alteration, disclosure,
              or destruction.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            8. How often is your Privacy Policy updated?
          </div>
          <div className="collapse-content">
            <p>
            Our Privacy Policy may be updated periodically to reflect changes in our practices or regulatory requirements. Any updates will be posted on our website, and users are encouraged to review the policy regularly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
