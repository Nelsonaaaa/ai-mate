export default function Introduction() {
  const features = [
    {
      title: '科学的性格分析',
      description: '基于荣格的心理类型理论，MBTI帮助你了解自己的性格特征',
      icon: '🧠'
    },
    {
      title: '全面的测试报告',
      description: '详细解读你的性格类型，包含职业发展、人际关系等多个维度',
      icon: '📊'
    },
    {
      title: '个人成长指导',
      description: '基于你的性格特点，提供有针对性的成长建议和发展方向',
      icon: '🌱'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          了解MBTI，认识真实的自己
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-purple-50 dark:bg-gray-800"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 