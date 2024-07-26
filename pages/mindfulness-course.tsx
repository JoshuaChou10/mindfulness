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
    <h2 style="font-size: 1.25rem; font-weight: bold;">The Senses</h2>
    <p>This is a good and simple 5-10 minute exercise that will help strengthen your mindfulness. </p>
    <p>Sit down and take in two to three deep breaths to quiet down. Now bring your attention to the sounds around you. Listen, what do you hear? The sounds of traffic, the birds chirping, people talking. Any sounds, far or near, take it all in. You may notice an urge to label, or judge the sounds, but we are simply listening. It is just sound, listen closely and you will get to be aware of many small things that you weren’t aware of before.  </p>
    <p>Now let’s bring our attention to any feelings on the body. Any tension or stress, just notice each one and relax. Be aware of any contact or pressure. For example, you can be aware of how it feels to sit, the feeling of the feet on the ground. Anything you can find, from head to toe, let your awareness sweep through every part. </p>
    <p>Slowly stand up, and notice how that feels. The legs stretching, the pressure shifting. Open your eyes and take in all the vibrant colors around you. Notice each shape. Notice the different shades of color. Notice any movement.</p>
    <p>Take it all in, any sounds, sensations, sights. It’s all here for us to enjoy. </p>
        

    `,
    text: `
      <h1 style="font-size: 1.25rem; font-weight: bold;">An Introduction</h1>
      <p> Hello and welcome to the world of mindfulness. Over here you will find a fuller way to live. A way characterized by joy, love, lightness and clarity. When I first started practicing mindfulness at the age of 13 I immediately became very interested. I really wanted to understand, to live. I got interested in books, in meditation, and in the present moment. Mindfulness brought me back to myself. As I continued through my practice I started noticing that things that used to stress me out no longer bothered me. Gradually a sense of lightness, balance, and peace embraced me, and remains with me to this day. Sometimes I would even catch myself smiling for no specific reason. Now only clarity remains. Through practicing mindfulness and understanding, we can walk around life with eyes wide open. Just washing the dishes, making conversation, drinking some tea. It’s all here for you to discover. The best part is that you can start now. Anyone can, at any age, any circumstance, and it’s so simple. Let’s give it a try. </p>
      <br>
      <p>So what is mindfulness? To put is simply, mindfulness means living in the present moment. We are aware. When walking in a trail we can feel the soft breeze on our face, the warm sun. We can feel the soft crunch of the leaves beneath our feet. Mindfulness is something to be applied to in our everyday lives, in every moment. When washing the dishes, where is your mind at? Place your attention on the action you are doing, no need to get caught up in past or future. Feel as you place your hand on the plate, the cool water rushing down. The bright colors, and different shadings. When something is done with clarity, everything becomes fun. Just a moment in the life. Walking, moving, watching, loving.  </p>
      <p>In mindfulness we are free from wanting because we see that all we could ever need is right here, right now with us. Anything else is just another thought.</p>
      <p>Sometimes I think of my mind like a child. I just listen to all of its demands. Dad, can I have this toy? Mom! Please give me a pony. We all have things we think we want, but have we ever considered letting go? Just let go and live with what is. Because then we can allow a true love to fill our lives. Then we can love what is. </p>
      <p> Below I have included a simple exercise where you can use your five senses to stay connected. </p>
      
 

 
 
 
  `,
    imageUrl: '/mindfulness.webp',
  },
  "Day Two: The Present": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">The Eternal Present</h1>
    <p>If you look you will see. Just right now there is only ever the present moment, nothing else. Just this. Eckart Tolle in his book, “The Power of Now”, called this the Eternal Present. It's right here, right now, for you to see. Consider this, even if you are thinking about the past, it really exists only as a thought in the present moment. If there is a thought about the future, this too only exists in the Now. I’m not saying that the past never happened, but where is it now? Just as a thought stored up in our head. It is very freeing when you realize this. You no longer have to be bound by “past” or “future” once you see them for what they are. Life becomes very simple when you are no longer caught up in thought. There is only ever the present moment. So why not come back to it? </p>

    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Savouring Every Moment</h1>
      <p>Today we are going to continue connecting with the present moment. Let’s look at our everyday experience. You’ve washed the dishes, mopped the floor. You’ve hiked in a trail, or walked the dog. But have you truly done any of these things? What I mean is, when washing the dishes were you fully experiencing it or were you lost in thought, thinking about something else. Next time you wash the dishes try it out. Really take in every part of it. Take in the bright color of the plates, feel the pressure as your hands touch the bowls, feel the cool water across your hands, the sound of the running water and the clink of the bowls as you set them aside. When every activity is done like this, with mindfulness, everything becomes fun. Why not try it out? You get to be mindful wherever you are. This is what is means to truly live in the world. You don’t have to go in a plane and travel across the world, go sightseeing, see the all the scenic vistas. You can live fully right here and now. And it’s perfect. </p>
      <p>Today I’m inviting you to live fully everyday. Everything is always more enjoyable when your attention is on the activity you are doing and not wandering around somewhere. When washing the dishes are you thinking, “I better get this done quick, then I can sit on the couch and relax.” Then when you’re on the couch, “I should be doing something right now, I’m getting bored.” 
      If you are rushing through every moment, where are you going? Let’s stay in the here and now. </p>
      <p>People who enjoy what they are doing are naturally in the moment. When you are playing basketball, your focus is only on the dribbling, the running, the shooting. You’re really enjoying it. When every moment is lived like this, then we can flow through life without worry, without fear, only lightness and a sense of being present. </p>
      <p>Note: Being mindful doesn’t mean that we can’t plan. We can think of the future but without getting lost in fearful stories about it. Then whenever a situation comes up we can deal with it efficiently without getting caught up in the scary “what if’s.” When it is like this, we are able to let go when we have done what is needed. The mind is a useful tool, just make sure to use it with awareness and not get caught up in thinking. </p>
                `,
    imageUrl: '/present.png',
  },
  "Day Three: Meditation": {
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
      <p>There are two types of practice. Informal and formal practice. Informal practice means being mindful in whatever activity we do throughout the day. Formal practice means setting aside some time to quiet down and meditate. Sitting down to meditate daily will make it easier to remain mindful throughout the day. As we continue to remain mindful our awareness strengthens and this in turn supports our meditation practice. Formal practice and informal practice support each other in this way. Being mindful in every activity we do is a very good and important practice, however, those who really want to integrate mindfulness into their lives also find it helpful to meditate.</p>
      <p>To start find a nice comfortable spot to sit where you can keep your back straight. You can sit on the edge of a chair, or on a meditation cushion. Start by taking in two or three deep breaths to relax. Now bring your attention to the in and out of the breath. Feel the cool air goes through the nostrils, and the warm air as it comes out. You can also try noticing the silent pause in between the out-breath and the in-breath. When watching the breath let it flow naturally, don’t try to control it. In the beginning, you may feel the breath is too deep or too short. Don’t worry, just let it be, eventually through practice you will be able to breathe naturally. So meditation is really simple, we are just watching this very breath that accompanies as throughout this life. As you continue the mind will wander off many times, thinking about something else as it usually does. When this happens, simply bring your attention back to the breath. </p>
      <p>When meditation becomes a daily habit of ours we can truly appreciate it. After a meditation session, we naturally feel good. We feel well-rested, and our mindfulness is sharp. You will notice that boredem isn’t a problem anymore. Another benifit of mindfulness is it allows you to see thoughts more clearly. You see that any stress is always caused by believing a stressful thought. Now that your mindfulness is sharp, these thoughts appear clearer to you and you no longer follow after them.</p>
      <p>Most people start with 5-10 minutes of meditation a day, then slowly build up, to 15 minutes, 20 minutes, 30 minutes. Eventually, it becomes a part of your life, like eating or sleeping. Whenever you feel stressed or like you need to quiet down you can sit in meditation. It helps in every aspect of your life. I like meditating in the morning, right when I get up from bed. I meditate for one hour then go for a walk outside. It’s good. In meditation you have to find what works best for you, don’t worry about how long you can sit for, the point of meditation is just to calm the mind. </p>
      <p>If you have any questions feel free to email me at joshuachou912@gmail.com</p>
      

    `,
    imageUrl: '/meditation.png',
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
  "Day Six: Letting Go": {
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
  const [selectedSection, setSelectedSection] = useState<keyof typeof sections>("Day One: Mindfulness");

  const handleNextDayClick = () => {
    const sectionsKeys = Object.keys(sections);
    const currentIndex = sectionsKeys.indexOf(selectedSection as string);
    // % operator ensures the page goes back to index 0, once it reaches highest index so EB_Garamond. 7%7=0
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
          onClick={handleNextDayClick}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Next Day
        </button>
    </div>
  );
};

export default MindfulnessCourse;