import connectDB from "@/config/database"
import Documenation from "@/models/Documentation"

//Get /api/documentation
export const GET = async () => {
    try {

    await connectDB()
    const documentation = await Documenation.find({})
    return new Response(JSON.stringify(documentation), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 })
    }
}

//Post /api/documentation
export const POST = async (request) => {
    try {
        const { theme, pageText } = await request.json()

        const newPageText = new Documentation({
            theme,
            pageText
        })

        await newPageText.save()
        return new Response(JSON.stringify({ message: 'Documenation saved'}, { status: 200}))

    } catch (error) {

        console.log(error)
        return new Response('Something went wrong', { status: 500 })

    }
}