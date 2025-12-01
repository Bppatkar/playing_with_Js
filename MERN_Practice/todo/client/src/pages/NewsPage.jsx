import NewsSection from '../components/dashboard/NewsSection';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Latest News
          </h1>
          <p className="text-text-secondary">
            Stay updated with the latest headlines
          </p>
        </div>
        <NewsSection expanded={true} />
      </div>
    </div>
  );
};

export default NewsPage;
