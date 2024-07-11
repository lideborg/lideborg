let selectedWord1 = '[word1]';
let selectedWord2 = '[word2]';
let dynamicWord1 = '[dynamicWord1]';
let dynamicWord2 = '[dynamicWord2]';
let selectedNameText = '';

// Predefined texts for each name
const nameTexts = {
    'Lars': 'The overall style of the photography should feel quite trippy and have small diamonds up in the corners, there should be a slight tone of fog and clouds.',
    'Anna': 'The overall style of the photography should feel quite alienated and have small pixels up in the corners, there should be a slight tone of red sparks.',
    'Johan': 'The overall style of the photography should feel quite minimal and have small pink ribbons up in the corners, there should be a slight tone of purple haze.'
};

// Predefined lists of words for each button
const wordLists1 = {
    'happy': ['loving', 'infatuated', 'enchanted', 'adorable'],
    'joyful': ['shocked', 'terrified', 'surprising', 'alarmed'],
    'cheerful': ['cool', 'stylish', 'sunny', 'confident']
};

const wordLists2 = {
    'dog': ['thrilled', 'fun', 'rollercoaster', 'rowdy'],
    'puppy': ['relaxed', 'sunny', 'beachy ', 'vacation mode'],
    'hound': ['hopeful', 'gay', 'rainbow', 'nature']
};

function setRandomWordFromList1(key, button) {
    selectedWord1 = getRandomWord(wordLists1[key]);
    updateButtonSelection('word1', button);
    generatePrompt();
}

function setRandomWordFromList2(key, button) {
    selectedWord2 = getRandomWord(wordLists2[key]);
    updateButtonSelection('word2', button);
    generatePrompt();
}

function getRandomWord(wordsArray) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
}

function updateDynamicWord1() {
    dynamicWord1 = document.getElementById('dynamicWord1').value;
    generatePrompt();
}

function updateDynamicWord2() {
    dynamicWord2 = document.getElementById('dynamicWord2').value;
    generatePrompt();
}

function updateNamePrompt() {
    const selectedName = document.getElementById('nameSelect').value;
    selectedNameText = nameTexts[selectedName] || '';
    generatePrompt();
}

function updateButtonSelection(wordGroup, button) {
    const buttons = document.querySelectorAll(`button[data-group=${wordGroup}]`);
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function generatePrompt() {
    // Create the prompt
    const prompt = `A photography of a ${dynamicWord1} shot in an environment with hints in the background of a city or a place like ${dynamicWord2}. The item should feel ${selectedWord1} and have details that makes it feel ${selectedWord2}. ${selectedNameText} --ar 5:4`;


    // Display the prompt
    document.getElementById('promptOutput').innerText = prompt;
}

function copyPrompt() {
    const promptText = document.getElementById('promptOutput').innerText;
    navigator.clipboard.writeText(promptText).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
