import {allmovies} from "./allmovies";

const reviews = [
	{
		id: 1,
		name: 'Ayo Edebiri',
		comment:
			"I never got into Kid n Play back in the day. I don't even know if I know any of their songs. I recognize Kid because of his hair but I wouldn't know Play if he walked right up to me. So I never had any interest in watching this. Turns out I should've given it a chance earlier. This was fun, but also had a little bit more to it. Everything was played silly but it dealt with real problems at times. And it actually is chock full of actors that I know and/or like. I didn't know Martin Lawrence is in this. I didn't know about the George Clinton cameo. I like Tisha Campbell, A.J. Johnson, and Kelly Jo Minter. Not to mention Daryl \"Chill\" Mitchell, playing Chill. So that's all cool. And I laughed a decent amount. Especially when things went ridiculous. And there's a dance battle. And a rap battle. And I Shazamed a bunch of songs.",
		stars: 5,
		movie: allmovies[0].name,
		image: '/assets/users/user1.jpg',
	},
	{
		id: 2,
		name: 'KYK',
		comment:
			'People have been comparing this to Ashby but played a lot more to me like a nice, cozy throwback to those sentimental 90s boarding school dramedies, one that Payne does a good job of applying some old-school 70s style to (lots of zooms and wipes) and finding a few of those bitter and wounded off-beat notes he likes to in between the formula ones a movie like this needs to hit. Great depressed, snowy holiday Massachusetts vibes, and Paul Giamatti... What needs to be said? The dude is the goat. The script Payne is working with here has him in a far less mean register than something like Sideways (Dead Poets Society/Good Will Hunting-era Robin Williams might\'ve been asked to do this role if it came out around then) but any movie that allows me to spend this much time with him in sweaters.',
		stars: 2,
		movie: allmovies[1].name,
		image: '/assets/users/user2.jpg',
	},
	{
		id: 3,
		name: 'Colin the dude',
		comment: 'The exorcism subgenre doesn\'t need just a makeover, but reconstructive surgery. I feel like the same demon keeps possessing every one of these allmovies and therefore they all have the same personality. A copy of a copy of a copy of a copy. The SAG strike needs to carve out some space for a wider pool of demon representation. I want to meet a demon who doesn\'t growl for two hours and speaks with the intellect of a Hannibal Lector or something. Give me something new.',
		stars: 3,
		movie: allmovies[3].name,
		image: '/assets/users/user3.png',
	},
	{
		id: 4,
		name: 'Todd',
		comment: 'I\'ve talked a lot about this film so this time I\'ll say something short. Fuck the haters, this production and direction on this film is lightning in a bottle and the movie looks beautiful.',
		stars: 5,
		movie: allmovies[4].name,
		image: '/assets/users/user4.jpg',
	},
	{
		id: 5,
		name: 'Ashley',
		comment: 'I\'ve talked a lot about this film so this time I\'ll say something short. Fuck the haters, this production and direction on this film is lightning in a bottle and the movie looks beautiful.',
		stars: 4,
		movie: allmovies[5].name,
		image: '/assets/users/user5.png',
	}
];

export default reviews;

