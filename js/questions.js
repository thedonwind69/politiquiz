var questionsArray = [
    {
        subject: 'Economy',
        question: 'How do you think the economy should be handled?',
        answers: [
            {result: 'The economy should be regulated by the government in order to create equal economic opportunity for the most amount of people.',
            party: 'D'},
            {result: 'The economy should be completely free from government intervention in every way, promoting a laissez-faire capitalism type of model.',
            party: 'L'},
            {result: 'The economy operates best with free market capitalism and free enterprise, government is only necessary when restricting things such as labor unions.',
            party: 'R'}
        ]
    }
    ,
    {
        subject: 'Government',
        question: 'How do you feel about the government’s role in the country?',
        answers: [
            {result: 'I favor a government-regulated economy. I favor a largely active role for government in society because I believe it mostly can improve the quality of people’s lives and help people achieve the larger goals of opportunity and equality, in the means of businesses or social issues, I believe the government should be required to be more involved.',
            party: 'D'},
            
            {result: 'I favor government-regulated morality. I favor a smaller government, but not a completely uninvolved government. Big government is wasteful and an obstacle to production in terms of economics and also social issues. Businesses should survive in a free market rather than the government influencing them through regulation. However, government is still very necessary to prohibit unethical or immoral acts such as abortion and the use of certain drugs.',
            party: 'R'},
            
            {result: 'I believe that the government should absolutely not be involved in economic of social decisions. I believe in personal liberty and value it ahead of everything, including business, social issues, drug use, abortion, etc. Government has NO right to tell me what to do with my body, my drugs, my guns, or my business.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Abortion',
        question: 'How do you feel about abortion?',
        answers: [
            {result: 'The woman has a right to choose what she does with her body, and that right should come first before anything. The fetus is not a human life until a certain point in pregnancy, so abortion is ethical because for the reasons of personal liberty and being able to decide for oneself, in which the government has no right to intervene in what a woman does with her body. Therefore, I support abortion.',
            party: 'D'},
            
            {result: 'Abortion is morally wrong and should not be allowed. Life begins at the point of conception, abortion is the forceful termination of a life, or a potential for life. Regardless if the pregnancy occurred as planned or an accident, there is no such thing as an unwanted baby. A woman’s personal liberty shouldn’t be taken into consideration because her decision directly affects the life of another. Therefore, I believe abortion is wrong.',
            party: 'R'},

            {result: 'Whatever a woman wants to do with her body is none of my business, just as long as I do not have to pay for it. With all things, I believe government should not coerce or force me into doing anything, whether is aborting a baby or carrying one.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Economic System',
        question: 'What economic system is best?',
        answers: [
            {result: 'I believe in Democratic version of Socialism, where the economy and means of productin is regulated only in ways that it supports universal healthcare, affordable/free university tuition, and equality in the labor market.',
            party: 'D'},
            
            {result: 'Capitalism and free enterprise is the best economic system. Means of production, especially businesses that create jobs, should not have government intervention in any form, especially by higher taxes.',
            party: 'R'},

            {result: 'A semi-capitalist system will work the best, ultimately though a laissez-faire economic system will operate the best. When you leave government completely out of production, you encourage more innovation from business starters and entrepreneurs.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Taxes',
        question: 'Which tax system do you support?',
        answers: [
            {result: 'I support a progressive tax rate. If you make more money, you should pay more in taxes so that people less fortunate would have a better opportunity and chance to advance, and ultimately I believe that is what makes a more fair society.',
            party: 'D'},
            
            {result: 'I support either a flat tax rate, or cutting taxes for everyone, rich or poor or in the middle. Taxes punish those who produce, and reward those who don`t produce. A smaller government does not need that much revenue from taxes to sustain itself, and ultimately the less taxes, especially for job creators, encourages then to expand which then leads to more jobs for people anyway.',
            party: 'R'},

            {result: 'Government forcing citizens to pay taxes is wrong. If citizens want to pay taxes, they should voluntarily do so in order for certain goods and services in exchange.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Marriage',
        question: 'What are your thoughts on gay marriage?',
        answers: [
            {result: 'I follow the traditional definition of marriage as a union between one man and one woman. This does not come from any form of hate, but instead from the belief that the institution of marriage was set by our founding fathers, and has been defined this way throughout history, and that changing it compromises the sanctity of the institution. With raising a family, having a male and female authority figure is a healthier and more balanced way for a child to grow up.',
            party: 'R'},
            
            {result: 'All couples should be treated equally under the law and given all the same legal benefits that opposite-sex marriages are, therefore gay marriage should be legal in every state as it is a natural human right to be able to marry whoever you want. It`s a matter of liberty and equality, instead of a black-or-white definition of what `marriage` is.',
            party: 'D'},

            {result: 'Whatever gay couples do in their spare time is none of my business and I have no opinion. As long as it does not affect me, I am okay with it.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Gun Control',
        question: 'What are your thoughts on gun control?',
        answers: [
            {result: 'I support people’s rights to defend themselves and to arm themselves. I see it as immoral for government to try to prevent someone from doing so. As far as the current gun issue problem, I believe that stripping people of their right to protect themselves will not solve anything, so like with everything else, the government should stay out of it.',
            party: 'L'},
            
            {result: 'Governmental regulation of firearms is largely unconstitutional and therefore, most gun laws are an infringement on the individual’s rights to bear arms. Gun control does not work as effectively as people think, as areas with the strictest gun laws tend to have high gun crimes ironically. Gun crime is a problem of mental health, a poor culture, and poor decisions, not the guns themselves.',
            party: 'R'},

            {result: 'I wish to see a stricter regulation of firearms, especially assault weapons and any rifle. The right to own firearms is subject to regulation, and I believe that the more guns, and the looser the gun laws, the more gun deaths you get. Other countries that have less guns in the hands of citizens naturally have less gun crime.',
            party: 'D'}
        ]
    }
    ,
    {
        subject: 'Death Penalty',
        question: 'What are your thoughts on the death penalty?',
        answers: [
            {result: 'I do not support it. Human beings are humans, no matter what they did, and killing them doesn`t make anything right.',
            party: 'D'},
            
            {result: 'I support it. If one commits murder, the state definitely has the right to kill that person. That person has given up all your rights as a human when they chose to take the life of another.',
            party: 'R'},

            {result: 'I have no opinion.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Healthcare',
        question: 'What healthcare policy do you support?',
        answers: [
            {result: 'I support a patient-centered health care system, which is based in free markets, encouraging competition and driving health care costs down. Private companies can provide healthcare services more efficiently than government-run programs.',
            party: 'R'},
            
            {result: 'I support universal healthcare and strong government involvement in healthcare, because it is a right not a privilege.',
            party: 'D'},

            {result: 'Healthcare prices would decrease and quality and availability of healthcare would increase if providers were freed from government meddling and control',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Immigration',
        question: 'What immigration policy do you support?',
        answers: [
            {result: 'I support a stricter, stronger border. Amnesty towards those who have broken immigration laws only encourages future immigrants to enter the country illegally rather than legally. Immigrants enrich our country, but they have to come here legally, which is vital to the safety of Americans.',
            party: 'R'},
            
            {result: 'I support a path to citizenship for illegal immigrants, and do not support an extremely strong border to keep immigrants out. Such thing would cost too much and not sustain what America was founded on, which was immigrants.',
            party: 'D'},

            {result: 'If an immigrant seeks to engage in peaceful, voluntary transactions that do not threaten the freedom or security of the citizens, the government should not interfere',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Environment',
        question: 'What do you think about climate change?',
        answers: [
            {result: 'I am skeptical to climate change and think it is mostly a myth, and am against renewable energy sources. I purely seek a balancing of priorities, because the truth is, climate change is happening but no one knows for sure if it is a result of human behavior or not, so I think it is important but not the most important thing.',
            party: 'R'},
            
            {result: 'Climate change is real and a result from human behavior and increased population. I support protecting the environment by reducing the effects of climate change, protecting America’s natural resources, and safeguarding the quality of our air, land, and water for current and future generations.',
            party: 'D'},

            {result: 'I have no current opinion on environment.',
            party: 'L'}
        ]
    }
    ,
    {
        subject: 'Military Spending',
        question: 'What do you think about defense spending?',
        answers: [
            {result: 'I have a non-interventionist foreign policy. I support maintaining a military devoted only to national defense, while shutting down foreign military and economic aid, and believe that military spending is important, but not that important.',
            party: 'L'},
            
            {result: 'I prefer increasing military spending and have a more hard line stance against countries that threaten our national security. Without our security, America ceases to exist as strongly as we do. Therefore, military spending is very important and I strongly support it.',
            party: 'R'},
            
            {result: 'I prefer decreasing military spending and am more reluctant to using military force against countries that we are not sure are a threat to national security. Ultimately I believe that we should be spending more on issues at home such as healthcare.',
            party: 'D'}

        ]
    }

]

const shuffle = (arr) => {
    for (let i=0; i< 1000; i++) {   
        let loc1 = Math.floor(Math.random() * arr.length );
        let loc2 = Math.floor(Math.random() * arr.length );
        let temp = arr[loc1];
        arr[loc1] = arr[loc2];
        arr[loc2] = temp;
    }
   return arr;
}
    
var Questions = shuffle(questionsArray);

export default Questions;