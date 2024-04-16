import { useState } from "react";
import contactImg from "../assets/contact-us-img.webp"
import SingleQuestionTemplate from "../components/singlecoursep/SingleQuestionTemplate"
const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">
        <div className="flex  flex-col md:flex-row">
            <div className="bg-dark p-4 text-white md:w-1/2 h-auto rounded-lg">
                <h2 className="text-3xl font-semibold p-8">Help Articles</h2>
                <p className="text-lg p-8">Find answers to commonly asked questions about our membership.</p>
            </div>
            <div className="md:w-1/2">
                <img src={contactImg} alt="contactimg" className="rounded-lg" />
            </div>
        </div>
        {/* <input
          type="text"
          placeholder="Search FAQs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        /> */}
      </div>

      <div className="max-w-5xl mx-auto pt-10 pb-10">
        <h3 className="pt-4 pb-4 text-2xl font-bold">Frequently Asked Questions From the Community</h3>
        <p className="text-lg mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae consequatur ab, provident dolorum obcaecati optio natus vitae excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus.
        </p>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae consequatur ab, provident dolorum obcaecati optio natus vitae excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus.
        </p>
        
        <p className="text-xl text-black font-semibold">Question: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="pt-2">
          <span className="text-lg font-bold"> Answer:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti neque dolor temporibus 
            doloremque quasi fugiat possimus molestiae suscipit iste doloribus e
            aque error, magni enim rerum ipsa blanditiis consectetur at id nam porro qui! Dolores quas rem at aperiam quasi.
        </p>

        <p className="text-xl text-black font-semibold pt-2">Question: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="pt-2">
          <span className="text-lg font-bold"> Answer:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti neque dolor temporibus 
            doloremque quasi fugiat possimus molestiae suscipit iste doloribus e
            aque error, magni enim rerum ipsa blanditiis consectetur at id nam porro qui! Dolores quas rem at aperiam quasi.
        </p>

        <p className="text-xl text-black font-semibold pt-2">Question: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="pt-2">
          <span className="text-lg font-bold"> Answer:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti neque dolor temporibus 
            doloremque quasi fugiat possimus molestiae suscipit iste doloribus e
            aque error, magni enim rerum ipsa blanditiis consectetur at id nam porro qui! Dolores quas rem at aperiam quasi.
        </p>

        <p className="text-xl text-black font-semibold pt-2">Question: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="pt-2">
          <span className="text-lg font-bold"> Answer:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti neque dolor temporibus 
            doloremque quasi fugiat possimus molestiae suscipit iste doloribus e
            aque error, magni enim rerum ipsa blanditiis consectetur at id nam porro qui! Dolores quas rem at aperiam quasi.
        </p>

      </div>
      <div className="max-w-5xl mx-auto pb-10">
        <h3 className="text-xl font-bold">Related Articles</h3>
        <ul className="pt-4 pb-4">
            <li className="pb-2"><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium?</a></li> 
            <li className="pb-2"><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium?</a></li>
            <li className="pb-2"><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium?</a></li>
            <li className="pb-2"><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium?</a></li>
            <li className="pb-2"><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium?</a></li>
        </ul>
      </div>

      <div className="max-w-5xl mx-auto pt-10">
        <SingleQuestionTemplate/>
      </div>
    </div>
  );
};

export default Faq;
