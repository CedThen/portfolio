import sheaves from './assets/sheavesResized.gif';
import phonePrev from './assets/phonePrev.png';
import jspScreenshot from './assets/jspScreenshotResized.png'
import twitchChat from './assets/twcGames.gif'
import ProfPic from './assets/profPic.jpg'

export const data = [
  {
    title: 'Jsp Rune Prices',
    description: "Searching through individual forum posts to figure out an item's price can be very tiresome.",
    description2: 'Jsp Rune Prices collects this information once an hour and displays it in stock-ticker format, making this information much easier to consume while providing historical context on price fluctuations',
    github: 'https://github.com/CedThen/jspRunePrices',
    graphic: jspScreenshot,
    link: 'https://jspscraper.herokuapp.com',
    stack: 'MongoDB, Express, React, Node, Mongoose, ChakraUI, ChartJs, BeautifulSoup'
  },
  {
    title: 'Sheaves',
    description: 'Sheaves is designed to streamline the process of building schedules and assigning duties.',
    description2: 'Users can assign workers to specific roles and schedule them based on their roles. Workers will be notified when new assignments are published.',
    github: 'https://github.com/House-on-a-Rock/tjc-scheduling-app',
    graphic: sheaves,
    link: null,
    stack: 'React, PostgresDB, Node, Express, Sequelize, Axios, Material-UI, React-query',
  },
  {
    title: 'Sheaves mobile',
    description: 'The companion mobile app to Sheaves. Workers can view their assignments and be notified when their assignment date approaches.',
    description2: 'Workers can request to trade duties with other workers, which will notify managers using Sheaves.',
    github: 'https://github.com/House-on-a-Rock/tjc-scheduling-mobile',
    graphic: phonePrev,
    link: null,
    stack: 'React-Native, React-Native Reanimated, Expo, Redux, UI-kitten'
  },
  {
    title: 'StreamChatGames',
    description: 'Streamers have difficult jobs! This app offers streamers another way to entertain and interact with their audience.',
    description2: 'Users can enter their twitch stream, and the app will retrieve twitch chat inputs. Text games such as madlibs can then be played with audience input!',
    github: 'https://github.com/CedThen/StreamChatGames',
    graphic: twitchChat,
    link: null,
    stack: 'React, Node, Express, Websockets'
  },
];

export const AboutMeContent = {
  p1: "I've always loved computers, and decided during the covid pandemic to change my career path and to pursue web development.",
  p2: '',
  p3: "Thankfully, I had a good friend who did go through a more formal"
}

export const graphics = [sheaves, phonePrev, jspScreenshot, twitchChat, ProfPic]