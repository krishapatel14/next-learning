export default function BlogDetail({params}){
    return(
        <main>
            {params.slug.map((s1)=>{
                return(<h1>{s1}</h1>)
            })}
        </main>
    )
}