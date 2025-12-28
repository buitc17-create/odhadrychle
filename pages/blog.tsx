import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
