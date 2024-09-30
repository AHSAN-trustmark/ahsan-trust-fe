import { useState } from "react";

// Define the type for sections
interface Section {
  title: string;
  items: string[];
}

interface SectionDisplayProps {
  sections: Section[];
}

const SectionDisplay: React.FC<SectionDisplayProps> = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null); 

  const handleSectionClick = (index: number) => {
    setSelectedSection(index === selectedSection ? null : index); 
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col border cursor-pointer m-2 rounded-lg p-2"  onClick={() => handleSectionClick(index)} >
          <p
            className=""
           
          >
            {section.title}
          </p>
          {selectedSection === index && (
            <div>
              {section.items.map((item, itemIndex) => (
                <p key={itemIndex} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check2-circle text-green-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionDisplay;
