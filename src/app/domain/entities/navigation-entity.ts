export interface Navlink {
    name: string,
    path: string
}

export class Navigation {
    public static loadTopNavigationLinks(): Array<Navlink> {
        return [
            {
                name: "Conóceme",
                path: "/"
            },
            {
                name: "Proyectos",
                path: "/projects"
            }
        ]
    }
}