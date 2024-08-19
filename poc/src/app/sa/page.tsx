import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function Page({ params }: { params: { search: string } }) {

    async function upDog(formData: FormData){
        "use server";
        var pkgname = formData.get('title');

        revalidatePath('/searh') // Update cached posts
        redirect(`/search?search=${pkgname}`) // Navigate to the new post page
    }

    return (
        <div>
            <form action={upDog}> 
            <input name="title" type="text" defaultValue={"Enter package name"}/>
            <button type="submit">Search</button>
            </form>   
        </div>
    );


}
