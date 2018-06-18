var descriptions = {
    "Libertarian": 'You believe in one core value: political freedom and autonomy. You don`t believe government should be involved in any decision you make and value individual judgment, skeptical of authority and government power. You believe the economy performs the best in a laissez-faire model in which government does not intervene, and ultimately it is the individual who decides on their political, social, and economic policies.',

    "Republican": "You believe in smaller government, especially in the means of production, support Capitalism and free enterprise. However, you don't think government should be completely uninvolved. You are socially and ethically conservative and believe certain decisions such as abortion to be morally wrong. Also, you believe government should have a more active role in the military and a strong border, for the sole purpose of national security and prosperity.",

    "Democrat": "You believe in a bigger and more active role of government in the economy for the sole purpose of achieving economic equality and universality of goods such as healthcare and education. However, you don't think that government should control everything when it comes to one's social decisions. You are socially liberal and believe that government should not intervene with your marriage choice, or your right to control your body, ultimately for social equality for all.",

    "Free Thinker": "You have equally mixed opinions on all of the most controversial topics and problems that face the country today. Therefore, you can't be put in a box. You have a differing opinion on each topic, some that show conflicting reasoning with others. You must be a free thinker!"
}

var urls = {
    "Libertarian": 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Libertarian_Party_Porcupine_%28USA%29.svg/1200px-Libertarian_Party_Porcupine_%28USA%29.svg.png',
    "Republican": 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/1200px-Republican_Disc.svg.png',
    "Democrat": 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DemocraticLogo.svg/2000px-DemocraticLogo.svg.png',
    "Free Thinker": 'https://i.pinimg.com/736x/82/a4/27/82a42707d118ae520416384cb590721e.jpg'
}

const resultDescription = (result) => {
    var resultObject = {};
    resultObject['party'] = result;
    resultObject['description'] = descriptions[result];
    resultObject['url'] = urls[result];
    return resultObject;
};

export default resultDescription;