import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

function App() {
  const [sections, setSections] = useState([
    { header: 'Section 1', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { header: 'Section 2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { header: 'Section 3', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },

  ]);

  const [sectionHeader, setSectionHeader] = useState('');
  const [sectionDetails, setSectionDetails] = useState('');

  const addSection = () => {
    const newSection = {
      header: sectionHeader,
      content: sectionDetails
    };

    setSections([...sections, newSection]);
    setSectionHeader('');
    setSectionDetails('');
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Section Header</h1>
        <div>
          <label htmlFor="sectionHeader">Section Header:</label>
          <input
            id="sectionHeader"
            type="text"
            value={sectionHeader}
            onChange={(e) => setSectionHeader(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sectionDetails">Section Details:</label>
          <textarea
            id="sectionDetails"
            value={sectionDetails}
            onChange={(e) => setSectionDetails(e.target.value)}
          />
        </div>
        <button onClick={addSection}>Add</button>
      </div>
      <div className="right">
        <Accordion>
          {sections.map((section, index) => (
            <AccordionTab key={index} header={section.header}>
              <p>{section.content}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default App;


