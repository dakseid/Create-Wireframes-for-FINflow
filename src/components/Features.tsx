import { Card, CardContent } from "./ui/card";
import { 
  PieChart, 
  Target, 
  Shield, 
  Smartphone,
  TrendingUp,
  Bell
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Smart Budget Tracking",
    description: "Automatically categorize expenses and track your spending patterns with intelligent insights."
  },
  {
    icon: Target,
    title: "Savings Goals",
    description: "Set and achieve your financial goals with visual progress tracking and milestone celebrations."
  },
  {
    icon: TrendingUp,
    title: "Investment Insights",
    description: "Get personalized recommendations and track your investment portfolio performance."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with 256-bit encryption and advanced security measures."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your finances anywhere with our responsive design and mobile-optimized experience."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay on top of bills, budgets, and goals with intelligent alerts and reminders."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Everything you need to master your finances
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finflow provides all the tools you need to take control of your financial life, 
            from budgeting to saving to investing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}