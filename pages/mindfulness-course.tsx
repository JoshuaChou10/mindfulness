import { useState } from 'react';
import '../app/globals.css';

const sections = {
  "Week One: Mindfulness": {
    practice: `
      <h2>Practice</h2>
      <p>Take a few moments to focus on your breath. Notice the sensation of air entering and leaving your body.</p>
    `,
    text: `
      <h1>Mindfulness</h1>
      <p>Mindfulness is the practice of being present and fully engaged with whatever we're doing at the moment, free from distraction or judgment, and aware of our thoughts and feelings without getting caught up in them.</p>
    `,
    imageUrl: '/images/mindfulness.jpg',
  },
  "Week Two: The Present": {
    practice: `
      <h2>Practice</h2>
      <p>Spend a minute observing your surroundings. Notice the details you usually overlook.</p>
    `,
    text: `
      <h1>The Present</h1>
      <p>Living in the present means focusing on the here and now. It involves paying attention to our current experiences rather than being preoccupied with the past or future.</p>
    `,
    imageUrl: '/images/present.jpg',
  },
  "Week Three: Meditation": {
    practice: `
      <h2>Practice</h2>
      <p>Sit quietly for five minutes, focusing on your breath or a calming word.</p>
    `,
    text: `
      <h1>Meditation</h1>
      <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
    `,
    imageUrl: '/images/meditation.jpg',
  },
  "Week Four: Thoughts": {
    practice: `
      <h2>Practice</h2>
      <p>Notice your thoughts for a minute without judgment. Let them come and go.</p>
    `,
    text: `
      <h1>Thoughts</h1>
      <p>Our thoughts can influence our emotions and behavior. Understanding and managing our thoughts can help us respond to situations more effectively and reduce stress.</p>
    `,
    imageUrl: '/images/thoughts.jpg',
  },
  "Week Five: Feelings": {
    practice: `
      <h2>Practice</h2>
      <p>Take a moment to notice how you're feeling right now. Acknowledge your feelings without judgment.</p>
    `,
    text: `
      <h1>Feelings</h1>
      <p>Feelings are our emotional responses to our thoughts and experiences. By acknowledging and understanding our feelings, we can learn to manage them better.</p>
    `,
    imageUrl: '/images/feelings.jpg',
  },
  "Week Six: Loving What Is": {
    practice: `
      <h2>Practice</h2>
      <p>Reflect on something you appreciate about your current situation.</p>
    `,
    text: `
      <h1>Loving What Is</h1>
      <p>Acceptance of the present moment and loving what is can lead to a more peaceful and contented life. It involves letting go of resistance and embracing reality as it is.</p>
    `,
    imageUrl: '/images/loving-what-is.jpg',
  },
};

const MindfulnessCourse = () => {
  const [selectedSection, setSelectedSection] = useState("Week One: Mindfulness");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-100 to-blue-200">
      <nav className="flex flex-col w-full bg-white py-4 shadow-md">
        <div className="flex justify-around">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`px-4 py-2 mx-2 rounded-lg ${
                selectedSection === section
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>
      <div className="flex flex-col items-center mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center mb-8">
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].practice }} className="text-gray-800"></div>
        </div>
        <div className="text-center">
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].text }} className="text-gray-800"></div>
          <img src={sections[selectedSection].imageUrl} alt={selectedSection} className="mt-4 max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default MindfulnessCourse;
