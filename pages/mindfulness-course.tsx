import { useState, useEffect } from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface Section {
  practice: string;
  text: string;
  imageUrl: string;
}


const sections: { [key: string]: Section } = {
  "Mindfulness": {
    practice: `
    <h2 style="font-size: 1.25rem; font-weight: bold;">The Senses</h2>
    <p>This is a good and simple 5-10 minute exercise that will help strengthen your mindfulness. </p>
    <p>Sit down and take in two to three deep breaths to quiet down. Now bring your attention to the sounds around you. Listen, what do you hear? The sounds of traffic, the birds chirping, people talking. Any sounds, far or near, take it all in. You may notice an urge to label, or judge the sounds, but we are simply listening. It is just sound, listen closely and you will get to be aware of many small things that you weren’t aware of before.  </p>
    <p>Now let’s bring our attention to any feelings on the body. Any tension or stress, just notice each one and relax. Be aware of any contact or pressure. For example, you can be aware of how it feels to sit, the feeling of the feet on the ground. Anything you can find, from head to toe, let your awareness sweep through every part. </p>
    <p>Slowly stand up, and notice how that feels. The legs stretching, the pressure shifting. Open your eyes and take in all the vibrant colors around you. Notice each shape. Notice the different shades of color. Notice any movement.</p>
    <p>Take it all in, any sounds, sensations, sights. It’s all here for us to enjoy. </p>
        

    `,
    text: `
      <h1 style="font-size: 1.25rem; font-weight: bold;">An Introduction</h1>
      <p> Hello and welcome to the world of mindfulness. Here you will find a fuller way to live. A way characterized by joy, love, lightness, and clarity. When I first started practicing mindfulness at the age of 13 I immediately became very interested. I really wanted to understand, to experience everything fully. I got interested in books, in meditation, and in the present moment. Mindfulness brought me back to myself. As I continued through my practice I started noticing some changes. Things that used to stress me out no longer bothered me. Gradually a sense of lightness, balance, and peace embraced me, and remains with me to this day. Sometimes I would even catch myself smiling for no specific reason. Now only clarity remains. This is the power of mindfulness.</p>
<p>Through practicing mindfulness and understanding, we can walk around life with eyes wide open. Just washing the dishes, making conversation, drinking some tea. It’s all here for you to discover. The best part is that you can start now. Anyone can, at any age, and any circumstance. It’s so simple, why not give it a try?</p>
<p>Mindfulness means living in the present moment. We are aware. When walking in a trail we can feel the soft breeze on our face, the warm sun. We can feel the soft crunch of the leaves beneath our feet. Mindfulness is something to be applied to in our everyday lives, in every moment. For example, when washing the dishes, where is your mind at? Place your attention on the action you are doing, no need to get caught up in past or future. Feel as you place your hands on the plate, the cool water rushing down. The various vibrant colors, and different shadings. When something is done with clarity, everything becomes fun. Just a moment in the life. Walking, moving, watching, loving.  </p>
<p>In mindfulness we are free from wanting because we see that all we could ever need is right here, right now with us. Anything else is just another thought.</p>
<p>Sometimes I think of my mind like a child. I just listen to all of its demands. Dad, can I have this toy? Mom! Please give me a pony. We all have things we want, but have we ever considered letting go? Just let go and live with what is. Because then we can allow a true love to fill our lives; then we can love what is. </p>
<p> Below I have included a simple exercise where you can use your five senses to stay connected. </p>

 
  `,
    imageUrl: '/mindfulness.webp',
  },
  "The Present": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">The Eternal Present</h1>
    <p>If you look you will see. Just right now there is only ever the present moment, nothing else. Just this. Eckart Tolle in his book, “The Power of Now”, called this the Eternal Present. It's right here, right now, for you to see. Consider this, even if you are thinking about the past, it really exists only as a thought in the present moment. If there is a thought about the future, this too only exists in the Now. I’m not saying that the past never happened, but where is it now? Just as a thought stored up in our head. It is very freeing when you realize this. You no longer have to be bound by “past” or “future” once you see them for what they are. Life becomes very simple when you are no longer caught up in thought. There is only ever the present moment. So why not come back to it? </p>

    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Just This</h1>
    <p>The core of mindfulness is the present moment. After all, where else can you be mindful? Even when you are thinking about the past. The past is just another thought in the present moment. Take a good look around you, it is all here. The floor, the ceiling, the chair, the computer, the fan. Where can you find the past or the future? I am not saying that the past never happened, I simply mean that where is it now? Just stored in our head as memories. When we try to grasp at it, it’s gone. The Now is all we ever have, and it’s perfect. </p>
    <p>When we are caught in some stressful thought or feeling all we have to do is come back to this moment. No problems can exist here. It’s just this. That’s it. When we are able to live fully in the present, then we are complete. This doesn’t mean that we can’t think of past and future, it just means that we don’t get lost worrying or feeling bad about them. We can still plan our day, it’s just that now we know that we are doing it in the present moment.  When it is like this every moment can be lived in peace, we are able to go about life efficiently with a grateful lightness, confident that everything will work out fine.</p>
    <p>So how do we come back to the present moment?</p>
    
                `,
    imageUrl: '/present.png',
  },
  "Meditation": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">How to Meditate</h2>
      <ul>
      <li>Sit in a comfortable spot with minimal disturbance where you can keep your back straight</li>
      <li>Take a few deep breaths to relax</li>
      <li>Bring your attention to the in and out of the breath, let yourself breathe naturally</li>
      <li>When the mind wanders bring your attention back to the breath</li>
      <li>You can start with 5 minutes a day and as you become more adept you can sit for longer</p>
      </ul>
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Meditation</h1>
      <p>Meditation is a great way to strengthen mindfulness. Meditation is for us to settle down, to calm the mind and to be at peace. Being mindful on a daily basis is an important practice, but those who truly want to integrate mindfulness into their lives also meditate. Meditation supports mindfulness. The calm and stillness that comes from concentration makes it easier to be mindful moment to moment. </p>
      <p>To start find a nice comfortable spot to sit where you can keep your back straight. You can sit on the edge of the chair, or on a cushion. </p>
      <p>Take 2-3 deep breaths to relax then gently place your attention on the in and out of your breathing</p>
      <p>Feel as the cool air comes in and as the soft air comes out. Feel the slight pause in between the in breath and the out breath</p>
      <p>Let the breathing flow naturally, do not try to control it. You may feel that it is too long or short, but just let it be. Through practice the breath will be able to flow naturally, at its own pace</p>
      <p>As you continue watching the in-breath and the out-breath, various thoughts will arise. The mind will wander just like it always does throughout the day, thinking about this and that. In meditation we can be aware that we are lost in thought. Once we notice that we have wandered off we can just gently bring our attention back to the breath</p>
      <p>Watching this breath is the essence of meditation. As you continue returning your attention to the breath you will find that your mindfulness and concentration is sharper. What does that mean? After meditation, we feel well rested, at peace. Subtle thoughts that once ran underground our attention, now appear clearer to us. We see that every painful feeling can only come from believing a stressful thought. With this stillness, we are able to catch the confusing and stressful thoughts that arise and not follow after them. Just watching, just noticing</p>
      <p>Most people start with 5-10 minutes a day and slowly build up from there. I like meditating in the morning, right when I get up from bed. Although you can find what time works best for you. </p>
      

    `,
    imageUrl: '/meditation.png',
  },
  "Thoughts": {
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
  "Feelings": {
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
  "Letting Go": {
    practice: `
      <h2>Practice</h2>
      <p>Reflect on something you appreciate about your current situation.</p>
    `,
    text: `
      <h1>Loving What Is</h1>
      <p></p>
    `,
    imageUrl: '/images/loving-what-is.jpg',
  },
};


const MindfulnessCourse = () => {
  const router = useRouter();
  const { section } = router.query;
  const [selectedSection, setSelectedSection] = useState<keyof typeof sections>(
    section && typeof section === 'string' && sections[section] ? section : 'Mindfulness'
  );

  useEffect(() => {
    if (section && typeof section === 'string' && sections[section]) {
      setSelectedSection(section as keyof typeof sections);
    }
  }, [section]);

  const handleNextPageClick = () => {
    const sectionsKeys = Object.keys(sections);
    const currentIndex = sectionsKeys.indexOf(selectedSection as string);
    const nextIndex = (currentIndex + 1) % sectionsKeys.length;
    setSelectedSection(sectionsKeys[nextIndex] as keyof typeof sections);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center w-full bg-white py-4 shadow-md z-10">
        <Link className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" href="/">

            Home
    
        </Link>
        <nav className="flex justify-around w-full">
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
      
      </div>
      <div className="flex flex-col items-center mt-24 max-w-6xl">
        <div className="flex flex-row items-start">
          <div className="text-left p-4">
            <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].text }} className="text-gray-800"></div>
          </div>
          <img src={sections[selectedSection].imageUrl} alt="Mindfulness" className="ml-4 mt-4 max-w-md rounded-lg shadow-lg" />
        </div>
        <div id="practice-section" className="bg-white p-6 rounded-lg shadow-md max-w-8xl text-center mb-8 mt-8">
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].practice }} className="text-gray-800"></div>
        </div>
      </div>
      <button
          onClick={handleNextPageClick}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Next Day
        </button>
    </div>
  );
};

export default MindfulnessCourse;