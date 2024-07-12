import { useState } from 'react';
import '../app/globals.css';
import Link from 'next/link';
interface Section {
  practice: string;
  text: string;
  imageUrl: string;
}


const sections: { [key: string]: Section } = {
  "Day One: Mindfulness": {
    practice: `
      <h2>Something else here</h2>
      <p> Hello and welcome to the world of mindfulness. This course is intended for anyone looking to integrate mindfulness into their everyday lives, living every moment in peace, harmony and clarity. </p>
<p>To put it simply, mindfulness means living in the Now. It means being aware of the thoughts and feelings that constantly run underground our attention. Are you aware of what is going on now? That is what matters. </p>

    `,
    text: `
      <h1>An Introduction</h1>
      <p> Hello and welcome to the world of mindfulness. Here you will find a practical guide to living every moment fuller and clearer, connected with the now. When we are living mindfully every moment is enjoyed with clarity, peace and a sense of gratitude. </p>
      <p>To put it simply, mindfulness means living in the present moment. It means not being lost thinking of the past or future, but instead being aware of the thoughts that arise here, moment to moment. When we start to become aware of the thoughts and feelings that constantly run underground our attention we begin to notice many things weren’t aware of before.  Are you aware of what is going on now? That’s what matters. </p> 
 <p>Many of us live through our thoughts, never truly experiencing things as they are. It can be a while before we realize that freedom is in the present moment, not in some past or future. When living mindfully we get to truly experience things as they are. When walking in a trail, you enjoy the soft breeze on your face, you enjoy the bright yellow sunlight shining down, and the crunch of the leaves beneath your feet. You enjoy the feeling of your foot contacting the ground as you walk, and all the vibrant colors around you. </p> 
 <p>This course is structed with a new aspect of mindfulness to practice everyday. Each section includes an applicble way to bring mindfulness and clarity into our lives. My hope is that with this course as a guide, you will be able to live every moment connected with the now, with a sense of lightness, peace and harmony with what is. </p>
 <p> So let’s start with today. Whenever you remember bring your attention back to the Now. If you notice you are lost in thought, worrying about something in the future, or lost somewhere in the past, then bring your attention back to the present. Below there is an exercise where you can use your five senses to stay connected with the here and now.</p>
 
 
  `,
    imageUrl: '/mindfulness.webp',
  },
  "Day Two: The Present": {
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
  "Day Three: Meditation": {
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
  "Day Four: Thoughts": {
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
  "Day Five: Feelings": {
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
  "Day Six: Loving What Is": {
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

  const [selectedSection, setSelectedSection] = useState<keyof typeof sections>("Day One: Mindfulness");

  // const handleViewExerciseClick = () => {
  //   document.getElementById("practice-section")?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-100 to-blue-200">
         <Link className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" href="/">
         Home
        </Link>
      <nav className="absolute top-0 left-0 right-0 flex justify-around w-full bg-white py-4 shadow-md z-10">
   
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedSection === section
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={() => setSelectedSection(section as keyof typeof sections)}
          >
            {section}
          </button>
        ))}
      </nav>
      <div className="flex flex-col items-center mt-24 max-w-6xl">
        <div className="flex flex-row items-start">
          <div className="text-left p-4">
            <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].text }} className="text-gray-800"></div>
            {/* <button 
              onClick={handleViewExerciseClick} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              View Exercise
            </button> */}
          </div>
          <img src={sections[selectedSection].imageUrl} alt="Mindfulness" className="ml-4 mt-4 max-w-md rounded-lg shadow-lg" />
        </div>
        <div id="practice-section" className="bg-white p-6 rounded-lg shadow-md max-w-md text-center mb-8 mt-8">
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].practice }} className="text-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default MindfulnessCourse;
