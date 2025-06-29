import { useState, useEffect } from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
    <p>&emsp;This is a good and simple 5-10 minute exercise that will help strengthen your mindfulness. </pre>
    <p>&emsp;Sit down and take in two to three deep breaths to quiet down. Now bring your attention to the sounds around you. Listen, what do you hear? The sounds of traffic, the birds chirping, people talking. Any sounds, far or near, take it all in. You may notice an urge to label, or judge the sounds, but we are simply listening. It is just sound, listen closely and you will get to be aware of many small things that you weren&#39;t aware of before.  </p>
    <p>&emsp;Now let&#39;s bring our attention to any feelings on the body. Any tension or stress, just notice each one and relax. Be aware of any contact or pressure. For example, you can be aware of how it feels to sit, the feeling of the feet on the ground. Anything you can find, from head to toe, let your awareness sweep through every part. </p>
    <p>&emsp;Slowly stand up, and notice how that feels. The legs stretching, the pressure shifting. Open your eyes and take in all the vibrant colors around you. Notice each shape. Notice the different shades of color. Notice any movement.</p>
    <p>&emsp;Take it all in, any sounds, sensations, sights. It&#39;s all here for us to enjoy. </p>
        

    `,
    text: `
      <h1 style="font-size: 1.25rem; font-weight: bold;">An Introduction</h1>
      <p>&emsp;I started meditating daily at age 13. I came to meditation for the same reason that many other people started to meditate - “Because I didn’t like stress, and it sucked.” 
      </p>
<p>&emsp;Before I was 13, I had tried and stopped meditation for periods of time. But this time was different. I knew that the hardest part of meditation wasn’t the ability to sit for a very long time on my ass, it was the ability to commit to the schedule set and the practice. 
</p>
<p>&emsp;Keeping this in mind, I meditated every day for 5, 10, 20 minutes, and kept increasing from there. I loved it. For one, it quieted the thoughts in my head so I could feel lighter from time to time. I started notice some changes, I was less bored, less anxious. Things that used to stress me out, I could now meet with humour and clarity. But then I also started to notice a new freedom and happiness that began to set in. It's a love for the moment. It was also nice to notice that conflicts with my family lessened, I became naturally more confident, and I just felt a lot more free.
</p>
<p>&emsp;Since I started meditating, I still feel stress at times. But the difference is that there is so much more <b>space around it</b>. Emotions becomes easier to deal with and to let go of.  </p>
<p>&emsp;So I don't see meditation as something to get rid of our stress, actually, meditation is about getting a clearer view of life. It puts things into perspective becuase we are so much more present of each moment, each thought and each sensation. Our attention is only here and now. In my experience, <b>it is like becoming a child again</b>. There is a genuine curiosity to discover everything about each unfolding moment. Life becomes joyously simple, and <b>we can laugh</b> so much easier.  At the same time we also begin to become more aware of our thoughts and patterns - and we begin to see that we have a choice. We don't have to follow after the mind's stressful stories of past and future. We can be free now. </p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">Special Experiences, and Letting Go</h1>
<p>&emsp; Eventually, in my 7th month of daily meditation, every time I sat down I could enter very special meditative states full of bliss. I was very excited, but after 2 weeks these states stopped happening and my meditation became dull and boring. I kept trying to get it back, but I couldn’t. It took me some time to let go, and see that these are the way things are. Things come and go, and it is not our business to say whether they should stay with us. This is true for any part in our lives.
</p>
<p>&emsp;The very wanting was the thing that was keeping me stuck. So when I let go of wanting things to be different than what they were, my life and meditation were able to move into new territory. 
My grandfather has been meditating for 40 years, and he always loves reminding us - “Eating, sleeping, drinking, just that I feel is already very good, life is very simple.” From this, we can learn that we don’t have to go chasing after things. There is a natural happiness that we can all find when we rest in the moment. But if we believe the story that we can only be complete if we get this or that, then unfortunately, we’ve already lost that happiness.
</p>
<p>&emsp;I find that we can already be genuinely happy just taking in everything we have in the present. For example, when taking a walk, we feel the soft breeze, the warmth of the sun on the skin. We feel how the feet feels on the floor, the vibrant colours of the trees. This is the natural happiness here that I feel like everyone has experienced before - just from  being present.
</p>
<br>

<h1 style="font-size: 1.25rem; font-weight: bold;">Waking Up</h1>

<p>To live we do not need to go skydiving, we do not need to climb mount everest or become the founder of a large corporate business. To live we only need to live now, then we can begin to understand ourselves. The main reason sports are so enjoyable, I find, is because our attention is only on the game, the dribbling the basketball or spiking the volleyball, in that moment we are not lost in thought. We have to be present to win. So mindfulness is asking us to wake up. Every time we notice that we are lost in thought - just right now, in this moment, and come back to the Now, we wake up. It really does feel like this in my experience, every time I realize I’m lost thinking about something else and come back to the present,  it does feel like I was just in a dream, but when I come back to the present, it feels like waking up.</p>
<br>

<h1 style="font-size: 1.25rem; font-weight: bold;">The Space in Between the Thoughts</h1>

<p>Have you noticed how noisy the mind seems to be. It's preoccupied with things to do, or things that have already happened. The voice in your head is always commenting and judging. If we try to stop it, we will realize we can't actually control it.
The problem is actually that we think that <i>we are</i> the voice in our head. But one of the first insights in meditation practice is that the thoughts and feelings come and go on their own accord. When we realilze this, we are not as inclined to follow after every thought. We simply watch, without believing the stories that the thoughts tell us.
So sit down, and try to notice any breaks in between the thoughts, any areas of silence that you can find. 
Like when sitting in the quiet forest, only the soft sounds of the birds chirping. The leaves falling and drifting to the ground. The deep breeze rustling the trees. All in silence. </p>

<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">Noticing </h1>

<p>Mindfulness is simply noticing. You can notice how it feels to sit on this chair, you can notice any sounds you hear, you can notice the bright vibrant colors all around you. It&#39;s all to be found here. Another thing you may notice are any thoughts that come around. Even while reading this book. Any feelings that you can find. Comfortable or uncomfortable. Whatever you notice, that is fine. Take in a deep breath and take in all that&#39;s around you, and in you. </p>



 
  `,
    imageUrl: '/mindfulness.webp',
  },
  "The Present": {
    practice: `
    
    <h1 style="font-size: 1.25rem; font-weight: bold;">Getting in Touch with Awareness</h1>
    <p>&emsp; Awareness is the main factor of mindfulness practice. This is because it is always with us. It is the factor of knowing. Take sound for example, when you hear crickets chirping there is the awareness that "oh the crickets are chirping." When walking you know you are walking, when you are reading these words there is the awareness that is there, registering the words.</p>
    <p>&emsp; So you see mindfulness is just about getting in touch with this witness. Just noticing everything as it passes by. It's quite natural. I find it very helpful to just slow down into the moment. To let go and let be whatever is present. To just notice everything that is here. </p>
    <p>&emsp; We relate to this world in terms of me. We think we are the ones thinking the thoughts. But really, if we take a closer look thoughts come and go on their own accord, you can't really control each small thought as it comes by. Feelings are like this too. When there is anger, we think "I am angry." But really, taking a closer look we see that there is no one behind "anger." It is just a bundle of thoughts and sensations. A tight stomach, hot breath, a story, some fear. The more we look the less solid things become, and the more light we become.</p>
    <p>&emsp; Awareness is our innate nature. It is all round and yet an intrinsic part of us. Pure awareness is what we are before we become lost in thought, lost in a dream. It is not something to strive towards because it is right here right now. When we are able to watch everything with a heart that is at peace, when we can rest in each moment just as it is, realizing that it is truly complete, then we can find ourselves.</p>
    <p>&emsp; When you look at something, a tree for example, the knowing is there, and yet there is no one knowing it. This is the power of the pure awareness that is here and now. Unity is our nature before we became identified with a limited body and name that comes with ambitions, goals, fears, desires and isolation. Listen, there is just the sound, no one there to listen. </p>
    <p>&emsp; So awareness is always here, we can be aware when washing the dishes, talking to someone, doing work. We can sharpen awareness through concentration practice. Then this knowing will always be with us, like a good friend guiding us along the way. It is a wisdom that sees each situation clearly with the thoughts and feelings that accompany it, with a light and loving heart that holds it all.</p> 
    
    
    
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Slow Down</h1>
    <p>Slow down, can you wait, can you stay balanced, can you feel the Stillness in this moment.</p>
    <p>Most of us go about our whole lives rushing here and there, tripping over the chair to quickly finish the next task. The problem with this is that is causes contraction both in the body and mind, you can feel it. When our mind is straining to get somewhere, or lost somewhere else, then we are stuck. We have lost this present moment.</p>
    <p>I find it is very helpful to just be mindful of each urge as it arises, to stay balanced in the midst of it all. A natural sense of lightness, balance and joy naturally arises when we stop, and feel the deep that is in this eternal present</p>


    <h1 style="font-size: 1.25rem; font-weight: bold;">Savouring Every Moment</h1>
    <p>&emsp; When we begin to become mindful we are able to enjoy every moment as it is. It may take a long time for someone to realize that only the present moment can be savored. To see the morning sun. The soft trees rustling. How beautiful it is to see a bird fly across the sky, the sun set. Maybe they may have gone through their lives only half there. When spending time with their family, their minds are off somewhere else. When walking in a trail, or doing the dishes their minds are off thinking about things like work, school, song lyrics, conversations. Then one day they may come to see that life is to be lived right here right now. Where else can you go? </p>
<p>&emsp;Try this out, whatever you&#39;re doing place your full attention on it, really take in every part of it. For example when talking to someone you are listening to what they are saying and not thinking of what you are going to say next. When peeling an orange you can notice the bright color of the skin, the feeling as you take off the peel. When eating notice the sweet taste and the juicy texture of the flesh. When our full attention is on whatever we are doing then we can say we are truly doing it. Have you ever peeled an orange before? Have you ever walked in a trail, or washed the dishes? When we are in the moment a genuine gratitude and love to just be in this world fills our lives.</p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">The Painful Past</h1>
<p>As humans we spend a surprising amount of time in the imagined past. A lot of the time, without even noticing, we&#39;re trapped wandering around thinking of something that happened from a few moments ago, to a lifetime ago. Not only does it take us away from the vibrancy of the present moment, it can also raise a lot of “should have&#39;s” or “I could have done&#39;s”, all of which are entirely useless and very painful. </p>
<p>&emsp;When the time comes to let go, we let go. If we don't then it hurts doesn't it? We are able to move gracefully through life, with its changes, beginnings, and endings. </p>
<p>&emsp;Our mind also loves comparing “what happened”, to “What is going to happen.” When lost in the past, it can start to project into the future. It creates arbitrary worries for itself. For example, it may worry that its story of what happened, might happen again some time in the foreboding future. Some people think that learning from the past means remembering all the mistakes they made, and then creating safeguards so it doesn&#39;t happen again. I always think this is quite funny, there is no need to bring up painful memories. Just do what you know is right in the moment and everything else will naturally flow smoothly. In every path you take, ask yourself, does this path have a heart? Is it good, unselfish, right?</p>
<p>&emsp;So it&#39;s really easy to come out of the painful past. Just notice that you&#39;re lost in a thought and come back to reality, to the present moment. Look, the sky is blue! The grass is green! The sun is bright and it&#39;s all here for us to enjoy.</p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">The Fearful Future</h1>
So now we come to the “what if&#39;s”, and the “I don&#39;t want this to happen&#39;s.” A lot of us spend so much time planning out every single step, worrying about all the not-so-good things that can happen, or the things that won't happen. It&#39;s like we&#39;re imagining a field of bombs ahead of us. Living like this is so unnecessarily painful. We don&#39;t need to go imagining a scary future and then worry about what we think is going to happen if we don&#39;t do this or that. Just do what you know is right in the moment, fulffil any responsibilities, and everything else will follow through surprisingly smoothly. Trust life to take you where you need to go, let go of worrying about the future or the past, and just enjoy watching all the things that arise in this moment. Thoughts, feelings. it's all happening Now. 
                `,
    imageUrl: '/present.png',
  },
  "Meditation": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Tips and Tricks</h2>
    <p>&emsp; As we have established, it is not always easy to maintain awareness of the breath. Here I have provided some tips for returning back to the present, not only in meditation, but in everyday life</p>
    <ul>
    <li>SAW: I created this acronym for whenever I was overwhelmed by work, or just life in general. S for Stop. Stop the doing and worrying, sit still. A for 'be Aware'. Watch the sensations around the body, be aware of the feelings of of worry or tension. Watch the thoughts come and go instead of following after them. W for "Watch the breath." Place your attention on the in and out of the breath, let the mind quiet down as you become centered.</li>
    <li>Counting: On the in breath silently count one, and on the out breath - two... Continue counting like this for each breath until you reach 10, then start again from one. Counting is helpful for keeping attention on each breath especially when the mind keeps drifting off. Sometimes you may lose count, 6..7..9...11 wait where was I? So if this is the case, then just return your attention and start again from one.</li>
    <li>Relaxed consistency: Concentration is not about force or striving, it is only patiently returning each time we notice we are lost. Jack Kornfield compared this to training a puppy. You put the puppy on the mat and say "sit." Then it jumps up, and start wandering around the house, so you pick it up, and place it back on the mat. This is the way to make good progress</li>
    <li>Full body breathing: If we feel we are too tight then we can try expanding our awareness to the whole body. When breathing in, notice how it feels when the air enters the lungs, stomach, body. When breathing out, notice how it feels to relax within the body. You can also expand your attention to sounds, I find this helps take away a lot of the tension and striving. </li>
    <li>Re-focusing: Sometimes after a period of stillness the mind will drift off again. When this happens take a deep breath, and let all the air out of your lungs. This will help relax and refocus the attention on the breath again.</p>
    <li>Good Posture: You can imagine a line from the ceiling down to the top of your head keeping your spine upright. At the same time, your body is grounded and still in the seat. Halfway between heaven and earth they say.</li>
   
    </ul>

     
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">What is Meditation</h1>
    <p>We settle down on our meditation cushion or chair, keep our back straight, our body grounded. The awareness naturally falls to the in and out of the breath and how it feels through the body. With each in breath we feel the air fill our lungs and belly, with each out breath we relax once again. Our attention may naturally fall onto a specific part of this breathing process, how the breath feels through the nose for example. Breathing in we know we are breathing in, breathing out, we know we are breathing out. The thoughts slow down giving space to silence and calm. We may notice we are smiling as a natural sense of happiness and lightness arises from the silence. </p>
  <p>&emsp;For most people when we being meditation practice, the thoughts seem to be endless. We sit down and think "Ok let's try this out, relax and be at peace - got it." Then after a few seconds of watching the breath, a thought arises - "I have to finish my english assignment" then after a few more seconds, "Am I doing this right?" But don't worry, there is no right or wrong in meditation as long as we keep returning our attention back to the present moment. When I first started meditating I already felt it was a miracle if I could stay focused for even 5 breaths. So we have to be patient, it's like learning to play the piano. In the beginning we may struggle to find the right fingering and the notes are sloppy, but after consistent practice we will get the hang of it, and the songs will begin to sound better.  </p>
  <p>&emsp;So this is training our awareness and concentration, and it has helped me greatly over the months and years I have been meditating. Before I started meditating I would feel stressed, bored, angry, and confused easily. Now with a daily meditation practice things feel lighter, happier, and more free. I've learned to relax, and to laugh at the things I once felt stressed or unsure about. These are just some of the benifits of meditation.   </p>
  <p>&emsp;We will notice subtle changes in the way we relate to the world. We won't want to rush around as much, maybe we'll take some time to appreciate the tree in our backyard. We're not as lost in past or future so we don't create as much unnecessary stress for ourselves. </p>
<p>&emsp;Most people start with 5-10 minutes a day and slowly increase the time from there. 15 minutes, 20 minutes, 30 minutes. </p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">How to Meditate</h1>
<p>&emsp;To start find a nice comfortable spot to sit with minimal disturbance. Keep your back straight, this is important for keeping relaxed and balanced. You can sit on the edge of the chair or on a cushion. </p>
     <p>&emsp;Take 2-3 deep breaths to relax then gently place your attention on the in and out of the breath.</p>
     <p>&emsp;Feel as the cool air comes in and as the soft air comes out. Feel the slight pause in between the in breath and the out breath.</p>
     <p>&emsp;You are aware of the breath and you know it clearly. When the breath in coming in, you know it is coming in. When it is coming out you know it is coming out. You may also find it helpful to think "in" on the in breath, and "out", on the out breath.</p>
     <p>&emsp;Let the breathing flow naturally and easily. You may feel that it is too long or short, but just let it be. Through practice the breath will be able to flow comfortably without any interference.</p>
     <p>&emsp;As you continue watching the in-breath and the out-breath, various thoughts will arise. The mind will wander just like it always does throughout the day, thinking about this and that. In meditation we can be aware that we are lost in thought. Once we notice that we have wandered off we gently bring our attention back to the breath. </p>
     <p>&emsp;Returning to this breath over and over is the essence of meditation. It is like training a muscle. We must work at it over and over again, then we will become strong. After meditation we feel well rested and at peace. Our daily lives become clearer. Our body is more relaxed throughout the day. Subtle thoughts or ideas that once ran underground our attention, now appear clearer to us. We see that every painful feeling can only come from believing a stressful thought. With this stillness, we are able to keep watchful and calm, seeing any stressful thoughts or feelings, and letting them go.</p>
     <br>
     <h1 style="font-size: 1.25rem; font-weight: bold;">Clarity</h1>
     <p>&emsp;It can be compared to a lake. Usually, in our every day lives, the lake is muddy and wavy so when we walk in it we can&#39;t see all the various garbage, the fish, the crabs that are at the bottom of the floor. So we are constantly stepping on them. It's murky, not so nice. When we meditate we continuously return to the object of concentration to make the water still and let everything settle down so we can look through the crystal clear water and avoid anything that would hurt to step on. We are wise. Now that the lake is still and clear we can actually enjoy our time here. The lake is our mind, the fish and crabs are our thoughts. Stepping on them represents believing our painful thoughts and following after them. This is why we remain mindful throughout the day, so we know what is going on and we are able to remain calm and at ease. </p>
     <p>&emsp; Our life can be compared to the breath. We are clear about what is going on in every moment. When the breath is going in we know it is going in. Going out, we know it is going out. If it is short, we know it is short. If it is long we know it is long. So too, we are clear about every situation. If there is anger, or stress, or boredom, we can name it-"boredom", or "tense." When doing something we can be clear about are intention. Why are we doing this, is it out of fear, anger? Or is it our of love, and goodness. </p> 
      <p>&emsp;I like meditating in the morning, right when I get up from bed, then I go for a walk outside. I find it is very good. Although you can find what time works best for you. Meditation and getting still is very good to have it as a part of your life.  </p>
      

    `,
    imageUrl: '/meditation.png',
  },
  "Thoughts": {
    practice: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Catch Every Thought</h1>
      <p>&emsp;This is a great exercise I still do to this day. 
      Sit down in a comfortable position where your back is straight and as always take 2-3 deep breaths to quiet the mind. 
      Bring your attention to any thoughts that come up. Bring your attention to all those clouds up there and see what you can find. 
      As you continue watching the mind it will become easier over time, and each thought will be easier to catch. 
      For example, if you find the thought, “This is too hard” just notice the thought come up and remain in the silence.
      So continue to watch the mind, and notice every thought that comes up.
      You can also try sitting down and thinking this-”I wonder what my next thought will be?” 
      </p>
    `,
    text: `
    <h1 style="font-size: 1.25rem; font-weight: bold;">Noticing the Thoughts</h1>
    <p> 
As you get to become more aware of all the thoughts that arise moment to moment, you may realize that they&#39;re actually running your life. All these thoughts of “I should…” or “I need to…” or “If I don&#39;t”, or “They should be more…” these are the thoughts that take us away from the beauty of this moment and into a past or future that really, only exists in your head at this moment. 
You can think of these thoughts as a scared child, they may be really worried, and they're telling you all about it. But you don&#39;t have to buy into these thoughts or judgments, just simply notice them. 
We are the space in which the thoughts arise. Each thought is like a small cloud momentarily blocking the wide open sky, once we notice each thought we no longer have to be trapped by it. </p>
<br>
    <h1 style="font-size: 1.25rem; font-weight: bold;">Life Without Problems</h1>
      <p>&emsp;Problems can only exist when we believe a thought. When we start worrying about what is going to happen, or what has already happened then we are lost, caught in a dream. Our thoughts tell us painful and scary stories about our lives- ”It should have happened like this”, or “What if this happens?”  The good news is that it can&#39;t be anything more than just a thought. If we get caught up in these stories of past and future then it is like we are trapped in a movie theatre, we know nothing but the story that we are watching. We just don't see the present moment. In mindfulness, we simply notice the thought. When we are aware, we see that these are just thoughts, they don&#39;t contain any truth. We don&#39;t have to believe them. When we see a thought for what it is then we are awake to the simple truth of what is in front of us. A tree, a table, a person. Everything is as it is. </p>
      <p>&emsp;For example, what happens when you believe the stressful thought-” My parents should be more understanding.” It hurts right? When you don&#39;t believe the stories your mind tells you, there isn&#39;t a problem in the world. You're fine to experience everything as it is. You&#39;re able to have a good look at what is without resistance. A very good question to ask yourself is- “Is it true?” Byron Katie, in one of her wonderful books, “A Mind at Home With Itself” introduces us to inquiry. If you find a stressful thought, just question it. Then eventually every stressful thought will unravel itself before it can have any effect on you. </p>
      <i>Eventually through watching myself I realized that life was really simple. If I believed a thought, then it hurt, but if I didn't then there wasn't a problem in the world. </i>
      <p>&emsp;Many of us have the thought- “I am not good enough.” Many stressful thoughts stem from this one thought. “I should be more…”, “I should have more…” Watch what happens when you believe these thoughts, it doesn&#39;t feel good does it? The truth is that these are just stories, and when we stop believing them, we'll realize we can actually be very happy. </p>
<p>&emsp; When we compare ourselves with others we end up feeling either inferior or superior. We either end up as the lesser or as the better. These comparisons constantly put us in a vulnerable position. Any comparison argues with the truth. Things are as they are, there is no need to make higher or lower, smaller, or bigger, greater, or lesser. </p>
<p>&emsp;Be aware of all the alluring stories that your thoughts tell you. We have been following after these stories all of our lives. Now we can be aware of these lies that our thoughts tell us. When we meet each thought with a knowing awareness then we no longer have to be trapped by them. Then we can be free from anything that argues with what is. </p>
<p>&emsp;This is why meditation is so important, it allows us to get still enough to see the various thoughts that arise. As our mindfulness strengthens through meditation we are able to watch the mind and the subtle thoughts and ideas that pass through it. ”I need”, “They should be more.” Through this awareness we see that these are just thoughts. We once believed them, took them to be ours, but now we are simply aware of each small passing thought. It is like looking through a clear lake, everything is obvious to us now. We know what is going on. </p>
<p>&emsp;Our world is a reflection of our mind. An angry person will see the world as unfair and full of frustrating situations. A nervous person will see the world full of scary situations that they have to evade. A lighthearted person will see a good world. One that is at peace is also at peace with everything.  </p>
    `,
    imageUrl: '/thoughts.png',
  },
  "Feelings": {
    practice: `
    <h2 style="font-size: 1.25rem; font-weight: bold;">Getting to Know Feelings</h2>
    <p>&emsp;Here is a good exercise where we can sit and observe any of these feelings without judgment, with curiosity and investigation. </p>
      <p>&emsp;This exercise can be done when you are feeling a particular emotion such as stress or anger. Sometimes you may sit down and realize that there is actually some leftover tension, or uncomfortable feeling that we didn't even know what there. Getting still, we come to know ourselves as the stillness behind the feelings. The feelings are like clouds for us to notice. We are the sky behind them. Notice how each feeling is fleeting, it&#39;s always changing ever subtly. Sometimes it&#39;s like a ripple in the water, other times it&#39;s more intense. Just remain still, and let go</p>
      <p>&emsp;When you sit down you don&#39;t have to do anything in particular. Just be. Then if there is something tugging at your attention-stress, frustration, or whatever, just notice it. Don&#39;t make stories, justifications, or judgments out of anything. Simply feel what you feel in this moment, that&#39;s all. Whatever it is, however strong it feels, resist nothing. Just be. </p>
    
    `,
    text: `

      <h1 style="font-size: 1.25rem; font-weight: bold;">Feelings</h1>
      <p>Just as you can notice your thoughts you can also notice any feelings. 
As you become more mindful of your feelings you may find that a lot of them are slightly uncomfortable. Little areas of stress or tension around the body that were always there, but now you can be aware of them. 
If you can be aware of these small areas of stress, then you have already made very good progress. This is the first step to balancing the feelings. So from time to time, you can place your attention on your body, and become aware of any of these tensions.</p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">Balancing What's Reactive</h1>
<p>As your awareness of these feelings grows you may notice that you are stuck in a tiring whirlwind of reaction.  Every small thought, feeling, and judgment, there is always a reaction that follows. So you begin to balance what&#39;s reactive. You are aware of these thoughts and feelings but do not let any of them affect you; you do not follow after them. You remain balanced and calm, neither resisting nor grasping, noticing every reaction that follows.
I find meditation really helps, it calms the mind so it becomes easier to notice these things. It is like a beach. When there are many waves it is not as easy to see through the water. But when the ocean is calm, with only some movement in the water we can look through the water and see everything with crystal clarity, all the seashells, the fish, the garbage. And we can pick them up, clean up the beach that is our mind. So whether you are watching your feelings, feeling the sensation of the breath, or listening to sounds, you remain at ease throughout your practice.  
</p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">Thoughts and Feelings</h1>
      <p>A feeling comes from a thought. If there is a thought then there is an accompanying feeling. We usually notice the feeling first before the thought. The feeling lets us know that we are caught in a stressful thought. Mindfulness involves being aware of how you are feeling throughout the day. Is there stress, sadness, or anger? Behind every feeling is a thought, so just trace it back to its origin. Why is there stress? What thought are you believing? Once we understand that feelings can only come from believing a thought that argues with reality then we can begin to let go.</p>
<p>&emsp; People can go around their entire lives not knowing that they don&#39;t have to feel stressed, they don&#39;t have to feel angry or worried. These feelings, once we see them clearly can be let go of. </p>
<p>&emsp;When we resist something it hurts. Suffering can only come from resistance. For example, let&#39;s say you only slept 3 hours last night and the next day you&#39;re tired. The tiredness is one thing, your resistance to it is another. If you are simply aware of the tiredness then there isn&#39;t a problem. You just know how it feels, ok this is what tiredness feels like. You don&#39;t add any resistance onto it, “This sucks”, “I&#39;m not getting enough sleep.” When we are able to go about life without resistance then everything can be lived with a sense of acceptance. </p>
<p>&emsp;If something happens, then that&#39;s that. If you resist it then it hurts. The way I see it, you either have two choices let be, or to add unnecessary resistance onto the situation. Just continue letting go. It may be difficult but don&#39;t worry, whatever feelings come up don&#39;t act on them, just let them be. </p>
<p>&emsp;When your mind is open to whatever life brings you then you can approach everything with a brave curiosity. When you are annoyed you know you are annoyed, when you are happy you know you are happy. When there is stress, you know there is stress. You are aware of what is going on. How does it feel in the body? Where is this feeling coming from? You can start to investigate. Every feeling comes from believing a thought. </p>
<p>&emsp;Now whatever thought or feeling arises we can let it go. We don&#39;t just sit around and continue feeling bad. We get aware, then we accept whatever is in this moment. We are able to go about life without resistance, just observing everything that comes with a clear mindfulness.</p>

    `,
    imageUrl: '/feelings.png',
  },
  "Everyday Peace": {
    practice: `
      <h2 style="font-size: 1.25rem; font-weight: bold;">Good Books To Read</h2>
      <p>"The Power of Now" - Eckhart Tolle</p>
      <p>"A Path With Heart" - Jack Kornfield</p>
      <p>"Being Dharma" - Ajahn Chan</p>
      <p>"The Voice of Knowledge: A Practical Guide to Inner Peace" - Miguel Ruiz </p>
      <br>
      <br>
      <h2 style="font-size: 1.25rem; font-weight: bold;">The Peace in Us</h2>
      <p>Here we sit and watch</p>
      <p>As the sun goes down</p>
      <p>The water stills</p>
      <p>The sky grows silent</p>
      <br>
      <p>The morning sun</p>
      <p>Illuminates the night sky</p>
      <p>It is here we find peace</p>
      <p>In the midst of the mind</p>

    `,
    text: `
      <h1 style="font-size: 1.25rem; font-weight: bold;">Everyday Peace</h1>
      <p>&emsp;Through practice I'm starting to discover that freedom can only be found here and now, not tomorrow, not yesterday, not on a mountain or in a cave. It doesn&#39;t come when we achieve this or that, it doesn&#39;t come when we get the things we want. We think that first we have to get everything in our world right, get the things we want, and then we can be at peace. Then after a lot of this we start to see that this isn&#39;t the path to peace. So where can we find rest? It's just right here. Let&#39;s start from within. Be aware, and let go. Then we will know a true happiness that doesn&#39;t fall away. </p>
      <br>
      <h1 style="font-size: 1.25rem; font-weight: bold;">Peace Every Moment</h1>
<p>&emsp;Mindfulness is what we found when we first started walking this path. It&#39;s nothing special and yet it&#39;s perfect. When we are mindful then there is nothing else to do. If we remain mindful moment-to-moment then our practice will progress naturally. Situations, thoughts and feelings will become clearer. If something comes up then we are able to do what is necessary with wisdom and a light heart. When we are at peace then naturally we are able to live in harmony with others. When we start to love what is, then it follows that we love everything we see. We can listen to everyone with a clear mind and a kind, understanding, open heart.</p>
<br>
<h1 style="font-size: 1.25rem; font-weight: bold;">Letting Go</h1>
<p>&emsp;As we continue to be mindful we will naturally start to let go. Holding on to something hurts, so we let go. Then we feel lighter, then we can know a complete peace. When we feel anything other than ok then it means we are still holding on to something. We are a bit stuck. So let go of that too. Letting go doesn't mean ignoring, or pushing away. Actually, letting go requires a full awareness of feelings and thoughts. Once we see that every experience is constantly changing, we will naturally surrender.</p>

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
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-100 to-blue-200 w-full">
      <div className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center w-full bg-white py-4 shadow-md z-10">
        <Link className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" href="/">
        <FontAwesomeIcon icon={faHome} />

        </Link>

        
        <nav className="flex flex-wrap justify-center md:justify-around w-full md:w-auto">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`px-4 py-2 m-1 md:mx-2 rounded-lg ${
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
      <div className="flex flex-col items-center mt-24 pt-20 max-w-6xl px-4 md:px-0 w-full">
        <div className="flex flex-col items-center md:flex-row md:items-start w-full">
          <div className="text-left p-4 w-full md:w-1/2">
            <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].text }} className="text-gray-800"></div>
          </div>
          <img src={sections[selectedSection].imageUrl} alt="Mindfulness" className="mt-4 max-w-full md:max-w-md rounded-lg shadow-lg md:ml-4" />
        </div>
        <div id="practice-section" className="bg-white p-6 rounded-lg shadow-md max-w-full text-center mb-8 mt-8">
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].practice }} className="text-gray-800"></div>
        </div>
      </div>
      <button
        onClick={handleNextPageClick}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Next Page
      </button>
      <footer className="mt-8 text-center text-gray-500">
        Made by Joshua Chou © {new Date().getFullYear()}
      </footer>
    </div>
  );
  
  
};

export default MindfulnessCourse;