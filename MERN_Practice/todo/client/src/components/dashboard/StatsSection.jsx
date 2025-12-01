
const StatsSection = () => {
  const stats = [
    { 
      label: 'Students taught', 
      value: '250k+',
      icon: '👨‍🎓',
      color: 'secondary'
    },
    { 
      label: 'Instructors', 
      value: '20+',
      icon: '👨‍🏫',
      color: 'primary'
    },
    { 
      label: 'Youtube Subs.', 
      value: '607K+',
      icon: '📺',
      color: 'accent'
    },
  ];

    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-text-primary">
                {stat.value}
              </div>
              <div className="text-primary text-sm font-medium mt-1">
                {stat.label}
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-sm">
            {stat.description}
          </p>
          <div className="w-full bg-border rounded-full h-1 mt-3">
            <div 
              className="h-1 rounded-full bg-primary transition-all duration-1000"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;