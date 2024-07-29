import { useState, useEffect } from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface Section {
  practice: string;
  text: string;
  imageUrl: string;
}

//Landscape image theme
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
    <h1 style="font-size: 1.25rem; font-weight: bold;">Just This</h1>
    <p>The core of mindfulness is the present moment. After all, where else can you be mindful? Even when you are thinking about the past. The past is just another thought in the present moment. Take a good look around you, it is all here. The floor, the ceiling, the chair, the fan, the computer. Where can you find the past or the future? I am not saying that the past never happened, but where is it now? Just stored up in our heads as memories. When we try to grasp at it, it’s gone. The Now is all we ever have so let’s come back to it. </p>
<p>When we are caught in some stressful thought or feeling all we have to do is come back to this moment. No problems can exist here. It’s just this. That’s it. When we are able to live fully in the present, then we are complete. We see everything clearly in a single moment, just as it is. This doesn’t mean that we can’t think of past and future, it just means that we don’t get lost worrying or feeling bad about them. We can still plan our day, and solve crossword puzzles, it’s just that now we know that we are doing it in the present moment.  When it is like this every moment can be lived in peace, we are able to go about life efficiently with a grateful lightness, confident that everything will turn out fine.</p>

    
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Savouring Every Moment</h1>
    <p> When we begin to become mindful we are able to enjoy every moment as it is. It may take a long time for someone to realize that only the present moment can be savored. Maybe they may have gone through their lives only half there. When spending time with their family, their minds are off somewhere else. When walking in a trail, or doing the dishes their minds are off thinking about things like work, or school. Then one day they may come to see that life is to be lived right here right now.</p>
<p>Try this out, whatever you’re doing place your full attention on it, really take in every part of it. For example when talking to someone you are listening to what they are saying, not thinking of what you are going to say next. When peeling an orange you can notice the bright color of the skin, the feeling as you take off the peel. When eating notice the sweet taste and the juicy texture of the flesh. When our full attention is on whatever we are doing then we can say we are truly doing it. Have you ever peeled an orange before? Have you ever walked in a trail, or washed the dishes? When we are in the moment everything we do becomes fun. </p>


    
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
      <p>Meditation is a way to settle down, to calm the mind and to be at peace. Being mindful on a daily basis is an important practice, but those who truly want to integrate mindfulness into their lives also meditate. Meditation supports mindfulness. The calm and stillness that comes from meditation makes it easier to be mindful moment to moment. </p>
      <p>To start find a nice comfortable spot to sit where you can keep your back straight. You can sit on the edge of the chair, or on a cushion. </p>
      <p>Take 2-3 deep breaths to relax then gently place your attention on the in and out of your breathing</p>
      <p>Feel as the cool air comes in and as the soft air comes out. Feel the slight pause in between the in breath and the out breath</p>
      <p>Let the breathing flow naturally, do not try to control it. You may feel that it is too long or short, but just let it be. Through practice the breath will be able to flow naturally, at its own pace</p>
      <p>As you continue watching the in-breath and the out-breath, various thoughts will arise. The mind will wander just like it always does throughout the day, thinking about this and that. In meditation we can be aware that we are lost in thought. Once we notice that we have wandered off we can just gently bring our attention back to the breath. </p>
      <p>Watching this breath is the essence of meditation. As you continue returning your attention to the breath you will notice your mindfulness get stronger. What does that mean? After meditation, we feel well rested, at peace. Subtle thoughts that once ran underground our attention, now appear clearer to us. We see that every painful feeling can only come from believing a stressful thought. With this stillness, we are able to catch the confusing and stressful thoughts that arise and not follow after them. Just watching, just noticing</p>
      <p>Most people start with 5-10 minutes a day and slowly build up from there. I like meditating in the morning, right when I get up from bed. Although you can find what time works best for you. Having meditation as a part of your life is really helpful. Everytime you are feeling stressed or like you need to quite down, you can just sit in meditation.  </p>
      

    `,
    imageUrl: '/meditation.png',
  },
  "Thoughts": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Catch Every Thought</h1>
      <p>Notice your thoughts for a minute without judgment. Let them come and go.</p>
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Life Without Problems</h1>
      <p>Problems can only exist in the past or future. When we start worrying about what is going to happen, or what has already happened then we are lost. Our thoughts tell us painful and scary stories about our lives- ”It should have happened like this”, or “What if this happens?”  The good news is that it can’t be anything more than just a thought. If we get caught up in these stories of past and future then it is like we are trapped in a movie theatre, we know nothing but the story that we are watching. In mindfulness, we simply notice the thought. When we are aware, we see that these are just thoughts, they don’t contain any truth. We don’t have to believe them you know. When we see a thought for what it is then we are awake to the simple truth of what is infront of you. A tree, a table, a person. Everything is as it is. </p>
      <p>Thoughts tell us stories about what is. These stories often argue with reality and that is what causes suffering. For example the thought - “My parents should be more understanding” is a painful thought to believe. If you follow after it, make it into your story, then life becomes confusing. Just a single thought can cause so much strife and conflict, and the thought isn’t even true. </p>
<p>What happens when you believe the stressful thought-” My parents should be more understanding.” It hurts. When you don’t believe the stories your mind tells you, there isn’t a problem in the world. You're fine to experience everything as it is. You’re able to have a good look at what is without resistance. A good question to ask yourself is- “Is it true?” Byron Katie, in her book “A Mind at Home With Itself” introduces us to inquiry. If you find a stressful thought, just question it. </p>
<p>Many of us have the thought- “I am not good enough.” Many stressful thoughts stem from this one thought. “I should be more…”, “I should have more…” Watch what happens when you believe these thoughts, it doesn’t feel good does it? The truth is that everyone is perfect as they are, it is only these stories that are telling us otherwise. </p>
<p>In mindfulness we are aware of whatever thoughts arise so we don’t follow after them. This is why meditation is so important, it let’s us get still enough to see the various thoughts that arise. As we grow in mindfulness we get to see the subtle thoughts that we once believed-”I need”, “They should be more,” but now we see that these are just thoughts. We once believed them, took them to be ours, but now we are simply aware.  </p>

    `,
    imageUrl: '/thoughts.png',
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
      <p>Let go then you will see. </p>
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
          Next Page
        </button>
    </div>
  );
};

export default MindfulnessCourse;