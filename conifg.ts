
export const NEXT_PUBLIC_SERVICE_ID="service_iobuoih";
export const  NEXT_PUBLIC_TEMPLATE_ID="template_7s6ocno";
export const NEXT_PUBLIC_PUBLIC_KEY="H0uSpMacNAFhSdszk"

interface ProjectDetailstype {
  id:number;
  title: string;
  description: string;
  href:string;
  projecttitle:string;
  bgurl:string,
  Techstack:string[]
}

export const ProjectDetails: ProjectDetailstype[] = [
  {
    id:1,
    title: "AAIDO: Advanced AI Document Optimizer",
    description: ` Problem Statement
    Managing vast repositories of physical and digital documents is a Herculean task for organizations, often leading to inefficiencies in accessing crucial information. Extracting insights from these troves and capturing knowledge from meetings further exacerbates the challenge, demanding time and resources.
    
    🛠️ Solution: AAIDO
    Enter AAIDO, the avant-garde solution to these dilemmas. Harnessing the prowess of Artificial Intelligence (AI) and cutting-edge data processing techniques, AAIDO revolutionizes document digitization, database searchability, and meeting knowledge capture.
    
    ✨ Features
    📄 Automating & Digitizing Physical Files:
    Employs Optical Character Recognition (OCR) for rapid digitization.
    Elevates document searchability and organization to unparalleled heights.
    Enables lightning-fast retrieval of specific information, saving invaluable time.
    🧠 AI-powered Database Querying with Advanced Question-Answering:
    Extracts profound insights from organizational databases.
    Streamlines data management processes with unparalleled efficiency.
    Enhances decision-making and productivity through advanced question-answering capabilities.
    🌐 Meeting Knowledge Capture Extension:
    Empowers users with advanced search functionalities across diverse file formats.
    
    Supports audio, image, text, presentation, PDF, and more.
    
    Provides concise summaries for enhanced accessibility and productivity.
    
    Seamlessly captures knowledge from audio sources, including meetings.
    
    Transforms meeting audio into text using cutting-edge AI algorithms.
    
    Facilitates effortless search and retrieval of vital meeting information.
    
    💡 AI-driven Question-Answering and Intelligent File Retrieval:
    AAIDO AI can answer queries based on the data it contains, facilitating rapid decision-making and problem-solving.
    Users can retrieve files of various formats, including PDFs and audio, by querying content or keywords present within them, enhancing accessibility and efficiency.
    🛠️ Components
    AiDo_Extension
    Chrome extension for effortless audio capture from meetings.
    Sends captured audio data to Node-Audio-getter for further processing.
    Node-Audio-getter
    Utilizes Python and Node.js for swift audio-to-text conversion.
    Harnesses the power of "fast whisper" algorithms for rapid data transformation.
    Routes processed text data to Python_LLM for advanced analysis.
    Python_LLM
    Implements sophisticated language chain, chromadb, and Ragsearch algorithms.
    Enables deep text analysis and search capabilities, unlocking invaluable insights.`,
        href:"https://github.com/ayushishu/AiDo",
        projecttitle:"AAIDO",
        bgurl:"/Openup.png",
        Techstack:["ChromaDB", "NodeJS", "EJS", "Express", "FastAPI", "Langchain", "Docker", "GeminiAI","Daisy UI"]
  },
  
  {
    id:2,
    title: "FileX",
    description: `Many Private and Government Organisations are facing a huge problem of Managing the files securely without leaking any sensitive information of the user, citizens and patients. It is a very difficult task for them as the tools available in the market like google drive, onedrive are saving the data in their clouds which is often unwanted by the organizations regarding the concern of security breach. Also after uploading a certain amount of files, these services ask for a certain amount of money to continue with their services which make them unaccessable for small Organizations. This project thus solve the problem of many organizations like educational and health institutes providing free file management and search optimization feature even from images totally offline thus providing 'In Home personal use' feature.

    This tool helps us to retrieve textual data from thousands of documents. This idea is not restricted to files only; we can also extract textual content from the images uploaded to this tool. The search engine will help us search for data inside files like pdfs, doc files, CSV files, jpeg files, etc. It will help to maintain and organize the files and ease searching within the files. In this way, we do not have to manually search every file for the specific text that we want.`,
href:"https://devfolio.co/projects/filex-4369",
projecttitle:"FileX",
bgurl:"/Portfolio.png",
Techstack:["NodeJS","Javascript","Docker","ElasticSearch","Kibana","RabbitMQ"]

  },
//   {
//     id:3,
//     title: "TransactEase",
//     description: `Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
// user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
// implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS.`,
// href:"https://payment-application.vercel.app/",
// projecttitle:"TransactEase",
// bgurl:"/Paytm.png",
// Techstack:["Mongodb", "Express", "React", "Node", "JavaScript", "Jwt", "TailwindCSS","Recoil"]


//   },
//   {
//     id:4,
//     title: "HarmonyHub",
//     description: `Led the development of a real-time chat application using MongoDB, Express, React, Node.js, Socket.io, Zod, and JWT authentication. Orchestrated the implementation of features enabling instantaneous messaging, supported by responsive design (TailwindCSS, Daisy UI), and efficient state management (Recoil). This ensured cohesive integration of technologies, optimal performance, and a user-centric experience.`,
// href:"https://github.com/Rahulsoni9321/HarmonyHub",
// projecttitle:"HarmonyHub",
// bgurl:"/HarmonyHub.jpg",
// Techstack:["Mongodb", "Express", "React", "Node","Socket.io", "JavaScript", "Jwt", "TailwindCSS","Recoil","Daisy UI"]

//   },
];

