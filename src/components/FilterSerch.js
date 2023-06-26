import PostCards from "../components/PostCards"

export default function FilterSearch({ event, search }) {
  const inputData = event?.filter((post) =>
  post.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {inputData?.length > 0 ? inputData
      .sort((a,b) => a.publishedAt < b.publishedAt ? 1 : -1)
      .map((element) => {
        const { title, slug, publishedAt, mainImage, _id, id } = element
        return <PostCards key={!id?_id : id} title={title} slug={slug} publishedAt={publishedAt} mainImage={mainImage} />
      }) : <p className="text-lg ml-9">No Match</p>}
    </div>
  )
}