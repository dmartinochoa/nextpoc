import React from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { permanentRedirect } from 'next/navigation'

const SeachForm = () => {
    async function upDog(formData: FormData){
        "use server";
        var pkgname = formData.get('title');
        //revalidatePath('/searh') // Update cached posts
        permanentRedirect(`/search?search=${pkgname}`) 
    }

  return (
    <div>
    <form action={upDog}> 
    <input name="title" type="text" defaultValue={"Enter package name"}/>
    <button type="submit">Search</button>
    </form>   
</div>  )
}

export default SeachForm