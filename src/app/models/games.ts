export interface Games {
    id: string,
    name: string,
    box_art_url: string
}

export interface GameResponse{
    data: Array<Games>
}