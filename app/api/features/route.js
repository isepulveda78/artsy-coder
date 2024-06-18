import connectDB from "@/config/database"
import Feature from "@/models/Feature"


//Get /api/features
export const GET = async () => {
    try {
        await connectDB()

        const feature = await Feature.find({})
        return new Response(JSON.stringify(feature), { status: 200 })

    } catch (error) {

        console.log(error)
        return new Response('Something went wrong', { status: 500 })

    }
}

//POST /api/features
export const POST = async (request) => {
    try {
        const { name } = await request.json()

        const newFeature = new Feature({
            name
        })

        await newFeature.save()
        
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 })
    }
}