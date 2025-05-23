
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-light text-slate-800 mb-6 tracking-tight">
              Your Project
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Start building something amazing
            </p>
          </div>
          
          <div className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="text-center text-slate-500">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-lg font-light">Ready for your content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
