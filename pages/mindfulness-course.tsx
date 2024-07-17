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
    <p>This is a good and simple 5-10 minute exercise that will help strengthen your mindfulness. I remember this was my favorite exercise when I first started. I first learned this from Oli Doyle’s book, Mindfulness Plain and Simple. </p>
    <p>Sit down and take in two to three deep breaths to quiet down. Now bring your attention to the sounds around you. Listen, what do you hear? The sounds of traffic, the birds chirping, people talking. Any sounds, far or near, take it all in. You may notice an urge to label, or judge the sounds, but we are simply listening. It is just sound, listen closely and you will get to be aware of many small things that you weren’t aware of before.  </p>
    <p>Now let’s bring our attention to any feelings on the body. Any tension or stress, just notice each one and relax. Be aware of any contact or pressure. For example, you can be aware of how it feels to sit, the feeling of the feet on the ground. Anything you can find, from head to toe, let your awareness sweep through every part. </p>
    <p>Slowly stand up, and notice how that feels. The legs stretching, the pressure shifting. Open your eyes and take in all the vibrant colors around you. Notice each shape. Notice the different shades of color. Notice any movement.</p>
    <p>Take it all in, any sounds, sensations, sights. Whatever you hear, feel, or see let your awareness feel all of it. </p>
    

    `,
    text: `
      <h1 style="font-size: 1.25rem; font-weight: bold;">An Introduction</h1>
      <p> Hello and welcome to the world of mindfulness. Mindfulness means really experiencing things as they are and not lost in thought. Mindfulness means noticing, being aware. When every moment is lived mindfully our lives are charaterized by clarity and peace. Things that once stressed us out now no longer bother us. We may even laugh about them now. Through mindfulness we grow in wisdom, compassion and peace. </p>
      <p>To put it simply, mindfulness means living in the here and now. It means not being lost thinking of the past or future, but instead, being aware of the thoughts that arise moment to moment. When we start to become aware of the thoughts and feelings that constantly run underground our attention we begin to notice many things we weren’t aware of before.  Are you aware of what is going on now? That’s what matters. </p> 
 <p>Many of us have never truly lived. We experience our lives only through the dull screen of our thoughts. It can be a while before we realize that freedom is found only in the present moment, not in some past or future up there in our head. When living mindfully we get to truly experience things as they are. When walking in a trail, you enjoy the soft breeze on your face, the warmth of the bright yellow sunlight shining down, and the crunch of the leaves beneath your feet. The crisp birdsongs, the feeling of your foot contacting the ground as you walk, the soft sensation of the breath. This is mindfulness, clear and light. </p> 
 <p>This course is structured with a new way to get connected with ourselves every day. Each section includes an applicable way to bring mindfulness and clarity into our lives. My hope is that with this course as a guide, you will be able to live every moment as it should be lived, connected with the now, with a sense of lightnesess and gratitude. </p>
 <p> So let’s start with today. Let’s start paying attention, because you will find that most of us are constantly lost in thought. Lost in stories of the past or the future. We miss what truly matters, right here under our nose. So as often as you can, bring your attention back to the Now. If you notice you are lost in thought, lost somewhere in the imagined future, or lost in the ghost of a past, then bring your attention back to the present. Then in that moment, you are free. Free from all the stories that we tell ourselves, and back in reality. Back in the here and now. </p>
 
 <p> Below there is an exercise where you can use your five senses to stay connected. </p>
 
 
 
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
      <h1>Letting Go</h1>
      <p>Let everything go, put it all down. Let it all go without exception. Let go with a knowing and awareness. We are able to let go because we see that there is nothing worth holding on to. When we put it all down we are met with only peace. Just be. </p>
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