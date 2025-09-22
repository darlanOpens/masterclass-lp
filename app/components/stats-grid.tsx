export function StatsGrid() {
  const stats = [
    {
      value: "98%",
      label: "Faster time to market",
      description: "com método ELG",
      company: "E-commerce",
    },
    {
      value: "300%",
      label: "Increase in conversions",
      description: "na Black Friday",
      company: "Retail",
    },
    {
      value: "6x",
      label: "Faster to build + deploy",
      description: "estratégias C.R.E.",
      company: "SaaS",
    },
    {
      value: "20 dias",
      label: "Saved on implementation",
      description: "tempo médio",
      company: "Marketplace",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-hover group"
            >
              <div className="space-y-4">
                <div className="text-4xl font-bold text-white group-hover:text-[#db3425] transition-colors">
                  {stat.value}
                </div>
                <div>
                  <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
                <div className="text-xs font-medium text-[#db3425] uppercase tracking-wider">{stat.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
