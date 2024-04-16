export interface Course {
    _id: string
    title: string
    topic: string
    duration: string
    modality: string
    price: number
    image: string
    access: string[]
    createdBy: {
        _id: string
        name: string
        user_type: string
        email: string
    }
}
