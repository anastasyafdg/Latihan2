

interface BlogProp {
    params: { id: string; title: string };
  }

  export default function BlogDetail({ params }: BlogProp) {
    return <h1>Detail Blog dengan ID: {params.id}</h1>;
  }