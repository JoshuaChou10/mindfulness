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
      <p> Our lives are full of experience. We get to be a child, go to school, meet new people, grow up, find a job, raise a family. We get to feel the happiness of spending time with people we love. And the stress when things don’t go our way. If we take a look, our lives are characterized by various experiences, some of which we like, and some of which we dislike. Many of us are generally in a rush. We’re late for the bus, still have to study for that test. We go upstairs, get bored, then go downstairs. We try good food, decent food, get tired of that too. We climb a mountain, go skydiving, watch television. We strive for a better university, a better resume, a better job. We strive to be liked, to feel secure, to find happiness. </p>
<p>Looking at this, you have to give us some credit. We continue on, doing everything we can.</p>
      <p>Mindfulness is a way of staying connected. It is a way of slowing down and taking a good look at every moment. Here you will find a fuller way to live. A way characterized by joy, love, lightness, and clarity. When I first started practicing mindfulness at the age of 13 I immediately became very interested. I really wanted to understand, to experience everything fully. I got interested in books, in meditation, and in the present moment. Mindfulness brought me back to myself. As I continued through my practice I started noticing some changes. Things that used to stress me out no longer bothered me. Gradually a sense of lightness, balance, and peace embraced me, and remains with me to this day. Sometimes I would even catch myself smiling for no specific reason. Now only the clarity remains. This is the power of mindfulness.</p>      
<p>Through practicing mindfulness and understanding, we can walk around life with eyes wide open. Just washing the dishes, making conversation, drinking some tea. It’s all here for you to discover. The best part is that you can start now. Anyone can, at any age, and any circumstance. It’s so simple, why not give it a try?</p>
<p>Mindfulness means living in the present moment. We are aware. When walking in a trail we can feel the soft breeze on our face, the warm sun. We can feel the soft crunch of the leaves beneath our feet. Mindfulness is something to be applied to in our everyday lives, in every moment. For example, when washing the dishes, where is your mind at? Place your attention on the action you are doing, no need to get caught up in past or future. Feel as you place your hands on the plate, the cool water rushing down. The various vibrant colors, and different shadings. When something is done with clarity, everything becomes fun. Just a moment in the life. Walking, moving, watching, loving.  </p>
<p>When you do something you enjoy you are naturally in the present moment. For example, when playing basketball you’re attention is only on the game, the dribbling, the running, the shooting, the cheering. When playing chess, or doing computer programming, you are only doing it because it’s fun. You’re not thinking of anything else, you’re just working along, absorbed in the task at hand.</p>
<p>In mindfulness we are free from wanting because we see that all we could ever need is right here, right now with us. Anything else is just another thought.</p>
<p>Sometimes I think of my mind like a child. I just listen to all of its demands. Dad, can I have this toy? Mom! Please give me a pony. We all have things we think we want, but have we ever considered letting go? Just let go and live with what is. Because then we can allow a true love to fill our lives; then we can love what is. </p>
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
    <h1 style="font-size: 1.25rem; font-weight: bold;">The Importance of Posture in Meditation</h2>
    <p> When meditating everything should be just right. Not too forceful, but not too lazy. That is why when we first sit down to meditate we keep a straight back. This is something that even some veteran meditators have to fix. Imagine a straight line starting from the bottom of your spine to the top of your head. Make sure there isn’t an arch above your pelvis. This way of sitting straight is quite natural. First, we get into the straight-back position and then we relax every part of our body, the head, the shoulders, the chest, the stomach, the legs. We’re not trying to force the back to be unnaturally straight. We only want the perfect balance. If we try to force the meditation you will notice your body start to contract and tense. If it is like this then you are being too forceful. After meditating you will not feel balanced, instead, there will be some frustration or a feeling of unease. So simply ensure your body is relaxed throughout the whole session. Continue to keep a good posture and meditate at your ease. </p>
    <p>It may take some time, but continue practicing patiently. We can’t expect the mind to quiet down right when we start meditating, but we can continue working at it. When we continuously return our attention back to the breath it becomes like working a muscle. It will get easier over time. Sitting and quieting down I find it is very good. Why not give it a try?</p>

     
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Meditation</h1>
    <p>Meditation is for us to settle down. It’s for us to get still. My grandfather used to love telling me stories about his meditation experiences. These stories got me interested in meditation but the change only started when I sat down and tried it myself. It is about remaining calm and peaceful in every situation. Having meditation as a part of your life is very helpful. Whenever you feel like you want to quiet down you can just go sit and meditate. When you have meditation by your side and in your life you find it difficult to get stressed. Your natural state is balanced, joyful and at peace. </p>
<p> Meditation is a great way to strengthen mindfulness. Being mindful on a daily basis is an important practice, but those who truly want to integrate mindfulness into their lives also meditate. Meditation supports mindfulness. The calm and stillness that comes from concentration makes it easier to remain balanced and at ease throughout the day.</p>
<p>As we begin to practice meditation you will find that everything becomes clearer. Therefore you can deal with every situation with an ease and efficiency. Meditation truly helps with every aspect of your life, from family life to work you are able to work in harmony with others and with the world.</p>
<p>To start find a nice comfortable spot to sit where you can keep your back straight. You can sit on the edge of the chair, or on a cushion. </p>
     <p>Take 2-3 deep breaths to relax then gently place your attention on the in and out of your breathing</p>
     <p>Feel as the cool air comes in and as the soft air comes out. Feel the slight pause in between the in breath and the out breath</p>
     <p>Let the breathing flow naturally, do not try to control it. You may feel that it is too long or short, but just let it be. Through practice the breath will be able to flow naturally.</p>
     <p>As you continue watching the in-breath and the out-breath, various thoughts will arise. The mind will wander just like it always does throughout the day, thinking about this and that. In meditation we can be aware that we are lost in thought. Once we notice that we have wandered off we can just gently bring our attention back to the breath. </p>
     <p>Watching this breath is the essence of meditation. As you continue returning your attention to the breath you will find that your mindfulness and concentration is sharper. This means that after meditation we feel well rested and at peace. Subtle thoughts that once ran underground our attention, now appear clearer to us. We see that every painful feeling can only come from believing a stressful thought. With this stillness, we are able to catch the confusing and stressful thoughts that arise and so we don’t follow after them.</p>
     <p>It can be compared to a lake. Usually, the lake is muddy and wavy so when we walk in it we can’t see all the garbage, the fish, the crabs that are at the bottom of the floor. So we are constantly stepping on them. When we meditate we make the water still and let everything settle down so we can look through the crystal clear water and avoid anything that would hurt to step on. Now that the lake is still and clear we can actually enjoy our time here. The lake is our mind, the fish and crabs are our thoughts. Stepping on them represents believing our painful thoughts and following after them. This is why we remain mindful throughout the day, so we know what is going on and we are able to remain calm and at ease. </p>
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
      <p>Problems can only exist in the past or future. When we start worrying about what is going to happen, or what has already happened then we are lost. Our thoughts tell us painful and scary stories about our lives- ”It should have happened like this”, or “What if this happens?”  The good news is that it can’t be anything more than just a thought. If we get caught up in these stories of past and future then it is like we are trapped in a movie theatre, we know nothing but the story that we are watching. In mindfulness, we simply notice the thought. When we are aware, we see that these are just thoughts, they don’t contain any truth. We don’t have to believe them you know. When we see a thought for what it is then we are awake to the simple truth of what is in front of us. A tree, a table, a person. Everything is as it is. </p>
      <p>Thoughts tell us stories about what is. These stories often argue with reality and that is what causes suffering. For example the thought - “My parents should be more understanding” is a painful thought to believe. If you follow after it, make it into your story, then life becomes confusing. Just a single thought can cause so much strife and conflict, and the thought isn’t even true. </p>
<p>What happens when you believe the stressful thought-” My parents should be more understanding.” It hurts. When you don’t believe the stories your mind tells you, there isn’t a problem in the world. You're fine to experience everything as it is. You’re able to have a good look at what is without resistance. A good question to ask yourself is- “Is it true?” Byron Katie, in her book “A Mind at Home With Itself” introduces us to inquiry. If you find a stressful thought, just question it. </p>
<p>Many of us have the thought- “I am not good enough.” Many stressful thoughts stem from this one thought. “I should be more…”, “I should have more…” Watch what happens when you believe these thoughts, it doesn’t feel good does it? The truth is that everyone is perfect as they are, it is only these stories that are telling us otherwise. </p>
<p> When we compare ourselves with others we end up feeling either inferior or superior. We either end up as the lesser or as the better. These comparisons constantly put us in a vulnerable position. Any comparison argues with the truth. Reality is as it is, there is no need to make higher or lower, smaller, or bigger, greater, or lesser. </p>
<p>Be aware of all the alluring stories that your thoughts tell you. We have been following after these stories all of our lives. Now we can be aware of these lies that our thoughts tell us. When we meet each thought with a knowing awareness then we no longer have to be trapped by them. Then we can be free from anything that argues with what is. </p>
<p>In mindfulness we are aware of whatever thoughts arise. This is why meditation is so important, it allows us to get still enough to see the various thoughts that arise. As our mindfulness strengthens through meditation we are able to watch the mind and the subtle thoughts and ideas that pass through it. ”I need”, “They should be more.” Through this awareness we see that these are just thoughts. We once believed them, took them to be ours, but now we are simply aware of each small passing thought. It is like looking through a clear lake, everything is obvious to us now. We know what is going on. </p>
<p>Our world is a reflection of our mind. An angry person will see the world as unfair and full of frustrating situations. A nervous person will see the world full of scary situations that they have to evade. A lighthearted person will see a good world and one that is at peace is also at peace with everything. </p>
    `,
    imageUrl: '/thoughts.png',
  },
  "Feelings": {
    practice: `
    <h2 style="font-size: 1.25rem; font-weight: bold;">Getting to Know Feelings</h2>
    <p>Here is a good exercise where we can sit and observe any of these feelings without judgment, with curiosity and investigation. </p>
      <p>This exercise can be done when you are feeling a particular emotion such as stress or anger. Sometimes you may sit down and realize that there is actually some leftover tension, or uncomfortable feeling that we didn't even know what there. Getting still, we come to know ourselves as the stillness behind the feelings. The feelings are like clouds for us to notice. We are the sky behind them. Notice how each feeling is fleeting, it’s always changing ever subtly. Sometimes it’s like a ripple in the water, other times it’s more intense. Just remain still, and let go</p>
      <p>When you sit down you don’t have to do anything in particular. Just be. Then if there is something tugging at your attention-stress, frustration, or whatever, just notice it. Don’t make stories, justifications, or judgments out of anything. Simply feel what you feel in this moment, that’s all. Whatever it is, however strong it feels, resist nothing. Just be. </p>
    
    `,
    text: `
      <h1>Feelings</h1>
      <p> A feeling comes from a thought. If there is a thought then there is an accompanying feeling. We usually notice the feeling first before the thought. The feeling lets us know that we are caught in a stressful thought. Mindfulness involves being aware of how you are feeling throughout the day. Is there stress, sadness, or anger? Behind every feeling is a thought, so just trace it back to its origin. Why is there stress? What thought are you believing? Once we understand that feelings can only come from believing a thought that argues with reality then we can begin to let go.</p>
<p> People can go around their entire lives not knowing that they don’t have to feel stressed, they don’t have to feel angry or worried. These feelings, once we see them clearly can be let go of. </p>
<p>When we resist something it hurts. Suffering can only come from resistance. For example, let’s say you only slept 3 hours last night and the next day you’re tired. The tiredness is one thing, your resistance to it is another. If you are simply aware of the tiredness then there isn’t a problem. You just know how it feels, ok this is what tiredness feels like. You don’t add any resistance onto it, “This sucks”, “I’m not getting enough sleep.” When we are able to go about life without resistance then everything can be lived with a sense of acceptance. </p>
<p>If something happens, then that’s that. If you resist it then it hurts. The way I see it, you either have two choices let be, or to add unnecessary resistance onto the situation. Just continue letting go. It may be difficult but don’t worry, whatever feelings come up don’t act on them, just let them be. </p>
<p>When your mind is open to whatever life brings you then you can approach everything with a brave curiosity. When you are annoyed you know you are annoyed, when you are happy you know you are happy. When there is stress, you know there is stress. You are aware of what is going on. How does it feel in the body? Where is this feeling coming from? You can start to investigate. Every feeling comes from believing a thought. </p>
<p>Now whatever thought or feeling arises we can let it go. We don’t just sit around and continue feeling bad. We get aware, then we accept whatever is in this moment. We are able to go about life without resistance, just observing everything that comes with a clear mindfulness.</p>

    `,
    imageUrl: '/images/feelings.jpg',
  },
  "Everyday Peace": {
    practice: `
      <h2>Practice</h2>
      <p></p>
    `,
    text: `
      <h1>Everyday Peace</h1>
      <p>Freedom can only be found here an now. Not tomorrow, not yesterday, not on a mountain, but just right here. Peace can only come from within. It doesn’t come from achieving this or that. True lasting joy won’t reveal itself once you get the things you want. Let’s just start here, within. Then we will know a true happiness that doesn’t fall away. A joy that is immovable in all circumstances. </p>
    `,
    imageUrl: '/peace.png',
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