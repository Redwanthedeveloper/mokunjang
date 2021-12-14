import { SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si';
import { GiSailboat } from 'react-icons/gi';
import { SiDiscord, SiTwitter } from 'react-icons/si';
import team1 from '../images/team/1.png';
import team2 from '../images/team/2.png';
import team3 from '../images/team/3.png';

export const bannerImages = {
  bannerImg: '',
  bigImage: '',
  animatedImage: '',
  leftColumn: 'https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg',
};
export const buyAnApeText = {
  titleText: 'Title',
  middleText: 'Middle',
  buttonText: 'Click Me',
};
export const roadMapSubtitleText = '';
export const joinTheCommunity = {
  subtitleText:
    'Join the Discord and follow us on Twitter for more information, our latest news and announcements.',
  icons: [
    { href: '1', Icon: <SiTwitter /> },
    { href: '2', Icon: <SiDiscord /> },
  ],
};
export const smartContactAdress = {
  text: '0x827acb09a2dc20e39c9aad7f7190d9bc53534192',
  href: 'https://polygonscan.com/token/0x827acb09a2dc20e39c9aad7f7190d9bc53534192',
};

export const menuLinks = [
  { href: '#', iconClass: 'menuLinks', text: 'Mint', Icon: '' },
  { href: '#about', iconClass: 'menuLinks', text: 'About', Icon: '' },
  { href: '#roadmap', iconClass: 'menuLinks', text: 'Roadmap', Icon: '' },
  { href: '#faq', iconClass: 'menuLinks', text: 'Faq', Icon: '' },
  { href: '#ourTeam', iconClass: 'menuLinks', text: 'Team', Icon: '' },
  { href: '#', iconClass: 'icons', text: '', Icon: <SiTwitter /> },
  { href: '#', iconClass: 'discordIcon', text: '', Icon: <SiDiscord /> },
];
//If you want to add or remove a question then you have to modify this array
export const frequentlyAskedQuestionsArray = [
  { title: 'Title 1', text: 'Text 1', id: 1 },
  { title: 'Title 2', text: 'Text 2', id: 2 },
  { title: 'Title 3', text: 'Text 3', id: 3 },
  { title: 'Title 4', text: 'Text 3', id: 4 },
  { title: 'Title 5', text: 'Text 3', id: 5 },
  { title: 'Title 6', text: 'Text 3', id: 6 },
];
//If you want to add or remove a road map goal then you have to modify this array
export const roadMapGoalsArray = [
  {
    percentage: 25,
    isDone: true,
    text: '10,00 NFT will be accessible altogether, split between the pre-sale and public sale. NFT not redeemed in the pre-sale will be sent into the public sale. All NFT has characteristics and traits will be created randomly and uncovered later the public sale.',
  },
  {
    percentage: 50,
    isDone: true,
    text: `Don't give up so early if you missed the premint- Follow our Twitter and Discord for next public minting information. There will be another chance for you to become a Toadler! `,
  },
  {
    percentage: 75,
    isDone: true,
    text: '75% completed minting will be donated to charities. ',
  },
  {
    percentage: 100,
    isDone: true,
    text: 'For the first 10,000 Toadlers from our first project will automatically be whitelisted for our future project.',
  },
];

export const ourTeamSubtitle = '';
export const teamArray = [
  {
    title: 'Dr.toadler',
    subtitle: '',
    icons: [],
    picture: team1,
  },
  {
    title: 'Baby.toadler',
    subtitle: '',
    icons: [],
    picture: team2,
  },
  {
    title: 'Nerd.toadler',
    subtitle: '',
    icons: [],
    picture: team3,
  },
];

export const footerTermsOfService = {
  topText: 'Terms & Conditions',
  bottomText: '© 2021',
  href: '1',
};
export const footerLogoUrl = '';
export const footerIcons = [
  { href: '1', Icon: <SiYoutube /> },
  { href: '2', Icon: <SiTwitter /> },
  { href: '3', Icon: <SiInstagram /> },
  { href: '4', Icon: <SiDiscord /> },
];
