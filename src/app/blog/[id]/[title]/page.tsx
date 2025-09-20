import Navbar from "@/app/components/Navbar";
import BlogCard from "../../components/BlogCard";

type Props = {
  params: { id: string; title: string };
};

export default function BlogDetail({ params }: Props) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <BlogCard id={params.id} title={params.title} />
      </main>
    </>
  );
}
