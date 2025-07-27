import { Portofolio } from "@/types/project";

export const dataProjects: Portofolio[] = [
    {
        id: 0,
        title: "Cart Craze",
        type: "project",
        description: "Cart Craze is a web application that allows users to manage their shopping cart and checkout process.",
        imageUrl: "/projects/cart_craze.png",
        techStack: [0, 3, 4, 17],
        urlDeployment: "https://ecommerce-cart-craze.vercel.app/",
        urlRepository: "https://github.com/arthagp/ecommerce-CartCraze"
    },
    {
        id: 1,
        title: "Splasher",
        type: "project",
        description: "Splasher is a web application that allows users to manage their photos and the other user can like to each other photos.",
        imageUrl: "/projects/splasher.png",
        techStack: [1, 2, 3, 4, 5],
        // urlDeployment: "https://splasher.vercel.app/",
        urlRepository: "https://github.com/arthagp/client-side-image-sharing-app",
        urlRepoServerSide: "https://github.com/arthagp/server-side-image-sharing-app"
    },
    {
        id: 2,
        title: "Quizzer",
        type: "project",
        description: "Quizzer is a web application that allows users to create and share quizzes.",
        imageUrl: "/projects/quizzer.png",
        techStack: [1, 2, 3, 4, 5],
        // urlDeployment: "https://quizzer-frontend.vercel.app/",
        urlRepository: "https://github.com/arthagp/client-side-quizz",
        urlRepoServerSide: "https://github.com/arthagp/server-side-quiz"
    }
]