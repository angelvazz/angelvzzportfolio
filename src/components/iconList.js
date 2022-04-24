import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiRedux, SiMaterialui, SiJsonwebtokens, SiExpress, SiMongodb, SiGit, SiAmazondynamodb } from 'react-icons/si'
import { FaReact, FaBootstrap, FaNode, FaAws, FaGithub } from 'react-icons/fa'
import { MdNoEncryptionGmailerrorred } from 'react-icons/md'

export const front = [
    {
        name: "HTML",
        icon: <ImHtmlFive />
    },
    {
        name: "CSS",
        icon: <IoLogoCss3 />
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />
    },
    {
        name: "React Js",
        icon: <FaReact />
    },
    {
        name: "Redux",
        icon: <SiRedux />
    },
    {
        name: "BootStrap",
        icon: <FaBootstrap />
    },
    {
        name: "Material UI",
        icon: <SiMaterialui />
    }]
export const back = [
    {
        name: "JWT",
        icon: <SiJsonwebtokens />
    }, {
        name: "Bcrypt",
        icon: <MdNoEncryptionGmailerrorred />
    }, {
        name: "Express Js",
        icon: <SiExpress />
    }, {
        name: "Node Js",
        icon: <FaNode />
    }, {
        name: "Git",
        icon: <SiGit />
    }]
export const db = [{
    name: "MongoDB",
    icon: <SiMongodb />
}, {
    name: "DynamoDB",
    icon: <SiAmazondynamodb />
}]
export const cloud = [{
    name: "AWS",
    icon: <FaAws />
}, {
    name: "GitHub",
    icon: <FaGithub />
}]