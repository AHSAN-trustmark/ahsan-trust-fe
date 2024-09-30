import { useState } from "react";
import { motion } from "framer-motion"; 
import { SectionDisplayProps } from "type";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RiProgress3Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SectionDisplay: React.FC<SectionDisplayProps> = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null); 

  const handleSectionClick = (index: number) => {
    setSelectedSection(index === selectedSection ? null : index); 
  };

  return (
<div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col border cursor-pointer m-2 rounded-2xl p-2"
          onClick={() => handleSectionClick(index)}
        >
          {/* Section title */}
          <span className="flex items-center gap-2">
          {selectedSection === index ? (
              <IoMdArrowDropup /> 
            ) : (
              <IoMdArrowDropdown /> 
            )}
          <span className="text-darkBlue"> {section.title}</span>
          </span>
          {selectedSection === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {section.items.map((item, itemIndex) => (
                <p key={itemIndex} className="flex items-center gap-2">
                  {item.includes("(In progress)") ? (
                    <RiProgress3Line className="text-red-500" />
                  ) : (
                    <IoMdCheckmarkCircleOutline className="text-green-500"/>
                  )}
                  <span className={`text-sm ${item.includes("(In progress)") ? "text-red-500 " : "text-gray-700"}`}>
                    {item}
                  </span>
                </p>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionDisplay;
