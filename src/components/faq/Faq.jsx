import{ useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee."
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web."
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. Cancel online anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, and Netflix originals."
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "Netflix Kids gives parents control while kids enjoy family-friendly TV shows and movies."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question">
            <span>{item.question}</span>

            {/* ONLY THIS + BUTTON IS CLICKABLE */}
            <button
              className="faq-icon"
              onClick={() => toggleFaq(index)}
            >
              {openIndex === index ? "×" : "+"}
            </button>
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
