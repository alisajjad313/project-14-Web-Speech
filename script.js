// //Get all Dom elements
// const main= document.getElementById('main');
// const voiceSelect=document.getElementById('voices');
// const toggleBtn=document.getElementById('toggle');
// const closeBtn=document.getElementById('close');
// const customText=document.getElementById('text');
// const readBtn=document.getElementById('read');
// const customTextDiv=document.getElementById('custom-text');

// const data=[
//     {
//         image:'./images/angry.jpg',
//         text:"I'm Angry"
//     },
//     {
//         image:'./images/drink.jpg',
//         text:"I'm Thirsty"
//     },
//     {
//         image:'./images/food.jpg',
//         text:"I'm Hungry"
//     },
//     {
//         image:'./images/grandma.jpg',
//         text:"I want to go to Grandma's"
//     },
//     {
//         image:'./images/happy.jpg',
//         text:"I'm Happy"
//     },
//     {
//         image:'./images/home.jpg',
//         text:"I want to go home"
//     },
//     {
//         image:'./images/hurt.jpg',
//         text:"I'm Hurt"
//     },
//     {
//         image:'./images/outside.jpg',
//         text:"I want to go outside"
//     },
//     {
//         image:'./images/sad.jpg',
//         text:"I'm Sad"
//     },
// ]
// data.forEach(createBox)
// function createBox(imageOb){
//     console.log(imageOb)
//     const box=document.createElement('div')
//     box.classList.add('box');
//     const {image , text}=imageOb
//     box.innerHTML=`
//     <img src="${image}" alt="${text}"/>
//     <p class="imageinfo">${text}</p>
//     `

//     box.addEventListener('click',()=>{
//         setMessage(text)
//         speakText()
//     })

//     main.appendChild(box)
// }
// const message=new SpeechSynthesisUtterance();
// //2 function to get voices
// function populateVoiceList() {
//     let voices = speechSynthesis.getVoices();
  
//     for (let i = 0; i < voices.length; i++) {
//       const option = document.createElement("option");
//       option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
//       if (voices[i].default) {
//         option.textContent += " — DEFAULT";
//       }
  
//       option.setAttribute("data-lang", voices[i].lang);
//       option.setAttribute("data-name", voices[i].name);
//       voiceSelect.appendChild(option);
//     }
//   }
//   //Execute populateVoiceList function
//   populateVoiceList();
//   if (speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
//   }

//   //3 function
// function setMessage(text){
//     message.text= text;
// }
// //4 function 
// function speakText(){
//     speechSynthesis.speak(message);
// }
// //Event Listeners
// //1
// toggleBtn.addEventListener('click',()=>{
//     customTextDiv.classList.toggle('show')
// });
// //2
// closeBtn.addEventListener('click',()=>{
//     customTextDiv.classList.remove('show')
// });
// //3
// speechSynthesis.addEventListener('voiceschanged',populateVoiceList)
// //4
// readBtn.addEventListener('click',()=>{
// setMessage(customText.value);
// speakText();
// })

// Get all DOM elements
const main = document.getElementById('main');
const voiceSelect = document.getElementById('voices');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const customText = document.getElementById('text');
const readBtn = document.getElementById('read');
const customTextDiv = document.getElementById('custom-text');

const data = [
    {
        image: './images/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './images/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './images/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './images/grandma.jpg',
        text: "I want to go to Grandma's"
    },
    {
        image: './images/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './images/home.jpg',
        text: "I want to go home"
    },
    {
        image: './images/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './images/outside.jpg',
        text: "I want to go outside"
    },
    {
        image: './images/sad.jpg',
        text: "I'm Sad"
    },
];
data.forEach(createBox);

function createBox(imageOb) {
    const box = document.createElement('div');
    box.classList.add('box');
    const { image, text } = imageOb;
    box.innerHTML = `
    <img src="${image}" alt="${text}"/>
    <p class="imageinfo">${text}</p>
    `;

    box.addEventListener('click', () => {
        setMessage(text);
        speakText();
    });

    main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();
let voices = [];

// 2. Function to get voices and populate the dropdown
function populateVoiceList() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = ''; // Clear previous options
    voices.forEach((voice) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        voiceSelect.appendChild(option);
    });
}

// Execute populateVoiceList function
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// 3. Function to set the message text
function setMessage(text) {
    message.text = text;
}

// 4. Function to speak the text with the selected voice
function speakText() {
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    message.voice = voices.find(voice => voice.name === selectedVoice);
    speechSynthesis.speak(message);
}

// Event Listeners
// 1
toggleBtn.addEventListener('click', () => {
    customTextDiv.classList.toggle('show');
});

// 2
closeBtn.addEventListener('click', () => {
    customTextDiv.classList.remove('show');
});

// 3
speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

// 4. Read the custom text with the selected voice
readBtn.addEventListener('click', () => {
    setMessage(customText.value);
    speakText();
});
