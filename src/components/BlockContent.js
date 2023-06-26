import BlockContent from "@sanity/block-content-to-react"


export default function BlockText({ blocks }) {
  return (
    <BlockContent blocks={blocks}
                projectId="jw5kec04"
                dataset="production"
                />
  )
}