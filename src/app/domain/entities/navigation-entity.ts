export interface Navlink {
    name: string,
    path: string
}

export class Navigation {
    public static loadTopNavigationLinks(): Array<Navlink> {
        return [
            {
                name: "Home",
                path: ""
            },
            {
                name: "Projects",
                path: "projects"
            },
            {
                name: "Contact",
                path: "contact"
            },
            {
                name: "Blog",
                path: "blog"
            }
        ]
    }
}