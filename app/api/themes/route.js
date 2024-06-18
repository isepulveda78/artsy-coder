import connectDB from "@/config/database"
import Theme from "@/models/Theme"

export const GET = async () => {
    try {
        await connectDB()

        const theme = await Theme.find({})

        return new Response(JSON.stringify(theme), { status: 200 })

    } catch (error) {

        console.log()

        return new Response('Something went wrong', { status: 500 })
    }    
}

export const POST = async (response) => {
    try {
        await connectDB()

        const { name, description, demo, documentation, features } = await request.json()

        const newTheme = new Theme({
            name,
            description,
            demo,
            documentation,
            features
        })

        await newTheme.save()

        return new Response(JSON.stringify({ message: 'Theme saved'}))

    } catch (error) {
        console.log(error)

        return new Response('Something went wrong', { status: 500 })
    }
}