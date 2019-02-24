interface Navlink {
    name: string,
    path: string
}

export class Navigation {
    public static loadTopNavigationLinks(): Array<Navlink> {
        return [
            {
                name: "Home",
                path: "/home",
            },
            {
                name: "Projects",
                path: "/projects"
            },
            {
                name: "About me",
                path: "/about-me"
            },
            {
                name: "Blog",
                path: "/blog"
            }
        ]
    }
}