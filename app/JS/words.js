const randomWords = [
  {
    word: "apple",
  },
  { word: "brave", },
  {
    word: "clamp",
  },
  {
    word: "drift",
  },
  {
    word: "enjoy",
  },
  {
    word: "flame",
  },
  {
    word: "glove",

  },
  {
    word: "hatch",

  },
  {
    word: "index",

  },
  { word: "jolly", },
  { word: "kneel", },
  {
    word: "lapse",

  },
  {
    word: "mango",

  },
  {
    word: "nesty",

  },
  {
    word: "openy",
    definition: "Having or showing a willingness to be open or accessible.",
  },
  { word: "pearl", definition: "A smooth, rounded gem formed inside a shell." },
  { word: "quizy", definition: "Relating to a quiz or test." },
  { word: "rafty", definition: "Made of or resembling a raft." },
  { word: "stomp", definition: "To step heavily or forcefully." },
  {
    word: "tiger",
    definition: "A large carnivorous cat with orange fur and black stripes.",
  },
  { word: "urgey", definition: "To strongly encourage or push for something." },
  {
    word: "vapor",
    definition: "A gaseous substance that is formed from a liquid or solid.",
  },
  { word: "whale", definition: "A large marine mammal." },
  { word: "yacht", definition: "A large, luxurious boat or ship." },
  {
    word: "zesty",
    definition: "Having a strong, pleasant, and piquant flavor.",
  },
  {
    word: "align",
    definition: "To arrange things in a straight line or proper order.",
  },
  { word: "blaze", definition: "A large, bright flame or fire." },
  { word: "candy", definition: "A sweet food made from sugar or syrup." },
  {
    word: "drove",
    definition: "A large group of animals or people moving together.",
  },
  {
    word: "echoe",
    definition: "A sound that is reflected off a surface and heard again.",
  },
  {
    word: "frown",
    definition:
      "To make an unhappy or displeased expression by moving the eyebrows.",
  },
  {
    word: "gains",
    definition: "An increase in something, typically wealth or strength.",
  },
  { word: "heaty", definition: "Something that produces or gives off heat." },
  {
    word: "ideal",
    definition: "Satisfying one's conception of what is perfect.",
  },
  { word: "jumpy", definition: "Nervous or easily startled." },
  {
    word: "kites",
    definition:
      "A light framework covered with paper or cloth, flown in the wind.",
  },
  { word: "lucky", definition: "Having good fortune or favorable outcomes." },
  { word: "mirth", definition: "Great joy, amusement, or happiness." },
  { word: "noble", definition: "Having high moral qualities or honor." },
  {
    word: "ocean",
    definition:
      "A large body of saltwater that covers most of the Earth's surface.",
  },
  { word: "plaza", definition: "A public square or open area in a city." },
  {
    word: "quilt",
    definition:
      "A warm bed covering made by stitching together layers of fabric.",
  },
  { word: "roley", definition: "To move by rolling." },
  {
    word: "softy",
    definition: "A person who is emotionally sensitive or easy to affect.",
  },
  { word: "turny", definition: "Full of turns or twists." },
  { word: "under", definition: "In or to a lower position." },
  { word: "vogue", definition: "The prevailing fashion or style." },
  { word: "whisk", definition: "To stir or beat with a quick, light motion." },
  {
    word: "xandy",
    definition: "A playful name or term without a specific meaning.",
  },
  { word: "zoned", definition: "To be in a particular state or condition." },
  {
    word: "alpha",
    definition:
      "The first letter of the Greek alphabet, symbolizing the beginning.",
  },
  { word: "blaze", definition: "A large, bright flame or fire." },
  { word: "chaty", definition: "Prone to chatting or talking frequently." },
  { word: "dusty", definition: "Covered with or full of dust." },
  {
    word: "elbow",
    definition: "The joint between the upper arm and the forearm.",
  },
  {
    word: "flick",
    definition: "To strike or toss something with a quick, light motion.",
  },
  { word: "gifts", definition: "Something given voluntarily." },
  { word: "harsh", definition: "Rough or unpleasant in sound or texture." },
  {
    word: "jelly",
    definition: "A sweet, gelatinous food made from fruit juice and sugar.",
  },
  { word: "kider", definition: "An informal or regional term for a child." },
  {
    word: "longy",
    definition: "A term for something or someone that is long.",
  },
  {
    word: "milks",
    definition:
      "To extract white liquid produced by mammals as nourishment for their young.",
  },
  { word: "neary", definition: "In close proximity or near." },
  {
    word: "ossed",
    definition: "The past tense of 'ossify', meaning to become rigid or set.",
  },
  { word: "painy", definition: "Having the characteristics of pain." },
  { word: "quick", definition: "Moving or acting with speed." },
  { word: "rowey", definition: "Pertaining to a row or sequence." },
  {
    word: "shaly",
    definition:
      "Consisting of or resembling shale, a type of sedimentary rock.",
  },
  {
    word: "token",
    definition: "A thing serving as a symbol or reminder of something.",
  },
  {
    word: "piano",
    definition: "A large musical instrument with black and white keys.",
  },
  { word: "ringy", definition: "Having a ringing or resonant sound." },
  { word: "skirt", definition: "A woman's garment that hangs from the waist." },
  { word: "tipsy", definition: "Slightly drunk or lightheaded from alcohol." },
  {
    word: "useme",
    definition: "A playful phrase meaning 'to be used or employed'.",
  },
  {
    word: "vowel",
    definition:
      "A speech sound that is produced without blocking the flow of air.",
  },
  { word: "woody", definition: "Made of or resembling wood." },
  { word: "yummy", definition: "Delicious or tasty." },
  {
    word: "zorro",
    definition:
      "A fictional character known for his skill in swordsmanship and disguises.",
  },
  {
    word: "align",
    definition: "To arrange things in a straight line or proper order.",
  },
  { word: "furry", definition: "Covered in fur or resembling fur." },
  {
    word: "flute",
    definition:
      "A musical instrument that is played by blowing air through a tube.",
  },
  {
    word: "gavel",
    definition: "A small hammer used by a judge to call for order in court.",
  },
  { word: "heary", definition: "Related to hearing or sound." },
  {
    word: "upset",
    definition:
      "To disturb or overturn something; feeling unhappy or distressed.",
  },
  {
    word: "gifts",
    definition: "Presents or things given to others as a gesture of kindness.",
  },
  { word: "jumpy", definition: "Nervous or easily startled." },
  {
    word: "whimp",
    definition: "A person who is easily frightened or lacks courage.",
  },
  {
    word: "hosty",
    definition:
      "A term referring to something related to a host or hospitality.",
  },
  {
    word: "maple",
    definition:
      "A type of tree known for its distinctive leaves and sweet sap.",
  },
  {
    word: "trick",
    definition:
      "A cunning or deceitful action designed to fool or surprise someone.",
  },
  {
    word: "stark",
    definition: "Severe or extreme in appearance or condition.",
  },
  { word: "value", definition: "The worth or importance of something." },
  { word: "mound", definition: "A small hill or raised area of ground." },
  { word: "david", definition: "A common male name." },
  { word: "pills", definition: "Small, solid doses of medication." },
  { word: "toler", definition: "To allow or endure something." },
  {
    word: "dazed",
    definition: "Confused or stunned, especially from a blow or shock.",
  },
  { word: "fiery", definition: "Consisting of fire or resembling flames." },
  {
    word: "glory",
    definition:
      "Great honor or admiration achieved through action or accomplishment.",
  },
  { word: "hinty", definition: "Giving a subtle clue or indication." },
  { word: "peach", definition: "A sweet, juicy fruit with a fuzzy skin." },
  {
    word: "jinks",
    definition: "Tricks or pranks that are mischievous in nature.",
  },
  { word: "brisk", definition: "Quick, energetic, and lively." },
  {
    word: "green",
    definition: "A color associated with grass, leaves, and nature.",
  },
  {
    word: "judge",
    definition: "A person who makes decisions in a court of law.",
  },
  {
    word: "liver",
    definition:
      "A large organ in the body responsible for processing nutrients and detoxifying.",
  },
  {
    word: "melon",
    definition: "A large fruit with a smooth rind and sweet, juicy flesh.",
  },
  { word: "oddly", definition: "In an unusual or peculiar manner." },
  {
    word: "needy",
    definition: "Lacking basic necessities or being dependent on others.",
  },
  { word: "great", },
  { word: "plumb", },
  { word: "risky", },
  { word: "windy", },
];
export { randomWords };
