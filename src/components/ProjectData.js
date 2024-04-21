
import textEditorImg  from '../media/textEditor.png'
import newsNetwork from '../media/newsNetwork.png'
import fashion4you from '../media/fashion4you.png'
import wheatherapp from '../media/wheatherapp.png'
import um from '../media/user-manage.png'

export const projects = [
    {
        img: textEditorImg,
        name: "Text Editor",
        tech: [
            "React", 
            "JavaScript",
        ],
        link: "https://yashpatel08.github.io/Text-Editor/",
        dec: " Designed a web application with React to assist users in editing text, including features like converting case, removing extra spaces, and counting lines and words.",
        repo: "https://github.com/yashpatel08/Text-Editor",
    },
    {
        img: um,
        name: "User Management System",
        tech: [
            "NextJs", 
            "MongoDB",
            "Vercel" 
        ],
        link: "https://user-mangement-henna.vercel.app/",
        dec: "This website allows you to manage users efficiently. You can perform various operations such as creating, searching, updating, and deleting user information.",
        repo: "https://github.com/yashpatel08/user-mangement",
    },
    {
        img: newsNetwork,
        name: "News Network",
        tech: [
            "React", 
            "API integration" 
        ],
        link: "",
        dec: "News Network is a web application that provides a curated collection of daily news articles from various categories, including Business, Entertainment, General, Health, Science, Sports, and Technology.",
        repo: "https://github.com/yashpatel08/News-Network",
    },
    {
        img: fashion4you,
        name: "Myntra Clone",
        tech: [
            "React", 
            "Node", 
            "Express", 
            "MongoDB", 
            "Stripe" 
        ],
        link: "",
        dec: "Created a MERN stack-based clone of Myntra e-Commerce, encompassing core functionalities like user authentication, product catalog, cart management with Stripe integration, user profile,add favorites",
        repo: "https://github.com/yashpatel08/myntra-clone",
    },{
        img: wheatherapp,
        name: "Wheather app",
        tech: [
            "React",
            "API"
        ],
        link: "https://weather-app-one-puce.vercel.app/",
        dec: "A wheather app created in react using api of open-weather-map and it gives precise updates on temperature, wind speed",
        repo: "https://github.com/yashpatel08/weather-app",
    }
    
]

