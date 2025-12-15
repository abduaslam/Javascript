let btn=document.querySelector("#new-qoute");
let qoute=document.querySelector('.qoute');
let person=document.querySelector(".person");

// Array of 20 names with their descriptions
const people = [
  { name: "Abdu", description: "A humble and dedicated person who values learning and growth." },
  { name: "Amina", description: "Kind-hearted and intelligent, known for her compassion and creativity." },
  { name: "Yusuf", description: "A natural leader with strong problem-solving skills and patience." },
  { name: "Fatima", description: "A graceful and wise individual who inspires others through her actions." },
  { name: "Omar", description: "Ambitious and thoughtful, always striving to make a positive impact." },
  { name: "Layla", description: "Energetic and curious, with a love for exploring new ideas." },
  { name: "Hassan", description: "Reliable and focused, admired for his honesty and strong work ethic." },
  { name: "Zainab", description: "Empathetic and confident, a strong communicator and motivator." },
  { name: "Ali", description: "Brave and determined, someone who takes challenges as opportunities." },
  { name: "Maryam", description: "Intelligent and caring, balancing logic with kindness." },
  { name: "Ibrahim", description: "Calm and wise, a problem solver who values peace and clarity." },
  { name: "Sara", description: "Creative and positive, always ready to help others grow." },
  { name: "Khalid", description: "Courageous and loyal, respected for his determination and leadership." },
  { name: "Aisha", description: "Bright and optimistic, inspiring confidence in everyone around her." },
  { name: "Bilal", description: "Disciplined and humble, with a deep sense of purpose and integrity." },
  { name: "Huda", description: "Compassionate and insightful, guiding others with wisdom and care." },
  { name: "Ismail", description: "Innovative and curious, with a natural gift for technology and design." },
  { name: "Nadia", description: "Gentle yet strong, always finding balance between heart and mind." },
  { name: "Tariq", description: "Ambitious thinker with a passion for progress and positive change." },
  { name: "Salma", description: "Peaceful and elegant, spreading kindness and inspiration wherever she goes." }
];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*people.length);
    qoute.innerHTML=people[random].description;
    person.innerHTML=people[random].name
})
