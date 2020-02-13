let SynthPad = (function() {
  // Variables
  let myCanvas;
  let frequencyLabel;
  let volumeLabel;

  let myAudioContext;
  let oscillator;
  let gainNode;


  // Notes
  let lowNote = 261.63; // C4
  let highNote = 493.88; // B4


  // Constructor
  let SynthPad = function() {
    myCanvas = document.getElementById('synth-pad');
    frequencyLabel = document.getElementById('frequency');
    volumeLabel = document.getElementById('volume');

    // Create an audio context.
    myAudioContext = new AudioContext();

    SynthPad.setupEventListeners();
  };


  // Event Listeners
  SynthPad.setupEventListeners = function() {

    // Disables scrolling on touch devices.
    document.body.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);

    myCanvas.addEventListener('mousedown', SynthPad.playSound);
    myCanvas.addEventListener('touchstart', SynthPad.playSound);

    myCanvas.addEventListener('mouseup', SynthPad.stopSound);
    document.addEventListener('mouseleave', SynthPad.stopSound);
    myCanvas.addEventListener('touchend', SynthPad.stopSound);
    console.log("cool story")
  };


  // Play a note.
  SynthPad.playSound = function(event) {
    oscillator = myAudioContext.createOscillator();
    gainNode = myAudioContext.createGainNode();

    oscillator.type = 'triangle';

    gainNode.connect(myAudioContext.destination);
    oscillator.connect(gainNode);

    SynthPad.updateFrequency(event);

    oscillator.start(0);

    myCanvas.addEventListener('mousemove', SynthPad.updateFrequency);
    myCanvas.addEventListener('touchmove', SynthPad.updateFrequency);

    myCanvas.addEventListener('mouseout', SynthPad.stopSound);
  };


  // Stop the audio.
  SynthPad.stopSound = function(event) {
    oscillator.stop(0);

    myCanvas.removeEventListener('mousemove', SynthPad.updateFrequency);
    myCanvas.removeEventListener('touchmove', SynthPad.updateFrequency);
    myCanvas.removeEventListener('mouseout', SynthPad.stopSound);
  };


  // Calculate the note frequency.
  SynthPad.calculateNote = function(posX) {
    let noteDifference = highNote - lowNote;
    let noteOffset = (noteDifference / myCanvas.offsetWidth) * (posX - myCanvas.offsetLeft);
    return lowNote + noteOffset;
  };


  // Calculate the volume.
  SynthPad.calculateVolume = function(posY) {
    let volumeLevel = 1 - (((100 / myCanvas.offsetHeight) * (posY - myCanvas.offsetTop)) / 100);
    return volumeLevel;
  };


  // Fetch the new frequency and volume.
  SynthPad.calculateFrequency = function(x, y) {
    let noteValue = SynthPad.calculateNote(x);
    let volumeValue = SynthPad.calculateVolume(y);

    oscillator.frequency.value = noteValue;
    gainNode.gain.value = volumeValue;

    frequencyLabel.innerHTML = Math.floor(noteValue) + ' Hz';
    volumeLabel.innerHTML = Math.floor(volumeValue * 100) + '%';
  };


  // Update the note frequency.
  SynthPad.updateFrequency = function(event) {
    if (event.type === 'mousedown' || event.type === 'mousemove') {
      SynthPad.calculateFrequency(event.x, event.y);
    } else if (event.type === 'touchstart' || event.type === 'touchmove') {
      let touch = event.touches[0];
      SynthPad.calculateFrequency(touch.pageX, touch.pageY);
    }
  };


  // Export SynthPad.
  return SynthPad;
})();


// Initialize the page.
window.onload = function() {
  let synthPad = new SynthPad();
};
